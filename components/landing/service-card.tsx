"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ServiceIllustration, type ServiceType } from "@/components/landing/service-illustrations";
import { twLanding } from "@/lib/landing-styles";
import "./service-card.css";

const labels = {
  web: "Explore the web application illustration",
  social: "Explore the social media illustration",
  ai: "Explore the AI workflow illustration",
};

export function ServiceCard({ type, children }: { type: ServiceType; children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const [inView, setInView] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { threshold: 0.25 });
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`${twLanding("service-item")} service-motion-card`}
      data-service={type}
      data-expanded={expanded}
      data-in-view={inView}
    >
      <button
        type="button"
        className={`${twLanding("service-demo")} service-motion-demo`}
        aria-label={labels[type]}
        aria-pressed={expanded}
        onClick={() => setExpanded(value => !value)}
        onKeyDown={event => { if (event.key === "Escape") setExpanded(false); }}
      >
        <ServiceIllustration type={type} />
      </button>
      {children}
    </article>
  );
}
