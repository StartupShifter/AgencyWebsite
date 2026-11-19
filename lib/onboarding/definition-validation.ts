import type { QuestionnaireDefinition, Question, RoutingCondition } from "./types";

export const SYSTEM_QUESTIONS: Record<string, { type: Question["type"]; acknowledgement?: Question["acknowledgement"] }> = {
  "P01.1": { type: "text" }, "P01.3": { type: "email" },
  "P16.2": { type: "checkbox", acknowledgement: "accuracy" },
  "P16.3": { type: "checkbox", acknowledgement: "privacy" },
};

/** Semantic checks supplement the backend's strict structural validators. */
export function validateDefinition(definition: QuestionnaireDefinition): string[] {
  const errors: string[] = [];
  const pages = definition.pages;
  const questions = pages.flatMap(page => page.questions);
  const ids = new Set(questions.map(question => question.id));
  const modules = new Set(pages.filter(page => page.kind === "module").map(page => page.id));
  const unique = (items: string[]) => new Set(items).size === items.length;
  if (new TextEncoder().encode(JSON.stringify(definition)).byteLength > 650_000) errors.push("Keep the questionnaire under 650,000 UTF-8 bytes.");
  if (!pages.length || pages.length > 80 || questions.length > 500) errors.push("Use 1–80 topics and at most 500 questions.");
  if (!unique(pages.map(page => page.id)) || ids.size !== questions.length) errors.push("Topic IDs and question IDs must be unique.");
  for (const page of pages) {
    if (!/^[PM][a-zA-Z0-9_-]+$/.test(page.id) || !page.title.trim() || !page.questions.length) errors.push(`${page.id}: provide a valid ID, title, and at least one question.`);
    if ((page.kind === "module") !== page.id.startsWith("M")) errors.push(`${page.id}: workflow topic IDs start with M; shared topic IDs start with P.`);
    for (const question of page.questions) {
      const prefix = `${question.id}: `;
      if (!question.id.startsWith(`${page.id}.`) || !/^[a-zA-Z0-9_.-]+$/.test(question.id) || question.id.length > 100) errors.push(prefix + "use a stable ID within its topic.");
      if (!question.label.trim() || question.label.length > 600 || (question.help?.length ?? 0) > 2000 || (question.why?.length ?? 0) > 4000) errors.push(prefix + "provide a short label and concise help.");
      if (question.optionalDetail && (definition.layout !== "compact" || question.required || question.requiredWhen || question.acknowledgement)) errors.push(prefix + "extra details must be optional and cannot contain required confirmations.");
      const options = question.options ?? [];
      if (!unique(options.map(option => option.trim().toLocaleLowerCase("en"))) || options.some(option => !option.trim() || option.length > 300) || options.length > 100) errors.push(prefix + "choices must be distinct, non-empty, and at most 300 characters.");
      if (["select", "multi-select"].includes(question.type) && !options.length) errors.push(prefix + "choice questions need options.");
      if (Object.values(question.optionLabels ?? {}).some(label => !label.trim() || label.length > 300)) errors.push(prefix + "display labels must be non-empty and under 300 characters.");
      if (question.type === "multi-select" && options.length > 50 && (!question.maxSelections || question.maxSelections > 50)) errors.push(prefix + "set a selection limit of at most 50 for long choice lists.");
      if (question.presets && (question.presets.length > 20 || question.presets.some(value => !value.trim() || value.length > 300))) errors.push(prefix + "use at most 20 short quick answers.");
      if (SYSTEM_QUESTIONS[question.id] && question.presets?.length) errors.push(prefix + "system identity and confirmation fields require direct answers, not quick answers.");
      if (question.type === "checkbox" && question.presets?.length) errors.push(prefix + "confirmation checkboxes do not use quick answers.");
      if (question.feedback && question.required) errors.push(prefix + "experience feedback must remain optional.");
      for (const value of [...Object.keys(question.optionLabels ?? {}), ...Object.keys(question.optionDescriptions ?? {}), ...(question.exclusiveOptions ?? [])]) if (!options.includes(value)) errors.push(prefix + `choice metadata refers to missing value ${value}.`);
      if (question.maxSelections !== undefined && (!Number.isInteger(question.maxSelections) || question.maxSelections < 1 || question.maxSelections > 50)) errors.push(prefix + "the selection limit must be 1–50.");
      if (question.minimum !== undefined && question.maximum !== undefined && question.minimum > question.maximum) errors.push(prefix + "the minimum must not exceed the maximum.");
      if (["country-timezone", "two-lists", "budget"].includes(question.type) && !question.fields?.length) errors.push(prefix + "structured answer types need fields.");
      if (question.type === "country-timezone" && (!question.fields?.some(field => field.id === "country") || !question.fields?.some(field => field.id === "timezone"))) errors.push(prefix + "country/time zone needs country and timezone fields.");
      if (question.fields?.length && !["country-timezone", "two-lists", "budget", "list"].includes(question.type)) errors.push(prefix + "structured fields require a structured answer type.");
      if (question.type === "country-timezone" && question.fields?.some(field => !["country", "timezone"].includes(field.id))) errors.push(prefix + "country/time zone supports only country and timezone fields.");
      if (question.id === "P15.2" && question.type === "list" && (question.fields?.length !== 4 || ["name", "email", "role", "access"].some(id => !question.fields?.some(field => field.id === id)))) errors.push(prefix + "the repeating workspace list needs name, email, role, and access field IDs. Use another question for custom fields.");
      if (question.priority && question.type !== "multi-select") errors.push(prefix + "first priority is available for multiple-choice questions only.");
      if (question.fields && (!unique(question.fields.map(field => field.id)) || question.fields.length > 20 || question.fields.some(field => !/^[a-zA-Z0-9_-]+$/.test(field.id) || !field.label.trim()))) errors.push(prefix + "fields need distinct stable IDs and labels (at most 20).");
      if (question.condition && !ids.has(question.condition.questionId) || question.requiredWhen && !ids.has(question.requiredWhen.questionId)) errors.push(prefix + "a condition refers to a missing question.");
      if (question.condition && !question.condition.includes.length || question.requiredWhen && !question.requiredWhen.includes.length) errors.push(prefix + "conditions need at least one answer value.");
      if (question.condition?.questionId === question.id || question.requiredWhen?.questionId === question.id) errors.push(prefix + "a question cannot depend on itself.");
      if (question.acknowledgement && SYSTEM_QUESTIONS[question.id]?.acknowledgement !== question.acknowledgement) errors.push(prefix + "only the built-in confirmations can acknowledge accuracy or privacy.");
    }
  }
  for (const [id, spec] of Object.entries(SYSTEM_QUESTIONS)) {
    const question = questions.find(question => question.id === id);
    if (!question || question.type !== spec.type || !question.required || question.allowStates?.length !== 0 || question.condition || question.acknowledgement !== spec.acknowledgement) errors.push(`${id}: keep the required identity/confirmation field, type, and direct-answer requirement.`);
  }
  if (!unique(definition.phases.map(phase => phase.id)) || definition.phases.length > 100) errors.push("Phase IDs must be unique; use at most 100 phases.");
  const assigned = definition.phases.flatMap(phase => phase.questionIds);
  if (definition.layout === "compact") {
    const core = questions.filter(question => !question.optionalDetail).map(question => question.id);
    if (!unique(assigned) || assigned.length !== core.length || core.some(id => !assigned.includes(id))) errors.push("Assign every main question to exactly one phase; keep extra details outside the guided phases.");
    if (definition.phases.length > 12) errors.push("Keep the compact brief within twelve phases. Add extra questions to the optional library.");
    if (questions.some(question => !question.help?.trim())) errors.push("Every compact question needs a practical hint.");
  } else {
  const shared = pages.filter(page => page.kind !== "module").flatMap(page => page.questions.map(question => question.id));
  if (!unique(assigned) || assigned.length !== shared.length || shared.some(id => !assigned.includes(id))) errors.push("Assign every shared question to exactly one phase; workflow questions are grouped automatically.");
  if (JSON.stringify(assigned) !== JSON.stringify(shared)) errors.push("Shared phase questions must follow the shared topic/question order.");
  const expectedOrder = [
    ...definition.phases.filter(phase => phase.placement === "before-modules").flatMap(phase => phase.questionIds),
    ...pages.filter(page => page.kind === "module").flatMap(page => page.questions.map(question => question.id)),
    ...definition.phases.filter(phase => phase.placement === "after-modules").flatMap(phase => phase.questionIds),
  ];
  if (JSON.stringify(expectedOrder) !== JSON.stringify(questions.map(question => question.id))) errors.push("Topic order must match the introductory phases, workflows, then closing phases.");
  }
  const final = definition.phases.at(-1);
  if (final?.id !== "final" || final.placement !== "after-modules" || !final.questionIds.includes("P16.2") || !final.questionIds.includes("P16.3") || assigned.at(-1) !== "P16.3") errors.push("Keep final review and both confirmations in the last phase, ending with privacy.");
  let afterModules = false;
  for (const phase of definition.phases) {
    if (!/^[a-zA-Z0-9_-]+$/.test(phase.id) || !phase.title.trim() || !phase.questionIds.length || phase.questionIds.length > 5) errors.push(`${phase.id}: each phase needs a title and 1–5 questions.`);
    if (phase.placement === "after-modules") afterModules = true;
    else if (afterModules) errors.push("Place all introductory phases before the closing phases.");
  }
  if (!unique(definition.rules.map(rule => rule.id)) || definition.rules.length > 150) errors.push("Routing rules need unique IDs; use at most 150 rules.");
  const checkCondition = (condition: RoutingCondition) => {
    if (condition.moduleId) return modules.has(condition.moduleId) && !condition.questionId;
    return Boolean(condition.questionId && ids.has(condition.questionId) && (!condition.states || condition.states.every(state => ["answered", "unknown", "not-applicable", "deferred", "help"].includes(state))) &&
      [condition.includes, condition.states, condition.except, condition.textIncludes].some(values => values?.length));
  };
  for (const rule of definition.rules) {
    if (!rule.id.trim() || !rule.modules.length || rule.modules.some(id => !modules.has(id)) || ![...rule.all, ...rule.any].every(checkCondition)) errors.push(`${rule.id}: routing references a missing question or workflow, or an empty condition.`);
  }
  // Conditional visibility cycles cannot be answered in a one-question-at-a-time flow.
  const byId = new Map(questions.map(question => [question.id, question]));
  for (const question of questions) {
    const seen = new Set<string>(); let current: Question | undefined = question;
    while (current?.condition) {
      if (seen.has(current.id)) { errors.push(`${question.id}: remove the circular visibility condition.`); break; }
      seen.add(current.id); current = byId.get(current.condition.questionId);
    }
  }
  return [...new Set(errors)];
}

/** Object property order is not an editorial change; array order remains meaningful. */
export function sameDefinitionValue(left: unknown, right: unknown): boolean {
  function canonical(value: unknown): unknown {
    if (Array.isArray(value)) return value.map(canonical);
    if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)).map(([key, item]) => [key, canonical(item)]));
    return value;
  }
  return JSON.stringify(canonical(left)) === JSON.stringify(canonical(right));
}
