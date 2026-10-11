import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { answersValidator, engagementValidator } from "./onboardingValidators";

export default defineSchema({
  onboarding: defineTable({
    authUserId: v.string(),
    version: v.string(),
    answers: answersValidator,
    extraModules: v.array(v.string()),
    currentPage: v.string(),
    status: v.union(v.literal("draft"), v.literal("submitted")),
    updatedAt: v.number(),
    submittedAt: v.optional(v.number()),
    privacyVersion: v.string(),
  }).index("by_authUserId", ["authUserId"]),
  engagements: defineTable(engagementValidator).index("by_authUserId", ["authUserId"]),
});
