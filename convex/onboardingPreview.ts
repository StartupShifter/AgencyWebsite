import { ConvexError, v } from "convex/values";
import { SessionIdArg } from "convex-helpers/server/sessions";
import { query, mutation, internalMutation } from "./_generated/server";
import { answersValidator, draftValidator } from "./onboardingValidators";
import { validateDraftInput } from "./validateOnboardingDraft";
import { createQuestionnaire } from "../lib/onboarding/engine";
import { ensureAssignment, resolveQuestionnaire, questionnaireView, requireAssignedVersion } from "./questionnaireStore";
import { assignedQuestionnaireValidator } from "./questionnaireValidators";

const noticeVersion = "development-preview.v1";
function requireLocalPreview(sessionId: string) {
  const site = new URL(process.env.SITE_URL ?? "https://invalid.test");
  if (!["localhost", "127.0.0.1"].includes(site.hostname)) throw new ConvexError("Preview storage is available only in local development.");
  // The random browser session is the bearer credential for this draft.
  if (!/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(sessionId)) throw new ConvexError("Invalid preview session.");
}
export const getQuestionnaire = query({
  args: { ...SessionIdArg }, returns: assignedQuestionnaireValidator,
  handler: async (ctx, { sessionId }) => {
    requireLocalPreview(sessionId);
    const draft = await ctx.db.query("onboardingPreviewDrafts").withIndex("by_sessionId", q => q.eq("sessionId", sessionId)).unique();
    return questionnaireView(await resolveQuestionnaire(ctx, "preview", sessionId, draft?.version));
  },
});
export const ensureQuestionnaire = mutation({
  args: { ...SessionIdArg }, returns: v.string(),
  handler: async (ctx, { sessionId }) => {
    requireLocalPreview(sessionId);
    const draft = await ctx.db.query("onboardingPreviewDrafts").withIndex("by_sessionId", q => q.eq("sessionId", sessionId)).unique();
    return (await ensureAssignment(ctx, "preview", sessionId, draft?.version)).version;
  },
});
export const getDraft = query({
  args: { ...SessionIdArg },
  returns: v.union(v.null(), draftValidator),
  handler: async (ctx, { sessionId }) => {
    requireLocalPreview(sessionId);
    const draft = await ctx.db.query("onboardingPreviewDrafts").withIndex("by_sessionId", q => q.eq("sessionId", sessionId)).unique();
    return draft ? { version: draft.version, answers: draft.answers, extraModules: draft.extraModules, currentPage: draft.currentPage, currentQuestion: draft.currentQuestion, status: draft.status, updatedAt: draft.updatedAt, submittedAt: draft.submittedAt ?? null, privacyVersion: draft.privacyVersion } : null;
  },
});
export const saveDraft = mutation({
  args: { ...SessionIdArg, answers: answersValidator, extraModules: v.array(v.string()), currentPage: v.string(), currentQuestion: v.optional(v.string()), questionnaireVersion: v.string() },
  returns: v.number(),
  handler: async (ctx, args) => {
    requireLocalPreview(args.sessionId);
    const existing = await ctx.db.query("onboardingPreviewDrafts").withIndex("by_sessionId", q => q.eq("sessionId", args.sessionId)).unique();
    const questionnaire = await ensureAssignment(ctx, "preview", args.sessionId, existing?.version);
    requireAssignedVersion(questionnaire.version, args.questionnaireVersion);
    validateDraftInput(args, questionnaire.definition);
    const draftArgs = { sessionId: args.sessionId, answers: args.answers, extraModules: args.extraModules, currentPage: args.currentPage };
    const unchanged = existing?.version === questionnaire.version && JSON.stringify(existing.answers) === JSON.stringify(args.answers) && JSON.stringify(existing.extraModules) === JSON.stringify(args.extraModules);
    const updatedAt = Date.now();
    const value = { ...draftArgs, extraModules: [...new Set(args.extraModules)], currentQuestion: args.currentQuestion ?? null, version: questionnaire.version, privacyVersion: noticeVersion, status: unchanged && existing?.status === "submitted" ? "submitted" as const : "draft" as const, updatedAt };
    if (existing) await ctx.db.patch(existing._id, value);
    else await ctx.db.insert("onboardingPreviewDrafts", value);
    return updatedAt;
  },
});
export const submit = mutation({
  args: { ...SessionIdArg, questionnaireVersion: v.string() },
  returns: v.null(),
  handler: async (ctx, { sessionId, questionnaireVersion }) => {
    requireLocalPreview(sessionId);
    const draft = await ctx.db.query("onboardingPreviewDrafts").withIndex("by_sessionId", q => q.eq("sessionId", sessionId)).unique();
    if (!draft) throw new ConvexError("Save your details before submitting.");
    const questionnaire = await ensureAssignment(ctx, "preview", sessionId, draft.version);
    requireAssignedVersion(questionnaire.version, questionnaireVersion);
    const { validateSubmission } = createQuestionnaire(questionnaire.definition);
    if (draft.privacyVersion !== noticeVersion) throw new ConvexError("Review and save the current questionnaire before submitting.");
    const errors = validateSubmission(draft.answers, draft.extraModules, { privacyReady: true });
    if (Object.keys(errors).length) throw new ConvexError({ message: "Complete the highlighted answers.", errors });
    const now = Date.now();
    await ctx.db.patch(draft._id, { status: "submitted", submittedAt: now, updatedAt: now });
    return null;
  },
});
// Integration fixtures only; the browser has no deletion/listing endpoint.
export const cleanupFixture = internalMutation({
  args: { ...SessionIdArg }, returns: v.null(),
  handler: async (ctx, { sessionId }) => {
    requireLocalPreview(sessionId);
    const draft = await ctx.db.query("onboardingPreviewDrafts").withIndex("by_sessionId", q => q.eq("sessionId", sessionId)).unique();
    if (draft) await ctx.db.delete(draft._id);
    const assignment = await ctx.db.query("questionnaireAssignments").withIndex("by_owner", q => q.eq("ownerKind", "preview").eq("ownerId", sessionId)).unique();
    if (assignment) await ctx.db.delete(assignment._id);
    return null;
  },
});
