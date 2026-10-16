import Image from "next/image";
import { Cloud, Database, Layout, Server, Sparkles, Terminal } from "lucide-react";
import { TechIcon } from "@/core/components/icons";
import { TECH_CATEGORIES } from "@/modules/hero/constants/hero.constant";

const CATEGORY_META: Record<
  string,
  {
    displayTitle: string;
    Icon: typeof Layout;
  }
> = {
  frontend: {
    displayTitle: "Frontend",
    Icon: Layout,
  },
  backend: {
    displayTitle: "Backend",
    Icon: Server,
  },
  data: {
    displayTitle: "Datos",
    Icon: Database,
  },
  cloud: {
    displayTitle: "DevOps & Cloud",
    Icon: Cloud,
  },
};

export const HeroTechStack = () => {
  const totalTechs = TECH_CATEGORIES.reduce(
    (acc, cat) => acc + cat.items.length,
    0,
  );

  return (
    <section
      aria-label="Ecosistema tecnológico"
      className="flex flex-col gap-6"
    >
      {/* Encabezado del Stack Tecnológico */}
      <div className="flex items-center justify-between border-b border-border/80 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
            Stack Tecnológico
          </span>
          <span className="font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            [ {totalTechs} Tecnologías ]
          </span>
        </div>
        <span className="text-xs text-muted-foreground hidden sm:inline-block font-mono">
          Ecosistema de producción comprobado
        </span>
      </div>

      {/* Disposición Split: Ilustración 3D a la izquierda (con micro-badges alrededor) y Stack protagonista a la derecha */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* COLUMNA IZQUIERDA (lg:col-span-5 xl:col-span-4): Avatar 3D integrado al fondo con complementos arriba y badges sin solapamiento abajo */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center lg:items-start justify-center relative py-6 sm:py-8 lg:py-10">
          {/* Aura de iluminación ambiental circular */}
          <div
            aria-hidden="true"
            className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-blue-600/25 via-blue-500/15 to-transparent blur-3xl -z-10 pointer-events-none"
          />

          {/* Micro-badge de cabecera arriba del avatar */}
          <div className="flex items-center gap-2 mb-5.5 select-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-mono text-[11px] font-semibold">
              <Sparkles className="w-3 h-3 text-blue-500" />
              <span>Full Stack &amp; Cloud</span>
            </span>
          </div>

          {/* Contenedor del Avatar 3D con Floating Badges arriba y abajo */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 transition-transform duration-500 hover:scale-[1.01]">
            {/* Elemento decorativo superior izquierdo: Zero Downtime */}
            <div className="inline-flex absolute -top-3 -left-3 sm:-left-5 z-20 items-center gap-1.5 px-2.5 py-1 rounded-lg bg-card/90 dark:bg-[#0c121e]/90 backdrop-blur-md border border-border/80 font-mono text-[10.5px] text-foreground shadow-md select-none hover:border-emerald-500/40 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                Zero Downtime
              </span>
            </div>

            {/* Elemento decorativo superior derecho: Terminal CI/CD */}
            <div className="inline-flex absolute -top-3 -right-2 sm:-right-4 z-20 items-center gap-1.5 px-2.5 py-1 rounded-lg bg-card/90 dark:bg-[#0c121e]/90 backdrop-blur-md border border-border/80 font-mono text-[10.5px] text-foreground shadow-md select-none hover:border-blue-500/40 transition-colors">
              <Terminal className="w-3 h-3 text-blue-500 shrink-0" />
              <span className="text-muted-foreground">CI/CD:</span>
              <span className="font-bold text-foreground">Automated</span>
            </div>

            {/* Ilustración 3D con animación flotante */}
            <Image
              src="/imgs/stack-img.png"
              alt="Andrés Cardona - Stack Tecnológico"
              width={400}
              height={400}
              priority
              className="w-full h-full object-contain drop-shadow-2xl select-none animate-float"
            />

            {/* Badge 1: Nivel Superior (Izquierda, más abajo para liberar el icono React) */}
            <div className="inline-flex absolute -bottom-21 -left-2 sm:-left-7 z-10 items-center gap-2 px-3 py-1.5 rounded-xl bg-card/90 dark:bg-card/85 backdrop-blur-md border border-border/80 font-mono text-xs text-foreground shadow-lg shadow-black/10 hover:border-blue-500/40 select-none">
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold text-foreground text-[11px] leading-tight whitespace-nowrap">
                  Full Stack Ecosystem:
                </span>
                <span className="text-[10px] text-muted-foreground leading-tight whitespace-nowrap">
                  Frontend, Backend &amp; Cloud
                </span>
              </div>
            </div>

            {/* Badge 2: Nivel Inferior Escalonado (Derecha, sin solaparse con Badge 1) */}
            <div className="inline-flex absolute -bottom-9 right-[-4px] sm:-right-4 z-20 items-center gap-2 px-5 py-1.5 rounded-xl bg-card/95 dark:bg-card/90 backdrop-blur-md border border-blue-500/50 font-mono text-xs text-foreground shadow-xl shadow-blue-500/15 hover:border-blue-500/80 select-none">
              <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold text-blue-600 dark:text-blue-400 text-[11px] leading-tight whitespace-nowrap">
                  Producción Comprobada:
                </span>
                <span className="text-[10px] text-muted-foreground leading-tight whitespace-nowrap">
                  Clean Code &amp; Alto Rendimiento
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA (lg:col-span-7 xl:col-span-8): Grid 2x2 de Categorías con Mayor Protagonismo */}
        <div className="lg:col-span-7 xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TECH_CATEGORIES.map((category) => {
            const meta = CATEGORY_META[category.id] ?? {
              displayTitle: category.title,
              Icon: Layout,
            };
            const CategoryIcon = meta.Icon;

            // División equilibrada de iconos en 2 filas
            const topRowCount = category.items.length === 7 ? 3 : 4;
            const topRow = category.items.slice(0, topRowCount);
            const bottomRow = category.items.slice(topRowCount);

            return (
              <div
                key={category.id}
                className="rounded-2xl border border-border/80 bg-card/70 dark:bg-[#0c1017]/90 backdrop-blur-sm p-5 flex flex-col justify-between gap-4 shadow-xs hover:border-blue-500/40 hover:bg-blue-500/[0.015] transition-all duration-200 group/col"
              >
                {/* Cabecera de Categoría (Sin emojis, con icono vectorial estilizado) */}
                <div className="flex items-center justify-between border-b border-border/50 pb-2.5">
                  <div className="flex items-center gap-2">
                    <CategoryIcon className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <h3 className="font-mono text-sm font-bold tracking-tight text-foreground">
                      {meta.displayTitle}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider px-2 py-0.5 rounded-md bg-muted/50 border border-border/40">
                    {category.items.length} Techs
                  </span>
                </div>

                {/* Bloque Central: App-Icon Tiles en 2 Filas Centradas */}
                <div className="flex flex-col items-center justify-center gap-2.5 my-auto">
                  {/* Fila Superior */}
                  <div className="flex items-center justify-center gap-2.5">
                    {topRow.map((tech) => (
                      <div
                        key={tech.name}
                        className="group/icon relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-muted/40 dark:bg-[#151b27] border border-border/80 dark:border-white/[0.08] flex items-center justify-center shadow-xs hover:border-blue-500/60 hover:bg-blue-500/10 hover:-translate-y-1 hover:scale-105 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-200 cursor-default"
                      >
                        <TechIcon
                          name={tech.name}
                          className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 group-hover/icon:scale-110"
                          size={28}
                        />
                        {/* Tooltip flotante */}
                        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-slate-900/95 dark:bg-slate-800 border border-border/80 text-[10px] font-mono text-white opacity-0 group-hover/icon:opacity-100 transition-opacity duration-150 whitespace-nowrap z-30 shadow-md">
                          {tech.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Fila Inferior */}
                  <div className="flex items-center justify-center gap-2.5">
                    {bottomRow.map((tech) => (
                      <div
                        key={tech.name}
                        className="group/icon relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-muted/40 dark:bg-[#151b27] border border-border/80 dark:border-white/[0.08] flex items-center justify-center shadow-xs hover:border-blue-500/60 hover:bg-blue-500/10 hover:-translate-y-1 hover:scale-105 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-200 cursor-default"
                      >
                        <TechIcon
                          name={tech.name}
                          className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 group-hover/icon:scale-110"
                          size={28}
                        />
                        {/* Tooltip flotante */}
                        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-slate-900/95 dark:bg-slate-800 border border-border/80 text-[10px] font-mono text-white opacity-0 group-hover/icon:opacity-100 transition-opacity duration-150 whitespace-nowrap z-30 shadow-md">
                          {tech.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pie de Categoría: Nombres Completos de Tecnologías */}
                <div className="pt-3 border-t border-border/40 text-center">
                  <p className="text-[11px] font-mono text-muted-foreground leading-relaxed break-normal max-w-[280px] mx-auto">
                    {category.items.map((tech, idx) => (
                      <span key={tech.name} className="inline-block">
                        <span className="hover:text-foreground transition-colors cursor-default">
                          {tech.label}
                        </span>
                        {idx < category.items.length - 1 && (
                          <span className="mx-1 text-muted-foreground/40 select-none">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
