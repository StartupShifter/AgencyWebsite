import { ArrowUpRight, Box, Check, Phone, Sparkles } from "lucide-react";

import { twLanding } from "@/lib/landing-styles";
import "./pricing-section.css";

const plans = [
  {
    id: "basic",
    name: "Basic plan",
    description: "Everything you need to bring your business online.",
    price: "$1,000",
    payment: "One-time payment",
    billing: "Your digital foundation, built and handed over.",
    includes: "What’s included",
    features: [
      "Business, market & competitor research",
      "Figma design & creative direction",
      "Website or ecommerce application development",
      "Social page setup & basic post templates",
      "AI chatbot & customer-support automation setup",
      "Inventory, shipping & invoice workflow setup",
      "Supported ERP & CRM integrations",
      "Launch, performance optimization & handover",
    ],
    boundary:
      "You manage posting, ads, and lead generation after handover. Ongoing maintenance is separate.",
    action: "Get Basic plan",
    icon: Box,
  },
  {
    id: "pro",
    name: "Pro plan",
    description: "Your digital foundation, with a team to help it grow.",
    price: "$2,000",
    payment: "One-time setup",
    billing: "+ $500 / month for ongoing maintenance & support",
    includes: "Everything in Basic, plus",
    features: [
      "Ongoing maintenance & technical support",
      "Lead generation & campaign management",
      "Business growth strategy & planning",
      "Social media content & campaign management",
      "Customer enquiries & client handling",
      "Chatbot & automation management",
      "Performance monitoring & improvements",
      "Ongoing workflow & integration upkeep",
    ],
    boundary:
      "We manage the agreed growth and support work. Advertising spend is separate; lead volumes aren’t guaranteed.",
    action: "Get Pro plan",
    icon: Sparkles,
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className={twLanding("section-shell ss-pricing")}
      aria-labelledby="pricing-heading"
    >
      <header className="ss-pricing-heading">
        <p className="ss-pricing-eyebrow">
          <span aria-hidden="true" /> Pricing
        </p>
        <h2 id="pricing-heading">Built for growth at every stage</h2>
        <p>
          Bring your business online, or let us help you grow it. Choose the
          support you need.
        </p>
      </header>

      <div className="ss-pricing-content">
        <p className="ss-pricing-caption">
          One-time setup. Ongoing support with Pro.
        </p>
        <div className="ss-pricing-plans">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`ss-pricing-card ss-pricing-card--${plan.id}`}
              aria-labelledby={`pricing-${plan.id}`}
            >
              <div className="ss-pricing-card-top">
                <span className="ss-pricing-icon" aria-hidden="true">
                  <plan.icon />
                </span>
                {plan.id === "pro" && (
                  <span className="ss-pricing-badge">
                    <Sparkles aria-hidden="true" /> Ongoing growth
                  </span>
                )}
              </div>
              <h3 id={`pricing-${plan.id}`}>{plan.name}</h3>
              <p className="ss-pricing-description">{plan.description}</p>
              <div className="ss-pricing-price">
                <p>{plan.price}</p>
                <span>{plan.payment}</span>
              </div>
              <p className="ss-pricing-billing">{plan.billing}</p>
              <div className="ss-pricing-inclusions">
                <h4>{plan.includes}</h4>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="ss-pricing-boundary">{plan.boundary}</p>
              <a href="#contact" className="ss-pricing-button">
                {plan.action}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <aside className="ss-pricing-consultation" aria-labelledby="pricing-help">
          <div className="ss-pricing-help-icons" aria-hidden="true">
            <span>
              <ArrowUpRight />
            </span>
            <span>
              <Phone />
            </span>
          </div>
          <h3 id="pricing-help">Not sure which plan is right for you?</h3>
          <p>Tell us about your business. We’ll help you find the right fit.</p>
          <a href="#contact" className="ss-pricing-button ss-pricing-help-button">
            Let’s talk about your project
            <ArrowUpRight aria-hidden="true" />
          </a>
        </aside>

        <p className="ss-pricing-terms">
          Deliverables, quantities, supported tools, and monthly coverage are
          agreed before work begins. You provide business content, account
          access, and approvals. Hosting, domains, software, licenses, usage
          fees, ad spend, and payment or shipping charges are separate.
        </p>
      </div>
    </section>
  );
}
