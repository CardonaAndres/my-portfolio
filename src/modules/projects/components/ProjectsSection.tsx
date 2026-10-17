"use client";

import { useMemo, useState } from "react";
import { FolderGit2, Sparkles } from "lucide-react";
import type { Locale } from "@/core/interfaces/i18n.interface";
import type { ProjectCategory } from "@/modules/projects/interfaces/project.interface";
import { PROJECTS_DATA } from "@/modules/projects/constants/projects.constant";
import { ProjectsHeader } from "@/modules/projects/components/ProjectsHeader";
import { ProjectsAvatarCard } from "@/modules/projects/components/ProjectsAvatarCard";
import { ProjectFeaturedCard } from "@/modules/projects/components/ProjectFeaturedCard";
import { ProjectCard } from "@/modules/projects/components/ProjectCard";

interface ProjectsSectionProps {
  locale: Locale;
}

export const ProjectsSection = ({ locale }: ProjectsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  // Conteo reactivo por categoría
  const categoryCounts = useMemo(() => {
    const counts: Record<ProjectCategory, number> = {
      all: PROJECTS_DATA.length,
      fullstack: 0,
      ai: 0,
      backend: 0,
      cloud: 0,
    };

    PROJECTS_DATA.forEach((project) => {
      if (counts[project.category] !== undefined) {
        counts[project.category]++;
      }
    });

    return counts;
  }, []);

  // Proyectos filtrados por categoría activa
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Proyectos destacados (sección superior izquierda)
  const featuredProjects = useMemo(() => {
    return filteredProjects.filter((p) => p.isFeatured);
  }, [filteredProjects]);

  // Proyectos complementarios (segunda sección en fila)
  const gridProjects = useMemo(() => {
    return filteredProjects.filter((p) => !p.isFeatured);
  }, [filteredProjects]);

  return (
    <section
      id="projects"
      aria-label="Proyectos y casos de estudio destacados"
      className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 border-b border-border/80"
    >
      <div className="container mx-auto max-w-5xl lg:max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-14">
        {/* 1. Cabecera Editorial con Filtros */}
        <ProjectsHeader
          locale={locale}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categoryCounts={categoryCounts}
        />

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
                  <ProjectFeaturedCard key={project.id} project={project} locale={locale} />
                ))}
              </div>
            </div>

            {/* Columna Derecha (5 columnas): Avatar 3D con Badges Flotantes y Criterios Técnicos (Sticky) */}
            <div className="w-full lg:col-span-5 lg:sticky lg:top-24 xl:top-28 self-start">
              <ProjectsAvatarCard locale={locale} />
            </div>
          </div>
        )}

        {/* 3. Segunda Sección: Proyectos no tan destacados (Varias en fila, exactamente como la segunda imagen) */}
        {gridProjects.length > 0 && (
          <div className="space-y-6 pt-4 border-t border-border/60">
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
                <ProjectCard key={project.id} project={project} locale={locale} />
              ))}
            </div>
          </div>
        )}

        {/* Estado Vacío (si una categoría no tiene proyectos) */}
        {filteredProjects.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border/80 p-12 text-center flex flex-col items-center justify-center gap-3">
            <FolderGit2 className="w-8 h-8 text-muted-foreground/60" />
            <h3 className="font-mono text-sm font-semibold text-foreground">
              {locale === "es"
                ? "No se encontraron proyectos en esta categoría"
                : "No projects found in this category"}
            </h3>
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className="font-mono text-xs text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
            >
              {locale === "es" ? "Ver todos los proyectos" : "View all projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
