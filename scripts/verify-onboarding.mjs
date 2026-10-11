import assert from "node:assert/strict";
import { ONBOARDING_PRIVACY_NOTICE, ONBOARDING_PRIVACY_VERSION } from "../lib/onboarding/privacy-copy.ts";
import { completeFixture } from "./onboarding-fixture.mjs";
import { spawnSync } from "node:child_process";
import { randomBytes } from "node:crypto";
import { ConvexHttpClient } from "convex/browser";
import { makeFunctionReference } from "convex/server";
import { getPages, validateSubmission, SHARED_PAGES, MODULE_PAGES } from "../lib/onboarding/questionnaire.ts";

// This suite changes fixture data and privacy configuration only on anonymous local Convex.
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
assert.equal(new URL(convexUrl).hostname, "127.0.0.1", "Only local Convex may be tested.");
assert.match(process.env.CONVEX_DEPLOYMENT ?? "", /^anonymous:/, "Cloud deployments are excluded.");
const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
assert.ok(["localhost", "127.0.0.1"].includes(new URL(origin).hostname));
const privacyKeys = ["APPROVED", "TEXT", "CONTACT", "RETENTION", "VERSION"].map(key => `ONBOARDING_PRIVACY_${key}`);
const originals = new Map();
const clients = [];
const revision = `local-smoke-${randomBytes(6).toString("hex")}`;
const references = Object.fromEntries(["getMine", "saveDraft", "submit", "getPrivacySettings", "recordEngagement"].map(name => [name, makeFunctionReference(`onboarding:${name}`)]));
const anonymous = new ConvexHttpClient(convexUrl);

function cli(args, missingAllowed = false) {
  const result = spawnSync("bunx", ["convex", ...args], { encoding: "utf8" });
  if (missingAllowed && result.status !== 0 && /not found/.test(result.stderr)) return undefined;
  assert.equal(result.status, 0, `Convex ${args.slice(0, 2).join(" ")} failed`);
  // `env get` adds exactly one newline. Preserve the stored value's own whitespace.
  return result.stdout.endsWith("\n") ? result.stdout.slice(0, -1) : result.stdout;
}

async function request(client, path, body) {
  const headers = { Origin: origin, Cookie: [...client.cookies].map(([key, value]) => `${key}=${value}`).join("; ") };
  if (body) headers["Content-Type"] = "application/json";
  const response = await fetch(`${origin}${path}`, { method: body ? "POST" : "GET", headers, body: body ? JSON.stringify(body) : undefined, redirect: "manual" });
  for (const cookie of response.headers.getSetCookie()) {
    const pair = cookie.split(";", 1)[0]; const split = pair.indexOf("=");
    if (pair.slice(split + 1)) client.cookies.set(pair.slice(0, split), pair.slice(split + 1));
    else client.cookies.delete(pair.slice(0, split));
  }
  return response;
}

async function createClient(number) {
  const client = { cookies: new Map(), email: `onboarding-smoke-${randomBytes(6).toString("hex")}@example.test`, name: `Onboarding Fixture ${number}`, userId: null, convex: new ConvexHttpClient(convexUrl) };
  clients.push(client);
  const response = await request(client, "/api/auth/sign-up/email", { email: client.email, name: client.name, password: randomBytes(24).toString("base64url") });
  assert.equal(response.status, 200, "Fixture signup failed.");
  client.userId = (await response.json()).user.id;
  const token = await (await request(client, "/api/auth/convex/token")).json();
  client.convex.setAuth(token.token);
  return client;
}

const answered = value => ({ state: "answered", value });

async function save(client, answers, extraModules = [], currentPage = "P01", privacyVersion = revision, currentQuestion) {
  return client.convex.mutation(references.saveDraft, { answers, extraModules, currentPage, privacyVersion, ...(currentQuestion !== undefined ? { currentQuestion } : {}) });
}
const read = client => client.convex.query(references.getMine, {});
const submit = client => client.convex.mutation(references.submit, { privacyVersion: revision });
function engagement(client, additional = {}) {
  return { authUserId: client.userId, summary: "Local fixture only", scope: ["Website discovery"], plan: "Basic", currency: "USD", setupFee: 1000, exclusions: ["Ongoing maintenance"], thirdPartyCosts: "Separately agreed", legalName: client.name, billingEmail: client.email, dependencies: [], updatedAt: Date.now(), ...additional };
}
function record(client, additional = {}) {
  cli(["run", "onboarding:recordEngagement", JSON.stringify({ engagement: engagement(client, additional) })]);
}

try {
  for (const key of privacyKeys) originals.set(key, cli(["env", "get", key], true));
  assert.equal(await anonymous.query(references.getMine, {}), null);
  await assert.rejects(() => anonymous.mutation(references.saveDraft, { answers: {}, extraModules: [], currentPage: "P01", privacyVersion: revision }));
  await assert.rejects(() => anonymous.mutation(references.submit, { privacyVersion: revision }));
  console.log("PASS anonymous clients cannot read a draft, save, or submit");

  const first = await createClient(1); const second = await createClient(2);
  for (const key of privacyKeys) cli(["env", "remove", key]);
  const defaultPrivacy = await anonymous.query(references.getPrivacySettings, {});
  assert.equal(defaultPrivacy.approved, true);
  assert.equal(defaultPrivacy.text, ONBOARDING_PRIVACY_NOTICE);
  assert.equal(defaultPrivacy.version, ONBOARDING_PRIVACY_VERSION);
  assert.equal(defaultPrivacy.contact, "");
  assert.equal(defaultPrivacy.retention, "");
  await save(first, { "P16.3": answered(true), "P02.2": answered({ country: "", timezone: "Asia/Kolkata" }) }, [], "P01", defaultPrivacy.version, "P01.1");
  const acceptedDraft = (await read(first)).draft;
  assert.equal(acceptedDraft.answers["P16.3"].value, true);
  assert.equal(acceptedDraft.privacyVersion, defaultPrivacy.version);
  assert.equal(acceptedDraft.currentQuestion, "P01.1");
  await assert.rejects(() => first.convex.mutation(references.submit, { privacyVersion: defaultPrivacy.version }), /highlighted|complete/i);
  console.log("PASS default notice permits authenticated acceptance and saves first-question progress without optional settings");

  cli(["env", "set", "ONBOARDING_PRIVACY_APPROVED", "false"]);
  assert.equal((await anonymous.query(references.getPrivacySettings, {})).approved, false);
  await assert.rejects(() => save(first, {}, [], "P01", defaultPrivacy.version), /privacy/i);
  await assert.rejects(() => first.convex.mutation(references.submit, { privacyVersion: defaultPrivacy.version }), /privacy/i);
  console.log("PASS explicit agency pause still blocks storage and submission");

  const temporary = { APPROVED: "true", TEXT: "LOCAL TEST NOTICE ONLY; immediately restored after this suite.", CONTACT: "privacy@example.test", RETENTION: "Local fixture deleted after test", VERSION: revision };
  for (const [key, value] of Object.entries(temporary)) cli(["env", "set", `ONBOARDING_PRIVACY_${key}`, value]);
  assert.equal((await anonymous.query(references.getPrivacySettings, {})).approved, true);
  await assert.rejects(() => save(first, {}, [], "P01", "stale-notice"), /privacy/i);
  console.log("PASS current approved privacy revision is required");

  await save(first, { "P01.1": answered(first.name) });
  await save(second, { "P01.1": answered(second.name) });
  assert.equal((await read(first)).draft.answers["P01.1"].value, first.name);
  assert.equal((await read(second)).draft.answers["P01.1"].value, second.name);
  await assert.rejects(() => second.convex.query(references.getMine, { authUserId: first.userId }));
  await assert.rejects(() => second.convex.mutation(references.saveDraft, { authUserId: first.userId, answers: {}, extraModules: [], currentPage: "P01", privacyVersion: revision }));
  console.log("PASS two client drafts remain isolated and ownership cannot be supplied by a browser");
  await assert.rejects(() => submit(first), /highlighted|complete/i);
  console.log("PASS incomplete draft cannot be submitted");
  for (const [id, value] of [["P01.1", true], ["P01.2", 42], ["P01.3", [first.email]], ["P15.1", {}], ["P02.2", "India"], ["P16.2", "true"]]) {
    await assert.rejects(() => save(first, { [id]: answered(value) }), /text answer|details shown|checkbox/i);
  }
  assert.deepEqual((await read(first)).draft.answers, { "P01.1": answered(first.name) });
  console.log("PASS malformed identity, structured location, and acknowledgement types are rejected before storage");

  const answers = completeFixture(first);
  const extras = MODULE_PAGES.map(page => page.id);
  assert.equal(SHARED_PAGES.length, 16);
  assert.equal(getPages(answers, extras).length, 42);
  assert.deepEqual(validateSubmission(answers, extras, { privacyReady: true }), {});
  await save(first, answers, extras, "P16");
  let saved = await read(first);
  assert.deepEqual(saved.draft.answers, answers);
  assert.deepEqual(saved.draft.extraModules, extras);
  assert.equal(saved.draft.currentPage, "P16");
  console.log("PASS all 16 base pages and 26 modules persist using stable question/page IDs");
  await save(first, answers, extras, "P01", revision, "P01.3");
  assert.equal((await read(first)).draft.currentQuestion, "P01.3");
  await assert.rejects(() => save(first, answers, extras, "P01", revision, "P15.1"), /question/i);
  await assert.rejects(() => save(first, answers, extras, "P01", revision, "unknown-question"), /question/i);
  await assert.rejects(() => save(first, answers, extras, "P01", revision, ""), /question/i);
  await save(first, answers, extras, "P16", revision, "review");
  assert.equal((await read(first)).draft.currentQuestion, "review");
  await save(first, answers, extras, "P16");
  assert.equal((await read(first)).draft.currentQuestion, null);
  console.log("PASS exact question/review progress persists; cross-topic cursors are rejected and legacy saves remain supported");

  const invalidEmail = { ...answers, "P01.3": answered("not-an-email") };
  await save(first, invalidEmail, extras, "P16");
  await assert.rejects(() => submit(first), /highlighted|complete/i);
  await save(first, { ...answers, "P16.3": answered(false) }, extras, "P16");
  await assert.rejects(() => submit(first), /highlighted|complete/i);
  console.log("PASS backend validates required email and privacy acknowledgement independently of UI");

  const retained = { ...answers, "P04.1": answered(["Other"]), "P08.1": answered(["Research/design"]), "M01.1": answered("Retained hidden answer"), "M22.1": answered(["Retained migration detail"]) };
  assert.ok(!getPages(retained).some(page => page.id === "M01" || page.id === "M22"));
  await save(first, retained, [], "P16");
  saved = await read(first);
  assert.equal(saved.draft.answers["M01.1"].value, "Retained hidden answer");
  assert.deepEqual(saved.draft.extraModules, []);
  const submitted = await submit(first);
  assert.equal(submitted.workspaceReady, false);
  assert.equal(submitted.pending.length, 3);
  assert.ok(submitted.pending.some(item => /email/i.test(item)) && submitted.pending.some(item => /agreement/i.test(item)) && submitted.pending.some(item => /40% advance/i.test(item)));
  assert.equal((await read(first)).draft.status, "submitted");
  assert.equal((await read(second)).draft.status, "draft");
  console.log("PASS inactive answers are retained without restoring routes or blocking submission");
  console.log("PASS self-reported agreement/payment cannot activate workspace; verification remains pending");

  await assert.rejects(() => first.convex.mutation(references.recordEngagement, { engagement: engagement(first, { signedAgreementRef: "fake", advancePaymentRef: "fake", identityVerificationRef: "fake" }) }));
  record(first);
  assert.equal((await read(first)).workspaceReady, false);
  const verified = { signedAgreementRef: "fixture-agreement-ref", advancePaymentRef: "fixture-advance-ref", identityVerificationRef: "fixture-contact-ref", verifiedEmails: [first.email] };
  record(first, { ...verified, dependencies: [{ label: "Brand files", owner: "Client", verified: false }] });
  assert.equal((await read(first)).workspaceReady, false);
  assert.deepEqual((await read(first)).pending, ["Brand files — Client"]);
  record(first, { ...verified, dependencies: [{ label: "Brand files", owner: "Client", verified: true }] });
  assert.equal((await read(first)).workspaceReady, true);
  assert.equal((await read(second)).workspaceReady, false);
  const submittedAt = (await read(first)).draft.submittedAt;
  await save(first, retained, [], "P01");
  assert.equal((await read(first)).draft.status, "submitted");
  assert.equal((await read(first)).draft.submittedAt, submittedAt);
  assert.equal((await read(first)).draft.currentPage, "P01");
  assert.equal((await read(first)).workspaceReady, true);
  console.log("PASS navigation-only saves preserve submitted status and workspace readiness");

  cli(["env", "set", "ONBOARDING_PRIVACY_VERSION", `${revision}-revised`]);
  assert.equal((await read(first)).workspaceReady, false);
  assert.equal((await read(first)).draft.privacyVersion, revision);
  await assert.rejects(() => submit(first), /privacy/i);
  await assert.rejects(() => first.convex.mutation(references.submit, { privacyVersion: `${revision}-revised` }), /current questionnaire and privacy/i);
  cli(["env", "set", "ONBOARDING_PRIVACY_VERSION", revision]);
  assert.equal((await read(first)).workspaceReady, true);
  cli(["env", "set", "ONBOARDING_PRIVACY_APPROVED", "false"]);
  assert.equal((await read(first)).workspaceReady, false);
  await assert.rejects(() => save(first, retained), /privacy/i);
  await assert.rejects(() => submit(first), /privacy/i);
  cli(["env", "set", "ONBOARDING_PRIVACY_APPROVED", "true"]);
  assert.equal((await read(first)).workspaceReady, true);
  console.log("PASS notice revision changes and privacy approval revocation immediately revoke readiness and reject stale submission");
  await save(first, { ...retained, "P15.1": answered("new-workspace@example.test") }, [], "P16");
  await submit(first);
  assert.equal((await read(first)).workspaceReady, false);
  assert.ok((await read(first)).pending.some(item => item.includes("new-workspace@example.test")));
  record(first, { ...verified, verifiedEmails: [first.email, "new-workspace@example.test"] });
  assert.equal((await read(first)).workspaceReady, true);
  console.log("PASS changing workspace email requires verification of that exact address");
  record(first, { signedAgreementRef: verified.signedAgreementRef, identityVerificationRef: verified.identityVerificationRef });
  assert.equal((await read(first)).workspaceReady, false);
  console.log("PASS engagement updates are internal-only; verified agreement, advance, identity and dependencies control activation");
} finally {
  const cleanupErrors = [];
  for (const client of clients) if (client.userId) {
    try {
      cli(["run", "testing:cleanupOnboardingFixture", JSON.stringify({ authUserId: client.userId })]);
      for (const model of ["session", "account", "user"]) cli(["run", "--component", "betterAuth", "adapter:deleteMany", JSON.stringify({ input: { model, where: [{ field: model === "user" ? "_id" : "userId", value: client.userId }] }, paginationOpts: { numItems: 100, cursor: null } })]);
    } catch { cleanupErrors.push("Local fixture cleanup failed."); }
  }
  for (const [key, original] of originals) {
    try {
      if (original === undefined) cli(["env", "remove", key]); else cli(["env", "set", key, original]);
      const restored = cli(["env", "get", key], true);
      assert.ok(restored === original, "Environment restoration did not preserve the original value.");
    } catch { cleanupErrors.push(`Could not restore ${key}.`); }
  }
  assert.deepEqual(cleanupErrors, [], "Cleanup or exact privacy environment restoration failed.");
  console.log("Removed both clients, owned drafts and engagements; restored all five original privacy settings exactly.");
}
