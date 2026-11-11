---
version: 4.0.0
system: "Hyperframe Visual Design System"
lastUpdated: 2026-11-11
context: "Sistema de diseño visual editorial desacoplado para animaciones web e infografías 16:9 en Bright Light Mode (Apple Keynote & Notion Light UI)"
---

# Visual Design System (`design.md`)

Este documento define la capa estética (tokens, paleta cromática, espaciado, componentes visuales y reglas tipográficas) para las animaciones web generadas en el proyecto. Es agnóstico a la implementación funcional y debe ser consultado por cualquier generador o especificación.

---

## 1. Principios Visuales Fundamentales

1. **Estética Editorial Light UI:**
   - Inspirada en Notion Light UI y Apple Keynote.
   - Limpieza geométrica, alto contraste legible y generoso espacio negativo.
   - Cero artefactos visuales, degradados estridentes o ruido decorativo innecesario.

2. **Regla de Síntesis:**
   - Priorizar siempre jerarquía de lectura inmediata: **Badge con Ícono + Título Contundente**.
   - Prohibido el texto de relleno, párrafos explicativos extensos, cajas secundarias o etiquetas minúsculas.
   - Dejar siempre despejada la zona inferior ($Y \ge 780px$) para compatibilidad con subtítulos (closed captions) y controles de reproducción.

---

## 2. Paleta Cromática & Tokens de Color

| Token | Código HEX / Valor | Rol Visual |
|---|---|---|
| `bg-canvas` | `#F8FAFC` | Fondo de lienzo suave off-white. Admite micro-grilla radial sutil (`#CBD5E1` a 1px, separación 36px, opacidad 0.5). |
| `card-bg` | `#FFFFFF` | Superficie de tarjeta blanca pura. |
| `card-border` | `#E2E8F0` | Borde sutil de 1px en reposo. |
| `card-border-active`| `#CBD5E1` | Borde refinado al activarse. |
| `title-dark` | `#0F172A` | Tipografía principal Dark Slate de alto contraste. |
| `text-muted` | `#64748B` | Etiquetas secundarias de cabecera o tags neutros. |
| **Cobalt Blue** | `#0284C7` | Acento técnico primario. Pastel badge: `#E0F2FE` (borde `rgba(2, 132, 199, 0.22)`). |
| **Indigo Violet**| `#7C3AED` | Acento de síntesis o hero central. Pastel badge: `#EDE9FE` (borde `rgba(124, 58, 237, 0.22)`). |
| **Emerald** | `#059669` | Acento de verificación y éxito. Pastel badge: `#D1FAE5` (borde `rgba(5, 150, 105, 0.22)`). |

---

## 3. Sombras & Profundidad

- **Sombra Ambiental Base:**
  ```css
  box-shadow: 0 10px 30px -4px rgba(15, 23, 42, 0.04), 0 4px 12px -2px rgba(15, 23, 42, 0.02);
  ```
- **Sombra Hero / Activa:**
  ```css
  box-shadow: 0 24px 48px -12px rgba(15, 23, 42, 0.09), 0 8px 16px -4px rgba(15, 23, 42, 0.04);
  ```

---

## 4. Tipografía & Jerarquía

- **Familias Tipográficas:** `Inter`, `Outfit` y `JetBrains Mono` (para metadatos de cabecera).
- **Titular de Tarjeta:** `32px` a `42px`, peso `800` o `900`, mayúsculas, color `#0F172A`, letter-spacing `-0.01em` a `-0.02em`.
- **Hero Dominante Central:** `42px` a `48px`.
- **Cabecera de Escena:** `32px` a `36px` en peso `800` con badge en pastilla (`12px` - `13px` monospace).

---

## 5. Íconos & Badges

- **Íconos:** Únicamente vectores SVG minimalistas estilo Lucide (trazo continuo de `2px`, esquinas redondeadas `stroke-linecap="round" stroke-linejoin="round"`, sin relleno `fill="none"`).
- **Badges:** Cuadriláteros con bordes redondeados (`border-radius: 24px` a `34px`) en color pastel correspondiente al rol del acento.
- **Pulsos:** Onda expansiva suave (*sonar shockwave*) concéntrica al badge (`border: 2px solid <accent>`) que desvanece su opacidad de `1` a `0`.
