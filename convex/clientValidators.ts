import { v } from "convex/values";
import { assignedQuestionnaireValidator } from "./questionnaireValidators";

/**
 * These validators mirror the client app's Convex schema. The admin app shares
 * the same deployment as the client workspace, so both sides must agree on the
 * stored shape.
 */
export const answerStateValidator = v.union(
  v.literal("answered"),
  v.literal("unknown"),
  v.literal("not-applicable"),
  v.literal("deferred"),
  v.literal("help"),
);

export const answerValueValidator = v.union(
  v.string(),
  v.array(v.string()),
  v.number(),
  v.boolean(),
  v.record(v.string(), v.string()),
);

export const answerValidator = v.object({
  state: answerStateValidator,
  value: answerValueValidator,
  detail: v.optional(v.string()),
  priority: v.optional(v.string()),
});

export const answersValidator = v.record(v.string(), answerValidator);

export const draftValidator = v.object({
  authUserId: v.string(),
  version: v.string(),
  answers: answersValidator,
  extraModules: v.array(v.string()),
  currentPage: v.string(),
  currentQuestion: v.union(v.string(), v.null()),
  status: v.union(v.literal("draft"), v.literal("submitted")),
  updatedAt: v.number(),
  submittedAt: v.optional(v.number()),
  privacyVersion: v.string(),
});

export const engagementValidator = v.object({
  authUserId: v.string(),
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
});

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

/* ── Admin return shapes ─────────────────────────────────────────────── */

export const openItemValidator = v.object({
  questionId: v.string(),
  pageId: v.string(),
  label: v.string(),
  state: v.string(),
  detail: v.string(),
});

export const checkValidator = v.object({
  id: v.string(),
  label: v.string(),
  group: v.union(
    v.literal("Account"),
    v.literal("Brief"),
    v.literal("Commercial"),
    v.literal("Delivery"),
    v.literal("Files"),
  ),
  status: v.union(
    v.literal("complete"),
    v.literal("missing"),
    v.literal("attention"),
  ),
  detail: v.string(),
  tab: v.union(
    v.literal("overview"),
    v.literal("brief"),
    v.literal("delivery"),
    v.literal("agreement"),
    v.literal("files"),
    v.literal("activity"),
  ),
});

export const clientSummaryValidator = v.object({
  businessName: v.string(),
  contactName: v.string(),
  contactEmail: v.string(),
  description: v.string(),
  selectedModules: v.array(v.string()),
  selectedWork: v.array(v.string()),
});

export const clientListRowValidator = v.object({
  authUserId: v.string(),
  name: v.string(),
  email: v.string(),
  emailVerified: v.boolean(),
  businessName: v.string(),
  contactName: v.string(),
  contactEmail: v.string(),
  description: v.string(),
  briefStatus: v.union(v.literal("draft"), v.literal("submitted"), v.null()),
  submittedAt: v.union(v.number(), v.null()),
  answersUpdatedAt: v.number(),
  updatedAt: v.number(),
  plan: v.union(v.string(), v.null()),
  currency: v.union(v.string(), v.null()),
  setupFee: v.union(v.number(), v.null()),
  recurringFee: v.union(v.number(), v.null()),
  selectedModules: v.array(v.string()),
  selectedWork: v.array(v.string()),
  completedQuestions: v.number(),
  totalQuestions: v.number(),
  briefProgressPercent: v.number(),
  openItemCount: v.number(),
  pendingCount: v.number(),
  projectStatus: v.union(
    v.literal("planning"),
    v.literal("in-progress"),
    v.literal("blocked"),
    v.literal("complete"),
    v.null(),
  ),
  currentStage: v.union(v.string(), v.null()),
  deliveryProgressPercent: v.number(),
  stageCount: v.number(),
  completedStages: v.number(),
  documentCount: v.number(),
  latestDocumentAt: v.union(v.number(), v.null()),
  completenessPercent: v.number(),
  completenessTotal: v.number(),
  needsAttention: v.boolean(),
  attentionCount: v.number(),
  attentionReasons: v.array(v.string()),
});

export const clientDetailValidator = v.object({
  questionnaire: assignedQuestionnaireValidator,
  authUserId: v.string(),
  user: v.union(
    v.null(),
    v.object({
      name: v.string(),
      email: v.string(),
      emailVerified: v.boolean(),
    }),
  ),
  draft: v.union(
    v.null(),
    v.object({
      version: v.string(),
      answers: answersValidator,
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
      recurringFee: v.union(v.number(), v.null()),
      exclusions: v.array(v.string()),
      thirdPartyCosts: v.string(),
      legalName: v.string(),
      billingEmail: v.string(),
      signedAgreementRef: v.string(),
      advancePaymentRef: v.string(),
      identityVerificationRef: v.string(),
      verifiedEmails: v.array(v.string()),
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
  project: v.union(
    v.null(),
    v.object({
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
    }),
  ),
  stages: v.array(
    v.object({
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
    }),
  ),
  documents: v.array(
    v.object({
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
    }),
  ),
  activity: v.array(
    v.object({
      id: v.id("projectActivity"),
      type: activityTypeValidator,
      title: v.string(),
      detail: v.string(),
      actor: activityActorValidator,
      view: v.union(v.string(), v.null()),
      createdAt: v.number(),
    }),
  ),
  summary: clientSummaryValidator,
  progress: v.object({
    completed: v.number(),
    total: v.number(),
    percent: v.number(),
  }),
  deliveryAverage: v.number(),
  answerStates: v.record(v.string(), v.number()),
  openItems: v.array(openItemValidator),
  pending: v.array(v.string()),
  checks: v.array(checkValidator),
  completeness: v.object({
    complete: v.number(),
    total: v.number(),
    percent: v.number(),
  }),
});
