# 00 - Visión General de la Arquitectura

Esta regla define la arquitectura global del proyecto, la jerarquía de carpetas y las reglas de dependencia entre capas.

---

## 🏛️ Estilo Arquitectónico: Modular Vertical Slice (Feature-Driven)

El proyecto implementa una arquitectura **Modular por Dominio (Feature-Driven)** combinada con **Capas Internas Limpias (Clean Layers)** adaptadas al paradigma moderno de Next.js App Router (React 19 Server & Client Components).

En lugar de agrupar todo el código de la aplicación por tipo técnico horizontal (`src/components`, `src/hooks`, `src/services`), el código se organiza verticalmente por **módulos de negocio/funcionalidad** (`src/modules/[feature]`).

```
                    ┌─────────────────────────┐
                    │      src/app/           │  (Delivery / Routing Layer)
                    │  (Thin Pages / Layouts) │
                    └────────────┬────────────┘
                                 │ depende de
                                 ▼
                    ┌─────────────────────────┐
                    │      src/modules/       │  (Business / Feature Domains)
                    │  [projects, contact...] │
                    └────────────┬────────────┘
                                 │ depende de
                                 ▼
                    ┌─────────────────────────┐
                    │       src/core/         │  (Shared Kernel / Foundation)
                    │ (UI Kit, Utilities...)  │
                    └─────────────────────────┘
```

---

## 📁 Estructura General del Directorio `src/`

```text
src/
├── app/                        # Capa de Entrega / Rutas (Next.js App Router)
│   ├── (site)/                 # Grupo de rutas públicas (si aplica)
│   │   ├── page.tsx            # Página principal (Thin Page)
│   │   ├── projects/
│   │   │   ├── page.tsx        # Página de proyectos
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Detalle de proyecto
│   │   └── contact/
│   │       └── page.tsx        # Página de contacto
│   ├── api/                    # Route Handlers (endpoints HTTP si se requieren)
│   ├── layout.tsx              # Layout raíz (proveedores globales, fuentes, etc.)
│   ├── error.tsx               # Boundary de error global
│   ├── not-found.tsx           # Página 404
│   └── loading.tsx             # Fallback de carga global
│
├── modules/                    # Capa de Módulos (Vertical Slices / Features)
│   ├── projects/               # Módulo de Proyectos
│   ├── experience/             # Módulo de Experiencia / Trayectoria
│   ├── skills/                 # Módulo de Habilidades / Stack tecnológico
│   ├── contact/                # Módulo de Formulario de Contacto
│   └── hero/                   # Módulo Hero / Introducción
│
└── core/                       # Núcleo Compartido (Shared Kernel)
    ├── assets/                 # Estilos globales, tipografías, íconos locales
    │   └── css/globals.css
    ├── components/             # Componentes primitivos de UI (Botones, Inputs, Modales, Badges)
    ├── config/                 # Configuración del entorno (env variables, validación con Zod)
    ├── constants/              # Constantes globales (rutas, links sociales, metadata)
    ├── hooks/                  # Hooks utilitarios transversales (useTheme, useMediaQuery, useScroll)
    ├── interfaces/             # Tipos y contratos globales (ApiResponse, BaseEntity, etc.)
    ├── services/               # Clientes HTTP base, SDKs compartidos
    └── utils/                  # Funciones de ayuda puras (cn, formateo de fechas, formatters)
```

---

## 🧭 Reglas Estrictas de Dependencias (Dependency Rules)

1. **Flujo Unidireccional:**
   - `app/` puede importar de `modules/` y de `core/`.
   - `modules/` puede importar de `core/`.
   - `modules/` **NUNCA** puede importar de `app/`.
   - `core/` **NUNCA** puede importar de `modules/` ni de `app/` (debe ser 100% agnóstico al dominio).

2. **Aislamiento entre Módulos:**
   - Un módulo no debe acoplarse fuertemente a otro módulo.
   - Si el módulo `contact` necesita información del módulo `profile`, dicha información debe consumirse a través del `index.ts` público del módulo `profile`.
   - Si dos o más módulos comparten la misma lógica o UI sin pertenecer a un dominio específico, ese elemento debe promoverse a `src/core/`.

3. **Sin Importaciones Profundas (Encapsulation Barrier):**
   - ❌ **Prohibido:** `import { ProjectCard } from "@/modules/projects/components/ProjectCard"`
   - ✅ **Correcto:** `import { ProjectCard } from "@/modules/projects"` (usando el barril `index.ts` del módulo).

4. **Siempre Importaciones Absolutas (`@/*`):**
   - ❌ **Prohibido:** Cualquier importación relativa (`../` o `./`), incluso dentro del mismo módulo o carpeta.
   - ✅ **Correcto:** Toda importación en el proyecto debe comenzar con el alias absoluto `@/*` (ej: `@/modules/projects/...`, `@/core/...`).
