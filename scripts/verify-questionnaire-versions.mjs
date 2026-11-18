import assert from "node:assert/strict";
import { randomBytes } from "node:crypto";
import { spawnSync } from "node:child_process";
import { ConvexHttpClient } from "convex/browser";
import { makeFunctionReference } from "convex/server";
import { completeFixture } from "./onboarding-fixture.mjs";
import { createQuestionnaire } from "../lib/onboarding/engine.ts";
import { addTopic, replaceQuestion, removeQuestion } from "../../admin/lib/questionnaire/editor-model.ts";

const url = process.env.NEXT_PUBLIC_CONVEX_URL;
const site = process.env.NEXT_PUBLIC_CONVEX_SITE_URL;
const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
assert.equal(new URL(url).origin, "http://127.0.0.1:3220", "This suite changes only the local client backend.");
assert.ok(["localhost", "127.0.0.1"].includes(new URL(site).hostname));
assert.ok(/^anonymous:/.test(process.env.CONVEX_DEPLOYMENT ?? "") || (process.env.QUESTIONNAIRE_TEST_ENV_FILE && process.env.CONVEX_SELF_HOSTED_URL === "http://127.0.0.1:3220"), "Use only the anonymous local fixture backend.");
assert.ok(process.env.QUESTIONNAIRE_ADMIN_TOKEN?.length >= 32);
const actor = `questionnaire-test-${randomBytes(8).toString("hex")}`;
const clients = [];
let originalVersion;
let originalAdminEmails;
let adminAllowlistChanged = false;
let fixtureAdmin;
const ref = name => makeFunctionReference(`onboarding:${name}`);
const anonymous = new ConvexHttpClient(url);
const answered = value => ({ state: "answered", value });
function cli(args, allowMissing = false) {
  const result = spawnSync("bunx", ["convex", ...args, ...(process.env.QUESTIONNAIRE_TEST_ENV_FILE ? ["--env-file", process.env.QUESTIONNAIRE_TEST_ENV_FILE] : [])], { encoding: "utf8" });
  if (allowMissing && /not found|not set|does not exist/.test(result.stderr)) return undefined;
  assert.equal(result.status, 0, `Local Convex fixture operation failed: ${args[0]}`);
  if (args[0] === "env") return result.stdout.trim();
  return result.stdout.trim() ? JSON.parse(result.stdout) : null;
}
async function admin(operation, data = {}, valid = true) {
  const response = await fetch(`${site}/questionnaire-admin`, { method: "POST", headers: { "content-type": "application/json", ...(valid ? { authorization: `Bearer ${process.env.QUESTIONNAIRE_ADMIN_TOKEN}` } : {}) }, body: JSON.stringify({ ...data, actor, operation }) });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error ?? "Questionnaire request failed");
  return result;
}
async function rejectedAdmin(operation, data = {}) {
  await assert.rejects(() => admin(operation, data));
}
async function authRequest(client, path, body) {
  const headers = { origin, cookie: [...client.cookies].map(([key, value]) => `${key}=${value}`).join("; ") };
  if (body) headers["content-type"] = "application/json";
  const response = await fetch(`${process.env.QUESTIONNAIRE_TEST_AUTH_ORIGIN ?? origin}${path}`, { method: body ? "POST" : "GET", headers, redirect: "manual", body: body ? JSON.stringify(body) : undefined });
  for (const cookie of response.headers.getSetCookie()) { const pair = cookie.split(";", 1)[0], index = pair.indexOf("="); if (pair.slice(index + 1)) client.cookies.set(pair.slice(0, index), pair.slice(index + 1)); else client.cookies.delete(pair.slice(0, index)); }
  return response;
}
async function createClient() {
  const client = { email: `onboarding-smoke-${randomBytes(8).toString("hex")}@example.test`, name: "Questionnaire Fixture", cookies: new Map(), convex: new ConvexHttpClient(url), userId: null };
  clients.push(client);
  const response = await authRequest(client, "/api/auth/sign-up/email", { email: client.email, name: client.name, password: randomBytes(24).toString("base64url") });
  assert.equal(response.status, 200);
  client.userId = (await response.json()).user.id;
  client.convex.setAuth((await (await authRequest(client, "/api/auth/convex/token")).json()).token);
  return client;
}
async function createAdmin() {
  const fixture = { email: `onboarding-smoke-${randomBytes(8).toString("hex")}@example.test`, name: "Dashboard Fixture", username: `fixture_${randomBytes(8).toString("hex")}`, password: randomBytes(24).toString("base64url"), cookies: new Map(), convex: new ConvexHttpClient(url), userId: null };
  clients.push(fixture);
  originalAdminEmails = cli(["env", "get", "ADMIN_EMAILS"], true);
  cli(["env", "set", "ADMIN_EMAILS", [originalAdminEmails, fixture.email].filter(Boolean).join(",")]);
  adminAllowlistChanged = true;
  fixture.userId = cli(["run", "provision:createAdmin", JSON.stringify({ name: fixture.name, email: fixture.email, username: fixture.username, password: fixture.password })]).id;
  fixtureAdmin = fixture;
  assert.equal((await authRequest(fixture, "/api/auth/sign-in/email", { email: fixture.email, password: fixture.password })).status, 200);
  fixture.convex.setAuth((await (await authRequest(fixture, "/api/auth/convex/token")).json()).token);
  return fixture;
}
const read = client => client.convex.query(ref("getMine"), {});
const ensure = client => client.convex.mutation(ref("ensureQuestionnaire"), {});
async function save(client, answers, version, extras = []) {
  const privacy = await anonymous.query(ref("getPrivacySettings"), {});
  return client.convex.mutation(ref("saveDraft"), { answers, extraModules: extras, currentPage: "P01", currentQuestion: "P01.1", questionnaireVersion: version, privacyVersion: privacy.version });
}
async function submit(client, version) {
  const privacy = await anonymous.query(ref("getPrivacySettings"), {});
  return client.convex.mutation(ref("submit"), { privacyVersion: privacy.version, questionnaireVersion: version });
}
try {
  cli(["run", "questionnaireAdmin:bootstrap", "{}"]);
  const initial = await admin("load");
  assert.equal(initial.hasDraft, false, "Refuse to overwrite an administrator's existing global draft.");
  originalVersion = initial.assignedVersion;
  assert.equal(originalVersion, "2026-11-18.v2", "Run the bootstrap-baseline suite before making real admin releases.");
  const privacy = await anonymous.query(ref("getPrivacySettings"), {});
  assert.equal(privacy.approved, true, "Collection must be enabled for local fixture verification.");
  await assert.rejects(() => admin("load", {}, false), /Unauthorized/);
  await assert.rejects(() => anonymous.mutation(makeFunctionReference("questionnaireAdmin:publishEditor"), { actor: "forged", expectedRevision: 0, reason: "forged" }));
  console.log("PASS questionnaire management rejects missing service authentication and direct public calls to internal functions");

  const administrator = await createAdmin();
  const completed = await createClient();
  await ensure(completed);
  const answers = completeFixture(completed);
  const modules = initial.definition.pages.filter(page => page.kind === "module").map(page => page.id);
  await save(completed, answers, originalVersion, modules);
  await submit(completed, originalVersion);
  const completedBefore = await read(completed);
  assert.equal(completedBefore.draft.status, "submitted");
  const inProgress = await createClient();
  assert.equal(await ensure(inProgress), originalVersion, "Opening before publication pins even an empty questionnaire");
  const legacy = await createClient();
  await save(legacy, completeFixture(legacy), originalVersion, modules);
  await submit(legacy, originalVersion);
  cli(["run", "testing:makeLegacyQuestionnaireFixture", JSON.stringify({ authUserId: legacy.userId })]);
  assert.equal(await ensure(legacy), "2026-10-11.v1");
  assert.equal((await read(legacy)).questionnaire.definition.pages.flatMap(page => page.questions).length, 127);
  console.log("PASS existing legacy briefs recover their original 127-question snapshot; started clients are pinned before answering");

  const added = addTopic(structuredClone(initial.definition), "module");
  const newModule = added.questionId.split(".")[0];
  const globalDefinition = replaceQuestion(added.definition, { ...added.definition.pages.find(page => page.id === newModule).questions[0], label: "Which product research should guide this store?", required: true });
  const companyQuestion = globalDefinition.pages.flatMap(page => page.questions).find(question => question.id === "P03.1");
  companyQuestion.label = "Tell us about your business and main offer.";
  companyQuestion.help = "Use one concrete product example.";
  companyQuestion.why = "We use this to prioritize the first customer journey.";
  const industry = globalDefinition.pages.flatMap(page => page.questions).find(question => question.id === "P03.2");
  industry.options.push("Fixture industry"); industry.optionLabels = { ...industry.optionLabels, "Fixture industry": "A newly supported industry" };
  globalDefinition.rules.push({ id: "fixture-buying", all: [{ questionId: "P08.2", includes: ["Buy"] }], any: [], modules: [newModule] });
  const saved = await admin("save", { title: "Fixture published questionnaire", definition: globalDefinition, expectedRevision: 0, baseVersion: originalVersion });
  await rejectedAdmin("save", { title: "Stale writer", definition: globalDefinition, expectedRevision: 0, baseVersion: originalVersion });
  assert.equal((await read(completed)).questionnaire.version, originalVersion, "Saving a draft never changes clients");
  await rejectedAdmin("publish", { expectedRevision: 0, reason: "stale publish" });
  const released = await admin("publish", { expectedRevision: saved.revision, reason: "Verify new-client releases stay isolated" });
  assert.deepEqual((await read(completed)).draft, completedBefore.draft, "Global publication cannot change submitted status, answers, timestamps, or positions");
  assert.equal((await read(completed)).questionnaire.version, originalVersion);
  assert.equal(await ensure(inProgress), originalVersion);
  assert.equal((await read(legacy)).questionnaire.version, "2026-10-11.v1");
  console.log("PASS global publishing preserves completed clients, empty started clients, and legacy versions; concurrent draft/publish conflicts are rejected");

  const newcomer = await createClient();
  assert.equal(await ensure(newcomer), released.version);
  const newcomerData = await read(newcomer);
  assert.equal(newcomerData.questionnaire.definition.pages.flatMap(page => page.questions).find(question => question.id === "P03.1").label, companyQuestion.label);
  assert.ok(newcomerData.questionnaire.definition.pages.flatMap(page => page.questions).find(question => question.id === "P03.2").options.includes("Fixture industry"));
  const buying = { ...completeFixture(newcomer), "P08.2": answered(["Buy"]) };
  assert.ok(createQuestionnaire(newcomerData.questionnaire.definition).getSelectedModules(buying).includes(newModule));
  await save(newcomer, buying, released.version, modules);
  await assert.rejects(() => submit(newcomer, released.version), /highlighted|complete/i);
  buying[added.questionId] = answered("Prioritize redacted customer interviews.");
  await save(newcomer, buying, released.version, modules);
  await submit(newcomer, released.version);
  const dashboardRef = makeFunctionReference("clients:getClient");
  await assert.rejects(() => newcomer.convex.query(dashboardRef, { authUserId: completed.userId }), /Administrator/);
  const adminView = await administrator.convex.query(dashboardRef, { authUserId: newcomer.userId });
  assert.deepEqual(adminView.questionnaire, (await read(newcomer)).questionnaire, "Both dashboards resolve the same definition from the database");
  assert.deepEqual(adminView.draft.answers, (await read(newcomer)).draft.answers);
  assert.equal(adminView.progress.percent, 100);
  const answerRef = makeFunctionReference("clients:updateAnswer");
  const correction = answered("Admin corrected the newly added research question.");
  await administrator.convex.mutation(answerRef, { authUserId: newcomer.userId, questionId: added.questionId, answer: correction, questionnaireVersion: released.version });
  assert.deepEqual((await read(newcomer)).draft.answers[added.questionId], correction);
  await assert.rejects(() => administrator.convex.mutation(answerRef, { authUserId: newcomer.userId, questionId: added.questionId, answer: correction, questionnaireVersion: originalVersion }), /agency changed|Reload/);
  await assert.rejects(() => administrator.convex.mutation(answerRef, { authUserId: newcomer.userId, questionId: "P01.fake", answer: correction, questionnaireVersion: released.version }), /Unknown/);
  await assert.rejects(() => administrator.convex.mutation(answerRef, { authUserId: newcomer.userId, questionId: "P16.2", answer: answered(true), questionnaireVersion: released.version }), /directly/);
  await administrator.convex.mutation(makeFunctionReference("clients:updateExtraModules"), { authUserId: newcomer.userId, questionnaireVersion: released.version, extraModules: [...modules, newModule] });
  assert.ok((await read(newcomer)).draft.extraModules.includes(newModule), "Admin workflow edits recognize database-added modules");
  console.log("PASS both dashboards share the assigned definition and saved answers; admin edits support database-added questions/workflows and enforce access, identity and stale-version checks");
  console.log("PASS new clients receive new wording, hints, choices, workflows and routing; backend submission validates newly added required questions");

  const individual = await admin("load", { targetUserId: completed.userId });
  assert.equal(individual.assignedVersion, originalVersion, "Client edits start from their own version, not the newest global one");
  const incompatible = structuredClone(individual.definition);
  Object.assign(incompatible.pages.flatMap(page => page.questions).find(question => question.id === "P03.1"), { type: "multi-select", options: ["New control fixture"] });
  const incompatibleDraft = await admin("save", { targetUserId: completed.userId, title: "Incompatible control fixture", definition: incompatible, expectedRevision: 0, baseVersion: individual.baseVersion });
  await rejectedAdmin("publish", { targetUserId: completed.userId, expectedRevision: incompatibleDraft.revision, reason: "Must not erase an incompatible saved answer" });
  assert.deepEqual((await read(completed)).draft, completedBefore.draft, "An incompatible control change rolls back without clearing saved answers");
  await admin("discard", { targetUserId: completed.userId, expectedRevision: incompatibleDraft.revision });
  const extra = addTopic(structuredClone(individual.definition), "shared");
  let custom = removeQuestion(extra.definition, "P05.3");
  const changed = custom.pages.flatMap(page => page.questions).find(question => question.id === "P03.1");
  changed.label = "Describe the company changes since your original brief.";
  custom = replaceQuestion(custom, { ...custom.pages.flatMap(page => page.questions).find(question => question.id === extra.questionId), required: true });
  const clientDraft = await admin("save", { targetUserId: completed.userId, title: "Fixture client follow-up", definition: custom, expectedRevision: 0, baseVersion: individual.baseVersion });
  assert.equal((await read(completed)).draft.status, "submitted", "A client-specific editor draft does not affect a submitted brief");
  const personal = await admin("publish", { targetUserId: completed.userId, expectedRevision: clientDraft.revision, reason: "Ask this client for an updated business description" });
  const revised = await read(completed);
  assert.equal(revised.questionnaire.version, personal.version);
  assert.equal(revised.draft.status, "draft");
  assert.equal(revised.draft.submittedAt, null);
  assert.deepEqual(revised.draft.answers["P03.1"], answers["P03.1"], "Changed wording preserves the original answer for review");
  assert.equal(revised.draft.answers["P05.3"], undefined, "Removed answers leave the active brief but remain archived");
  assert.equal(revised.draft.answers["P16.2"], undefined, "Revised briefs require a new accuracy confirmation");
  assert.deepEqual(revised.draft.answers["P01.3"], answers["P01.3"], "Unchanged answers are retained");
  const archive = cli(["run", "testing:getQuestionnaireFixtureArchive", JSON.stringify({ authUserId: completed.userId })]);
  assert.deepEqual(archive[0].answers, completedBefore.draft.answers);
  assert.equal(archive[0].status, "submitted");
  await assert.rejects(() => save(completed, answers, originalVersion, modules), /agency changed|Reload/i);
  assert.deepEqual((await read(completed)).draft.answers, revised.draft.answers, "A stale browser cannot overwrite a client-specific revision");
  assert.equal((await read(newcomer)).questionnaire.version, released.version);
  assert.equal((await read(newcomer)).draft.status, "submitted");
  assert.equal((await read(legacy)).questionnaire.version, "2026-10-11.v1");
  console.log("PASS client-specific add/edit/remove affects only the selected client, preserves existing answers despite wording changes, archives originals, resets confirmation, and rejects stale saves");
  const beforeRollout = await read(inProgress);
  const rolloutClients = [{ authUserId: completed.userId, expectedVersion: personal.version }, { authUserId: inProgress.userId, expectedVersion: originalVersion }];
  await rejectedAdmin("apply", { version: released.version, reason: "Stale selection", clients: [{ authUserId: completed.userId, expectedVersion: originalVersion }] });
  assert.equal((await read(completed)).questionnaire.version, personal.version);
  const result = await admin("apply", { version: released.version, reason: "Roll out the published format to two selected clients", clients: rolloutClients });
  assert.equal(result.applied, 2);
  const migrated = await read(completed);
  assert.equal(migrated.questionnaire.version, released.version);
  assert.deepEqual(migrated.draft.answers["P03.1"], answers["P03.1"]);
  assert.deepEqual(migrated.draft.answers["P05.3"], answers["P05.3"], "Reintroducing a removed stable question restores its original answer");
  assert.deepEqual(migrated.draft.answers["P01.3"], answers["P01.3"]);
  assert.equal((await read(inProgress)).questionnaire.version, released.version);
  assert.equal(beforeRollout.draft, null);
  assert.deepEqual(await admin("apply", { version: released.version, reason: "Retry the same batch", clients: rolloutClients }), { applied: 0 });
  assert.equal((await admin("history", { targetUserId: completed.userId })).length, 2, "An idempotent retry does not duplicate archives");
  assert.equal((await read(legacy)).questionnaire.version, "2026-10-11.v1", "Unselected clients remain pinned");
  assert.equal((await read(newcomer)).draft.status, "submitted");
  await assert.rejects(() => save(completed, answers, personal.version, modules), /agency changed|Reload/i);
  await save(completed, migrated.draft.answers, released.version, migrated.draft.extraModules);
  console.log("PASS checkbox rollout service updates only selected clients, carries answers forward, rejects stale selection, and is safe to retry");

  const list = await admin("clients");
  assert.ok(list.page.some(client => client.authUserId === completed.userId && client.version === released.version));
  assert.equal((await admin("history", { targetUserId: completed.userId }))[1].answeredCount, Object.keys(answers).length);
  const invalid = structuredClone(globalDefinition);
  invalid.pages[0].questions = invalid.pages[0].questions.filter(question => question.id !== "P01.3");
  await rejectedAdmin("save", { definition: invalid, title: "Invalid", expectedRevision: 0, baseVersion: released.version });
  const restart = await admin("save", { definition: globalDefinition, title: "Discard fixture", expectedRevision: 0, baseVersion: released.version });
  await admin("discard", { expectedRevision: restart.revision });
  assert.equal((await admin("load")).hasDraft, false);
  console.log("PASS portal-client selection, response-history metadata, protected system fields and draft discard work through the administration HTTP service");
} finally {
  const cleanupErrors = [];
  if (fixtureAdmin) { try { cli(["run", "adminAccounts:revoke", JSON.stringify({ authUserId: fixtureAdmin.userId })]); } catch { cleanupErrors.push("Could not revoke the local fixture admin."); } }
  try { if (adminAllowlistChanged) cli(originalAdminEmails === undefined ? ["env", "remove", "ADMIN_EMAILS"] : ["env", "set", "ADMIN_EMAILS", originalAdminEmails]); } catch { cleanupErrors.push("Could not restore the local admin allowlist."); }
  for (const client of clients) if (client.userId) {
    try {
      cli(["run", "testing:cleanupOnboardingFixture", JSON.stringify({ authUserId: client.userId })]);
      for (const model of ["session", "account", "user"]) cli(["run", "--component", "betterAuth", "adapter:deleteMany", JSON.stringify({ input: { model, where: [{ field: model === "user" ? "_id" : "userId", value: client.userId }] }, paginationOpts: { numItems: 100, cursor: null } })]);
    } catch { cleanupErrors.push("Could not remove a local fixture client."); }
  }
  if (originalVersion) { try { cli(["run", "testing:restoreQuestionnaireFixture", JSON.stringify({ actor, originalVersion })]); } catch { cleanupErrors.push("Could not restore the local questionnaire pointer."); } }
  assert.deepEqual(cleanupErrors, []);
  console.log("Removed fixture accounts/assignments/history and restored the prior local published questionnaire.");
}
