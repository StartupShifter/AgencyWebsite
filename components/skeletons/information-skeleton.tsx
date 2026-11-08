import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { twLanding } from "@/lib/landing-styles";

import { LoadingRegion, SkeletonBlock } from "./loading";

export function InformationSkeleton() {
  return (
    <div id="top">
      <a className={twLanding("skip-link")} href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main
        id="main"
        className={`${twLanding("section-shell")} py-14 sm:py-24`}
      >
        <LoadingRegion label="Loading your onboarding information">
          <div className="max-w-3xl">
            <SkeletonBlock className="mb-10 h-4 w-32" />
            <SkeletonBlock className="h-12 w-11/12 max-w-2xl sm:h-16" />
            <SkeletonBlock className="mt-3 h-12 w-3/5 max-w-xl sm:h-16" />
            <SkeletonBlock className="mt-6 h-4 w-full max-w-2xl" />
            <SkeletonBlock className="mt-2 h-4 w-4/5 max-w-xl" />

            <div className="mt-12 space-y-10">
              {Array.from({ length: 4 }, (_, section) => (
                <section key={section} className="space-y-3">
                  <SkeletonBlock className="h-6 w-64 max-w-full" />
                  <SkeletonBlock className="h-4 w-full" />
                  <SkeletonBlock className="h-4 w-11/12" />
                  <SkeletonBlock className="h-4 w-4/5" />
                </section>
              ))}
            </div>

            <SkeletonBlock className="mt-12 h-12 w-56 rounded-full" />
          </div>
        </LoadingRegion>
      </main>
      <SiteFooter />
    </div>
  );
}
