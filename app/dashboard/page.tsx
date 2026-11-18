import { Suspense } from "react";
import type { Metadata } from "next";
import { requireUser } from "@/lib/auth-server";
import { ClientDashboard } from "@/components/onboarding/client-dashboard";
import { DashboardLoading } from "@/components/dashboard/dashboard-shell";
import { content } from "@/context/content";
export const metadata: Metadata = { title: content.metadata.dashboard.title, robots: { index: false, follow: false } };
async function AuthenticatedDashboard() { const user = await requireUser("/dashboard"); return <ClientDashboard name={user.name} />; }
export default function DashboardPage() { return <Suspense fallback={<DashboardLoading />}><AuthenticatedDashboard /></Suspense>; }
