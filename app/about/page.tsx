import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Globe2 } from "lucide-react";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { Button } from "@/components/ui/button";
import { twLanding } from "@/lib/landing-styles";

export const metadata: Metadata = {
  title: "About us — Starter Shifter",
  description:
    "Meet Starter Shifter, an agency helping businesses worldwide connect their websites, social presence, and operations through research, design, development, and automation.",
};

const services = [
  {
    title: "Web applications",
    description:
      "Websites and ecommerce stores shaped around your products and customers. We bring research, creative direction, and development together on Shopify or WordPress with WooCommerce, with the platform and features agreed for your project.",
  },
  {
    title: "Social media",
    description:
      "Social page setup and basic post templates to establish your presence. For Pro engagements, we also agree the ongoing content, campaigns, lead generation, and client handling your business needs.",
  },
  {
    title: "AI workflows",
    description:
      "Chatbots and supported automations that help answer common questions, route enquiries, and reduce repetitive work. We can connect agreed inventory, shipping, invoicing, and business tools where the platforms support it.",
  },
];

const steps = [
  {
    title: "Understand your business",
    description:
      "We discuss your goals, products, customers, and existing systems, then agree the deliverables, responsibilities, timeline, and costs. Onboarding begins after a signed contract, a 40% advance, and the required company and project details.",
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

export default function AboutPage() {
  return (
    <div id="top">
      <a className={twLanding("skip-link")} href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" className={twLanding("section-shell")}>
        <section aria-labelledby="about-page-heading" className="grid gap-10 pb-16 pt-10 sm:pb-24 sm:pt-16 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-20">
          <div>
            <p className="mb-6 text-sm text-muted-foreground">About Starter Shifter</p>
            <h1 id="about-page-heading" className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.055em] text-balance sm:text-7xl">Your business.<br />Its next chapter online.</h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">We’re Starter Shifter, an agency helping businesses bring their products and operations online. We connect the website your customers see with the tools and workflows behind it.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="emerald" size="marketing" nativeButton={false} render={<Link href="/#contact" />}>
                Tell us about your business <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
              </Button>
              <Button variant="outline" size="marketing" nativeButton={false} render={<Link href="/#pricing" />}>Explore our plans</Button>
            </div>
          </div>
          <aside className="rounded-3xl bg-[var(--commerce-soft)] p-7 sm:p-10" aria-labelledby="about-purpose-heading">
            <Globe2 aria-hidden="true" className="mb-8 size-8 text-[var(--commerce-green)]" />
            <h2 id="about-purpose-heading" className="text-2xl font-medium leading-tight tracking-tight sm:text-3xl">A connected business, wherever you start.</h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">We work with businesses worldwide, across industries. Whether you’re establishing an online presence or improving an existing setup, the starting point is your business and what it needs.</p>
            <p className="mt-5 text-base leading-7 text-muted-foreground">Our approach brings research, design, development, and supported integrations into one agreed plan, so each part has a clear purpose.</p>
          </aside>
        </section>

        <section aria-labelledby="about-services-heading" className="grid gap-8 border-t border-border py-14 sm:py-20 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <h2 id="about-services-heading" className="text-3xl font-medium tracking-tight sm:text-4xl">What we bring together.</h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">Three areas of work, shaped around the way your business sells, communicates, and operates.</p>
            <Link href="/#services" className={twLanding("action-link")}>Explore our services <ArrowUpRight aria-hidden="true" /></Link>
          </div>
          <div className="flex flex-col gap-9">
            {services.map((service) => (
              <article key={service.title}>
                <h3 className="text-xl font-medium tracking-tight">{service.title}</h3>
                <p className="mt-3 max-w-2xl text-base leading-8 text-muted-foreground">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="about-process-heading" className="border-t border-border py-14 sm:py-20">
          <h2 id="about-process-heading" className="text-3xl font-medium tracking-tight sm:text-4xl">Research first. A clear path forward.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">Your knowledge of the business and our research guide the work. Shared decisions keep the design, build, and handover aligned.</p>
          <ol className="mt-10 grid gap-9 lg:grid-cols-3 lg:gap-12">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true" className="mb-5 flex size-10 items-center justify-center rounded-full bg-secondary text-sm font-medium">{index + 1}</span>
                <h3 className="text-xl font-medium tracking-tight">{step.title}</h3>
                <p className="mt-3 text-base leading-8 text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="about-scope-heading" className="mb-16 grid gap-8 rounded-3xl bg-muted/50 p-7 sm:mb-24 sm:p-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <h2 id="about-scope-heading" className="text-3xl font-medium tracking-tight sm:text-4xl">Clear scope.<br />Shared expectations.</h2>
          <div className="flex flex-col items-start gap-5">
            <p className="text-base leading-8 text-muted-foreground">Basic focuses on one-time digital setup and basic social post templates. You manage posting, ads, and lead generation after handover. Pro adds agreed ongoing maintenance, lead generation, client handling, and business growth strategy.</p>
            <p className="text-base leading-8 text-muted-foreground">For each engagement, we define the selected services, quantities, supported tools, revisions, and support coverage. You provide the agreed content, business information, account access, and approvals. Additional work is scoped separately.</p>
            <p className="text-base leading-8 text-muted-foreground">Third-party costs, such as platform subscriptions, hosting, domains, paid apps, usage charges, and advertising spend, are separate from agency fees. Timelines depend on the agreed scope, your inputs, and platform approvals.</p>
            <Button variant="emerald" size="marketing" nativeButton={false} render={<Link href="/#pricing" />}>
              Compare Basic and Pro <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
