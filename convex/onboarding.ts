import { ConvexError, v } from "convex/values";
import { authComponent } from "./auth";
import { query, mutation, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";
import type { Doc } from "./_generated/dataModel";
import { answersValidator, engagementValidator, draftValidator } from "./onboardingValidators";
import {
  activityViewValidator,
  documentViewValidator,
  projectStageViewValidator,
  projectViewValidator,
} from "./workspaceValidators";
import { addActivity } from "./projects";
import { createQuestionnaire } from "../lib/onboarding/engine";
import { ensureAssignment, resolveQuestionnaire, questionnaireView, requireAssignedVersion } from "./questionnaireStore";
import { assignedQuestionnaireValidator } from "./questionnaireValidators";
import { ONBOARDING_PRIVACY_NOTICE, ONBOARDING_PRIVACY_VERSION } from "../lib/onboarding/privacy-copy";

import { validateDraftInput } from "./validateOnboardingDraft";

function privacySettings() {
  const customText = process.env.ONBOARDING_PRIVACY_TEXT?.trim();
  const text = customText || ONBOARDING_PRIVACY_NOTICE;
  const contact = process.env.ONBOARDING_PRIVACY_CONTACT ?? "";
  const retention = process.env.ONBOARDING_PRIVACY_RETENTION ?? "";
  const version = process.env.ONBOARDING_PRIVACY_VERSION?.trim() || (customText ? "" : ONBOARDING_PRIVACY_VERSION);
  // The owner-approved project-use notice is available without deployment setup.
  // Custom notices still need a revision, and the agency can explicitly pause collection.
  return { approved: process.env.ONBOARDING_PRIVACY_APPROVED !== "false" && Boolean(text && version), text, contact, retention, version };
}
export const getPrivacySettings = query({
  args: {},
  returns: v.object({ approved: v.boolean(), text: v.string(), contact: v.string(), retention: v.string(), version: v.string() }),
  handler: async () => privacySettings(),
});
function prerequisites(user: { emailVerified: boolean; email: string }, engagement: Pick<Doc<"engagements">, "signedAgreementRef" | "advancePaymentRef" | "identityVerificationRef" | "verifiedEmails" | "dependencies"> | null, draft: Doc<"onboarding"> | null) {
  const pending: string[] = [];
  const requiredEmails = [...new Set([draft?.answers["P01.3"]?.value, draft?.answers["P15.1"]?.value].filter((value): value is string => typeof value === "string").map(value => value.trim().toLowerCase()))];
  if (!requiredEmails.length) requiredEmails.push(user.email.toLowerCase());
  for (const email of requiredEmails) {
    const verified = user.emailVerified && user.email.toLowerCase() === email || Boolean(engagement?.identityVerificationRef && engagement.verifiedEmails?.some(value => value.toLowerCase() === email));
    if (!verified) pending.push(`Verify the project or workspace contact email: ${email}.`);
  }
  if (!engagement?.signedAgreementRef) pending.push("Agree the project scope and complete the signed agreement.");
  if (!engagement?.advancePaymentRef) pending.push("Have the agency verify the 40% advance against your agreed invoice.");
  for (const item of engagement?.dependencies ?? []) if (!item.verified) pending.push(`${item.label} — ${item.owner}`);
  return pending;
}
export const ensureQuestionnaire = mutation({
  args: {}, returns: v.string(),
  handler: async ctx => {
    const user = await authComponent.getAuthUser(ctx);
    const draft = await ctx.db.query("onboarding").withIndex("by_authUserId", q => q.eq("authUserId", user._id)).unique();
    return (await ensureAssignment(ctx, "client", user._id, draft?.version)).version;
  },
});
export const getMine = query({
  args: {},
  returns: v.union(v.null(), v.object({
    draft: v.union(v.null(), draftValidator),
    questionnaire: assignedQuestionnaireValidator,
    engagement: v.union(v.null(), engagementValidator),
    pending: v.array(v.string()),
    workspaceReady: v.boolean(),
    project: v.union(v.null(), projectViewValidator),
    stages: v.array(projectStageViewValidator),
    activityLog: v.array(activityViewValidator),
    documents: v.array(documentViewValidator),
  })),
  handler: async (ctx) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) return null;
    const [draft, engagement, project, stages, activityLog, documents] = await Promise.all([
      ctx.db.query("onboarding").withIndex("by_authUserId", q => q.eq("authUserId", user._id)).unique(),
      ctx.db.query("engagements").withIndex("by_authUserId", q => q.eq("authUserId", user._id)).unique(),
      ctx.db.query("projects").withIndex("by_authUserId", q => q.eq("authUserId", user._id)).unique(),
      ctx.db.query("projectStages").withIndex("by_authUserId", q => q.eq("authUserId", user._id)).collect(),
      ctx.db.query("projectActivity").withIndex("by_authUserId_createdAt", q => q.eq("authUserId", user._id)).order("desc").take(50),
      ctx.db.query("documents").withIndex("by_authUserId_uploadedAt", q => q.eq("authUserId", user._id)).order("desc").collect(),
    ]);
    const questionnaire = await resolveQuestionnaire(ctx, "client", user._id, draft?.version);
    const { validateSubmission } = createQuestionnaire(questionnaire.definition);
    const pending = prerequisites(user, engagement, draft);
    const privacy = privacySettings();
    if (!privacy.approved) pending.push("The agency must approve onboarding privacy information before collecting project answers.");
    else if (draft && draft.privacyVersion !== privacy.version) pending.push("Review the updated onboarding privacy information and resubmit your brief.");
    if (draft?.status === "submitted" && Object.keys(validateSubmission(draft.answers, draft.extraModules)).length > 0) pending.push("Review the required answers in your current questionnaire route.");
    return {
      questionnaire: questionnaireView(questionnaire),
      draft: draft ? { version: draft.version, answers: draft.answers, extraModules: draft.extraModules, currentPage: draft.currentPage, currentQuestion: draft.currentQuestion ?? null, status: draft.status, updatedAt: draft.updatedAt, submittedAt: draft.submittedAt ?? null, privacyVersion: draft.privacyVersion } : null,
      engagement: engagement ? { authUserId: engagement.authUserId, summary: engagement.summary, scope: engagement.scope, plan: engagement.plan, currency: engagement.currency, setupFee: engagement.setupFee, recurringFee: engagement.recurringFee, exclusions: engagement.exclusions, thirdPartyCosts: engagement.thirdPartyCosts, legalName: engagement.legalName, billingEmail: engagement.billingEmail, signedAgreementRef: engagement.signedAgreementRef, advancePaymentRef: engagement.advancePaymentRef, identityVerificationRef: engagement.identityVerificationRef, verifiedEmails: engagement.verifiedEmails, dependencies: engagement.dependencies, updatedAt: engagement.updatedAt } : null,
      pending,
      workspaceReady: draft?.status === "submitted" && pending.length === 0,
      project: project ? { name: project.name, summary: project.summary, status: project.status, currentStage: project.currentStage, progressPercent: project.progressPercent, nextStepTitle: project.nextStepTitle, nextStepDetail: project.nextStepDetail, startDate: project.startDate, targetDate: project.targetDate, updatedAt: project.updatedAt } : null,
      stages: stages
        .filter((stage) => stage.visible)
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
      activityLog: activityLog.map((item) => ({
        id: item._id,
        type: item.type,
        title: item.title,
        detail: item.detail,
        actor: item.actor,
        view: item.view,
        createdAt: item.createdAt,
      })),
      documents: await Promise.all(documents.map(async (document) => ({
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
      }))),
    };
  },
});
export const saveDraft = mutation({
  args: { answers: answersValidator, extraModules: v.array(v.string()), currentPage: v.string(), currentQuestion: v.optional(v.string()), privacyVersion: v.string(), questionnaireVersion: v.string() },
  returns: v.number(),
  handler: async (ctx, args) => {
    const user = await authComponent.getAuthUser(ctx);
    const privacy = privacySettings();
    if (!privacy.approved || args.privacyVersion !== privacy.version) throw new ConvexError("The approved privacy notice must be available before saving details. Refresh the page.");
    const existing = await ctx.db.query("onboarding").withIndex("by_authUserId", q => q.eq("authUserId", user._id)).unique();
    const questionnaire = await ensureAssignment(ctx, "client", user._id, existing?.version);
    requireAssignedVersion(questionnaire.version, args.questionnaireVersion);
    validateDraftInput(args, questionnaire.definition);
    const draftArgs = { answers: args.answers, extraModules: args.extraModules, currentPage: args.currentPage, privacyVersion: args.privacyVersion };
    const updatedAt = Date.now();
    const value = { ...draftArgs, currentQuestion: args.currentQuestion ?? null, extraModules: [...new Set(args.extraModules)], authUserId: user._id, version: questionnaire.version, status: existing?.status === "submitted" && existing.version === questionnaire.version && existing.privacyVersion === args.privacyVersion && JSON.stringify(existing.answers) === JSON.stringify(args.answers) && JSON.stringify(existing.extraModules) === JSON.stringify(args.extraModules) ? "submitted" as const : "draft" as const, updatedAt };
    if (existing) await ctx.db.patch(existing._id, value);
    else {
      await ctx.db.insert("onboarding", value);
      await addActivity(ctx, {
        authUserId: user._id,
        type: "brief",
        title: "Project brief started",
        detail: "Your onboarding answers are saved to your workspace.",
        actor: "client",
        view: "brief",
      });
    }
    return updatedAt;
  },
});
export const submit = mutation({
  args: { privacyVersion: v.string(), questionnaireVersion: v.string() },
  returns: v.object({ workspaceReady: v.boolean(), pending: v.array(v.string()) }),
  handler: async (ctx, args) => {
    const user = await authComponent.getAuthUser(ctx);
    const privacy = privacySettings();
    if (!privacy.approved || privacy.version !== args.privacyVersion) throw new ConvexError("Review the current approved privacy notice before submitting.");
    const draft = await ctx.db.query("onboarding").withIndex("by_authUserId", q => q.eq("authUserId", user._id)).unique();
    if (!draft) throw new ConvexError("Save your details before submitting.");
    const questionnaire = await ensureAssignment(ctx, "client", user._id, draft.version);
    requireAssignedVersion(questionnaire.version, args.questionnaireVersion);
    const { validateSubmission } = createQuestionnaire(questionnaire.definition);
    if (draft.privacyVersion !== privacy.version) throw new ConvexError("Review and save your answers using the current questionnaire and privacy notice before submitting.");
    const errors = validateSubmission(draft.answers, draft.extraModules, { privacyReady: true });
    if (Object.keys(errors).length) throw new ConvexError({ message: "Please complete the highlighted answers.", errors });
    const engagement = await ctx.db.query("engagements").withIndex("by_authUserId", q => q.eq("authUserId", user._id)).unique();
    const pending = prerequisites(user, engagement, draft);
    const workspaceReady = pending.length === 0;
    const now = Date.now();
    await ctx.db.patch(draft._id, { status: "submitted", submittedAt: now, updatedAt: now });
    await ctx.runMutation(internal.projects.seedWorkspace, {
      authUserId: user._id,
      submitted: true,
      workspaceReady,
    });
    await addActivity(ctx, {
      authUserId: user._id,
      type: "brief",
      title: "Brief submitted",
      detail: workspaceReady
        ? "Your project details and prerequisites are ready for review."
        : "Your project details are saved; some prerequisites are still pending.",
      actor: "client",
      view: "journey",
    });
    return { workspaceReady, pending };
  },
});
// Agency records are managed only through trusted server/CLI access, never a client checkbox.
export const recordEngagement = internalMutation({
  args: { engagement: engagementValidator },
  returns: v.null(),
  handler: async (ctx, { engagement }) => {
    const user = await authComponent.getAnyUserById(ctx, engagement.authUserId);
    if (!user) throw new ConvexError("Client account does not exist.");
    const existing = await ctx.db.query("engagements").withIndex("by_authUserId", q => q.eq("authUserId", engagement.authUserId)).unique();
    const record = { ...engagement, updatedAt: Date.now() };
    if (existing) await ctx.db.replace(existing._id, record);
    else await ctx.db.insert("engagements", record);
    const draft = await ctx.db.query("onboarding").withIndex("by_authUserId", q => q.eq("authUserId", engagement.authUserId)).unique();
    const pending = prerequisites({ emailVerified: user.emailVerified, email: user.email }, record, draft);
    await ctx.runMutation(internal.projects.seedWorkspace, {
      authUserId: engagement.authUserId,
      submitted: draft?.status === "submitted",
      workspaceReady: draft?.status === "submitted" && pending.length === 0,
    });
    await addActivity(ctx, {
      authUserId: engagement.authUserId,
      type: "engagement",
      title: "Engagement record updated",
      detail: `${engagement.plan} · Scope and prerequisites recorded`,
      actor: "agency",
      view: "agreement",
    });
    return null;
  },
});
