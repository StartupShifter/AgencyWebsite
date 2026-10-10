import { twLanding } from "@/lib/landing-styles";
import { ArrowUpRight, ArrowDown, Globe2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
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
            <span /> Your e‑commerce & digital growth agency
          </p>
          <h1 id="hero-heading">
            Your next chapter
            <br />
            starts with a better store.
          </h1>
          <p className={twLanding("commerce-description")}>
            From your first online store to the systems behind it. We bring
            design, e‑commerce, and connected operations together, built around
            your business.
          </p>
          <div className={twLanding("commerce-actions")}>
            <a
              href="#contact"
              className={buttonVariants({ variant: "hero", size: "marketing" })}
            >
              Let’s build your store{" "}
              <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
            </a>
            <a href="#services" className={twLanding("commerce-explore")}>
              Explore our services <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <p className={twLanding("commerce-note")}>
            <Globe2 aria-hidden="true" /> Your business. Your scope. Wherever
            you are.
          </p>
        </div>
      </div>
    </section>
  );
}
