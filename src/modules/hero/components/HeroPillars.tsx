import { ENGINEERING_PILLARS } from "@/modules/hero/constants/hero.constant";

export const HeroPillars = () => {
  return (
    <section
      aria-label="Pilares de ingeniería"
      className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/80 border border-border/80 rounded-xl bg-card shadow-xs overflow-hidden"
    >
      {ENGINEERING_PILLARS.map((pillar) => (
        <div
          key={pillar.id}
          className="p-6 flex flex-col gap-2.5 hover:bg-muted/30 transition-colors duration-200 group"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1.5">
            <span>// {pillar.number}</span>
            <span className="text-muted-foreground/60">—</span>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              {pillar.id === "experience"
                ? "Experiencia"
                : pillar.id === "infrastructure"
                ? "Infraestructura"
                : "Escalabilidad"}
            </span>
          </span>

          <span className="text-2xl font-bold tracking-tight text-foreground font-mono group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {pillar.metric}
          </span>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {pillar.description}
          </p>
        </div>
      ))}
    </section>
  );
};
