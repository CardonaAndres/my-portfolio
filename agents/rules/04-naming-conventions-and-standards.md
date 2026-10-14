# 04 - Convenciones de Nombres, Estilo y Estándares de Código

Esta regla estandariza la nomenclatura de archivos, carpetas, tipos, componentes y patrones de exportación en todo el proyecto.

---

## 🏷️ Convenciones de Nombres de Archivos y Carpetas

| Elemento | Convención | Sufijo Obligatorio | Ejemplo |
| :--- | :--- | :--- | :--- |
| **Carpetas de módulos** | `kebab-case` | N/A | `src/modules/projects/`, `src/modules/contact/` |
| **Componentes React** | `PascalCase` | `.tsx` | `ProjectCard.tsx`, `ContactForm.tsx` |
| **Custom Hooks** | `camelCase` (con `use`) | `.ts` | `useProjectsFilter.ts`, `useTheme.ts` |
| **Servicios / Acciones** | `kebab-case` | `.service.ts` / `.action.ts` | `get-projects.service.ts`, `send-email.action.ts` |
| **Interfaces / Tipos** | `kebab-case` | `.interface.ts` / `.types.ts` | `project.interface.ts`, `filter.types.ts` |
| **Constantes / Mocks** | `kebab-case` | `.constant.ts` / `.mock.ts` | `routes.constant.ts`, `projects.mock.ts` |
| **Utilidades puras** | `kebab-case` | `.util.ts` | `format-date.util.ts`, `cn.util.ts` |
| **Barriles de exportación** | Minúscula | `index.ts` | `src/modules/projects/index.ts` |

---

## 🔀 Convenciones de Exportación e Importación

### 1. Named Exports vs Default Exports
- **Named Exports Obligatorios (`export const ...`):** Para todos los componentes, hooks, funciones, constantes e interfaces.
  - Facilita el autocompletado en el IDE.
  - Previene renombrados accidentales al importar.
  - Optimiza el Tree Shaking.
- **Default Exports Permitidos ÚNICAMENTE en Next.js App Router:**
  - `page.tsx`
  - `layout.tsx`
  - `loading.tsx`
  - `error.tsx`
  - `not-found.tsx`
  *(Requerimiento mandatorio del compilador de Next.js)*.

### 2. 🚨 Regla de Oro: SIEMPRE Importaciones Absolutas (`@/*`)
- **PROHIBIDO el uso de rutas relativas (`../` o `./`) en cualquier archivo del proyecto**, sin excepciones.
- Toda importación, incluso dentro del mismo módulo o entre archivos de la misma carpeta, debe utilizar el alias absoluto `@/*` configurado en `tsconfig.json`.
- **¿Por qué?**
  - **Refactorización a prueba de fallos:** Puedes mover cualquier archivo de carpeta sin que se rompan sus dependencias.
  - **Claridad cognitiva inmediata:** De un vistazo se sabe exactamente a qué capa y módulo pertenece cada elemento importado.
  - **Cero ambigüedad** para desarrolladores y agentes de IA.

```typescript
// ❌ PROHIBIDO (Rutas relativas con ../ o ./)
import { Button } from "../../../../core/components/Button";
import { useProjectsFilter } from "../hooks/useProjectsFilter";
import type { Project } from "./interfaces/project.interface";

// ✅ CORRECTO (Siempre importaciones absolutas con @/*)
import { Button } from "@/core/components/Button";
import { useProjectsFilter } from "@/modules/projects/hooks/useProjectsFilter";
import type { Project } from "@/modules/projects/interfaces/project.interface";
import { ProjectsSection } from "@/modules/projects";
```

### 3. Barril de Módulo (`index.ts`)
- Las páginas y otros módulos **solo** importan desde la raíz del módulo:
  - ❌ `import { ProjectCard } from "@/modules/projects/components/ProjectCard"`
  - ✅ `import { ProjectCard } from "@/modules/projects"`

---

## 🛡️ Estándares Estrictos de TypeScript

1. **Prohibido el uso de `any`:**
   - Si el tipo es dinámico o desconocido, utiliza `unknown` junto con validación en tiempo de ejecución o type guards (por ejemplo, Zod o `typeof`).
2. **`interface` vs `type`:**
   - Usa `interface` para modelar entidades de dominio y contratos de objetos extensibles:
     ```typescript
     export interface Project {
       id: string;
       title: string;
     }
     ```
   - Usa `type` para uniones, tuplas, tipos primitivos o utilidades de tipos complejas:
     ```typescript
     export type ProjectStatus = "draft" | "published" | "archived";
     export type ProjectCategory = "web" | "mobile" | "ai";
     ```
3. **Inmutabilidad en Constantes:**
   - Usa siempre `as const` en arrays u objetos de configuración para congelar los tipos:
     ```typescript
     export const NAV_LINKS = [
       { label: "Inicio", href: "/" },
       { label: "Proyectos", href: "/projects" },
       { label: "Contacto", href: "/contact" },
     ] as const;
     ```

---

## 🎨 Estándares de Estilizado (Tailwind CSS v4)

1. **Componentes limpios:** No dupliques cadenas de clases largas idénticas. Para variantes o componentes interactivos complejos, crea variantes o utiliza utilidades como `clsx` / `tailwind-merge` (`cn`).
2. **Clases semánticas y legibles:** Ordena las clases de Tailwind de forma lógica (layout -> espaciado -> tipografía -> colores -> efectos/transiciones).
3. **Modo Oscuro / Accesibilidad:** Mantén contraste accesible y asegura soporte para temas (`dark:` classes o variables CSS en `globals.css`).
