import assert from "node:assert/strict";
import { getGuidedSteps } from "../lib/onboarding/guided-flow";
import { CORE_PHASES, getOnboardingPhases, getPhaseErrors, getPhaseHref, isStepComplete } from "../lib/onboarding/phases";
import { getAllowedAnswerStates, getPages, MODULE_PAGES, SHARED_PAGES, validateSubmission } from "../lib/onboarding/questionnaire";
import type { Answers } from "../lib/onboarding/types";

const answered = (value: Answers[string]["value"]): Answers[string] => ({ state: "answered", value });
const extras = MODULE_PAGES.map(page => page.id);
const questionIds = (answers: Answers = {}, modules: string[] = []) => getGuidedSteps(getPages(answers, modules), answers).map(step => step.id);

const empty = getOnboardingPhases();
assert.equal(CORE_PHASES.length, 11);
assert.equal(empty.length, 11, "A base route contains eleven short phases");
assert.deepEqual(empty.flatMap(phase => phase.steps.map(step => step.id)), questionIds(), "Phases preserve the entire guided question and review order");
assert.deepEqual(empty.map(phase => phase.total), [5, 5, 5, 4, 4, 5, 5, 4, 4, 4, 4]);
assert.ok(empty.every(phase => phase.total <= 5 && phase.completed === 0 && !phase.complete));
assert.equal(new Set(empty.map(phase => phase.id)).size, empty.length, "Phase IDs are unique");
assert.equal(empty.at(-1)?.steps.length, 5, "The final phase has four questions and a separate review screen");
assert.equal(isStepComplete(empty.at(-1)!.steps.find(step => step.id === "review")!, {}, true), false, "Review is not counted as an answered question");

const all = getOnboardingPhases({}, extras);
assert.equal(all.length, 27, "All workflows produce at most sixteen project-detail phases");
assert.equal(all.filter(phase => phase.service).length, 16);
assert.ok(all.every(phase => phase.total >= 1 && phase.total <= 5), "Every phase stays within the five-question limit");
assert.equal(all.reduce((total, phase) => total + phase.total, 0), 127, "All 127 library questions are retained exactly once");
assert.deepEqual(all.flatMap(phase => phase.steps.map(step => step.id)), questionIds({}, extras), "Selected project details remain between launch planning and people/agreement");
assert.equal(new Set(all.flatMap(phase => phase.steps.map(step => step.id))).size, 128, "No question or review screen is duplicated");
const serviceSizes = all.filter(phase => phase.service).map(phase => phase.total);
assert.ok(Math.max(...serviceSizes) - Math.min(...serviceSizes) <= 1, "Project details are balanced without a one-question tail");

for (const selected of [[], ["M02"], ["M06"], ["M07", "M18"], extras]) {
  const phases = getOnboardingPhases({}, selected);
  assert.deepEqual(phases.flatMap(phase => phase.steps.map(step => step.id)), questionIds({}, selected));
  assert.ok(phases.every(phase => phase.total <= 5));
  assert.equal(new Set(phases.map(phase => phase.id)).size, phases.length);
}

const partial: Answers = {
  "P01.1": answered("Example owner"),
  "P01.2": { state: "help", value: "" },
  "P01.3": answered("owner@example.test"),
  "P02.1": answered("Owner/founder"),
};
let first = getOnboardingPhases(partial)[0];
assert.equal(first.completed, 4);
assert.equal(first.complete, false, "Untouched optional questions require an answer or explicit skip");
assert.equal(first.nextQuestion, "P01.4");
assert.ok(getPhaseErrors(first, partial, true)["P01.4"]);
assert.equal(getPhaseHref("/onboarding/preview", first), "/onboarding/preview?question=P01.4", "Starting a phase uses a stable question ID");
partial["P01.4"] = { state: "deferred", value: "" };
first = getOnboardingPhases(partial)[0];
assert.equal(first.complete, true, "A permitted explicit skip completes the optional question");
assert.deepEqual(getPhaseErrors(first, partial, true), {});
partial["P02.3"] = answered(["Phone"]);
first = getOnboardingPhases(partial)[0];
assert.equal(first.complete, false, "A later contact preference can invalidate an earlier phase");
assert.ok(getPhaseErrors(first, partial, true)["P01.4"]);
partial["P01.3"] = answered("invalid email");
assert.equal(getOnboardingPhases(partial)[0].completed, 3, "Invalid saved values do not count as completed answers");

const complete: Answers = {};
for (const page of [...SHARED_PAGES, ...MODULE_PAGES]) for (const question of page.questions) {
  complete[question.id] = getAllowedAnswerStates(question).includes("help")
    ? { state: "help", value: "" }
    : answered(question.type === "checkbox" ? true : question.type === "email" ? "owner@example.test" : question.id === "P02.2" ? { country: "India", timezone: "Asia/Kolkata" } : question.id === "P14.2" ? { legalName: "Example owner", billingEmail: "owner@example.test" } : "Example owner");
}
assert.deepEqual(validateSubmission(complete, extras, { privacyReady: true }), {});
assert.ok(getOnboardingPhases(complete, extras).every(phase => phase.complete && phase.percent === 100), "Valid answers and permitted follow-ups complete every selected phase");
const finalWithoutPrivacy = getOnboardingPhases(complete, extras, false).at(-1)!;
assert.equal(finalWithoutPrivacy.complete, false);
assert.ok(getPhaseErrors(finalWithoutPrivacy, complete, false)["P16.3"], "Unavailable privacy acknowledgement cannot complete the final phase");

const routed: Answers = { "P08.1": answered(["Website/store/application"]), "M02.3": answered(["Content"]) };
assert.ok(getOnboardingPhases(routed).some(phase => phase.steps.some(step => step.id.startsWith("M22."))), "A migration answer inserts the additional project details");
const rerouted = { ...routed, "P08.1": answered(["Research/design"]) };
const reroutedPhases = getOnboardingPhases(rerouted);
assert.ok(!reroutedPhases.some(phase => phase.steps.some(step => /^M(?:01|02|22)\./.test(step.id))), "Retained inactive answers cannot restore a removed phase");
assert.deepEqual(reroutedPhases.flatMap(phase => phase.steps.map(step => step.id)), questionIds(rerouted));

console.log("Onboarding phase checks passed: five-question limits, exact 127-question coverage, phase order, adaptive routing, completion, follow-ups, privacy, and stable start links.");
