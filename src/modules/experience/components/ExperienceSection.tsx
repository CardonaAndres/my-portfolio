"use client";

import { useState } from "react";
import type { Locale } from "@/core/interfaces/i18n.interface";
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
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-14">
        {/* Encabezado Editorial de Sección */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-border/60 pb-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {"//"} 02. TRAYECTORIA &amp; SISTEMAS
              </span>
              <span className="text-border">|</span>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                {locale === "es" ? "Producción Real" : "Real Production"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {locale === "es"
                ? "Experiencia Profesional"
                : "Professional Experience"}
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {locale === "es"
                ? "Trayectoria liderando y construyendo soluciones de software de alta exigencia: desde arquitecturas de microservicios y despliegues sin tiempo de inactividad hasta integraciones de IA y facturación fiscal."
                : "Proven track record designing and shipping high-stakes software solutions: from microservices and zero-downtime deployments to AI integrations and fiscal compliance."}
            </p>
          </div>

          {/* Botón de acción para expandir/colapsar todos */}
          <button
            type="button"
            onClick={toggleAll}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border/80 bg-card hover:bg-muted text-xs font-mono font-medium text-muted-foreground hover:text-foreground transition-all cursor-pointer shadow-2xs"
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

        {/* Timeline de Experiencias en Modo Acordeón */}
        <div className="flex flex-col space-y-6 sm:space-y-8">
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
