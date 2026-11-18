import { getGuidedProgress, getGuidedSteps, type GuidedStep } from "./guided-flow";
import { createQuestionnaire, isAnswerEmpty, validatePage } from "./engine";
import type { Answers, ValidationErrors, QuestionnaireDefinition } from "./types";

export type OnboardingPhase = {
  id: string;
  title: string;
  steps: GuidedStep[];
  completed: number;
  total: number;
  percent: number;
  complete: boolean;
  nextQuestion: string;
  topics: string[];
  service: boolean;
};

/** Derive short sessions without persisting new IDs or discarding inactive answers. */
export function getOnboardingPhases(definition: QuestionnaireDefinition, answers: Answers = {}, extras: string[] = [], privacyReady = true): OnboardingPhase[] {
  const steps = getGuidedSteps(createQuestionnaire(definition).getPages(answers, extras), answers);
  function phase(id: string, title: string, phaseSteps: GuidedStep[], service = false): OnboardingPhase {
    const progress = getGuidedProgress(phaseSteps, answers, privacyReady);
    const questions = phaseSteps.filter(step => step.question);
    const next = questions.find(step => !isStepComplete(step, answers, privacyReady));
    return { id, title, steps: phaseSteps, ...progress,
      complete: progress.total > 0 && progress.completed === progress.total,
      nextQuestion: next?.id ?? phaseSteps[0]?.id ?? "",
      topics: [...new Set(questions.map(step => step.page.title))], service };
  }
  const core = definition.phases.map(definition => phase(definition.id, definition.title,
    steps.filter(step => definition.questionIds.includes(step.id) || (definition.id === "final" && step.id === "review"))))
    .filter(item => item.total > 0);
  const moduleSteps = steps.filter(step => step.page.kind === "module");
  const count = Math.ceil(moduleSteps.length / 5);
  const size = count ? Math.floor(moduleSteps.length / count) : 0;
  const remainder = count ? moduleSteps.length % count : 0;
  let offset = 0;
  const servicePhases = Array.from({ length: count }, (_, index) => {
    const batch = moduleSteps.slice(offset, offset += size + (index < remainder ? 1 : 0));
    return phase(`service-${batch[0].id}`, `Project details ${index + 1}`, batch, true);
  });
  const placement = new Map(definition.phases.map(phase => [phase.id, phase.placement]));
  return [...core.filter(phase => placement.get(phase.id) === "before-modules"), ...servicePhases, ...core.filter(phase => placement.get(phase.id) === "after-modules")];
}

export function isStepComplete(step: GuidedStep, answers: Answers, privacyReady: boolean) {
  return Boolean(step.question) && !isAnswerEmpty(answers[step.id]) &&
    !Object.keys(validatePage({ ...step.page, questions: [step.question!] }, answers, { privacyReady })).length;
}

export function getPhaseErrors(phase: OnboardingPhase, answers: Answers, privacyReady: boolean): ValidationErrors {
  return Object.fromEntries(phase.steps.filter(step => step.question).flatMap(step => {
    const errors = validatePage({ ...step.page, questions: [step.question!] }, answers, { privacyReady });
    if (errors[step.id]) return [[step.id, errors[step.id]]];
    return isAnswerEmpty(answers[step.id]) ? [[step.id, "Answer this question or choose an available follow-up option before finishing this phase."]] : [];
  }));
}

export function getPhaseHref(base: string, phase: OnboardingPhase) {
  return `${base}?question=${encodeURIComponent(phase.nextQuestion)}`;
}
