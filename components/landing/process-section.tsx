import { twLanding } from "@/lib/landing-styles";
const steps = [
  {
    number: "01",
    title: "Find the right scope",
    description:
      "Tell us what you’re building and what’s getting in the way. We define the services, deliverables, and project terms together.",
  },
  {
    number: "02",
    title: "Get everyone aligned",
    description:
      "With a signed contract, 40% advance, and your company details in place, we bring you into your onboarding group.",
  },
  {
    number: "03",
    title: "Explore the direction",
    description:
      "Company, market, and competitor research inform an initial Figma design draft, with directions for you to review.",
  },
  {
    number: "04",
    title: "Build, review, hand over",
    description:
      "We implement the agreed work, review it with you, and prepare for launch and handover around your project’s requirements.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className={twLanding("section-shell section-space")}
      aria-labelledby="process-heading"
    >
      <div className={twLanding("section-topline")}>
        <div>
          <p className={twLanding("section-kicker")}>How we work</p>
          <h2 id="process-heading" className={twLanding("section-heading")}>
            A clear next step.
            <br />
            At every step.
          </h2>
        </div>
        <p className={twLanding("section-intro")}>
          From the first conversation to the final handover, your goals give the
          project its direction. Your agreed scope sets the plan.
        </p>
      </div>
      <ol className={twLanding("process-grid")}>
        {steps.map((step) => (
          <li className={twLanding("process-step")} key={step.number}>
            <span className={twLanding("process-step-number")} aria-hidden="true">
              {step.number}
            </span>
            <h3 className={twLanding("process-step-heading")}>{step.title}</h3>
            <p className={twLanding("process-step-copy")}>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
