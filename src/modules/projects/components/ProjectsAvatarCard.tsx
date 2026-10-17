"use client";

import Image from "next/image";
import { Lightbulb, Rocket, Sparkles, CheckCircle2 } from "lucide-react";
import type { Locale } from "@/core/interfaces/i18n.interface";

interface ProjectsAvatarCardProps {
  locale: Locale;
}

export const ProjectsAvatarCard = ({ locale }: ProjectsAvatarCardProps) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-3.5 w-full">
      {/* 1. Sección Visual del Avatar con Badge de Experiencia y Flotantes Orgánicos */}
      <div className="relative w-full flex flex-col items-center justify-center pt-2 sm:pt-3 pb-5 select-none">
        {/* Halo de iluminación ambiental dinámico */}
        <div
          aria-hidden="true"
          className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-blue-600/20 via-blue-500/10 to-transparent blur-3xl pointer-events-none -z-10"
        />

        {/* Cápsula de Experiencia Centrada Superior */}
        <div className="flex items-center justify-center mb-9 sm:mb-10 select-none">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-600 dark:text-blue-400 font-mono text-[10.5px] sm:text-xs font-semibold shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span>
              {locale === "es" ? "+3 Años de Experiencia Profesional" : "+3 Years Professional Experience"}
            </span>
          </div>
        </div>

        {/* Contenedor del Avatar 3D con Badges Flotantes Laterales elevados por encima de los iconos */}
        <div className="relative w-48 h-48 sm:w-52 sm:h-52 lg:w-48 lg:h-48 xl:w-52 xl:h-52 flex items-center justify-center transition-transform duration-500 hover:scale-[1.01]">
          {/* Badge 1 (Superior Izquierdo elevado sobre los corchetes y CI/CD): Innovación & R&D */}
          <div className="inline-flex absolute -top-8 sm:-top-9 -left-2 sm:-left-4 z-20 items-center gap-1.5 px-2.5 py-1 rounded-xl bg-card/95 dark:bg-[#0c121e]/95 backdrop-blur-md border border-border/80 font-mono text-[9.5px] sm:text-[10px] text-foreground shadow-md select-none -rotate-2 hover:rotate-0 hover:border-amber-500/40 transition-all">
            <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="font-semibold text-foreground">Innovación &amp; R&amp;D</span>
          </div>

          {/* Badge 2 (Superior Derecho elevado por encima de Docker y el bombillo): Casos Reales */}
          <div className="inline-flex absolute -top-7 sm:-top-8 -right-2 sm:-right-4 z-20 items-center gap-1.5 px-2.5 py-1 rounded-xl bg-card/95 dark:bg-[#0c121e]/95 backdrop-blur-md border border-border/80 font-mono text-[9.5px] sm:text-[10px] text-foreground shadow-md select-none rotate-2 hover:rotate-0 hover:border-blue-500/40 transition-all">
            <Rocket className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="font-bold text-foreground">
              {locale === "es" ? "Casos Reales" : "Live Projects"}
            </span>
          </div>

          {/* Ilustración 3D del Desarrollador Presentando Proyectos sobre el fondo */}
          <Image
            src="/imgs/project-img.png"
            alt="Andrés Cardona - Proyectos y Arquitectura"
            width={400}
            height={400}
            priority
            className="w-full h-full object-contain drop-shadow-2xl select-none animate-float"
          />

          {/* Badge 3 (Inferior Izquierdo / Anclado a la izquierda, LIBERANDO el logo de Python a la derecha): Producción */}
          <div className="inline-flex absolute -bottom-3 sm:-bottom-4 left-0 sm:left-1 z-20 items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1 rounded-xl bg-card/95 dark:bg-[#0c121e]/95 backdrop-blur-md border border-blue-500/50 font-mono text-xs text-foreground shadow-xl shadow-blue-500/15 select-none rotate-1 hover:rotate-0 hover:border-blue-500/80 transition-all max-w-[200px] sm:max-w-none">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse shrink-0" />
            <div className="flex flex-col">
              <span className="font-bold text-blue-600 dark:text-blue-400 text-[10px] sm:text-[10.5px] leading-tight whitespace-nowrap">
                {locale === "es" ? "Producción Comprobada" : "Production Proven"}
              </span>
              <span className="text-[8.5px] sm:text-[9px] text-muted-foreground leading-tight whitespace-nowrap">
                {locale === "es" ? "Clean Architecture & Escala" : "Clean Architecture & Scale"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Terminal de Arquitectura & Telemetría CLI (arquitectura.sh) */}
      <div className="rounded-xl sm:rounded-2xl border border-border/80 bg-card/90 dark:bg-[#0a0f18]/95 backdrop-blur-md overflow-hidden shadow-lg shadow-black/10 flex flex-col font-mono text-xs">
        {/* Barra superior de Terminal con controles tipo macOS y Badge de Experiencia */}
        <div className="flex items-center justify-between px-3 py-1.5 sm:py-2 border-b border-border/60 bg-muted/40">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-[10px] sm:text-[11px] text-muted-foreground ml-1.5 font-medium">
              {locale === "es" ? "arquitectura.sh" : "architecture.sh"}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              {locale === "es" ? "+3 Años Exp." : "+3 Yrs Exp."}
            </span>
            <span className="text-[9.5px] sm:text-[10px] font-semibold text-emerald-500 dark:text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              STABLE
            </span>
          </div>
        </div>

        {/* Cuerpo de la Terminal con Comandos y Criterios Organizados en Cuadrícula Telemetría */}
        <div className="p-2.5 sm:p-3 space-y-2 text-[10px] sm:text-[10.5px]">
          <div className="text-muted-foreground flex items-center gap-1.5 text-[9.5px] sm:text-[10px] pb-1 border-b border-border/40">
            <span className="text-blue-500 font-bold">andres@portfolio</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-purple-400">~</span>
            <span className="text-muted-foreground">$</span>
            <span className="text-foreground font-semibold">./verify-standards.sh</span>
          </div>

          {/* Cuadrícula 2x2 compacta de Criterios Técnicos */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-0.5">
            <div className="flex items-start gap-1.5 p-1.5 rounded-lg bg-card/60 dark:bg-muted/15 border border-border/40 hover:border-emerald-500/40 transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-foreground text-[10px] leading-tight truncate">
                  Zero Downtime
                </span>
                <span className="text-[8.5px] sm:text-[9px] text-muted-foreground leading-tight truncate">
                  {locale === "es" ? "Docker & Nginx" : "Docker & Nginx"}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-1.5 p-1.5 rounded-lg bg-card/60 dark:bg-muted/15 border border-border/40 hover:border-blue-500/40 transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-foreground text-[10px] leading-tight truncate">
                  Async Queues
                </span>
                <span className="text-[8.5px] sm:text-[9px] text-muted-foreground leading-tight truncate">
                  {locale === "es" ? "Redis & BullMQ" : "Redis & BullMQ"}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-1.5 p-1.5 rounded-lg bg-card/60 dark:bg-muted/15 border border-border/40 hover:border-purple-500/40 transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 mt-0.5 shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-foreground text-[10px] leading-tight truncate">
                  AI-First
                </span>
                <span className="text-[8.5px] sm:text-[9px] text-muted-foreground leading-tight truncate">
                  {locale === "es" ? "Agentes & RAG" : "Agents & RAG"}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-1.5 p-1.5 rounded-lg bg-card/60 dark:bg-muted/15 border border-border/40 hover:border-indigo-500/40 transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 mt-0.5 shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-foreground text-[10px] leading-tight truncate">
                  Clean Arch
                </span>
                <span className="text-[8.5px] sm:text-[9px] text-muted-foreground leading-tight truncate">
                  {locale === "es" ? "TS & Modular" : "TS & Modular"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
