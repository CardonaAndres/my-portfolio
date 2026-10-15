import type { Locale } from "@/core/interfaces/i18n.interface";
import type { ExperienceProduct } from "@/modules/experience/interfaces/experience.interface";
import { CheckCircle2, Cpu, Sparkles } from "lucide-react";

interface ExperienceProductItemProps {
  product: ExperienceProduct;
  locale: Locale;
}

export const ExperienceProductItem = ({
  product,
  locale,
}: ExperienceProductItemProps) => {
  const title = product.title[locale];
  const role = product.role?.[locale];
  const description = product.description[locale];
  const achievements = product.achievements?.[locale] ?? [];

  return (
    <article className="relative flex flex-col gap-3 rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-5 hover:border-blue-500/40 hover:bg-muted/30 transition-all duration-200 group">
      {/* Cabecera del Producto */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-base sm:text-lg font-semibold tracking-tight text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h4>
            {product.isFeatured && (
              <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                <Sparkles className="w-3 h-3 text-blue-500" />
                Featured
              </span>
            )}
          </div>

          {role && (
            <p className="font-mono text-xs text-muted-foreground flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>{role}</span>
            </p>
          )}
        </div>

        {/* Métricas / Badges Clave */}
        {product.metrics && product.metrics.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 self-start">
            {product.metrics.map((metric) => (
              <span
                key={metric.label}
                title={metric.label}
                className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/25"
              >
                {metric.value}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Descripción corta */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Logros e Impacto */}
      {achievements.length > 0 && (
        <ul className="space-y-1.5 pt-1 text-xs sm:text-sm text-foreground/90">
          {achievements.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Stack de Tecnologías */}
      <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-border/50">
        {product.technologies.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] px-2 py-0.5 rounded bg-background border border-border/80 text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};
