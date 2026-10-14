import type { Locale } from "@/core/interfaces/i18n.interface";

export const LOCALES: readonly Locale[] = ["es", "en"] as const;

export const DEFAULT_LOCALE: Locale = "es" as const;

export const LOCALE_LABELS: Record<Locale, string> = {
  es: "ES",
  en: "EN",
} as const;

export const LOCALE_FULL_NAMES: Record<Locale, string> = {
  es: "Español",
  en: "English",
} as const;
