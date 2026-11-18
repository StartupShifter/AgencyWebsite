// Bootstrap fixture and offline-export compatibility. Client UI uses engine.ts with backend definitions.
import { createQuestionnaire } from "./engine";
import { DEFAULT_DEFINITION } from "./default-definition";
export * from "./engine";
export { MODULE_PAGES } from "./module-pages";
export { SHARED_PAGES } from "./shared-pages";
export const ONBOARDING_VERSION = "2026-11-18.v2";
export const QUESTIONNAIRE_VERSION = ONBOARDING_VERSION;
export const { getPages, getSelectedModules, getPageById, validateSubmission, getOpenItems } = createQuestionnaire(DEFAULT_DEFINITION);
