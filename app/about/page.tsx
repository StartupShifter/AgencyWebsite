import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Globe2,
  Megaphone,
  Network,
  type LucideIcon,
} from "lucide-react";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { Button } from "@/components/ui/button";
import { MarkedTitle } from "@/components/landing/resource-page";
import { twLanding } from "@/lib/landing-styles";
import { getLocalizedContent } from "@/lib/i18n-server";
import "./about.css";

export async function generateMetadata(): Promise<Metadata> {
  const { content } = await getLocalizedContent();
  return content.metadata.about;
}

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
};

const serviceIcons: Record<string, LucideIcon> = {
  globe: Globe2,
  megaphone: Megaphone,
  network: Network,
};

export default async function AboutPage() {
  const { content } = await getLocalizedContent();
  const page = content.pages.about;
  const services: Service[] = content.pages.about.services.map((service) => ({
    ...service,
    icon: serviceIcons[service.icon] ?? Globe2,
  }));

  const steps = content.pages.about.steps;
  const scope = content.pages.about.scope;
  const facts = content.pages.about.facts;
  return (
    <div id="top" className="aboutPage">
      <a className={twLanding("skip-link")} href="#main">
        {content.common.skipToContent}
      </a>
      <SiteHeader />
      <main id="main">
        <section
          aria-labelledby="about-page-heading"
          className={`${twLanding("section-shell")} aboutHero`}
        >
          <div className="aboutHero-top">
            <p className="aboutEyebrow">{page.eyebrow}</p>
            <p className="aboutHero-note">{page.note}</p>
          </div>

          <h1 id="about-page-heading">
            <MarkedTitle
              lines={page.titleLines}
              mark={page.titleMark}
              markClass="aboutHero-mark"
            />
          </h1>

          <div className="aboutHero-bottom">
            <p className="aboutHero-lede">{page.lede}</p>
            <div className="aboutHero-actions">
              <Button
                variant="emerald"
                size="marketing"
                nativeButton={false}
                render={<Link href="/#contact" />}
              >
                {page.primaryCta}{" "}
                <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
              </Button>
              <Button
                variant="outline"
                size="marketing"
                nativeButton={false}
                render={<Link href="/#pricing" />}
              >
                {page.secondaryCta}
              </Button>
            </div>
          </div>

          <dl className="aboutFacts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          aria-labelledby="about-statement-heading"
          className="aboutStatement"
        >
          <div className="aboutStatement-inner">
            <p className="aboutEyebrow">{page.statementEyebrow}</p>
            <h2 id="about-statement-heading">
              {page.statementTitle}
            </h2>
            <div className="aboutStatement-columns">
              {page.statementParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="about-services-heading"
          className={`${twLanding("section-shell section-space")} aboutWork`}
        >
          <div className="aboutWork-head">
            <div>
              <p className="aboutSectionLabel">
                <span aria-hidden="true">01</span> {page.workLabel}
              </p>
              <h2 id="about-services-heading">
                {page.workTitleLines[0]}
                <br />
                {page.workTitleLines[1]}
              </h2>
            </div>
            <div className="aboutWork-aside">
              <p>{page.workAside}</p>
              <Link href="/#services" className="aboutTextLink">
                {page.workLink} <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="aboutWork-list">
            {services.map(({ icon: Icon, title, description, tags }, index) => (
              <article key={title} className="aboutWork-row">
                <span className="aboutWork-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="aboutWork-body">
                  <div className="aboutWork-titleRow">
                    <h3>{title}</h3>
                    <span className="aboutWork-icon" aria-hidden="true">
                      <Icon />
                    </span>
                  </div>
                  <p>{description}</p>
                  <ul className="aboutWork-tags" aria-label={`${title} scope`}>
                    {tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="about-process-heading"
          className="aboutProcess"
        >
          <div className="aboutProcess-inner">
            <div className="aboutProcess-head">
              <p className="aboutSectionLabel aboutSectionLabel--inverse">
                <span aria-hidden="true">02</span> {page.processLabel}
              </p>
              <h2 id="about-process-heading">
                {page.processTitleLines[0]}
                <br />
                {page.processTitleLines[1]}
              </h2>
              <p className="aboutProcess-intro">
                {page.processIntro}
              </p>

              <div className="aboutProcess-gate">
                <p>{page.gateLabel}</p>
                <ul>
                  {page.gateItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <ol className="aboutProcess-steps">
              {steps.map((step, index) => (
                <li key={step.title} className="aboutProcess-step">
                  <span className="aboutProcess-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          aria-labelledby="about-scope-heading"
          className={`${twLanding("section-shell section-space")} aboutScope`}
        >
          <div className="aboutScope-head">
            <div>
              <p className="aboutSectionLabel">
                <span aria-hidden="true">03</span> {page.scopeLabel}
              </p>
              <h2 id="about-scope-heading">
                {page.scopeTitleLines[0]}
                <br />
                {page.scopeTitleLines[1]}
              </h2>
            </div>
            <p className="aboutScope-intro">
              {page.scopeIntro}
            </p>
          </div>

          <div className="aboutScope-grid">
            {scope.map((item, index) => (
              <article key={item.label} className="aboutScope-item">
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.label}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="aboutScope-footer">
            <Button
              variant="emerald"
              size="marketing"
              nativeButton={false}
              render={<Link href="/#pricing" />}
            >
              {page.scopeCta}{" "}
              <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
            </Button>
            <p>
              {page.scopeFooter}
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
