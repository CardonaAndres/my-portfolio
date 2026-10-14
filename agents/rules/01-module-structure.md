# 01 - Estructura Interna de Módulos

Esta regla define la anatomía y capas obligatorias de cada módulo en `src/modules/[module-name]`.

---

## 📦 Anatomía de un Módulo

Cada módulo representa un dominio o característica funcional autónoma (por ejemplo: `projects`, `experience`, `contact`, `skills`, `blog`).

```text
src/modules/projects/
├── components/           # Capa de Presentación (UI)
│   ├── ProjectCard.tsx
│   ├── ProjectFilter.tsx
│   ├── ProjectList.tsx
│   └── ProjectDetailsModal.tsx
├── hooks/                # Capa de Lógica y Estado (React Custom Hooks)
│   ├── useProjectsFilter.ts
│   └── useProjectDetails.ts
├── services/             # Capa de Datos e Infraestructura
│   ├── get-projects.service.ts
│   └── get-project-by-slug.service.ts
├── interfaces/           # Capa de Dominio y Contratos (Typescript)
│   ├── project.interface.ts
│   └── project-filter.interface.ts
├── constants/            # Datos estáticos y configuración local
│   ├── projects.mock.ts
│   └── project-categories.constant.ts
├── utils/                # Funciones auxiliares puras específicas del módulo
│   └── sort-projects-by-date.util.ts
└── index.ts              # Barril / API Pública del módulo
```

> **Nota:** Si un módulo es muy simple y no requiere `hooks` o `utils`, no es obligatorio crear carpetas vacías; créalas a medida que el módulo las necesite, pero **siempre respetando la ubicación correspondiente**.

---

## 🔬 Detalle de Responsabilidades por Capa

### 1. `interfaces/` (Contratos de Datos)
- **Propósito:** Definir los tipos de TypeScript, interfaces y esquemas de validación (como Zod) que modelan los datos del módulo.
- **Regla de Oro:** **Cero lógica en tiempo de ejecución**. No debe haber código ejecutable, funciones con efectos, llamadas de red ni JSX.
- **Nomenclatura:** `[entidad].interface.ts` o `[entidad].types.ts`.
- **Ejemplo:**
  ```typescript
  // src/modules/projects/interfaces/project.interface.ts
  export type ProjectCategory = "web" | "mobile" | "ai" | "backend";

  export interface ProjectTech {
    id: string;
    name: string;
    icon: string;
  }

  export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    summary: string;
    coverImage: string;
    demoUrl?: string;
    repositoryUrl?: string;
    technologies: ProjectTech[];
    category: ProjectCategory;
    featured: boolean;
    createdAt: string;
  }
  ```

---

### 2. `components/` (Capa de Presentación)
- **Propósito:** Renderizar elementos visuales y manejar eventos de interacción del usuario.
- **División:**
  - **Presentational (Dumb Components):** Reciben `props` y emiten eventos mediante callbacks (`onClick`, `onChange`). No contienen lógica compleja ni peticiones directas.
  - **Containers / Views:** Ensamblan componentes presentacionales y consumen los custom hooks o datos del módulo (ej: `ProjectsSection.tsx`).
- **Regla de Oro:** **No contener lógica de negocio ni peticiones directas en el JSX.** La lógica se delega a `hooks/` o `services/`.
- **Nomenclatura:** `PascalCase.tsx` (ej: `ProjectCard.tsx`).

---

### 3. `hooks/` (Capa de Lógica y Estado)
- **Propósito:** Encapsular estados reactivos (`useState`, `useReducer`), efectos (`useEffect`), listeners y flujos de negocio.
- **Regla de Oro:** **Cero JSX.** Un hook nunca retorna elementos visuales React (`<div />`), solo expone datos reactivos, estados derivados y funciones manejadoras (`handlers`).
- **Nomenclatura:** `camelCase` con prefijo `use` (ej: `useProjectsFilter.ts`).
- **Ejemplo:**
  ```typescript
  // src/modules/projects/hooks/useProjectsFilter.ts
  "use client";

  import { useState, useMemo } from "react";
  import type { Project, ProjectCategory } from "@/modules/projects/interfaces/project.interface";

  export const useProjectsFilter = (initialProjects: Project[]) => {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = useMemo(() => {
      return initialProjects.filter((project) => {
        const matchesCategory =
          selectedCategory === "all" || project.category === selectedCategory;
        const matchesSearch =
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
    }, [initialProjects, selectedCategory, searchQuery]);

    return {
      selectedCategory,
      searchQuery,
      filteredProjects,
      setCategory: setSelectedCategory,
      setSearchQuery,
    };
  };
  ```

---

### 4. `services/` (Capa de Datos e Infraestructura)
- **Propósito:** Interactuar con fuentes de datos externas: Server Actions (`"use server"`), llamadas a APIs REST/GraphQL, peticiones a CMS (Sanity, Notion, Contentful, MDX) o consultas a base de datos.
- **Regla de Oro:** Funciones asíncronas puras. **No usar hooks de React dentro de los servicios.**
- **Nomenclatura:** `[accion]-[entidad].service.ts` (ej: `get-projects.service.ts`).

---

### 5. `constants/` (Datos Estáticos)
- **Propósito:** Almacenar datos estáticos, listas fijas (categorías, tecnologías disponibles), mocks de portafolio y claves de configuración.
- **Regla de Oro:** Variables inmutables tipadas (`as const`).
- **Nomenclatura:** `[nombre].constant.ts` o `[nombre].mock.ts`.

---

### 6. `utils/` (Funciones Auxiliares Puras)
- **Propósito:** Operaciones determinísticas sin efectos secundarios (formatear texto, ordenar arrays, calcular métricas de proyectos).
- **Regla de Oro:** Funciones puras (mismos inputs = mismos outputs), fácilmente testeables de forma unitaria.
- **Nomenclatura:** `[nombre].util.ts`.

---

### 7. `index.ts` (Barril de API Pública)
- **Propósito:** Actuar como aduana o barrera de encapsulación del módulo. Solo se exporta lo que la aplicación (`src/app/`) o módulos externos necesitan consumir.
- **Ejemplo:**
  ```typescript
  // src/modules/projects/index.ts
  // Components
  export { ProjectsSection } from "@/modules/projects/components/ProjectsSection";
  export { ProjectCard } from "@/modules/projects/components/ProjectCard";

  // Interfaces
  export type { Project, ProjectCategory } from "@/modules/projects/interfaces/project.interface";

  // Services
  export { getProjects, getProjectBySlug } from "@/modules/projects/services/get-projects.service";
  ```
