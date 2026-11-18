import type { FunctionReturnType } from "convex/server";
import type { api } from "@/convex/_generated/api";
import { getOnboardingPhases } from "./phase-engine";
import { getGuidedProgress, getGuidedSteps } from "./guided-flow";
import {
  formatAnswer,
  createQuestionnaire,
  isAnswerEmpty,
  isQuestionVisible,
  validatePage,
} from "./engine";
import { answerText } from "./summary";
import { getQuestionStatus } from "./progress-state";
export { answerText } from "./summary";

export type WorkspaceData = NonNullable<
  FunctionReturnType<typeof api.onboarding.getMine>
>;
export type WorkspaceDraft = WorkspaceData["draft"];
export type WorkspaceView =
  "overview" | "brief" | "journey" | "resources" | "agreement";
export const viewNames: Record<WorkspaceView, string> = {
  overview: "Overview",
  brief: "Project brief",
  journey: "Project journey",
  resources: "Brand & resources",
  agreement: "Agreement & billing",
};

export function getDashboardModel(data: WorkspaceData) {
  const { getPages, getOpenItems, getPageById } = createQuestionnaire(
    data.questionnaire.definition,
  );
  const {
    draft,
    engagement,
    pending,
    workspaceReady,
    project = null,
    stages: deliveryStages = [],
    activityLog = [],
  } = data;
  const answers = draft?.answers ?? {};
  const pages = getPages(answers, draft?.extraModules ?? []);
  const progress = getGuidedProgress(
    getGuidedSteps(pages, answers),
    answers,
    true,
  );
  const topics = pages.map((page) => {
    const questions = page.questions.filter((question) =>
      isQuestionVisible(question, answers),
    );
    const completed = getGuidedSteps([page], answers).filter(
      (step) => getQuestionStatus(step, answers, true) === "answered",
    ).length;
    const recorded = questions.filter(
      (question) => !isAnswerEmpty(answers[question.id]),
    ).length;
    return {
      ...page,
      questions,
      completed,
      recorded,
      total: questions.length,
      percent: completionPercent(completed, questions.length),
    };
  });
  const phases = getOnboardingPhases(
    data.questionnaire.definition,
    answers,
    draft?.extraModules ?? [],
    true,
  ).map((phase) => {
    const questions = phase.steps.flatMap((step) =>
      step.question
        ? [
            {
              id: step.id,
              question: step.question,
              page: step.page,
              status: getQuestionStatus(step, answers, true),
              error: validatePage(
                { ...step.page, questions: [step.question] },
                answers,
                { privacyReady: true },
              )[step.id],
            },
          ]
        : [],
    );
    const answered = questions.filter(
      (question) => question.status === "answered",
    ).length;
    const later = questions.filter(
      (question) => question.status === "later",
    ).length;
    const missing = questions.filter(
      (question) => question.status === "pending",
    ).length;
    const attention = questions.filter(
      (question) => question.status === "attention",
    ).length;
    return {
      ...phase,
      questions,
      answered,
      later,
      missing,
      attention,
      resolved: answered === phase.total,
      resolvedPercent: completionPercent(answered, phase.total),
      nextActionQuestion:
        questions.find(
          (question) =>
            question.status === "pending" || question.status === "attention",
        )?.id ??
        questions.find((question) => question.status === "later")?.id ??
        phase.nextQuestion,
    };
  });
  const nextPhase =
    phases.find((phase) => !phase.resolved) ??
    phases.find((phase) => phase.id === "final");
  const completedPhases = phases.filter((phase) => phase.resolved).length;
  const briefProgress = phases.reduce(
    (total, phase) => ({
      answered: total.answered + phase.answered,
      later: total.later + phase.later,
      missing: total.missing + phase.missing,
      attention: total.attention + phase.attention,
      total: total.total + phase.total,
    }),
    { answered: 0, later: 0, missing: 0, attention: 0, total: 0 },
  );
  const openItems = getOpenItems(answers, draft?.extraModules ?? []);
  const prerequisites = [
    {
      id: "brief",
      label: "Project brief",
      detail:
        draft?.status === "submitted"
          ? "Your brief has been submitted."
          : "Complete and submit your project details.",
      verified: draft?.status === "submitted",
    },
    {
      id: "identity",
      label: "Contact verification",
      detail: "Your project and workspace contact emails.",
      verified: Boolean(
        draft && !pending.some((item) => item.startsWith("Verify the project")),
      ),
    },
    {
      id: "agreement",
      label: "Signed agreement",
      detail: "Confirm the scope with your agency.",
      verified: Boolean(engagement?.signedAgreementRef),
    },
    {
      id: "advance",
      label: "40% advance",
      detail: "Agency verification against your agreed invoice.",
      verified: Boolean(engagement?.advancePaymentRef),
    },
    ...(engagement?.dependencies.map((item, index) => ({
      id: `dependency-${index}`,
      label: item.label,
      detail: `Responsible: ${item.owner}`,
      verified: item.verified,
    })) ?? []),
  ];
  const assetAnswer = answers["P10.1"];
  const assets =
    assetAnswer?.state === "answered" &&
    typeof assetAnswer.value === "object" &&
    !Array.isArray(assetAnswer.value)
      ? Object.entries(assetAnswer.value)
          .filter(([, value]) => value.trim())
          .map(([label, status]) => ({
            label,
            status:
              (
                {
                  ready: "Ready",
                  "needs-updating": "Needs updating",
                  "needs-help": "Needs help",
                  "not-available": "Not available",
                } as Record<string, string>
              )[status] ?? status,
          }))
      : assetAnswer?.state === "answered" && Array.isArray(assetAnswer.value)
        ? assetAnswer.value.map((label) => ({
            label,
            status: "Recorded in brief",
          }))
        : [];
  const persistedActivity = activityLog.map((item) => ({
    title: item.title,
    detail: item.detail,
    time: item.createdAt,
    view: workspaceView(item.view),
  }));
  const derivedActivity = [
    ...(draft
      ? [
          {
            title: "Project brief saved",
            detail: `${progress.completed} of ${progress.total} questions complete`,
            time: draft.updatedAt,
            view: "brief" as const,
          },
        ]
      : []),
    ...(draft?.submittedAt
      ? [
          {
            title: "Brief submitted",
            detail: "Your project details are ready for review",
            time: draft.submittedAt,
            view: "brief" as const,
          },
        ]
      : []),
    ...(engagement
      ? [
          {
            title: "Engagement record updated",
            detail: `${engagement.plan} · Scope and prerequisites recorded`,
            time: engagement.updatedAt,
            view: "agreement" as const,
          },
        ]
      : []),
  ];
  const activity = (
    persistedActivity.length ? persistedActivity : derivedActivity
  ).sort((a, b) => b.time - a.time);
  return {
    phases,
    nextPhase,
    completedPhases,
    answers,
    pages,
    topics,
    progress,
    briefProgress: {
      ...briefProgress,
      percent: completionPercent(briefProgress.answered, briefProgress.total),
    },
    openItems,
    prerequisites,
    assets,
    activity,
    workspaceReady,
    project,
    deliveryStages,
    submitted: draft?.status === "submitted",
    businessName:
      answerText(answers, "P01.2") === "Use my personal name"
        ? answerText(answers, "P01.1", "Your next chapter")
        : answerText(answers, "P01.2", "Your next chapter"),
    description: answerText(
      answers,
      "P03.1",
      "A dedicated space for your business, your brief, and everything that comes next.",
    ),
    selectedWork: formatAnswer(
      answers["P08.1"],
      getPageById("P08")?.questions.find((question) => question.id === "P08.1"),
    ),
  };
}

function workspaceView(value: string | null): WorkspaceView {
  return value === "overview" ||
    value === "brief" ||
    value === "journey" ||
    value === "resources" ||
    value === "agreement"
    ? value
    : "journey";
}
export type DashboardModel = ReturnType<typeof getDashboardModel>;

/** Reserve 100% for a brief with no unanswered or deferred details. */
function completionPercent(completed: number, total: number) {
  return total > 0 && completed === total
    ? 100
    : Math.min(99, Math.round((completed / Math.max(1, total)) * 100));
}

export function getBriefQuestionHref(
  base: string,
  phase: DashboardModel["phases"][number],
  question = phase.nextActionQuestion,
  mode: "question" | "phase" = "question",
) {
  return `${base}?${new URLSearchParams({ question, returnTo: "brief", mode })}`;
}
