import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { spawnSync } from "node:child_process";
import { ConvexHttpClient } from "convex/browser";
import { makeFunctionReference } from "convex/server";
import { MODULE_PAGES, validateSubmission } from "../lib/onboarding/questionnaire.ts";
import { completeFixture } from "./onboarding-fixture.mjs";

const url = process.env.NEXT_PUBLIC_CONVEX_URL;
assert.equal(new URL(url).hostname, "127.0.0.1", "Only local Convex may be tested.");
assert.match(process.env.CONVEX_DEPLOYMENT ?? "", /^anonymous:/);
const client = new ConvexHttpClient(url);
const refs = Object.fromEntries(["getDraft", "saveDraft", "submit"].map(name => [name, makeFunctionReference(`onboardingPreview:${name}`)]));
const first = randomUUID(), second = randomUUID();
const read = sessionId => client.query(refs.getDraft, { sessionId });
const save = (sessionId, answers, extraModules = [], currentPage = "P01", currentQuestion = "P01.1") => client.mutation(refs.saveDraft, { sessionId, answers, extraModules, currentPage, ...(currentQuestion === null ? {} : { currentQuestion }) });
const answered = value => ({ state: "answered", value });

try {
  assert.equal(await read(first), null);
  await assert.rejects(() => read("preview"), /session/i);
  await save(first, { "P16.3": answered(true), "P02.2": answered({ country: "", timezone: "Asia/Kolkata" }) });
  const consentDraft = await read(first);
  assert.equal(consentDraft.answers["P16.3"].value, true, "The introduction saves the acknowledgement before project answers");
  assert.equal(consentDraft.currentQuestion, "P01.1", "Consent keeps the first project question ready to resume");
  await assert.rejects(() => client.mutation(refs.submit, { sessionId: first }), /complete|highlighted/i);
  console.log("PASS introduction acknowledgement persists; consent alone cannot submit an incomplete brief");
  await save(first, { "P01.1": answered("Preview fixture A") });
  await save(second, { "P01.1": answered("Preview fixture B") });
  assert.equal((await read(first)).answers["P01.1"].value, "Preview fixture A");
  assert.equal((await read(second)).answers["P01.1"].value, "Preview fixture B");
  await assert.rejects(() => client.mutation(refs.submit, { sessionId: first }), /complete|highlighted/i);
  for (const [answers, extras, page, question] of [
    [{ "P01.1": answered(true) }, [], "P01", "P01.1"],
    [{ unknown: answered("bad") }, [], "P01", "P01.1"],
    [{}, ["M99"], "P01", "P01.1"],
    [{}, [], "P01", "P15.1"],
    [{}, [], "P01", ""],
    [{}, [], "M01", "M01.1"],
  ]) await assert.rejects(() => save(first, answers, extras, page, question));
  assert.equal((await read(first)).answers["P01.1"].value, "Preview fixture A");
  console.log("PASS anonymous preview sessions are isolated; malformed drafts and incomplete submission are rejected");

  const answers = completeFixture({ name: "Preview Fixture", email: "preview-fixture@example.test" });
  const extras = MODULE_PAGES.map(page => page.id);
  assert.equal(Object.keys(answers).length, 127);
  assert.deepEqual(validateSubmission(answers, extras, { privacyReady: true }), {});
  await save(first, answers, extras, "P16", "review");
  let draft = await read(first);
  assert.deepEqual(draft.answers, answers);
  assert.deepEqual(draft.extraModules, extras);
  assert.equal(draft.currentQuestion, "review");
  assert.equal(draft.currentPage, "P16");
  assert.ok(draft.updatedAt > 0);
  console.log("PASS all 127 answers, modules, details, priorities, and exact review position persist in Convex");

  await client.mutation(refs.submit, { sessionId: first });
  draft = await read(first);
  assert.equal(draft.status, "submitted");
  assert.ok(draft.submittedAt > 0);
  await save(first, answers, extras, "P01", "P01.3");
  assert.equal((await read(first)).status, "submitted");
  assert.equal((await read(first)).currentQuestion, "P01.3");
  await save(first, { ...answers, "P01.1": answered("Edited preview fixture") }, extras, "P01", null);
  assert.equal((await read(first)).status, "draft");
  assert.equal((await read(first)).currentQuestion, null);
  assert.equal((await read(second)).answers["P01.1"].value, "Preview fixture B");
  console.log("PASS finishing stores submission; navigation preserves it and edits return to draft");
} finally {
  for (const sessionId of [first, second]) {
    const result = spawnSync("bunx", ["convex", "run", "onboardingPreview:cleanupFixture", JSON.stringify({ sessionId })], { encoding: "utf8" });
    assert.equal(result.status, 0, "Preview fixture cleanup failed.");
  }
}
