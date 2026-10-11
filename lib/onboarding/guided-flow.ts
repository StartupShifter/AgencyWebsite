import { isAnswerEmpty, isQuestionVisible, validatePage } from "./questionnaire";
import type { Answers, Page, Question } from "./types";

export type GuidedStep = { id: string; page: Page; question?: Question };

/** Keep stable question IDs and insert a dedicated review before confirmations. */
export function getGuidedSteps(pages: Page[], answers: Answers): GuidedStep[] {
  return pages.flatMap(page => page.questions.filter(question => isQuestionVisible(question, answers)).flatMap(question => {
    const step = { id: question.id, page, question };
    return question.id === "P16.2" ? [{ id: "review", page }, step] : [step];
  }));
}

export function getResumeStep(steps: GuidedStep[], pageId: string, answers: Answers, privacyReady: boolean, questionId?: string | null): string {
  if (questionId && steps.some(step => step.id === questionId && step.page.id === pageId)) return questionId;
  const candidates = steps.filter(step => step.page.id === pageId && step.question);
  return candidates.find(step => isAnswerEmpty(answers[step.id]) || Object.keys(validatePage({ ...step.page, questions: [step.question!] }, answers, { privacyReady })).length)?.id
    ?? candidates[0]?.id ?? steps[0].id;
}

export function getGuidedProgress(steps: GuidedStep[], answers: Answers, privacyReady: boolean) {
  const questions = steps.filter(step => step.question);
  const completed = questions.filter(step => !isAnswerEmpty(answers[step.id]) && !Object.keys(validatePage({ ...step.page, questions: [step.question!] }, answers, { privacyReady })).length).length;
  return { completed, total: questions.length, percent: Math.round(completed / Math.max(1, questions.length) * 100) };
}
