"use client";

import { useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

function ResearchVisual() {
  return (
    <svg viewBox="60 0 260 220" aria-hidden="true">
      <path className="aboutBenefits-ground" d="m68 139 96 42 110-49-98-43Z" />
      <g className="aboutBenefits-lines">
        <g opacity=".34" transform="translate(-15 20)">
          <path d="m48 89.8 112.1 49.56v8L48 97.8Zm112.1 49.56L293 80.56v8l-132.9 58.8Z" className="aboutBenefits-right" />
          <g transform="matrix(.95 .42 -.95 .42 181 31)"><rect width="118" height="140" rx="4" className="aboutBenefits-top" /></g>
        </g>
        <g className="aboutBenefits-researchSheet">
          <path d="m48 89.8 112.1 49.56v9L48 98.8Z" className="aboutBenefits-left" />
          <path d="m160.1 139.36 133-58.8v9l-133 58.8Z" className="aboutBenefits-right" />
          <g transform="matrix(.95 .42 -.95 .42 181 31)">
            <rect width="118" height="140" rx="4" className="aboutBenefits-top" />
            <rect x="16" y="18" width="26" height="6" rx="3" className="aboutBenefits-accentSoft" />
            <g className="aboutBenefits-detail"><path d="M16 34h84M16 44h65M16 65h86M16 117h86" /></g>
            <g className="aboutBenefits-chartBars">
              <path d="M23 84V73h12v11Zm24 0V70h12v14Zm24 0V63h12v21Zm24 0V59h12v25Z" className="aboutBenefits-accent" />
              <path d="M19 88h91" className="aboutBenefits-detail" />
            </g>
            <g className="aboutBenefits-researchFinding">
              <circle cx="24" cy="105" r="6" className="aboutBenefits-accentSoft" />
              <path d="m21 105 2 2 4-4M39 105h46" />
            </g>
            <path d="M14 105h92" className="aboutBenefits-researchScan" />
          </g>
        </g>
        <g className="aboutBenefits-lens">
          <ellipse cx="264" cy="158" rx="25" ry="7" className="aboutBenefits-contactShadow" />
          <path d="m259 135 8-4 20 24-7 7Z" className="aboutBenefits-right" />
          <path d="m259 135 5 5 20 20 3-5-20-24Z" className="aboutBenefits-left" />
          <circle cx="249" cy="127" r="25" className="aboutBenefits-right" />
          <circle cx="247" cy="124" r="25" className="aboutBenefits-top" />
          <circle cx="247" cy="124" r="18" className="aboutBenefits-lensGlass" />
          <path d="M236 130l6-9 6 3 10-12" />
          <circle cx="258" cy="112" r="2.5" className="aboutBenefits-accent" />
          <path d="M236 115a15 15 0 0 1 8-5" className="aboutBenefits-objectHighlight" />
        </g>
      </g>
    </svg>
  );
}

function ConnectionNode({ x, y, hub = false }: { x: number; y: number; hub?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cy="35" rx="29" ry="8" className="aboutBenefits-contactShadow" />
      <g transform={hub ? "scale(1.08)" : undefined}>
        <path d="M-27 0 0 14v15l-27-14Z" className="aboutBenefits-left" />
        <path d="M0 14 27 0v15L0 29Z" className="aboutBenefits-right" />
        <path d="M0-14 27 0 0 14-27 0Z" className="aboutBenefits-top" />
        {hub ? (
          <g><path d="M-11 0 0-6 11 0 0 6Zm11-6v12M-11 0l11 6 11-6" className="aboutBenefits-detail" /><circle r="3" className="aboutBenefits-accent" /></g>
        ) : (
          <g className="aboutBenefits-detail">
            <path d="M-7 0 0-4 7 0 0 4Z" className="aboutBenefits-nodeIdle" />
            <path d="m-7 0 5 3 9-6" pathLength="1" className="aboutBenefits-nodeCheck" />
          </g>
        )}
      </g>
    </g>
  );
}

function IntegrationsVisual() {
  return (
    <svg viewBox="0 0 360 220" aria-hidden="true">
      <g className="aboutBenefits-lines">
        <g className="aboutBenefits-detail">
          <path d="m104 123 49-29m51-6 50-29m-49 45 51 28" className="aboutBenefits-routeBase" />
          <path d="m104 123 49-29m51-6 50-29m-49 45 51 28" className="aboutBenefits-routePulse" />
        </g>
        <g className="aboutBenefits-connectLeft"><ConnectionNode x={80} y={139} /></g>
        <g className="aboutBenefits-connectTop"><ConnectionNode x={280} y={47} /></g>
        <g className="aboutBenefits-connectBottom"><ConnectionNode x={280} y={147} /></g>
        <g className="aboutBenefits-connectHub"><ConnectionNode x={180} y={96} hub /></g>
        <g className="aboutBenefits-signals" fill="currentColor" stroke="none">
          <circle className="aboutBenefits-signalIn" cx="136" cy="105" r="2.5" />
          <circle className="aboutBenefits-signalOut" cx="237" cy="69" r="2.5" />
          <circle className="aboutBenefits-signalDown" cx="237" cy="123" r="2.5" />
        </g>
      </g>
    </svg>
  );
}

function BrowserPlane({ simple = false }: { simple?: boolean }) {
  return (
    <g>
      <path d="m81 71 125 53.75v7L81 78Z" className="aboutBenefits-left" />
      <path d="m206 124.75 100-43v7l-100 43Z" className="aboutBenefits-right" />
      <g transform="matrix(1 .43 -1 .43 181 28)">
        <rect width="125" height="100" rx="4" className="aboutBenefits-top" />
        <path d="M0 4a4 4 0 0 1 4-4h117a4 4 0 0 1 4 4v12H0Z" className="aboutBenefits-browserBar" />
        <path d="M0 16h125" />
        <g className="aboutBenefits-detail"><circle cx="9" cy="8" r="1.3" /><circle cx="15" cy="8" r="1.3" /><circle cx="21" cy="8" r="1.3" /><path d="M35 8h66" /></g>
        <rect x="10" y="27" width="25" height="61" rx="2" className="aboutBenefits-browserSidebar" />
        {!simple && (
          <>
            <rect x="44" y="27" width="71" height="27" rx="2" className="aboutBenefits-accentSoft" />
            <rect x="44" y="64" width="31" height="24" rx="2" className="aboutBenefits-browserTile" />
            <rect x="84" y="64" width="31" height="24" rx="2" className="aboutBenefits-browserTile" />
            <g className="aboutBenefits-detail"><path d="M16 37h13m-13 8h9m-9 8h12M52 37h24m-24 8h43M52 72h14m-14 7h10m30-7h14m-14 7h9" /></g>
            <rect x="85" y="42" width="22" height="6" rx="3" className="aboutBenefits-accent" />
            <g className="aboutBenefits-webCursor">
              <circle cx="61" cy="74" r="7" className="aboutBenefits-top" />
              <path d="m57 74 3 3 6-7" />
            </g>
          </>
        )}
      </g>
    </g>
  );
}

function WebsiteVisual() {
  return (
    <svg viewBox="75 5 240 175" aria-hidden="true">
      <g className="aboutBenefits-lines">
        <g className="aboutBenefits-webRear" opacity=".34"><g transform="translate(0 44)"><BrowserPlane simple /></g></g>
        <g className="aboutBenefits-webMiddle" opacity=".64"><g transform="translate(0 22)"><BrowserPlane simple /></g></g>
        <g className="aboutBenefits-webFront"><BrowserPlane /></g>
      </g>
    </svg>
  );
}

function SocialPlane({ main = false }: { main?: boolean }) {
  return (
    <g>
      <path d="M4 0 10-5h75l-7 5Z" className="aboutBenefits-top" />
      <path d="m78 0 7-5v108l-7 5Z" className="aboutBenefits-right" />
      <rect width="78" height="108" rx="4" className="aboutBenefits-top" />
      <g className="aboutBenefits-detail"><circle cx="12" cy="11" r="3" /><path d="M22 9h27m-27 5h18M63 11h7" /></g>
      <rect x="8" y="23" width="62" height="58" rx="3" className={main ? "aboutBenefits-accentSoft" : "aboutBenefits-browserTile"} />
      {main ? (
        <g>
          <circle cx="39" cy="52" r="17" className="aboutBenefits-socialDisc" />
          <path d="M25 59c7-1 7-14 14-14s7 14 14 14M28 45c6 1 7 14 14 14" />
          <circle cx="53" cy="39" r="4" className="aboutBenefits-accent" />
        </g>
      ) : <path d="m14 70 17-24 13 16 9-12 12 20" className="aboutBenefits-detail" />}
      <path className="aboutBenefits-socialHeart" d="M17 96l-6-5a4 4 0 0 1 6-5 4 4 0 0 1 6 5Z" />
      <path d="M28 90h7v6h-5l-3 3v-3Zm18 0h12M28 103h32" className="aboutBenefits-detail" />
    </g>
  );
}

function SocialVisual() {
  return (
    <svg viewBox="75 25 225 175" aria-hidden="true">
      <g className="aboutBenefits-lines">
        <g className="aboutBenefits-socialRear" opacity=".34"><g transform="translate(107 43) skewY(18)"><SocialPlane /></g></g>
        <g className="aboutBenefits-socialMiddle" opacity=".64"><g transform="translate(139 50) skewY(18)"><SocialPlane /></g></g>
        <g className="aboutBenefits-socialFront"><g transform="translate(171 57) skewY(18)"><SocialPlane main /></g></g>
        <g className="aboutBenefits-socialReach"><path d="M270 81v9m-4.5-4.5h9M93 144v9m-4.5-4.5h9" /><circle cx="282" cy="105" r="4" className="aboutBenefits-accentSoft" /><circle cx="282" cy="105" r="1.5" className="aboutBenefits-accent" /></g>
      </g>
    </svg>
  );
}

function SupportVisual() {
  return (
    <svg viewBox="65 30 240 155" aria-hidden="true">
      <path d="m100 132 69 30 90-40-70-30Z" className="aboutBenefits-ground" />
      <g className="aboutBenefits-lines">
        <path d="M126 109c0 31 13 39 47 39m79-27h23V82" className="aboutBenefits-supportRoute" strokeDasharray="2 5" />
        <g className="aboutBenefits-supportQuestion">
          <path d="M83 54h105a5 5 0 0 1 5 5v45a5 5 0 0 1-5 5h-73l-13 12v-12H83a5 5 0 0 1-5-5V59a5 5 0 0 1 5-5Z" transform="translate(4 6)" className="aboutBenefits-right" />
          <path d="M83 54h105a5 5 0 0 1 5 5v45a5 5 0 0 1-5 5h-73l-13 12v-12H83a5 5 0 0 1-5-5V59a5 5 0 0 1 5-5Z" className="aboutBenefits-top" />
          <rect x="92" y="65" width="23" height="6" rx="3" className="aboutBenefits-accentSoft" />
          <g className="aboutBenefits-detail"><path d="M123 68h48M93 82h83m-83 10h52" /><circle cx="174" cy="92" r="5" /><path d="m171 92 2 2 4-4" className="aboutBenefits-supportAcknowledge" pathLength="1" /></g>
        </g>
        <g className="aboutBenefits-supportReply">
          <path d="M164 112h88a5 5 0 0 1 5 5v39a5 5 0 0 1-5 5h-13v11l-13-11h-62a5 5 0 0 1-5-5v-39a5 5 0 0 1 5-5Z" transform="translate(4 6)" className="aboutBenefits-right" />
          <path d="M164 112h88a5 5 0 0 1 5 5v39a5 5 0 0 1-5 5h-13v11l-13-11h-62a5 5 0 0 1-5-5v-39a5 5 0 0 1 5-5Z" className="aboutBenefits-top" />
          <circle cx="180" cy="135" r="10" className="aboutBenefits-accentSoft" />
          <path d="m174 135 4 4 8-9" className="aboutBenefits-supportAcknowledge" pathLength="1" />
          <path d="M198 128h42m-42 10h32m-42 10h20" className="aboutBenefits-detail" />
        </g>
        <g className="aboutBenefits-supportPerson">
          <circle cx="282" cy="65" r="20" className="aboutBenefits-right" />
          <circle cx="279" cy="62" r="20" className="aboutBenefits-top" />
          <circle cx="279" cy="57" r="4" /><path d="M270 71c0-10 18-10 18 0" />
          <circle cx="292" cy="73" r="6" className="aboutBenefits-accent" />
          <path d="m289 73 2 2 4-4" pathLength="1" className="aboutBenefits-supportAcknowledge" />
        </g>
      </g>
    </svg>
  );
}

function PerformanceVisual() {
  return (
    <svg viewBox="0 0 360 220" aria-hidden="true">
      <path d="m37 83 131 57 145-63-133-58Z" className="aboutBenefits-ground" />
      <g className="aboutBenefits-lines">
        <path d="m73 67.667 150 64v9l-150-64Z" className="aboutBenefits-left" />
        <path d="m223 131.667 100-42.667v9l-100 42.667Z" className="aboutBenefits-right" />
        <g transform="matrix(1 .426667 -1 .426667 173 25)">
          <rect width="150" height="100" rx="4" className="aboutBenefits-top" />
          <g className="aboutBenefits-detail" opacity=".45"><path d="M14 82h122M14 62h122M14 42h122M14 22h122M14 16v70m30-70v70m30-70v70m30-70v70m30-70v70" /></g>
          <path d="M14 82c22 0 22-32 42-29s24 32 43 7 25-1 37-38v65H14Z" className="aboutBenefits-performanceArea" />
          <path className="aboutBenefits-performanceCurve" pathLength="1" d="M14 82c22 0 22-32 42-29s24 32 43 7 25-1 37-38" />
          <path d="M14 14v72h126" />
          <g className="aboutBenefits-performancePoint"><circle cx="136" cy="22" r="5" className="aboutBenefits-accentSoft" /><circle cx="136" cy="22" r="2.5" className="aboutBenefits-accent" /></g>
        </g>
        <g className="aboutBenefits-performanceLens">
          <path d="m220 122 7-4 19 20-7 7Z" className="aboutBenefits-right" />
          <circle cx="206" cy="108" r="23" className="aboutBenefits-right" />
          <circle cx="204" cy="105" r="23" className="aboutBenefits-top" />
          <circle cx="204" cy="105" r="17" className="aboutBenefits-lensGlass" />
          <circle className="aboutBenefits-performanceIssue" cx="204" cy="105" r="3" />
          <path className="aboutBenefits-performanceCheck" pathLength="1" d="m196 105 5 5 11-11" />
          <path d="M193 97a14 14 0 0 1 7-5" className="aboutBenefits-objectHighlight" />
        </g>
        <g className="aboutBenefits-performanceFinding">
          <rect x="250" y="25" width="54" height="28" rx="5" className="aboutBenefits-top" />
          <circle cx="262" cy="39" r="6" className="aboutBenefits-accentSoft" />
          <path d="m259 39 2 2 4-4m9-3v11m-4-4 4 4 4-4" />
        </g>
      </g>
    </svg>
  );
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
      <a href="/dashboard" className="aboutBenefits-card aboutBenefits-cta">
        <ArrowUpRight className="aboutBenefits-ctaArrow" aria-hidden="true" />
        <div className="aboutBenefits-ctaCopy"><h3>Let’s make your<br />next move digital.</h3><span>Talk about your project <ArrowUpRight aria-hidden="true" /></span></div>
      </a>
      <BenefitCard type="performance" title="See what needs attention" description="Find bottlenecks. Focus on better performance."><PerformanceVisual /></BenefitCard>
    </div>
  </div>;
}
