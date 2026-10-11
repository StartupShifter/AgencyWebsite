import { Suspense } from "react";
import type { Metadata } from "next";
import { requireUser } from "@/lib/auth-server";
import { OnboardingWizard } from "@/components/onboarding/onboarding-wizard";

export const metadata: Metadata = { title: "Your project brief — Starter Shifter", robots: { index: false, follow: false } };
async function AuthenticatedOnboarding() {
  const user = await requireUser("/onboarding");
  return <OnboardingWizard user={user} development={process.env.NODE_ENV === "development"} />;
}
export default function OnboardingPage() { return <Suspense fallback={<div className="ob-loading" role="status">Loading your project brief…</div>}><AuthenticatedOnboarding /></Suspense>; }
