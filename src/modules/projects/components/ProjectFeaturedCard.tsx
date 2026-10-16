"use client";

import { CheckCircle2, Cpu, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon, TechIcon } from "@/core/components/icons";
import { ProjectMedia } from "./ProjectMedia";
import type { Locale } from "@/core/interfaces/i18n.interface";
import type { ProjectItem } from "@/modules/projects/interfaces/project.interface";

interface ProjectFeaturedCardProps {
  project: ProjectItem;
  locale: Locale;
}

export const ProjectFeaturedCard = ({ project, locale }: ProjectFeaturedCardProps) => {
  return (
    <article className="relative w-full rounded-2xl border border-blue-500/35 bg-card/85 dark:bg-[#0c121e]/90 backdrop-blur-md p-5 sm:p-6 shadow-xl shadow-blue-500/5 hover:border-blue-500/70 transition-all duration-300 group flex flex-col gap-5">
      {/* Glow ambiental superior derecho */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-blue-600/15 blur-3xl pointer-events-none -z-10"
      />

      {/* 1. Reproductor de Medios (Video o Imagen) en cabecera de la tarjeta */}
      <div className="flex flex-col gap-2.5">
        <ProjectMedia media={project.media} isFeatured />

        {/* Métricas de Alto Impacto */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 pt-0.5">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-border/80 bg-muted/40 dark:bg-[#151b27]/80 p-2 sm:p-2.5 text-center flex flex-col justify-center"
              >
                <span className="font-mono text-xs sm:text-sm font-bold text-foreground">
                  {metric.value}
                </span>
                <span className="font-mono text-[9.5px] sm:text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 2. Cuerpo de Información Técnica */}
      <div className="flex flex-col gap-4">
        {/* Fila de Tags / Estado / Año */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/25 font-mono text-[10.5px] font-semibold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-blue-500 animate-pulse" />
              {locale === "es" ? "Proyecto Destacado" : "Featured Project"}
            </span>
            <span className="text-border text-xs">·</span>
            <span className="font-mono text-[11px] text-muted-foreground">{project.year}</span>
          </div>

          <span className="font-mono text-[10.5px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
            ● {project.status[locale]}
          </span>
        </div>

        {/* Título Principal y Tagline */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title[locale]}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400/90 mt-1 font-medium leading-snug">
            {project.tagline[locale]}
          </p>
        </div>

        {/* Descripción Técnica Detallada */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {project.description[locale]}
        </p>

        {/* Bloque de Arquitectura & Entrega */}
        {project.architecture && (
          <div className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-xl bg-muted/40 dark:bg-[#121927] border border-border/70 font-mono text-xs">
            <Cpu className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-0.5">
              <span className="font-bold text-foreground text-[11px]">
                {locale === "es" ? "Arquitectura & Entrega:" : "Architecture & Delivery:"}
              </span>
              <span className="text-[11px] text-muted-foreground leading-normal">
                {project.architecture[locale]}
              </span>
            </div>
          </div>
        )}

        {/* Hitos Técnicos Clave */}
        {project.highlights && project.highlights[locale] && (
          <div className="space-y-1.5 pt-1">
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground font-semibold">
              {locale === "es" ? "Hitos Técnicos Clave:" : "Key Technical Milestones:"}
            </span>
            <ul className="space-y-1.5">
              {project.highlights[locale].map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-xs text-foreground/90">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tecnologías con Iconos Oficiales */}
        <div className="space-y-2 pt-2 border-t border-border/50">
          <span className="font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground font-semibold block">
            {locale === "es" ? "Stack Tecnológico:" : "Tech Stack:"}
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-muted/50 dark:bg-[#151b27] border border-border/70 font-mono text-[10.5px] text-muted-foreground group-hover:text-foreground transition-colors"
              >
                <TechIcon name={tech.toLowerCase().replace(/[^a-z0-9]/g, "")} className="w-3 h-3 shrink-0" size={12} />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Acciones y Enlaces */}
        <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-border/50">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold shadow-md shadow-blue-600/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>{locale === "es" ? "Ver Demo en Vivo" : "Live Demo"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-border/80 bg-card hover:bg-muted font-mono text-xs font-semibold text-foreground hover:border-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer shadow-2xs"
            >
              <GithubIcon className="w-3.5 h-3.5" size={14} />
              <span>{locale === "es" ? "Código Fuente" : "Source Code"}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
