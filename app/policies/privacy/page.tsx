import type { Metadata } from "next";
import { InformationPage } from "@/components/landing/information-page";
import { content } from "@/context/content";

export const metadata: Metadata = { title: content.metadata.privacy.title, robots: { index: false, follow: true } };

export default function PrivacyPage() {
  const page = content.pages.policies.privacy;
  return <InformationPage policy title={page.title} description={page.description}>
    {page.sections.map((section) => (
      <section key={section.heading}>
        <h2>{section.heading}</h2>
        {"paragraph" in section ? (
          <p>{section.paragraph}</p>
        ) : (
          <p>
            {section.paragraphBefore}
            <a href={section.linkHref}>{section.linkLabel}</a>
            {section.paragraphAfter}
          </p>
        )}
      </section>
    ))}
  </InformationPage>;
}
