import { twLanding } from "@/lib/landing-styles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    id: "services",
    question: "Can we work on just one part of my business?",
    answer:
      "Yes. We tailor each engagement to your priorities, whether that’s an ecommerce website, a connected order workflow, creative direction, or another agreed service. There are no preset packages, and the selected work is written into your project scope.",
  },
  {
    id: "price",
    question: "What does the $1,000 reference cover?",
    answer:
      "It’s a default reference for a one-time project, with the price adjusted as services are added or removed. Exact deliverables, quantities, complexity, currency, and price are agreed in your quote. It doesn’t mean unlimited work or every service is automatically included.",
  },
  {
    id: "getting-started",
    question: "What do you need from us to get started?",
    answer:
      "Onboarding begins after a signed contract, a 40% advance, and your company and project details. Depending on the scope, we may also need product information, brand assets, access to your existing tools, and a contact for reviews and approvals.",
  },
  {
    id: "integrations",
    question: "Can you connect the tools we already use?",
    answer:
      "We offer integrations between stores, inventory, shipping, and business systems such as ERP and CRM tools. We review your exact systems, available access, and platform limitations before confirming compatibility and the work involved.",
  },
  {
    id: "timeline",
    question: "How long will our project take?",
    answer:
      "The timeline depends on the scope, technical requirements, available content, and review cycles. The intended early handoff includes company, market, and competitor research plus a basic Figma design draft. Your project’s milestones and timing are agreed individually.",
  },
  {
    id: "support",
    question: "Can you help after launch?",
    answer:
      "Yes. Maintenance, technical support, and other ongoing services can be arranged for a separate monthly charge. We agree on the systems covered, tasks, capacity, and support terms. New features and changes outside that coverage need their own scope.",
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
