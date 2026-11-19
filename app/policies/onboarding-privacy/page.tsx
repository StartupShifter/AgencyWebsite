import { Suspense } from "react";
import { connection } from "next/server";
import { fetchQuery } from "convex/nextjs";
import type { Metadata } from "next";
import { api } from "@/convex/_generated/api";
import { InformationPage } from "@/components/landing/information-page";
import { InformationSkeleton } from "@/components/skeletons/information-skeleton";
import { getLocalizedContent } from "@/lib/i18n-server";

export async function generateMetadata(): Promise<Metadata> {
  const { content } = await getLocalizedContent();
  return { title: content.metadata.onboardingPrivacy.title, robots: { index: false, follow: false } };
}

async function CurrentNotice() {
  await connection();
  const privacy = await fetchQuery(api.onboarding.getPrivacySettings, {});
  const { content } = await getLocalizedContent();
  const page = content.pages.policies.onboardingPrivacy;
  const copy = content.onboarding.privacyCopy;
  return <InformationPage policy={!privacy.approved} title={page.title} description={copy.purpose}>
    <section><h2>{page.shareHeading}</h2><p>{page.shareParagraph}</p></section>
    <section><h2>{page.useHeading}</h2><p>{page.useParagraphs[0]}</p><p>{page.useParagraphs[1]}</p></section>
    <section><h2>{page.responsibilityHeading}</h2><p>{copy.responsibility}</p><p>{page.responsibilityParagraphAfter}</p></section>
    {privacy.approved ? <><section><h2>{page.noticeHeading}</h2><p className="whitespace-pre-wrap">{privacy.text}</p></section>{(privacy.retention || privacy.contact) && <section><h2>{page.keepingHeading}</h2>{privacy.retention && <p>{privacy.retention}</p>}{privacy.contact && <p>{page.contactPrefix}{privacy.contact}.</p>}</section>}</> : <section><h2>{page.pausedHeading}</h2><p>{page.pausedParagraphs[0]}</p><p>{page.pausedParagraphs[1]}</p></section>}
    <section><h2>{page.safeHeading}</h2><p>{copy.safeSharing} {page.safeParagraphAfter}</p></section>
  </InformationPage>;
}
export default function OnboardingPrivacyPage() { return <Suspense fallback={<InformationSkeleton />}><CurrentNotice /></Suspense>; }
