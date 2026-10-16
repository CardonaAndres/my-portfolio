import Image from "next/image";
import { SITE_CONFIG } from "@/core/config/site.config";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/core/components/icons";
import type { HeroProps } from "@/modules/hero/interfaces/hero.interface";

export const HeroHeader = ({ dict, locale }: HeroProps) => {
  return (
    <section className="flex flex-col gap-5 sm:gap-6 border-b border-border/80 pb-8 sm:pb-10">
      {/* Barra Superior en Móvil (< sm): Cápsula Única Integrada y Balanceada */}
      <div className="flex sm:hidden items-center justify-between w-full px-3.5 py-2 rounded-full bg-card/70 dark:bg-card/50 backdrop-blur-md border border-border/70 text-xs font-mono shadow-2xs">
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>{locale === "es" ? "Disponible para proyectos" : "Open to opportunities"}</span>
        </div>

        <div className="flex items-center gap-1.5 text-muted-foreground text-[11px]">
          <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
          <span>{dict.location}</span>
        </div>
      </div>

      {/* Barra Superior en Desktop y Tablet (>= sm): Barra Completa con Separador */}
      <div className="hidden sm:flex w-full items-center justify-between gap-2.5 border-b border-border/50 pb-2.5 text-xs font-mono">
        {/* Badge de Disponibilidad: Cápsula estilizada con glow verde sutil */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>{dict.badge}</span>
        </div>

        {/* Ubicación y Especialidad */}
        <div className="flex items-center gap-2.5 text-muted-foreground text-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card/60 border border-border/70 text-foreground/80">
            <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>{dict.location}</span>
          </span>
          <span className="hidden sm:inline-block text-border">|</span>
          <span className="hidden sm:inline-flex items-center gap-1.5 uppercase tracking-wider text-blue-600/90 dark:text-blue-400/90 font-semibold text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            Full Stack · Cloud · AI-First
          </span>
        </div>
      </div>

      {/* Grid Principal del Hero: 2 Columnas Compacto (Todo visible en pantalla) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* Columna Izquierda: Información, Redes y Acciones (7 columnas) */}
        <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-4.5">
          {/* Fila de Redes Sociales Rápidas */}
          <div className="flex items-center gap-2">
            <a
              href={SITE_CONFIG.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Andrés Cardona"
              title="GitHub"
              className="w-9 h-9 rounded-xl border border-border/80 bg-card/80 hover:bg-muted hover:border-blue-500/50 hover:text-foreground text-muted-foreground flex items-center justify-center transition-all duration-200 shadow-2xs hover:-translate-y-0.5 cursor-pointer"
            >
              <GithubIcon className="w-4.5 h-4.5" size={18} />
            </a>
            <a
              href={SITE_CONFIG.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Andrés Cardona"
              title="LinkedIn"
              className="w-9 h-9 rounded-xl border border-border/80 bg-card/80 hover:bg-blue-600/10 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 text-muted-foreground flex items-center justify-center transition-all duration-200 shadow-2xs hover:-translate-y-0.5 cursor-pointer"
            >
              <LinkedinIcon className="w-4.5 h-4.5" size={18} />
            </a>
            <a
              href={SITE_CONFIG.links.email}
              aria-label="Email de Andrés Cardona"
              title="Email"
              className="w-9 h-9 rounded-xl border border-border/80 bg-card/80 hover:bg-blue-600/10 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 text-muted-foreground flex items-center justify-center transition-all duration-200 shadow-2xs hover:-translate-y-0.5 cursor-pointer"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>

          {/* Saludo y Nombre Principal */}
          <div className="flex flex-col gap-1 sm:gap-1.5">
            <div className="flex items-center gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-mono text-xs sm:text-sm font-semibold">
                {dict.greeting}
              </span>
              <span className="text-border text-xs">/</span>
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                Full Stack Developer
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              {dict.name}
            </h1>

            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <p className="text-base sm:text-lg font-semibold text-foreground/90 tracking-tight">
                {dict.role}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[10.5px] font-mono font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                <Sparkles className="w-3 h-3 text-blue-500" />
                Backend &amp; Cloud · AI-First
              </span>
            </div>
          </div>

          {/* Declaración de Valor Profesional Compacta */}
          <div className="border-l-2 border-blue-600 dark:border-blue-500 pl-3.5 sm:pl-4 space-y-2 py-0.5">
            <p className="text-sm sm:text-base text-foreground font-semibold leading-snug">
              {dict.tagline}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl">
              {dict.description}
            </p>
          </div>

          {/* Botones de Acción Sólidos con Azul Rey Protagonista */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {/* Botón Primario: Azul Rey Elegante */}
            <a
              href={`/${locale}#projects`}
              className="inline-flex items-center gap-2 justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 text-sm font-semibold shadow-md shadow-blue-600/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>{dict.ctaProjects}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Botón Contacto / Email con Hover Azul Rey */}
            <a
              href={`/${locale}#contact`}
              className="inline-flex items-center gap-2 justify-center rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-2xs cursor-pointer"
            >
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span>{dict.ctaContact}</span>
            </a>
          </div>

          {/* Showcase Visual Móvil (< lg) al FINAL: Avatar 3D Centrado + 3 Tarjetas de Cristal Completas */}
          <div className="flex lg:hidden flex-col items-center gap-4 pt-4">
            {/* Contenedor del Avatar 3D con Aura de Iluminación */}
            <div className="relative w-48 sm:w-56 aspect-square flex items-center justify-center">
              <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-blue-600/25 via-blue-500/15 to-transparent blur-2xl -z-10 pointer-events-none" />
              <Image
                src="/imgs/me-hero.png"
                alt="Andrés Cardona - Ingeniero de Software Full Stack"
                width={360}
                height={360}
                priority
                className="w-full h-full object-contain drop-shadow-2xl select-none"
              />
            </div>

            {/* 3 Tarjetas Completas de Cristal Armonizadas para Móvil */}
            <div className="w-full max-w-md flex flex-col sm:grid sm:grid-cols-3 gap-2 font-mono text-xs">
              {/* Tarjeta 1: Especialidad Core */}
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-card/90 dark:bg-card/85 backdrop-blur-md border border-border/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-foreground text-[11px] leading-tight truncate">
                    {dict.focusBackendLabel}:
                  </span>
                  <span className="text-[10px] text-muted-foreground leading-tight truncate">
                    {dict.focusBackendText}
                  </span>
                </div>
              </div>

              {/* Tarjeta 2: AI-First (Protagonista) */}
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-card/95 dark:bg-card/90 backdrop-blur-md border border-blue-500/40 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-blue-600 dark:text-blue-400 text-[11px] leading-tight truncate">
                    {dict.focusAiLabel ?? "AI-First"}:
                  </span>
                  <span className="text-[10px] text-muted-foreground leading-tight truncate">
                    {dict.focusAiText ?? "LLMs, Agentes & Automatización"}
                  </span>
                </div>
              </div>

              {/* Tarjeta 3: Frontend E2E */}
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-card/90 dark:bg-card/85 backdrop-blur-md border border-border/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-foreground text-[11px] leading-tight truncate">
                    {dict.focusFrontendLabel}:
                  </span>
                  <span className="text-[10px] text-muted-foreground leading-tight truncate">
                    {dict.focusFrontendText}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha Desktop (>= lg): Ilustración 3D Developer + 3 Floating Badges Desescalados */}
        <div className="hidden lg:flex lg:col-span-5 items-center justify-end relative pt-6 pb-24">
          {/* Aura de iluminación ambiental circular */}
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-blue-600/25 via-blue-500/15 to-transparent blur-3xl -z-10 pointer-events-none" />

          {/* Contenedor del Avatar 3D con Floating Badges desescalados en la izquierda y derecha */}
          <div className="relative w-full max-w-[360px] aspect-square transition-transform duration-500 hover:scale-[1.01]">
            <Image
              src="/imgs/me-hero.png"
              alt="Andrés Cardona - Ingeniero de Software Full Stack"
              width={420}
              height={420}
              priority
              className="w-full h-full object-contain drop-shadow-2xl select-none"
            />

            {/* Badge 1: Especialidad Core Backend (Izquierda, nivel superior) */}
            <div className="inline-flex absolute -bottom-4 -left-22 z-10 items-center gap-2 px-3 py-1.5 rounded-xl bg-card/90 dark:bg-card/85 backdrop-blur-md border border-border/80 font-mono text-xs text-foreground shadow-lg shadow-black/10 hover:border-blue-500/40 transition-all select-none">
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold text-foreground text-[11px] leading-tight whitespace-nowrap">
                  {dict.focusBackendLabel}:
                </span>
                <span className="text-[10px] text-muted-foreground leading-tight whitespace-nowrap">
                  {dict.focusBackendText}
                </span>
              </div>
            </div>

            {/* Badge 2: AI-First (Centro-izquierda, escalón inferior con separación armoniosa) */}
            <div className="inline-flex absolute -bottom-15 left-4 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-card/95 dark:bg-card/90 backdrop-blur-md border border-blue-500/50 font-mono text-xs text-foreground shadow-xl shadow-blue-500/15 hover:border-blue-500/80 transition-all select-none">
              <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold text-blue-600 dark:text-blue-400 text-[11px] leading-tight whitespace-nowrap">
                  {dict.focusAiLabel ?? "AI-First"}:
                </span>
                <span className="text-[10px] text-muted-foreground leading-tight whitespace-nowrap">
                  {dict.focusAiText ?? "LLMs, Agentes & Automatización"}
                </span>
              </div>
            </div>

            {/* Badge 3: Frontend E2E (Derecha, nivel superior simétrico con Core) */}
            <div className="inline-flex absolute -bottom-4 -right-16 z-10 items-center gap-2 px-3 py-1.5 rounded-xl bg-card/90 dark:bg-card/85 backdrop-blur-md border border-border/80 font-mono text-xs text-foreground shadow-lg shadow-black/10 hover:border-border transition-all select-none">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold text-foreground text-[11px] leading-tight whitespace-nowrap">
                  {dict.focusFrontendLabel}:
                </span>
                <span className="text-[10px] text-muted-foreground leading-tight whitespace-nowrap">
                  {dict.focusFrontendText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
