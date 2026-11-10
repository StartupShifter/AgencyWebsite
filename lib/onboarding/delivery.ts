/** Delivery stages the agency can update directly in the database. */
export type DeliveryStageStatus = "upcoming" | "in-progress" | "complete" | "blocked";

export const DELIVERY_STAGE_STATUS_LABELS: Record<DeliveryStageStatus, string> = {
  upcoming: "Upcoming",
  "in-progress": "In progress",
  complete: "Complete",
  blocked: "Needs attention",
};

export type DeliveryStageDefinition = {
  stageId: string;
  title: string;
  description: string;
};

/**
 * Seeded once per client so the workspace journey is read from the database.
 * The agency can change every field afterwards through the project records.
 */
export const DEFAULT_DELIVERY_STAGES: DeliveryStageDefinition[] = [
  {
    stageId: "brief",
    title: "Your project brief",
    description:
      "Share your business, goals, content, and requirements. Your answers help shape the project discussion.",
  },
  {
    stageId: "activation",
    title: "Agreement & activation",
    description:
      "Your agency verifies the contact details, signed agreement, 40% advance, and project dependencies before activation.",
  },
  {
    stageId: "research",
    title: "Research & direction",
    description:
      "Business, market, and competitor research establishes the direction. Timing and deliverables follow your agreed project scope.",
  },
  {
    stageId: "design",
    title: "Design & feedback",
    description:
      "Explore the agreed design work, review drafts, and share feedback. The number of variants and revisions follows your agreement.",
  },
  {
    stageId: "build",
    title: "Build & connect",
    description:
      "The agreed website, content, workflows, and supported connections take shape. Selected requirements are confirmed in the project scope.",
  },
  {
    stageId: "handoff",
    title: "Review & handoff",
    description:
      "Review the agreed deliverables and prepare for handoff. Launch requirements and ongoing support depend on your engagement.",
  },
];

export function defaultStageStatus(
  stageId: string,
  submitted: boolean,
  workspaceReady: boolean,
): DeliveryStageStatus {
  if (stageId === "brief") return submitted ? "complete" : "in-progress";
  if (stageId === "activation") {
    if (workspaceReady) return "complete";
    return submitted ? "in-progress" : "upcoming";
  }
  return "upcoming";
}
