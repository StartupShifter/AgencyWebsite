import { twLanding } from "@/lib/landing-styles";
import { ArrowUpRight, ArrowDown, Globe2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { content } from "@/context/content";

export function HeroSection() {
  const { hero } = content.landing;
  return (
    <section aria-labelledby="hero-heading" className={twLanding("hero-section")}>
      <div className={twLanding("commerce-hero")}>
        <div className={twLanding("commerce-steps commerce-steps-left")} aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className={twLanding("commerce-steps commerce-steps-right")} aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className={twLanding("commerce-copy")}>
          <p className={twLanding("commerce-eyebrow")}>
            <span /> {hero.eyebrow}
          </p>
          <h1 id="hero-heading">
            {hero.titleLines[0]}
            <br />
            {hero.titleLines[1]}
          </h1>
          <p className={twLanding("commerce-description")}>
            {hero.description}
          </p>
          <div className={twLanding("commerce-actions")}>
            <a
              href="#contact"
              className={buttonVariants({ variant: "hero", size: "marketing" })}
            >
              {hero.primaryCta}{" "}
              <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
            </a>
            <a href="#services" className={twLanding("commerce-explore")}>
              {hero.secondaryCta} <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <p className={twLanding("commerce-note")}>
            <Globe2 aria-hidden="true" /> {hero.note}
          </p>
        </div>
      </div>
    </section>
  );
}
