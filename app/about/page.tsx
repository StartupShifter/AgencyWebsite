import type { Metadata } from "next";
import { InformationPage } from "@/components/landing/information-page";

export const metadata: Metadata = { title: "About us — Starter Shifter", description: "Starter Shifter helps businesses bring their products, websites, and operations online." };

export default function AboutPage() {
  return <InformationPage title="Your business. Its next chapter." description="We’re Starter Shifter, an agency helping businesses bring their products and operations online. We work with businesses worldwide, with a scope shaped around their needs.">
    <section><h2>A connected digital presence</h2><p>Our work brings together web applications, social media, and AI workflows. That can mean a Shopify store, a WordPress website with WooCommerce, social page setup, or supported connections between your store and operational tools.</p></section>
    <section><h2>Research before implementation</h2><p>We start by understanding your business, market, and competitors. Research and a Figma design draft help establish a shared direction before the agreed website and workflows are built.</p></section>
    <section><h2>A clear scope from the start</h2><p>Deliverables, supported tools, responsibilities, and ongoing coverage are agreed for each project. Basic focuses on one-time digitalization setup. Pro adds agreed ongoing maintenance, lead generation, client handling, and growth strategy. Third-party costs are separate.</p></section>
  </InformationPage>;
}
