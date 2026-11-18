import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PreviewDashboard } from "@/components/onboarding/preview-dashboard";
import { content } from "@/context/content";

export const metadata: Metadata = { title: content.metadata.dashboardPreview.title, robots: { index: false, follow: false } };

export default function PreviewDashboardPage() {
  if (process.env.NODE_ENV !== "development") notFound();
  return <PreviewDashboard />;
}
