import type { Metadata } from "next";
import { InformationPage } from "@/components/landing/information-page";

export const metadata: Metadata = { title: "Service terms information — Starter Shifter", robots: { index: false, follow: true } };

export default function TermsPage() {
  return <InformationPage policy title="Service terms information." description="Full service terms are awaiting approval. This page summarizes confirmed engagement information; each project requires an agreed scope and a signed contract.">
    <section><h2>Before onboarding</h2><p>Onboarding follows a signed contract, a 40% advance, and the company and project details needed to begin. Deliverables, supported tools, timeline, client responsibilities, and ongoing coverage are agreed for each engagement.</p></section>
    <section><h2>Setup and ongoing work</h2><p>Basic covers agreed one-time setup. Pro includes that foundation and agreed ongoing maintenance, lead generation, client handling, and growth strategy. Neither plan establishes unlimited work or guaranteed business results.</p></section>
    <section><h2>Third-party costs</h2><p>Platform subscriptions, hosting, domains, paid themes and plugins, software usage, transaction fees, advertising spend, licensing, and shipping charges are separate from agency fees.</p></section>
    <section><h2>Terms still to be published</h2><p>Remaining payment, tax, cancellation, refund, ownership, licensing, and support terms will be published once approved. Confirm these details in your project agreement before proceeding.</p></section>
  </InformationPage>;
}
