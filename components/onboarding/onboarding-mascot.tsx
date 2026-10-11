export type MascotMood = "welcome" | "thinking" | "happy" | "celebrate";

/** A small brand-arrow companion; all guidance is provided by adjacent text. */
export function OnboardingMascot({ mood = "welcome", className = "" }: { mood?: MascotMood; className?: string }) {
  const happy = mood === "happy" || mood === "celebrate";
  return <svg className={`ob-mascot ${className}`.trim()} data-mood={mood} viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true" focusable="false">
    <ellipse cx="100" cy="177" rx="53" ry="8" fill="#075C3F" opacity=".12" />
    <path d="M76 149v20m48-20v20" stroke="#075C3F" strokeWidth="10" strokeLinecap="round" />
    <path d="M62 170h18m40 0h18" stroke="#075C3F" strokeWidth="10" strokeLinecap="round" />
    <path d={mood === "celebrate" ? "M46 112 28 86" : "M46 113 30 128"} stroke="#075C3F" strokeWidth="9" strokeLinecap="round" />
    <path d={mood === "thinking" ? "M153 113q21 9 5 19" : "M153 110q23-2 20-26"} stroke="#075C3F" strokeWidth="9" strokeLinecap="round" />
    <rect x="44" y="41" width="112" height="114" rx="32" fill="#075C3F" />
    <rect x="41" y="35" width="112" height="114" rx="32" fill="#D5FA43" />
    <path d="m69 80 27-27h27v27M95 54h27" stroke="#075C3F" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
    <g stroke="#233E32" strokeWidth="5" strokeLinecap="round">
      {happy ? <path d="M71 107q5-7 10 0m27 0q5-7 10 0" /> : <path d="M77 103v7m36-7v7" />}
      <path d={mood === "thinking" ? "M93 121h10" : "M91 120q8 8 16 0"} strokeWidth="3.5" />
    </g>
    <circle cx="170" cy="80" r="8" fill="#9ED9B8" />
    {mood === "celebrate" && <g fill="#9ED9B8"><path d="m167 26 3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" /><circle cx="26" cy="45" r="4" /></g>}
  </svg>;
}
