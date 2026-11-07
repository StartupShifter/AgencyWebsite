import { redirect } from "next/navigation";
import { Suspense } from "react";
import { connection } from "next/server";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { getCurrentUser } from "@/lib/auth-server";
import { isConvexConfigured } from "@/lib/convex-config";
import { safeAuthRedirect } from "@/lib/auth-redirect";
import { AuthShell } from "./auth-shell";
import { AuthForm } from "./auth-form";

export type AuthSearchParams = Promise<{ error?: string; next?: string }>;

async function AuthPageContent({ searchParams }: { searchParams: AuthSearchParams }) {
  await connection();
  const [user, options, params] = await Promise.all([
    getCurrentUser(),
    isConvexConfigured
      ? fetchQuery(api.auth.getLoginOptions, {})
      : Promise.resolve({ googleEnabled: false, facebookEnabled: false }),
    searchParams,
  ]);
  const redirectTo = safeAuthRedirect(params.next);
  if (user) redirect(redirectTo);
  return <AuthShell><AuthForm {...options} redirectTo={redirectTo} initialError={params.error ? "Social sign-in was unsuccessful. Try again or continue with email." : undefined} /></AuthShell>;
}

export function AuthPage(props: { searchParams: AuthSearchParams }) {
  return <Suspense fallback={<div className="flex min-h-svh items-center justify-center text-sm text-muted-foreground" role="status">Loading sign-in options…</div>}><AuthPageContent {...props} /></Suspense>;
}
