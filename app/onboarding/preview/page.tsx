import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { OnboardingPreview } from "@/components/onboarding/onboarding-wizard";
export const metadata: Metadata = { title: "Onboarding preview — Starter Shifter", robots: { index: false, follow: false } };
export default function PreviewPage() {
  if (process.env.NODE_ENV !== "development") notFound();
  return <OnboardingPreview />;
}
