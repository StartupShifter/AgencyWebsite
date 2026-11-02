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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ResourceBand,
  ResourcePage,
  ResourceSection,
} from "@/components/landing/resource-page";

export const metadata: Metadata = {
  title: "Support & care — Starter Shifter",
  description:
    "How Starter Shifter handles maintenance, support, and ongoing improvement after launch, including Basic and Pro coverage boundaries.",
};

const plans = [
  {
    name: "Basic",
    price: "$1,000",
    payment: "One-time setup",
    description:
      "A one-time digital foundation, built and handed over. Basic does not include ongoing management.",
    items: [
      "The agreed setup and launch",
      "Basic social post templates",
      "Handover of agreed access and documentation",
      "Ongoing support available as a separate scope",
    ],
  },
  {
    name: "Pro",
    price: "$2,000",
    payment: "Setup + $500 / month",
    description:
      "The Basic foundation plus ongoing maintenance, support, lead generation, client handling, and growth work.",
    items: [
      "Ongoing maintenance and technical support",
      "Performance monitoring and improvements",
      "Chatbot and workflow upkeep",
      "Lead generation, campaigns, and client handling",
    ],
  },
];

const coverage = [
  {
    icon: Wrench,
    title: "Maintenance & updates",
    description:
      "Routine checks, applicable updates, and compatibility checks for the agreed systems. The exact cadence is set in your support scope.",
  },
  {
    icon: CheckCircle2,
    title: "Bug fixes",
    description:
      "Correction of defects in the agreed build. A defect is different from a new feature or a change to the agreed scope.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Monitoring and agreed improvements to speed, reliability, or the workflows covered by your plan. Targets are project-specific.",
  },
  {
    icon: Database,
    title: "Integrations & data",
    description:
      "Upkeep of supported ERP, CRM, inventory, shipping, and invoice connections, including agreed monitoring and error handling.",
  },
  {
    icon: RefreshCcw,
    title: "Backup & recovery",
    description:
      "Backup and recovery tasks where agreed and supported by the platform. Responsibilities and recovery expectations are documented.",
  },
  {
    icon: MessagesSquare,
    title: "Support handling",
    description:
      "A clear route for questions and issues, with triage, agreed response targets, and escalation for the systems in scope.",
  },
];

const requestSteps = [
  {
    title: "Use the agreed channel",
    description:
      "Send the request through the support channel confirmed for your project, so it reaches the right place and can be tracked.",
  },
  {
    title: "Include the useful detail",
    description:
      "Describe what happened, where it happened, what you expected, and any steps to reproduce it. Screenshots or links help.",
  },
  {
    title: "We triage and respond",
    description:
      "We confirm whether it is a defect, maintenance, or new work, then agree the next step. Work outside the scope gets its own quote.",
  },
];

const boundaries = [
  {
    title: "New features & redesigns",
    description:
      "New functionality, structural changes, migrations, and redesigns are separate from routine maintenance. They need their own scope, price, and timeline.",
  },
  {
    title: "Third-party costs",
    description:
      "Hosting, domains, themes, apps, licenses, software subscriptions, usage charges, ad spend, and payment or shipping fees remain separate from agency fees.",
  },
  {
    title: "Work without a support scope",
    description:
      "Basic is a one-time setup. If you need ongoing care, we define a separate support scope. It is not assumed to be included.",
  },
];

export default function SupportPage() {
  return (
    <ResourcePage
      eyebrow="Resources / Support & care"
      note="Help after launch"
      title={
        <>
          Support that keeps
          <br />
          the work <span className="resourceHero-mark">working.</span>
        </>
      }
      description="Launch is a milestone, not the finish line. Here’s how ongoing care, maintenance, and improvement work after your project goes live — and what sits outside an agreed support scope."
      facts={[
        { label: "Basic", value: "One-time setup" },
        { label: "Pro", value: "$2,000 + $500/month" },
        { label: "Coverage", value: "Agreed per project" },
      ]}
      actions={
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
            render={<Link href="/login" />}
          >
            Sign in to your workspace
          </Button>
        </>
      }
      closingTitle="Need help with a live project?"
      closingText="If you already work with us, use the support channel agreed for your project. If you’re planning something new, start with a brief and we’ll confirm the right coverage."
    >
      <ResourceSection
        id="ways-to-work"
        index="01"
        label="After launch"
        title={
          <>
            Two ways to keep
            <br />
            things moving.
          </>
        }
        intro="Basic is a one-time build. Pro adds an ongoing relationship. Neither plan means unlimited work; the covered systems, capacity, and cadence are agreed in advance."
      >
        <div className="resourceGrid resourceGrid--2">
          {plans.map((plan, index) => (
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
          Pro’s monthly charge covers the agreed ongoing work. Advertising spend,
          third-party subscriptions, and usage charges are separate. Lead volumes
          and growth results are not guaranteed.
        </p>
      </ResourceSection>

      <ResourceSection
        id="what-support-covers"
        index="02"
        label="Coverage"
        title={
          <>
            The work behind
            <br />
            “keeping it running.”
          </>
        }
        intro="Support can mean different things depending on the systems involved. These are the areas we can cover when they are written into your support scope."
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
          The exact list depends on your platform mix, integrations, and
          purchased coverage. Maintenance, defect correction, and new feature
          development are handled as different categories of work.
        </p>
      </ResourceSection>

      <ResourceBand
        id="requesting-help"
        index="03"
        label="When something needs attention"
        title={
          <>
            A clear route
            <br />
            to a real answer.
          </>
        }
        intro="Support works best when the request is specific and reaches the agreed place. Here’s the shape of a useful request."
      >
        <div className="resourceBandGrid">
          {requestSteps.map((step, index) => (
            <article key={step.title} className="resourceBandCard">
              <p className="resourceSectionLabel">
                <span>{String(index + 1).padStart(2, "0")}</span>
                Request
              </p>
              <h3 className="mt-3">{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
          <article className="resourceBandCard">
            <span className="resourceCard-icon" aria-hidden="true">
              <Clock />
            </span>
            <h3>What we agree up front</h3>
            <p>
              Support hours, channels, capacity, response targets, and escalation
              are confirmed in your support scope. We don’t publish a universal
              24/7 or response-time promise.
            </p>
          </article>
        </div>
        <p className="resourceBandNote">
          <LifeBuoy aria-hidden="true" />
          <span>
            If you already work with us, use the support channel agreed for your
            project. If you are not sure which channel applies, ask your usual
            project contact before sending sensitive details.
          </span>
        </p>
      </ResourceBand>

      <ResourceSection
        id="support-boundaries"
        index="04"
        label="Boundaries"
        title={
          <>
            What sits outside
            <br />
            an agreed scope.
          </>
        }
        intro="Knowing what is not included is as useful as knowing what is. These items are quoted separately rather than absorbed into routine support."
      >
        <div className="resourceGrid resourceGrid--3">
          {boundaries.map(({ title, description }, index) => (
            <article key={title} className="resourceCard resourceCard--plain">
              <p className="resourceSectionLabel">
                <span>{String(index + 1).padStart(2, "0")}</span>
                Separate
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
          Deliverables, capacity, response targets, and covered systems are
          confirmed before work begins. See{" "}
          <Link href="/how-we-work" className="underline underline-offset-4">
            how we work
          </Link>{" "}
          or read the{" "}
          <Link href="/faq#faq-after-launch" className="underline underline-offset-4">
            support FAQs
          </Link>
          .
        </p>
      </ResourceSection>
    </ResourcePage>
  );
}
