"use client";

import type { Locale } from "@/core/interfaces/i18n.interface";

interface ProjectsHeaderProps {
  locale: Locale;
  totalProjects: number;
}

export const ProjectsHeader = ({ locale, totalProjects }: ProjectsHeaderProps) => {
  return (
    <div className="flex flex-col gap-3.5 sm:gap-4">
      {/* 1. Fila Superior: Kicker + Total de proyectos */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {"//"} 02. PROYECTOS
          </span>
          <span className="text-border hidden sm:inline-block">|</span>
          <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 hidden sm:inline-flex">
            {locale === "es" ? "Producción & Open Source" : "Production & Open Source"}
          </span>
        </div>

        <span className="font-mono text-[11px] text-muted-foreground font-medium">
          {locale === "es"
            ? `${totalProjects} Proyectos`
            : `${totalProjects} Projects`}
        </span>
      </div>

      {/* 2. Título Editorial y Subtítulo */}
      <div className="flex flex-col gap-1">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
          {locale === "es"
            ? "Sistemas de Alto Impacto & Arquitectura"
            : "High-Impact Systems & Architecture"}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {locale === "es"
            ? "Plataformas multi-tenant, pipelines de IA y arquitecturas distribuidas con alta disponibilidad."
            : "Multi-tenant platforms, AI pipelines, and high-availability distributed architectures."}
        </p>
      </div>
    </div>
  );
};
