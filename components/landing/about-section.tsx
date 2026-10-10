import { twLanding } from "@/lib/landing-styles";
import { ArrowUpRight, Globe2, Focus, Waypoints } from "lucide-react";
export function AboutSection() {
  return (
    <section
      id="about"
      className={twLanding("about-section section-shell section-space")}
      aria-labelledby="about-heading"
    >
      <div className={twLanding("about-statement")}>
        <p className={twLanding("section-kicker")}>A little about us</p>
        <h2 id="about-heading" className={twLanding("section-heading")}>
          For the business
          <br />
          you’re becoming.
        </h2>
        <p>
          Starter Shifter helps businesses bring their products and operations
          online. We connect research, design, development, and automation
          around one thing: what your business needs next.
        </p>
        <a href="#contact" className={twLanding("action-link")}>
          Tell us what you’re building <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div className={twLanding("about-principles")}>
        {[
          {
            icon: Focus,
            title: "Your goals set the scope.",
            text: "A new store, a better customer experience, or fewer manual steps. We start with the problem you want to solve.",
          },
          {
            icon: Waypoints,
            title: "The whole picture matters.",
            text: "Your website and your daily operations belong in the same conversation. We look at how they fit together.",
          },
          {
            icon: Globe2,
            title: "Good ideas can start anywhere.",
            text: "We welcome businesses around the world, across industries and stages of their digital journey.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title}>
            <span>
              <Icon aria-hidden="true" />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
