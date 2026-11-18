import { ConvexError, v } from "convex/values";
import { mutation, query, type MutationCtx, type QueryCtx } from "./_generated/server";
import { authComponent } from "./auth";
import { isAdminEmail } from "./admin";
import { resolveQuestionnaire, questionnaireView, requireAssignedVersion } from "./questionnaireStore";
import type { Doc } from "./_generated/dataModel";
import {
  answerValidator,
  clientDetailValidator,
  clientListRowValidator,
  documentStatusValidator,
  projectStageStatusValidator,
  projectStatusValidator,
} from "./clientValidators";
import { getClientSummary } from "../lib/onboarding/summary";
import { createQuestionnaire, isAnswerEmpty, isQuestionVisible, validateAnswerShape } from "../lib/onboarding/engine";
import { getGuidedProgress, getGuidedSteps } from "../lib/onboarding/guided-flow";
import type { Answers } from "../lib/onboarding/types";
import { DOCUMENT_CATEGORIES } from "../lib/onboarding/documents";
import { DEFAULT_DELIVERY_STAGES } from "../lib/onboarding/delivery";

type AdminCtx = QueryCtx | MutationCtx;

async function getClientUser(ctx: AdminCtx, authUserId: string) {
  try {
    return await authComponent.getAnyUserById(ctx, authUserId);
  } catch {
    // A record can outlive a deleted auth user; show the stored client data.
    return null;
  }
}

async function requireAdmin(ctx: AdminCtx) {
  const user = await authComponent.safeGetAuthUser(ctx);
  if (!user || !isAdminEmail(user.email)) {
    throw new ConvexError("Administrator access is required.");
  }
  const account = await ctx.db
    .query("adminAccounts")
    .withIndex("by_authUserId", (q) => q.eq("authUserId", user._id))
    .unique();
  if (!account) throw new ConvexError("Administrator access is required.");
  return user;
}

function answeredText(answers: Answers, questionId: string) {
  const answer = answers[questionId];
  if (!answer || answer.state !== "answered") return "";
  if (typeof answer.value === "string") return answer.value.trim();
  if (Array.isArray(answer.value)) return answer.value.filter(Boolean).join(", ");
  if (typeof answer.value === "number") return String(answer.value);
  if (typeof answer.value === "boolean") return answer.value ? "Confirmed" : "";
  return Object.values(answer.value).filter(Boolean).join(", ");
}

function latest<T>(items: T[], getTime: (item: T) => number): T | undefined {
  return items.reduce<T | undefined>(
    (current, item) => (!current || getTime(item) > getTime(current) ? item : current),
    undefined,
  );
}

function pendingPrerequisites(
  user: { email: string; emailVerified: boolean } | null,
  engagement: Doc<"engagements"> | null,
  draft: Doc<"onboarding"> | null,
) {
  const pending: string[] = [];
  const requiredEmails = [
    ...new Set(
      [draft?.answers["P01.3"]?.value, draft?.answers["P15.1"]?.value]
        .filter((value): value is string => typeof value === "string")
        .map((value) => value.trim().toLowerCase()),
    ),
  ];
  if (!requiredEmails.length && user) requiredEmails.push(user.email.toLowerCase());
  if (user) {
    for (const email of requiredEmails) {
      const verified =
        (user.emailVerified && user.email.toLowerCase() === email) ||
        Boolean(
          engagement?.identityVerificationRef &&
            engagement.verifiedEmails?.some(
              (value) => value.toLowerCase() === email,
            ),
        );
      if (!verified) pending.push(`Verify the contact email: ${email}.`);
    }
  }
  if (!engagement?.signedAgreementRef)
    pending.push("Signed agreement has not been recorded.");
  if (!engagement?.advancePaymentRef)
    pending.push("40% advance payment has not been verified.");
  for (const item of engagement?.dependencies ?? []) {
    if (!item.verified) pending.push(`${item.label} — ${item.owner}`);
  }
  return pending;
}

type CheckStatus = "complete" | "missing" | "attention";

function completenessChecks({
  user,
  draft,
  engagement,
  project,
  stages,
  documents,
  openItems,
}: {
  user: { emailVerified: boolean } | null;
  draft: Doc<"onboarding"> | null;
  engagement: Doc<"engagements"> | null;
  project: Doc<"projects"> | null;
  stages: Doc<"projectStages">[];
  documents: Doc<"documents">[];
  openItems: { questionId: string; label: string; detail: string }[];
}) {
  const answers = draft?.answers ?? {};
  const has = (id: string) => Boolean(answeredText(answers, id));
  const check = (
    id: string,
    label: string,
    group: "Account" | "Brief" | "Commercial" | "Delivery" | "Files",
    status: CheckStatus,
    detail: string,
    tab: "overview" | "brief" | "delivery" | "agreement" | "files" | "activity",
  ) => ({ id, label, group, status, detail, tab });

  const assets = answers["P10.1"];
  const assetReady =
    assets?.state === "answered" &&
    ((typeof assets.value === "object" &&
      !Array.isArray(assets.value) &&
      Object.values(assets.value).some(
        (item) => item.trim() && item !== "not-available",
      )) ||
      (Array.isArray(assets.value) && assets.value.some(Boolean)));

  const checks = [
    check(
      "contact",
      "Client contact",
      "Account",
      has("P01.1") && has("P01.3") ? "complete" : "missing",
      has("P01.1") && has("P01.3")
        ? `${answeredText(answers, "P01.1")} · ${answeredText(answers, "P01.3")}`
        : "Add the client's name and project email in the brief.",
      "brief",
    ),
    check(
      "email-verified",
      "Email verification",
      "Account",
      user?.emailVerified ? "complete" : "missing",
      user?.emailVerified
        ? "The client account email is verified."
        : "The client's sign-in email is not verified.",
      "overview",
    ),
    check(
      "business",
      "Business summary",
      "Brief",
      has("P03.1") ? "complete" : "missing",
      has("P03.1")
        ? "A business description is saved."
        : "We still need a plain-language description of the business.",
      "brief",
    ),
    check(
      "offer",
      "Offer & audience",
      "Brief",
      has("P04.1") && has("P05.1") ? "complete" : "missing",
      has("P04.1") && has("P05.1")
        ? "The offer and primary audience are recorded."
        : "The offer or primary audience is incomplete.",
      "brief",
    ),
    check(
      "goals",
      "Goals & success measure",
      "Brief",
      has("P06.2") && has("P06.3") ? "complete" : "missing",
      has("P06.2") && has("P06.3")
        ? "Goals and a success measure are recorded."
        : "Goals or a measurable outcome are missing.",
      "brief",
    ),
    check(
      "process",
      "Current process",
      "Brief",
      has("P07.2") ? "complete" : "missing",
      has("P07.2")
        ? "The current customer or team process is documented."
        : "We do not yet understand how the work moves today.",
      "brief",
    ),
    check(
      "priorities",
      "Launch priorities",
      "Brief",
      has("P08.3") ? "complete" : "missing",
      has("P08.3")
        ? "First-launch priorities are recorded."
        : "The first-launch scope has not been agreed.",
      "brief",
    ),
    check(
      "brand",
      "Brand assets",
      "Brief",
      assetReady ? "complete" : "attention",
      assetReady
        ? "Brand asset readiness is recorded."
        : "No usable brand assets are recorded yet.",
      "brief",
    ),
    check(
      "approval",
      "Approval contact",
      "Brief",
      has("P13.1") ? "complete" : "missing",
      has("P13.1")
        ? "A final approver is recorded."
        : "No final approver is recorded.",
      "brief",
    ),
    check(
      "agreement",
      "Signed agreement",
      "Commercial",
      engagement?.signedAgreementRef ? "complete" : "missing",
      engagement?.signedAgreementRef
        ? "An agreement reference is stored."
        : "Record the signed agreement reference.",
      "agreement",
    ),
    check(
      "advance",
      "40% advance",
      "Commercial",
      engagement?.advancePaymentRef ? "complete" : "missing",
      engagement?.advancePaymentRef
        ? "The advance payment has been verified."
        : "Verify the advance payment against the invoice.",
      "agreement",
    ),
    check(
      "scope",
      "Scope & fees",
      "Commercial",
      engagement?.scope.length && engagement.currency
        ? "complete"
        : "missing",
      engagement?.scope.length && engagement.currency
        ? `${engagement.scope.length} scope items · ${engagement.currency} ${engagement.setupFee.toLocaleString()}`
        : "The agreed scope or fees are incomplete.",
      "agreement",
    ),
    check(
      "billing",
      "Billing details",
      "Commercial",
      engagement?.legalName && engagement.billingEmail ? "complete" : "missing",
      engagement?.legalName && engagement.billingEmail
        ? `${engagement.legalName} · ${engagement.billingEmail}`
        : "Add a legal name and billing email.",
      "agreement",
    ),
    check(
      "project",
      "Project record",
      "Delivery",
      project ? "complete" : "missing",
      project
        ? `${project.name} · ${project.status.replace("-", " ")}`
        : "No delivery summary exists for this client.",
      "delivery",
    ),
    check(
      "next-step",
      "Next step",
      "Delivery",
      project?.nextStepTitle && project.nextStepDetail ? "complete" : "missing",
      project?.nextStepTitle && project.nextStepDetail
        ? project.nextStepTitle
        : "The client has no clear next step.",
      "delivery",
    ),
    check(
      "dates",
      "Project dates",
      "Delivery",
      project && (project.startDate || project.targetDate) ? "complete" : "attention",
      project && (project.startDate || project.targetDate)
        ? [project.startDate, project.targetDate].filter(Boolean).join(" → ")
        : "Start and target dates are not planned yet.",
      "delivery",
    ),
    check(
      "stages",
      "Delivery stages",
      "Delivery",
      stages.length ? "complete" : "missing",
      stages.length
        ? `${stages.filter((stage) => stage.status === "complete").length} of ${stages.length} stages complete.`
        : "Delivery stages have not been created.",
      "delivery",
    ),
    check(
      "documents",
      "Client files",
      "Files",
      documents.length ? "complete" : "attention",
      documents.length
        ? `${documents.length} file${documents.length === 1 ? "" : "s"} uploaded.`
        : "No client files have been uploaded.",
      "files",
    ),
    check(
      "follow-ups",
      "Open follow-ups",
      "Brief",
      openItems.length ? "attention" : "complete",
      openItems.length
        ? `${openItems.length} answer${openItems.length === 1 ? "" : "s"} need clarification.`
        : "No open follow-ups recorded.",
      "brief",
    ),
  ];
  return checks;
}

function stageSummary(stages: Doc<"projectStages">[]) {
  if (!stages.length) return { stages, average: 0 };
  const average = Math.round(
    stages.reduce((total, stage) => total + stage.progress, 0) / stages.length,
  );
  return { stages, average };
}

async function clientDetail(ctx: QueryCtx | MutationCtx, authUserId: string) {
  const [user, draft, engagement, project, stages, documents, activity] =
    await Promise.all([
      getClientUser(ctx, authUserId),
      ctx.db
        .query("onboarding")
        .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
        .unique(),
      ctx.db
        .query("engagements")
        .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
        .unique(),
      ctx.db
        .query("projects")
        .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
        .unique(),
      ctx.db
        .query("projectStages")
        .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
        .collect(),
      ctx.db
        .query("documents")
        .withIndex("by_authUserId_uploadedAt", (q) =>
          q.eq("authUserId", authUserId),
        )
        .order("desc")
        .collect(),
      ctx.db
        .query("projectActivity")
        .withIndex("by_authUserId_createdAt", (q) =>
          q.eq("authUserId", authUserId),
        )
        .order("desc")
        .take(100),
    ]);

  const questionnaire = await resolveQuestionnaire(ctx, "client", authUserId, draft?.version);
  const engine = createQuestionnaire(questionnaire.definition);
  const answers = draft?.answers ?? {};
  const summary = draft
    ? getClientSummary({
        definition: questionnaire.definition,
        answers: draft.answers,
        extraModules: draft.extraModules,
        status: draft.status,
        submittedAt: draft.submittedAt,
      })
    : null;
  const pages = engine.getPages(answers, draft?.extraModules ?? []);
  const progress = getGuidedProgress(
    getGuidedSteps(pages, answers),
    answers,
    true,
  );
  const openItems = engine.getOpenItems(answers, draft?.extraModules ?? []);
  const pending = pendingPrerequisites(user, engagement, draft);
  const checks = completenessChecks({
    user,
    draft,
    engagement,
    project,
    stages,
    documents,
    openItems,
  });
  const answered = Object.values(answers).filter(
    (answer) => answer.state === "answered" && !isAnswerEmpty(answer),
  ).length;
  const states = {
    answered,
    unknown: Object.values(answers).filter((a) => a.state === "unknown").length,
    deferred: Object.values(answers).filter((a) => a.state === "deferred").length,
    "not-applicable": Object.values(answers).filter(
      (a) => a.state === "not-applicable",
    ).length,
    help: Object.values(answers).filter((a) => a.state === "help").length,
    missing: pages.reduce(
      (total, page) =>
        total +
        page.questions.filter(
          (question) =>
            isQuestionVisible(question, answers) &&
            (!answers[question.id] || isAnswerEmpty(answers[question.id])),
        ).length,
      0,
    ),
  };
  const { average: deliveryAverage } = stageSummary(stages);

  return {
    authUserId,
    questionnaire: questionnaireView(questionnaire),
    user: user
      ? {
          name: user.name,
          email: user.email,
          emailVerified: user.emailVerified,
        }
      : null,
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
          recurringFee: engagement.recurringFee ?? null,
          exclusions: engagement.exclusions,
          thirdPartyCosts: engagement.thirdPartyCosts,
          legalName: engagement.legalName ?? "",
          billingEmail: engagement.billingEmail ?? "",
          signedAgreementRef: engagement.signedAgreementRef ?? "",
          advancePaymentRef: engagement.advancePaymentRef ?? "",
          identityVerificationRef: engagement.identityVerificationRef ?? "",
          verifiedEmails: engagement.verifiedEmails ?? [],
          dependencies: engagement.dependencies,
          updatedAt: engagement.updatedAt,
        }
      : null,
    project: project
      ? {
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
        }
      : null,
    stages: [...stages]
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
      })),
    documents: await Promise.all(
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
    ),
    activity: activity.map((item) => ({
      id: item._id,
      type: item.type,
      title: item.title,
      detail: item.detail,
      actor: item.actor,
      view: item.view,
      createdAt: item.createdAt,
    })),
    summary: {
      businessName:
        summary?.businessName ||
        (project?.name !== "Your project" ? project?.name : "") ||
        answeredText(answers, "P01.2") ||
        answeredText(answers, "P01.1") ||
        "Unnamed client",
      contactName: summary?.contactName || "",
      contactEmail: summary?.contactEmail || "",
      description: summary?.description || project?.summary || "",
      selectedModules: summary?.selectedModules ?? [],
      selectedWork: summary?.selectedWork ?? [],
    },
    progress: {
      completed: progress.completed,
      total: progress.total,
      percent: progress.percent,
    },
    deliveryAverage,
    answerStates: states,
    openItems,
    pending,
    checks,
    completeness: {
      complete: checks.filter((item) => item.status === "complete").length,
      total: checks.length,
      percent: Math.round(
        (checks.filter((item) => item.status === "complete").length /
          Math.max(1, checks.length)) *
          100,
      ),
    },
  };
}

/** Every client with a brief, engagement, project, or uploaded file. */
export const list = query({
  args: {},
  returns: v.array(clientListRowValidator),
  handler: async (ctx) => {
    await requireAdmin(ctx);
    const [drafts, engagements, projects, documents, stages, activity] =
      await Promise.all([
        ctx.db.query("onboarding").collect(),
        ctx.db.query("engagements").collect(),
        ctx.db.query("projects").collect(),
        ctx.db.query("documents").collect(),
        ctx.db.query("projectStages").collect(),
        ctx.db.query("projectActivity").collect(),
      ]);

    const authUserIds = [
      ...new Set([
        ...drafts.map((item) => item.authUserId),
        ...engagements.map((item) => item.authUserId),
        ...projects.map((item) => item.authUserId),
        ...documents.map((item) => item.authUserId),
        ...stages.map((item) => item.authUserId),
        ...activity.map((item) => item.authUserId),
      ]),
    ];

    const rows = await Promise.all(
      authUserIds.map(async (authUserId) => {
        const user = await getClientUser(ctx, authUserId);
        const draft = drafts.find((item) => item.authUserId === authUserId) ?? null;
        const engagement =
          engagements.find((item) => item.authUserId === authUserId) ?? null;
        const project =
          projects.find((item) => item.authUserId === authUserId) ?? null;
        const clientStages = stages.filter(
          (item) => item.authUserId === authUserId,
        );
        const clientDocuments = documents.filter(
          (item) => item.authUserId === authUserId,
        );
        const questionnaire = draft ? await resolveQuestionnaire(ctx, "client", authUserId, draft.version) : null;
        const summary = draft
          ? getClientSummary({
              definition: questionnaire!.definition,
              answers: draft.answers,
              extraModules: draft.extraModules,
              status: draft.status,
              submittedAt: draft.submittedAt,
            })
          : null;
        const openItems = draft
          ? createQuestionnaire(questionnaire!.definition).getOpenItems(draft.answers, draft.extraModules)
          : [];
        const pending = pendingPrerequisites(user, engagement, draft);
        const checks = completenessChecks({
          user,
          draft,
          engagement,
          project,
          stages: clientStages,
          documents: clientDocuments,
          openItems,
        });
        const attention = checks.filter((item) => item.status !== "complete");
        const latestDocument = latest(
          clientDocuments,
          (document) => document.uploadedAt,
        );
        const latestActivity = latest(
          activity.filter((item) => item.authUserId === authUserId),
          (item) => item.createdAt,
        );
        const { average } = stageSummary(clientStages);
        const updatedAt = Math.max(
          draft?.updatedAt ?? 0,
          engagement?.updatedAt ?? 0,
          project?.updatedAt ?? 0,
          latestDocument?.uploadedAt ?? 0,
          latestActivity?.createdAt ?? 0,
        );

        return {
          authUserId,
          name: user?.name ?? "",
          email: user?.email ?? "",
          emailVerified: user?.emailVerified ?? false,
          businessName:
            summary?.businessName ||
            (project?.name !== "Your project" ? project?.name : "") ||
            answeredText(draft?.answers ?? {}, "P01.2") ||
            answeredText(draft?.answers ?? {}, "P01.1") ||
            "Unnamed client",
          contactName: summary?.contactName ?? "",
          contactEmail: summary?.contactEmail ?? "",
          description: summary?.description || project?.summary || "",
          briefStatus: draft?.status ?? null,
          submittedAt: draft?.submittedAt ?? null,
          answersUpdatedAt: draft?.updatedAt ?? 0,
          updatedAt,
          plan: engagement?.plan ?? null,
          currency: engagement?.currency ?? null,
          setupFee: engagement?.setupFee ?? null,
          recurringFee: engagement?.recurringFee ?? null,
          selectedModules: summary?.selectedModules ?? [],
          selectedWork: summary?.selectedWork ?? [],
          completedQuestions: summary?.progress.completed ?? 0,
          totalQuestions: summary?.progress.total ?? 0,
          briefProgressPercent: summary?.progress.percent ?? 0,
          openItemCount: openItems.length,
          pendingCount: pending.length,
          projectStatus: project?.status ?? null,
          currentStage: project?.currentStage ?? null,
          deliveryProgressPercent: project?.progressPercent ?? average,
          stageCount: clientStages.length,
          completedStages: clientStages.filter(
            (item) => item.status === "complete",
          ).length,
          documentCount: clientDocuments.length,
          latestDocumentAt: latestDocument?.uploadedAt ?? null,
          completenessPercent: Math.round(
            (checks.filter((item) => item.status === "complete").length /
              Math.max(1, checks.length)) *
              100,
          ),
          completenessTotal: checks.length,
          needsAttention: attention.length > 0,
          attentionCount: attention.length,
          attentionReasons: attention.slice(0, 3).map((item) => item.label),
        };
      }),
    );

    return rows.sort((a, b) => b.updatedAt - a.updatedAt);
  },
});

/** The full workspace record for one client. */
export const getClient = query({
  args: { authUserId: v.string() },
  returns: clientDetailValidator,
  handler: async (ctx, { authUserId }) => {
    await requireAdmin(ctx);
    return await clientDetail(ctx, authUserId);
  },
});

const optionalText = (value: string) => value.trim() || undefined;

async function logActivity(
  ctx: MutationCtx,
  activity: {
    authUserId: string;
    type: "brief" | "stage" | "document" | "engagement" | "system";
    title: string;
    detail: string;
    view: string | null;
  },
) {
  await ctx.db.insert("projectActivity", {
    ...activity,
    actor: "agency",
    createdAt: Date.now(),
  });
}

/** Account-safe edit of one saved onboarding answer. */
export const updateAnswer = mutation({
  args: {
    authUserId: v.string(),
    questionId: v.string(),
    questionnaireVersion: v.string(),
    answer: answerValidator,
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const draft = await ctx.db
      .query("onboarding")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", args.authUserId))
      .unique();
    if (!draft) throw new ConvexError("This client has not started a brief yet.");
    const questionnaire = await resolveQuestionnaire(ctx, "client", args.authUserId, draft.version);
    requireAssignedVersion(questionnaire.version, args.questionnaireVersion);
    const question = questionnaire.definition.pages.flatMap(page => page.questions).find(question => question.id === args.questionId);
    if (!question) throw new ConvexError("Unknown onboarding question.");
    if (question.acknowledgement || ["P01.1", "P01.3", "P15.1"].includes(question.id)) throw new ConvexError("This contact or confirmation must be supplied directly by the client.");
    const shapeError = validateAnswerShape(question, args.answer);
    if (shapeError) throw new ConvexError(shapeError);
    const text =
      typeof args.answer.value === "string" ? args.answer.value : undefined;
    if (text && text.length > 6000) {
      throw new ConvexError("Keep each answer under 6,000 characters.");
    }
    const now = Date.now();
    await ctx.db.patch(draft._id, {
      answers: { ...draft.answers, [args.questionId]: args.answer },
      updatedAt: now,
    });
    await logActivity(ctx, {
      authUserId: args.authUserId,
      type: "brief",
      title: "Brief answer updated",
      detail: `${args.questionId} · ${question?.label ?? "Saved answer"}`,
      view: "brief",
    });
    return null;
  },
});

/** Add or remove explicit workflow modules without rewriting answers. */
export const updateExtraModules = mutation({
  args: { authUserId: v.string(), extraModules: v.array(v.string()), questionnaireVersion: v.string() },
  returns: v.null(),
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const draft = await ctx.db
      .query("onboarding")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", args.authUserId))
      .unique();
    if (!draft) throw new ConvexError("This client has not started a brief yet.");
    const questionnaire = await resolveQuestionnaire(ctx, "client", args.authUserId, draft.version);
    requireAssignedVersion(questionnaire.version, args.questionnaireVersion);
    const validIds = new Set(questionnaire.definition.pages.filter(page => page.kind === "module").map(page => page.id));
    if (args.extraModules.some(id => !validIds.has(id))) throw new ConvexError("Choose a workflow from this client's assigned questionnaire.");
    await ctx.db.patch(draft._id, {
      extraModules: [...new Set(args.extraModules)],
      updatedAt: Date.now(),
    });
    return null;
  },
});

/** Full edit of the agency-owned engagement record. */
export const updateEngagement = mutation({
  args: {
    authUserId: v.string(),
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
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    if (!Number.isFinite(args.setupFee) || args.setupFee < 0) {
      throw new ConvexError("Setup fee must be a positive number.");
    }
    if (
      args.recurringFee !== null &&
      (!Number.isFinite(args.recurringFee) || args.recurringFee < 0)
    ) {
      throw new ConvexError("Recurring fee must be a positive number.");
    }
    const existing = await ctx.db
      .query("engagements")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", args.authUserId))
      .unique();
    const now = Date.now();
    const record = {
      authUserId: args.authUserId,
      summary: args.summary.trim(),
      scope: args.scope.map((item) => item.trim()).filter(Boolean),
      plan: args.plan.trim(),
      currency: args.currency.trim().toUpperCase(),
      setupFee: args.setupFee,
      recurringFee: args.recurringFee ?? undefined,
      exclusions: args.exclusions.map((item) => item.trim()).filter(Boolean),
      thirdPartyCosts: args.thirdPartyCosts.trim(),
      legalName: optionalText(args.legalName),
      billingEmail: optionalText(args.billingEmail),
      signedAgreementRef: optionalText(args.signedAgreementRef),
      advancePaymentRef: optionalText(args.advancePaymentRef),
      identityVerificationRef: optionalText(args.identityVerificationRef),
      verifiedEmails: args.verifiedEmails
        .map((item) => item.trim().toLowerCase())
        .filter(Boolean),
      dependencies: args.dependencies
        .map((item) => ({
          label: item.label.trim(),
          owner: item.owner.trim(),
          verified: item.verified,
        }))
        .filter((item) => item.label),
      updatedAt: now,
    };
    if (existing) await ctx.db.replace(existing._id, record);
    else await ctx.db.insert("engagements", record);
    await logActivity(ctx, {
      authUserId: args.authUserId,
      type: "engagement",
      title: "Agreement updated",
      detail: `${record.plan || "Plan not set"} · Scope and billing record edited`,
      view: "agreement",
    });
    return null;
  },
});

/** Edit the client-visible delivery summary. */
export const updateProject = mutation({
  args: {
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
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    if (!args.name.trim()) throw new ConvexError("Project name is required.");
    const progress = Math.max(0, Math.min(100, Math.round(args.progressPercent)));
    const now = Date.now();
    const existing = await ctx.db
      .query("projects")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", args.authUserId))
      .unique();
    const record = {
      authUserId: args.authUserId,
      name: args.name.trim(),
      summary: args.summary.trim(),
      status: args.status,
      currentStage: args.currentStage.trim(),
      progressPercent: progress,
      nextStepTitle: args.nextStepTitle.trim(),
      nextStepDetail: args.nextStepDetail.trim(),
      startDate: args.startDate,
      targetDate: args.targetDate,
      updatedAt: now,
    };
    if (existing) await ctx.db.replace(existing._id, record);
    else await ctx.db.insert("projects", record);
    await logActivity(ctx, {
      authUserId: args.authUserId,
      type: "stage",
      title: "Project progress updated",
      detail: `${progress}% complete · ${record.nextStepTitle || "Next step updated"}`,
      view: "journey",
    });
    return null;
  },
});

async function recalculateProject(ctx: MutationCtx, authUserId: string) {
  const [project, stages] = await Promise.all([
    ctx.db
      .query("projects")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
      .unique(),
    ctx.db
      .query("projectStages")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
      .collect(),
  ]);
  if (!project || !stages.length) return;
  const ordered = [...stages].sort((a, b) => a.order - b.order);
  const average = Math.round(
    ordered.reduce((total, stage) => total + stage.progress, 0) / ordered.length,
  );
  const allComplete = ordered.every((stage) => stage.status === "complete");
  const blocked = ordered.some((stage) => stage.status === "blocked");
  const active =
    ordered.find((stage) => stage.status === "in-progress") ??
    ordered.find((stage) => stage.visible && stage.status !== "complete") ??
    ordered[ordered.length - 1];
  const started = ordered.some((stage) => stage.status === "in-progress");
  await ctx.db.patch(project._id, {
    progressPercent: average,
    currentStage: active.stageId,
    status: allComplete
      ? "complete"
      : blocked
        ? "blocked"
        : project.status === "complete"
          ? "in-progress"
          : project.status === "planning" && (average > 0 || started)
            ? "in-progress"
            : project.status,
    updatedAt: Date.now(),
  });
}

/** Create the standard six delivery stages for a client that has none. */
export const ensureStages = mutation({
  args: { authUserId: v.string() },
  returns: v.null(),
  handler: async (ctx, { authUserId }) => {
    await requireAdmin(ctx);
    const [user, draft, engagement, project, stages] = await Promise.all([
      getClientUser(ctx, authUserId),
      ctx.db
        .query("onboarding")
        .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
        .unique(),
      ctx.db
        .query("engagements")
        .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
        .unique(),
      ctx.db
        .query("projects")
        .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
        .unique(),
      ctx.db
        .query("projectStages")
        .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
        .collect(),
    ]);
    if (!project) {
      throw new ConvexError("Create the project summary before adding stages.");
    }
    const existing = new Set(stages.map((stage) => stage.stageId));
    const submitted = draft?.status === "submitted";
    const ready = submitted && pendingPrerequisites(user, engagement, draft).length === 0;
    const now = Date.now();
    let created = 0;
    for (const [order, stage] of DEFAULT_DELIVERY_STAGES.entries()) {
      if (existing.has(stage.stageId)) continue;
      const status =
        stage.stageId === "brief"
          ? submitted
            ? "complete"
            : "in-progress"
          : stage.stageId === "activation"
            ? ready
              ? "complete"
              : submitted
                ? "in-progress"
                : "upcoming"
            : "upcoming";
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
      created += 1;
    }
    await recalculateProject(ctx, authUserId);
    if (created) {
      await logActivity(ctx, {
        authUserId,
        type: "stage",
        title: "Delivery stages created",
        detail: "The standard six-stage delivery plan is ready.",
        view: "journey",
      });
    }
    return null;
  },
});

/** Edit one delivery stage and keep the project summary in sync. */
export const updateStage = mutation({
  args: {
    authUserId: v.string(),
    stageId: v.string(),
    title: v.string(),
    description: v.string(),
    status: projectStageStatusValidator,
    progress: v.number(),
    startedAt: v.union(v.number(), v.null()),
    completedAt: v.union(v.number(), v.null()),
    targetDate: v.union(v.string(), v.null()),
    note: v.string(),
    visible: v.boolean(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    if (!args.title.trim()) throw new ConvexError("Stage title is required.");
    const stage = await ctx.db
      .query("projectStages")
      .withIndex("by_authUserId_stageId", (q) =>
        q.eq("authUserId", args.authUserId).eq("stageId", args.stageId),
      )
      .unique();
    if (!stage) throw new ConvexError("Delivery stage not found.");
    const now = Date.now();
    const progress =
      args.status === "complete"
        ? 100
        : args.status === "upcoming"
          ? 0
          : Math.max(0, Math.min(100, Math.round(args.progress)));
    const startedAt =
      args.status === "upcoming" ? null : (args.startedAt ?? stage.startedAt ?? now);
    const completedAt =
      args.status === "complete" ? (args.completedAt ?? stage.completedAt ?? now) : null;
    await ctx.db.patch(stage._id, {
      title: args.title.trim(),
      description: args.description.trim(),
      status: args.status,
      progress,
      startedAt,
      completedAt,
      targetDate: args.targetDate,
      note: args.note.trim(),
      visible: args.visible,
      updatedAt: now,
    });
    await recalculateProject(ctx, args.authUserId);
    await logActivity(ctx, {
      authUserId: args.authUserId,
      type: "stage",
      title: `Stage updated: ${args.title.trim()}`,
      detail: `${args.status.replace("-", " ")} · ${progress}% complete`,
      view: "journey",
    });
    return null;
  },
});

/** Review or reclassify a client file without exposing storage credentials. */
export const updateDocument = mutation({
  args: {
    documentId: v.id("documents"),
    status: documentStatusValidator,
    category: v.string(),
    description: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    if (!(DOCUMENT_CATEGORIES as readonly string[]).includes(args.category)) {
      throw new ConvexError("Choose a valid document category.");
    }
    const document = await ctx.db.get(args.documentId);
    if (!document) throw new ConvexError("Document not found.");
    const now = Date.now();
    await ctx.db.patch(document._id, {
      status: args.status,
      category: args.category,
      description: args.description.trim().slice(0, 1000),
      updatedAt: now,
    });
    await logActivity(ctx, {
      authUserId: document.authUserId,
      type: "document",
      title: `Document ${args.status.replace("-", " ")}`,
      detail: document.fileName,
      view: "resources",
    });
    return null;
  },
});

/** Publish a client-visible update to the activity timeline. */
export const addActivity = mutation({
  args: {
    authUserId: v.string(),
    type: v.union(
      v.literal("brief"),
      v.literal("stage"),
      v.literal("document"),
      v.literal("engagement"),
      v.literal("system"),
    ),
    title: v.string(),
    detail: v.string(),
    view: v.union(v.string(), v.null()),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    if (!args.title.trim()) throw new ConvexError("Add a short update title.");
    await logActivity(ctx, {
      authUserId: args.authUserId,
      type: args.type,
      title: args.title.trim(),
      detail: args.detail.trim(),
      view: args.view,
    });
    return null;
  },
});
