import type { Metadata } from "next";
import { InformationPage } from "@/components/landing/information-page";

export const metadata: Metadata = { title: "Service terms information — Starter Shifter", robots: { index: false, follow: true } };

export default function TermsPage() {
  return <InformationPage policy title="Service terms information." description="Full service terms are awaiting approval. This page summarizes confirmed engagement information; each project requires an agreed scope and a signed contract.">
    <section><h2>Before onboarding</h2><p>Onboarding follows a signed contract, a 40% advance, and the company and project details needed to begin. Deliverables, supported tools, timeline, client responsibilities, and ongoing coverage are agreed for each engagement.</p></section>
    <section><h2>Setup and ongoing work</h2><p>Basic is a $2,500 one-time fee covering the full application build and digital marketing setup (SEO management, email marketing, and social media marketing). Pro adds $500 per month for ongoing maintenance, performance enhancement, and lead generation. Neither plan establishes unlimited work, guaranteed lead volumes, or guaranteed business results.</p></section>
    <section><h2>Third-party costs</h2><p>Hosting, domains, advertising spend, payment processing fees, platform subscriptions, paid themes and plugins, software usage, licensing, and shipping charges are paid by you, separate from agency fees. Services outside the three service areas are quoted separately.</p></section>
    <section><h2>Terms still to be published</h2><p>Remaining payment, tax, cancellation, refund, ownership, licensing, and support terms will be published once approved. Confirm these details in your project agreement before proceeding.</p></section>
  </InformationPage>;
}
