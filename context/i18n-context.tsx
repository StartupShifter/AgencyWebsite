"use client";

import { createContext, useCallback, useContext, useMemo } from "react";
import type { ReactNode } from "react";
import type { Content } from "./content";
import {
  locales,
  localeCookieName,
  type Locale,
  type TextDirection,
  directionFor,
} from "./i18n";

type I18nValue = {
  /** The active locale code, e.g. "es". */
  locale: Locale;
  /** The localized content tree for `locale`. */
  content: Content;
  /** Reading direction for the active locale. */
  dir: TextDirection;
  /** All available locales, for the language switcher. */
  locales: typeof locales;
  /** Switch language. Persists the choice and reloads so the server re-renders. */
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  children,
  locale,
  content,
}: {
  children: ReactNode;
  locale: Locale;
  content: Content;
}) {
  const setLocale = useCallback((next: Locale) => {
    // Persist the explicit choice for one year, then reload so the server
    // renders the page in the newly selected language. URLs stay unchanged.
    document.cookie = `${localeCookieName}=${next}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    try {
      window.localStorage.setItem(localeCookieName, next);
    } catch {
      // Storage can be unavailable (private mode); the cookie is enough.
    }
    window.location.reload();
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      content,
      dir: directionFor(locale),
      locales,
      setLocale,
    }),
    [locale, content, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error(
      "useI18n must be used within an <I18nProvider>. Make sure the provider wraps this component.",
    );
  }
  return value;
}
