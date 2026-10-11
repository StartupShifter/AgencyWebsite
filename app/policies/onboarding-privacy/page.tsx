import { Suspense } from "react";
import { connection } from "next/server";
import { fetchQuery } from "convex/nextjs";
import type { Metadata } from "next";
import { api } from "@/convex/_generated/api";
import { InformationPage } from "@/components/landing/information-page";
import { onboardingPrivacyCopy } from "@/lib/onboarding/privacy-copy";

export const metadata: Metadata = { title: "Your onboarding information — Starter Shifter", robots: { index: false, follow: false } };

async function CurrentNotice() {
  await connection();
  const privacy = await fetchQuery(api.onboarding.getPrivacySettings, {});
  return <InformationPage policy={!privacy.approved} title="Your information, with a purpose." description={onboardingPrivacyCopy.purpose}>
    <section><h2>What you share with us</h2><p>Your contact details, business description, customers and markets, project goals, and the services you would like help with. You can also share business examples and links to materials that help us understand your project.</p></section>
    <section><h2>How we use it</h2><p>We use your answers to prepare and review your project brief, research your business, plan a design direction, and deliver the work agreed with you. Your progress is saved so you can return, make changes, and check your answers before sending your brief to our team.</p><p>Sending a brief does not sign an agreement or confirm a payment. Your agreement sets out the services, fees, and responsibilities for your project.</p></section>
    <section><h2>Who looks after your information</h2><p>{onboardingPrivacyCopy.responsibility}</p><p>You can access your own brief through your account. Other client accounts cannot access it. Our portal uses service providers to support account sign-in and information storage; Starter Shifter is responsible for managing your project information.</p></section>
    {privacy.approved ? <><section><h2>Your onboarding notice</h2><p className="whitespace-pre-wrap">{privacy.text}</p></section>{(privacy.retention || privacy.contact) && <section><h2>Keeping your details and answering your questions</h2>{privacy.retention && <p>{privacy.retention}</p>}{privacy.contact && <p>For questions or requests about your information, contact {privacy.contact}.</p>}</section>}</> : <section><h2>Before you begin</h2><p>Onboarding is temporarily paused. You can review this information again when onboarding reopens.</p><p>The development preview lets you try the journey with example business details. Its sample answers and progress are saved separately and can be restored in the same browser.</p></section>}
    <section><h2>Share business context, safely</h2><p>{onboardingPrivacyCopy.safeSharing} Remove private details from any examples you share. If your project needs account access later, our team will arrange it with you separately.</p></section>
  </InformationPage>;
}
export default function OnboardingPrivacyPage() { return <Suspense fallback={<p>Loading your onboarding information…</p>}><CurrentNotice /></Suspense>; }
