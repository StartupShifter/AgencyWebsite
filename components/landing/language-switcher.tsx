"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useI18n } from "@/context/i18n-context";

export function LanguageSwitcher() {
  const { locale, setLocale, locales } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current = locales.find((entry) => entry.code === locale) ?? locales[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${current.native}`}
        className="inline-flex h-11 items-center gap-1.5 rounded-full px-3 text-[13px] font-medium whitespace-nowrap text-background transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background max-[480px]:px-2.5"
      >
        <Globe aria-hidden="true" className="size-4 shrink-0" />
        <span className="max-[900px]:hidden">{current.native}</span>
        <ChevronDown
          aria-hidden="true"
          className={`size-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Select language"
          className="absolute end-0 top-[calc(100%+8px)] z-50 max-h-[70vh] w-56 overflow-auto rounded-2xl border border-white/10 bg-foreground p-1.5 text-background shadow-[0_25px_50px_-20px_rgba(32,34,28,0.6)]"
        >
          {locales.map((entry) => {
            const active = entry.code === locale;
            return (
              <li key={entry.code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    if (!active) setLocale(entry.code);
                  }}
                  lang={entry.code}
                  dir={entry.dir}
                  className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-start text-[13px] hover:bg-white/10"
                >
                  <span className="flex flex-col">
                    <span>{entry.native}</span>
                    <span className="text-[11px] text-[color-mix(in_srgb,var(--background)_55%,transparent)]">
                      {entry.label}
                    </span>
                  </span>
                  {active && <Check aria-hidden="true" className="size-4 shrink-0" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
