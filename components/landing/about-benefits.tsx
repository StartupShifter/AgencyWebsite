"use client";

import { useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

function ResearchVisual() {
  return (
    <svg viewBox="60 0 260 220" aria-hidden="true">
      <g className="aboutBenefits-lines">
        <g opacity=".28" transform="translate(-18 21)">
          <g transform="matrix(.95 .42 -.95 .42 181 31)"><rect width="118" height="140" rx="4" className="aboutBenefits-plane" /></g>
        </g>
        <g className="aboutBenefits-researchSheet">
          <g transform="matrix(.95 .42 -.95 .42 181 31)">
            <rect width="118" height="140" rx="4" className="aboutBenefits-plane" />
            <g className="aboutBenefits-detail"><path d="M16 23h53M16 34h84M16 44h65M16 65h86M16 91h86M16 117h86" /><path d="M23 83V73h12v10m12 0V70h12v13m12 0V63h12v20m12 0V59h7v24" /></g>
            <g className="aboutBenefits-researchFinding"><circle cx="24" cy="105" r="5" /><path d="m21 105 2 2 4-4M39 105h46" /></g>
          </g>
        </g>
        <g className="aboutBenefits-lens">
          <circle cx="247" cy="124" r="23" className="aboutBenefits-plane" /><circle cx="247" cy="124" r="17" opacity=".3" />
          <path d="m263 141 18 18m-39-39h10m-5-5v10" />
        </g>
      </g>
    </svg>
  );
}

function ConnectionNode({ x, y, hub = false }: { x: number; y: number; hub?: boolean }) {
  return <g transform={`translate(${x} ${y})`}>
    <path d="M-27 0v15L0 29l27-14V0M0 14v15" className="aboutBenefits-plane" />
    <path d="M0-14 27 0 0 14-27 0Z" className="aboutBenefits-plane" />
    {hub ? <path d="M-10 0 0-5 10 0 0 5Zm10-5v10" className="aboutBenefits-detail" /> : <g className="aboutBenefits-detail"><path d="M-7 0 0-4 7 0 0 4Z" className="aboutBenefits-nodeIdle" /><path d="m-7 0 5 3 9-6" className="aboutBenefits-nodeCheck" /></g>}
  </g>;
}

function IntegrationsVisual() {
  return (
    <svg viewBox="0 0 360 220" aria-hidden="true">
      <g className="aboutBenefits-lines">
        <g className="aboutBenefits-detail"><path d="m104 123 49-29m51-6 50-29m-49 45 51 28" /><path strokeDasharray="1 5" d="m104 132 49-29m51-6 50-29m-49 45 51 28" /></g>
        <g className="aboutBenefits-connectLeft"><ConnectionNode x={80} y={139} /></g>
        <g className="aboutBenefits-connectTop"><ConnectionNode x={280} y={47} /></g>
        <g className="aboutBenefits-connectBottom"><ConnectionNode x={280} y={147} /></g>
        <g className="aboutBenefits-connectHub"><ConnectionNode x={180} y={96} hub /></g>
        <g className="aboutBenefits-signals" fill="currentColor" stroke="none"><circle className="aboutBenefits-signalIn" cx="136" cy="105" r="2" /><circle className="aboutBenefits-signalOut" cx="237" cy="69" r="2" /><circle className="aboutBenefits-signalDown" cx="237" cy="123" r="2" /></g>
      </g>
    </svg>
  );
}

function BrowserPlane() {
  return <g transform="matrix(1 .43 -1 .43 181 28)">
    <rect width="125" height="100" rx="4" className="aboutBenefits-plane" /><path d="M0 16h125" />
    <g className="aboutBenefits-detail"><circle cx="9" cy="8" r="1" /><circle cx="15" cy="8" r="1" /><circle cx="21" cy="8" r="1" /><rect x="10" y="27" width="25" height="61" rx="2" /><rect x="44" y="27" width="71" height="27" rx="2" /><rect x="44" y="64" width="31" height="24" rx="2" /><rect x="84" y="64" width="31" height="24" rx="2" /><path d="M16 37h13m-13 8h9M52 37h35m-35 8h53" /></g>
  </g>;
}

function WebsiteVisual() {
  return <svg viewBox="75 5 240 175" aria-hidden="true"><g className="aboutBenefits-lines">
    <g className="aboutBenefits-webRear" opacity=".25"><g transform="translate(0 44)"><BrowserPlane /></g></g>
    <g className="aboutBenefits-webMiddle" opacity=".5"><g transform="translate(0 22)"><BrowserPlane /></g></g>
    <g className="aboutBenefits-webFront"><BrowserPlane /></g>
  </g></svg>;
}

function SocialPlane({ main = false }: { main?: boolean }) {
  return <g>
    <rect width="78" height="108" rx="4" className="aboutBenefits-plane" />
    <g className="aboutBenefits-detail"><circle cx="12" cy="11" r="3" /><path d="M22 9h27m-27 5h18" /><rect x="8" y="23" width="62" height="58" rx="2" />
      {main ? <g><circle cx="39" cy="52" r="18" /><path d="M21 52h36M39 34v36" /><circle cx="39" cy="52" r="8" /></g> : <path d="m14 70 17-24 13 16 9-12 12 20" />}
      <path d="M9 91h7v6h-7Zm16 0h7v6h-7ZM9 103h41" />
    </g>
  </g>;
}

function SocialVisual() {
  return <svg viewBox="75 25 225 175" aria-hidden="true"><g className="aboutBenefits-lines">
    <g className="aboutBenefits-socialRear" opacity=".25"><g transform="translate(107 43) skewY(18)"><SocialPlane /></g></g>
    <g className="aboutBenefits-socialMiddle" opacity=".5"><g transform="translate(139 50) skewY(18)"><SocialPlane /></g></g>
    <g className="aboutBenefits-socialFront"><g transform="translate(171 57) skewY(18)"><SocialPlane main /></g></g>
    <g className="aboutBenefits-socialReach"><circle cx="282" cy="105" r="3" /><path d="M270 81v8m-4-4h8M93 144v8m-4-4h8" /></g>
  </g></svg>;
}

function SupportVisual() {
  return <svg viewBox="65 30 240 155" aria-hidden="true"><g className="aboutBenefits-lines">
    <path d="M126 109c0 31 13 39 47 39m79-27h23V82" className="aboutBenefits-supportRoute" strokeDasharray="2 5" />
    <g className="aboutBenefits-supportQuestion"><path d="M83 54h105a5 5 0 0 1 5 5v45a5 5 0 0 1-5 5h-73l-13 12v-12H83a5 5 0 0 1-5-5V59a5 5 0 0 1 5-5Z" className="aboutBenefits-plane" /><g className="aboutBenefits-detail"><path d="M93 70h61m-61 10h83m-83 10h43" /></g></g>
    <g className="aboutBenefits-supportReply"><path d="M164 112h88a5 5 0 0 1 5 5v39a5 5 0 0 1-5 5h-13v11l-13-11h-62a5 5 0 0 1-5-5v-39a5 5 0 0 1 5-5Z" className="aboutBenefits-plane" /><path d="m174 130 5 5 9-10" /><path d="M198 128h42m-42 10h32m-42 10h20" className="aboutBenefits-detail" /></g>
    <g className="aboutBenefits-supportPerson"><circle cx="279" cy="62" r="19" className="aboutBenefits-plane" /><circle cx="279" cy="57" r="4" /><path d="M270 71c0-10 18-10 18 0" /></g>
  </g></svg>;
}

function PerformanceVisual() {
  return <svg viewBox="0 0 360 220" aria-hidden="true"><g className="aboutBenefits-lines">
    <g className="aboutBenefits-detail"><path d="M55 161h247M55 49v112" /><path d="M55 132h247M55 104h247M55 76h247" opacity=".2" /><path d="M66 149c33 0 40-49 67-44s37 46 65 16 47-3 89-60" opacity=".5" /></g>
    <path className="aboutBenefits-performanceCurve" pathLength="1" d="M66 148c32 0 37-39 65-43s36 35 64 2 50-1 92-49" />
    <g className="aboutBenefits-performanceLens"><circle cx="183" cy="120" r="21" className="aboutBenefits-plane" /><path d="m198 136 17 17" /><circle className="aboutBenefits-performanceIssue" cx="183" cy="120" r="3" /><path className="aboutBenefits-performanceCheck" d="m175 120 5 5 11-11" /></g>
    <g className="aboutBenefits-performanceFinding"><path d="M257 31h37v20h-37Z" className="aboutBenefits-plane" /><path d="m264 41 4 3 6-7m6 4h8" /></g>
  </g></svg>;
}

function BenefitCard({ type, title, description, children }: { type: string; title: string; description: string; children: ReactNode }) {
  const [active, setActive] = useState(false);
  return <article className={`aboutBenefits-card aboutBenefits-${type}`} data-active={active}>
    <button
      type="button"
      className="aboutBenefits-art"
      aria-label={`Explore ${title.toLowerCase()} illustration`}
      aria-pressed={active}
      onClick={(event) => {
        // Hover drives desktop; tapping the artwork gives touch users the same view.
        if (event.detail === 0 || window.matchMedia("(hover: none)").matches) setActive((current) => !current);
      }}
      onKeyDown={(event) => { if (event.key === "Escape") setActive(false); }}
    >{children}</button>
    <div className="aboutBenefits-cardCopy"><h3>{title}</h3><p>{description}</p></div>
  </article>;
}

export function AboutBenefits() {
  return <div className="aboutBenefits-grid">
    <div className="aboutBenefits-column">
      <BenefitCard type="research" title="Clarity before you build" description="Research that gives your next move direction."><ResearchVisual /></BenefitCard>
      <BenefitCard type="integrations" title="Your tools, connected" description="Supported connections. Fewer manual steps."><IntegrationsVisual /></BenefitCard>
    </div>
    <div className="aboutBenefits-column aboutBenefits-middle">
      <BenefitCard type="website" title="Your business, online" description="A website or store shaped around you."><WebsiteVisual /></BenefitCard>
      <BenefitCard type="social" title="A consistent social presence" description="Your brand, carried into pages and templates."><SocialVisual /></BenefitCard>
      <BenefitCard type="automation" title="Support with a human touch" description="AI for the routine. Your team when it matters."><SupportVisual /></BenefitCard>
    </div>
    <div className="aboutBenefits-column">
      <a href="#contact" className="aboutBenefits-card aboutBenefits-cta">
        <ArrowUpRight className="aboutBenefits-ctaArrow" aria-hidden="true" />
        <div className="aboutBenefits-ctaCopy"><h3>Let’s make your<br />next move digital.</h3><span>Talk about your project <ArrowUpRight aria-hidden="true" /></span></div>
      </a>
      <BenefitCard type="performance" title="See what needs attention" description="Find bottlenecks. Focus on better performance."><PerformanceVisual /></BenefitCard>
    </div>
  </div>;
}
