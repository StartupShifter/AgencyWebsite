import { v } from "convex/values";
import { internalMutation, internalQuery } from "./_generated/server";

export const getRole = internalQuery({
  args: { authUserId: v.string() },
  returns: v.union(v.literal("admin"), v.null()),
  handler: async (ctx, { authUserId }) => {
    const account = await ctx.db
      .query("adminAccounts")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
      .unique();
    return account?.role ?? null;
  },
});

export const revoke = internalMutation({
  args: { authUserId: v.string() },
  returns: v.null(),
  handler: async (ctx, { authUserId }) => {
    const account = await ctx.db
      .query("adminAccounts")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", authUserId))
      .unique();
    if (account) await ctx.db.delete(account._id);
    return null;
  },
});
