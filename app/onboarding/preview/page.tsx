import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { OnboardingPreview } from "@/components/onboarding/onboarding-wizard";
import { content } from "@/context/content";
export const metadata: Metadata = { title: content.metadata.onboardingPreview.title, robots: { index: false, follow: false } };
export default function PreviewPage() {
  if (process.env.NODE_ENV !== "development") notFound();
  return <OnboardingPreview />;
}
