# 🤖 Instrucciones para Agentes de IA (AGENTS.md)

Este documento es la referencia principal para cualquier agente inteligente (Antigravity, Cursor, Copilot, etc.) que trabaje en este repositorio.

---

## 📌 Contexto del Proyecto

- **Nombre:** Portfolio Personal
- **Framework:** Next.js 16 (App Router) + React 19
- **Lenguaje:** TypeScript 5 (Modo estricto activado, prohibido `any`)
- **Estilos:** Tailwind CSS v4
- **Gestor de paquetes:** pnpm

---

## 🏛️ Arquitectura del Proyecto (Modular Layered Architecture)

Este proyecto sigue una arquitectura **Modular por Dominio (Feature-Driven)** con **Separación Estricta de Capas**.

El código se organiza en tres zonas principales:
1. `src/app/`: **Capa de Enrutamiento y Entrega.** Páginas delgadas (`page.tsx`) sin lógica de negocio, layouts y adaptadores de ruta.
2. `src/modules/[feature]/`: **Capa de Negocio Modular.** Módulos autónomos (`projects`, `experience`, `skills`, `contact`, `hero`, etc.).
3. `src/core/`: **Núcleo Compartido.** Componentes primitivos de UI, hooks utilitarios globales, estilos base y configuración.

---

## 📜 Reglas de Arquitectura Mandatorias

Todas las reglas detalladas están disponibles en la carpeta [`agents/rules/`](./rules/README.md):

1. **[00 - Visión General y Dependencias](./rules/00-architecture-overview.md):**
   - Flujo de dependencias: `app -> modules -> core`.
   - Módulos desacoplados: no importar archivos internos entre módulos; usar siempre `index.ts`.
2. **[01 - Estructura Interna de Módulos](./rules/01-module-structure.md):**
   - Cada módulo contiene: `components/`, `hooks/`, `services/`, `interfaces/`, `constants/`, `utils/`, e `index.ts`.
3. **[02 - Reglas para Next.js App Router](./rules/02-nextjs-app-router.md):**
   - **Páginas delgadas:** `page.tsx` no tiene estados locales, ni efectos, ni fetch spaghetti. Es un orquestador.
   - Server Components por defecto; `'use client'` solo en las hojas interactivas.
4. **[03 - Separación Estricta de Capas](./rules/03-layers-and-separation-of-concerns.md):**
   - `interfaces/`: **Solo tipos y contratos**, cero lógica ejecutable.
   - `hooks/`: **Solo lógica reactiva y estado**, **cero JSX**.
   - `components/`: **Solo UI y presentación**, delegan lógica a hooks o servicios.
   - `services/`: **Solo obtención de datos y Server Actions**, funciones asíncronas puras sin hooks.
   - `utils/`: **Solo funciones puras y deterministas**.
5. **[04 - Convenciones de Nombres y Estilo](./rules/04-naming-conventions-and-standards.md):**
   - **SIEMPRE importaciones absolutas (`@/*`):** Prohibido el uso de rutas relativas (`../` o `./`) en cualquier archivo del proyecto sin excepción.
   - Componentes en `PascalCase.tsx`.
   - Hooks en `useCamelCase.ts`.
   - Sufijos descriptivos: `.interface.ts`, `.service.ts`, `.util.ts`, `.constant.ts`.
   - Named exports preferidos; default exports únicamente en archivos de ruta de Next.js.
6. **[05 - Estrategias de Datos y Estado](./rules/05-data-fetching-and-state.md):**
   - Fetching encapsulado en servicios (permite pasar de mocks a CMS/API sin tocar la UI).
   - Server Actions para formularios y mutaciones.

---

## 🚨 Comportamiento Esperado del Agente

Cuando se te solicite crear una nueva funcionalidad (por ejemplo, una sección de "Experiencia"):
1. **Crear el módulo** en `src/modules/[nombre]/`.
2. **Definir las interfaces** en `interfaces/[nombre].interface.ts` primero.
3. **Crear datos mock o servicios** en `constants/` o `services/`.
4. **Crear la lógica de interacción** en `hooks/` si existe interactividad.
5. **Crear los componentes visuales** en `components/`.
6. **Exportar la API pública** a través de `index.ts`.
7. **Consumir el módulo** desde `src/app/.../page.tsx` manteniendo la página delgada y limpia.
8. **Usar SIEMPRE importaciones absolutas (`@/*`)**, nunca rutas relativas (`../` o `./`).
