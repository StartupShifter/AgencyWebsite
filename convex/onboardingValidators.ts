import { v } from "convex/values";

export const answerValidator = v.object({
  state: v.union(v.literal("answered"), v.literal("unknown"), v.literal("not-applicable"), v.literal("deferred"), v.literal("help")),
  value: v.union(v.string(), v.array(v.string()), v.number(), v.boolean(), v.record(v.string(), v.string())),
  detail: v.optional(v.string()),
  priority: v.optional(v.string()),
});
export const answersValidator = v.record(v.string(), answerValidator);
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
  dependencies: v.array(v.object({ label: v.string(), owner: v.string(), verified: v.boolean() })),
  updatedAt: v.number(),
});
