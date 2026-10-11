import type { Metadata } from "next";
import { InformationPage } from "@/components/landing/information-page";

export const metadata: Metadata = { title: "Cookie information — Starter Shifter", robots: { index: false, follow: true } };

export default function CookiesPage() {
  return <InformationPage policy title="Cookie information." description="The cookie policy is awaiting approval. A complete notice will be added after the live hosting environment and any tracking tools have been reviewed.">
    <section><h2>Current website features</h2><p>No optional analytics or advertising integration is configured in this website. The current project brief feature creates a local download without submitting your details.</p></section>
    <section><h2>Future changes</h2><p>If analytics, advertising, or other optional tracking features are introduced, this information will need to be updated for the actual tools and data involved.</p></section>
  </InformationPage>;
}
