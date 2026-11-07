import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Globe2,
  Megaphone,
  Network,
  type LucideIcon,
} from "lucide-react";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { Button } from "@/components/ui/button";
import { twLanding } from "@/lib/landing-styles";
import "./about.css";

export const metadata: Metadata = {
  title: "About us — Starter Shifter",
  description:
    "Meet Starter Shifter, an agency helping businesses worldwide connect their websites, social presence, and operations through research, design, development, and automation.",
};

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
};

const services: Service[] = [
  {
    icon: Globe2,
    title: "Web applications",
    description:
      "Websites and ecommerce stores shaped around your products and customers. We bring research, creative direction, and development together on Shopify or WordPress with WooCommerce, with the platform and features agreed for your project.",
    tags: ["Shopify", "WordPress + WooCommerce", "Design & build"],
  },
  {
    icon: Megaphone,
    title: "Social media",
    description:
      "Social page setup and basic post templates to establish your presence. For Pro engagements, we also agree the ongoing content, campaigns, lead generation, and client handling your business needs.",
    tags: ["Page setup", "Post templates", "Pro: campaigns & lead generation"],
  },
  {
    icon: Network,
    title: "AI workflows",
    description:
      "Chatbots and supported automations that help answer common questions, route enquiries, and reduce repetitive work. We can connect agreed inventory, shipping, invoicing, and business tools where the platforms support it.",
    tags: ["Chatbots", "Customer support", "Supported integrations"],
  },
];

const steps = [
  {
    title: "Understand your business",
    description:
      "We discuss your goals, products, customers, and existing systems, then agree the deliverables, responsibilities, timeline, and costs.",
  },
  {
    title: "Find a shared direction",
    description:
      "Company, market, and competitor research informs a basic Figma design draft. You review the direction and share feedback before we move into the agreed build and connected workflows.",
  },
  {
    title: "Build, launch, and plan what follows",
    description:
      "We implement and test the selected website and workflows, with your content, account access, and approvals. Handover and any ongoing maintenance or growth work follow the coverage agreed for your plan.",
  },
];

const scope = [
  {
    label: "What you receive",
    description:
      "Basic covers one-time digital setup and basic social post templates. Pro adds ongoing maintenance, lead generation, client handling, and business growth strategy.",
  },
  {
    label: "What you provide",
    description:
      "Agreed content, business information, account access, and approvals. Timelines depend on these inputs and on third-party platform approvals.",
  },
  {
    label: "Kept separate",
    description:
      "Platform subscriptions, hosting, domains, paid apps, usage charges, and advertising spend are separate from agency fees.",
  },
];

const facts = [
  { label: "Focus", value: "Web, social & AI workflows" },
  { label: "Reach", value: "Businesses worldwide" },
  { label: "Ways to work", value: "Basic setup or Pro support" },
];

export default function AboutPage() {
  return (
    <div id="top" className="aboutPage">
      <a className={twLanding("skip-link")} href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <section
          aria-labelledby="about-page-heading"
          className={`${twLanding("section-shell")} aboutHero`}
        >
          <div className="aboutHero-top">
            <p className="aboutEyebrow">About Starter Shifter</p>
            <p className="aboutHero-note">Working with businesses worldwide</p>
          </div>

          <h1 id="about-page-heading">
            Your business.
            <br />
            Its next chapter <span className="aboutHero-mark">online.</span>
          </h1>

          <div className="aboutHero-bottom">
            <p className="aboutHero-lede">
              We’re Starter Shifter, an agency helping businesses bring their
              products and operations online. We connect the website your
              customers see with the tools and workflows behind it.
            </p>
            <div className="aboutHero-actions">
              <Button
                variant="emerald"
                size="marketing"
                nativeButton={false}
                render={<Link href="/#contact" />}
              >
                Tell us about your business{" "}
                <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
              </Button>
              <Button
                variant="outline"
                size="marketing"
                nativeButton={false}
                render={<Link href="/#pricing" />}
              >
                Explore our plans
              </Button>
            </div>
          </div>

          <dl className="aboutFacts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          aria-labelledby="about-statement-heading"
          className="aboutStatement"
        >
          <div className="aboutStatement-inner">
            <p className="aboutEyebrow">The short version</p>
            <h2 id="about-statement-heading">
              We connect the website your customers see with the workflows your
              team relies on.
            </h2>
            <div className="aboutStatement-columns">
              <p>
                We work with businesses worldwide, across industries. Whether
                you’re establishing an online presence or improving an existing
                setup, the starting point is your business and what it needs.
              </p>
              <p>
                Our approach brings research, design, development, and supported
                integrations into one agreed plan, so each part has a clear
                purpose.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="about-services-heading"
          className={`${twLanding("section-shell section-space")} aboutWork`}
        >
          <div className="aboutWork-head">
            <div>
              <p className="aboutSectionLabel">
                <span aria-hidden="true">01</span> What we do
              </p>
              <h2 id="about-services-heading">
                Three areas.
                <br />
                One connected plan.
              </h2>
            </div>
            <div className="aboutWork-aside">
              <p>
                Three areas of work, shaped around the way your business sells,
                communicates, and operates.
              </p>
              <Link href="/#services" className="aboutTextLink">
                Explore our services <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="aboutWork-list">
            {services.map(({ icon: Icon, title, description, tags }, index) => (
              <article key={title} className="aboutWork-row">
                <span className="aboutWork-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="aboutWork-body">
                  <div className="aboutWork-titleRow">
                    <h3>{title}</h3>
                    <span className="aboutWork-icon" aria-hidden="true">
                      <Icon />
                    </span>
                  </div>
                  <p>{description}</p>
                  <ul className="aboutWork-tags" aria-label={`${title} scope`}>
                    {tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="about-process-heading"
          className="aboutProcess"
        >
          <div className="aboutProcess-inner">
            <div className="aboutProcess-head">
              <p className="aboutSectionLabel aboutSectionLabel--inverse">
                <span aria-hidden="true">02</span> How we work
              </p>
              <h2 id="about-process-heading">
                Research first.
                <br />
                A clear path forward.
              </h2>
              <p className="aboutProcess-intro">
                Your knowledge of the business and our research guide the work.
                Shared decisions keep the design, build, and handover aligned.
              </p>

              <div className="aboutProcess-gate">
                <p>Before work begins</p>
                <ul>
                  <li>Signed contract</li>
                  <li>40% advance</li>
                  <li>Company &amp; project details</li>
                </ul>
              </div>
            </div>

            <ol className="aboutProcess-steps">
              {steps.map((step, index) => (
                <li key={step.title} className="aboutProcess-step">
                  <span className="aboutProcess-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          aria-labelledby="about-scope-heading"
          className={`${twLanding("section-shell section-space")} aboutScope`}
        >
          <div className="aboutScope-head">
            <div>
              <p className="aboutSectionLabel">
                <span aria-hidden="true">03</span> Working together
              </p>
              <h2 id="about-scope-heading">
                Clear scope.
                <br />
                Shared expectations.
              </h2>
            </div>
            <p className="aboutScope-intro">
              Before work begins, we define the selected services, what you
              provide, and what sits outside agency fees.
            </p>
          </div>

          <div className="aboutScope-grid">
            {scope.map((item, index) => (
              <article key={item.label} className="aboutScope-item">
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.label}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="aboutScope-footer">
            <Button
              variant="emerald"
              size="marketing"
              nativeButton={false}
              render={<Link href="/#pricing" />}
            >
              Compare Basic and Pro{" "}
              <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
            </Button>
            <p>
              Deliverables, quantities, supported tools, revisions, and support
              coverage are agreed before work begins.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
