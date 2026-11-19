import type { Metadata } from "next";
import { InformationPage } from "@/components/landing/information-page";
import { getLocalizedContent } from "@/lib/i18n-server";

export async function generateMetadata(): Promise<Metadata> {
  const { content } = await getLocalizedContent();
  return { title: content.metadata.privacy.title, robots: { index: false, follow: true } };
}

export default async function PrivacyPage() {
  const { content } = await getLocalizedContent();
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
