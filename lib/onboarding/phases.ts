import { getGuidedProgress, getGuidedSteps, type GuidedStep } from "./guided-flow";
import { getPages, isAnswerEmpty, validatePage } from "./questionnaire";
import type { Answers, ValidationErrors } from "./types";

const ids = (page: string, ...numbers: number[]) => numbers.map(number => `${page}.${number}`);
export const CORE_PHASES = [
  { id: "meet", title: "Meet your project team", questionIds: [...ids("P01", 1, 2, 3, 4), "P02.1"] },
  { id: "business", title: "Your business at a glance", questionIds: [...ids("P02", 2, 3), ...ids("P03", 1, 2, 3)] },
  { id: "audience", title: "Your offer and audience", questionIds: [...ids("P04", 1, 2, 3), ...ids("P05", 1, 2)] },
  { id: "goals", title: "Your goals", questionIds: ["P05.3", ...ids("P06", 1, 2, 3)] },
  { id: "workflow", title: "How things work today", questionIds: [...ids("P07", 1, 2, 3), "P08.1"] },
  { id: "priorities", title: "Your launch priorities", questionIds: [...ids("P08", 2, 3), ...ids("P09", 1, 2, 3)] },
  { id: "brand", title: "Your brand and requirements", questionIds: [...ids("P10", 1, 2, 3), ...ids("P11", 1, 2)] },
  { id: "launch", title: "Your launch plan", questionIds: ["P11.3", ...ids("P12", 1, 2, 3)] },
  { id: "people", title: "People and agreement", questionIds: [...ids("P13", 1, 2, 3), "P14.1"] },
  { id: "workspace", title: "Billing and workspace", questionIds: [...ids("P14", 2, 3), ...ids("P15", 1, 2)] },
  { id: "final", title: "Review and send", questionIds: ["P15.3", ...ids("P16", 1, 2, 3)] },
];

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
export function getOnboardingPhases(answers: Answers = {}, extras: string[] = [], privacyReady = true): OnboardingPhase[] {
  const steps = getGuidedSteps(getPages(answers, extras), answers);
  function phase(id: string, title: string, phaseSteps: GuidedStep[], service = false): OnboardingPhase {
    const progress = getGuidedProgress(phaseSteps, answers, privacyReady);
    const questions = phaseSteps.filter(step => step.question);
    const next = questions.find(step => !isStepComplete(step, answers, privacyReady));
    return { id, title, steps: phaseSteps, ...progress,
      complete: progress.total > 0 && progress.completed === progress.total,
      nextQuestion: next?.id ?? phaseSteps[0].id,
      topics: [...new Set(questions.map(step => step.page.title))], service };
  }
  const core = CORE_PHASES.map(definition => phase(definition.id, definition.title,
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
  return [...core.slice(0, 8), ...servicePhases, ...core.slice(8)];
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
