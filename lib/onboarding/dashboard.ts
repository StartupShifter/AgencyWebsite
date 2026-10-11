import type { FunctionReturnType } from "convex/server";
import type { api } from "@/convex/_generated/api";
import { getGuidedProgress, getGuidedSteps } from "./guided-flow";
import {
  formatAnswer,
  getOpenItems,
  getPages,
  isAnswerEmpty,
  isQuestionVisible,
} from "./questionnaire";
import type { Answers } from "./types";

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

export function answerText(answers: Answers, id: string, fallback = "") {
  const answer = answers[id];
  return answer?.state === "answered" &&
    typeof answer.value === "string" &&
    answer.value.trim()
    ? answer.value.trim()
    : fallback;
}

export function getDashboardModel(data: WorkspaceData) {
  const { draft, engagement, pending, workspaceReady } = data;
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
    const completed = getGuidedProgress(
      getGuidedSteps([page], answers),
      answers,
      true,
    ).completed;
    const recorded = questions.filter(
      (question) => !isAnswerEmpty(answers[question.id]),
    ).length;
    return {
      ...page,
      questions,
      completed,
      recorded,
      total: questions.length,
      percent: Math.round((completed / Math.max(1, questions.length)) * 100),
    };
  });
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
  const activity = [
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
  ].sort((a, b) => b.time - a.time);
  return {
    answers,
    pages,
    topics,
    progress,
    openItems,
    prerequisites,
    assets,
    activity,
    workspaceReady,
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
    selectedWork: formatAnswer(answers["P08.1"]),
  };
}
export type DashboardModel = ReturnType<typeof getDashboardModel>;
