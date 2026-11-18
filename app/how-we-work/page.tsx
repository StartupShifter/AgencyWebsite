import type { Metadata } from "next";
import {
  Building2,
  ClipboardCheck,
  Code2,
  CreditCard,
  FileSignature,
  LifeBuoy,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import {
  MarkedTitle,
  ResourceBand,
  ResourcePage,
  ResourceSection,
} from "@/components/landing/resource-page";
import { content } from "@/context/content";

export const metadata: Metadata = content.metadata.howWeWork;

const prerequisiteIcons: Record<string, LucideIcon> = {
  fileSignature: FileSignature,
  creditCard: CreditCard,
  building: Building2,
};

const workingIcons: Record<string, LucideIcon> = {
  clipboardCheck: ClipboardCheck,
  code: Code2,
  shieldCheck: ShieldCheck,
};

const prerequisites = content.pages.howWeWork.prerequisites.map((item) => ({
  ...item,
  icon: prerequisiteIcons[item.icon] ?? FileSignature,
}));

const workingTogether = content.pages.howWeWork.workingTogether.map((item) => ({
  ...item,
  icon: workingIcons[item.icon] ?? ClipboardCheck,
}));

export default function HowWeWorkPage() {
  const page = content.pages.howWeWork;
  return (
    <ResourcePage
      eyebrow={page.eyebrow}
      note={page.note}
      title={<MarkedTitle lines={page.titleLines} mark={page.titleMark} />}
      description={page.description}
      facts={page.facts}
    >
      <ResourceSection
        id="before-we-begin"
        index="01"
        label={page.prerequisitesLabel}
        title={<MarkedTitle lines={page.prerequisitesTitleLines} />}
        intro={page.prerequisitesIntro}
      >
        <div className="resourceGrid resourceGrid--3">
          {prerequisites.map(({ icon: Icon, title, description }) => (
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
          {page.prerequisitesFootNote}
        </p>
      </ResourceSection>

      <ResourceSection
        id="delivery-stages"
        index="02"
        label={page.stagesLabel}
        title={<MarkedTitle lines={page.stagesTitleLines} />}
        intro={page.stagesIntro}
      >
        <ol className="resourceSteps">
          {page.stages.map((stage, index) => (
            <li key={stage.title} className="resourceStep">
              <span className="resourceStep-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="resourceStep-body">
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>
              <dl className="resourceStep-meta">
                <div>
                  <dt>{page.youBring}</dt>
                  <dd>{stage.bring}</dd>
                </div>
                <div>
                  <dt>{page.output}</dt>
                  <dd>{stage.output}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
        <p className="resourceFootNote">
          {page.stagesFootNote}
        </p>
      </ResourceSection>

      <ResourceBand
        id="first-handoff"
        index="03"
        label={page.handoffLabel}
        title={<MarkedTitle lines={page.handoffTitleLines} />}
        intro={page.handoffIntro}
      >
        <div className="resourceBandGrid">
          {page.handoffCards.map((card) => (
            <article key={card.title} className="resourceBandCard">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
        <p className="resourceBandNote">
          <LifeBuoy aria-hidden="true" />
          <span>
            {page.handoffNote}
          </span>
        </p>
      </ResourceBand>

      <ResourceSection
        id="working-together"
        index="04"
        label={page.workingLabel}
        title={<MarkedTitle lines={page.workingTitleLines} />}
        intro={page.workingIntro}
      >
        <div className="resourceGrid resourceGrid--3">
          {workingTogether.map(({ icon: Icon, title, items }) => (
            <article key={title} className="resourceCard resourceCard--plain">
              <span className="resourceCard-icon" aria-hidden="true">
                <Icon />
              </span>
              <h3>{title}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="resourceFootNote">
          {page.workingFootNoteBefore}
          <a href="/support" className="underline underline-offset-4">
            {page.workingFootNoteLink}
          </a>{" "}
          {page.workingFootNoteAfter}
        </p>
      </ResourceSection>
    </ResourcePage>
  );
}
