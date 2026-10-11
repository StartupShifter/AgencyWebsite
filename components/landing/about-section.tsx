import { twLanding } from "@/lib/landing-styles";
import { AboutBenefits } from "./about-benefits";
import "./about-section.css";

export function AboutSection() {
  return (
    <section id="about" className={`${twLanding("section-shell section-space")} aboutBenefits-section`} aria-labelledby="about-heading">
      <div className="aboutBenefits-intro">
        <div>
          <p className={twLanding("section-kicker")}>A little about us</p>
          <h2 id="about-heading" className={twLanding("section-heading")}>Your business online.<br />Everything working together.</h2>
        </div>
        <div className="aboutBenefits-introCopy">
          <p>We’re Starter Shifter. Your website, social presence, and workflows, built to work together.</p>
        </div>
      </div>
      <AboutBenefits />
    </section>
  );
}
