import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ResourcePage,
  ResourceSection,
} from "@/components/landing/resource-page";

export const metadata: Metadata = {
  title: "FAQs — Starter Shifter",
  description:
    "Answers about Starter Shifter’s Basic and Pro plans, onboarding, delivery stages, websites, integrations, ongoing support, and how to start a project.",
};

type FaqGroup = {
  id: string;
  label: string;
  questions: { question: string; answer: ReactNode }[];
};

const groups: FaqGroup[] = [
  {
    id: "faq-plans",
    label: "Plans & scope",
    questions: [
      {
        question: "What is Starter Shifter?",
        answer:
          "Starter Shifter is an agency that helps businesses bring their products and operations online. We work across websites and ecommerce applications, social presence, chatbots and automation, integrations, and the systems behind them. Clients can be based anywhere, and each scope is shaped around the business.",
      },
      {
        question: "What’s the difference between Basic and Pro?",
        answer:
          "Basic is $2,500 one-time. It covers the full application build plus the digital marketing setup: research and design, website or ecommerce application development, SEO management, email marketing, and social media marketing across WhatsApp, LinkedIn, Pinterest, and other channels as required, plus chatbot and automation setup, supported operational integrations, and launch. You manage lead generation and ongoing work after handover. Pro is $2,500 for the same setup plus $500 per month for ongoing maintenance, performance enhancement, lead generation, and keeping SEO and marketing current. Deliverables and coverage are agreed in advance; lead volumes aren’t guaranteed, and third-party costs such as hosting, domains, ad spend, and payment fees are paid by you.",
      },
      {
        question: "Can we choose only part of a plan?",
        answer:
          "Yes. Basic and Pro are starting points for the most common scopes. If you need a smaller, larger, or different engagement, we can discuss a tailored scope. The selected work, price, timeline, and responsibilities are agreed before work begins.",
      },
      {
        question: "Are there costs beyond the plan price?",
        answer:
          "Yes. Hosting, domains, ad spend, payment processing fees, and other third-party expenses are paid by you, separate from agency fees. Platform subscriptions, themes, apps, plugins and licenses, ERP, CRM, chatbot and other software subscriptions, usage charges, asset licensing, and shipping or fulfillment charges are also your responsibility. Services outside the three areas we cover, or work outside the agreed scope, are quoted separately.",
      },
      {
        question: "Do you guarantee leads, sales, or growth?",
        answer:
          "We can’t promise a specific number of leads or sales — results depend mostly on the market and factors outside our control. What we do promise for Pro is the work itself: we actively run lead generation and help your business grow, and if one approach isn’t producing results we restructure it and test other approaches to find what fits. We’ll be working on it with you, not just handing you a setup.",
      },
      {
        question: "How does payment work?",
        answer:
          "Onboarding follows a signed shared contract and a 40% advance, along with your company and project details. Remaining payment timing and other commercial terms are set out in your contract. Basic is a one-time fee; Pro combines a setup fee with a monthly charge. Other payment or legal terms are agreed individually.",
      },
    ],
  },
  {
    id: "faq-process",
    label: "Process & timing",
    questions: [
      {
        question: "What do you need from us to get started?",
        answer:
          "A signed shared contract, a 40% advance, and your company and project details. Depending on the scope, we may also need product information, brand assets, access to existing tools, policies, tax and shipping rules, and a contact who can review and approve work.",
      },
      {
        question: "How long will our project take?",
        answer:
          "The first handoff of research and a Figma design draft is targeted within a maximum of 3–4 days after onboarding is complete. The full build then depends on the scope, technical requirements, content readiness, third-party approvals, and review cycles. We schedule two Google Meet calls each week to share progress, and we agree milestones and timing in your proposal.",
      },
      {
        question: "What is the intended early handoff?",
        answer:
          "After the signed contract, 40% advance, and company/project details are complete, we target a first handoff within 3–4 days of company, market, and competitor research plus a basic Figma design draft with variants. The exact clock start, research depth, number of variants, and revision allowance are confirmed for your project. The handoff is a direction-setting step, not the completed website or all integrations.",
      },
      {
        question: "How do revisions work?",
        answer:
          "You review the agreed work at the decision points in your scope and share consolidated feedback. The revision allowance is agreed before work begins. If a request changes the agreed scope or adds new work, we define the extra work, price, and timeline before proceeding.",
      },
      {
        question: "What happens if our content or access is late?",
        answer:
          "Timelines depend on the inputs we agree. If content, account access, approvals, or third-party responses arrive late, the schedule may shift. We flag the dependency and agree a revised plan rather than silently absorbing the delay.",
      },
    ],
  },
  {
    id: "faq-build",
    label: "Websites & integrations",
    questions: [
      {
        question: "Which platforms do you build on?",
        answer:
          "We build websites and ecommerce applications on Shopify or WordPress, using WooCommerce when a store is needed. If another platform or website builder might fit better, we review support and feasibility before committing. The platform approach is confirmed in your proposal.",
      },
      {
        question: "Can you redesign or migrate an existing site?",
        answer:
          "We can discuss a redesign or migration, but it is not automatically included in Basic or Pro. We first review the current site, content, products, integrations, and redirects. The migration scope, risks, and price are agreed separately.",
      },
      {
        question: "Can you connect the tools we already use?",
        answer:
          "We offer integrations between stores, inventory, shipping, invoicing, and business systems such as ERP and CRM tools. Compatibility depends on the exact systems, versions, access, APIs, and platform limits. We review those before confirming what can be connected and what the work involves.",
      },
      {
        question: "Do you build native mobile apps?",
        answer:
          "Our confirmed work is websites and web applications. If you’re considering a native mobile app, raise it early so we can confirm whether it fits the engagement. It is not assumed to be part of a website or ecommerce build.",
      },
      {
        question: "Can you set up chatbots and social automation?",
        answer:
          "Yes, as an agreed setup. We design the use cases, connect supported channels, use approved knowledge sources, set boundaries, and arrange a human handoff where needed. Exact channel support, conversation volume, permissions, and usage costs are confirmed during feasibility. We don’t promise fully autonomous support or every social network.",
      },
    ],
  },
  {
    id: "faq-after-launch",
    label: "After launch",
    questions: [
      {
        question: "Can you help after launch?",
        answer:
          "Yes. Pro includes ongoing maintenance and support for $500 per month in addition to its $2,500 setup fee. We enhance performance, keep your SEO and marketing current, and work toward better sales. Basic is a one-time setup, but every one-time client is still supported for the full first month from onboarding — we handle requested changes and bug fixes. After that first month, if you’re not continuing with Pro, further help is quoted based on the issue and services you need.",
      },
      {
        question: "What does maintenance cover?",
        answer:
          "Typical coverage can include routine checks, applicable updates and compatibility checks, bug fixes, monitoring, backup and recovery tasks where agreed, and support handling. The exact list depends on your systems and the coverage you purchase. New features and work outside that coverage need their own scope.",
      },
      {
        question: "Do you offer 24/7 support or a guaranteed response time?",
        answer:
          "We don’t publish a universal 24/7 or response-time promise. Support hours, channels, capacity, response targets, and escalation are agreed in your support scope. If you need a specific service level, raise it before the engagement so we can confirm whether it can be met.",
      },
      {
        question: "Who owns the website and accounts after handover?",
        answer:
          "You do. After handover you manage the website, its accounts, and its content. We don’t require you to continue with our services unless you want ongoing support. Platform accounts, licenses, and third-party services may remain subject to their own terms.",
      },
      {
        question: "Can you run our ads and lead generation?",
        answer:
          "Pro includes agency-managed lead generation and campaign work within the agreed scope. Basic excludes agency-run lead generation. We work actively to bring in leads and sales, and if an approach isn’t working we restructure and test others. Advertising spend is always paid by you, separate from agency fees, and lead volumes aren’t guaranteed — results depend on the market. Channels, campaign scope, content quantities, and reporting cadence are agreed in advance.",
      },
    ],
  },
  {
    id: "faq-working",
    label: "Working together",
    questions: [
      {
        question: "How do we start a project?",
        answer:
          "Start with a project brief on this site. We use it to understand your business and goals, then discuss the right scope. If it’s a fit, you receive a proposal with deliverables, exclusions, pricing, timeline, and responsibilities. Work begins after the signed contract, 40% advance, and project details.",
      },
      {
        question: "Do you work with businesses outside your country?",
        answer:
          "Yes. Starter Shifter works with businesses worldwide. We don’t claim local legal, tax, or platform coverage in every market, so requirements specific to your jurisdiction are confirmed for your project.",
      },
      {
        question: "How do you handle our information?",
        answer: (
          <>
            We use the details you share to understand your business and prepare
            or deliver the agreed services. We don’t sell your brief or share it
            with other businesses for their own use. Our{" "}
            <a href="/policies/privacy">privacy information</a> explains the
            current project brief and client portal, and identifies what is
            still awaiting approval.
          </>
        ),
      },
      {
        question: "What if we’re not sure what we need?",
        answer:
          "That’s a normal starting point. Share the business problem and what’s already in place. We can help identify the smallest sensible scope, including whether research or a discovery step should come first. You don’t need to choose a plan before the first conversation.",
      },
      {
        question: "Is the project brief a contract or quote?",
        answer:
          "No. The project brief is a starting point for discussion. It doesn’t create an agreement, reserve time, or set a price. A proposal and signed contract define the scope and commercial terms.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <ResourcePage
      eyebrow="Resources / FAQs"
      note="The details, answered plainly"
      title={
        <>
          Good questions.
          <br />
          <span className="resourceHero-mark">Clear answers.</span>
        </>
      }
      description="The practical details about scope, pricing, timelines, integrations, and support — written the way we’d explain them in a first conversation."
      facts={[
        { label: "Plans", value: "Basic & Pro" },
        { label: "Onboarding", value: "Contract, advance & details" },
        { label: "Coverage", value: "Agreed per project" },
      ]}
    >
      <ResourceSection
        id="answers"
        index="01"
        label="Common questions"
        title={
          <>
            Straight answers,
            <br />
            without the small print.
          </>
        }
        intro="If your question isn’t here, start a project brief and tell us what you’re trying to solve. We’ll answer directly."
      >
        <div className="resourceFaqLayout">
          <nav className="resourceFaqNav" aria-label="FAQ categories">
            <p>Jump to</p>
            {groups.map((group, index) => (
              <a key={group.id} href={`#${group.id}`}>
                {group.label}
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </nav>

          <div className="resourceFaqGroups">
            {groups.map((group, groupIndex) => (
              <section
                key={group.id}
                id={group.id}
                className="resourceFaqGroup"
                aria-labelledby={`${group.id}-heading`}
              >
                <h2 id={`${group.id}-heading`}>{group.label}</h2>
                <Accordion
                  className="resourceAccordion"
                  defaultValue={
                    groupIndex === 0 ? [`${group.id}-0`] : undefined
                  }
                >
                  {group.questions.map((item, index) => (
                    <AccordionItem
                      key={item.question}
                      value={`${group.id}-${index}`}
                    >
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>
                        <p>{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>
        </div>
      </ResourceSection>
    </ResourcePage>
  );
}
