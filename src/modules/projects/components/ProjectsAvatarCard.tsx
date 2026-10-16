"use client";

import Image from "next/image";
import { Lightbulb, Rocket, Sparkles, Terminal, ShieldCheck, Zap, Bot, Layers } from "lucide-react";
import type { Locale } from "@/core/interfaces/i18n.interface";

interface ProjectsAvatarCardProps {
  locale: Locale;
}

export const ProjectsAvatarCard = ({ locale }: ProjectsAvatarCardProps) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      {/* 1. Tarjeta Visual Principal con Avatar 3D y Floating Badges */}
      <div className="relative w-full rounded-2xl border border-blue-500/30 bg-card/85 dark:bg-[#0c121e]/90 backdrop-blur-md p-6 sm:p-8 flex flex-col items-center justify-center overflow-hidden shadow-lg shadow-blue-500/5 group">
        {/* Halo de iluminación ambiental dinámico */}
        <div
          aria-hidden="true"
          className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-600/20 via-blue-500/10 to-transparent blur-3xl pointer-events-none -z-10"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-600/15 via-blue-500/10 to-transparent blur-3xl pointer-events-none -z-10"
        />

        {/* Contenedor relativo de la imagen con badges flotantes */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center my-2">
          {/* Badge Superior Izquierdo: Innovación & Ideas */}
          <div className="inline-flex absolute -top-3 -left-3 sm:-left-5 z-20 items-center gap-1.5 px-2.5 py-1 rounded-lg bg-card/95 dark:bg-[#0c121e]/95 backdrop-blur-md border border-border/80 font-mono text-[10.5px] text-foreground shadow-md select-none hover:border-amber-500/40 transition-colors">
            <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="font-semibold text-foreground">Innovación &amp; R&amp;D</span>
          </div>

          {/* Badge Superior Derecho: Casos Reales */}
          <div className="inline-flex absolute -top-3 -right-2 sm:-right-4 z-20 items-center gap-1.5 px-2.5 py-1 rounded-lg bg-card/95 dark:bg-[#0c121e]/95 backdrop-blur-md border border-border/80 font-mono text-[10.5px] text-foreground shadow-md select-none hover:border-blue-500/40 transition-colors">
            <Rocket className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="font-bold text-foreground">Casos Reales</span>
          </div>

          {/* Ilustración 3D del Desarrollador Presentando Proyectos */}
          <Image
            src="/imgs/project-img.png"
            alt="Andrés Cardona - Proyectos y Arquitectura"
            width={380}
            height={380}
            priority
            className="w-full h-full object-contain drop-shadow-2xl select-none animate-float"
          />

          {/* Badge Inferior Centrado: Arquitectura Verificada */}
          <div className="inline-flex absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 items-center gap-2 px-3.5 py-1.5 rounded-xl bg-card/95 dark:bg-[#0c121e]/95 backdrop-blur-md border border-blue-500/50 font-mono text-xs text-foreground shadow-xl shadow-blue-500/15 select-none whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse shrink-0" />
            <div className="flex flex-col">
              <span className="font-bold text-blue-600 dark:text-blue-400 text-[11px] leading-tight">
                {locale === "es" ? "Ingeniería de Software:" : "Software Engineering:"}
              </span>
              <span className="text-[10px] text-muted-foreground leading-tight">
                {locale === "es" ? "Clean Architecture & Alto Rendimiento" : "Clean Architecture & Performance"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Tarjeta de Criterios y Filosofía Técnica (Engineering Principles) */}
      <div className="rounded-2xl border border-border/80 bg-card/75 dark:bg-[#0c121e]/80 backdrop-blur-md p-5 flex flex-col gap-4 shadow-sm">
        <div className="flex items-center justify-between border-b border-border/60 pb-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
              {locale === "es" ? "Criterios de Producción" : "Production Standards"}
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            AI-First
          </span>
        </div>

        <ul className="space-y-3 font-mono text-xs">
          <li className="flex items-start gap-2.5">
            <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-semibold text-foreground">Zero Downtime: </span>
              <span className="text-muted-foreground">
                {locale === "es"
                  ? "Despliegues Blue-Green en Docker sin caídas de servicio."
                  : "Blue-Green Docker deployments with zero service interruptions."}
              </span>
            </div>
          </li>

          <li className="flex items-start gap-2.5">
            <div className="p-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0">
              <Zap className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-semibold text-foreground">Async &amp; Queues: </span>
              <span className="text-muted-foreground">
                {locale === "es"
                  ? "Colas en Redis y procesamiento por lotes de alta velocidad."
                  : "Redis-backed job queues and high-speed batch engines."}
              </span>
            </div>
          </li>

          <li className="flex items-start gap-2.5">
            <div className="p-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-semibold text-foreground">AI &amp; RAG: </span>
              <span className="text-muted-foreground">
                {locale === "es"
                  ? "Agentes autónomos, embeddings vectoriales y LLMs."
                  : "Autonomous agents, vector embeddings, and LLM pipelines."}
              </span>
            </div>
          </li>

          <li className="flex items-start gap-2.5">
            <div className="p-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-semibold text-foreground">Clean Architecture: </span>
              <span className="text-muted-foreground">
                {locale === "es"
                  ? "Modularidad estricta, SOLID y tipado end-to-end con TypeScript."
                  : "Strict modularity, SOLID principles, and end-to-end TypeScript."}
              </span>
            </div>
          </li>
        </ul>

        {/* Cita de Valor */}
        <div className="pt-2 border-t border-border/50 text-[11px] text-muted-foreground leading-relaxed italic">
          {locale === "es"
            ? "\"Arquitecturas pensadas para escalar con el negocio sin comprometer la estabilidad técnica.\""
            : "\"Architectures built to scale with the business without compromising technical reliability.\""}
        </div>
      </div>
    </div>
  );
};
