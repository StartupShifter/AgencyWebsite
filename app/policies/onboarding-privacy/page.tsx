import { Suspense } from "react";
import { connection } from "next/server";
import { fetchQuery } from "convex/nextjs";
import type { Metadata } from "next";
import { api } from "@/convex/_generated/api";
import { InformationPage } from "@/components/landing/information-page";
export const metadata: Metadata = { title: "Onboarding privacy — Starter Shifter", robots: { index: false, follow: false } };
async function CurrentNotice() {
  await connection();
  const privacy = await fetchQuery(api.onboarding.getPrivacySettings, {});
  return <InformationPage policy title="Onboarding privacy." description={privacy.approved ? "Review how your onboarding details are used before you begin." : "The onboarding privacy notice is awaiting agency approval. Live collection is paused until the notice and contact details are complete."}><section><h2>Your account and project details</h2><p>The client portal uses Better Auth for sign-in and Convex to store account and project records. Your onboarding answers are associated with your signed-in client account. Client accounts can read and update their own brief; they do not receive administrator access.</p></section><section><h2>Preparing your project brief</h2><p>Onboarding collects your contact details, business description, goals, requested work, and project responsibilities. Progress is saved so you can resume and submit a brief for agency review. Submission does not verify a payment, sign a contract, send invitations, or start delivery.</p></section>{privacy.approved ? <><section><h2>Approved information · {privacy.version}</h2><p style={{ whiteSpace: "pre-wrap" }}>{privacy.text}</p></section><section><h2>Retention and privacy requests</h2><p>{privacy.retention}</p><p>Contact: {privacy.contact}</p></section></> : <section><h2>Before live collection</h2><p>The agency must provide approved collection and use information, a retention period, and a privacy contact. Until configured, onboarding answers cannot be stored or submitted. The development preview keeps sample answers in memory only.</p></section>}<section><h2>What to keep out of this form</h2><p>Do not enter passwords, verification codes, API secrets, full payment-card details, or raw customer, patient, or employee records. Share redacted examples and document links, and arrange account invitations through a later secure process.</p></section></InformationPage>;
}
export default function OnboardingPrivacyPage() { return <Suspense fallback={<p>Loading onboarding privacy information…</p>}><CurrentNotice /></Suspense>; }
