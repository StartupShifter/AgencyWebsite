import { ArrowUpRight, CirclePlus, Wrench } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-shell"
      aria-labelledby="pricing-heading"
    >
      <div className="pricing-panel">
        <div className="pricing-intro">
          <p className="pricing-eyebrow">Built around your business</p>
          <h2 id="pricing-heading" className="section-heading">
            Your priorities.
            <br />
            Your project.
          </h2>
          <p className="pricing-copy">
            A tailored, one-time engagement. Choose the services your business
            needs, and we’ll shape the scope and quote around them.
          </p>
          <a
            href="#contact"
            className={buttonVariants({ variant: "lime", size: "marketing" })}
          >
            Let’s scope your project
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </div>
        <div className="pricing-quote">
          <p className="pricing-eyebrow">Default one-time reference</p>
          <p className="pricing-amount">$1,000</p>
          <p className="pricing-unit">Flexible scope. No preset packages.</p>
          <p className="pricing-footnote">
            The price can move up or down as services are added or removed.
            Final deliverables, currency, and the total quote are agreed before
            work begins. This reference isn’t an all-services bundle.
          </p>
        </div>
      </div>
      <div className="pricing-details">
        <div className="pricing-detail">
          <Wrench aria-hidden="true" />
          <div>
            <h3>Support when you need it</h3>
            <p>
              Ongoing maintenance and other continuing services are quoted
              separately each month, based on the coverage you choose.
            </p>
          </div>
        </div>
        <div className="pricing-detail">
          <CirclePlus aria-hidden="true" />
          <div>
            <h3>Third-party costs stay separate</h3>
            <p>
              Hosting, domains, software, licenses, usage fees, ad spend, and
              payment or shipping charges are separate from agency fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
