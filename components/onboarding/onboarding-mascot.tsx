export type MascotMood = "welcome" | "thinking" | "happy" | "celebrate";

type OnboardingMascotProps = {
  mood?: MascotMood;
  className?: string;
};

/** Shift is decorative; the accompanying question provides the accessible guidance. */
export function OnboardingMascot({
  mood = "welcome",
  className = "",
}: OnboardingMascotProps) {
  const delighted = mood === "happy" || mood === "celebrate";

  return (
    <svg
      className={`ob-mascot ${className}`.trim()}
      data-mood={mood}
      viewBox="0 0 200 200"
      width="200"
      height="200"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse className="ob-mascot-shadow" cx="100" cy="181" rx="49" ry="7" fill="#075C3F" opacity=".1" />
      <g className="ob-mascot-spark" fill="#D5FA43">
        <path d="m160 25 3.5 9.5L173 38l-9.5 3.5L160 51l-3.5-9.5L147 38l9.5-3.5L160 25Z" />
        {mood === "celebrate" && (
          <>
            <path d="m32 41 2.5 6.5L41 50l-6.5 2.5L32 59l-2.5-6.5L23 50l6.5-2.5L32 41Z" />
            <circle cx="174" cy="94" r="4" />
            <path d="m22 110 7 6M162 65l6-5" stroke="#08734F" strokeWidth="4" strokeLinecap="round" />
          </>
        )}
      </g>
      <g className="ob-mascot-body">
        <g className="ob-mascot-flame">
          <path d="M86 152c-5 14 0 27 14 35 14-8 19-21 14-35H86Z" fill="#D5FA43" />
          <path d="M94 153c-4 11-1 18 6 24 7-6 10-13 6-24H94Z" fill="#FFFCEB" />
        </g>
        <path d="M73 145v22m54-22v22" stroke="#075C3F" strokeWidth="11" strokeLinecap="round" />
        <path d="M78 166H66c-6 0-10 4-10 10v1h25v-8a3 3 0 0 0-3-3Zm44 0h12c6 0 10 4 10 10v1h-25v-8a3 3 0 0 1 3-3Z" fill="#075C3F" />
        <path d="M57 173h23m40 0h23" stroke="#9ED9B8" strokeWidth="3" strokeLinecap="round" />
        <g className="ob-mascot-arm-left">
          <path d={mood === "celebrate" ? "M57 119C41 114 36 103 33 90" : "M56 117c-13 1-21 10-25 20"} stroke="#075C3F" strokeWidth="14" strokeLinecap="round" />
          <circle cx={mood === "celebrate" ? 32 : 29} cy={mood === "celebrate" ? 87 : 139} r="10" fill="#9ED9B8" />
          <path d={mood === "celebrate" ? "m28 79 2 8m8-6-3 7" : "m25 136 4 4 5-3"} stroke="#075C3F" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <g className="ob-mascot-arm-right">
          <path d={mood === "thinking" ? "M144 117c15 0 15 14-2 14" : "M144 117c15-1 22-11 22-25"} stroke="#075C3F" strokeWidth="14" strokeLinecap="round" />
          <circle cx={mood === "thinking" ? 143 : 166} cy={mood === "thinking" ? 130 : 87} r="11" fill="#9ED9B8" />
          <path d={mood === "thinking" ? "m139 126 4 3 5-2" : "m162 78 1 9m7-7-3 8"} stroke="#075C3F" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <path d="M54 86c0-29 20-49 38-61a14 14 0 0 1 16 0c18 12 38 32 38 61v48c0 18-13 29-31 29H85c-18 0-31-11-31-29V86Z" fill="#9ED9B8" />
        <path d="M92 25a14 14 0 0 1 16 0c12 8 25 21 32 36H60c7-15 20-28 32-36Z" fill="#08734F" />
        <path d="M94 31c-9 6-17 14-22 21" stroke="#4C9B73" strokeWidth="5" strokeLinecap="round" />
        <path d="M132 66c6 10 8 21 8 34v32c0 15-10 25-25 25H86" stroke="#7DC59C" strokeWidth="7" strokeLinecap="round" />
        <rect x="61" y="74" width="78" height="61" rx="26" fill="#075C3F" />
        <rect x="65" y="77" width="70" height="53" rx="23" fill="#F4FCF5" />
        <g className="ob-mascot-eyes" stroke="#233E32" strokeWidth="4.5" strokeLinecap="round">
          {delighted ? (
            <>
              <path d="M78 99c3-5 8-5 11 0m22 0c3-5 8-5 11 0" />
            </>
          ) : (
            <>
              <path d={mood === "thinking" ? "M85 92v8m32-9v8" : "M84 92v9m32-9v9"} />
              <circle cx="85" cy="92" r="1.2" fill="#FFF" stroke="none" />
              <circle cx="117" cy="92" r="1.2" fill="#FFF" stroke="none" />
            </>
          )}
        </g>
        <ellipse cx="77" cy="110" rx="5" ry="3" fill="#9ED9B8" />
        <ellipse cx="123" cy="110" rx="5" ry="3" fill="#9ED9B8" />
        {mood === "thinking" ? (
          <path d="M96 113h8" stroke="#233E32" strokeWidth="3" strokeLinecap="round" />
        ) : delighted ? (
          <path d="M91 108h18c-1 8-5 12-9 12s-8-4-9-12Z" fill="#233E32" />
        ) : (
          <path d="M92 110c4 5 12 5 16 0" stroke="#233E32" strokeWidth="3" strokeLinecap="round" />
        )}
        <path d="m94 141 10-4-2 7h8l-13 11 2-9h-8l3-5Z" fill="#075C3F" />
      </g>
    </svg>
  );
}
