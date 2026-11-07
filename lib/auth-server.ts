import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { convexBetterAuthNextJs } from "@convex-dev/better-auth/nextjs";
import { api } from "@/convex/_generated/api";
import { safeAuthRedirect } from "@/lib/auth-redirect";
import { convexSiteUrl, convexUrl, isConvexConfigured } from "@/lib/convex-config";

// Only create the Better Auth proxy when both Convex URLs are present. Creating
// it eagerly with missing settings throws while the module is evaluated, which
// breaks `next build` (for example on a Vercel preview without environment
// variables) before any page can render.
const auth = isConvexConfigured
  ? convexBetterAuthNextJs({ convexUrl: convexUrl!, convexSiteUrl: convexSiteUrl! })
  : null;

function authUnavailable() {
  return new Response(
    JSON.stringify({ error: "Authentication is not configured for this deployment." }),
    { status: 503, headers: { "content-type": "application/json" } },
  );
}

export const handler = auth?.handler ?? {
  GET: async () => authUnavailable(),
  POST: async () => authUnavailable(),
};

export async function getToken() {
  return auth ? auth.getToken() : undefined;
}

export const getCurrentUser = cache(async () => {
  if (!auth) return null;
  return auth.fetchAuthQuery(api.auth.getCurrentUser, {});
});

export async function requireUser(returnTo = "/onboarding") {
  const user = await getCurrentUser();
  if (!user) redirect(`/login?next=${encodeURIComponent(safeAuthRedirect(returnTo))}`);
  return user;
}
