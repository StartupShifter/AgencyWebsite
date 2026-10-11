import { ServiceCard } from "@/components/landing/service-card";
import { twLanding } from "@/lib/landing-styles";

const services = [
  {
    title: "Web application",
    text: "Websites and web applications, with design and development shaped around how your business works.",
    visual: "web" as const,
  },
  {
    title: "Social media",
    text: "Content planning, creative direction, and campaign management for a consistent social presence.",
    visual: "social" as const,
  },
  {
    title: "AI workflow",
    text: "Connected tools, task automation, and customer chat flows that bring your team in when needed.",
    visual: "ai" as const,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className={twLanding("section-shell section-space")} aria-labelledby="services-heading">
      <div className={twLanding("section-topline")}>
        <div>
          <p className={twLanding("section-kicker")}>What we do</p>
          <h2 id="services-heading" className={twLanding("section-heading")}>
            Good on the outside.<br />Connected on the inside.
          </h2>
        </div>
        <p className={twLanding("section-intro")}>
          Your online presence. Your social voice. The workflows behind it.
          Three connected services, shaped around your business.
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
