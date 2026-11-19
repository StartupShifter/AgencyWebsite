import { ArrowUpRight, Check, Globe2, Handshake, type LucideIcon } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { twLanding } from "@/lib/landing-styles";
import { cn } from "@/lib/utils";
import { getLocalizedContent } from "@/lib/i18n-server";
import "./pricing-section.css";

type Plan = {
  id: string;
  name: string;
  description: string;
  price: string;
  payment: string;
  billing: string;
  monthly?: string;
  monthlyPeriod?: string;
  includes: string;
  features: string[];
  boundary: string;
  action: string;
  icon: string;
};

const planIcons: Record<string, LucideIcon> = {
  globe: Globe2,
  handshake: Handshake,
};

export async function PricingSection() {
  const { content } = await getLocalizedContent();
  const pricing = content.landing.pricing;
  const plans = content.landing.pricing.plans as unknown as Plan[];
  return (
    <section
      id="pricing"
      className={twLanding("section-shell ss-pricing")}
      aria-labelledby="pricing-heading"
    >
      <header className="ss-pricing-heading">
        <p className="ss-pricing-label">{pricing.label}</p>
        <h2 id="pricing-heading" className={twLanding("section-heading")}>
          {pricing.title}
        </h2>
      </header>

      <div className="ss-pricing-content">
        <div className="ss-pricing-plans">
          {plans.map((plan) => {
            const Icon = planIcons[plan.icon] ?? Globe2;
            return (
              <article
                key={plan.id}
                className={cn("ss-pricing-card", `ss-pricing-card--${plan.id}`)}
                aria-labelledby={`pricing-${plan.id}`}
              >
                <div className="ss-pricing-card-top">
                  <span className="ss-pricing-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  {plan.id === "pro" && (
                    <span className="ss-pricing-badge">
                      {pricing.recommendedBadge}
                    </span>
                  )}
                </div>
                <h3 id={`pricing-${plan.id}`}>{plan.name}</h3>
                <p className="ss-pricing-description">{plan.description}</p>
                <div className="ss-pricing-price">
                  <p className="ss-pricing-price-value">{plan.price}</p>
                  {plan.monthly ? (
                    <p className="ss-pricing-price-recurring">
                      <span className="ss-pricing-price-plus">+ </span>
                      {plan.monthly}
                      {plan.monthlyPeriod && (
                        <span className="ss-pricing-price-period">{plan.monthlyPeriod}</span>
                      )}
                    </p>
                  ) : (
                    <span>{plan.payment}</span>
                  )}
                </div>
                <p className="ss-pricing-billing">
                  {plan.monthly ? `${plan.payment} · ${plan.billing}` : plan.billing}
                </p>
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
            );
          })}
        </div>

        <p className="ss-pricing-terms">
          {pricing.terms}
        </p>
        <Link
          href="/support"
          className="mx-auto mt-4 flex w-fit min-h-11 items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
        >
          {pricing.footerLink}{" "}
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  );
}
