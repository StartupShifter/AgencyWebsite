import "server-only";

import { cache } from "react";
import { cookies, headers } from "next/headers";
import { getContent } from "@/context/translate";
import type { Content } from "@/context/content";
import {
  defaultLocale,
  isLocale,
  isRTL,
  localeCookieName,
  localeFromLanguageTag,
  type Locale,
  type TextDirection,
} from "@/context/i18n";

/**
 * Resolve the active locale for the current request, cached per request.
 *
 * Precedence:
 *   1. An explicit language choice stored in the `locale` cookie.
 *   2. The visitor's browser/region preference from `Accept-Language`.
 *   3. English.
 */
export const resolveLocale = cache(async (): Promise<Locale> => {
  const cookieStore = await cookies();
  const saved = cookieStore.get(localeCookieName)?.value;
  if (isLocale(saved)) return saved;

  const headerList = await headers();
  return localeFromLanguageTag(headerList.get("accept-language"));
});

export type LocalizedContent = {
  locale: Locale;
  dir: TextDirection;
  content: Content;
};

/**
 * Resolve both the locale and its localized content, cached per request so
 * every Server Component in a single request shares one translation tree.
 */
export const getLocalizedContent = cache(async (): Promise<LocalizedContent> => {
  const locale = await resolveLocale();
  return {
    locale,
    dir: isRTL(locale) ? "rtl" : "ltr",
    content: getContent(locale),
  };
});

export { defaultLocale };
