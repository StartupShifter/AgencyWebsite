import { twLanding } from "@/lib/landing-styles";
import { SiteHeader } from "@/components/landing/site-header";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { AboutSection } from "@/components/landing/about-section";
import { ProcessSection } from "@/components/landing/process-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { FaqSection } from "@/components/landing/faq-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { getLocalizedContent } from "@/lib/i18n-server";
export default async function Home() {
  const { content } = await getLocalizedContent();
  return (
    <div id="top">
      <a className={twLanding("skip-link")} href="#main">
        {content.common.skipToContent}
      </a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <AboutSection />
        <PricingSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
