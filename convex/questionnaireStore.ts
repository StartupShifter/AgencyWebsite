import { ConvexError } from "convex/values";
import type { QueryCtx, MutationCtx } from "./_generated/server";
import type { Doc } from "./_generated/dataModel";
import type { AssignedQuestionnaire } from "../lib/onboarding/types";

type OwnerKind = "client" | "preview";
type Reader = Pick<QueryCtx, "db">;

export async function resolveQuestionnaire(ctx: Reader, ownerKind: OwnerKind, ownerId: string, legacyVersion?: string) {
  const assignment = await ctx.db.query("questionnaireAssignments").withIndex("by_owner", q => q.eq("ownerKind", ownerKind).eq("ownerId", ownerId)).unique();
  if (assignment) {
    const version = await ctx.db.get(assignment.versionId);
    if (!version) throw new ConvexError("The assigned questionnaire is unavailable. Contact the agency.");
    return version;
  }
  // Never substitute the latest questionnaire for an existing client's saved version.
  if (legacyVersion) {
    const version = await ctx.db.query("questionnaireVersions").withIndex("by_version", q => q.eq("version", legacyVersion)).unique();
    if (!version) throw new ConvexError("This historical questionnaire needs to be restored by the agency before editing.");
    return version;
  }
  const setting = await ctx.db.query("questionnaireSettings").withIndex("by_key", q => q.eq("key", "active")).unique();
  const version = setting ? await ctx.db.get(setting.versionId) : null;
  if (!version) throw new ConvexError("The agency has not published an onboarding questionnaire yet.");
  return version;
}

export async function ensureAssignment(ctx: MutationCtx, ownerKind: OwnerKind, ownerId: string, legacyVersion?: string) {
  const version = await resolveQuestionnaire(ctx, ownerKind, ownerId, legacyVersion);
  const assignment = await ctx.db.query("questionnaireAssignments").withIndex("by_owner", q => q.eq("ownerKind", ownerKind).eq("ownerId", ownerId)).unique();
  if (!assignment) await ctx.db.insert("questionnaireAssignments", { ownerKind, ownerId, versionId: version._id, assignedAt: Date.now(), assignedBy: "initial-assignment" });
  return version;
}

export function questionnaireView(version: Doc<"questionnaireVersions">): AssignedQuestionnaire {
  return { version: version.version, title: version.title, definition: version.definition, customized: version.kind === "client" };
}

export function requireAssignedVersion(actual: string, expected: string) {
  if (actual !== expected) throw new ConvexError("Your agency changed your questionnaire. Reload before saving so that newer questions and answers are preserved.");
}
