import { twLanding } from "@/lib/landing-styles";

export type ServiceType = "web" | "social" | "ai";

function BrowserPlane({ interactive = false }: { interactive?: boolean }) {
  return (
    <g transform="matrix(1 .48 -1 .48 200 57)">
      <path d="M0 106v4l130 0v-4M130 0h4v106h-4" className="iso-edge" />
      <rect width="130" height="106" rx="5" className="iso-surface" />
      <path d="M0 18h130" />
      <g className="iso-detail">
        <circle cx="10" cy="9" r="1.5" /><circle cx="17" cy="9" r="1.5" /><circle cx="24" cy="9" r="1.5" />
        <rect x="10" y="28" width="24" height="67" rx="2" />
        <path d="M15 36h14m-14 8h10m-10 8h12" />
        <rect x="44" y="28" width="75" height="32" rx="2" />
        <rect x="44" y="69" width="32" height="26" rx="2" />
        <rect x="85" y="69" width="34" height="26" rx="2" />
        <path d="M53 39h36m-36 8h55" />
        {interactive && (
          <>
            <path d="m55 82 4 4 9-10" className="iso-web-check" />
            <path d="m105 69 2 13 4-4 4 2 2-3-4-2 4-3Z" className="iso-surface iso-web-cursor" />
          </>
        )}
      </g>
    </g>
  );
}

function WebVisual() {
  return (
    <>
      <g className="iso-lift iso-web-rear" opacity=".3"><g transform="translate(0 76)"><BrowserPlane /></g></g>
      <g className="iso-lift iso-web-middle" opacity=".55"><g transform="translate(0 42)"><BrowserPlane /></g></g>
      <g className="iso-lift iso-web-front"><BrowserPlane interactive /></g>
    </>
  );
}

function SocialPost({ simple = false }: { simple?: boolean }) {
  return (
    <g>
      <path d="M3 0 6-2h116v155l-4 2" className="iso-edge" />
      <rect width="118" height="155" rx="5" className="iso-surface" />
      <g className="iso-detail">
        <circle cx="15" cy="15" r="5" /><path d="M27 13h36m-36 5h24M96 15h10" />
        <rect x="10" y="29" width="98" height="91" rx="2" />
        {simple ? <path d="M24 100l25-38 18 23 15-17 15 32" /> : (
          <g className="iso-social-art">
            <circle cx="59" cy="73" r="25" />
            <path d="M34 73h50M59 48v50M42 55l34 36M76 55 42 91" />
            <circle cx="59" cy="73" r="11" />
          </g>
        )}
        <path className="iso-social-heart" d="M17 136l-6-5a4 4 0 0 1 6-5 4 4 0 0 1 6 5z" />
        <path d="M32 126h8v7h-5l-3 3zM50 126l10 4-6 2-1 6zM11 145h65" />
      </g>
    </g>
  );
}

function SocialVisual() {
  return (
    <>
      <g className="iso-lift iso-social-rear" opacity=".3"><g transform="translate(90 43) skewY(18)"><SocialPost simple /></g></g>
      <g className="iso-lift iso-social-middle" opacity=".55"><g transform="translate(126 52) skewY(18)"><SocialPost simple /></g></g>
      <g className="iso-lift iso-social-front"><g transform="translate(162 61) skewY(18)"><SocialPost /></g></g>
      <g className="iso-social-feedback iso-detail">
        <path d="M313 124v10m-5-5h10M77 189v8m-4-4h8" />
        <circle cx="302" cy="205" r="3" />
      </g>
    </>
  );
}

type WorkflowStep = "message" | "ai" | "task" | "person";

function WorkflowSymbol({ step }: { step: WorkflowStep }) {
  if (step === "ai") {
    return (
      <g>
        <rect x="-17" y="-17" width="34" height="34" rx="4" className="iso-ai-chip" />
        <path d="M-10-22v5M0-22v5M10-22v5M-10 17v5M0 17v5M10 17v5M-22-10h5M-22 0h5M-22 10h5M17-10h5M17 0h5M17 10h5" className="iso-detail" />
        <text y="5" textAnchor="middle" className="iso-ai-label">AI</text>
      </g>
    );
  }

  if (step === "message") {
    return (
      <g className="iso-ai-message">
        <path d="M-11-11h22a3 3 0 0 1 3 3V7a3 3 0 0 1-3 3H-2l-7 6v-6h-2a3 3 0 0 1-3-3V-8a3 3 0 0 1 3-3Z" />
        <path d="M-7-3H7M-7 3H2" className="iso-detail" />
      </g>
    );
  }

  if (step === "task") {
    return (
      <g>
        <rect x="-11" y="-12" width="22" height="27" rx="3" />
        <path d="M-5-12v-3H5v3M-5-5H5" className="iso-detail" />
        <path d="m-5 5 4 4 7-8" pathLength="1" className="iso-ai-output-check" />
      </g>
    );
  }

  return (
    <g>
      <circle cy="-6" r="6" />
      <path d="M-12 15v-3a12 12 0 0 1 24 0v3Z" />
      <path d="M9-13h9v9h-4l-3 3v-3H9Z" className="iso-detail" />
    </g>
  );
}

function WorkflowNode({ x, y, step }: { x: number; y: number; step: WorkflowStep }) {
  const size = step === "ai" ? 42 : 33;
  const depth = step === "ai" ? 24 : 18;
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d={`M-${size} 0v${depth}L0 ${size / 2 + depth}l${size}-${size / 2}V0`} className="iso-surface" />
      <path d={`M0 ${size / 2}v${depth}`} className="iso-detail" />
      <path d={`M0-${size / 2} ${size} 0 0 ${size / 2}-${size} 0Z`} className="iso-surface" />
      <g transform="matrix(.85 .425 -.85 .425 0 0)" className="iso-ai-symbol">
        <WorkflowSymbol step={step} />
      </g>
    </g>
  );
}

function Signal({ d, stage }: { d: string; stage: "input" | "task" | "handoff" }) {
  return (
    <g className="iso-detail">
      <path d={d} />
      <path d={d} pathLength="100" className={`iso-packet iso-packet-${stage}`} />
    </g>
  );
}

function AiVisual() {
  return (
    <g className="iso-ai-flow">
      {/* These centers share exact 2:1 diagonals. Routes extend beneath each
          solid node, so their visible ends always meet the node edges. */}
      <Signal d="M84 198 198 141" stage="input" />
      <Signal d="M198 141 312 84" stage="task" />
      <Signal d="M198 141 312 198" stage="handoff" />
      <g className="iso-ai-arrows iso-detail">
        <path d="m137 167 6 1-3 5m118-65 6 1-3 5m5 61 6 5-7 1" />
      </g>
      <WorkflowNode x={312} y={84} step="task" />
      <WorkflowNode x={84} y={198} step="message" />
      <WorkflowNode x={198} y={141} step="ai" />
      <WorkflowNode x={312} y={198} step="person" />
    </g>
  );
}

export function ServiceIllustration({ type }: { type: ServiceType }) {
  return (
    <svg viewBox="0 0 400 280" aria-hidden="true" focusable="false" className={`${twLanding("service-demo-svg")} service-isometric`}>
      {type === "web" ? <WebVisual /> : type === "social" ? <SocialVisual /> : <AiVisual />}
    </svg>
  );
}
