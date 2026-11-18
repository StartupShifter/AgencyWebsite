import type { Metadata } from "next";
import { InformationPage } from "@/components/landing/information-page";
import { content } from "@/context/content";

export const metadata: Metadata = { title: content.metadata.terms.title, robots: { index: false, follow: true } };

export default function TermsPage() {
  const page = content.pages.policies.terms;
  return <InformationPage policy title={page.title} description={page.description}>
    {page.sections.map((section) => (
      <section key={section.heading}>
        <h2>{section.heading}</h2>
        <p>{section.paragraph}</p>
      </section>
    ))}
  </InformationPage>;
}
