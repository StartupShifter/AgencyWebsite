"use client";

import { PortalShell } from "@/components/onboarding/portal-shell";

import { LoadingRegion, SkeletonBlock } from "./loading";
import { useI18n } from "@/context/i18n-context";

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
  const { content } = useI18n();
  return (
    <LoadingRegion label={content.common.loading.projectBrief} className="ob-guided ob-focused">
      <div className="ob-journey-top">
        <div className="space-y-2">
          <SkeletonBlock className="h-5 w-56 max-w-full" />
          <SkeletonBlock className="h-3 w-36" />
        </div>
        <SkeletonBlock className="h-10 w-32 rounded-full" />
      </div>

      <div className="ob-question-layout">
      <aside className="ob-progress-rail" aria-hidden="true">
        <SkeletonBlock className="h-4 w-36" />
        <SkeletonBlock className="mt-4 h-2 w-full rounded-full" />
        <SkeletonBlock className="mt-3 h-3 w-48 max-w-full" />
        <div className="ob-rail-navigation">
          {Array.from({ length: 7 }, (_, index) => <SkeletonBlock key={index} className="mb-2 h-12 w-full rounded-lg" />)}
        </div>
      </aside>
      <div className="ob-question-area">
        <SkeletonBlock className="h-4 w-44" />
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
      </div>
    </LoadingRegion>
  );
}

export function OnboardingSkeleton({ preview = false }: { preview?: boolean }) {
  return (
    <PortalShell focused preview={preview}>
      <OnboardingSkeletonContent />
    </PortalShell>
  );
}
