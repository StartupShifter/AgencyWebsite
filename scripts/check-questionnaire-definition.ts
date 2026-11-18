import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { DEFAULT_DEFINITION } from "../lib/onboarding/default-definition";
import { createQuestionnaire, validatePage } from "../lib/onboarding/engine";
import { validateDefinition, sameDefinitionValue } from "../lib/onboarding/definition-validation";
import { getOnboardingPhases } from "../lib/onboarding/phase-engine";
import legacy from "../convex/legacyQuestionnaire.json";
import { addTopic, addQuestion, replaceQuestion, removeQuestion } from "../../admin/lib/questionnaire/editor-model";
import type { QuestionnaireDefinition } from "../lib/onboarding/types";

assert.deepEqual(validateDefinition(DEFAULT_DEFINITION), []);
assert.deepEqual(validateDefinition(legacy as QuestionnaireDefinition), []);
const added = addTopic(structuredClone(DEFAULT_DEFINITION), "shared");
assert.deepEqual(validateDefinition(added.definition), [], "Adding a shared phase preserves page/phase order");
const withAnother = addQuestion(added.definition, added.questionId.split(".")[0], added.questionId);
assert.deepEqual(validateDefinition(withAnother.definition), []);
assert.ok(getOnboardingPhases(withAnother.definition).some(phase => phase.steps.some(step => step.id === withAnother.questionId)));
const removed = removeQuestion(withAnother.definition, added.questionId);
assert.deepEqual(validateDefinition(removed), []);
assert.throws(() => removeQuestion(removed, "P16.3"), /cannot be removed/);
const workflow = addTopic(DEFAULT_DEFINITION, "module");
const pageId = workflow.questionId.split(".")[0];
assert.deepEqual(validateDefinition(workflow.definition), []);
assert.ok(createQuestionnaire(workflow.definition).getPages({}, [pageId]).some(page => page.id === pageId), "Workflow IDs are not restricted to the original M01–M26");
workflow.definition.rules.push({ id: "fixture", all: [{ questionId: "P08.2", includes: ["Buy"] }], any: [], modules: [pageId] });
assert.ok(createQuestionnaire(workflow.definition).getSelectedModules({ "P08.2": { state: "answered", value: ["Buy"] } }).includes(pageId));
const invalid = structuredClone(DEFAULT_DEFINITION);
invalid.pages[0].questions = invalid.pages[0].questions.filter(question => question.id !== "P01.3");
assert.ok(validateDefinition(invalid).some(error => error.includes("P01.3")));
const changed = replaceQuestion(added.definition, { id: added.questionId, label: "A typed amount", type: "budget", required: true, fields: [{ id: "count", label: "Count", type: "number", required: true }] });
assert.deepEqual(validateDefinition(changed), []);
const customPage = createQuestionnaire(changed).getPageById(added.questionId.split(".")[0])!;
assert.ok(validatePage(customPage, { [added.questionId]: { state: "answered", value: { count: "not-a-number" } } })[added.questionId]);
const incomplete = replaceQuestion(added.definition, { id: added.questionId, label: "Missing structured fields", type: "budget", required: true });
assert.ok(validateDefinition(incomplete).some(error => error.includes("structured answer types")));
for (const file of ["types.ts", "definition-validation.ts"]) {
  const local = readFileSync(new URL(`../lib/onboarding/${file}`, import.meta.url), "utf8");
  const admin = readFileSync(new URL(`../../admin/lib/questionnaire/${file}`, import.meta.url), "utf8");
  assert.equal(admin.split("\n").slice(1).join("\n"), local, "Admin and portal definition contracts must stay synchronized");
}
console.log("Versioned definition checks passed: legacy/current snapshots, custom phases/questions/workflows, declarative routing, typed fields, system safeguards, and shared editor contract.");

assert.ok(sameDefinitionValue({ label: "Same", required: false }, { required: false, label: "Same" }), "Property order cannot reset an unchanged answer");
const retained = structuredClone(workflow.definition);
retained.rules.push({ id: "inactive-source", all: [{ questionId: "M03.2", includes: ["Quantity"] }], any: [], modules: [pageId] });
assert.ok(!createQuestionnaire(retained).getSelectedModules({ "M03.2": { state: "answered", value: ["Quantity"] } }).includes(pageId), "Inactive workflow answers cannot activate a new route");

const { getClientPhases, getModulePages, getOpenItemIds, formatQuestionAnswer } = await import("../../admin/lib/admin/onboarding");
assert.ok(getClientPhases(withAnother.definition, {}, []).some(phase => phase.questions.some(row => row.question.id === withAnother.questionId)), "Admin phases render backend-added questions");
assert.ok(getModulePages(workflow.definition).some(page => page.id === pageId), "Admin workflow picker renders backend-added modules");
assert.ok(getOpenItemIds(withAnother.definition, { [withAnother.questionId]: { state: "help", value: "", detail: "Review with us" } }, []).has(withAnother.questionId));
assert.equal(formatQuestionAnswer({ id: "Pcustom.1", label: "A choice", type: "select", required: false, options: ["stable-value"], optionLabels: { "stable-value": "Readable label" } }, { state: "answered", value: "stable-value" }), "Readable label", "Admin answers use assigned display labels without changing saved option values");
