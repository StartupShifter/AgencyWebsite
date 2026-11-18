import { ConvexError, v } from "convex/values";
import { answersValidator } from "./onboardingValidators";
import legacy from "./legacyQuestionnaire.json";
import { authComponent } from "./auth";
import { internalMutation, internalQuery } from "./_generated/server";

// Internal local-only cleanup prevents integration fixtures from accumulating.
export const cleanupOnboardingFixture = internalMutation({
  args: { authUserId: v.string() },
  returns: v.null(),
  handler: async (ctx, { authUserId }) => {
    const site = new URL(process.env.SITE_URL ?? "https://invalid.test");
    if (!["localhost", "127.0.0.1"].includes(site.hostname)) throw new ConvexError("Fixture cleanup is local-only.");
    const user = await authComponent.getAnyUserById(ctx, authUserId);
    if (!user || !/^onboarding-smoke-[a-f0-9]+@example\.test$/.test(user.email)) throw new ConvexError("Only an onboarding smoke-test fixture may be removed.");
    for (const table of ["onboarding", "engagements", "projects", "projectStages", "projectActivity", "uploadIntents", "questionnaireHistory"] as const) {
      const fixtures = await ctx.db.query(table).withIndex("by_authUserId", q => q.eq("authUserId", authUserId)).collect();
      for (const fixture of fixtures) await ctx.db.delete(fixture._id);
    }
    const assignment = await ctx.db.query("questionnaireAssignments").withIndex("by_owner", q => q.eq("ownerKind", "client").eq("ownerId", authUserId)).unique();
    if (assignment) await ctx.db.delete(assignment._id);
    const editorDraft = await ctx.db.query("questionnaireDrafts").withIndex("by_scope", q => q.eq("scope", `client:${authUserId}`)).unique();
    if (editorDraft) await ctx.db.delete(editorDraft._id);
    const retained = await ctx.db.query("questionnaireRetainedAnswers").withIndex("by_authUserId_questionId", q => q.eq("authUserId", authUserId)).take(500);
    for (const answer of retained) await ctx.db.delete(answer._id);
    const documents = await ctx.db.query("documents").withIndex("by_authUserId", q => q.eq("authUserId", authUserId)).collect();
    for (const document of documents) {
      await ctx.db.delete(document._id);
      await ctx.storage.delete(document.storageId);
    }
    return null;
  },
});

function requireLocalFixtures() {
  if (!["localhost", "127.0.0.1"].includes(new URL(process.env.SITE_URL ?? "https://invalid.test").hostname)) throw new ConvexError("Questionnaire fixtures are local-only.");
}

/** Remove only private versions authored by a disposable browser-QA administrator. */
export const cleanupBrowserFixtureVersions = internalMutation({
  args: { actor: v.string() }, returns: v.null(),
  handler: async (ctx, { actor }) => {
    requireLocalFixtures();
    const user = await authComponent.getAnyUserById(ctx, actor);
    if (!user || !/^onboarding-smoke-[a-f0-9]+@example\.test$/.test(user.email)) throw new ConvexError("Only a smoke-test administrator is allowed.");
    const versions = await ctx.db.query("questionnaireVersions").withIndex("by_createdBy", q => q.eq("createdBy", actor)).take(51);
    if (versions.length > 50) throw new ConvexError("Too many fixture versions for one cleanup batch.");
    for (const version of versions) {
      const target = version.targetUserId ? await authComponent.getAnyUserById(ctx, version.targetUserId) : null;
      if (version.kind !== "client" || !target || !/^onboarding-smoke-[a-f0-9]+@example\.test$/.test(target.email)) throw new ConvexError("Only private smoke-test client versions may be removed.");
      const owner = await ctx.db.query("questionnaireAssignments").withIndex("by_version", q => q.eq("versionId", version._id)).take(1);
      const history = await ctx.db.query("questionnaireHistory").withIndex("by_authUserId", q => q.eq("authUserId", target._id)).take(1);
      if (owner.length || history.length) throw new ConvexError("Remove the fixture client's assignments and history first.");
      await ctx.db.delete(version._id);
    }
    return null;
  },
});
export const makeLegacyQuestionnaireFixture = internalMutation({
  args: { authUserId: v.string() }, returns: v.null(),
  handler: async (ctx, { authUserId }) => {
    requireLocalFixtures();
    const user = await authComponent.getAnyUserById(ctx, authUserId);
    if (!user || !/^onboarding-smoke-[a-f0-9]+@example\.test$/.test(user.email)) throw new ConvexError("Only smoke-test clients are allowed.");
    const draft = await ctx.db.query("onboarding").withIndex("by_authUserId", q => q.eq("authUserId", authUserId)).unique();
    if (!draft) throw new ConvexError("Save the fixture first.");
    const ids = new Set(legacy.pages.flatMap(page => page.questions.map(question => question.id)));
    await ctx.db.patch(draft._id, { version: "2026-10-11.v1", answers: Object.fromEntries(Object.entries(draft.answers).filter(([id]) => ids.has(id))) });
    const assignment = await ctx.db.query("questionnaireAssignments").withIndex("by_owner", q => q.eq("ownerKind", "client").eq("ownerId", authUserId)).unique();
    if (assignment) await ctx.db.delete(assignment._id);
    return null;
  },
});
export const getQuestionnaireFixtureArchive = internalQuery({
  args: { authUserId: v.string() }, returns: v.array(v.object({ version: v.string(), answers: answersValidator, status: v.string() })),
  handler: async (ctx, { authUserId }) => {
    requireLocalFixtures();
    const user = await authComponent.getAnyUserById(ctx, authUserId);
    if (!user || !/^onboarding-smoke-[a-f0-9]+@example\.test$/.test(user.email)) throw new ConvexError("Only smoke-test clients are allowed.");
    return (await ctx.db.query("questionnaireHistory").withIndex("by_authUserId", q => q.eq("authUserId", authUserId)).take(20)).map(row => ({ version: row.version, answers: row.answers, status: row.status }));
  },
});
/** Restore only test-created state; never overwrites a concurrent real administrator release. */
export const restoreQuestionnaireFixture = internalMutation({
  args: { actor: v.string(), originalVersion: v.string() }, returns: v.null(),
  handler: async (ctx, { actor, originalVersion }) => {
    requireLocalFixtures();
    if (!/^questionnaire-test-[a-f0-9]+$/.test(actor)) throw new ConvexError("Invalid test actor.");
    const active = await ctx.db.query("questionnaireSettings").withIndex("by_key", q => q.eq("key", "active")).unique();
    const current = active ? await ctx.db.get(active.versionId) : null;
    const original = await ctx.db.query("questionnaireVersions").withIndex("by_version", q => q.eq("version", originalVersion)).unique();
    if (active && current?.createdBy === actor && original) await ctx.db.patch(active._id, { versionId: original._id });
    const draft = await ctx.db.query("questionnaireDrafts").withIndex("by_scope", q => q.eq("scope", "global")).unique();
    if (draft?.updatedBy === actor) await ctx.db.delete(draft._id);
    const versions = await ctx.db.query("questionnaireVersions").withIndex("by_createdBy", q => q.eq("createdBy", actor)).take(20);
    for (const version of versions) {
      const owners = await ctx.db.query("questionnaireAssignments").withIndex("by_version", q => q.eq("versionId", version._id)).take(1);
      const settings = await ctx.db.query("questionnaireSettings").withIndex("by_key", q => q.eq("key", "active")).unique();
      if (!owners.length && settings?.versionId !== version._id) await ctx.db.delete(version._id);
    }
    return null;
  },
});
