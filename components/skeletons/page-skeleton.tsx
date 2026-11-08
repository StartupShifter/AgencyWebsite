import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { twLanding } from "@/lib/landing-styles";

import { LoadingRegion, SkeletonBlock } from "./loading";

export function PageSkeleton({ label = "Loading page" }: { label?: string }) {
  return (
    <div id="top" className="min-h-svh">
      <a className={twLanding("skip-link")} href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main
        id="main"
        className={`${twLanding("section-shell")} py-16 sm:py-24`}
      >
        <LoadingRegion label={label}>
          <div className="max-w-4xl">
            <SkeletonBlock className="h-3 w-28" />
            <SkeletonBlock className="mt-5 h-12 w-full max-w-3xl sm:h-16" />
            <SkeletonBlock className="mt-3 h-12 w-4/5 max-w-2xl sm:h-16" />
            <SkeletonBlock className="mt-6 h-4 w-full max-w-2xl" />
            <SkeletonBlock className="mt-2 h-4 w-3/4 max-w-xl" />
            <div className="mt-8 flex flex-wrap gap-3">
              <SkeletonBlock className="h-12 w-40 rounded-full" />
              <SkeletonBlock className="h-12 w-36 rounded-full" />
            </div>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-3"
              >
                <SkeletonBlock className="aspect-[4/3] w-full rounded-xl" />
                <SkeletonBlock className="mt-4 h-4 w-3/4" />
                <SkeletonBlock className="mt-2 h-3 w-1/2" />
              </div>
            ))}
          </div>
        </LoadingRegion>
      </main>
      <SiteFooter />
    </div>
  );
}
