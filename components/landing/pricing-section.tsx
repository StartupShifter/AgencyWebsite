import { ArrowUpRight, Check, Globe2, Handshake } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { twLanding } from "@/lib/landing-styles";
import { cn } from "@/lib/utils";
import "./pricing-section.css";

const plans = [
  {
    id: "basic",
    name: "Basic plan",
    description: "The full build and digital marketing setup, delivered once.",
    price: "$2,500",
    payment: "One-time payment",
    billing: "Your application and marketing, built and handed over.",
    includes: "What’s included",
    features: [
      "Business, market & competitor research",
      "Figma design & creative direction",
      "Website or ecommerce application development",
      "SEO management",
      "Email marketing",
      "Social media marketing — WhatsApp, LinkedIn, Pinterest & more",
      "AI chatbot & customer-support automation setup",
      "Inventory, shipping & invoice workflow setup",
      "Supported ERP & CRM integrations",
      "Launch & handover",
    ],
    boundary:
      "One-time build and marketing setup. We don’t promise lead generation or run ongoing maintenance. You pay hosting, domains, ad spend, and payment fees.",
    action: "Get Basic plan",
    icon: Globe2,
  },
  {
    id: "pro",
    name: "Pro plan",
    description: "Everything in Basic, plus a team to maintain and grow it.",
    price: "$2,500",
    payment: "One-time setup",
    billing: "+ $500 / month for maintenance & lead generation",
    includes: "Everything in Basic, plus",
    features: [
      "Ongoing maintenance & technical support",
      "Performance enhancement & monitoring",
      "Lead generation & campaign management",
      "Keeping SEO & marketing current",
      "Business growth strategy & planning",
      "Customer enquiries & client handling",
      "Chatbot & automation management",
      "Ongoing workflow & integration upkeep",
    ],
    boundary:
      "We actively run lead generation and help your business grow. Lead volumes aren’t guaranteed — if an approach isn’t working, we restructure and test others. Advertising spend is separate.",
    action: "Get Pro plan",
    icon: Handshake,
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
        <p className="ss-pricing-label">Our plans</p>
        <h2 id="pricing-heading" className={twLanding("section-heading")}>
          Choose the support you need.
        </h2>
      </header>

      <div className="ss-pricing-content">
        <div className="ss-pricing-plans">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={cn("ss-pricing-card", `ss-pricing-card--${plan.id}`)}
              aria-labelledby={`pricing-${plan.id}`}
            >
              <div className="ss-pricing-card-top">
                <span className="ss-pricing-icon" aria-hidden="true">
                  <plan.icon />
                </span>
                {plan.id === "pro" && (
                  <span className="ss-pricing-badge">
                    Recommended
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
              <a
                href="#contact"
                className={cn(
                  buttonVariants({
                    variant: plan.id === "pro" ? "lime" : "default",
                    size: "marketing",
                  }),
                  "ss-pricing-button w-full",
                )}
              >
                {plan.action}
                <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
              </a>
            </article>
          ))}
        </div>

        <p className="ss-pricing-terms">
          Deliverables, quantities, supported tools, and monthly coverage are
          agreed before work begins. You provide business content, account
          access, and approvals. Hosting, domains, software, licenses, usage
          fees, ad spend, and payment or shipping charges are paid by you and
          are separate from agency fees. Additional services outside the three
          groups are quoted separately.
        </p>
        <Link
          href="/support"
          className="mx-auto mt-4 flex w-fit min-h-11 items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
        >
          See what ongoing support covers{" "}
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  );
}
