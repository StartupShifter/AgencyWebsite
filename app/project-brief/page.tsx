import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Boxes,
  Building2,
  CalendarClock,
  Check,
  FileText,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectBriefForm } from "@/components/forms/project-brief-form";
import {
  ResourcePage,
  ResourceSection,
} from "@/components/landing/resource-page";

export const metadata: Metadata = {
  title: "Project brief — Starter Shifter",
  description:
    "Tell Starter Shifter what you’re building. Share your business, goals, current setup, and timing to start a useful first conversation.",
};

const briefParts = [
  {
    icon: Building2,
    title: "The business",
    description:
      "What you sell, who you serve, and where you operate. A sentence or two is enough to anchor the rest.",
  },
  {
    icon: Target,
    title: "The problem",
    description:
      "What isn’t working today, or what you want to make possible. Describe the outcome in business terms, not technical ones.",
  },
  {
    icon: Boxes,
    title: "What’s in place",
    description:
      "Your current website, store, social pages, tools, and systems. Mention what you want to keep and what you want to replace.",
  },
  {
    icon: CalendarClock,
    title: "Constraints & timing",
    description:
      "Launch dates, budget boundaries, approvals, or platform requirements. If something is fixed, say so early.",
  },
];

const checklist = [
  "The business problem you want to solve",
  "What already exists and what you want to change",
  "Any fixed dates, platforms, or approvals",
  "Who will review and approve the work",
];

const nextSteps = [
  {
    title: "We read for fit",
    description:
      "We look at your goals, current setup, and the kind of help you need. If something is unclear, we’ll ask before proposing anything.",
  },
  {
    title: "A short conversation",
    description:
      "We discuss the problem, the likely shape of the work, and the constraints. No pressure to choose a plan before we understand the need.",
  },
  {
    title: "Scope & proposal",
    description:
      "If it’s a fit, you receive a written proposal with deliverables, exclusions, pricing, timeline, and responsibilities. Nothing starts until it’s agreed.",
  },
];

export default function ProjectBriefPage() {
  return (
    <ResourcePage
      eyebrow="Resources / Project brief"
      note="A useful first step"
      title={
        <>
          Tell us what
          <br />
          you’re <span className="resourceHero-mark">building.</span>
        </>
      }
      description="A short, honest brief is more useful than a perfect one. Share the business problem, what’s already in place, and the outcome you have in mind. We’ll take it from there."
      facts={[
        { label: "Time needed", value: "About 5 minutes" },
        { label: "You receive", value: "A considered next step" },
        { label: "Commitment", value: "None — this isn’t a contract" },
      ]}
      actions={
        <>
          <Button
            variant="emerald"
            size="marketing"
            nativeButton={false}
            render={<Link href="#start-brief" />}
          >
            Go to the brief form{" "}
            <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
          </Button>
          <Button
            variant="outline"
            size="marketing"
            nativeButton={false}
            render={<Link href="/how-we-work" />}
          >
            See how we work
          </Button>
        </>
      }
      closing={false}
    >
      <ResourceSection
        id="what-to-share"
        index="01"
        label="A useful brief"
        title={
          <>
            Four things worth
            <br />
            thinking through.
          </>
        }
        intro="You don’t need a finished plan or a technical specification. These four areas help us understand whether we can help and what the right next step might be."
      >
        <div className="resourceGrid resourceGrid--4">
          {briefParts.map(({ icon: Icon, title, description }) => (
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
          Basic and Pro are the public starting points. If your needs don’t fit
          either, a tailored scope can be discussed. Prices and inclusions are
          confirmed only after the scope is understood.
        </p>
      </ResourceSection>

      <ResourceSection
        id="start-brief"
        index="02"
        label="Start your brief"
        title={
          <>
            A few details
            <br />
            to begin.
          </>
        }
        intro="This form creates a text file on your device. It does not send your details to Starter Shifter or store them in a website database."
      >
        <div className="resourceBriefLayout">
          <aside className="resourceBriefAside">
            <p className="resourceSectionLabel">
              <span>Guide</span>
              Keep it practical
            </p>
            <h2>What helps us respond well.</h2>
            <p>
              Write in your own words. Specific examples are more useful than
              polished marketing copy, and it is fine to say that something is
              still undecided.
            </p>
            <ul className="resourceChecklist">
              {checklist.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          <div className="resourceBriefForm">
            <div className="resourceBriefForm-head">
              <h2>Project brief</h2>
              <p>
                Required fields are marked by your browser. You can review the
                generated file before sharing it.
              </p>
            </div>
            <ProjectBriefForm />
          </div>
        </div>
      </ResourceSection>

      <ResourceSection
        id="what-happens-next"
        index="03"
        label="What happens next"
        title={
          <>
            No obligation.
            <br />
            Just a clearer next step.
          </>
        }
        intro="A brief is a starting point for discussion. It does not create an agreement, reserve delivery time, or set a price."
      >
        <div className="resourceNextSteps">
          {nextSteps.map((step, index) => (
            <div key={step.title}>
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <p className="resourceFootNote">
          <FileText
            aria-hidden="true"
            className="mr-1.5 inline size-4 align-[-2px]"
          />
          Want to understand the delivery stages first? Read{" "}
          <Link href="/how-we-work" className="underline underline-offset-4">
            how we work
          </Link>{" "}
          or compare{" "}
          <Link href="/#pricing" className="underline underline-offset-4">
            Basic and Pro
          </Link>
          .
        </p>
      </ResourceSection>
    </ResourcePage>
  );
}
