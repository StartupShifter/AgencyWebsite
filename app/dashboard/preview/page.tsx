import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PreviewDashboard } from "@/components/onboarding/preview-dashboard";
import { getLocalizedContent } from "@/lib/i18n-server";

export async function generateMetadata(): Promise<Metadata> {
  const { content } = await getLocalizedContent();
  return { title: content.metadata.dashboardPreview.title, robots: { index: false, follow: false } };
}

export default function PreviewDashboardPage() {
  if (process.env.NODE_ENV !== "development") notFound();
  return <PreviewDashboard />;
}
