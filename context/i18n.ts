/**
 * Locale definitions and shared i18n helpers.
 *
 * This module is intentionally free of React and Next.js imports so it can be
 * used from both Server Components and Client Components without pulling in
 * server-only code. The actual translation dictionaries live under
 * `context/translations/` and are only loaded on the server.
 */

import type { Content } from "./content";

/** A recursive partial used to type per-language translation dictionaries. */
export type DeepPartial<T> = T extends readonly (infer U)[]
  ? DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

export type TranslationDictionary = DeepPartial<Content>;

export type TextDirection = "ltr" | "rtl";

export type LocaleDefinition = {
  /** BCP-47 primary subtag we detect and store (e.g. "es"). */
  code: string;
  /** English name, used as a neutral reference. */
  label: string;
  /** Native name shown in the language switcher. */
  native: string;
  /** Reading direction. */
  dir: TextDirection;
};

export const locales: LocaleDefinition[] = [
  { code: "en", label: "English", native: "English", dir: "ltr" },
  { code: "es", label: "Spanish", native: "Español", dir: "ltr" },
  { code: "fr", label: "French", native: "Français", dir: "ltr" },
  { code: "de", label: "German", native: "Deutsch", dir: "ltr" },
  { code: "pt", label: "Portuguese", native: "Português", dir: "ltr" },
  { code: "it", label: "Italian", native: "Italiano", dir: "ltr" },
  { code: "hi", label: "Hindi", native: "हिन्दी", dir: "ltr" },
  { code: "ar", label: "Arabic", native: "العربية", dir: "rtl" },
  { code: "zh", label: "Chinese (Simplified)", native: "简体中文", dir: "ltr" },
  { code: "ja", label: "Japanese", native: "日本語", dir: "ltr" },
  { code: "ko", label: "Korean", native: "한국어", dir: "ltr" },
  { code: "ru", label: "Russian", native: "Русский", dir: "ltr" },
] as const;

export type Locale = (typeof locales)[number]["code"];

export const defaultLocale: Locale = "en";

/** Name of the cookie that records an explicit language choice. */
export const localeCookieName = "locale";

const localeByCode = new Map<string, LocaleDefinition>(
  locales.map((locale) => [locale.code, locale]),
);

export function isLocale(value: string | undefined | null): value is Locale {
  return typeof value === "string" && localeByCode.has(value);
}

export function getLocaleDefinition(code: Locale): LocaleDefinition {
  return localeByCode.get(code) ?? localeByCode.get(defaultLocale)!;
}

export function isRTL(locale: Locale): boolean {
  return getLocaleDefinition(locale).dir === "rtl";
}

export function directionFor(locale: Locale): TextDirection {
  return getLocaleDefinition(locale).dir;
}

/**
 * Maps an arbitrary BCP-47 language tag (e.g. "es-MX", "pt-BR", "zh-Hant")
 * to the closest supported locale, or `defaultLocale` when there is no match.
 * Used to honour the visitor's region/browser language on first visit.
 */
const primaryTagMap: Record<string, Locale> = {
  en: "en",
  es: "es",
  fr: "fr",
  de: "de",
  pt: "pt",
  it: "it",
  hi: "hi",
  ar: "ar",
  zh: "zh",
  ja: "ja",
  ko: "ko",
  ru: "ru",
};

export function localeFromLanguageTag(tag: string | undefined | null): Locale {
  if (!tag) return defaultLocale;
  // Accept-Language is like "en-US,en;q=0.9,es;q=0.7". Take the highest
  // priority tags in order and match their primary subtag.
  for (const part of tag.split(",")) {
    const raw = part.split(";")[0].trim();
    const primary = raw.split("-")[0].toLowerCase();
    const match = primaryTagMap[primary];
    if (match) return match;
  }
  return defaultLocale;
}
