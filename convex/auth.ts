import { createClient, type GenericCtx } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";
import { betterAuth } from "better-auth/minimal";
import { username } from "better-auth/plugins";
import { v } from "convex/values";
import { components } from "./_generated/api";
import type { DataModel } from "./_generated/dataModel";
import { query } from "./_generated/server";
import { isAdminEmail } from "./admin";
import authConfig from "./auth.config";

export const authComponent = createClient<DataModel>(components.betterAuth);

export function createAuth(ctx: GenericCtx<DataModel>, opts: { autoSignIn?: boolean } = {}) {
  const googleEnabled = Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);
  const facebookEnabled = Boolean(process.env.FACEBOOK_CLIENT_ID && process.env.FACEBOOK_CLIENT_SECRET);
  const trustedOrigins = [...new Set([
    "http://localhost:3000",
    "http://localhost:3001",
    process.env.SITE_URL,
    ...(process.env.AUTH_TRUSTED_ORIGINS ?? "").split(","),
  ].filter((origin): origin is string => Boolean(origin?.trim())).map(origin => origin.trim()))];
  return betterAuth({
    // The two Next.js proxies forward their own host. Restrict resolution to
    // configured origins so callbacks and secure cookies stay on that app.
    baseURL: {
      allowedHosts: trustedOrigins.map(origin => new URL(origin).host),
      fallback: process.env.SITE_URL!,
    },
    advanced: { trustedProxyHeaders: true },
    secret: process.env.BETTER_AUTH_SECRET!,
    database: authComponent.adapter(ctx),
    trustedOrigins,
    emailAndPassword: {
      enabled: true,
      minPasswordLength: 12,
      autoSignIn: opts.autoSignIn ?? true,
    },
    socialProviders: {
      ...(googleEnabled ? { google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        prompt: "select_account" as const,
      } } : {}),
      ...(facebookEnabled ? { facebook: {
        clientId: process.env.FACEBOOK_CLIENT_ID!,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      } } : {}),
    },
    plugins: [username(), convex({ authConfig })],
  });
}

export const getCurrentUser = query({
  args: {},
  returns: v.union(v.null(), v.object({
    id: v.string(),
    name: v.string(),
    email: v.string(),
    emailVerified: v.boolean(),
    username: v.union(v.string(), v.null()),
    role: v.union(v.literal("admin"), v.null()),
  })),
  handler: async (ctx) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) return null;
    const account = await ctx.db
      .query("adminAccounts")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", user._id))
      .unique();
    const role: "admin" | null = account && isAdminEmail(user.email) ? "admin" : null;
    return {
      id: user._id,
      name: user.name,
      email: user.email,
      emailVerified: user.emailVerified,
      username: user.username ?? null,
      role,
    };
  },
});

export const getLoginOptions = query({
  args: {},
  returns: v.object({ googleEnabled: v.boolean(), facebookEnabled: v.boolean() }),
  handler: async () => ({
    googleEnabled: Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET),
    facebookEnabled: Boolean(process.env.FACEBOOK_CLIENT_ID && process.env.FACEBOOK_CLIENT_SECRET),
  }),
});
