import type { HeroProps } from "@/modules/hero/interfaces/hero.interface";
import { HeroHeader } from "@/modules/hero/components/HeroHeader";
import { HeroTechStack } from "@/modules/hero/components/HeroTechStack";

export const HeroSection = ({ dict, locale }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="container mx-auto max-w-5xl lg:max-w-6xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 flex flex-col gap-10 sm:gap-12">
        {/* 1. Encabezado, Biografía y Acciones */}
        <HeroHeader dict={dict} locale={locale} />

        {/* 2. Matriz de Tecnologías (Stack Tecnológico) */}
        <HeroTechStack />
      </div>
    </section>
  );
};
