import { SkeletonBlock } from "./loading";

export function RootSkeleton() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="flex min-h-svh flex-col bg-background"
    >
      <span className="sr-only">Loading Starter Shifter</span>
      <div aria-hidden="true" className="mx-auto w-full max-w-6xl flex-1 px-6 py-6">
        <div className="flex items-center justify-between gap-6">
          <SkeletonBlock className="h-9 w-36 rounded-xl" />
          <div className="hidden items-center gap-6 sm:flex">
            <SkeletonBlock className="h-3 w-16" />
            <SkeletonBlock className="h-3 w-20" />
            <SkeletonBlock className="h-3 w-14" />
          </div>
          <SkeletonBlock className="h-10 w-28 rounded-full" />
        </div>

        <div className="mt-20 max-w-2xl">
          <SkeletonBlock className="h-3 w-28" />
          <SkeletonBlock className="mt-5 h-12 w-full sm:h-16" />
          <SkeletonBlock className="mt-3 h-12 w-4/5 sm:h-16" />
          <SkeletonBlock className="mt-6 h-4 w-full" />
          <SkeletonBlock className="mt-2 h-4 w-3/4" />
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-4"
            >
              <SkeletonBlock className="size-10 rounded-xl" />
              <SkeletonBlock className="mt-4 h-4 w-2/3" />
              <SkeletonBlock className="mt-2 h-3 w-full" />
              <SkeletonBlock className="mt-2 h-3 w-4/5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
