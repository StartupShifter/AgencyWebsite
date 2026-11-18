import { ConvexError, v } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import { internalMutation, internalQuery, type MutationCtx, type QueryCtx } from "./_generated/server";
import { internal } from "./_generated/api";
import { authComponent } from "./auth";
import { definitionValidator } from "./questionnaireValidators";
import { validateDefinition } from "../lib/onboarding/definition-validation";
import { DEFAULT_DEFINITION } from "../lib/onboarding/default-definition";
import legacyDefinition from "./legacyQuestionnaire.json";
import { resolveQuestionnaire, ensureAssignment } from "./questionnaireStore";
import { assignClientVersion } from "./questionnaireMigration";
import type { QuestionnaireDefinition } from "../lib/onboarding/types";

const legacy = legacyDefinition as QuestionnaireDefinition;
const targetArgs = { targetUserId: v.optional(v.string()) };
const versionSummary = v.object({ version: v.string(), title: v.string(), createdAt: v.number(), createdBy: v.string(), note: v.string() });
const editorValidator = v.object({ scope: v.string(), assignedVersion: v.string(), baseVersion: v.string(), title: v.string(), definition: definitionValidator, revision: v.number(), hasDraft: v.boolean(), versions: v.array(versionSummary) });
const clientRowValidator = v.object({ authUserId: v.string(), name: v.string(), email: v.string(), businessName: v.string(), version: v.string(), status: v.string(), customized: v.boolean() });
const scopeKey = (id?: string) => id ? `client:${id}` : "global";
async function baseFor(ctx: QueryCtx | MutationCtx, targetUserId?: string) {
  if (targetUserId) {
    if (!await authComponent.getAnyUserById(ctx, targetUserId)) throw new ConvexError("Client account does not exist.");
    const draft = await ctx.db.query("onboarding").withIndex("by_authUserId", q => q.eq("authUserId", targetUserId)).unique();
    return resolveQuestionnaire(ctx, "client", targetUserId, draft?.version);
  }
  const setting = await ctx.db.query("questionnaireSettings").withIndex("by_key", q => q.eq("key", "active")).unique();
  const version = setting ? await ctx.db.get(setting.versionId) : null;
  if (!version) throw new ConvexError("Initialize the questionnaire library before editing.");
  return version;
}
function checkDefinition(definition: QuestionnaireDefinition) {
  const errors = validateDefinition(definition);
  if (errors.length) throw new ConvexError(errors.slice(0, 15).join("\n"));
}

/** Run once when introducing the versioned catalogue; never overwrites published content. */
export const bootstrap = internalMutation({
  args: {}, returns: v.null(),
  handler: async ctx => {
    for (const seed of [
      { version: "2026-10-11.v1", title: "Original onboarding", definition: legacy },
      { version: "2026-11-18.v2", title: "Business and ecommerce onboarding", definition: DEFAULT_DEFINITION },
    ]) {
      const existing = await ctx.db.query("questionnaireVersions").withIndex("by_version", q => q.eq("version", seed.version)).unique();
      if (!existing) {
        checkDefinition(seed.definition);
        await ctx.db.insert("questionnaireVersions", { ...seed, kind: "global", createdAt: Date.now(), createdBy: "migration", note: "Preserved baseline for existing and new clients." });
      }
    }
    const active = await ctx.db.query("questionnaireSettings").withIndex("by_key", q => q.eq("key", "active")).unique();
    if (!active) {
      const version = await ctx.db.query("questionnaireVersions").withIndex("by_version", q => q.eq("version", "2026-11-18.v2")).unique();
      await ctx.db.insert("questionnaireSettings", { key: "active", versionId: version!._id });
    }
    await ctx.scheduler.runAfter(0, internal.questionnaireAdmin.pinExistingClients, { cursor: null });
    return null;
  },
});

export const getEditor = internalQuery({
  args: targetArgs, returns: editorValidator,
  handler: async (ctx, { targetUserId }) => {
    const base = await baseFor(ctx, targetUserId);
    const draft = await ctx.db.query("questionnaireDrafts").withIndex("by_scope", q => q.eq("scope", scopeKey(targetUserId))).unique();
    const draftBase = draft ? await ctx.db.get(draft.baseVersionId) : base;
    const versions = await ctx.db.query("questionnaireVersions").withIndex("by_kind", q => q.eq("kind", "global")).order("desc").take(8);
    return { scope: scopeKey(targetUserId), assignedVersion: base.version, baseVersion: draftBase!.version, title: draft?.title ?? base.title, definition: draft?.definition ?? base.definition, revision: draft?.revision ?? 0, hasDraft: Boolean(draft), versions: versions.map(version => ({ version: version.version, title: version.title, createdAt: version.createdAt, createdBy: version.createdBy, note: version.note })) };
  },
});
export const listClients = internalQuery({
  args: { paginationOpts: paginationOptsValidator },
  returns: v.object({ page: v.array(clientRowValidator), isDone: v.boolean(), continueCursor: v.string() }),
  handler: async (ctx, { paginationOpts }) => {
    const result = await ctx.db.query("questionnaireAssignments").withIndex("by_owner", q => q.eq("ownerKind", "client")).order("desc").paginate({ ...paginationOpts, numItems: Math.min(10, Math.max(1, paginationOpts.numItems)) });
    const page = await Promise.all(result.page.map(async assignment => {
      const draft = await ctx.db.query("onboarding").withIndex("by_authUserId", q => q.eq("authUserId", assignment.ownerId)).unique();
      const user = await authComponent.getAnyUserById(ctx, assignment.ownerId);
      const version = await ctx.db.get(assignment.versionId);
      const business = draft?.answers["P01.2"];
      return { authUserId: assignment.ownerId, name: user?.name ?? "Client", email: user?.email ?? "", businessName: typeof business?.value === "string" ? business.value : "", version: version!.version, status: draft?.status ?? "not started", customized: version!.kind === "client" };
    }));
    return { page, isDone: result.isDone, continueCursor: result.continueCursor };
  },
});
export const saveEditor = internalMutation({
  args: { ...targetArgs, actor: v.string(), title: v.string(), definition: definitionValidator, expectedRevision: v.number(), baseVersion: v.string() },
  returns: v.number(),
  handler: async (ctx, args) => {
    checkDefinition(args.definition);
    if (!args.title.trim() || args.title.length > 200) throw new ConvexError("Enter a questionnaire title under 200 characters.");
    const base = await baseFor(ctx, args.targetUserId);
    const scope = scopeKey(args.targetUserId);
    const draft = await ctx.db.query("questionnaireDrafts").withIndex("by_scope", q => q.eq("scope", scope)).unique();
    if ((draft?.revision ?? 0) !== args.expectedRevision) throw new ConvexError("Another administrator saved this draft. Reload before editing.");
    if (!draft && base.version !== args.baseVersion) throw new ConvexError("The published questionnaire changed. Reload before editing.");
    const revision = (draft?.revision ?? 0) + 1;
    const value = { scope, baseVersionId: draft?.baseVersionId ?? base._id, definition: args.definition, title: args.title.trim(), revision, updatedAt: Date.now(), updatedBy: args.actor };
    if (draft) await ctx.db.replace(draft._id, value); else await ctx.db.insert("questionnaireDrafts", value);
    return revision;
  },
});
export const discardDraft = internalMutation({
  args: { ...targetArgs, expectedRevision: v.number() }, returns: v.null(),
  handler: async (ctx, args) => {
    const draft = await ctx.db.query("questionnaireDrafts").withIndex("by_scope", q => q.eq("scope", scopeKey(args.targetUserId))).unique();
    if (draft && draft.revision !== args.expectedRevision) throw new ConvexError("Another administrator changed this draft. Reload first.");
    if (draft) await ctx.db.delete(draft._id);
    return null;
  },
});
export const publishEditor = internalMutation({
  args: { ...targetArgs, actor: v.string(), expectedRevision: v.number(), reason: v.string() }, returns: v.string(),
  handler: async (ctx, args) => {
    const base = await baseFor(ctx, args.targetUserId);
    const draft = await ctx.db.query("questionnaireDrafts").withIndex("by_scope", q => q.eq("scope", scopeKey(args.targetUserId))).unique();
    if (!draft || draft.revision !== args.expectedRevision) throw new ConvexError("Save the current draft before publishing; reload if another admin changed it.");
    if (draft.baseVersionId !== base._id) throw new ConvexError("The published version changed while this draft was open. Discard it and start from the current version.");
    if (!args.reason.trim() || args.reason.length > 1000) throw new ConvexError("Add a short reason for publishing (under 1,000 characters).");
    checkDefinition(draft.definition);
    const now = Date.now();
    const version = `${args.targetUserId ? "client" : "published"}-${now}-${draft._id}`;
    const versionId = await ctx.db.insert("questionnaireVersions", { version, title: draft.title, definition: draft.definition, kind: args.targetUserId ? "client" : "global", ...(args.targetUserId ? { targetUserId: args.targetUserId } : {}), parentVersion: base.version, createdAt: now, createdBy: args.actor, note: args.reason.trim() });
    if (!args.targetUserId) {
      const active = await ctx.db.query("questionnaireSettings").withIndex("by_key", q => q.eq("key", "active")).unique();
      await ctx.db.patch(active!._id, { versionId });
      // Existing assignments, answers, and submitted status are deliberately untouched.
    } else {
      const published = await ctx.db.get(versionId);
      await assignClientVersion(ctx, args.targetUserId, base, published!, args.actor, args.reason.trim());
    }
    await ctx.db.delete(draft._id);
    return version;
  },
});
/** Explicit opt-in only. Batches are transactional and safe to retry after an uncertain response. */
export const applyGlobalVersion = internalMutation({
  args: {
    version: v.string(), actor: v.string(), reason: v.string(),
    clients: v.array(v.object({ authUserId: v.string(), expectedVersion: v.string() })),
  },
  returns: v.object({ applied: v.number() }),
  handler: async (ctx, args) => {
    if (!args.reason.trim() || args.reason.length > 1000) throw new ConvexError("Add a reason under 1,000 characters.");
    if (!args.clients.length || args.clients.length > 10 || new Set(args.clients.map(client => client.authUserId)).size !== args.clients.length) throw new ConvexError("Choose between 1 and 10 distinct clients per batch.");
    const version = await ctx.db.query("questionnaireVersions").withIndex("by_version", q => q.eq("version", args.version)).unique();
    if (!version || version.kind !== "global") throw new ConvexError("Choose a published global questionnaire.");
    let applied = 0;
    for (const client of args.clients) {
      const base = await baseFor(ctx, client.authUserId);
      if (base._id === version._id) continue;
      if (base.version !== client.expectedVersion) throw new ConvexError("A selected client's questionnaire changed. Refresh the client list and select them again.");
      const draft = await ctx.db.query("questionnaireDrafts").withIndex("by_scope", q => q.eq("scope", scopeKey(client.authUserId))).unique();
      if (draft) throw new ConvexError("A selected client has an unpublished questionnaire draft. Publish or discard that draft before applying a global version.");
      await assignClientVersion(ctx, client.authUserId, base, version, args.actor, args.reason.trim());
      applied++;
    }
    return { applied };
  },
});
export const getClientHistory = internalQuery({
  args: { authUserId: v.string() },
  returns: v.array(v.object({ version: v.string(), archivedAt: v.number(), actor: v.string(), reason: v.string(), status: v.string(), answeredCount: v.number() })),
  handler: async (ctx, { authUserId }) => (await ctx.db.query("questionnaireHistory").withIndex("by_authUserId", q => q.eq("authUserId", authUserId)).order("desc").take(10)).map(row => ({ version: row.version, archivedAt: row.archivedAt, actor: row.actor, reason: row.reason, status: row.status, answeredCount: Object.keys(row.answers).length })),
});

/** Backfill assignments in bounded batches without changing any existing answers or statuses. */
export const pinExistingClients = internalMutation({
  args: { cursor: v.union(v.string(), v.null()) }, returns: v.null(),
  handler: async (ctx, { cursor }) => {
    const result = await ctx.db.query("onboarding").paginate({ cursor, numItems: 10 });
    for (const draft of result.page) await ensureAssignment(ctx, "client", draft.authUserId, draft.version);
    if (!result.isDone) await ctx.scheduler.runAfter(0, internal.questionnaireAdmin.pinExistingClients, { cursor: result.continueCursor });
    return null;
  },
});
