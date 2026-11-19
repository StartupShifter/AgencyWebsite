import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { twLanding } from "@/lib/landing-styles";
import { getLocalizedContent } from "@/lib/i18n-server";
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
  children: ReactNode;
};

export async function ResourcePage({
  eyebrow,
  note,
  title,
  description,
  facts,
  actions,
  children,
}: ResourcePageProps) {
  const { content } = await getLocalizedContent();
  const resolvedNote = note ?? content.common.resourceNoteDefault;
  return (
    <div id="top" className="resourcePage">
      <a className={twLanding("skip-link")} href="#main">
        {content.common.skipToContent}
      </a>
      <SiteHeader />
      <main id="main">
        <section
          aria-labelledby="resource-page-heading"
          className={`${twLanding("section-shell")} resourceHero`}
        >
          <div className="resourceHero-top">
            <p className="resourceEyebrow">{eyebrow}</p>
            <p className="resourceHero-note">{resolvedNote}</p>
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
                    render={<Link href="#contact" />}
                  >
                    {content.common.planYourProject}{" "}
                    <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
                  </Button>
                  <Button
                    variant="outline"
                    size="marketing"
                    nativeButton={false}
                    render={<Link href="/support" />}
                  >
                    {content.common.supportAndCare}
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

/**
 * Renders a multi-line title where the trailing `mark` phrase is highlighted.
 * `mark` is highlighted when it ends the last line (e.g. "what we build.")
 * or is appended after a space (e.g. "Its next chapter" + "online.").
 */
export function MarkedTitle({
  lines,
  mark,
  markClass = "resourceHero-mark",
}: {
  lines: string[];
  mark?: string;
  markClass?: string;
}) {
  const last = lines.length - 1;
  return (
    <>
      {lines.map((line, index) => {
        let before = line;
        let marked = "";
        let appendSpace = false;
        if (index === last && mark) {
          if (line.endsWith(mark)) {
            before = line.slice(0, line.length - mark.length);
            marked = mark;
          } else {
            before = line;
            marked = mark;
            appendSpace = true;
          }
        }
        return (
          <span key={index}>
            {index > 0 && <br />}
            {before}
            {marked && (
              <>
                {appendSpace ? " " : null}
                <span className={markClass}>{marked}</span>
              </>
            )}
          </span>
        );
      })}
    </>
  );
}

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
