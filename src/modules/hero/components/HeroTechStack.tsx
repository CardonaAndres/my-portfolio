import { TechIcon } from "@/core/components/icons";
import { TECH_CATEGORIES } from "@/modules/hero/constants/hero.constant";

export const HeroTechStack = () => {
  return (
    <section aria-label="Ecosistema tecnológico" className="flex flex-col gap-5">
      {/* Encabezado del Stack con Badge Azul Rey */}
      <div className="flex items-center justify-between border-b border-border/80 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
            Stack Tecnológico
          </span>
          <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            [ {TECH_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0)} Tecnologías ]
          </span>
        </div>
        <span className="text-xs text-muted-foreground hidden sm:inline-block font-mono">
          Ecosistema de producción comprobado
        </span>
      </div>

      {/* Rejilla de Categorías */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {TECH_CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="p-4 rounded-xl border border-border/80 bg-card hover:border-blue-500/30 transition-all duration-200 flex flex-col gap-3 shadow-xs group/card"
          >
            {/* Cabecera de Categoría */}
            <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
              <span className="text-xs font-bold font-mono tracking-wider text-foreground flex items-center gap-1.5">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {category.number}.
                </span>
                <span>{category.title}</span>
              </span>
              <span className="text-[10px] font-mono text-muted-foreground group-hover/card:text-blue-600/80 dark:group-hover/card:text-blue-400/80 transition-colors">
                {category.subtitle}
              </span>
            </div>

            {/* Malla de Tecnologías */}
            <div className="grid grid-cols-4 gap-2">
              {category.items.map((tech) => (
                <div
                  key={tech.name}
                  title={tech.label}
                  className="group/tech flex flex-col items-center justify-center p-2 rounded-lg border border-border/60 bg-muted/20 hover:bg-blue-500/10 hover:border-blue-500/40 active:scale-95 transition-all duration-150 cursor-default"
                >
                  <TechIcon
                    name={tech.name}
                    className="w-5 h-5 group-hover/tech:scale-110 transition-transform duration-150"
                    size={20}
                  />
                  <span className="text-[10px] font-mono text-muted-foreground group-hover/tech:text-foreground mt-1 truncate max-w-full">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
