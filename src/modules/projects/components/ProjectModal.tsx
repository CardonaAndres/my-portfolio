"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  Sparkles,
  ExternalLink,
  Cpu,
  CheckCircle2,
  Film,
  Image as ImageIcon,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Layers,
  Wrench,
  AlertTriangle,
} from "lucide-react";
import { GithubIcon, TechIcon } from "@/core/components/icons";
import type { ProjectModalProps, ProjectMedia } from "@/modules/projects/interfaces/project.interface";

export const ProjectModal = ({ project, onClose, locale }: ProjectModalProps) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Unificamos la media principal y las fotos/videos de la galería
  const allMedia: ProjectMedia[] = project
    ? [project.media, ...(project.gallery || [])]
    : [];

  const currentMedia: ProjectMedia | undefined = allMedia[activeMediaIndex] ?? project?.media;

  // Manejar teclado (Escape para cerrar) y bloqueo del scroll de la página
  useEffect(() => {
    if (!project) return;

    setActiveMediaIndex(0);
    setIsVideoPlaying(true);
    setIsVideoMuted(true);
    setImageError(false);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      style={{ colorScheme: "dark" }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Estilos CSS estrictos para eliminar la barra blanca y flechas de Windows en Chromium */}
      <style>{`
        .modal-scroll-area {
          color-scheme: dark !important;
          scrollbar-width: thin !important;
          scrollbar-color: rgba(59, 130, 246, 0.45) transparent !important;
        }
        .modal-scroll-area::-webkit-scrollbar {
          width: 6px !important;
          height: 6px !important;
          background: transparent !important;
        }
        .modal-scroll-area::-webkit-scrollbar-track {
          background: transparent !important;
          margin: 6px 0 !important;
        }
        .modal-scroll-area::-webkit-scrollbar-thumb {
          background-color: rgba(59, 130, 246, 0.4) !important;
          border-radius: 9999px !important;
          border: none !important;
        }
        .modal-scroll-area::-webkit-scrollbar-thumb:hover {
          background-color: rgba(59, 130, 246, 0.8) !important;
        }
        .modal-scroll-area::-webkit-scrollbar-button {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .modal-scroll-area::-webkit-scrollbar-corner {
          background: transparent !important;
        }
      `}</style>

      <div
        style={{ colorScheme: "dark" }}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-blue-500/40 bg-card dark:bg-[#0a0f19] shadow-2xl shadow-blue-500/10 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. Barra Superior Fija: Categoría, Año, Estado y Botón Cerrar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/70 bg-card/95 dark:bg-[#0c121e]/95 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {project.category}
            </span>
            <span className="text-border">·</span>
            <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
            <span className="text-border">·</span>
            <span className="font-mono text-[10.5px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
              ● {project.status[locale]}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={locale === "es" ? "Cerrar modal" : "Close modal"}
            className="p-1.5 rounded-lg border border-border/60 bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2. Contenido Scrolleable con scrollbar estilizado */}
        <div
          style={{ colorScheme: "dark" }}
          className="modal-scroll-area overflow-y-auto p-5 sm:p-6 space-y-5"
        >
          {/* A. Encabezado Principal: Título, Tagline y Rol de Ingeniería (VISIBLE PRIMERO) */}
          <div className="space-y-2 border-b border-border/50 pb-4">
            {project.myRole && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold">
                <Wrench className="w-3.5 h-3.5 text-blue-500" />
                <span>{project.myRole[locale]}</span>
              </div>
            )}

            <h3 id="modal-project-title" className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
              {project.title[locale]}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 leading-snug">
              {project.tagline[locale]}
            </p>
          </div>

          {/* B. Reproductor / Galería Multimedia con Altura Controlada (No gigante) */}
          {currentMedia && (
            <div className="space-y-2.5">
              <div className="relative w-full h-52 sm:h-64 md:h-72 rounded-xl overflow-hidden bg-slate-950/80 border border-border/80 shadow-md flex items-center justify-center">
                {currentMedia.type === "video" ? (
                  <div className="relative w-full h-full group/video">
                    <video
                      key={currentMedia.url}
                      src={currentMedia.url}
                      poster={currentMedia.poster}
                      autoPlay
                      loop
                      muted={isVideoMuted}
                      playsInline
                      className="w-full h-full object-contain select-none"
                    />

                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-md border border-white/10 text-white font-mono text-[10.5px]">
                      <Film className="w-3.5 h-3.5 text-blue-400" />
                      <span>{locale === "es" ? "Video Demostrativo" : "Demo Video"}</span>
                    </div>

                    <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                        aria-label={isVideoPlaying ? "Pausar" : "Reproducir"}
                        className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-white border border-white/15 backdrop-blur-md transition-all cursor-pointer"
                      >
                        {isVideoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsVideoMuted(!isVideoMuted)}
                        aria-label={isVideoMuted ? "Activar audio" : "Silenciar"}
                        className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-white border border-white/15 backdrop-blur-md transition-all cursor-pointer"
                      >
                        {isVideoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    {!imageError ? (
                      <Image
                        src={currentMedia.url}
                        alt={currentMedia.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 850px"
                        className="object-contain select-none p-1"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-blue-950/30 via-slate-900 to-slate-950 text-muted-foreground p-6 text-center">
                        <ImageIcon className="w-8 h-8 text-blue-400/60" />
                        <span className="font-mono text-xs text-foreground/80 font-semibold">
                          {currentMedia.alt}
                        </span>
                        <span className="font-mono text-[10.5px] text-muted-foreground">
                          {locale === "es" ? "Vista previa del proyecto" : "Project preview"}
                        </span>
                      </div>
                    )}

                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-md border border-white/10 text-white font-mono text-[10.5px]">
                      <ImageIcon className="w-3.5 h-3.5 text-blue-400" />
                      <span>{locale === "es" ? "Captura / Preview" : "Screenshot / Preview"}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Selector de Galería (si hay más de 1 medio) */}
              {allMedia.length > 1 && (
                <div
                  style={{ colorScheme: "dark" }}
                  className="modal-scroll-area flex items-center gap-2 overflow-x-auto pb-1 pt-0.5"
                >
                  {allMedia.map((mediaItem, idx) => (
                    <button
                      key={mediaItem.url + idx}
                      type="button"
                      onClick={() => {
                        setActiveMediaIndex(idx);
                        setImageError(false);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-mono text-[11px] border transition-all cursor-pointer shrink-0 ${
                        activeMediaIndex === idx
                          ? "border-blue-500 bg-blue-500/10 text-blue-500 dark:text-blue-400 font-bold shadow-xs"
                          : "border-border/60 bg-muted/30 text-muted-foreground hover:bg-muted/60"
                      }`}
                    >
                      {mediaItem.type === "video" ? (
                        <Film className="w-3 h-3 text-blue-400" />
                      ) : (
                        <ImageIcon className="w-3 h-3" />
                      )}
                      <span>
                        {mediaItem.type === "video"
                          ? `Video ${idx + 1}`
                          : `Foto ${idx + 1}`}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* C. Métricas de Impacto */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border/80 bg-muted/40 dark:bg-[#121824] p-3 text-center flex flex-col justify-center"
                >
                  <span className="font-mono text-sm sm:text-base font-bold text-foreground">
                    {metric.value}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* D. Reto & Contexto (Challenge) */}
          {project.challenge && (
            <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/[0.03] space-y-1 font-mono text-xs">
              <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                <span>{locale === "es" ? "El Reto & Contexto:" : "The Challenge & Context:"}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {project.challenge[locale]}
              </p>
            </div>
          )}

          {/* E. Solución Técnica & Aportes de Ingeniería (Solution) */}
          {project.solution && (
            <div className="p-3.5 rounded-xl border border-blue-500/30 bg-blue-500/5 dark:bg-blue-500/[0.03] space-y-1 font-mono text-xs">
              <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>
                  {locale === "es"
                    ? "Solución Técnica & Aportes Clave:"
                    : "Technical Solution & Key Contributions:"}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {project.solution[locale]}
              </p>
            </div>
          )}

          {/* F. Descripción Completa y Arquitectura */}
          <div className="space-y-2.5 pt-1">
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {project.description[locale]}
            </p>

            {project.architecture && (
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-muted/40 dark:bg-[#121927] border border-border/80 font-mono text-xs">
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
          </div>

          {/* G. Hitos Técnicos Clave */}
          {project.highlights && project.highlights[locale] && (
            <div className="space-y-2 pt-1">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-500" />
                <span>{locale === "es" ? "Hitos Técnicos Alcanzados:" : "Key Technical Milestones:"}</span>
              </span>
              <ul className="space-y-1.5">
                {project.highlights[locale].map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-xs text-foreground/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* H. Stack Tecnológico con Iconos */}
          <div className="space-y-2 pt-2 border-t border-border/60">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold block">
              {locale === "es" ? "Stack Tecnológico Utilizado:" : "Technologies & Tools:"}
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted/50 dark:bg-[#151b27] border border-border/80 font-mono text-xs text-foreground shadow-2xs"
                >
                  <TechIcon name={tech.toLowerCase().replace(/[^a-z0-9]/g, "")} className="w-3 h-3 shrink-0" size={13} />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Footer Fijo del Modal / Acciones */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-t border-border/70 bg-card/95 dark:bg-[#0c121e]/95 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold shadow-md shadow-blue-600/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
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

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-border/70 bg-muted/40 hover:bg-muted font-mono text-xs font-medium text-muted-foreground hover:text-foreground transition-all cursor-pointer ml-auto"
          >
            {locale === "es" ? "Cerrar" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
};
