import { writeFileSync } from "node:fs";
import { MODULE_PAGES, ONBOARDING_VERSION, SHARED_PAGES } from "../lib/onboarding/questionnaire";

const coreQuestionCount = SHARED_PAGES.reduce((sum, page) => sum + page.questions.length, 0);
const moduleQuestionCount = MODULE_PAGES.reduce((sum, page) => sum + page.questions.length, 0);
const data = {
  meta: {
    title: "Starter Shifter — Client Onboarding Questionnaire",
    source: "Bootstrap snapshot only; live questionnaires are stored in Convex questionnaireVersions",
    questionnaireVersion: ONBOARDING_VERSION,
    totalQuestions: coreQuestionCount + moduleQuestionCount,
    coreQuestionCount,
    corePageCount: SHARED_PAGES.length,
    moduleQuestionCount,
    moduleCount: MODULE_PAGES.length,
    note: "This is the complete question library, not one client’s mandatory form. Core topics are shared; service modules are conditional. Optional answers can be skipped. Options are stable saved values; optionLabels and optionDescriptions provide client-friendly presentation. Help explains how to answer; why explains the decision the answer supports.",
  },
  core: SHARED_PAGES,
  modules: MODULE_PAGES,
};
writeFileSync(new URL("../docs/onboarding-questions.json", import.meta.url), JSON.stringify(data, null, 2) + "\n");
console.log(`Exported ${data.meta.totalQuestions} questions (${ONBOARDING_VERSION}).`);
