# 03 - Separación Estricta de Capas y Responsabilidades

Esta regla desglosa el principio de **Responsabilidad Única (SRP)** aplicado a cada capa de la arquitectura del proyecto.

---

## 🧭 Matriz de Responsabilidades

| Capa | ¿Qué CONTIENE? | ¿Qué TIENE PROHIBIDO? | Tipo de Archivo |
| :--- | :--- | :--- | :--- |
| **`interfaces/`** | `type`, `interface`, `enum`, esquemas Zod. | Cero código ejecutable, cero hooks, cero JSX, cero efectos. | `.interface.ts` / `.types.ts` |
| **`hooks/`** | Lógica reactiva, `useState`, `useEffect`, orquestación de eventos. | Cero JSX (`<div />`), cero estilos, cero retorno de vistas. | `use[Nombre].ts` |
| **`components/`** | Renderizado de JSX, Tailwind CSS, accesibilidad (a11y), interactividad visual. | Cero lógica de negocio pesada, cero peticiones `fetch` directas en el JSX. | `[Componente].tsx` |
| **`services/`** | Server Actions (`'use server'`), llamadas a API, consultas a CMS/DB, SDKs. | Cero hooks de React (`useState`, etc.), cero JSX. | `[accion]-[entidad].service.ts` |
| **`constants/`** | Valores fijos inmutables (`as const`), datos estáticos (mock), links, rutas. | Cero lógica condicional dinámica o cálculos en tiempo de ejecución. | `[nombre].constant.ts` |
| **`utils/`** | Funciones puras de transformación, formateo de fechas, matemáticas, helpers. | Cero estado interno, cero efectos secundarios, no depender del DOM. | `[nombre].util.ts` |

---

## 🔍 Reglas Detalladas por Capa

### 1. Capa `interfaces/` (Contratos de Datos)
- **Regla 1:** Solo debe contener definiciones estáticas de TypeScript o esquemas de validación (ej. Zod).
- **Regla 2:** Si necesitas una función que haga algo con la interfaz, esa función pertenece a `utils/` o a un `service/`, **nunca** a `interfaces/`.
- **Regla 3:** No importar componentes de React ni hooks dentro de archivos de interfaces.

```typescript
// ✅ CORRECTO: Solo tipos y contratos
// src/modules/contact/interfaces/contact-message.interface.ts
export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormState {
  status: "idle" | "submitting" | "success" | "error";
  errorMessage?: string;
}
```

---

### 2. Capa `hooks/` (Lógica de Aplicación y Estado)
- **Regla 1:** Un hook encapsula el **CÓMO** funciona la lógica; nunca el **CÓMO** se ve en pantalla.
- **Regla 2:** Retorna siempre un objeto con dos bloques claros: **estado** y **manejadores (handlers)**.
- **Regla 3:** Siempre debe incluir la directiva `'use client'` al inicio del archivo si utiliza hooks reactivos (`useState`, `useEffect`).

```typescript
// ✅ CORRECTO: Retorna estado y handlers, CERO JSX
// src/modules/contact/hooks/useContactForm.ts
"use client";

import { useState } from "react";
import type { ContactFormState } from "@/modules/contact/interfaces/contact-message.interface";
import { sendContactMessageAction } from "@/modules/contact/services/send-contact-message.service";

export const useContactForm = () => {
  const [formState, setFormState] = useState<ContactFormState>({ status: "idle" });

  const submitForm = async (formData: FormData) => {
    setFormState({ status: "submitting" });
    try {
      await sendContactMessageAction(formData);
      setFormState({ status: "success" });
    } catch (error) {
      setFormState({
        status: "error",
        errorMessage: error instanceof Error ? error.message : "Error inesperado al enviar",
      });
    }
  };

  const resetStatus = () => setFormState({ status: "idle" });

  return {
    status: formState.status,
    errorMessage: formState.errorMessage,
    submitForm,
    resetStatus,
  };
};
```

---

### 3. Capa `components/` (Presentación y Experiencia de Usuario)
- **Presentational Component (Componente Tonto):**
  - Solo recibe `props` y emite eventos vía callbacks.
  - No sabe de dónde vienen los datos (si de una API, de un hook o de un mock).
  - Máxima reusabilidad y facilidad de pruebas.
- **Container / View Component (Contenedor):**
  - Consume el hook correspondiente.
  - Distribuye el estado y los handlers a los componentes presentacionales hijos.

```tsx
// ✅ CORRECTO: Componente tonto que solo pinta UI
// src/modules/contact/components/ContactForm.tsx
interface ContactFormProps {
  status: "idle" | "submitting" | "success" | "error";
  errorMessage?: string;
  onSubmit: (formData: FormData) => Promise<void>;
}

export const ContactForm = ({ status, errorMessage, onSubmit }: ContactFormProps) => {
  return (
    <form action={onSubmit} className="space-y-4">
      {errorMessage && (
        <div className="p-3 bg-red-500/10 text-red-500 rounded-lg text-sm">
          {errorMessage}
        </div>
      )}
      <input name="email" type="email" required placeholder="Tu correo" className="..." />
      <textarea name="message" required placeholder="Tu mensaje" className="..." />
      <button type="submit" disabled={status === "submitting"} className="...">
        {status === "submitting" ? "Enviando..." : "Enviar Mensaje"}
      </button>
    </form>
  );
};
```

---

### 4. Capa `services/` (Datos e Integraciones)
- **Regla 1:** Funciones asíncronas aisladas.
- **Regla 2:** Si es una Server Action de Next.js, debe llevar la directiva `'use server'` en la cabecera del archivo o función.
- **Regla 3:** Valida los datos de entrada con Zod o tipado estricto antes de procesar o enviar.

```typescript
// ✅ CORRECTO: Servicio asíncrono puro
// src/modules/contact/services/send-contact-message.service.ts
"use server";

import type { ContactMessage } from "@/modules/contact/interfaces/contact-message.interface";

export async function sendContactMessageAction(formData: FormData): Promise<{ success: boolean }> {
  const data: ContactMessage = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    subject: String(formData.get("subject") || ""),
    message: String(formData.get("message") || ""),
  };

  // Validación y envío (ej: Resend, Nodemailer, etc.)
  if (!data.email || !data.message) {
    throw new Error("El correo y el mensaje son obligatorios.");
  }

  // Lógica de envío...
  return { success: true };
}
```

---

### 5. Capa `utils/` (Funciones Auxiliares Puras)
- **Regla 1:** La función debe ser determinista (para los mismos argumentos, siempre retorna el mismo resultado).
- **Regla 2:** No debe acceder a APIs que varíen por entorno (`window`, `document`) a menos que esté debidamente protegida o sea un helper de cliente específico.

```typescript
// ✅ CORRECTO: Función pura
// src/modules/projects/utils/format-project-date.util.ts
export function formatProjectDate(isoDate: string): string {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("es-CO", {
    month: "short",
    year: "numeric",
  }).format(date);
}
```
