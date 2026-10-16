"use client";

import { Sparkles, Terminal, ShieldCheck } from "lucide-react";
import type { Locale } from "@/core/interfaces/i18n.interface";
import type { ProjectCategory } from "@/modules/projects/interfaces/project.interface";
import { PROJECT_CATEGORIES } from "@/modules/projects/constants/projects.constant";

interface ProjectsHeaderProps {
  locale: Locale;
  selectedCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  categoryCounts: Record<ProjectCategory, number>;
}

export const ProjectsHeader = ({
  locale,
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}: ProjectsHeaderProps) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-3.5 border-b border-border/70 pb-4 sm:pb-5">
      {/* 1. Fila Superior: Kicker a la izquierda + Micro-píldoras de valor técnico a la derecha */}
      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {"//"} 02. PROYECTOS &amp; CASOS DE ESTUDIO
          </span>
          <span className="text-border">|</span>
          <span className="font-mono text-[10.5px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            {locale === "es" ? "Producción & Open Source" : "Production & Open Source"}
          </span>
        </div>

        {/* Micro-píldoras de valor técnico */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10.5px]">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-muted/40 dark:bg-[#0c121e]/80 border border-border/70 text-foreground">
            <ShieldCheck className="w-3 h-3 text-emerald-500" />
            <span>Zero Downtime</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-muted/40 dark:bg-[#0c121e]/80 border border-border/70 text-foreground">
            <Sparkles className="w-3 h-3 text-blue-500" />
            <span>AI-First</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-muted/40 dark:bg-[#0c121e]/80 border border-border/70 text-foreground">
            <Terminal className="w-3 h-3 text-indigo-500" />
            <span>Clean Architecture</span>
          </span>
        </div>
      </div>

      {/* 2. Título y Subtítulo en tamaño compacto y proporcionado */}
      <div className="flex flex-col gap-0.5">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-snug">
          {locale === "es"
            ? "Sistemas de Alto Impacto & Arquitectura de Software"
            : "High-Impact Systems & Software Architecture"}
        </h2>
        <p className="text-xs sm:text-[13px] font-mono text-blue-600 dark:text-blue-400 font-medium">
          {locale === "es"
            ? "Desde plataformas multi-tenant hasta pipelines de IA y DevOps con cero downtime"
            : "From multi-tenant platforms to AI pipelines and zero-downtime DevOps"}
        </p>
      </div>

      {/* 3. Filtros Interactivos por Categoría */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
        <div className="flex flex-wrap items-center gap-1.5">
          {PROJECT_CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.id] ?? 0;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-medium transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-xs shadow-blue-600/30 scale-[1.01]"
                    : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/70"
                }`}
              >
                <span>{cat.label[locale]}</span>
                <span
                  className={`text-[9.5px] px-1.5 py-0.1 rounded-full font-bold ${
                    isSelected ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <span className="text-[11px] text-muted-foreground font-mono hidden md:inline-block">
          {locale === "es"
            ? "Explora el stack y arquitectura de cada solución"
            : "Explore the stack and architecture of each solution"}
        </span>
      </div>
    </div>
  );
};
