import { ConvexError, v } from "convex/values";
import { authComponent } from "./auth";
import { query, mutation, internalMutation } from "./_generated/server";
import type { Doc } from "./_generated/dataModel";
import { answersValidator, engagementValidator, draftValidator } from "./onboardingValidators";
import { validateSubmission, ONBOARDING_VERSION } from "../lib/onboarding/questionnaire";

import { validateDraftInput } from "./validateOnboardingDraft";

function privacySettings() {
  const text = process.env.ONBOARDING_PRIVACY_TEXT ?? "";
  const contact = process.env.ONBOARDING_PRIVACY_CONTACT ?? "";
  const retention = process.env.ONBOARDING_PRIVACY_RETENTION ?? "";
  const version = process.env.ONBOARDING_PRIVACY_VERSION ?? "";
  return { approved: process.env.ONBOARDING_PRIVACY_APPROVED === "true" && Boolean(text && contact && retention && version), text, contact, retention, version };
}
export const getPrivacySettings = query({
  args: {},
  returns: v.object({ approved: v.boolean(), text: v.string(), contact: v.string(), retention: v.string(), version: v.string() }),
  handler: async () => privacySettings(),
});
function prerequisites(user: { emailVerified: boolean; email: string }, engagement: Doc<"engagements"> | null, draft: Doc<"onboarding"> | null) {
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
export const getMine = query({
  args: {},
  returns: v.union(v.null(), v.object({
    draft: v.union(v.null(), draftValidator),
    engagement: v.union(v.null(), engagementValidator),
    pending: v.array(v.string()),
    workspaceReady: v.boolean(),
  })),
  handler: async (ctx) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) return null;
    const [draft, engagement] = await Promise.all([
      ctx.db.query("onboarding").withIndex("by_authUserId", q => q.eq("authUserId", user._id)).unique(),
      ctx.db.query("engagements").withIndex("by_authUserId", q => q.eq("authUserId", user._id)).unique(),
    ]);
    const pending = prerequisites(user, engagement, draft);
    const privacy = privacySettings();
    if (!privacy.approved) pending.push("The agency must approve onboarding privacy information before collecting project answers.");
    else if (draft && draft.privacyVersion !== privacy.version) pending.push("Review the updated onboarding privacy information and resubmit your brief.");
    if (draft && draft.version !== ONBOARDING_VERSION) pending.push("Review the updated questionnaire and resubmit your brief.");
    else if (draft?.status === "submitted" && Object.keys(validateSubmission(draft.answers, draft.extraModules)).length > 0) pending.push("Review the required answers in your current questionnaire route.");
    return {
      draft: draft ? { version: draft.version, answers: draft.answers, extraModules: draft.extraModules, currentPage: draft.currentPage, currentQuestion: draft.currentQuestion ?? null, status: draft.status, updatedAt: draft.updatedAt, submittedAt: draft.submittedAt ?? null, privacyVersion: draft.privacyVersion } : null,
      engagement: engagement ? { authUserId: engagement.authUserId, summary: engagement.summary, scope: engagement.scope, plan: engagement.plan, currency: engagement.currency, setupFee: engagement.setupFee, recurringFee: engagement.recurringFee, exclusions: engagement.exclusions, thirdPartyCosts: engagement.thirdPartyCosts, legalName: engagement.legalName, billingEmail: engagement.billingEmail, signedAgreementRef: engagement.signedAgreementRef, advancePaymentRef: engagement.advancePaymentRef, identityVerificationRef: engagement.identityVerificationRef, verifiedEmails: engagement.verifiedEmails, dependencies: engagement.dependencies, updatedAt: engagement.updatedAt } : null,
      pending,
      workspaceReady: draft?.status === "submitted" && pending.length === 0,
    };
  },
});
export const saveDraft = mutation({
  args: { answers: answersValidator, extraModules: v.array(v.string()), currentPage: v.string(), currentQuestion: v.optional(v.string()), privacyVersion: v.string() },
  returns: v.number(),
  handler: async (ctx, args) => {
    const user = await authComponent.getAuthUser(ctx);
    const privacy = privacySettings();
    if (!privacy.approved || args.privacyVersion !== privacy.version) throw new ConvexError("The approved privacy notice must be available before saving details. Refresh the page.");
    validateDraftInput(args);
    const existing = await ctx.db.query("onboarding").withIndex("by_authUserId", q => q.eq("authUserId", user._id)).unique();
    const updatedAt = Date.now();
    const value = { ...args, currentQuestion: args.currentQuestion ?? null, extraModules: [...new Set(args.extraModules)], authUserId: user._id, version: ONBOARDING_VERSION, status: existing?.status === "submitted" && existing.version === ONBOARDING_VERSION && existing.privacyVersion === args.privacyVersion && JSON.stringify(existing.answers) === JSON.stringify(args.answers) && JSON.stringify(existing.extraModules) === JSON.stringify(args.extraModules) ? "submitted" as const : "draft" as const, updatedAt };
    if (existing) await ctx.db.patch(existing._id, value);
    else await ctx.db.insert("onboarding", value);
    return updatedAt;
  },
});
export const submit = mutation({
  args: { privacyVersion: v.string() },
  returns: v.object({ workspaceReady: v.boolean(), pending: v.array(v.string()) }),
  handler: async (ctx, args) => {
    const user = await authComponent.getAuthUser(ctx);
    const privacy = privacySettings();
    if (!privacy.approved || privacy.version !== args.privacyVersion) throw new ConvexError("Review the current approved privacy notice before submitting.");
    const draft = await ctx.db.query("onboarding").withIndex("by_authUserId", q => q.eq("authUserId", user._id)).unique();
    if (!draft) throw new ConvexError("Save your details before submitting.");
    if (draft.version !== ONBOARDING_VERSION || draft.privacyVersion !== privacy.version) throw new ConvexError("Review and save your answers using the current questionnaire and privacy notice before submitting.");
    const errors = validateSubmission(draft.answers, draft.extraModules, { privacyReady: true });
    if (Object.keys(errors).length) throw new ConvexError({ message: "Please complete the highlighted answers.", errors });
    const engagement = await ctx.db.query("engagements").withIndex("by_authUserId", q => q.eq("authUserId", user._id)).unique();
    const pending = prerequisites(user, engagement, draft);
    const now = Date.now();
    await ctx.db.patch(draft._id, { status: "submitted", submittedAt: now, updatedAt: now });
    return { workspaceReady: pending.length === 0, pending };
  },
});
// Agency records are managed only through trusted server/CLI access, never a client checkbox.
export const recordEngagement = internalMutation({
  args: { engagement: engagementValidator },
  returns: v.null(),
  handler: async (ctx, { engagement }) => {
    if (!await authComponent.getAnyUserById(ctx, engagement.authUserId)) throw new ConvexError("Client account does not exist.");
    const existing = await ctx.db.query("engagements").withIndex("by_authUserId", q => q.eq("authUserId", engagement.authUserId)).unique();
    if (existing) await ctx.db.replace(existing._id, { ...engagement, updatedAt: Date.now() });
    else await ctx.db.insert("engagements", { ...engagement, updatedAt: Date.now() });
    return null;
  },
});
