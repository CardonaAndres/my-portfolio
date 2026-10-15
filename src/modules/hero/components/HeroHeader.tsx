import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import type { HeroProps } from "@/modules/hero/interfaces/hero.interface";

export const HeroHeader = ({ dict, locale }: HeroProps) => {
  return (
    <section className="flex flex-col items-start gap-8 border-b border-border/80 pb-12">
      {/* Barra de Estado Editorial y Metadatos con Acento Azul Rey */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-4 text-xs font-mono">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-semibold uppercase tracking-wider text-foreground">
            {dict.badge}
          </span>
        </div>

        <div className="flex items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{dict.location}</span>
          </span>
          <span className="hidden sm:inline-block text-border">|</span>
          <span className="hidden sm:inline-flex items-center gap-1.5 uppercase tracking-wider text-blue-600/90 dark:text-blue-400/90 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            Full Stack · Cloud · AI-First
          </span>
        </div>
      </div>

      {/* Título Principal Tipográfico Sólido */}
      <div className="flex flex-col gap-3 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
          {dict.name}
        </h1>
        <div className="flex flex-wrap items-center gap-2.5">
          <p className="text-xl sm:text-2xl font-medium text-muted-foreground tracking-tight">
            {dict.role}
          </p>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Sparkles className="w-3 h-3 text-blue-500" />
            AI-First · Backend &amp; Cloud
          </span>
        </div>
      </div>

      {/* Declaración de Valor Profesional con Acento Azul Rey Vertical */}
      <div className="max-w-3xl border-l-2 border-blue-600 dark:border-blue-500 pl-4 sm:pl-5 space-y-3 py-1">
        <p className="text-lg sm:text-xl text-foreground font-semibold leading-snug">
          {dict.tagline}
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          {dict.description}
        </p>

        {/* Distintivo de Enfoque T-Shaped: Versatilidad Full Stack + Especialidad Backend */}
        <div className="pt-1.5 flex flex-wrap items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/80 bg-muted/30 font-mono text-xs text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
            <span className="font-semibold text-foreground">{dict.focusFrontendLabel}:</span>
            <span>{dict.focusFrontendText}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-blue-700 dark:text-blue-300 font-bold">{dict.focusBackendLabel}:</span>
            <span>{dict.focusBackendText}</span>
          </div>
        </div>
      </div>

      {/* Botones de Acción Sólidos con Azul Rey Protagonista */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        {/* Botón Primario: Azul Rey Elegante */}
        <a
          href={`/${locale}#projects`}
          className="inline-flex items-center gap-2 justify-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 text-sm font-semibold shadow-md shadow-blue-600/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200"
        >
          <span>{dict.ctaProjects}</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* Botón Contacto / Email con Hover Azul Rey */}
        <a
          href={`/${locale}#contact`}
          className="inline-flex items-center gap-2 justify-center rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-2xs"
        >
          <Mail className="w-4 h-4 text-muted-foreground" />
          <span>{dict.ctaContact}</span>
        </a>
      </div>
    </section>
  );
};
