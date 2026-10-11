import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PreviewDashboard } from "@/components/onboarding/preview-dashboard";

export const metadata: Metadata = { title: "Your workspace — Starter Shifter", robots: { index: false, follow: false } };

export default function PreviewDashboardPage() {
  if (process.env.NODE_ENV !== "development") notFound();
  return <PreviewDashboard />;
}
