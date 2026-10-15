import { Sparkles } from "lucide-react";
import type { Locale } from "@/core/interfaces/i18n.interface";
import { ENGINEERING_PILLARS } from "@/modules/hero/constants/hero.constant";

interface HeroPillarsProps {
  locale?: Locale;
  showHeader?: boolean;
}

export const HeroPillars = ({
  locale = "es",
  showHeader = false,
}: HeroPillarsProps) => {
  return (
    <div
      aria-label="Capacidades de ingeniería y especialidades"
      className="flex flex-col gap-3"
    >
      {/* Encabezado opcional */}
      {showHeader && (
        <div className="flex items-center justify-between border-b border-border/80 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
              {locale === "es"
                ? "Capacidades de Ingeniería"
                : "Engineering Capabilities"}
            </span>
            <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              [ Core &amp; Métricas ]
            </span>
          </div>
        </div>
      )}

      {/* Fila Tipográfica Minimalista y 100% Responsive:
          - Móvil (<sm): 1 columna con métrica alineada y chips que no se quiebran feo
          - Tablet (sm): 2 columnas con amplio espacio
          - Desktop (lg): 4 columnas simétricas y limpias
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 py-1">
        {ENGINEERING_PILLARS.map((pillar) => {
          const isAi = pillar.id === "ai-first";

          return (
            <div
              key={pillar.id}
              className="flex flex-col gap-1.5 pb-4 border-b border-border/40 last:border-b-0 sm:border-b-0 sm:pb-0 group"
            >
              {/* Etiqueta Mono Superior + Métrica en línea para móvil */}
              <div className="flex items-center justify-between sm:justify-start gap-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                  <span>
                    {pillar.number} {"//"} {pillar.category}
                  </span>
                  {isAi && (
                    <Sparkles className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  )}
                </div>

                {/* Métrica compacta en línea en móvil (evita saltos y ahorra espacio) */}
                <span className="text-xs font-bold font-mono text-foreground sm:hidden shrink-0">
                  {pillar.metric}
                </span>
              </div>

              {/* Métrica / Capacidad Principal en Tablet y Desktop */}
              <span className="hidden sm:block text-base lg:text-lg font-bold font-mono tracking-tight text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {pillar.metric}
              </span>

              {/* Subtítulo / Foco */}
              <p className="text-xs text-muted-foreground leading-snug">
                {pillar.highlight}
              </p>

              {/* Tecnologías como tags mono con separadores atómicos (evita palabras huérfanas) */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-1.5 border-t border-border/40 text-[11px] font-mono text-muted-foreground/80 leading-relaxed">
                {pillar.chips.map((chip, index) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <span className="hover:text-foreground transition-colors">
                      {chip}
                    </span>
                    {index < pillar.chips.length - 1 && (
                      <span className="text-muted-foreground/40 select-none">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
