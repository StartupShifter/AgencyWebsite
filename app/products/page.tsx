import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { ProjectPreview } from "@/components/projects/project-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { hasConceptPreviews, projects } from "@/lib/projects";
import { twLanding } from "@/lib/landing-styles";

export const metadata: Metadata = {
  title: "Projects & Products — Starter Shifter",
  description: "Explore Starter Shifter’s collection of websites, applications, and connected experiences. Concept previews are labeled separately from completed work.",
};

export default function ProductsPage() {
  return (
    <div id="top">
      <a className={twLanding("skip-link")} href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" className={twLanding("section-shell")}>
        <div className="pb-12 pt-10 sm:pb-16 sm:pt-16">
          <Link href="/#projects" className="mb-10 inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft aria-hidden="true" className="size-4" /> Back to the showcase
          </Link>
          <h1 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.055em] sm:text-7xl">Projects & products.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">Explore the full collection of websites, applications, and connected experiences.</p>
          {hasConceptPreviews && <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">The collection currently shows design concepts. These are illustrative previews; completed project details and screenshots are coming soon.</p>}
        </div>
        <div className="grid gap-x-9 gap-y-14 pb-20 md:grid-cols-2 sm:pb-28">
          {projects.map((project) => (
            <article key={project.id} id={project.id} className="scroll-mt-32">
              <div className="rounded-2xl bg-muted/50 p-3 sm:p-5"><ProjectPreview project={project} /></div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-muted-foreground">{project.category}</p>
                <Badge variant="secondary">{project.status}</Badge>
              </div>
              <h2 className="mt-3 text-2xl font-medium tracking-tight">{project.title}</h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground">{project.description}</p>
              {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium underline-offset-4 hover:underline">Visit project <ArrowUpRight aria-hidden="true" className="size-4" /></a>}
            </article>
          ))}
        </div>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-t border-border py-10 sm:flex-row sm:items-center">
          <div><h2 className="text-2xl font-medium tracking-tight">What are you building next?</h2><p className="mt-2 text-sm text-muted-foreground">Let’s find the right scope for your business.</p></div>
          <Button variant="emerald" size="marketing" nativeButton={false} render={<Link href="/#contact" />}>Start a project <ArrowUpRight aria-hidden="true" data-icon="inline-end" /></Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
