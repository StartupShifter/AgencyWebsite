import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { OnboardingPreview } from "@/components/onboarding/onboarding-wizard";
import { getLocalizedContent } from "@/lib/i18n-server";
export async function generateMetadata(): Promise<Metadata> {
  const { content } = await getLocalizedContent();
  return { title: content.metadata.onboardingPreview.title, robots: { index: false, follow: false } };
}
export default function PreviewPage() {
  if (process.env.NODE_ENV !== "development") notFound();
  return <OnboardingPreview />;
}
