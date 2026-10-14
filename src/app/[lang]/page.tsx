import type { Metadata } from "next";
import type { Locale } from "@/core/interfaces/i18n.interface";
import { DEFAULT_LOCALE, LOCALES } from "@/core/constants/i18n.constant";
import { getDictionary } from "@/core/i18n";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = LOCALES.includes(lang as Locale)
    ? (lang as Locale)
    : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);

  return {
    title: `${dict.hero.role} | Portfolio`,
    description: dict.hero.description,
  };
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  const locale: Locale = LOCALES.includes(lang as Locale)
    ? (lang as Locale)
    : DEFAULT_LOCALE;

  const dict = await getDictionary(locale);

  return (
    <main className="container mx-auto max-w-6xl px-4 py-16 sm:py-24">
      {/* Hero Section */}
      <section className="flex flex-col items-start gap-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-primary">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {dict.hero.badge}
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground">
          {dict.hero.greeting}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
            Tu Nombre
          </span>
        </h1>

        <p className="text-xl sm:text-2xl font-semibold text-muted-foreground">
          {dict.hero.role}
        </p>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          {dict.hero.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href={`/${locale}#projects`}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            {dict.hero.ctaProjects}
          </a>
          <a
            href={`/${locale}#contact`}
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
          >
            {dict.hero.ctaContact}
          </a>
        </div>
      </section>
    </main>
  );
}
