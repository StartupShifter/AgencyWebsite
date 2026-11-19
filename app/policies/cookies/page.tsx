import type { Metadata } from "next";
import { InformationPage } from "@/components/landing/information-page";
import { getLocalizedContent } from "@/lib/i18n-server";

export async function generateMetadata(): Promise<Metadata> {
  const { content } = await getLocalizedContent();
  return { title: content.metadata.cookies.title, robots: { index: false, follow: true } };
}

export default async function CookiesPage() {
  const { content } = await getLocalizedContent();
  const page = content.pages.policies.cookies;
  return <InformationPage policy title={page.title} description={page.description}>
    {page.sections.map((section) => (
      <section key={section.heading}>
        <h2>{section.heading}</h2>
        <p>{section.paragraph}</p>
      </section>
    ))}
  </InformationPage>;
}
