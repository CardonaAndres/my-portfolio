import type { HeroProps } from "@/modules/hero/interfaces/hero.interface";
import { HeroHeader } from "@/modules/hero/components/HeroHeader";
import { HeroTechStack } from "@/modules/hero/components/HeroTechStack";

export const HeroSection = ({ dict, locale }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 flex flex-col gap-14">
        {/* 1. Encabezado, Biografía y Acciones */}
        <HeroHeader dict={dict} locale={locale} />

        {/* 2. Matriz de Tecnologías (Stack Tecnológico) */}
        <HeroTechStack />
      </div>
    </section>
  );
};
