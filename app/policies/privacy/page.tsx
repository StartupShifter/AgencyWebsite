import type { Metadata } from "next";
import { InformationPage } from "@/components/landing/information-page";

export const metadata: Metadata = { title: "Privacy information — Starter Shifter", robots: { index: false, follow: true } };

export default function PrivacyPage() {
  return <InformationPage policy title="Privacy information." description="Starter Shifter’s full privacy policy is awaiting approval. The information below describes the current project brief feature; it is not a complete privacy policy.">
    <section><h2>Your project brief</h2><p>The current brief form uses the details you enter to create a text file on your device. It does not submit your brief to Starter Shifter or store it in a website database. You decide whether and how to share the downloaded file.</p></section>
    <section><h2>Client accounts and onboarding</h2><p>The client portal uses Better Auth and Convex for sign-in and project records. Its separate <a href="/policies/onboarding-privacy">onboarding privacy information</a> explains the collection status and how project details are used. Live onboarding collection remains paused until that notice is approved.</p></section>
    <section><h2>Further information</h2><p>Information about hosting data, any future enquiry service, retention, and privacy requests will be added when the full policy and contact details are approved.</p></section>
  </InformationPage>;
}
