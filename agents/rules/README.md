# 🏛️ Guía de Arquitectura del Proyecto - Reglas y Estándares

Bienvenido al compendio de reglas arquitectónicas para el proyecto **Portfolio** (Next.js 16 + React 19 + TypeScript + Tailwind CSS v4).

Este directorio contiene las directrices mandatorias que cualquier desarrollador o agente de IA debe seguir al agregar, modificar o refactorizar código en este repositorio.

---

## 🎯 Filosofía Arquitectónica

1. **Modularidad primero (Feature-Driven / Vertical Slice):** El código se organiza por dominio/funcionalidad de negocio (`modules/`), no por tipo técnico global.
2. **Separación estricta de capas:** Cada archivo tiene una única responsabilidad. La lógica de negocio jamás se mezcla con la presentación (JSX), y los contratos de datos (interfaces) nunca contienen lógica ejecutable.
3. **Páginas delgadas (Thin Pages):** En Next.js App Router, `page.tsx` es únicamente un punto de entrada/enrutador. No contiene lógica de negocio, no maneja estados complejos ni define UI pesada en línea.
4. **Server First:** Por defecto, los componentes son **React Server Components (RSC)**. El modificador `'use client'` se empuja hasta las hojas del árbol de componentes.
5. **Barrera de encapsulación (Public API):** Cada módulo expone su API pública a través de su `index.ts`. No se permiten importaciones profundas hacia las entrañas de otros módulos.
6. **Siempre importaciones absolutas (`@/*`):** Queda estrictamente prohibido el uso de rutas relativas (`../` o `./`). Toda importación en cualquier archivo del proyecto debe usar el alias `@/*`.

---

## 📂 Índice de Reglas

| Archivo | Tema Principal | Resumen |
| :--- | :--- | :--- |
| [00-architecture-overview.md](./00-architecture-overview.md) | **Visión General y Estructura** | Árbol de carpetas global (`app/`, `modules/`, `core/`), flujo de dependencias y principios fundamentales. |
| [01-module-structure.md](./01-module-structure.md) | **Estructura Interna de Módulos** | Capas dentro de un módulo (`components`, `hooks`, `services`, `interfaces`, `utils`, `constants`, `index.ts`). |
| [02-nextjs-app-router.md](./02-nextjs-app-router.md) | **Reglas para Next.js App Router** | Páginas delgadas, `layout.tsx`, `loading.tsx`, `error.tsx`, y límites Server vs Client Components. |
| [03-layers-and-separation-of-concerns.md](./03-layers-and-separation-of-concerns.md) | **Separación de Responsabilidades** | Reglas doradas por capa: Interfaces sin lógica, Hooks sin JSX, Componentes tontos vs contenedores. |
| [04-naming-conventions-and-standards.md](./04-naming-conventions-and-standards.md) | **Convenciones de Nombres y Estilo** | Nomenclatura de archivos, sufijos (`.interface.ts`, `.service.ts`, `.hook.ts`), **SIEMPRE importaciones absolutas**, exports e imports. |
| [05-data-fetching-and-state.md](./05-data-fetching-and-state.md) | **Manejo de Datos y Estado** | Server Actions, Fetch en RSC, hooks de orquestación, validación con Zod y manejo de errores. |

---

## 🚦 Checklist Rápido de Validación (Code Review)

Antes de dar por terminado cualquier cambio o componente:
- [ ] ¿El nuevo código pertenece a un módulo existente o nuevo en `src/modules/`?
- [ ] ¿La página (`src/app/**/page.tsx`) solo orquesta y no tiene lógica de negocio ni estado?
- [ ] ¿Los hooks en `hooks/` retornan datos y funciones, y **cero JSX**?
- [ ] ¿Los archivos en `interfaces/` son 100% tipos puros sin código ejecutable?
- [ ] ¿Los componentes en `components/` delegan la lógica a hooks o servicios?
- [ ] ¿Las importaciones externas al módulo se hacen exclusivamente a través de su `index.ts`?
- [ ] ¿**Todas las importaciones usan rutas absolutas con `@/*`** (cero rutas relativas con `../` o `./`)?
- [ ] ¿Se usó `'use client'` únicamente donde se requiere interactividad del navegador o hooks de React?
