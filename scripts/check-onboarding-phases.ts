import assert from "node:assert/strict";
import { getGuidedSteps } from "../lib/onboarding/guided-flow";
import { CORE_PHASES, getOnboardingPhases, getPhaseErrors, getPhaseHref, isStepComplete } from "../lib/onboarding/phases";
import { getAllowedAnswerStates, getPages, MODULE_PAGES, SHARED_PAGES, validateSubmission } from "../lib/onboarding/questionnaire";
import type { Answers } from "../lib/onboarding/types";
import { getPhaseQuestionProgress, getQuestionStatus } from "../lib/onboarding/progress-state";

const answered = (value: Answers[string]["value"]): Answers[string] => ({ state: "answered", value });
const extras = MODULE_PAGES.map(page => page.id);
const questionIds = (answers: Answers = {}, modules: string[] = []) => getGuidedSteps(getPages(answers, modules), answers).map(step => step.id);

const empty = getOnboardingPhases();
assert.equal(CORE_PHASES.length, 12);
assert.equal(empty.length, 12, "A base route contains twelve short phases");
assert.deepEqual(empty.flatMap(phase => phase.steps.map(step => step.id)), questionIds(), "Phases preserve the entire guided question and review order");
assert.deepEqual(empty.map(phase => phase.total), [5, 5, 5, 5, 5, 5, 5, 4, 4, 5, 2, 3]);
assert.ok(empty.every(phase => phase.total <= 5 && phase.completed === 0 && !phase.complete));
assert.equal(new Set(empty.map(phase => phase.id)).size, empty.length, "Phase IDs are unique");
assert.equal(empty.at(-1)?.steps.length, 4, "The final phase has three questions and a separate review screen");
assert.equal(isStepComplete(empty.at(-1)!.steps.find(step => step.id === "review")!, {}, true), false, "Review is not counted as an answered question");

const all = getOnboardingPhases({}, extras);
assert.equal(all.length, 30, "All workflows produce at most eighteen project-detail phases");
assert.equal(all.filter(phase => phase.service).length, 18);
assert.ok(all.every(phase => phase.total >= 1 && phase.total <= 5), "Every phase stays within the five-question limit");
assert.equal(all.reduce((total, phase) => total + phase.total, 0), 141, "All 141 library questions are retained exactly once");
assert.deepEqual(all.flatMap(phase => phase.steps.map(step => step.id)), questionIds({}, extras), "Selected project details remain between launch planning and people/agreement");
assert.equal(new Set(all.flatMap(phase => phase.steps.map(step => step.id))).size, 142, "No question or review screen is duplicated");
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
  complete[question.id] = question.feedback ? { state: "not-applicable", value: "" } : getAllowedAnswerStates(question).includes("help")
    ? { state: "help", value: "" }
    : answered(question.type === "checkbox" ? true : question.type === "email" ? "owner@example.test" : question.id === "P02.2" ? { country: "India", timezone: "Asia/Kolkata" } : question.id === "P14.2" ? { legalName: "Example owner", billingEmail: "owner@example.test" } : "Example owner");
}
assert.deepEqual(validateSubmission(complete, extras, { privacyReady: true }), {});
assert.ok(getOnboardingPhases(complete, extras).every(phase => phase.complete && phase.percent === 100), "Valid answers and permitted follow-ups complete every selected phase");
const finalWithoutPrivacy = getOnboardingPhases(complete, extras, false).at(-1)!;
assert.equal(finalWithoutPrivacy.complete, false);
assert.ok(getPhaseErrors(finalWithoutPrivacy, complete, false)["P16.3"], "Unavailable privacy acknowledgement cannot complete the final phase");

// Answer status survives navigation independently of the current phase/question.
const statusAnswers: Answers = {
  "P01.1": answered("Example contact"),
  "P01.2": { state: "help", value: "" },
  "P01.3": answered("invalid email"),
  "P01.4": { state: "deferred", value: "" },
};
let statusPhase = getOnboardingPhases(statusAnswers)[0];
const statusFor = (id: string, answers = statusAnswers) => getQuestionStatus(statusPhase.steps.find(step => step.id === id)!, answers, true);
assert.equal(statusFor("P01.1"), "answered");
assert.equal(statusFor("P01.2"), "later", "A help request stays yellow rather than inflating answered progress");
assert.equal(statusFor("P01.3"), "attention", "An invalid saved answer cannot receive a green check");
assert.equal(statusFor("P01.4"), "later", "An explicit optional skip receives a yellow check");
assert.equal(statusFor("P02.1"), "pending", "Untouched questions stay pending");
assert.deepEqual(getPhaseQuestionProgress(statusPhase, statusAnswers, true), {
  answered: 1, later: [statusPhase.steps[1], statusPhase.steps[3]], pending: 2, total: 5,
});
const restored: Answers = JSON.parse(JSON.stringify(statusAnswers));
assert.deepEqual(getPhaseQuestionProgress(statusPhase, restored, true), getPhaseQuestionProgress(statusPhase, statusAnswers, true), "Reloading a saved draft restores identical status and follow-up counts");
restored["P01.4"] = answered("+91 9876543210");
assert.equal(statusFor("P01.4", restored), "answered", "Answering a deferred question changes yellow to green");
restored["P01.4"] = answered("");
assert.equal(statusFor("P01.4", restored), "pending", "Clearing a previously answered optional question restores pending status");
statusAnswers["P02.3"] = answered(["Phone"]);
assert.equal(statusFor("P01.4"), "attention", "A later contact choice invalidating a skip removes its yellow check");
statusPhase = getOnboardingPhases({ "P01.4": { state: "not-applicable", value: "" } })[0];
assert.equal(statusFor("P01.4", { "P01.4": { state: "not-applicable", value: "" } }), "answered", "A valid not-applicable answer is resolved rather than a follow-up");
const finalPhase = getOnboardingPhases(complete).at(-1)!;
assert.equal(getQuestionStatus(finalPhase.steps.find(step => step.id === "review")!, complete, true), "review");
assert.equal(getQuestionStatus(finalPhase.steps.find(step => step.id === "P16.3")!, complete, false), "attention");
const allStatusCounts = getOnboardingPhases(complete, extras).map(phase => getPhaseQuestionProgress(phase, complete, true));
assert.equal(allStatusCounts.reduce((sum, phase) => sum + phase.answered + phase.later.length + phase.pending, 0), 141, "Status categories account for exactly the active question library, excluding review");

const routed: Answers = { "P08.1": answered(["Website/store/application"]), "M02.3": answered(["Content"]) };
assert.ok(getOnboardingPhases(routed).some(phase => phase.steps.some(step => step.id.startsWith("M22."))), "A migration answer inserts the additional project details");
const rerouted = { ...routed, "P08.1": answered(["Research/design"]) };
const reroutedPhases = getOnboardingPhases(rerouted);
assert.ok(!reroutedPhases.some(phase => phase.steps.some(step => /^M(?:01|02|22)\./.test(step.id))), "Retained inactive answers cannot restore a removed phase");
assert.deepEqual(reroutedPhases.flatMap(phase => phase.steps.map(step => step.id)), questionIds(rerouted));

console.log("Onboarding phase checks passed: five-question limits, exact 141-question coverage, phase order, adaptive routing, completion, follow-ups, privacy, and stable start links.");
