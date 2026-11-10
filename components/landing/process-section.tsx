"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  ChartNoAxesCombined,
  Check,
  Globe,
  Info,
  MessagesSquare,
  Network,
  ScanSearch,
} from "lucide-react";
import { twLanding } from "@/lib/landing-styles";
import "./process-section.css";

const steps = [
  {
    title: ["Research &", "direction"],
    description: "We get to know your business, study your market, and analyse the competition. Those insights shape the plan and an initial design direction for your review.",
    details: ["Business research", "Market analysis", "Competitor insights"],
    note: "Research depth and design deliverables are agreed for your project.",
    icon: ScanSearch,
    phase: "Understand",
    tone: "research",
  },
  {
    title: ["Your business,", "built online"],
    description: "We design and build your website or web application on Shopify or WordPress, with WooCommerce when you need a store. The platform and features follow how your business works.",
    details: ["Shopify or WordPress", "Design & development", "Launch & handover"],
    note: "You supply business content, product details, account access, and approvals.",
    icon: Globe,
    phase: "Build",
    tone: "build",
  },
  {
    title: ["A social", "presence"],
    description: "We set up your business pages on the agreed social channels and create a consistent presence. The focus is bringing your company online and making it easier to find and understand.",
    details: ["Page setup", "Brand consistency", "Content direction"],
    note: "Basic includes post templates; you manage posting and ads. Pro adds lead generation and growth work, with no guaranteed lead volume.",
    icon: MessagesSquare,
    phase: "Establish",
    tone: "social",
  },
  {
    title: ["AI that helps", "you respond"],
    description: "We set up chatbots for common customer questions and support workflows, connected to your social channels where supported. Conversations that need your team are handed over to a person.",
    details: ["Customer chatbots", "Supported social channels", "Human handoff"],
    note: "Channel access, approved FAQs, and software usage limits shape the setup.",
    icon: Network,
    phase: "Automate",
    tone: "automation",
  },
  {
    title: ["Connected.", "Cared for."],
    description: "We maintain and improve the agreed systems, and connect supported business tools: ERP for operations and CRM for customer relationships. Shipping and invoice workflows can be part of those integrations.",
    details: ["Maintenance & performance", "ERP & CRM connections", "Shipping & invoicing"],
    note: "Integrations depend on third-party capabilities. Ongoing care is billed monthly; third-party charges are separate.",
    icon: ChartNoAxesCombined,
    phase: "Connect & maintain",
    tone: "care",
  },
] as const;

const clamp01 = (value: number) => (value < 0 ? 0 : value > 1 ? 1 : value);

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const stack = section.querySelector<HTMLOListElement>(".process-stack");
    const stepElements = Array.from(section.querySelectorAll<HTMLElement>(".process-step"));
    if (!stack || stepElements.length === 0) return;

    const navbar = document.querySelector<HTMLElement>(".navbar-pill");
    const header = document.querySelector<HTMLElement>(".site-header");
    let frame = 0;
    let measureFrame = 0;
    let pinTop = 96;
    let peek = 12;

    const update = () => {
      frame = 0;
      if (section.dataset.stacking !== "true") return;

      const viewport = window.innerHeight;
      const entrances = stepElements.map((step, index) => {
        const pin = pinTop + index * peek;
        const progress = clamp01((viewport - step.getBoundingClientRect().top) / Math.max(1, viewport - pin));
        step.style.setProperty("--enter", progress.toFixed(4));
        return progress;
      });

      // Cards already in the deck settle back slightly as the next card is dealt.
      stepElements.forEach((step, index) => {
        step.style.setProperty("--settle", (entrances[index + 1] ?? 0).toFixed(4));
      });
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const measure = () => {
      measureFrame = 0;
      // Read the navbar's laid-out box, not its transformed box: the pill shifts
      // 6px while scrolling, which would otherwise nudge the whole deck.
      const headerTop = header?.getBoundingClientRect().top ?? 0;
      const navBottom = navbar ? headerTop + navbar.offsetTop + navbar.offsetHeight : 84;
      pinTop = Math.round(Math.max(0, navBottom) + 14);
      peek = Number.parseFloat(getComputedStyle(section).getPropertyValue("--process-peek")) || 12;

      section.style.setProperty("--process-top", `${pinTop}px`);

      // The deck only needs to fit one card on screen; height is derived from the
      // viewport, so small screens stack instead of falling back to a gap list.
      const canPin = window.innerHeight >= 500 && window.innerWidth >= 300;
      section.dataset.stacking = String(canPin);
      update();
    };

    const requestMeasure = () => {
      if (!measureFrame) measureFrame = window.requestAnimationFrame(measure);
    };

    const observer = new ResizeObserver(requestMeasure);
    if (navbar) observer.observe(navbar);

    measure();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestMeasure);
    window.addEventListener("orientationchange", requestMeasure);
    document.fonts?.ready.then(requestMeasure).catch(() => {});

    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(measureFrame);
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestMeasure);
      window.removeEventListener("orientationchange", requestMeasure);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className={twLanding("section-shell section-space process-section")}
      aria-labelledby="process-heading"
      data-stacking="false"
    >
      <div className="process-topline">
        <div className="process-headingCopy">
          <p className={twLanding("section-kicker")}>How we bring you online</p>
          <h2 id="process-heading" className={twLanding("section-heading")}>
            From understanding your business<br />to connecting it online.
          </h2>
        </div>
        <div className="process-intro">
          <p className={twLanding("section-intro")}>
            Five stages of a connected digital presence. We agree which services
            your project needs, then build around that scope.
          </p>
          <Link href="/how-we-work" className={twLanding("action-link")}>
            Read the full delivery guide <ArrowUpRight aria-hidden="true" />
          </Link>
          <p className="process-scrollHint" aria-hidden="true">
            <ArrowDown /> Scroll to move through the stages
          </p>
        </div>
      </div>

      <ol className="process-stack">
        {steps.map(({ title, description, details, note, icon: Icon, phase, tone }, index) => {
          const number = String(index + 1).padStart(2, "0");

          return (
            <li
              key={tone}
              className="process-step"
              style={{ "--step-index": index } as CSSProperties}
            >
              <article className={`process-card process-${tone}`} aria-labelledby={`process-step-${index}`}>
                <span className="process-ghost" aria-hidden="true">{number}</span>

                <div className="process-cardTop">
                  <span className="process-number" aria-hidden="true">
                    {number}<span> / 05</span>
                  </span>
                  <span className="process-phase">{phase}</span>
                </div>

                <div className="process-cardBody">
                  <div className="process-lead">
                    <h3 id={`process-step-${index}`}>
                      <span>{title[0]}</span>{" "}<span>{title[1]}</span>
                    </h3>
                    <p className="process-description">{description}</p>
                  </div>

                  <aside className="process-aside">
                    <span className="process-icon" aria-hidden="true">
                      <Icon strokeWidth={1.1} />
                    </span>
                    <div className="process-included">
                      <p className="process-included-label">What’s included</p>
                      <ul>
                        {details.map((detail) => (
                          <li key={detail}>
                            <Check aria-hidden="true" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </aside>
                </div>

                <div className="process-cardFooter">
                  <p className="process-note">
                    <Info aria-hidden="true" />
                    <span><strong>Good to know.</strong> {note}</span>
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
