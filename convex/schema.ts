import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { answersValidator, engagementValidator } from "./onboardingValidators";
import {
  activityValidator,
  documentValidator,
  projectStageValidator,
  projectValidator,
} from "./workspaceValidators";

export default defineSchema({
  onboarding: defineTable({
    authUserId: v.string(),
    version: v.string(),
    answers: answersValidator,
    extraModules: v.array(v.string()),
    currentPage: v.string(),
    currentQuestion: v.optional(v.union(v.string(), v.null())),
    status: v.union(v.literal("draft"), v.literal("submitted")),
    updatedAt: v.number(),
    submittedAt: v.optional(v.number()),
    privacyVersion: v.string(),
  }).index("by_authUserId", ["authUserId"]),
  onboardingPreviewDrafts: defineTable({
    sessionId: v.string(),
    version: v.string(),
    answers: answersValidator,
    extraModules: v.array(v.string()),
    currentPage: v.string(),
    currentQuestion: v.union(v.string(), v.null()),
    status: v.union(v.literal("draft"), v.literal("submitted")),
    updatedAt: v.number(),
    submittedAt: v.optional(v.number()),
    privacyVersion: v.string(),
  }).index("by_sessionId", ["sessionId"]),
  engagements: defineTable(engagementValidator).index("by_authUserId", ["authUserId"]),
  projects: defineTable(projectValidator).index("by_authUserId", ["authUserId"]),
  projectStages: defineTable(projectStageValidator)
    .index("by_authUserId", ["authUserId"])
    .index("by_authUserId_stageId", ["authUserId", "stageId"]),
  projectActivity: defineTable(activityValidator)
    .index("by_authUserId", ["authUserId"])
    .index("by_authUserId_createdAt", ["authUserId", "createdAt"]),
  documents: defineTable(documentValidator)
    .index("by_authUserId", ["authUserId"])
    .index("by_authUserId_uploadedAt", ["authUserId", "uploadedAt"])
    .index("by_storageId", ["storageId"]),
  uploadIntents: defineTable({
    token: v.string(),
    authUserId: v.string(),
    createdAt: v.number(),
    expiresAt: v.number(),
  })
    .index("by_token", ["token"])
    .index("by_authUserId", ["authUserId"]),
});
