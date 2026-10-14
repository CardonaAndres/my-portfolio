"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/core/interfaces/i18n.interface";
import { LOCALES, LOCALE_LABELS } from "@/core/constants/i18n.constant";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export const LanguageSwitcher = ({
  currentLocale,
  className = "",
}: LanguageSwitcherProps) => {
  const pathname = usePathname();

  // Reemplaza el prefijo del idioma actual por el nuevo idioma seleccionado
  const getTargetHref = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split("/");
    // segments[0] es "", segments[1] es el locale actual si existe
    if (LOCALES.includes(segments[1] as Locale)) {
      segments[1] = targetLocale;
      return segments.join("/") || "/";
    }
    return `/${targetLocale}${pathname}`;
  };

  return (
    <div
      className={`inline-flex items-center rounded-lg border border-border bg-card p-0.5 text-xs font-medium text-muted-foreground ${className}`}
      role="group"
      aria-label="Selector de idioma"
    >
      {LOCALES.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={getTargetHref(locale)}
            className={`px-2 py-1 rounded-md transition-colors ${
              isActive
                ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                : "hover:text-foreground"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {LOCALE_LABELS[locale]}
          </Link>
        );
      })}
    </div>
  );
};
