# 02 - Reglas para Next.js App Router y Páginas

Esta regla establece las directrices específicas para trabajar con el sistema de rutas de Next.js (`src/app/`).

---

## 🚫 La Regla Fundamental: Páginas sin Lógica (Thin Pages)

En esta arquitectura, los archivos `page.tsx` son exclusivamente **adaptadores de ruta y orquestadores de entrega**. 

### ❌ Lo que NUNCA debe haber en un `page.tsx`:
- **NO** definir estados locales (`useState`, `useReducer`).
- **NO** ejecutar efectos secundarios (`useEffect`).
- **NO** implementar lógica de negocio, validaciones o cálculos matemáticos.
- **NO** escribir llamadas `fetch` o `axios` desordenadas directamente en el cuerpo del componente.
- **NO** construir árboles de JSX kilométricos con decenas de elementos anidados.
- **NO** colocar directivas `'use client'` en la raíz de `page.tsx` sin justificación extrema (mantener las páginas como Server Components por defecto).

### ✅ Lo que SÍ debe hacer un `page.tsx`:
1. Recibir los parámetros de ruta (`params` y `searchParams`).
2. Definir o generar metadata de SEO (`metadata` o `generateMetadata`).
3. Invocar servicios asíncronos del módulo (en Server Components) para obtener datos iniciales.
4. Renderizar y pasar las props al contenedor o vista principal del módulo correspondiente.
5. Servir como límite de Suspense o envolver vistas con componentes de fallback si es necesario.

---

## 📋 Comparativa: Mala Práctica vs Buena Práctica

### ❌ Anti-patrón (Página saturada de lógica):
```tsx
// ❌ src/app/projects/page.tsx (PROHIBIDO)
"use client";

import { useState, useEffect } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  const handleFilter = (cat: string) => {
    setFilter(cat);
  };

  if (loading) return <div>Cargando...</div>;

  return (
    <main className="p-8">
      <h1>Mis Proyectos</h1>
      <button onClick={() => handleFilter("web")}>Web</button>
      <div className="grid grid-cols-3 gap-4">
        {projects
          .filter((p) => filter === "all" || p.category === filter)
          .map((p) => (
            <div key={p.id} className="border p-4 rounded">
              <h2>{p.title}</h2>
              <p>{p.description}</p>
            </div>
          ))}
      </div>
    </main>
  );
}
```

### ✅ Patrón Correcto (Página Delgada + Módulo):
```tsx
// ✅ src/app/projects/page.tsx (CORRECTO - Server Component Delgado)
import type { Metadata } from "next";
import { getProjects } from "@/modules/projects";
import { ProjectsView } from "@/modules/projects";

export const metadata: Metadata = {
  title: "Proyectos | Mi Portafolio",
  description: "Explora mis proyectos destacados y casos de estudio.",
};

export default async function ProjectsPage() {
  // 1. Obtener datos mediante el servicio tipado del módulo
  const initialProjects = await getProjects();

  // 2. Delegar la vista y su interactividad al componente del módulo
  return (
    <main className="container mx-auto px-4 py-12">
      <ProjectsView initialProjects={initialProjects} />
    </main>
  );
}
```

Y la interactividad, filtros y estado residen limpiamente dentro del módulo `src/modules/projects/`:
- `ProjectsView.tsx`: Usa `useProjectsFilter` de `hooks/`.
- `ProjectList.tsx` y `ProjectCard.tsx`: Renderizan la UI en `components/`.

---

## ⚡ Directiva `'use client'` y Límites de Islas de Interactividad

Next.js 16 y React 19 se basan en Server Components.
1. **Server First:** Todos los componentes se consideran Server Components salvo que se especifique lo contrario.
2. **Empujar `'use client'` a las hojas del árbol (Leaves):**
   - No conviertas una página o sección entera en Client Component si solo un botón o un filtro requiere interactividad.
   - Extrae el botón interactivo o el filtro a su propio archivo con `'use client'`.
3. **Paso de componentes como `children`:**
   - Si un Client Component necesita envolver contenido que puede ser renderizado en el servidor, pásalo mediante la prop `children` para preservar las ventajas de RSC.

---

## 🛡️ Manejo de Estados de Ruta (`loading.tsx`, `error.tsx`, `not-found.tsx`)

- **`loading.tsx`**: Debe contener esqueletos de carga (Skeletons) diseñados con Tailwind CSS para evitar saltos de layout (CLS).
- **`error.tsx`**: Debe ser un Client Component (`'use client'`) con capacidad de recuperar el error mediante el callback `reset()`.
- **`not-found.tsx`**: Página estilizada para rutas no encontradas.
