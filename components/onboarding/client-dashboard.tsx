"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useConvexAuth, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { ClientWorkspace } from "@/components/dashboard/client-workspace";
import { DashboardLoading } from "@/components/dashboard/dashboard-shell";

export function ClientDashboard({ name }: { name: string }) {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useConvexAuth();
  const mine = useQuery(api.onboarding.getMine, isAuthenticated ? {} : "skip");
  useEffect(() => {
    if (!isLoading && !isAuthenticated) router.replace("/login");
  }, [isLoading, isAuthenticated, router]);
  if (isLoading || mine === undefined) return <DashboardLoading />;
  if (!mine)
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-4 bg-[#f7f8fa] p-6">
        <h1 className="text-xl font-medium">Your session has ended.</h1>
        <Link
          href="/login"
          className="rounded-full bg-[#d5fa43] px-5 py-3 text-sm"
        >
          Sign in again
        </Link>
      </div>
    );
  return <ClientWorkspace data={mine} name={name} />;
}
