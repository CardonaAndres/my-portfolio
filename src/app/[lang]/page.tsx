import { Suspense } from "react";
import type { Metadata } from "next";
import type { Locale } from "@/core/interfaces/i18n.interface";
import { DEFAULT_LOCALE, LOCALES } from "@/core/constants/i18n.constant";
import { getDictionary } from "@/core/i18n";
import { SITE_CONFIG } from "@/core/config/site.config";
import { HeroSection } from "@/modules/hero";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = LOCALES.includes(lang as Locale)
    ? (lang as Locale)
    : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);

  return {
    title: `${SITE_CONFIG.name} | ${dict.hero.role}`,
    description: dict.hero.description,
  };
}

async function HomeContent({
  paramsPromise,
}: {
  paramsPromise: Promise<{ lang: string }>;
}) {
  const { lang } = await paramsPromise;
  const locale: Locale = LOCALES.includes(lang as Locale)
    ? (lang as Locale)
    : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);

  return <HeroSection dict={dict.hero} locale={locale} />;
}

export default function HomePage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <main className="container mx-auto max-w-5xl px-4 sm:px-6 py-20">
          <div className="h-96 rounded-xl bg-card border border-border animate-pulse" />
        </main>
      }
    >
      <HomeContent paramsPromise={params} />
    </Suspense>
  );
}
