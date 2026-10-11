import { ConvexError, v } from "convex/values";
import { SessionIdArg } from "convex-helpers/server/sessions";
import { query, mutation, internalMutation } from "./_generated/server";
import { answersValidator, draftValidator } from "./onboardingValidators";
import { validateDraftInput } from "./validateOnboardingDraft";
import { ONBOARDING_VERSION, validateSubmission } from "../lib/onboarding/questionnaire";

const noticeVersion = "development-preview.v1";
function requireLocalPreview(sessionId: string) {
  const site = new URL(process.env.SITE_URL ?? "https://invalid.test");
  if (!["localhost", "127.0.0.1"].includes(site.hostname)) throw new ConvexError("Preview storage is available only in local development.");
  // The random browser session is the bearer credential for this draft.
  if (!/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(sessionId)) throw new ConvexError("Invalid preview session.");
}
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
  args: { ...SessionIdArg, answers: answersValidator, extraModules: v.array(v.string()), currentPage: v.string(), currentQuestion: v.optional(v.string()) },
  returns: v.number(),
  handler: async (ctx, args) => {
    requireLocalPreview(args.sessionId);
    validateDraftInput(args);
    const existing = await ctx.db.query("onboardingPreviewDrafts").withIndex("by_sessionId", q => q.eq("sessionId", args.sessionId)).unique();
    const unchanged = existing?.version === ONBOARDING_VERSION && JSON.stringify(existing.answers) === JSON.stringify(args.answers) && JSON.stringify(existing.extraModules) === JSON.stringify(args.extraModules);
    const updatedAt = Date.now();
    const value = { ...args, extraModules: [...new Set(args.extraModules)], currentQuestion: args.currentQuestion ?? null, version: ONBOARDING_VERSION, privacyVersion: noticeVersion, status: unchanged && existing?.status === "submitted" ? "submitted" as const : "draft" as const, updatedAt };
    if (existing) await ctx.db.patch(existing._id, value);
    else await ctx.db.insert("onboardingPreviewDrafts", value);
    return updatedAt;
  },
});
export const submit = mutation({
  args: { ...SessionIdArg },
  returns: v.null(),
  handler: async (ctx, { sessionId }) => {
    requireLocalPreview(sessionId);
    const draft = await ctx.db.query("onboardingPreviewDrafts").withIndex("by_sessionId", q => q.eq("sessionId", sessionId)).unique();
    if (!draft) throw new ConvexError("Save your details before submitting.");
    if (draft.version !== ONBOARDING_VERSION || draft.privacyVersion !== noticeVersion) throw new ConvexError("Review and save the current questionnaire before submitting.");
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
    return null;
  },
});
