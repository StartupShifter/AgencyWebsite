import type { Metadata } from "next";
import {
  Building2,
  ClipboardCheck,
  Code2,
  CreditCard,
  FileSignature,
  LifeBuoy,
  ShieldCheck,
} from "lucide-react";
import {
  ResourceBand,
  ResourcePage,
  ResourceSection,
} from "@/components/landing/resource-page";

export const metadata: Metadata = {
  title: "How we work — Starter Shifter",
  description:
    "The delivery stages Starter Shifter uses from discovery and scope through design, build, launch, and ongoing support, including onboarding requirements and the first research handoff.",
};

const prerequisites = [
  {
    icon: FileSignature,
    title: "A signed shared contract",
    description:
      "The contract records the agreed scope, responsibilities, and commercial terms. Work begins only after it is signed.",
  },
  {
    icon: CreditCard,
    title: "A 40% advance",
    description:
      "The advance confirms the engagement and lets us reserve delivery time. Remaining payment terms are set out in your contract.",
  },
  {
    icon: Building2,
    title: "Company & project details",
    description:
      "We need enough context about your business, goals, and existing setup to begin research and onboarding.",
  },
];

const stages = [
  {
    title: "Discovery & qualification",
    description:
      "We discuss your goals, current systems, constraints, and what success would look like. The aim is to understand the problem before proposing a build.",
    bring: "Goals, existing setup, decision-makers",
    output: "A discovery summary or a recommended next step",
  },
  {
    title: "Scope & proposal",
    description:
      "We define the deliverables, exclusions, platform approach, pricing, timeline, and responsibilities in a written proposal.",
    bring: "Access to system details and timely feasibility answers",
    output: "A proposal you can review and approve",
  },
  {
    title: "Agreement & onboarding",
    description:
      "Once the contract is signed, the advance is received, and your project details are complete, onboarding begins and we start the agreed work.",
    bring: "Signed contract, 40% advance, company details",
    output: "An active project and a shared starting point",
  },
  {
    title: "Initial research & Figma draft",
    description:
      "We present company, market, and competitor research alongside a basic Figma design draft with variants for you to review.",
    bring: "Feedback on the direction and any agreed revisions",
    output: "A selected design direction to take into implementation",
  },
  {
    title: "Design & implementation",
    description:
      "We build the agreed website, application, campaigns, or integrations. Platform capabilities and third-party response times shape what is possible.",
    bring: "Content, product data, account access, approvals",
    output: "The agreed work, built and ready for review",
  },
  {
    title: "Testing & client review",
    description:
      "We check the agreed functionality and document issues. You test the business flows that matter and confirm acceptance or a bounded revision list.",
    bring: "Test accounts, representative data, feedback",
    output: "A tested build and a clear list of remaining items",
  },
  {
    title: "Launch & handover",
    description:
      "We deploy or activate the approved work and transfer the agreed documentation, access, and training.",
    bring: "Launch approval and readiness of domains and accounts",
    output: "Live work and an agreed handover",
  },
  {
    title: "Ongoing support & improvement",
    description:
      "If you have purchased ongoing coverage, we maintain, manage, report on, or improve the agreed systems. Basic does not include ongoing management.",
    bring: "Contacts, decisions, and recurring inputs",
    output: "The ongoing work defined in your support scope",
  },
];

const workingTogether = [
  {
    icon: ClipboardCheck,
    title: "What you provide",
    items: [
      "Business content, product data, and brand assets",
      "Account access and technical contacts",
      "Policies, tax rules, shipping details, and approvals",
      "A decision-maker for reviews and sign-off",
    ],
  },
  {
    icon: Code2,
    title: "What we manage",
    items: [
      "The agreed research, design, and implementation",
      "Supported integrations and testing",
      "Launch, documentation, and handover",
      "Any separately purchased ongoing work",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Kept separate",
    items: [
      "Hosting, domains, themes, apps, and licenses",
      "ERP, CRM, chatbot, and other software subscriptions",
      "Payment processing, usage, and shipping charges",
      "Advertising spend and third-party asset licensing",
    ],
  },
];

export default function HowWeWorkPage() {
  return (
    <ResourcePage
      eyebrow="Resources / How we work"
      note="Delivery, explained plainly"
      title={
        <>
          A clear path from first conversation to <span className="resourceHero-mark">ongoing care.</span>
        </>
      }
      description="Every project is different, but the way we move through it is not. These are the stages we use to understand your business, agree the scope, build the work, and support what comes next."
      facts={[
        { label: "Starting point", value: "Contract, 40% advance & details" },
        { label: "First handoff", value: "Research & Figma direction" },
        { label: "Ways to work", value: "Basic setup or Pro support" },
      ]}
    >
      <ResourceSection
        id="before-we-begin"
        index="01"
        label="The starting point"
        title={
          <>
            Onboarding starts when
            <br />
            the foundations are clear.
          </>
        }
        intro="Onboarding follows three prerequisites. They protect both sides: the scope is understood, the commitment is real, and we have enough context to begin useful work."
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
          Before payment, your proposal sets out the selected services,
          deliverables, exclusions, timeline, responsibilities, and costs.
          Further work needs an explicit decision on scope, price, and timeline.
        </p>
      </ResourceSection>

      <ResourceSection
        id="delivery-stages"
        index="02"
        label="The delivery path"
        title={
          <>
            Eight stages, shaped around
            <br />
            the work you actually need.
          </>
        }
        intro="These stages describe how we operate. Your proposal confirms which ones apply, what is included, and what completion looks like for your project."
      >
        <ol className="resourceSteps">
          {stages.map((stage, index) => (
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
                  <dt>You bring</dt>
                  <dd>{stage.bring}</dd>
                </div>
                <div>
                  <dt>Output</dt>
                  <dd>{stage.output}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
        <p className="resourceFootNote">
          Defect correction, maintenance, and new feature development are
          different categories of work. Each is handled under the scope that
          applies to it, rather than assumed to be included.
        </p>
      </ResourceSection>

      <ResourceBand
        id="first-handoff"
        index="03"
        label="The first handoff"
        title={
          <>
            A shared direction,
            <br />
            before we build.
          </>
        }
        intro="The early handoff is intended to give you something concrete to react to: research that informs the plan and a design draft with options."
      >
        <div className="resourceBandGrid">
          <article className="resourceBandCard">
            <h3>Company, market & competitor research</h3>
            <p>
              We study your business, the segment you operate in, and the
              alternatives your customers may consider. The findings shape the
              plan and the design direction.
            </p>
          </article>
          <article className="resourceBandCard">
            <h3>A basic Figma design draft</h3>
            <p>
              The draft presents variants for your review, so you can choose a
              direction and give focused feedback before implementation.
            </p>
          </article>
          <article className="resourceBandCard">
            <h3>A decision point, not a finished build</h3>
            <p>
              You select a direction and request the agreed revisions. The
              implementation that follows is a separate stage with its own
              review and approval points.
            </p>
          </article>
          <article className="resourceBandCard">
            <h3>What it does not promise</h3>
            <p>
              This handoff is not the completed website, all assets, or all
              integrations. Research depth and design scope match the time and
              information available.
            </p>
          </article>
        </div>
        <p className="resourceBandNote">
          <LifeBuoy aria-hidden="true" />
          <span>
            The stated intention is an early handoff around 24 hours after the
            signed contract, 40% advance, and complete company/project details.
            The precise deadline, clock start, research depth, variant count,
            and revision allowance are confirmed in your proposal.
          </span>
        </p>
      </ResourceBand>

      <ResourceSection
        id="working-together"
        index="04"
        label="Working together"
        title={
          <>
            Clear responsibilities.
            <br />
            Fewer surprises.
          </>
        }
        intro="A good engagement is not only about what we build. It is also about who supplies what, who approves it, and which costs sit outside the agency fee."
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
          Deliverables, quantities, supported tools, revision limits, and
          support capacity are agreed before work begins. See{" "}
          <a href="/support" className="underline underline-offset-4">
            Support &amp; care
          </a>{" "}
          for how ongoing coverage is handled.
        </p>
      </ResourceSection>
    </ResourcePage>
  );
}
