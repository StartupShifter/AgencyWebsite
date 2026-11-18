import { ServiceCard } from "@/components/landing/service-card";
import { twLanding } from "@/lib/landing-styles";
import { content } from "@/context/content";

const services = content.landing.services.cards;

export function ServicesSection() {
  const section = content.landing.services;
  return (
    <section id="services" className={twLanding("section-shell section-space")} aria-labelledby="services-heading">
      <div className={twLanding("section-topline")}>
        <div>
          <p className={twLanding("section-kicker")}>{section.kicker}</p>
          <h2 id="services-heading" className={twLanding("section-heading")}>
            {section.titleLines[0]}<br />{section.titleLines[1]}
          </h2>
        </div>
        <p className={twLanding("section-intro")}>
          {section.intro}
        </p>
      </div>
      <div className={twLanding("services-grid")}>
        {services.map(({ title, text, visual }) => (
          <ServiceCard key={visual} type={visual}>
            <div className={twLanding("service-item-copy")}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </ServiceCard>
        ))}
      </div>
    </section>
  );
}
