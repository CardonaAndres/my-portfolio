import { Suspense } from "react";
import type { Metadata } from "next";
import type { Locale } from "@/core/interfaces/i18n.interface";
import { DEFAULT_LOCALE, LOCALES } from "@/core/constants/i18n.constant";
import { getDictionary } from "@/core/i18n";
import { SITE_CONFIG } from "@/core/config/site.config";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  FileText,
  CheckCircle2,
} from "lucide-react";
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
    title: `${SITE_CONFIG.name} | ${dict.hero.role}`,
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
    <main className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 flex flex-col gap-14">
        
        {/* Bloque Superior: Encabezado Editorial y Estado */}
        <section className="flex flex-col items-start gap-8 border-b border-border pb-12">
          
          {/* Fila de Estado Monocromático con Acento Esmeralda Sólido */}
          <div className="w-full flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-4 text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
              <span className="font-semibold uppercase tracking-wider text-foreground">
                {dict.hero.badge}
              </span>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-foreground" />
                {dict.hero.location}
              </span>
              <span className="hidden sm:inline-block text-border">|</span>
              <span className="hidden sm:inline-block uppercase tracking-wider">
                Full Stack & Cloud
              </span>
            </div>
          </div>

          {/* Título Principal Tipográfico Sólido */}
          <div className="flex flex-col gap-3 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
              {dict.hero.name}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-muted-foreground tracking-tight">
              {dict.hero.role}
            </p>
          </div>

          {/* Declaración de Valor Profesional */}
          <div className="max-w-3xl space-y-4">
            <p className="text-lg sm:text-xl text-foreground font-medium leading-snug">
              {dict.hero.tagline}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              {dict.hero.description}
            </p>
          </div>

          {/* Botones de Acción Sólidos y Definidos */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Botón Primario Sólido (Invertido: Negro en claro / Blanco en oscuro) */}
            <a
              href={`/${locale}#projects`}
              className="inline-flex items-center gap-2 justify-center rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90 active:scale-[0.98] transition-all"
            >
              <span>{dict.hero.ctaProjects}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Botón WhatsApp Sólido */}
            <a
              href={SITE_CONFIG.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>{dict.hero.ctaWhatsapp}</span>
            </a>

            {/* Botón Contacto / Email Sólido */}
            <a
              href={`/${locale}#contact`}
              className="inline-flex items-center gap-2 justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted active:scale-[0.98] transition-all"
            >
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span>{dict.hero.ctaContact}</span>
            </a>
          </div>
        </section>

        {/* Bloque Central: Ficha Técnica de Pilares de Ingeniería (Rejilla Estructurada) */}
        <section className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border border border-border rounded-lg bg-card">
          <div className="p-6 flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              // 01 — Experiencia
            </span>
            <span className="text-2xl font-bold tracking-tight text-foreground font-mono">
              +3 Años
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Desarrollo de punta a punta con Node.js, NestJS, React, TypeScript y arquitecturas limpias.
            </p>
          </div>

          <div className="p-6 flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              // 02 — Infraestructura
            </span>
            <span className="text-2xl font-bold tracking-tight text-foreground font-mono">
              Zero Downtime
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Estrategia Blue-Green con Docker, CI/CD en GitHub Actions y proxies reversos Nginx/Traefik.
            </p>
          </div>

          <div className="p-6 flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              // 03 — Escalabilidad
            </span>
            <span className="text-2xl font-bold tracking-tight text-foreground font-mono">
              Data & Cache
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Modelado relacional con PostgreSQL y MySQL, colas de procesamiento asíncrono y caché en Redis.
            </p>
          </div>
        </section>

        {/* Bloque Inferior: Matriz Tecnológica Modular y Sólida */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
                Stack Tecnológico
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                [ 29 Tecnologías ]
              </span>
            </div>
            <span className="text-xs text-muted-foreground hidden sm:inline-block font-mono">
              Ecosistema de producción comprobado
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. Frontend */}
            <div className="p-4 rounded-md border border-border bg-card flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-border/60 pb-2">
                <span className="text-xs font-bold font-mono tracking-wider text-foreground">
                  01. FRONTEND
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  UI & Client
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { name: "typescript", label: "TS" },
                  { name: "javascript", label: "JS" },
                  { name: "react", label: "React" },
                  { name: "nextjs", label: "Next.js" },
                  { name: "tailwind", label: "Tailwind" },
                  { name: "astro", label: "Astro" },
                  { name: "bootstrap", label: "Bootstrap" },
                  { name: "mui", label: "MUI" },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    title={tech.label}
                    className="flex flex-col items-center justify-center p-2 rounded-md border border-border/60 bg-muted/30 hover:bg-muted hover:border-foreground/30 transition-colors"
                  >
                    <TechIcon name={tech.name} className="w-5 h-5" size={20} />
                    <span className="text-[10px] font-mono text-muted-foreground mt-1 truncate max-w-full">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Backend */}
            <div className="p-4 rounded-md border border-border bg-card flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-border/60 pb-2">
                <span className="text-xs font-bold font-mono tracking-wider text-foreground">
                  02. BACKEND
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  API & Services
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { name: "nodejs", label: "Node" },
                  { name: "express", label: "Express" },
                  { name: "nestjs", label: "NestJS" },
                  { name: "python", label: "Python" },
                  { name: "fastapi", label: "FastAPI" },
                  { name: "php", label: "PHP" },
                  { name: "laravel", label: "Laravel" },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    title={tech.label}
                    className="flex flex-col items-center justify-center p-2 rounded-md border border-border/60 bg-muted/30 hover:bg-muted hover:border-foreground/30 transition-colors"
                  >
                    <TechIcon name={tech.name} className="w-5 h-5" size={20} />
                    <span className="text-[10px] font-mono text-muted-foreground mt-1 truncate max-w-full">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Datos */}
            <div className="p-4 rounded-md border border-border bg-card flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-border/60 pb-2">
                <span className="text-xs font-bold font-mono tracking-wider text-foreground">
                  03. DATOS
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  SQL & Cache
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { name: "postgresql", label: "Postgres" },
                  { name: "mysql", label: "MySQL" },
                  { name: "redis", label: "Redis" },
                  { name: "typeorm", label: "TypeORM" },
                  { name: "prisma", label: "Prisma" },
                  { name: "sqlite", label: "SQLite" },
                  { name: "mongodb", label: "MongoDB" },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    title={tech.label}
                    className="flex flex-col items-center justify-center p-2 rounded-md border border-border/60 bg-muted/30 hover:bg-muted hover:border-foreground/30 transition-colors"
                  >
                    <TechIcon name={tech.name} className="w-5 h-5" size={20} />
                    <span className="text-[10px] font-mono text-muted-foreground mt-1 truncate max-w-full">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. DevOps & Cloud */}
            <div className="p-4 rounded-md border border-border bg-card flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-border/60 pb-2">
                <span className="text-xs font-bold font-mono tracking-wider text-foreground">
                  04. CLOUD & DEVOPS
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  CI/CD & Servers
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { name: "docker", label: "Docker" },
                  { name: "githubactions", label: "CI/CD" },
                  { name: "nginx", label: "Nginx" },
                  { name: "traefik", label: "Traefik" },
                  { name: "linux", label: "Linux" },
                  { name: "git", label: "Git" },
                  { name: "github", label: "GitHub" },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    title={tech.label}
                    className="flex flex-col items-center justify-center p-2 rounded-md border border-border/60 bg-muted/30 hover:bg-muted hover:border-foreground/30 transition-colors"
                  >
                    <TechIcon name={tech.name} className="w-5 h-5" size={20} />
                    <span className="text-[10px] font-mono text-muted-foreground mt-1 truncate max-w-full">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function HomePage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <main className="container mx-auto max-w-5xl px-4 sm:px-6 py-20">
          <div className="h-96 rounded-lg bg-card border border-border animate-pulse" />
        </main>
      }
    >
      <HeroSection langPromise={params} />
    </Suspense>
  );
}
