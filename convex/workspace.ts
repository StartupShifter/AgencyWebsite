import { resolveQuestionnaire } from "./questionnaireStore";
import { ConvexError, v } from "convex/values";
import { internalQuery, type QueryCtx } from "./_generated/server";
import { authComponent } from "./auth";
import { getClientSummary } from "../lib/onboarding/summary";
import {
  activityViewValidator,
  documentViewValidator,
  projectStageViewValidator,
  projectViewValidator,
} from "./workspaceValidators";

const clientSummaryValidator = v.object({
  authUserId: v.string(),
  name: v.string(),
  email: v.string(),
  businessName: v.string(),
  contactName: v.string(),
  contactEmail: v.string(),
  description: v.string(),
  briefStatus: v.union(v.literal("draft"), v.literal("submitted")),
  submittedAt: v.union(v.number(), v.null()),
  answersUpdatedAt: v.number(),
  plan: v.union(v.string(), v.null()),
  setupFee: v.union(v.number(), v.null()),
  recurringFee: v.union(v.number(), v.null()),
  currency: v.union(v.string(), v.null()),
  selectedModules: v.array(v.string()),
  selectedWork: v.array(v.string()),
  completedQuestions: v.number(),
  totalQuestions: v.number(),
  briefProgressPercent: v.number(),
  projectStatus: v.union(v.string(), v.null()),
  currentStage: v.union(v.string(), v.null()),
  deliveryProgressPercent: v.union(v.number(), v.null()),
  documentCount: v.number(),
  latestDocumentAt: v.union(v.number(), v.null()),
});

async function projectView(ctx: QueryCtx, authUserId: string) {
  const project = await ctx.db
    .query("projects")
    .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
    .unique();
  if (!project) return null;
  return {
    name: project.name,
    summary: project.summary,
    status: project.status,
    currentStage: project.currentStage,
    progressPercent: project.progressPercent,
    nextStepTitle: project.nextStepTitle,
    nextStepDetail: project.nextStepDetail,
    startDate: project.startDate,
    targetDate: project.targetDate,
    updatedAt: project.updatedAt,
  };
}

async function stageViews(ctx: QueryCtx, authUserId: string) {
  const stages = await ctx.db
    .query("projectStages")
    .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
    .collect();
  return stages
    .sort((a, b) => a.order - b.order)
    .map((stage) => ({
      stageId: stage.stageId,
      order: stage.order,
      title: stage.title,
      description: stage.description,
      status: stage.status,
      progress: stage.progress,
      startedAt: stage.startedAt,
      completedAt: stage.completedAt,
      targetDate: stage.targetDate,
      note: stage.note,
      visible: stage.visible,
      updatedAt: stage.updatedAt,
    }));
}

async function documentViews(ctx: QueryCtx, authUserId: string) {
  const documents = await ctx.db
    .query("documents")
    .withIndex("by_authUserId_uploadedAt", (q) => q.eq("authUserId", authUserId))
    .order("desc")
    .collect();
  return await Promise.all(
    documents.map(async (document) => ({
      id: document._id,
      fileName: document.fileName,
      contentType: document.contentType,
      size: document.size,
      category: document.category,
      description: document.description,
      status: document.status,
      uploadedBy: document.uploadedBy,
      uploadedAt: document.uploadedAt,
      url: await ctx.storage.getUrl(document.storageId),
    })),
  );
}

/**
 * Agency-only overview: one row per client, ready for filtering by plan,
 * route, progress, delivery stage, or uploaded documents.
 */
export const listClients = internalQuery({
  args: {},
  returns: v.array(clientSummaryValidator),
  handler: async (ctx) => {
    const [drafts, engagements, projects, documents] =
      await Promise.all([
        ctx.db.query("onboarding").collect(),
        ctx.db.query("engagements").collect(),
        ctx.db.query("projects").collect(),
        ctx.db.query("documents").collect(),
      ]);
    const authUserIds = [
      ...new Set([
        ...drafts.map((draft) => draft.authUserId),
        ...engagements.map((engagement) => engagement.authUserId),
        ...projects.map((project) => project.authUserId),
        ...documents.map((document) => document.authUserId),
      ]),
    ];
    const rows = await Promise.all(
      authUserIds.map(async (authUserId) => {
        const user = await authComponent.getAnyUserById(ctx, authUserId);
        const draft = drafts.find((item) => item.authUserId === authUserId);
        const engagement = engagements.find(
          (item) => item.authUserId === authUserId,
        );
        const project = projects.find(
          (item) => item.authUserId === authUserId,
        );
        const latestDocument = documents
          .filter((document) => document.authUserId === authUserId)
          .sort((a, b) => b.uploadedAt - a.uploadedAt)[0];
        const summary = draft
          ? getClientSummary({
          definition: (await resolveQuestionnaire(ctx, "client", authUserId, draft.version)).definition,
              answers: draft.answers,
              extraModules: draft.extraModules,
              status: draft.status,
              submittedAt: draft.submittedAt,
            })
          : null;
        return {
          authUserId,
          name: user?.name ?? "",
          email: user?.email ?? "",
          businessName: summary?.businessName ?? project?.name ?? "",
          contactName: summary?.contactName ?? "",
          contactEmail: summary?.contactEmail ?? "",
          description: summary?.description ?? project?.summary ?? "",
          briefStatus: draft?.status ?? ("draft" as const),
          submittedAt: draft?.submittedAt ?? null,
          answersUpdatedAt: draft?.updatedAt ?? project?.updatedAt ?? 0,
          plan: engagement?.plan ?? null,
          setupFee: engagement?.setupFee ?? null,
          recurringFee: engagement?.recurringFee ?? null,
          currency: engagement?.currency ?? null,
          selectedModules: summary?.selectedModules ?? [],
          selectedWork: summary?.selectedWork ?? [],
          completedQuestions: summary?.progress.completed ?? 0,
          totalQuestions: summary?.progress.total ?? 0,
          briefProgressPercent: summary?.progress.percent ?? 0,
          projectStatus: project?.status ?? null,
          currentStage: project?.currentStage ?? null,
          deliveryProgressPercent: project?.progressPercent ?? null,
          documentCount: documents.filter(
            (document) => document.authUserId === authUserId,
          ).length,
          latestDocumentAt: latestDocument?.uploadedAt ?? null,
        };
      }),
    );
    return rows.sort((a, b) => b.answersUpdatedAt - a.answersUpdatedAt);
  },
});

/** Agency-only full record for one client, including every saved answer. */
export const getClient = internalQuery({
  args: { authUserId: v.string() },
  returns: v.object({
    authUserId: v.string(),
    user: v.union(
      v.null(),
      v.object({ name: v.string(), email: v.string() }),
    ),
    draft: v.union(
      v.null(),
      v.object({
        version: v.string(),
        answers: v.record(
          v.string(),
          v.object({
            state: v.string(),
            value: v.union(
              v.string(),
              v.array(v.string()),
              v.number(),
              v.boolean(),
              v.record(v.string(), v.string()),
            ),
            detail: v.optional(v.string()),
            priority: v.optional(v.string()),
          }),
        ),
        extraModules: v.array(v.string()),
        currentPage: v.string(),
        currentQuestion: v.union(v.string(), v.null()),
        status: v.union(v.literal("draft"), v.literal("submitted")),
        updatedAt: v.number(),
        submittedAt: v.union(v.number(), v.null()),
        privacyVersion: v.string(),
      }),
    ),
    engagement: v.union(
      v.null(),
      v.object({
        summary: v.string(),
        scope: v.array(v.string()),
        plan: v.string(),
        currency: v.string(),
        setupFee: v.number(),
        recurringFee: v.optional(v.number()),
        exclusions: v.array(v.string()),
        thirdPartyCosts: v.string(),
        legalName: v.optional(v.string()),
        billingEmail: v.optional(v.string()),
        signedAgreementRef: v.optional(v.string()),
        advancePaymentRef: v.optional(v.string()),
        identityVerificationRef: v.optional(v.string()),
        verifiedEmails: v.optional(v.array(v.string())),
        dependencies: v.array(
          v.object({
            label: v.string(),
            owner: v.string(),
            verified: v.boolean(),
          }),
        ),
        updatedAt: v.number(),
      }),
    ),
    project: v.union(v.null(), projectViewValidator),
    stages: v.array(projectStageViewValidator),
    documents: v.array(documentViewValidator),
    activity: v.array(activityViewValidator),
  }),
  handler: async (ctx, { authUserId }) => {
    const user = await authComponent.getAnyUserById(ctx, authUserId);
    if (!user) throw new ConvexError("Client account does not exist.");
    const draft = await ctx.db
      .query("onboarding")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
      .unique();
    const engagement = await ctx.db
      .query("engagements")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
      .unique();
    const activity = await ctx.db
      .query("projectActivity")
      .withIndex("by_authUserId_createdAt", (q) =>
        q.eq("authUserId", authUserId),
      )
      .order("desc")
      .take(100);
    return {
      authUserId,
      user: { name: user.name, email: user.email },
      draft: draft
        ? {
            version: draft.version,
            answers: draft.answers,
            extraModules: draft.extraModules,
            currentPage: draft.currentPage,
            currentQuestion: draft.currentQuestion ?? null,
            status: draft.status,
            updatedAt: draft.updatedAt,
            submittedAt: draft.submittedAt ?? null,
            privacyVersion: draft.privacyVersion,
          }
        : null,
      engagement: engagement
        ? {
            summary: engagement.summary,
            scope: engagement.scope,
            plan: engagement.plan,
            currency: engagement.currency,
            setupFee: engagement.setupFee,
            recurringFee: engagement.recurringFee,
            exclusions: engagement.exclusions,
            thirdPartyCosts: engagement.thirdPartyCosts,
            legalName: engagement.legalName,
            billingEmail: engagement.billingEmail,
            signedAgreementRef: engagement.signedAgreementRef,
            advancePaymentRef: engagement.advancePaymentRef,
            identityVerificationRef: engagement.identityVerificationRef,
            verifiedEmails: engagement.verifiedEmails,
            dependencies: engagement.dependencies,
            updatedAt: engagement.updatedAt,
          }
        : null,
      project: await projectView(ctx, authUserId),
      stages: await stageViews(ctx, authUserId),
      documents: await documentViews(ctx, authUserId),
      activity: activity.map((item) => ({
        id: item._id,
        type: item.type,
        title: item.title,
        detail: item.detail,
        actor: item.actor,
        view: item.view,
        createdAt: item.createdAt,
      })),
    };
  },
});
