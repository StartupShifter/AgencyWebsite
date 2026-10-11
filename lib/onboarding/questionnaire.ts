import { MODULE_PAGES } from "./module-pages";
import { SHARED_PAGES } from "./shared-pages";
import type { Answer, Answers, AnswerState, Page, Question, QuestionCondition, ValidationErrors } from "./types";

export const ONBOARDING_VERSION = "2026-10-11.v1";
export const QUESTIONNAIRE_VERSION = ONBOARDING_VERSION;
export { MODULE_PAGES, SHARED_PAGES };
export type { Answer, AnswerState, Answers, Page, Question, ValidationErrors } from "./types";

const lower = (value: string) => value.trim().toLocaleLowerCase("en");
const defaultStates: AnswerState[] = ["unknown", "not-applicable", "deferred", "help"];
export function getAllowedAnswerStates(question: Question): AnswerState[] {
  return question.allowStates ?? (question.id.startsWith("M") || !question.required ? defaultStates : ["unknown", "help"]);
}

export const ANSWER_STATE_LABELS: Record<AnswerState, string> = {
  answered: "Answer now",
  unknown: "Not sure yet",
  "not-applicable": "Not applicable",
  deferred: "Provide later",
  help: "Discuss with us",
};

export function answerValues(answer: Answer | undefined): string[] {
  if (!answer || answer.state !== "answered") return [];
  const value = answer.value;
  if (Array.isArray(value)) return value.filter((item) => typeof item === "string");
  if (typeof value === "string") return [value];
  if (typeof value === "number") return [String(value)];
  if (typeof value === "boolean") return value ? ["true"] : [];
  return Object.entries(value).flatMap(([key, item]) => item.trim() ? [key, item] : []);
}

function has(answers: Answers, id: string, options: string[]): boolean {
  const selected = answerValues(answers[id]).map(lower);
  return options.some((option) => selected.includes(lower(option)));
}

export function matchesCondition(condition: QuestionCondition, answers: Answers): boolean {
  return has(answers, condition.questionId, condition.includes);
}

export function isQuestionVisible(question: Question, answers: Answers): boolean {
  return !question.condition || matchesCondition(question.condition, answers);
}

export function isQuestionRequired(question: Question, answers: Answers): boolean {
  return question.required || Boolean(question.requiredWhen && matchesCondition(question.requiredWhen, answers)) || (question.id === "P01.4" && has(answers, "P02.3", ["Messaging/group"]) && /\bwhatsapp|\bsms|text messages?|phone[ -]based/i.test(answers["P02.3"]?.detail ?? ""));
}

/** Derive only relevant workflows. Extra IDs represent explicitly requested or agreed modules. */
export function getSelectedModules(answers: Answers = {}, extras: string[] = []): string[] {
  const validIds = new Set(MODULE_PAGES.map((page) => page.id));
  const selected = new Set(extras.map((id) => id.toUpperCase()).filter((id) => validIds.has(id)));
  const add = (...ids: string[]) => ids.forEach((id) => selected.add(id));

  if (has(answers, "P08.1", ["Website/store/application"])) add("M01", "M02");
  if (has(answers, "P04.1", ["Physical goods"])) add("M03");
  if (has(answers, "P08.1", ["Inventory"])) add("M04");
  if (has(answers, "P08.1", ["Shipping/order workflows"])) add("M05");
  if (has(answers, "P04.1", ["Appointments"]) || has(answers, "P08.2", ["Book"])) add("M07");
  if (has(answers, "P04.1", ["Project-based services", "Wholesale/B2B"]) || has(answers, "P08.2", ["Request a quote"])) add("M08");
  if (has(answers, "P04.1", ["Digital products/courses"]) || has(answers, "P08.2", ["Download/access content"])) add("M09");
  if (has(answers, "P04.1", ["Subscriptions/memberships"]) || has(answers, "P08.2", ["Subscribe"])) add("M10");
  if (has(answers, "P04.1", ["Marketplace connecting buyers and providers"]) || has(answers, "P08.2", ["Connect as buyers and providers"])) add("M11");
  if (has(answers, "P04.1", ["Internal operations"]) || has(answers, "P08.2", ["Submit/approve/track work"])) add("M12");
  if (has(answers, "P08.1", ["Invoicing"]) || has(answers, "P08.2", ["Buy", "Subscribe"])) add("M13");
  if (has(answers, "P08.1", ["Social presence"])) add("M14");
  if (has(answers, "P08.1", ["Campaigns/lead generation"])) add("M15", "M16");
  if (has(answers, "P08.1", ["Customer handling"])) add("M17");
  if (has(answers, "P08.1", ["Chatbot"])) add("M18", "M19");
  if (has(answers, "P08.1", ["Task automation", "ERP/CRM or other connections"])) add("M20", "M21");
  if (has(answers, "P08.1", ["Performance/reporting"])) add("M23");
  if (has(answers, "P08.1", ["Maintenance"])) add("M24");

  const specialRestrictions = answerValues(answers["P11.1"]).some((value) => !["none known", "none"].includes(lower(value))) || ["unknown", "help"].includes(answers["P11.1"]?.state ?? "");
  const specialData = has(answers, "P11.2", ["Financial information", "Health or other sensitive records", "Information about minors", "Staff-only information", "Different user roles", "Not sure"]) || ["unknown", "help"].includes(answers["P11.2"]?.state ?? "");
  const requirementsNeedAssessment = has(answers, "P11.3", ["Needs assessment"]) || ["unknown", "help"].includes(answers["P11.3"]?.state ?? "");
  if (specialRestrictions || specialData || requirementsNeedAssessment) add("M25", "M26");
  if (has(answers, "P08.2", ["Buy", "Book", "Subscribe", "Download/access content", "Register/sign in", "Connect as buyers and providers"])) add("M26");

  // A model description can identify a missed production workflow without an industry-specific route.
  const offer = [...answerValues(answers["P04.1"]), ...answerValues(answers["P04.2"]), answers["P04.1"]?.detail ?? ""].join(" ");
  if (/print[ -]on[ -]demand|made[ -]to[ -]order|personali[sz]ation|dropship/i.test(offer) || (selected.has("M03") && has(answers, "M03.2", ["Text/image personalization"]))) add("M06");
  if (selected.has("M06")) add("M03", "M05");
  if (selected.has("M07") && /\bdeposit|\bpayment|collect(?:ing)? money|charge(?:s|d)?|paid|refund/i.test([...answerValues(answers["M07.3"]), answers["M07.3"]?.detail ?? ""].join(" "))) add("M13");
  // Only active website answers refine migration. Retained inactive answers cannot restore a route.
  if (selected.has("M02") && (has(answers, "M02.3", ["URLs/search traffic", "Content", "Customer access", "Integrations"]) || (has(answers, "M01.1", ["Replace what we have", "Replacing it", "Replacing what you have", "Replace an existing site"]) && answerValues(answers["P07.1"]).some((value) => /^https?:\/\//i.test(value))))) add("M22");

  return [...selected].filter((id) => validIds.has(id)).sort();
}

export function getPages(answers: Answers = {}, selectedModules: string[] = []): Page[] {
  const modules = new Set(getSelectedModules(answers, selectedModules));
  return [
    ...SHARED_PAGES.filter((page) => Number(page.id.slice(1)) <= 12),
    ...MODULE_PAGES.filter((page) => modules.has(page.id)),
    ...SHARED_PAGES.filter((page) => Number(page.id.slice(1)) >= 13),
  ];
}

export function getPageById(id: string): Page | undefined {
  return [...SHARED_PAGES, ...MODULE_PAGES].find((page) => page.id === id);
}

export function isAnswerEmpty(answer: Answer | undefined): boolean {
  if (!answer) return true;
  if (answer.state !== "answered") return false;
  const value = answer.value;
  if (typeof value === "string") return !value.trim();
  if (Array.isArray(value)) return !value.some((item) => item.trim());
  if (typeof value === "boolean") return !value;
  if (typeof value === "number") return !Number.isFinite(value);
  return !Object.values(value).some((item) => item.trim());
}

const isRecord = (value: Answer["value"]): value is Record<string, string> => typeof value === "object" && value !== null && !Array.isArray(value);
const validEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
function validPublicUrl(value: string): boolean {
  try { const url = new URL(value); return ["https:", "http:"].includes(url.protocol) && Boolean(url.hostname); } catch { return false; }
}

/** Validate stored value shapes without requiring a draft's unfinished fields. */
export function validateAnswerShape(question: Question, answer: Answer): string | undefined {
  const value = answer.value;
  const strings = typeof value === "string" ? [value] : Array.isArray(value) ? value : isRecord(value) ? Object.values(value) : [];
  if (strings.some((item) => typeof item !== "string" || item.length > 6000) || (answer.detail?.length ?? 0) > 6000 || (answer.priority?.length ?? 0) > 6000) return "Please keep each answer or list item under 6,000 characters.";
  if (Array.isArray(value) && value.length > 50 || isRecord(value) && Object.keys(value).length > 50) return "Please use a document link for additional detail.";
  if (answer.state !== "answered") return;
  // An empty control is a valid unfinished draft; requiredness is checked on submission.
  if (typeof value === "string" && !value.trim()) return;
  if (typeof value === "string" && question.presets?.some((preset) => lower(preset) === lower(value))) return;
  if (["text", "textarea", "email", "tel", "url", "date", "select"].includes(question.type) && typeof value !== "string") return "Enter a text answer for this question.";
  if (question.type === "checkbox" && typeof value !== "boolean") return "Confirm this acknowledgement using the checkbox.";
  if (question.type === "range" && (typeof value !== "number" || !Number.isFinite(value))) return "Choose a value in the range.";
  if (question.type === "multi-select" && !Array.isArray(value)) return "Select the options that apply.";
  if (question.type === "assets") {
    if (!question.options?.length && !(typeof value === "string" || Array.isArray(value))) return "Add a document link, tool name, or a short list.";
    if (question.options?.length) {
      if (!isRecord(value)) return "Mark the readiness of each selected asset.";
      const allowedStatus = new Set(["ready", "needs-updating", "needs-help"]);
      for (const [asset, status] of Object.entries(value)) {
        if (!question.options.includes(asset)) return "Choose one of the listed assets.";
        if (["Nothing yet", "Not sure"].includes(asset)) {
          if (status !== "not-available") return "Choose a valid asset readiness status.";
          if (Object.keys(value).length !== 1) return "Choose nothing / unsure by itself, or mark the assets you have.";
        } else if (!allowedStatus.has(status)) return "Choose ready, needs updating, or needs help for each selected asset.";
      }
    }
  }
  if (question.type === "list" && !question.fields?.length && !(typeof value === "string" || Array.isArray(value))) return "Add a short list or a document link.";
  if (["country-timezone", "two-lists", "budget"].includes(question.type) || question.type === "list" && question.fields?.length) {
    if (!isRecord(value)) return "Complete the details shown for this question.";
    const allowedKeys = new Set(question.fields?.map((field) => field.id) ?? []);
    if (Object.keys(value).some((key) => question.id === "P15.2" ? !/^(?:name|email|role|access)(?:[2-9]|10)?$/.test(key) : !allowedKeys.has(key))) return "Use the fields shown for this question.";
  }
  return;
}

function validateQuestion(question: Question, answers: Answers): string | undefined {
  if (!isQuestionVisible(question, answers)) return;
  const required = isQuestionRequired(question, answers);
  const answer = answers[question.id];
  if (!answer) return required ? "Please answer this question or choose an available follow-up option." : undefined;
  if (!["answered", ...defaultStates].includes(answer.state)) return "Choose a valid answer status.";
  const shapeError = validateAnswerShape(question, answer);
  if (shapeError) return shapeError;
  if (answer.state !== "answered") {
    if (question.acknowledgement) return "Please review and confirm this acknowledgement.";
    if (!getAllowedAnswerStates(question).includes(answer.state)) return "Please provide this detail before continuing.";
    // A chosen phone channel requires a reachable number, rather than a follow-up marker.
    if (question.type === "tel" && required) return "Enter a reachable number for your selected contact channel.";
    return;
  }
  if (isAnswerEmpty(answer)) return required ? "Please provide an answer." : undefined;
  if (question.type === "checkbox") return answer.value === true ? undefined : "Please review and confirm this acknowledgement.";
  const value = answer.value;
  const text = typeof value === "string" ? value.trim() : "";
  const preset = question.presets?.some((item) => lower(item) === lower(text));
  if (preset) return;
  if (question.type === "list" && !question.fields?.length) {
    const items = (Array.isArray(value) ? value : text.split(/\r?\n/)).filter((item) => item.trim());
    const maximum = question.maxSelections ?? 10;
    if (items.length > maximum) return `Start with up to ${maximum} examples.`;
  }
  if (question.type === "email" && (!text || !validEmail(text))) return "Enter a valid email address.";
  if (question.type === "tel" && (!text || !/^\+[\d\s().-]{7,}$/.test(text) || text.replace(/\D/g, "").length < 7 || text.replace(/\D/g, "").length > 15)) return "Enter an international phone number with its country calling code.";
  if (question.type === "url" && (!text || !validPublicUrl(text))) return "Enter a full website address starting with https:// or http://.";
  if (question.type === "date" && (!text || !/^\d{4}-\d{2}-\d{2}$/.test(text) || Number.isNaN(Date.parse(text)) || new Date(text).toISOString().slice(0, 10) !== text)) return "Choose a valid date, or select flexible / not decided.";
  if (question.type === "range") {
    if (typeof value !== "number" || !Number.isFinite(value)) return "Choose a value in the range.";
    if (question.minimum !== undefined && value < question.minimum) return `Choose a value of at least ${question.minimum}.`;
    if (question.maximum !== undefined && value > question.maximum) return `Choose a value no higher than ${question.maximum}.`;
  }
  if (question.type === "select" || question.type === "multi-select") {
    const chosen = Array.isArray(value) ? value : text ? [text] : [];
    if (!chosen.length) return "Select an answer.";
    if (question.type === "select" && chosen.length !== 1) return "Select one answer.";
    if (chosen.some((item) => !item.trim()) || new Set(chosen.map(lower)).size !== chosen.length) return "Choose distinct, non-empty options.";
    if (question.options && !question.allowOther && chosen.some((item) => !question.options?.some((option) => lower(option) === lower(item)))) return "Select one of the available options.";
    if (question.maxSelections && chosen.length > question.maxSelections) return `Choose up to ${question.maxSelections} options.`;
    if (question.priority && (!answer.priority || !chosen.includes(answer.priority))) return "Mark one of your selected answers as the first priority.";
    const exclusive = chosen.filter((item) => ["none", "none known", "nothing", "nothing yet", "not sure", "not decided", "undecided", "no history", "no payment in this flow"].includes(lower(item)));
    if (exclusive.length && chosen.length > 1) return "Choose the none / unsure option by itself, or select the specific answers that apply.";
  }
  if (question.fields && ["country-timezone", "two-lists", "budget"].includes(question.type)) {
    if (!isRecord(value)) return "Complete the details shown for this question.";
    for (const field of question.fields) {
      const entry = value[field.id]?.trim() ?? "";
      if (field.required && !entry) return `Complete ${field.label.toLowerCase()}.`;
      if (entry && field.type === "email" && !validEmail(entry)) return `Enter a valid ${field.label.toLowerCase()}.`;
      if (entry && field.type === "url" && !validPublicUrl(entry)) return `Enter a full website address for ${field.label.toLowerCase()}.`;
    }
    if (question.id === "P12.2" && ["setup", "recurring", "advertising"].some((key) => value[key]?.trim()) && !value.currency?.trim()) return "Include the currency for your budget.";
    if (question.type === "two-lists" && question.maxSelections && value.now?.split(/\r?\n/).filter((item) => item.trim()).length > question.maxSelections) return `Start with up to ${question.maxSelections} launch priorities.`;
  }
  if (question.id === "P15.2" && isRecord(value)) {
    const indexes = new Set(Object.keys(value).map((key) => key.match(/^(?:name|email|role|access)(\d*)$/)?.[1]).filter((index): index is string => index !== undefined));
    for (const index of indexes) {
      const email = value[`email${index}`]?.trim() ?? "";
      const hasDetails = ["name", "email", "role", "access"].some((key) => value[`${key}${index}`]?.trim());
      if (hasDetails && !email) return "Add a work email for each requested workspace member.";
      if (email && !validEmail(email)) return "Enter a valid work email for each requested workspace member.";
    }
  }
  return;
}

export function validatePage(page: Page, answers: Answers, options: { privacyReady?: boolean } = {}): ValidationErrors {
  const errors: ValidationErrors = {};
  for (const question of page.questions) {
    const error = validateQuestion(question, answers);
    if (error) errors[question.id] = error;
  }
  if (page.questions.some((question) => question.acknowledgement === "privacy") && options.privacyReady === false) errors["P16.3"] = "Approved onboarding privacy information must be available before submission.";
  return errors;
}

/** Inactive saved module answers intentionally do not participate in validation. */
export function validateSubmission(answers: Answers, selectedModules: string[] = [], options: { privacyReady?: boolean } = {}): ValidationErrors {
  const errors = Object.assign({}, ...getPages(answers, selectedModules).map((page) => validatePage(page, answers))) as ValidationErrors;
  if (options.privacyReady === false) errors["P16.3"] = "Approved onboarding privacy information must be available before submission.";
  return errors;
}

export function getOpenItems(answers: Answers, selectedModules: string[] = []) {
  return getPages(answers, selectedModules).flatMap((page) => page.questions
    .filter((question) => isQuestionVisible(question, answers))
    .flatMap((question) => {
      const answer = answers[question.id];
      if (!answer || answer.state === "not-applicable") return [];
      if (answer.state !== "answered") return [{ questionId: question.id, pageId: page.id, label: question.label, state: answer.state, detail: answer.detail ?? "" }];
      const values = [...answerValues(answer), answer.detail ?? ""].join(" · ");
      const unresolved = /not sure|not decided|undecided|needs?[- ](?:guidance|help|review|assessment|preparing)|help (?:me|us)|please recommend|please research|explain on a call|discuss|colleague will provide|not prepared|policy not ready|no agreement yet|request a correction|need to arrange|baseline needed/i.test(values);
      return unresolved ? [{ questionId: question.id, pageId: page.id, label: question.label, state: "help" as const, detail: values }] : [];
    }));
}

export function formatAnswer(answer: Answer | undefined): string {
  if (!answer) return "Not answered";
  if (answer.state !== "answered") return [ANSWER_STATE_LABELS[answer.state], answer.detail].filter(Boolean).join(" — ");
  const value = answer.value;
  let result: string;
  if (Array.isArray(value)) result = value.join(", ");
  else if (typeof value === "boolean") result = value ? "Confirmed" : "Not confirmed";
  else if (typeof value === "object") result = Object.entries(value).filter(([, item]) => item.trim()).map(([key, item]) => `${key}: ${item}`).join("; ");
  else result = String(value);
  return [result, answer.priority ? `First priority: ${answer.priority}` : "", answer.detail].filter(Boolean).join(" — ");
}
