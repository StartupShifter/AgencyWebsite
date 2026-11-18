import { isStepComplete, type OnboardingPhase } from "./phase-engine";
import type { GuidedStep } from "./guided-flow";
import type { Answers } from "./types";
import { isAnswerEmpty } from "./engine";

export type QuestionStatus = "answered" | "later" | "pending" | "attention" | "review";
export const QUESTION_STATUS_LABELS: Record<QuestionStatus, string> = {
  answered: "Answered", later: "For later", pending: "Not answered", attention: "Needs attention", review: "Review",
};

/** Current location is independent of answer status, including on a revisit. */
export function getQuestionStatus(step: GuidedStep, answers: Answers, privacyReady: boolean): QuestionStatus {
  if (!step.question) return "review";
  const answer = answers[step.id];
  if (isStepComplete(step, answers, privacyReady)) {
    return answer.state === "answered" || answer.state === "not-applicable" ? "answered" : "later";
  }
  return !answer || (answer.state === "answered" && isAnswerEmpty(answer)) ? "pending" : "attention";
}

export function getPhaseQuestionProgress(phase: OnboardingPhase, answers: Answers, privacyReady: boolean) {
  const questions = phase.steps.filter(step => step.question);
  const later = questions.filter(step => getQuestionStatus(step, answers, privacyReady) === "later");
  const answered = questions.filter(step => getQuestionStatus(step, answers, privacyReady) === "answered").length;
  return { answered, later, pending: questions.length - answered - later.length, total: questions.length };
}
