import assert from "node:assert/strict";
import release from "../docs/compact-onboarding-release.json";
import { DEFAULT_DEFINITION } from "../lib/onboarding/default-definition";
import { validateDefinition } from "../lib/onboarding/definition-validation";
import { createQuestionnaire, getAllowedAnswerStates } from "../lib/onboarding/engine";
import { getOnboardingPhases, getPhaseErrors } from "../lib/onboarding/phase-engine";
import { getClientSummary } from "../lib/onboarding/summary";
import { getGuidedSteps } from "../lib/onboarding/guided-flow";
import { getClientPhases } from "../../admin/lib/admin/onboarding";
import { addTopic, addQuestion } from "../../admin/lib/questionnaire/editor-model";
import { validateDraftInput } from "../convex/validateOnboardingDraft";
import type { Answers, QuestionnaireDefinition } from "../lib/onboarding/types";

const definition = release.definition as QuestionnaireDefinition;
assert.deepEqual(validateDefinition(definition), []);
const questions = definition.pages.flatMap(page => page.questions);
const original = new Map(DEFAULT_DEFINITION.pages.flatMap(page => page.questions.map(question => [question.id, question] as const)));
assert.equal(questions.length, 141);
assert.equal(questions.filter(question => question.optionalDetail).length, 82);
assert.ok(questions.every(question => question.help?.trim()));
for (const question of questions) {
  const old = original.get(question.id)!;
  assert.equal(question.type, old.type, `${question.id}: saved control stays compatible`);
  assert.deepEqual(question.options, old.options, `${question.id}: saved values remain stable`);
}
assert.deepEqual(definition.phases.slice(0, 8), DEFAULT_DEFINITION.phases.slice(0, 8));
const engine = createQuestionnaire(definition);
const extras = definition.pages.filter(page => page.kind === "module").map(page => page.id);
for (const selected of [[], ["M03"], extras]) {
  const phases = getOnboardingPhases(definition, {}, selected);
  assert.equal(phases.length, 12, "Service selection cannot grow the compact route");
  assert.deepEqual(phases.map(phase => phase.total), [5,5,5,5,5,5,5,4,5,5,5,5]);
  assert.equal(phases.reduce((sum, phase) => sum + phase.total, 0), 59);
  assert.equal(phases.filter(phase => phase.service).length, 0);
  assert.deepEqual(phases.flatMap(phase => phase.steps.map(step => step.id)), getGuidedSteps(engine.getPages({}, selected), {}).map(step => step.id));
  assert.ok(phases.every(phase => !phase.steps.some(step => step.question?.optionalDetail)));
}
const answers: Answers = {};
for (const q of questions.filter(question => !question.optionalDetail)) {
  answers[q.id] = q.feedback || !q.required ? { state: "not-applicable", value: "" } : getAllowedAnswerStates(q).includes("help") ? { state: "help", value: "" } : { state: "answered", value: q.fields?.length ? Object.fromEntries(q.fields.map(field => [field.id, field.type === "email" ? "client@example.test" : field.id === "timezone" ? "Asia/Kolkata" : "Example"])) : q.type === "checkbox" ? true : q.type === "email" ? "client@example.test" : "Example contact" };
}
assert.deepEqual(engine.validateSubmission(answers, extras), {}, "All 82 extra questions can remain blank");
assert.ok(getOnboardingPhases(definition, answers, extras).every(phase => phase.complete));
const mainProgress = getOnboardingPhases(definition, answers, extras).map(phase => [phase.completed, phase.total]);
answers["M03.2"] = { state: "answered", value: ["Quantity"] };
assert.deepEqual(getOnboardingPhases(definition, answers, extras).map(phase => [phase.completed, phase.total]), mainProgress, "Extra answers cannot alter progress");
assert.deepEqual(engine.validateSubmission(answers, extras), {});
validateDraftInput({ answers, extraModules: [], currentPage: "P16", currentQuestion: "review" }, definition);
answers["P15.1"] = { state: "answered", value: "bad email" };
assert.ok(engine.validateSubmission(answers)["P15.1"], "Supplied optional details are still validated");
answers["P15.1"] = { state: "answered", value: "" };
assert.deepEqual(engine.validateSubmission(answers), {});
assert.ok(getPhaseErrors(getOnboardingPhases(definition, answers, [], false).at(-1)!, answers, false)["P16.3"]);
const admin = getClientPhases(definition, answers, extras);
assert.equal(admin.length, 12);
assert.equal(admin.at(-1)!.optionalTopics.reduce((sum, topic) => sum + topic.questions.length, 0), 82);
assert.equal(admin.reduce((sum, phase) => sum + phase.questions.length, 0), 59);
for (const kind of ["shared", "module"] as const) {
  const added = addTopic(definition, kind);
  assert.deepEqual(validateDefinition(added.definition), []);
  assert.equal(added.definition.phases.length, 12);
  const next = addQuestion(added.definition, added.questionId.split(".")[0], added.questionId);
  assert.deepEqual(validateDefinition(next.definition), []);
  assert.equal(getOnboardingPhases(next.definition, answers, extras).length, 12);
}
const requiredExtra = structuredClone(definition);
requiredExtra.pages.flatMap(page => page.questions).find(question => question.optionalDetail)!.required = true;
assert.ok(validateDefinition(requiredExtra).some(error => error.includes("extra details must be optional")));
console.log("Compact brief checks passed: 12 fixed phases, 59 main questions, 82 optional extras, preserved IDs/values, hints, empty-extra submission, optional validation, privacy, admin parity and editor additions.");

assert.equal(getClientSummary({ definition, answers, extraModules: extras, status: "draft" }).questionCount, 59, "Admin list summaries exclude optional extras");
