import type { CSSProperties } from "react";
import { ArrowDown, ChartNoAxesCombined, Globe, MessagesSquare, Network, ScanSearch } from "lucide-react";
import { twLanding } from "@/lib/landing-styles";
import "./process-section.css";

const steps = [
  {
    title: ["Research &", "direction"],
    description: "We get to know your business, study your market, and analyse the competition. Those insights shape the plan and an initial design direction for your review.",
    details: ["Business research", "Market analysis", "Competitor insights"],
    note: "Research depth and design deliverables are agreed for your project.",
    icon: ScanSearch,
    phase: "Understand",
    tone: "research",
  },
  {
    title: ["Your business,", "built online"],
    description: "We design and build your website or web application on Shopify or WordPress, with WooCommerce when you need a store. The platform and features follow how your business works.",
    details: ["Shopify or WordPress", "Design & development", "Launch & handover"],
    note: "You supply business content, product details, account access, and approvals.",
    icon: Globe,
    phase: "Build",
    tone: "build",
  },
  {
    title: ["A social", "presence"],
    description: "We set up your business pages on the agreed social channels and create a consistent presence. The focus is bringing your company online and making it easier to find and understand.",
    details: ["Page setup", "Brand consistency", "Content direction"],
    note: "Lead generation and lead volumes are not guaranteed. Ongoing management is scoped separately.",
    icon: MessagesSquare,
    phase: "Establish",
    tone: "social",
  },
  {
    title: ["AI that helps", "you respond"],
    description: "We set up chatbots for common customer questions and support workflows, connected to your social channels where supported. Conversations that need your team are handed over to a person.",
    details: ["Customer chatbots", "Supported social channels", "Human handoff"],
    note: "Channel access, approved FAQs, and software usage limits shape the setup.",
    icon: Network,
    phase: "Automate",
    tone: "automation",
  },
  {
    title: ["Connected.", "Cared for."],
    description: "We maintain and improve the agreed systems, and connect supported business tools: ERP for operations and CRM for customer relationships. Shipping and invoice workflows can be part of those integrations.",
    details: ["Maintenance & performance", "ERP & CRM connections", "Shipping & invoicing"],
    note: "Integrations depend on third-party capabilities. Ongoing care is billed monthly; third-party charges are separate.",
    icon: ChartNoAxesCombined,
    phase: "Connect & maintain",
    tone: "care",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className={twLanding("section-shell section-space")}
      aria-labelledby="process-heading"
    >
      <div className={twLanding("section-topline")}>
        <div>
          <p className={twLanding("section-kicker")}>How we bring you online</p>
          <h2 id="process-heading" className={twLanding("section-heading")}>
            From understanding your business<br />to connecting it online.
          </h2>
        </div>
        <div className="process-intro">
          <p className={twLanding("section-intro")}>
            Five stages of a connected digital presence. We agree which services
            your project needs, then build around that scope.
          </p>
          <p className="process-scrollHint">Scroll through the process <ArrowDown aria-hidden="true" /></p>
        </div>
      </div>
      <ol className="process-stack">
        {steps.map(({ title, description, details, note, icon: Icon, phase, tone }, index) => (
          <li
            key={tone}
            className="process-step"
            style={{ "--step-index": index } as CSSProperties}
          >
            <article className={`process-card process-${tone}`} aria-labelledby={`process-step-${index}`}>
              <div className="process-cardTop">
                <span className="process-number" aria-hidden="true">0{index + 1}<span> / 05</span></span>
                <span className="process-phase">{phase}</span>
              </div>
              <div className="process-cardHeading">
                <h3 id={`process-step-${index}`}>
                  <span>{title[0]}</span>{" "}<span>{title[1]}</span>
                </h3>
                <span className="process-icon" aria-hidden="true"><Icon strokeWidth={1.25} /></span>
              </div>
              <div className="process-cardBottom">
                <p className="process-description">{description}</p>
                <div className="process-deliverables">
                  <ul>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  <p className="process-note">{note}</p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
      <p className="process-onboarding">
        Before we begin: an agreed scope, signed contract, 40% advance, and your
        company details. Then we bring you into your onboarding group.
      </p>
    </section>
  );
}
