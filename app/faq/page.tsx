import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MarkedTitle,
  ResourcePage,
  ResourceSection,
} from "@/components/landing/resource-page";
import { content } from "@/context/content";

export const metadata: Metadata = content.metadata.faq;

type FaqAnswer = string | { before: string; linkLabel: string; linkHref: string; after: string };
type FaqGroup = {
  id: string;
  label: string;
  questions: { question: string; answer: FaqAnswer }[];
};

const groups = content.pages.faq.groups as unknown as FaqGroup[];

function FaqAnswer({ answer }: { answer: FaqAnswer }) {
  if (typeof answer === "string") return <p>{answer}</p>;
  return (
    <p>
      {answer.before}
      <a href={answer.linkHref}>{answer.linkLabel}</a>
      {answer.after}
    </p>
  );
}

export default function FaqPage() {
  const page = content.pages.faq;
  return (
    <ResourcePage
      eyebrow={page.eyebrow}
      note={page.note}
      title={<MarkedTitle lines={page.titleLines} mark={page.titleMark} />}
      description={page.description}
      facts={page.facts}
    >
      <ResourceSection
        id="answers"
        index={page.sectionIndex}
        label={page.sectionLabel}
        title={<MarkedTitle lines={page.sectionTitleLines} />}
        intro={page.sectionIntro}
      >
        <div className="resourceFaqLayout">
          <nav className="resourceFaqNav" aria-label={page.categoriesLabel}>
            <p>{page.jumpTo}</p>
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
                        <FaqAnswer answer={item.answer} />
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
