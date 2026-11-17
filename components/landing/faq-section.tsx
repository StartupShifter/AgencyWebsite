import { twLanding } from "@/lib/landing-styles";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    id: "services",
    question: "What exactly is included?",
    answer:
      "Basic covers the full build and the digital marketing setup as one-time work: your website or ecommerce application, SEO management, email marketing, and social media marketing across WhatsApp, LinkedIn, Pinterest, and other channels as your requirements need. Pro adds everything in Basic, plus $500 per month for ongoing maintenance, performance, and lead generation. Services outside these three areas are quoted separately.",
  },
  {
    id: "price",
    question: "What’s the difference between Basic and Pro?",
    answer:
      "Basic is $2,500 one-time and delivers the full application build and marketing setup, then hands it over. Pro is $2,500 for the same setup plus $500 per month for ongoing maintenance, performance enhancement, and lead generation. Basic does not include lead generation or ongoing maintenance. Lead volumes aren’t guaranteed in either plan.",
  },
  {
    id: "costs",
    question: "Are there extra or hidden fees?",
    answer:
      "Hosting, domains, ad spend, payment fees, and other third-party expenses are paid by you, not included in the agency fee. If you need services beyond the three areas we cover, or work outside the agreed scope, that is quoted separately.",
  },
  {
    id: "getting-started",
    question: "What do you need from us to get started?",
    answer:
      "A signed contract, a 40% advance, and your company and project details. You then complete onboarding and provide any additional information or documents through your dashboard — including catalogs and product images so we can build accurate mockups.",
  },
  {
    id: "timeline",
    question: "How long will our project take?",
    answer:
      "The first handoff of research and a Figma design draft is targeted within a maximum of 3–4 days after onboarding is complete. After that we schedule two Google Meet calls each week to share progress and updates until your application is built and handed over.",
  },
  {
    id: "integrations",
    question: "Can you connect the tools we already use?",
    answer:
      "We offer integrations between stores, inventory, shipping, and business systems such as ERP and CRM tools. We review your exact systems, available access, and platform limitations before confirming compatibility and the work involved.",
  },
  {
    id: "support",
    question: "Can you help after launch?",
    answer:
      "Yes. Pro includes $500 per month for ongoing maintenance and support: we enhance performance, keep your SEO and marketing current, and work toward better sales. Basic is one-time, but every one-time client is still supported for the full first month from onboarding — we handle requested changes and bug fixes. After that month, if you're not continuing with Pro, further help is quoted based on the issue and services you need.",
  },
  {
    id: "ownership",
    question: "Who owns the website and accounts after handover?",
    answer:
      "You do. After handover you manage the website, its accounts, and its content. We don’t require you to continue with our services unless you want ongoing support.",
  },
  {
    id: "results",
    question: "Do you guarantee leads or sales?",
    answer:
      "We can’t promise a specific number, because results depend mostly on the market. What Pro clients get is active, ongoing lead generation: we work to bring in leads and sales, and if one approach isn’t working, we restructure it and test other approaches to find what fits your business.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      className={twLanding("section-shell section-space faq-layout")}
      aria-labelledby="faq-heading"
    >
      <div>
        <p className={twLanding("section-kicker")}>A little more clarity</p>
        <h2 id="faq-heading" className={twLanding("section-heading")}>
          Good questions.
          <br />
          Clear answers.
        </h2>
        <p className={twLanding("section-intro")}>
          Every business starts somewhere different. Here’s what to know before
          we start together.
        </p>
        <Link href="/faq" className={`${twLanding("action-link")} mt-2`}>
          Browse all FAQs <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
      <Accordion className={twLanding("faq-accordion")} defaultValue={["services"]}>
        {questions.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              <p>{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
