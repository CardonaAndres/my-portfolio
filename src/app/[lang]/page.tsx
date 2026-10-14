import { Suspense } from "react";
import type { Metadata } from "next";
import type { Locale } from "@/core/interfaces/i18n.interface";
import { DEFAULT_LOCALE, LOCALES } from "@/core/constants/i18n.constant";
import { getDictionary } from "@/core/i18n";
import { ArrowRight, Mail } from "lucide-react";
import { TechIcon } from "@/core/components/icons";

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
    title: `${dict.hero.role} | Portfolio`,
    description: dict.hero.description,
  };
}

async function HeroSection({ langPromise }: { langPromise: Promise<{ lang: string }> }) {
  const { lang } = await langPromise;
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

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={`/${locale}#projects`}
            className="inline-flex items-center gap-2 justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            {dict.hero.ctaProjects}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={`/${locale}#contact`}
            className="inline-flex items-center gap-2 justify-center rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
          >
            <Mail className="w-4 h-4 text-muted-foreground" />
            {dict.hero.ctaContact}
          </a>
        </div>

        {/* Tech Stack Preview */}
        <div className="pt-8 flex flex-col gap-3">
          <p className="text-xs uppercase font-bold tracking-wider text-muted-foreground">
            Stack Principal
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { name: "react", label: "React" },
              { name: "nextjs", label: "Next.js" },
              { name: "typescript", label: "TypeScript" },
              { name: "tailwind", label: "Tailwind CSS" },
              { name: "nodejs", label: "Node.js" },
              { name: "docker", label: "Docker" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-medium text-foreground hover:border-primary/50 transition-colors"
              >
                <TechIcon name={tech.name} className="w-4 h-4" size={16} />
                <span>{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function HomePage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <main className="container mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="h-48 rounded-xl bg-card border border-border animate-pulse" />
        </main>
      }
    >
      <HeroSection langPromise={params} />
    </Suspense>
  );
}
