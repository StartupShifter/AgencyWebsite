import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Database,
  Gauge,
  LifeBuoy,
  MessagesSquare,
  RefreshCcw,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  MarkedTitle,
  ResourceBand,
  ResourcePage,
  ResourceSection,
} from "@/components/landing/resource-page";
import { getLocalizedContent } from "@/lib/i18n-server";

export async function generateMetadata(): Promise<Metadata> {
  const { content } = await getLocalizedContent();
  return content.metadata.support;
}

const coverageIcons: Record<string, LucideIcon> = {
  wrench: Wrench,
  checkCircle: CheckCircle2,
  gauge: Gauge,
  database: Database,
  refresh: RefreshCcw,
  messagesSquare: MessagesSquare,
};

export default async function SupportPage() {
  const { content } = await getLocalizedContent();
  const page = content.pages.support;
  const coverage = content.pages.support.coverage.map((item) => ({
    ...item,
    icon: coverageIcons[item.icon] ?? Wrench,
  }));
  return (
    <ResourcePage
      eyebrow={page.eyebrow}
      note={page.note}
      title={<MarkedTitle lines={page.titleLines} mark={page.titleMark} />}
      description={page.description}
      facts={page.facts}
      actions={
        <>
          <Button
            variant="emerald"
            size="marketing"
            nativeButton={false}
            render={<Link href="#contact" />}
          >
            {page.actionCta}{" "}
            <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
          </Button>
          <Button
            variant="outline"
            size="marketing"
            nativeButton={false}
            render={<Link href="/login" />}
          >
            {page.actionSecondary}
          </Button>
        </>
      }
    >
      <ResourceSection
        id="ways-to-work"
        index="01"
        label={page.waysLabel}
        title={<MarkedTitle lines={page.waysTitleLines} />}
        intro={page.waysIntro}
      >
        <div className="resourceGrid resourceGrid--2">
          {page.plans.map((plan, index) => (
            <article key={plan.name} className="resourceCard">
              <p className="resourceSectionLabel">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {plan.name}
              </p>
              <p className="resourcePrice">{plan.price}</p>
              <p>{plan.description}</p>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="resourceCard-tag">
                {plan.payment}
              </p>
            </article>
          ))}
        </div>
        <p className="resourceFootNote">
          {page.waysFootNote}
        </p>
      </ResourceSection>

      <ResourceSection
        id="what-support-covers"
        index="02"
        label={page.coverageLabel}
        title={<MarkedTitle lines={page.coverageTitleLines} />}
        intro={page.coverageIntro}
      >
        <div className="resourceGrid resourceGrid--3">
          {coverage.map(({ icon: Icon, title, description }) => (
            <article key={title} className="resourceCard">
              <span className="resourceCard-icon" aria-hidden="true">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="resourceFootNote">
          {page.coverageFootNote}
        </p>
      </ResourceSection>

      <ResourceBand
        id="requesting-help"
        index="03"
        label={page.requestLabel}
        title={<MarkedTitle lines={page.requestTitleLines} />}
        intro={page.requestIntro}
      >
        <div className="resourceBandGrid">
          {page.requestSteps.map((step, index) => (
            <article key={step.title} className="resourceBandCard">
              <p className="resourceSectionLabel">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {page.requestStepLabel}
              </p>
              <h3 className="mt-3">{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
          <article className="resourceBandCard">
            <span className="resourceCard-icon" aria-hidden="true">
              <Clock />
            </span>
            <h3>{page.upFrontTitle}</h3>
            <p>
              {page.upFrontDescription}
            </p>
          </article>
        </div>
        <p className="resourceBandNote">
          <LifeBuoy aria-hidden="true" />
          <span>
            {page.requestNote}
          </span>
        </p>
      </ResourceBand>

      <ResourceSection
        id="support-boundaries"
        index="04"
        label={page.boundariesLabel}
        title={<MarkedTitle lines={page.boundariesTitleLines} />}
        intro={page.boundariesIntro}
      >
        <div className="resourceGrid resourceGrid--3">
          {page.boundaries.map(({ title, description }, index) => (
            <article key={title} className="resourceCard resourceCard--plain">
              <p className="resourceSectionLabel">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {page.separateLabel}
              </p>
              <h3 className="mt-3">{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="resourceFootNote">
          <ShieldCheck
            aria-hidden="true"
            className="mr-1.5 inline size-4 align-[-2px]"
          />
          {page.boundariesFootNoteBefore}
          <Link href="/how-we-work" className="underline underline-offset-4">
            {page.boundariesLinkOneLabel}
          </Link>{" "}
          {page.boundariesFootNoteMiddle}
          <Link href="/faq#faq-after-launch" className="underline underline-offset-4">
            {page.boundariesLinkTwoLabel}
          </Link>
          {page.boundariesFootNoteAfter}
        </p>
      </ResourceSection>
    </ResourcePage>
  );
}
