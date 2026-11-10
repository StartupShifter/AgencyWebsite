import { ConvexError, v } from "convex/values";
import { authComponent } from "./auth";
import { internalMutation } from "./_generated/server";

// Internal local-only cleanup prevents integration fixtures from accumulating.
export const cleanupOnboardingFixture = internalMutation({
  args: { authUserId: v.string() },
  returns: v.null(),
  handler: async (ctx, { authUserId }) => {
    const site = new URL(process.env.SITE_URL ?? "https://invalid.test");
    if (!["localhost", "127.0.0.1"].includes(site.hostname)) throw new ConvexError("Fixture cleanup is local-only.");
    const user = await authComponent.getAnyUserById(ctx, authUserId);
    if (!user || !/^onboarding-smoke-[a-f0-9]+@example\.test$/.test(user.email)) throw new ConvexError("Only an onboarding smoke-test fixture may be removed.");
    for (const table of ["onboarding", "engagements", "projects", "projectStages", "projectActivity", "uploadIntents"] as const) {
      const fixtures = await ctx.db.query(table).withIndex("by_authUserId", q => q.eq("authUserId", authUserId)).collect();
      for (const fixture of fixtures) await ctx.db.delete(fixture._id);
    }
    const documents = await ctx.db.query("documents").withIndex("by_authUserId", q => q.eq("authUserId", authUserId)).collect();
    for (const document of documents) {
      await ctx.db.delete(document._id);
      await ctx.storage.delete(document.storageId);
    }
    return null;
  },
});
