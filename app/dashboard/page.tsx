import { Suspense } from "react";
import type { Metadata } from "next";
import { requireUser } from "@/lib/auth-server";
import { ClientDashboard } from "@/components/onboarding/client-dashboard";
export const metadata: Metadata = { title: "Client workspace — Starter Shifter", robots: { index: false, follow: false } };
async function AuthenticatedDashboard() { const user = await requireUser("/dashboard"); return <ClientDashboard name={user.name} />; }
export default function DashboardPage() { return <Suspense fallback={<div role="status">Loading your workspace…</div>}><AuthenticatedDashboard /></Suspense>; }
