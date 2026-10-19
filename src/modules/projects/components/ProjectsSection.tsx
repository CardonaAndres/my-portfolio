"use client";

import { useMemo, useState } from "react";
import { FolderGit2, Sparkles } from "lucide-react";
import type { Locale } from "@/core/interfaces/i18n.interface";
import type { ProjectItem } from "@/modules/projects/interfaces/project.interface";
import { PROJECTS_DATA } from "@/modules/projects/constants/projects.constant";
import { ProjectsHeader } from "@/modules/projects/components/ProjectsHeader";
import { ProjectsAvatarCard } from "@/modules/projects/components/ProjectsAvatarCard";
import { ProjectFeaturedCard } from "@/modules/projects/components/ProjectFeaturedCard";
import { ProjectCard } from "@/modules/projects/components/ProjectCard";
import { ProjectModal } from "@/modules/projects/components/ProjectModal";

interface ProjectsSectionProps {
  locale: Locale;
}

export const ProjectsSection = ({ locale }: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Proyectos destacados (sección superior izquierda)
  const featuredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => p.isFeatured);
  }, []);

  // Proyectos complementarios (segunda sección en cuadrícula)
  const gridProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => !p.isFeatured);
  }, []);

  return (
    <section
      id="projects"
      aria-label="Proyectos y casos de estudio destacados"
      className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 border-b border-border/80"
    >
      <div className="container mx-auto max-w-5xl lg:max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-14">
        {/* 1. Cabecera Editorial Limpia */}
        <ProjectsHeader locale={locale} totalProjects={PROJECTS_DATA.length} />

        {/* 2. Sección Principal: A la izquierda TODOS los Proyectos Destacados, a la derecha el Avatar 3D */}
        {featuredProjects.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Columna Izquierda (7 columnas): Todos los proyectos destacados apilados con todo su detalle */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                    {locale === "es"
                      ? `Proyectos Destacados (${featuredProjects.length})`
                      : `Featured Projects (${featuredProjects.length})`}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-muted-foreground hidden sm:inline-block">
                  {locale === "es" ? "Casos de estudio & sistemas core" : "Case studies & core systems"}
                </span>
              </div>

              {/* Lista de tarjetas destacadas completas */}
              <div className="flex flex-col gap-8">
                {featuredProjects.map((project) => (
                  <ProjectFeaturedCard
                    key={project.id}
                    project={project}
                    locale={locale}
                    onSelect={setSelectedProject}
                  />
                ))}
              </div>
            </div>

            {/* Columna Derecha (5 columnas): Avatar 3D con Badges Flotantes y Criterios Técnicos (Sticky) */}
            <div className="w-full lg:col-span-5 lg:sticky lg:top-24 xl:top-28 self-start">
              <ProjectsAvatarCard locale={locale} />
            </div>
          </div>
        )}

        {/* 3. Segunda Sección: Proyectos no tan destacados (Sin línea superior) */}
        {gridProjects.length > 0 && (
          <div className="space-y-6 pt-2">
            <div className="flex items-center justify-between border-b border-border/50 pb-3">
              <div className="flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                  {locale === "es"
                    ? `Más Proyectos & Arquitecturas (${gridProjects.length})`
                    : `More Projects & Architectures (${gridProjects.length})`}
                </span>
              </div>
              <span className="font-mono text-[11px] text-muted-foreground hidden sm:inline-block">
                {locale === "es" ? "Código fuente & métricas disponibles" : "Source code & metrics available"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {gridProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  locale={locale}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal interactivo con todo el detalle técnico y galería multimedia */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        locale={locale}
      />
    </section>
  );
};
