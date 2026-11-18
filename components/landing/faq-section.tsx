import { twLanding } from "@/lib/landing-styles";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { content } from "@/context/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = content.landing.faq.questions;

export function FaqSection() {
  const faq = content.landing.faq;
  return (
    <section
      id="faq"
      className={twLanding("section-shell section-space faq-layout")}
      aria-labelledby="faq-heading"
    >
      <div>
        <p className={twLanding("section-kicker")}>{faq.kicker}</p>
        <h2 id="faq-heading" className={twLanding("section-heading")}>
          {faq.titleLines[0]}
          <br />
          {faq.titleLines[1]}
        </h2>
        <p className={twLanding("section-intro")}>
          {faq.intro}
        </p>
        <Link href="/faq" className={`${twLanding("action-link")} mt-2`}>
          {faq.linkLabel} <ArrowUpRight aria-hidden="true" />
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
