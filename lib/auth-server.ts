import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { convexBetterAuthNextJs } from "@convex-dev/better-auth/nextjs";
import { api } from "@/convex/_generated/api";
import { safeAuthRedirect } from "@/lib/auth-redirect";

export const { handler, getToken, fetchAuthQuery } = convexBetterAuthNextJs({
  convexUrl: process.env.NEXT_PUBLIC_CONVEX_URL!,
  convexSiteUrl: process.env.NEXT_PUBLIC_CONVEX_SITE_URL!,
});

export const getCurrentUser = cache(async () => fetchAuthQuery(api.auth.getCurrentUser, {}));

export async function requireUser(returnTo = "/onboarding") {
  const user = await getCurrentUser();
  if (!user) redirect(`/login?next=${encodeURIComponent(safeAuthRedirect(returnTo))}`);
  return user;
}
