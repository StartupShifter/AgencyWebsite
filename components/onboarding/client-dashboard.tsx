"use client";

import { useAssignedQuestionnaire } from "./use-assigned-questionnaire";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useConvexAuth, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { ClientWorkspace } from "@/components/dashboard/client-workspace";
import { DashboardLoading } from "@/components/dashboard/dashboard-shell";
import { content } from "@/context/content";

export function ClientDashboard({ name }: { name: string }) {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useConvexAuth();
  const assignment = useAssignedQuestionnaire(isAuthenticated);
  const mine = useQuery(api.onboarding.getMine, isAuthenticated ? {} : "skip");
  useEffect(() => {
    if (!isLoading && !isAuthenticated) router.replace("/login");
  }, [isLoading, isAuthenticated, router]);
  if (assignment.error) return <p role="alert">{assignment.error}</p>;
  if (!assignment.ready || isLoading || mine === undefined) return <DashboardLoading />;
  if (!mine)
    return (
      <div className="workspace-theme flex min-h-svh flex-col items-center justify-center gap-4 bg-[var(--workspace-surface)] p-6 text-[var(--workspace-ink)]">
        <h1 className="text-xl font-medium">{content.onboarding.wizard.sessionEnded}</h1>
        <Link
          href="/login"
          className="rounded-full bg-[var(--commerce-green)] px-5 py-3 text-sm text-white transition-colors hover:bg-[var(--commerce-deep)]"
        >
          {content.onboarding.wizard.signInAgain}
        </Link>
      </div>
    );
  return <ClientWorkspace data={mine} name={name} />;
}
