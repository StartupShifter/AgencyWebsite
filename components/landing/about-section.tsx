import { twLanding } from "@/lib/landing-styles";
import { AboutBenefits } from "./about-benefits";
import { getLocalizedContent } from "@/lib/i18n-server";
import "./about-section.css";

export async function AboutSection() {
  const { content } = await getLocalizedContent();
  const about = content.landing.about;
  return (
    <section id="about" className={`${twLanding("section-shell section-space")} aboutBenefits-section`} aria-labelledby="about-heading">
      <div className="aboutBenefits-intro">
        <div>
          <p className={twLanding("section-kicker")}>{about.kicker}</p>
          <h2 id="about-heading" className={twLanding("section-heading")}>{about.titleLines[0]}<br />{about.titleLines[1]}</h2>
        </div>
        <div className="aboutBenefits-introCopy">
          <p>{about.intro}</p>
        </div>
      </div>
      <AboutBenefits />
    </section>
  );
}
