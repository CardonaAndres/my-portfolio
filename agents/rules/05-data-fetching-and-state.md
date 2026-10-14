# 05 - Estrategias de Datos, Estado y Fetching

Esta regla define los patrones para la obtención de datos (data fetching), mutaciones y gestión de estado en el portafolio.

---

## 🎯 Principio Fundamental: Servicios Aislados

Toda obtención de datos (sea desde mocks estáticos locales, archivos markdown, CMS como Sanity/Notion, o APIs externas como GitHub) **debe estar encapsulada dentro de la capa `services/` del módulo**.

> 💡 **Ventaja Clave:** Al empezar el portafolio, el servicio puede devolver datos desde un archivo mock (`projects.mock.ts`). Cuando decidas conectar una base de datos o CMS, **solo modificas el archivo `.service.ts`**, sin tocar componentes, páginas ni hooks.

---

## 🚀 1. Data Fetching en el Servidor (Server Components)

Next.js App Router prioriza la obtención de datos directamente en el servidor.

### Patrón Recomendado:
```typescript
// src/modules/projects/services/get-projects.service.ts
import { PROJECTS_MOCK } from "@/modules/projects/constants/projects.mock";
import type { Project } from "@/modules/projects/interfaces/project.interface";

export async function getProjects(): Promise<Project[]> {
  // Simulación asíncrona (fácilmente reemplazable por fetch('https://api...'))
  return Promise.resolve(PROJECTS_MOCK);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const project = PROJECTS_MOCK.find((p) => p.slug === slug);
  return Promise.resolve(project ?? null);
}
```

En la página (`page.tsx`), se consume directamente de forma asíncrona:
```tsx
// src/app/projects/page.tsx
import { getProjects, ProjectsView } from "@/modules/projects";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsView initialProjects={projects} />;
}
```

---

## ⚡ 2. Mutaciones con Server Actions (`'use server'`)

Para formularios interactivos (ej: formulario de contacto):

1. **Definir la Server Action en `services/`:**
   ```typescript
   // src/modules/contact/services/send-contact.action.ts
   "use server";

   import type { ContactResponse } from "@/modules/contact/interfaces/contact.interface";

   export async function sendContactAction(
     prevState: unknown,
     formData: FormData
   ): Promise<ContactResponse> {
     const email = formData.get("email");
     const message = formData.get("message");

     if (!email || !message) {
       return { success: false, error: "Todos los campos son obligatorios." };
     }

     try {
       // Envío real mediante servicio de correos (Resend, SendGrid, etc.)
       return { success: true };
     } catch (err) {
       return { success: false, error: "Hubo un fallo en el servidor al enviar." };
     }
   }
   ```

2. **Consumir la acción desde un hook en `hooks/`:**
   - Usar `useActionState` (React 19) para gestionar el estado de envío, loading y mensajes de error sin acoplar la UI a la red.

---

## 🧩 3. Gestión de Estado: ¿Dónde va cada cosa?

```
                               ¿Es estado global de la app?
                                      /              \
                                   SÍ                  NO
                                  /                      \
                    ¿Afecta a toda la app?         ¿Es de un solo módulo?
                     (ej: Tema Dark/Light)                   |
                               |                     ¿Pertenece a UI o a Lógica?
                        src/core/hooks/              /                        \
                                                 UI Pura                  Lógica/Filtro
                                                    |                           |
                                          useState en Componente         Custom Hook en
                                                (local)               src/modules/.../hooks/
```

- **Estado de UI local:** Si un modal está abierto/cerrado o un dropdown desplegado, puede residir en un `useState` dentro del componente presentacional.
- **Estado de lógica / negocio:** Filtros de proyectos, búsqueda, paginación, formularios con validación -> **Siempre a un custom hook** en `hooks/`.
- **Estado global transversal:** Temas, menú móvil global -> En `src/core/hooks/` o un contexto ligero en `src/core/components/providers/`.
