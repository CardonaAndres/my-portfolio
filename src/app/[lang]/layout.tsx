import { Suspense } from "react";
import type { ReactNode } from "react";
import type { Locale } from "@/core/interfaces/i18n.interface";
import { DEFAULT_LOCALE, LOCALES } from "@/core/constants/i18n.constant";
import { getDictionary } from "@/core/i18n";
import { Navbar, Footer } from "@/core/components/navigation";

interface LangLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

async function LocalizedNavbar({
  paramsPromise,
}: {
  paramsPromise: Promise<{ lang: string }>;
}) {
  const { lang } = await paramsPromise;
  const locale: Locale = LOCALES.includes(lang as Locale)
    ? (lang as Locale)
    : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);

  return <Navbar currentLocale={locale} dict={dict.nav} />;
}

async function LocalizedFooter({
  paramsPromise,
}: {
  paramsPromise: Promise<{ lang: string }>;
}) {
  const { lang } = await paramsPromise;
  const locale: Locale = LOCALES.includes(lang as Locale)
    ? (lang as Locale)
    : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);

  return <Footer dict={dict.footer} />;
}

export default function LangLayout({ children, params }: LangLayoutProps) {
  return (
    <>
      <Suspense
        fallback={
          <header className="sticky top-0 z-50 w-full h-16 border-b border-border bg-background/80 backdrop-blur-md" />
        }
      >
        <LocalizedNavbar paramsPromise={params} />
      </Suspense>

      <div className="flex-1">{children}</div>

      <Suspense
        fallback={
          <footer className="w-full h-20 border-t border-border bg-card/50" />
        }
      >
        <LocalizedFooter paramsPromise={params} />
      </Suspense>
    </>
  );
}
