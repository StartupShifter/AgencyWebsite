import { LoadingRegion, SkeletonBlock } from "./loading";

const panelClass =
  "rounded-[20px] border border-[var(--workspace-line)] bg-white p-5 sm:p-6";

function StatCard({ ring = false }: { ring?: boolean }) {
  return (
    <div className="rounded-[18px] border border-[var(--workspace-line)] bg-white p-5">
      <div className="flex items-center justify-between">
        <SkeletonBlock className="h-3 w-24" />
        <SkeletonBlock className="size-4 rounded" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-3">
        <div className="space-y-3">
          <SkeletonBlock className="h-8 w-14" />
          <SkeletonBlock className="h-3 w-24" />
          <SkeletonBlock className="h-5 w-24 rounded-full" />
        </div>
        {ring ? (
          <SkeletonBlock className="size-[82px] shrink-0 rounded-full" />
        ) : null}
      </div>
    </div>
  );
}

function TopicRows({ rows = 4 }: { rows?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: rows }, (_, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <SkeletonBlock className="h-3.5 w-32" />
            <SkeletonBlock className="h-3 w-12" />
          </div>
          <SkeletonBlock className="h-1.5 w-full rounded-full" />
        </div>
      ))}
    </div>
  );
}

export function WorkspaceSkeletonContent() {
  return (
    <LoadingRegion label="Loading your workspace">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <SkeletonBlock className="h-3 w-44" />
          <SkeletonBlock className="mt-3 h-8 w-72 max-w-full" />
          <SkeletonBlock className="mt-3 h-3.5 w-80 max-w-full" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <SkeletonBlock className="h-10 w-32 rounded-full" />
          <SkeletonBlock className="h-10 w-32 rounded-full" />
        </div>
      </div>

      <div className="mb-6 rounded-[20px] border border-[var(--workspace-line)] bg-[var(--workspace-tint)] p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="min-w-0 flex-1 space-y-3">
            <SkeletonBlock className="h-3 w-28" />
            <SkeletonBlock className="h-6 w-2/3 min-w-48" />
            <SkeletonBlock className="h-3.5 w-4/5 min-w-40" />
          </div>
          <SkeletonBlock className="hidden h-20 w-44 rounded-2xl sm:block" />
        </div>
      </div>

      <div className="mb-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-[1.45fr_1fr_1fr_1fr]">
        <StatCard ring />
        <StatCard />
        <StatCard />
        <StatCard />
      </div>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.7fr)_minmax(280px,1fr)]">
        <div className="space-y-5">
          <section className={panelClass}>
            <div className="mb-5 flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1 space-y-2">
                <SkeletonBlock className="h-4 w-56 max-w-full" />
                <SkeletonBlock className="h-3 w-72 max-w-full" />
              </div>
              <SkeletonBlock className="h-6 w-32 shrink-0 rounded-full" />
            </div>
            <TopicRows />
          </section>

          <section className={panelClass}>
            <div className="mb-5 space-y-2">
              <SkeletonBlock className="h-4 w-44" />
              <SkeletonBlock className="h-3 w-64 max-w-full" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {Array.from({ length: 4 }, (_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[var(--workspace-line)] p-4"
                >
                  <SkeletonBlock className="h-3.5 w-28" />
                  <SkeletonBlock className="mt-3 h-3 w-full" />
                  <SkeletonBlock className="mt-2 h-3 w-3/4" />
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-5">
          <section className="rounded-[20px] border border-[var(--workspace-line)] bg-[var(--commerce-deep)] p-5 sm:p-6">
            <SkeletonBlock className="h-3 w-24 bg-white/20" />
            <SkeletonBlock className="mt-4 h-6 w-4/5 bg-white/25" />
            <SkeletonBlock className="mt-3 h-3.5 w-full bg-white/15" />
            <SkeletonBlock className="mt-2 h-3.5 w-3/4 bg-white/15" />
            <SkeletonBlock className="mt-5 h-10 w-36 rounded-full bg-white/25" />
          </section>

          <section className={panelClass}>
            <div className="mb-4 space-y-2">
              <SkeletonBlock className="h-4 w-32" />
              <SkeletonBlock className="h-3 w-48" />
            </div>
            <div className="space-y-3">
              {Array.from({ length: 4 }, (_, index) => (
                <div key={index} className="flex items-center gap-3">
                  <SkeletonBlock className="size-9 shrink-0 rounded-full" />
                  <div className="min-w-0 flex-1 space-y-2">
                    <SkeletonBlock className="h-3 w-4/5" />
                    <SkeletonBlock className="h-3 w-2/5" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </LoadingRegion>
  );
}
