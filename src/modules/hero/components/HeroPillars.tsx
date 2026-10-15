import { Sparkles } from "lucide-react";
import type { Locale } from "@/core/interfaces/i18n.interface";
import { ENGINEERING_PILLARS } from "@/modules/hero/constants/hero.constant";

interface HeroPillarsProps {
  locale?: Locale;
}

export const HeroPillars = ({ locale = "es" }: HeroPillarsProps) => {
  return (
    <section aria-label="Pilares de ingeniería y métricas" className="flex flex-col gap-5">
      {/* Encabezado del Bloque de Pilares con Badge Azul Rey */}
      <div className="flex items-center justify-between border-b border-border/80 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
            {locale === "es" ? "Pilares de Ingeniería" : "Engineering Pillars"}
          </span>
          <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            {locale === "es" ? "[ Core & Métricas ]" : "[ Core & Metrics ]"}
          </span>
        </div>
        <span className="text-xs text-muted-foreground hidden sm:inline-block font-mono">
          {locale === "es"
            ? "Resiliencia, escalabilidad y enfoque AI-First"
            : "Resilience, scalability & AI-First mindset"}
        </span>
      </div>

      {/* Grid de 4 Pilares Simétricos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border/80 border border-border/80 rounded-xl bg-card shadow-xs overflow-hidden">
        {ENGINEERING_PILLARS.map((pillar) => {
          const isAi = pillar.id === "ai-first";

          return (
            <div
              key={pillar.id}
              className={`p-4 sm:p-5 flex flex-col justify-between gap-3.5 transition-all duration-200 group ${
                isAi
                  ? "bg-blue-500/[0.02] hover:bg-blue-500/[0.05]"
                  : "hover:bg-muted/30"
              }`}
            >
              {/* Header: Altura fija, 1 sola línea sin quiebres jamás */}
              <div className="h-6 flex items-center justify-between border-b border-border/60 pb-2">
                <span className="font-mono text-[11px] font-semibold tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5 whitespace-nowrap">
                  <span>{"//"} {pillar.number}</span>
                  <span className="text-muted-foreground/40">—</span>
                  <span className="text-muted-foreground font-mono uppercase text-[10px] tracking-wider group-hover:text-foreground transition-colors">
                    {pillar.category}
                  </span>
                </span>

                {isAi && (
                  <Sparkles className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                )}
              </div>

              {/* Métrica y Subtítulo: Altura uniforme fija */}
              <div className="space-y-1">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground font-mono group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors block truncate">
                  {pillar.metric}
                </span>
                <p className="text-xs text-muted-foreground leading-snug truncate">
                  {pillar.highlight}
                </p>
              </div>

              {/* Grilla simétrica 2x2 de micro-chips */}
              <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-border/40">
                {pillar.chips.map((chip) => (
                  <span
                    key={chip}
                    title={chip}
                    className={`font-mono text-[10px] px-1.5 py-1 rounded text-center truncate border transition-all ${
                      isAi
                        ? "bg-blue-500/5 text-blue-700 dark:text-blue-300 border-blue-500/20 group-hover:border-blue-500/40"
                        : "bg-muted/50 text-muted-foreground border-border/70 group-hover:border-blue-500/30 group-hover:text-foreground"
                    }`}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
