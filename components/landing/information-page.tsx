import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { twLanding } from "@/lib/landing-styles";

export function InformationPage({ title, description, children, policy = false }: { title: string; description: string; children: ReactNode; policy?: boolean }) {
  return (
    <div id="top">
      <a className={twLanding("skip-link")} href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" className={`${twLanding("section-shell")} py-14 sm:py-24`}>
        <div className="max-w-3xl">
          <Link href="/" className="mb-10 inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft aria-hidden="true" className="size-4" />Back to home</Link>
          {policy && <p className="mb-4 text-sm text-[var(--commerce-green)]">Policy awaiting approval</p>}
          <h1 className="text-5xl font-medium leading-[1.05] tracking-[-0.055em] sm:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{description}</p>
          <div className="mt-12 space-y-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_p]:text-base [&_p]:leading-8 [&_p]:text-muted-foreground">{children}</div>
          <Link href="/#contact" className="mt-12 inline-flex min-h-12 items-center gap-3 rounded-full bg-[var(--commerce-green)] px-6 text-sm font-medium text-white hover:bg-[var(--commerce-deep)]">Prepare a project brief<ArrowUpRight aria-hidden="true" className="size-4" /></Link>
          {policy && <nav aria-label="Policy information" className="mt-10 flex flex-wrap gap-6 border-t border-border pt-6 text-sm text-muted-foreground"><Link className="inline-flex min-h-11 items-center underline-offset-4 hover:underline" href="/policies/privacy">Privacy</Link><Link className="inline-flex min-h-11 items-center underline-offset-4 hover:underline" href="/policies/cookies">Cookies</Link><Link className="inline-flex min-h-11 items-center underline-offset-4 hover:underline" href="/policies/terms">Service terms</Link></nav>}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
