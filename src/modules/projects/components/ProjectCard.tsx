"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon, TechIcon } from "@/core/components/icons";
import { ProjectMedia } from "@/modules/projects/components/ProjectMedia";
import type { Locale } from "@/core/interfaces/i18n.interface";
import type { ProjectItem } from "@/modules/projects/interfaces/project.interface";

interface ProjectCardProps {
  project: ProjectItem;
  locale: Locale;
}

export const ProjectCard = ({ project, locale }: ProjectCardProps) => {
  return (
    <article className="rounded-2xl border border-border/80 bg-card/70 dark:bg-[#0c1017]/90 backdrop-blur-sm p-4 sm:p-5 flex flex-col justify-between gap-4 shadow-xs hover:border-blue-500/50 hover:bg-blue-500/[0.015] transition-all duration-300 group">
      {/* Contenedor Superior: Media + Metadata */}
      <div className="space-y-3.5">
        {/* Media Preview (Video o Imagen) */}
        <ProjectMedia media={project.media} />

        {/* Fila de Categoría, Año y Estado */}
        <div className="flex items-center justify-between text-xs font-mono pt-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-blue-600 dark:text-blue-400 text-[10.5px] uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-border">·</span>
            <span className="text-muted-foreground text-[11px]">{project.year}</span>
          </div>

          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
            {project.status[locale]}
          </span>
        </div>

        {/* Título y Tagline */}
        <div>
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title[locale]}
          </h3>
          <p className="text-xs font-mono text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
            {project.tagline[locale]}
          </p>
        </div>

        {/* Métricas Compactas */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-border/60 bg-muted/30 dark:bg-[#151b27]/60 p-1.5 text-center flex flex-col justify-center"
              >
                <span className="font-mono text-[11px] font-bold text-foreground truncate">
                  {metric.value}
                </span>
                <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-tight truncate">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contenedor Inferior: Tecnologías + Acciones */}
      <div className="space-y-3 pt-3 border-t border-border/50">
        {/* Chips de Tecnologías */}
        <div className="flex flex-wrap items-center gap-1 font-mono">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-muted/40 dark:bg-[#151b27] border border-border/60 text-[10px] text-muted-foreground group-hover:text-foreground transition-colors"
            >
              <TechIcon name={tech.toLowerCase().replace(/[^a-z0-9]/g, "")} className="w-2.5 h-2.5 shrink-0" size={10} />
              <span>{tech}</span>
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[10px] text-muted-foreground px-1">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Botones de Acción */}
        <div className="flex items-center justify-between gap-2 pt-1 font-mono text-xs">
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[11px] shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <span>{locale === "es" ? "Demo" : "Live"}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <div />
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/70 bg-card hover:bg-muted text-muted-foreground hover:text-foreground text-[11px] font-medium transition-colors cursor-pointer"
            >
              <GithubIcon className="w-3.5 h-3.5" size={12} />
              <span>{locale === "es" ? "Código" : "Code"}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
