/**
 * Resolves localized content by deep-merging a translation dictionary over the
 * English base content. This module is server-only: dictionaries are only ever
 * loaded during server rendering, so client bundles stay small.
 */

import "server-only";

import { content, type Content } from "./content";
import type { Locale, TranslationDictionary } from "./i18n";
import { es } from "./translations/es";
import { fr } from "./translations/fr";
import { de } from "./translations/de";
import { pt } from "./translations/pt";
import { it } from "./translations/it";
import { hi } from "./translations/hi";
import { ar } from "./translations/ar";
import { zh } from "./translations/zh";
import { ja } from "./translations/ja";
import { ko } from "./translations/ko";
import { ru } from "./translations/ru";

const dictionaries: Partial<Record<Locale, TranslationDictionary>> = {
  es,
  fr,
  de,
  pt,
  it,
  hi,
  ar,
  zh,
  ja,
  ko,
  ru,
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Recursively merges `override` over `base`.
 *
 * - Plain objects merge key-by-key.
 * - Arrays merge element-by-element so a translation may localize a subset of
 *   a parallel list (e.g. FAQ entries) while falling back to English for the
 *   rest.
 * - Primitives prefer `override` whenever it is defined.
 *
 * `base` is never mutated; a new tree is returned.
 */
export function deepMerge<T>(base: T, override: unknown): T {
  if (override === undefined || override === null) return base;

  if (isPlainObject(base) && isPlainObject(override)) {
    const result: Record<string, unknown> = { ...base };
    for (const key of Object.keys(override)) {
      const baseValue = (base as Record<string, unknown>)[key];
      const overrideValue = (override as Record<string, unknown>)[key];
      if (overrideValue === undefined) continue;
      result[key] = deepMerge(baseValue, overrideValue);
    }
    return result as T;
  }

  if (Array.isArray(base) && Array.isArray(override)) {
    const length = Math.max(base.length, override.length);
    const result: unknown[] = new Array(length);
    for (let index = 0; index < length; index += 1) {
      result[index] = deepMerge(base[index], override[index]);
    }
    return result as T;
  }

  return override as T;
}

/**
 * Returns the fully localized content tree for a locale. Falls back to the
 * English base content for any locale without a dictionary (including "en").
 */
export function getContent(locale: Locale): Content {
  const dictionary = dictionaries[locale];
  if (!dictionary) return content;
  return deepMerge(content, dictionary) as Content;
}
