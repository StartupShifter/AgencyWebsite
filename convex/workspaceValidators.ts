import { v } from "convex/values";

export const projectStatusValidator = v.union(
  v.literal("planning"),
  v.literal("in-progress"),
  v.literal("blocked"),
  v.literal("complete"),
);

export const projectStageStatusValidator = v.union(
  v.literal("upcoming"),
  v.literal("in-progress"),
  v.literal("complete"),
  v.literal("blocked"),
);

export const activityTypeValidator = v.union(
  v.literal("brief"),
  v.literal("stage"),
  v.literal("document"),
  v.literal("engagement"),
  v.literal("system"),
);

export const activityActorValidator = v.union(
  v.literal("client"),
  v.literal("agency"),
  v.literal("system"),
);

export const documentStatusValidator = v.union(
  v.literal("received"),
  v.literal("reviewed"),
  v.literal("needs-update"),
  v.literal("approved"),
);

export const projectValidator = v.object({
  authUserId: v.string(),
  name: v.string(),
  summary: v.string(),
  status: projectStatusValidator,
  currentStage: v.string(),
  progressPercent: v.number(),
  nextStepTitle: v.string(),
  nextStepDetail: v.string(),
  startDate: v.union(v.string(), v.null()),
  targetDate: v.union(v.string(), v.null()),
  updatedAt: v.number(),
});

export const projectStageValidator = v.object({
  authUserId: v.string(),
  stageId: v.string(),
  order: v.number(),
  title: v.string(),
  description: v.string(),
  status: projectStageStatusValidator,
  progress: v.number(),
  startedAt: v.union(v.number(), v.null()),
  completedAt: v.union(v.number(), v.null()),
  targetDate: v.union(v.string(), v.null()),
  note: v.string(),
  visible: v.boolean(),
  updatedAt: v.number(),
});

export const activityValidator = v.object({
  authUserId: v.string(),
  type: activityTypeValidator,
  title: v.string(),
  detail: v.string(),
  actor: activityActorValidator,
  view: v.union(v.string(), v.null()),
  createdAt: v.number(),
});

export const documentValidator = v.object({
  authUserId: v.string(),
  storageId: v.id("_storage"),
  fileName: v.string(),
  contentType: v.string(),
  size: v.number(),
  category: v.string(),
  description: v.string(),
  status: documentStatusValidator,
  uploadedBy: v.union(v.literal("client"), v.literal("agency")),
  uploadedAt: v.number(),
  updatedAt: v.number(),
});

export const documentViewValidator = v.object({
  id: v.id("documents"),
  fileName: v.string(),
  contentType: v.string(),
  size: v.number(),
  category: v.string(),
  description: v.string(),
  status: documentStatusValidator,
  uploadedBy: v.union(v.literal("client"), v.literal("agency")),
  uploadedAt: v.number(),
  url: v.union(v.string(), v.null()),
});

export const projectViewValidator = v.object({
  name: v.string(),
  summary: v.string(),
  status: projectStatusValidator,
  currentStage: v.string(),
  progressPercent: v.number(),
  nextStepTitle: v.string(),
  nextStepDetail: v.string(),
  startDate: v.union(v.string(), v.null()),
  targetDate: v.union(v.string(), v.null()),
  updatedAt: v.number(),
});

export const projectStageViewValidator = v.object({
  stageId: v.string(),
  order: v.number(),
  title: v.string(),
  description: v.string(),
  status: projectStageStatusValidator,
  progress: v.number(),
  startedAt: v.union(v.number(), v.null()),
  completedAt: v.union(v.number(), v.null()),
  targetDate: v.union(v.string(), v.null()),
  note: v.string(),
  visible: v.boolean(),
  updatedAt: v.number(),
});

export const activityViewValidator = v.object({
  id: v.id("projectActivity"),
  type: activityTypeValidator,
  title: v.string(),
  detail: v.string(),
  actor: activityActorValidator,
  view: v.union(v.string(), v.null()),
  createdAt: v.number(),
});
