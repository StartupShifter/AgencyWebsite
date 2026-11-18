import { resolveQuestionnaire } from "./questionnaireStore";
import { ConvexError, v } from "convex/values";
import { internalMutation, type MutationCtx } from "./_generated/server";
import { authComponent } from "./auth";
import {
  DEFAULT_DELIVERY_STAGES,
  defaultStageStatus,
} from "../lib/onboarding/delivery";
import { getClientSummary } from "../lib/onboarding/summary";
import {
  activityValidator,
  projectStageValidator,
  projectValidator,
} from "./workspaceValidators";

type NewActivity = {
  authUserId: string;
  type: "brief" | "stage" | "document" | "engagement" | "system";
  title: string;
  detail: string;
  actor: "client" | "agency" | "system";
  view?: string | null;
};

/** Append a client-visible update to the persisted activity timeline. */
export async function addActivity(ctx: MutationCtx, activity: NewActivity) {
  await ctx.db.insert("projectActivity", {
    ...activity,
    view: activity.view ?? null,
    createdAt: Date.now(),
  });
}

async function requireClient(ctx: MutationCtx, authUserId: string) {
  const user = await authComponent.getAnyUserById(ctx, authUserId);
  if (!user) throw new ConvexError("Client account does not exist.");
  return user;
}

async function recalculateProject(
  ctx: MutationCtx,
  authUserId: string,
  now: number,
) {
  const project = await ctx.db
    .query("projects")
    .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
    .unique();
  if (!project) return;
  const stages = await ctx.db
    .query("projectStages")
    .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
    .collect();
  if (!stages.length) return;
  const ordered = [...stages].sort((a, b) => a.order - b.order);
  const complete = ordered.filter((stage) => stage.status === "complete").length;
  const active =
    ordered.find((stage) => stage.status === "in-progress") ??
    ordered.find((stage) => stage.status !== "complete" && stage.visible);
  await ctx.db.patch(project._id, {
    progressPercent: Math.round((complete / ordered.length) * 100),
    currentStage: active?.stageId ?? project.currentStage,
    status: complete === ordered.length ? "complete" : project.status,
    updatedAt: now,
  });
}

/**
 * Create the agency-managed project and the six delivery stages once.
 * Existing records are never overwritten, so agency edits stay authoritative.
 */
export const seedWorkspace = internalMutation({
  args: {
    authUserId: v.string(),
    submitted: v.optional(v.boolean()),
    workspaceReady: v.optional(v.boolean()),
  },
  returns: v.null(),
  handler: async (ctx, { authUserId, submitted, workspaceReady }) => {
    await requireClient(ctx, authUserId);
    const draft = await ctx.db
      .query("onboarding")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
      .unique();
    const isSubmitted = submitted ?? draft?.status === "submitted";
    const ready = workspaceReady ?? false;
    const summary = draft
      ? getClientSummary({
          definition: (await resolveQuestionnaire(ctx, "client", authUserId, draft.version)).definition,
          answers: draft.answers,
          extraModules: draft.extraModules,
          status: draft.status,
          submittedAt: draft.submittedAt,
        })
      : null;
    const now = Date.now();

    const existingProject = await ctx.db
      .query("projects")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
      .unique();
    if (!existingProject) {
      await ctx.db.insert("projects", {
        authUserId,
        name: summary?.businessName || "Your project",
        summary:
          summary?.description ||
          "Your project brief, agreement, and delivery progress live here.",
        status: "planning",
        currentStage: isSubmitted ? "activation" : "brief",
        progressPercent: 0,
        nextStepTitle: isSubmitted
          ? ready
            ? "Ready to arrange delivery"
            : "Agreement & activation"
          : "Complete your project brief",
        nextStepDetail: isSubmitted
          ? ready
            ? "Your brief and prerequisites are verified. Your agency can now arrange the agreed next steps."
            : "Your agency will confirm the remaining prerequisites."
          : "Answer your onboarding questions, then return here to see your progress.",
        startDate: null,
        targetDate: null,
        updatedAt: now,
      });
    } else if (
      existingProject.name === "Your project" &&
      summary?.businessName
    ) {
      await ctx.db.patch(existingProject._id, {
        name: summary.businessName,
        updatedAt: now,
      });
    }

    const existingStages = await ctx.db
      .query("projectStages")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
      .collect();
    const existingIds = new Set(existingStages.map((stage) => stage.stageId));
    for (const [order, stage] of DEFAULT_DELIVERY_STAGES.entries()) {
      if (existingIds.has(stage.stageId)) continue;
      const status = defaultStageStatus(stage.stageId, isSubmitted, ready);
      await ctx.db.insert("projectStages", {
        authUserId,
        stageId: stage.stageId,
        order,
        title: stage.title,
        description: stage.description,
        status,
        progress: status === "complete" ? 100 : 0,
        startedAt: status === "upcoming" ? null : now,
        completedAt: status === "complete" ? now : null,
        targetDate: null,
        note: "",
        visible: true,
        updatedAt: now,
      });
    }
    const stages = await ctx.db
      .query("projectStages")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
      .collect();
    for (const stage of stages) {
      if (stage.status === "blocked") continue;
      if (stage.stageId === "brief") {
        const status = isSubmitted ? "complete" : "in-progress";
        if (stage.status !== status)
          await ctx.db.patch(stage._id, {
            status,
            progress: isSubmitted ? 100 : stage.progress,
            startedAt: stage.startedAt ?? now,
            completedAt: isSubmitted ? (stage.completedAt ?? now) : null,
            updatedAt: now,
          });
      }
      if (stage.stageId === "activation") {
        const status = ready
          ? "complete"
          : isSubmitted
            ? "in-progress"
            : "upcoming";
        if (stage.status !== status)
          await ctx.db.patch(stage._id, {
            status,
            progress: ready ? 100 : 0,
            startedAt: status === "upcoming" ? null : (stage.startedAt ?? now),
            completedAt: ready ? (stage.completedAt ?? now) : null,
            updatedAt: now,
          });
      }
    }
    await recalculateProject(ctx, authUserId, now);
    return null;
  },
});

/** Agency tooling: replace the project summary and delivery checkpoint. */
export const upsertProject = internalMutation({
  args: { project: projectValidator },
  returns: v.null(),
  handler: async (ctx, { project }) => {
    await requireClient(ctx, project.authUserId);
    const now = Date.now();
    const existing = await ctx.db
      .query("projects")
      .withIndex("by_authUserId", (q) =>
        q.eq("authUserId", project.authUserId),
      )
      .unique();
    if (existing)
      await ctx.db.replace(existing._id, { ...project, updatedAt: now });
    else await ctx.db.insert("projects", { ...project, updatedAt: now });
    await addActivity(ctx, {
      authUserId: project.authUserId,
      type: "stage",
      title: "Project progress updated",
      detail: `${project.progressPercent}% complete · ${project.currentStage}`,
      actor: "agency",
      view: "journey",
    });
    return null;
  },
});

/** Agency tooling: create or update one delivery stage for a client. */
export const upsertStage = internalMutation({
  args: { stage: projectStageValidator },
  returns: v.null(),
  handler: async (ctx, { stage }) => {
    await requireClient(ctx, stage.authUserId);
    const now = Date.now();
    const existing = await ctx.db
      .query("projectStages")
      .withIndex("by_authUserId_stageId", (q) =>
        q.eq("authUserId", stage.authUserId).eq("stageId", stage.stageId),
      )
      .unique();
    if (existing)
      await ctx.db.replace(existing._id, { ...stage, updatedAt: now });
    else await ctx.db.insert("projectStages", { ...stage, updatedAt: now });
    await recalculateProject(ctx, stage.authUserId, now);
    await addActivity(ctx, {
      authUserId: stage.authUserId,
      type: "stage",
      title: `Stage updated: ${stage.title}`,
      detail: `${stage.status.replace("-", " ")} · ${stage.progress}% complete`,
      actor: "agency",
      view: "journey",
    });
    return null;
  },
});

/** Agency tooling: append an explicit update to a client's timeline. */
export const recordActivity = internalMutation({
  args: { activity: activityValidator },
  returns: v.null(),
  handler: async (ctx, { activity }) => {
    await requireClient(ctx, activity.authUserId);
    await ctx.db.insert("projectActivity", activity);
    return null;
  },
});
