import { AuthShell } from "@/components/auth/auth-shell";

import { LoadingRegion, SkeletonBlock } from "./loading";

export function AuthSkeleton() {
  return (
    <AuthShell>
      <LoadingRegion
        label="Loading sign-in options"
        className="flex w-full flex-col"
      >
        <div className="mb-7 text-center">
          <SkeletonBlock className="mx-auto h-9 w-56 max-w-full" />
          <SkeletonBlock className="mx-auto mt-4 h-3.5 w-64 max-w-full" />
          <SkeletonBlock className="mx-auto mt-2 h-3.5 w-48 max-w-full" />
        </div>

        <div className="flex flex-col gap-3">
          <SkeletonBlock className="h-11 w-full rounded-full" />
          <SkeletonBlock className="h-11 w-full rounded-full" />
        </div>

        <div className="mt-6 flex items-center gap-3">
          <SkeletonBlock className="h-px flex-1 rounded-none" />
          <SkeletonBlock className="h-3 w-16" />
          <SkeletonBlock className="h-px flex-1 rounded-none" />
        </div>

        <SkeletonBlock className="mt-6 h-11 w-full rounded-full" />

        <div className="mt-7 space-y-2">
          <SkeletonBlock className="mx-auto h-3 w-3/4" />
          <SkeletonBlock className="mx-auto h-3 w-1/2" />
        </div>
      </LoadingRegion>
    </AuthShell>
  );
}
