/** Serializable question and answer records shared by the client and Convex. */
export type AnswerState = "answered" | "unknown" | "not-applicable" | "deferred" | "help";
export type AnswerValue = string | string[] | number | boolean | Record<string, string>;
export type Answer = {
  state: AnswerState;
  value: AnswerValue;
  detail?: string;
  /** The chosen first priority when a question permits several selections. */
  priority?: string;
};
export type Answers = Record<string, Answer>;
export type QuestionType = "text" | "textarea" | "email" | "tel" | "url" | "select" | "multi-select" | "checkbox" | "range" | "date" | "country-timezone" | "list" | "two-lists" | "assets" | "budget";
export type QuestionCondition = { questionId: string; includes: string[] };
export type QuestionField = {
  id: string;
  label: string;
  type?: "text" | "email" | "url" | "number" | "date";
  placeholder?: string;
  required?: boolean;
};
export type Question = {
  id: string;
  label: string;
  type: QuestionType;
  required: boolean;
  options?: string[];
  placeholder?: string;
  help?: string;
  allowOther?: boolean;
  maxSelections?: number;
  presets?: string[];
  condition?: QuestionCondition;
  requiredWhen?: QuestionCondition;
  priority?: boolean;
  minimum?: number;
  maximum?: number;
  fields?: QuestionField[];
  allowStates?: AnswerState[];
  acknowledgement?: "accuracy" | "privacy";
};
export type Page = {
  id: string;
  title: string;
  description?: string;
  kind?: "shared" | "module";
  questions: Question[];
};
export type OnboardingPage = Page;
export type ValidationErrors = Record<string, string>;
