"use client";

import { useState, type ReactNode } from "react";
import { twLanding } from "@/lib/landing-styles";
import "./service-card.css";

type ServiceType = "web" | "social" | "ai";
const labels = {
  web: "Explore the web application illustration",
  social: "Explore the social media illustration",
  ai: "Explore the AI workflow illustration",
};

function BrowserPlane() {
  return (
    <g transform="matrix(1 .48 -1 .48 200 57)">
      <rect width="130" height="106" rx="5" className="service-motion-plane" />
      <path d="M0 18h130" />
      <g className="service-motion-detail">
        <circle cx="10" cy="9" r="1.5" /><circle cx="17" cy="9" r="1.5" /><circle cx="24" cy="9" r="1.5" />
        <rect x="10" y="28" width="24" height="67" rx="2" />
        <path d="M15 36h14m-14 8h10m-10 8h12" />
        <rect x="44" y="28" width="75" height="32" rx="2" />
        <rect x="44" y="69" width="32" height="26" rx="2" />
        <rect x="85" y="69" width="34" height="26" rx="2" />
        <path d="M53 39h36m-36 8h55" />
      </g>
    </g>
  );
}

function WebVisual() {
  return (
    <svg viewBox="0 0 400 280" aria-hidden="true" className={twLanding("service-demo-svg")}>
      <g className="service-motion-lines">
        <g className="service-motion-webRear" opacity=".35">
          <g transform="translate(0 76)"><BrowserPlane /></g>
        </g>
        <g className="service-motion-webMiddle" opacity=".6">
          <g transform="translate(0 42)"><BrowserPlane /></g>
        </g>
        <g className="service-motion-webFront"><BrowserPlane /></g>
      </g>
    </svg>
  );
}

function SocialPost({ simple = false }: { simple?: boolean }) {
  return (
    <g>
      <rect width="118" height="155" rx="5" className="service-motion-plane" />
      <g className="service-motion-detail">
        <circle cx="15" cy="15" r="5" /><path d="M27 13h36m-36 5h24M96 15h10" />
        <rect x="10" y="29" width="98" height="91" rx="2" />
        {simple ? <path d="M24 100l25-38 18 23 15-17 15 32" /> : (
          <g>
            <circle cx="59" cy="73" r="25" />
            <path d="M34 73h50M59 48v50M42 55l34 36M76 55 42 91" />
            <circle cx="59" cy="73" r="11" />
          </g>
        )}
        <path className="service-motion-socialHeart" d="M17 136l-6-5a4 4 0 0 1 6-5 4 4 0 0 1 6 5z" />
        <path d="M32 126h8v7h-5l-3 3zM50 126l10 4-6 2-1 6zM11 145h65" />
      </g>
    </g>
  );
}

function SocialVisual() {
  return (
    <svg viewBox="0 0 400 280" aria-hidden="true" className={twLanding("service-demo-svg")}>
      <g className="service-motion-lines">
        <g className="service-motion-socialRear" opacity=".35">
          <g transform="translate(90 43) skewY(18)"><SocialPost simple /></g>
        </g>
        <g className="service-motion-socialMiddle" opacity=".6">
          <g transform="translate(126 52) skewY(18)"><SocialPost simple /></g>
        </g>
        <g className="service-motion-socialFront">
          <g transform="translate(162 61) skewY(18)"><SocialPost /></g>
        </g>
        <g className="service-motion-socialOrbit service-motion-detail">
          <path d="M313 124v10m-5-5h10M77 189v8m-4-4h8" />
          <circle cx="302" cy="205" r="3" />
        </g>
      </g>
    </svg>
  );
}

function WorkflowNode({ x, y, size = 36, hub = false }: { x: number; y: number; size?: number; hub?: boolean }) {
  const depth = hub ? 28 : 20;
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d={`M-${size} 0v${depth}L0 ${size / 2 + depth}l${size}-${size / 2}V0`} className="service-motion-plane" />
      <path d={`M0 ${size / 2}v${depth}`} className="service-motion-detail" />
      <path d={`M0-${size / 2} ${size} 0 0 ${size / 2}-${size} 0Z`} className="service-motion-plane" />
      {hub ? <path d="M0-9 4-2 14 0 4 2 0 9-4 2-14 0-4-2Z" className="service-motion-detail" /> : (
        <g className="service-motion-detail">
          <path className="service-motion-nodeIdle" d="M-8-2 0-6 8-2 0 2Z" />
          <path className="service-motion-nodeTick" d="m-7 0 5 3 10-6" />
        </g>
      )}
    </g>
  );
}

function AiVisual() {
  return (
    <svg viewBox="0 0 400 280" aria-hidden="true" className={twLanding("service-demo-svg")}>
      <g className="service-motion-lines">
        <g className="service-motion-detail" fill="none">
          <path d="M108 184l48-44M229 113l51-36M233 147l54 43" />
          <path strokeDasharray="1 4" d="M109 192l48-44M232 121l50-36M233 155l54 43" />
        </g>
        <g className="service-motion-aiSource"><WorkflowNode x={83} y={193} size={31} /></g>
        <g className="service-motion-aiTop"><WorkflowNode x={309} y={61} size={37} /></g>
        <g className="service-motion-aiBottom"><WorkflowNode x={312} y={203} size={35} /></g>
        <g className="service-motion-aiHub"><WorkflowNode x={199} y={130} size={44} hub /></g>
        <g className="service-motion-aiSignal" fill="currentColor" stroke="none">
          <circle cx="126" cy="168" r="2" /><circle cx="255" cy="95" r="2" /><circle cx="260" cy="167" r="2" />
        </g>
      </g>
    </svg>
  );
}

export function ServiceCard({ type, children }: { type: ServiceType; children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className={`${twLanding("service-item")} service-motion-card`} data-expanded={expanded}>
      <button
        type="button"
        className={`${twLanding("service-demo")} service-motion-demo`}
        aria-label={labels[type]}
        aria-pressed={expanded}
        onClick={() => setExpanded(value => !value)}
        onKeyDown={event => { if (event.key === "Escape") setExpanded(false); }}
      >
        {type === "web" ? <WebVisual /> : type === "social" ? <SocialVisual /> : <AiVisual />}
      </button>
      {children}
    </article>
  );
}
