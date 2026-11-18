import { v, ConvexError } from "convex/values";
import { internalMutation } from "./_generated/server";
import { createAuth } from "./auth";
import { isAdminEmail } from "./admin";

// Run through the authenticated Convex CLI/dashboard, never from the browser.
export const createAdmin = internalMutation({
  args: {
    name: v.string(),
    email: v.string(),
    username: v.string(),
    password: v.string(),
  },
  returns: v.object({ id: v.string(), email: v.string(), role: v.literal("admin") }),
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();
    if (!isAdminEmail(email)) {
      throw new ConvexError("Add this email to ADMIN_EMAILS before provisioning.");
    }
    const auth = createAuth(ctx, { autoSignIn: false });
    const result = await auth.api.signUpEmail({
      body: { ...args, email },
    });
    await ctx.db.insert("adminAccounts", {
      authUserId: result.user.id,
      role: "admin",
    });
    return { id: result.user.id, email: result.user.email, role: "admin" as const };
  },
});

// Provision a regular (non-admin) client account without going through the
// public sign-up flow. The account is created in the same Better Auth component
// as administrator accounts, so it is ready to sign in once the client app
// points at this deployment.
export const createUser = internalMutation({
  args: {
    name: v.string(),
    email: v.string(),
    password: v.string(),
  },
  returns: v.object({ id: v.string(), email: v.string() }),
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();
    const auth = createAuth(ctx, { autoSignIn: false });
    const result = await auth.api.signUpEmail({
      body: { name: args.name, email, password: args.password },
    });
    return { id: result.user.id, email: result.user.email };
  },
});
