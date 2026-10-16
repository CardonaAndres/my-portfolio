"use client";

import { useState } from "react";
import type { Locale } from "@/core/interfaces/i18n.interface";
import { HeroPillars } from "@/modules/hero/components/HeroPillars";
import { EXPERIENCES_DATA } from "@/modules/experience/constants/experience.constant";
import { ExperienceCard } from "@/modules/experience/components/ExperienceCard";
import { ChevronsUpDown } from "lucide-react";

interface ExperienceSectionProps {
  locale: Locale;
}

export const ExperienceSection = ({ locale }: ExperienceSectionProps) => {
  // Por defecto queda abierta la última experiencia (la más reciente: pedbox)
  const [openIds, setOpenIds] = useState<string[]>(["pedbox"]);

  const toggleExperience = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const areAllOpen = openIds.length === EXPERIENCES_DATA.length;

  const toggleAll = () => {
    if (areAllOpen) {
      setOpenIds([]);
    } else {
      setOpenIds(EXPERIENCES_DATA.map((e) => e.id));
    }
  };

  return (
    <section
      id="experience"
      aria-label="Experiencia profesional y sistemas desarrollados"
      className="scroll-mt-24 py-16 sm:py-20 border-b border-border/80"
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-12">
        {/* Encabezado Editorial Compacto & 100% Responsive */}
        <div className="flex flex-col gap-3 border-b border-border/70 pb-5">
          {/* Fila Superior: Metadata a la izquierda + Botón Expandir Todo anclado a la derecha */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {"//"} 03. EXPERIENCIA
              </span>
              <span className="text-border hidden sm:inline-block">|</span>
              <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                +3 Años
              </span>
            </div>

            {/* Botón de acción para expandir/colapsar todos */}
            <button
              type="button"
              onClick={toggleAll}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg border border-border/80 bg-card hover:bg-muted text-[11px] sm:text-xs font-mono font-medium text-muted-foreground hover:text-foreground transition-all cursor-pointer shadow-2xs shrink-0"
            >
              <ChevronsUpDown className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>
                {areAllOpen
                  ? locale === "es"
                    ? "Colapsar Todo"
                    : "Collapse All"
                  : locale === "es"
                  ? "Expandir Todo"
                  : "Expand All"}
              </span>
            </button>
          </div>

          {/* Título Principal */}
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            {locale === "es"
              ? "Trayectoria Profesional"
              : "Professional Experience"}
          </h2>

          {/* Subtítulo condensado y contundente */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
            {locale === "es"
              ? "Diseño y entrega de soluciones de alta exigencia: microservicios, despliegues zero-downtime, integraciones de IA y sistemas transaccionales en producción."
              : "Designing and shipping high-stakes solutions: microservices, zero-downtime deployments, real-world AI integrations, and transactional systems."}
          </p>
        </div>

        {/* 1. Pilares de Ingeniería & Métricas Core (Integrados armónicamente en la sección) */}
        <HeroPillars locale={locale} showHeader={false} />

        {/* 2. Timeline de Experiencias en Empresas */}
        <div className="flex flex-col space-y-6 sm:space-y-8 pt-2">
          {EXPERIENCES_DATA.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              locale={locale}
              isOpen={openIds.includes(experience.id)}
              onToggle={() => toggleExperience(experience.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
