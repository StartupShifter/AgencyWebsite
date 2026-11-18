import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { definitionValidator } from "./questionnaireValidators";
import { answerValidator, answersValidator, engagementValidator } from "./onboardingValidators";
import {
  activityValidator,
  documentValidator,
  projectStageValidator,
  projectValidator,
} from "./workspaceValidators";

export default defineSchema({
  adminAccounts: defineTable({
    // Better Auth user IDs belong to the component, not an application table.
    authUserId: v.string(),
    role: v.literal("admin"),
  }).index("by_authUserId", ["authUserId"]),
  questionnaireVersions: defineTable({
    version: v.string(), title: v.string(), definition: definitionValidator,
    kind: v.union(v.literal("global"), v.literal("client")),
    targetUserId: v.optional(v.string()), parentVersion: v.optional(v.string()),
    createdAt: v.number(), createdBy: v.string(), note: v.string(),
  }).index("by_version", ["version"]).index("by_kind", ["kind"]).index("by_createdBy", ["createdBy"]),
  questionnaireSettings: defineTable({ key: v.literal("active"), versionId: v.id("questionnaireVersions") }).index("by_key", ["key"]),
  questionnaireAssignments: defineTable({
    ownerKind: v.union(v.literal("client"), v.literal("preview")), ownerId: v.string(),
    versionId: v.id("questionnaireVersions"), assignedAt: v.number(), assignedBy: v.string(),
  }).index("by_owner", ["ownerKind", "ownerId"]).index("by_version", ["versionId"]),
  questionnaireDrafts: defineTable({
    scope: v.string(), baseVersionId: v.id("questionnaireVersions"), definition: definitionValidator,
    title: v.string(), revision: v.number(), updatedAt: v.number(), updatedBy: v.string(),
  }).index("by_scope", ["scope"]),
  questionnaireHistory: defineTable({
    authUserId: v.string(), version: v.string(), answers: answersValidator,
    extraModules: v.array(v.string()), status: v.union(v.literal("draft"), v.literal("submitted")),
    submittedAt: v.optional(v.number()), privacyVersion: v.string(), archivedAt: v.number(),
    actor: v.string(), reason: v.string(),
  }).index("by_authUserId", ["authUserId"]),
  questionnaireRetainedAnswers: defineTable({
    authUserId: v.string(), questionId: v.string(), answer: answerValidator,
    version: v.string(), archivedAt: v.number(),
  }).index("by_authUserId_questionId", ["authUserId", "questionId"]),

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
