import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { twLanding } from "@/lib/landing-styles";
import "./resource-page.css";

export type ResourceFact = {
  label: string;
  value: string;
};

type ResourcePageProps = {
  eyebrow: string;
  note?: string;
  title: ReactNode;
  description: string;
  facts?: ResourceFact[];
  actions?: ReactNode;
  closingTitle?: string;
  closingText?: string;
  closing?: boolean;
  children: ReactNode;
};

export function ResourcePage({
  eyebrow,
  note = "Starter Shifter · Resources",
  title,
  description,
  facts,
  actions,
  closingTitle = "Tell us what you’re building.",
  closingText = "A short brief is enough to start a conversation. We’ll confirm the selected scope, timing, and costs before any work begins.",
  closing = true,
  children,
}: ResourcePageProps) {
  return (
    <div id="top" className="resourcePage">
      <a className={twLanding("skip-link")} href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <section
          aria-labelledby="resource-page-heading"
          className={`${twLanding("section-shell")} resourceHero`}
        >
          <div className="resourceHero-top">
            <p className="resourceEyebrow">{eyebrow}</p>
            <p className="resourceHero-note">{note}</p>
          </div>

          <h1 id="resource-page-heading">{title}</h1>

          <div className="resourceHero-bottom">
            <p className="resourceHero-lede">{description}</p>
            <div className="resourceHero-actions">
              {actions ?? (
                <>
                  <Button
                    variant="emerald"
                    size="marketing"
                    nativeButton={false}
                    render={<Link href="/project-brief" />}
                  >
                    Start a project brief{" "}
                    <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
                  </Button>
                  <Button
                    variant="outline"
                    size="marketing"
                    nativeButton={false}
                    render={<Link href="/support" />}
                  >
                    Support &amp; care
                  </Button>
                </>
              )}
            </div>
          </div>

          {facts && facts.length > 0 && (
            <dl className="resourceFacts">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </section>

        {children}

        {closing && (
          <section className="resourceClosing" aria-labelledby="resource-closing-heading">
            <div className="resourceClosing-inner">
              <div>
                <p className="resourceEyebrow">Your next step</p>
                <h2 id="resource-closing-heading">{closingTitle}</h2>
                <p>{closingText}</p>
              </div>
              <div className="resourceClosing-actions">
                <Button
                  variant="lime"
                  size="marketing"
                  nativeButton={false}
                  render={<Link href="/project-brief" />}
                >
                  Start a project brief{" "}
                  <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
                </Button>
                <Link href="/#pricing" className="resourceClosing-link">
                  Compare plans <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

type ResourceSectionProps = {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: string;
  className?: string;
  children: ReactNode;
};

export function ResourceSection({
  id,
  index,
  label,
  title,
  intro,
  className,
  children,
}: ResourceSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`${twLanding("section-shell")} resourceSection ${className ?? ""}`}
    >
      <div
        className={`resourceSection-head${intro ? "" : " resourceSection-head--solo"}`}
      >
        <div>
          <p className="resourceSectionLabel">
            <span>{index}</span>
            {label}
          </p>
          <h2 id={`${id}-heading`}>{title}</h2>
        </div>
        {intro && <p className="resourceSection-intro">{intro}</p>}
      </div>
      {children}
    </section>
  );
}

type ResourceBandProps = {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
};

export function ResourceBand({
  id,
  index,
  label,
  title,
  intro,
  children,
}: ResourceBandProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="resourceBand">
      <div className="resourceBand-inner">
        <div className={`resourceBand-head${intro ? "" : " resourceBand-head--solo"}`}>
          <div>
            <p className="resourceSectionLabel">
              <span>{index}</span>
              {label}
            </p>
            <h2 id={`${id}-heading`}>{title}</h2>
          </div>
          {intro && <p className="resourceBand-intro">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
