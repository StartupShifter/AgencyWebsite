import { content } from "../../context/content";

/** Delivery stages the agency can update directly in the database. */
export type DeliveryStageStatus = "upcoming" | "in-progress" | "complete" | "blocked";

export const DELIVERY_STAGE_STATUS_LABELS = content.shared.deliveryStageStatusLabels as Record<
  DeliveryStageStatus,
  string
>;

export type DeliveryStageDefinition = {
  stageId: string;
  title: string;
  description: string;
};

/**
 * Seeded once per client so the workspace journey is read from the database.
 * The agency can change every field afterwards through the project records.
 */
export const DEFAULT_DELIVERY_STAGES = content.shared.defaultDeliveryStages as DeliveryStageDefinition[];

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
