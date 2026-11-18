import { getDashboardModel, type WorkspaceData } from "./dashboard";
import { formatAnswer, isQuestionRequired } from "./engine";
import { DELIVERY_STAGE_STATUS_LABELS } from "./delivery";

export const REPORT_ANSWER_LABELS = {
  answered: "Answered",
  pending: "Not answered",
  attention: "Needs attention",
  later: "For follow-up",
  review: "Review",
};

/** Use the assigned questionnaire and recorded delivery data, never a default brief. */
export function getProjectReport(data: WorkspaceData) {
  const model = getDashboardModel(data);
  const stages = model.deliveryStages
    .filter((stage) => stage.visible)
    .toSorted((a, b) => a.order - b.order);
  const build = stages.find((stage) => stage.stageId === "build");
  const buildStatus = build
    ? {
        upcoming: "Build has not started",
        "in-progress": "Your application is being built",
        blocked: "Build needs attention",
        complete: "Build phase complete",
      }[build.status]
    : "Build status not recorded";
  const visibleIds = new Set(model.topics.flatMap((topic) => topic.questions.map((q) => q.id)));
  const savedOutsidePath = data.questionnaire.definition.pages.flatMap((page) =>
    page.questions
      .filter((question) => !visibleIds.has(question.id) && model.answers[question.id])
      .map((question) => ({
        id: question.id,
        topic: page.title,
        label: question.label,
        answer: formatAnswer(model.answers[question.id], question),
      })),
  );
  return {
    ...model,
    stages,
    build,
    buildStatus,
    stageLabel: (status: keyof typeof DELIVERY_STAGE_STATUS_LABELS) => DELIVERY_STAGE_STATUS_LABELS[status],
    savedOutsidePath,
    phases: model.phases.map((phase) => ({
      ...phase,
      questions: phase.questions.map((item) => ({
        ...item,
        required: isQuestionRequired(item.question, model.answers),
        answer: formatAnswer(model.answers[item.id], item.question),
      })),
    })),
    projectStatus: model.project
      ? { planning: "Planning", "in-progress": "In progress", blocked: "Needs attention", complete: "Complete" }[model.project.status]
      : "Awaiting agency update",
  };
}

export function projectReportFilename(businessName: string, generatedAt: Date) {
  const name = businessName.normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 70);
  return `${name || "starter-shifter"}-project-report-${generatedAt.toISOString().slice(0, 10)}.pdf`;
}
