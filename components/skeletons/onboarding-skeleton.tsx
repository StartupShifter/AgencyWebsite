import { PortalShell } from "@/components/onboarding/portal-shell";

import { LoadingRegion, SkeletonBlock } from "./loading";

function ChoiceRows() {
  return (
    <div className="ob-choices grid gap-3 sm:grid-cols-2">
      {Array.from({ length: 4 }, (_, index) => (
        <SkeletonBlock
          key={index}
          className="h-[74px] w-full rounded-[14px]"
        />
      ))}
    </div>
  );
}

export function OnboardingSkeletonContent() {
  return (
    <LoadingRegion label="Loading your project brief" className="ob-guided">
      <div className="ob-journey-top">
        <div className="space-y-2">
          <SkeletonBlock className="h-5 w-56 max-w-full" />
          <SkeletonBlock className="h-3 w-36" />
        </div>
        <SkeletonBlock className="h-10 w-32 rounded-full" />
      </div>

      <div className="ob-journey-layout">
        <aside className="ob-chapter-panel">
          <div className="ob-chapter-story">
            <SkeletonBlock className="h-6 w-40 rounded-full bg-white/20" />
            <SkeletonBlock className="mt-4 h-8 w-11/12 bg-white/25" />
            <SkeletonBlock className="mt-3 h-8 w-3/4 bg-white/25" />
            <SkeletonBlock className="mt-5 aspect-[4/3] w-full rounded-[20px] bg-white/15" />
            <SkeletonBlock className="mt-5 h-3.5 w-full bg-white/15" />
            <SkeletonBlock className="mt-2 h-3.5 w-4/5 bg-white/15" />
          </div>
        </aside>

        <section className="ob-guided-stage">
          <div className="ob-speech space-y-3">
            <SkeletonBlock className="h-3 w-28" />
            <SkeletonBlock className="h-10 w-11/12 max-w-[660px]" />
            <SkeletonBlock className="h-10 w-2/3 max-w-[520px]" />
          </div>

          <div className="ob-guided-answer">
            <ChoiceRows />
            <SkeletonBlock className="mt-5 h-14 w-full rounded-xl" />
            <div className="mt-4 flex flex-wrap gap-2">
              <SkeletonBlock className="h-9 w-24 rounded-full" />
              <SkeletonBlock className="h-9 w-32 rounded-full" />
              <SkeletonBlock className="h-9 w-28 rounded-full" />
            </div>
          </div>

          <div className="ob-guided-actions">
            <SkeletonBlock className="h-12 w-28 rounded-full" />
            <SkeletonBlock className="h-12 w-36 rounded-full" />
          </div>
        </section>
      </div>
    </LoadingRegion>
  );
}

export function OnboardingSkeleton({ preview = false }: { preview?: boolean }) {
  return (
    <PortalShell preview={preview}>
      <OnboardingSkeletonContent />
    </PortalShell>
  );
}
