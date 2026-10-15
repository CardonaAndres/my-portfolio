"use client";

import type { Locale } from "@/core/interfaces/i18n.interface";
import type { ExperienceItem } from "@/modules/experience/interfaces/experience.interface";
import { ExperienceProductItem } from "@/modules/experience/components/ExperienceProductItem";
import { Briefcase, Calendar, MapPin, Layers, ChevronDown } from "lucide-react";

interface ExperienceCardProps {
  experience: ExperienceItem;
  locale: Locale;
  isOpen: boolean;
  onToggle: () => void;
}

export const ExperienceCard = ({
  experience,
  locale,
  isOpen,
  onToggle,
}: ExperienceCardProps) => {
  const role = experience.role[locale];
  const period = experience.period[locale];
  const contractType = experience.contractType?.[locale];
  const summary = experience.summary?.[locale];

  return (
    <div className="relative pl-6 sm:pl-8 border-l-2 border-border/80 group/timeline">
      {/* Marcador de nodo del timeline */}
      <div
        className={`absolute -left-[9px] top-4 w-4 h-4 rounded-full border-2 bg-background transition-all duration-200 ${
          experience.isCurrent
            ? "border-emerald-500 ring-4 ring-emerald-500/10"
            : isOpen
            ? "border-blue-600 dark:border-blue-500 ring-4 ring-blue-500/10"
            : "border-muted-foreground/40 group-hover/timeline:border-foreground"
        }`}
      >
        {experience.isCurrent && (
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
        )}
      </div>

      {/* Contenedor Principal de la Tarjeta Acordeón */}
      <div
        className={`flex flex-col rounded-2xl border transition-all duration-200 overflow-hidden ${
          isOpen
            ? "border-blue-500/40 bg-card shadow-sm shadow-blue-500/5"
            : "border-border/80 bg-card/60 hover:bg-card hover:border-border"
        }`}
      >
        {/* Cabecera / Trigger Clickeable del Acordeón */}
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`exp-content-${experience.id}`}
          className="w-full text-left p-5 sm:p-6 flex flex-col gap-3 group/btn cursor-pointer select-none transition-colors"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Nombre de la Empresa y Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover/btn:text-blue-600 dark:group-hover/btn:text-blue-400 transition-colors">
                {experience.company}
              </h3>
              {experience.isCurrent && (
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {locale === "es" ? "Actual" : "Present"}
                </span>
              )}
            </div>

            {/* Fecha / Período y Botón Chevron */}
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <Calendar className="w-3.5 h-3.5" />
                <span>{period}</span>
              </div>

              {/* Indicador Visual de Expansión / Chevron */}
              <div
                className={`p-1.5 rounded-lg border transition-all duration-200 ${
                  isOpen
                    ? "rotate-180 bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30"
                    : "bg-muted/40 text-muted-foreground border-border/80 group-hover/btn:text-foreground group-hover/btn:border-border"
                }`}
                aria-hidden="true"
              >
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </div>
            </div>
          </div>

          {/* Rol, Ubicación, Modalidad y Cantidad de Productos */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5 font-semibold text-foreground">
                <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{role}</span>
              </span>
              <span className="text-border hidden sm:inline-block">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                <span>{experience.location}</span>
              </span>
              {contractType && (
                <>
                  <span className="text-border hidden sm:inline-block">•</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
                    {contractType}
                  </span>
                </>
              )}
            </div>

            {/* Badge de cantidad de sistemas */}
            <div className="flex items-center gap-1.5 font-mono text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground border border-border/60">
              <Layers className="w-3 h-3 text-blue-500" />
              <span>
                {experience.products.length}{" "}
                {locale === "es"
                  ? experience.products.length === 1
                    ? "Sistema"
                    : "Sistemas"
                  : experience.products.length === 1
                  ? "System"
                  : "Systems"}
              </span>
            </div>
          </div>

          {/* Resumen visible cuando está colapsado para contexto rápido */}
          {!isOpen && summary && (
            <p className="text-xs sm:text-sm text-muted-foreground/80 line-clamp-1 pt-1 text-left">
              {summary}
            </p>
          )}
        </button>

        {/* Contenido Desplegable (Animación suave con CSS Grid) */}
        <div
          id={`exp-content-${experience.id}`}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden">
            <div className="p-5 sm:p-7 pt-2 flex flex-col gap-6 border-t border-border/60">
              {/* Resumen detallado */}
              {summary && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {summary}
                </p>
              )}

              {/* Listado de Productos / Sistemas */}
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>
                      {locale === "es"
                        ? "Sistemas y Productos Desarrollados"
                        : "Systems & Products Developed"}
                    </span>
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3.5">
                  {experience.products.map((product) => (
                    <ExperienceProductItem
                      key={product.id}
                      product={product}
                      locale={locale}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
