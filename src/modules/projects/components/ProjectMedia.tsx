"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Film, Image as ImageIcon } from "lucide-react";
import type { ProjectMedia as ProjectMediaType } from "@/modules/projects/interfaces/project.interface";

interface ProjectMediaProps {
  media: ProjectMediaType;
  className?: string;
  isFeatured?: boolean;
}

export const ProjectMedia = ({ media, className = "", isFeatured = false }: ProjectMediaProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [imageError, setImageError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-slate-900/60 border border-border/60 ${
        isFeatured ? "aspect-video sm:aspect-16/10" : "aspect-video"
      } ${className}`}
    >
      {media.type === "video" ? (
        <div className="relative w-full h-full group/video">
          <video
            ref={videoRef}
            src={media.url}
            poster={media.poster}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover select-none"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Overlay de gradiente inferior para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

          {/* Badge superior indicando que es Video Demo */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-md border border-white/10 text-white font-mono text-[10.5px]">
            <Film className="w-3 h-3 text-blue-400" />
            <span>Video Demo</span>
          </div>

          {/* Controles flotantes en hover */}
          <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 opacity-90 group-hover/video:opacity-100 transition-opacity">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
              className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-white border border-white/15 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Activar sonido" : "Silenciar video"}
              className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-white border border-white/15 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full group/image overflow-hidden bg-slate-950/80 flex items-center justify-center">
          {!imageError ? (
            <Image
              src={media.url}
              alt={media.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={
                media.fit === "contain"
                  ? "object-contain p-1 select-none transition-transform duration-500 group-hover/image:scale-[1.02]"
                  : "object-cover object-top select-none transition-transform duration-500 group-hover/image:scale-105"
              }
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-blue-900/20 via-slate-900 to-slate-950 text-muted-foreground p-6 text-center">
              <ImageIcon className="w-8 h-8 text-blue-400/60" />
              <span className="font-mono text-xs text-foreground/80 font-semibold">{media.alt}</span>
              <span className="font-mono text-[10.5px] text-muted-foreground">Vista previa del proyecto</span>
            </div>
          )}

          {/* Overlay sutil solo si es cover */}
          {media.fit !== "contain" && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          )}
        </div>
      )}
    </div>
  );
};
