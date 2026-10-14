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

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  const locale: Locale = LOCALES.includes(lang as Locale)
    ? (lang as Locale)
    : DEFAULT_LOCALE;

  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar currentLocale={locale} dict={dict.nav} />
      <div className="flex-1">{children}</div>
      <Footer dict={dict.footer} />
    </>
  );
}
