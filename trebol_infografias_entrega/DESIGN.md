---
version: 4.0.0
system: "Ultra-Clean 2026 Bento Grid Motion Design System"
lastUpdated: 2026-11-11
context: "Animaciones de 10s Full HD (1920×1080 @ 30 FPS) en Bright Light Mode para Pantallas de Televisión, Móviles y UI Editorial"
---

# Ultra-Clean 2026 Bento Grid Motion Suite — Design System (v4.0)

Este documento define las especificaciones del sistema de diseño para la nueva suite de infografías **Ultra-clean 2026 Bento Grid en Bright Light Mode** (16:9 editorial UI graphic, estética Apple Keynote y Notion Light UI).

---

## 1. Principio Fundamental: Síntesis Total & Editorial UI

1. **Estructura Bento Adaptada Dinámicamente:**
   - **Stepped 2+3 Grid:** Flujo escalonado de 5 etapas editoriales con conducto ortogonal.
   - **3 Linear Columns:** Flujo secuencial horizontal de 3 estaciones de desarrollo agéntico.
   - **Convergent Center Hero:** Arquitectura de aprendizaje donde 2 nodos convergentes alimentan un nodo central heroico dominante.
   - **Sequential 4 Stages:** Embudo de conversión en 4 columnas equilibradas.

2. **Regla de Oro: Solo Ícono en Badge Pastel + Título Dark Slate:**
   - **NO bottom boxes**
   - **NO secondary icons**
   - **NO small labels**
   - **NO paragraphs**
   - Cada tarjeta contiene estrictamente:
     1. **UN SOLO ícono minimalista estilo Lucide de 2px de trazo** centrado en un badge suavemente redondeado de color pastel.
     2. **UN SOLO título en negrita contundente** en color Dark Slate (`#0F172A`) debajo del ícono.

3. **Espacio Negativo Generoso:**
   - Amplitud visual, composición despejada, balance armónico y cero artefactos visuales.
   - Área inferior ($Y \ge 780px$) despejada para máxima legibilidad televisiva y subtítulos.

---

## 2. Paleta Cromática 2026 Light Mode

| Token | Código HEX | Rol Semántico en Pantalla |
|---|---|---|
| `bg-canvas` | `#F8FAFC` | Fondo editorial suave off-white con patrón micro-grid sutil. |
| `card-bg` | `#FFFFFF` | Tarjetas blancas puras con bordes redondeados (`border-radius: 28px - 32px`). |
| `card-border` | `#E2E8F0` | Borde sutil de 1px. |
| `title-dark` | `#0F172A` | Títulos en Dark Slate de alta legibilidad móvil y televisiva. |
| **Cobalt Blue** | `#0284C7` | Acento primario técnico (Investigación / Especificación / Agente / Atracción). Badge pastel: `#E0F2FE`. |
| **Indigo Violet** | `#7C3AED` | Acento de inteligencia y síntesis (Redacción / Orquestación / Núcleo Hero / Interés). Badge pastel: `#EDE9FE`. |
| **Emerald** | `#059669` | Acento de verificación y cierre (Publicación / Despliegue / Experto / Conversión). Badge pastel: `#D1FAE5`. |

---

## 3. Escala Tipográfica & Legibilidad

- **Fuente Principal:** `Inter` y `Outfit` con soporte para `JetBrains Mono` en badges técnicos.
- **Títulos de Tarjeta:** `34px` a `42px` (ExtraBold / Black 800-900, Mayúsculas, color `#0F172A`).
- **Hero Dominante Central:** `42px` a `48px` (Black 900).
- **Cabecera Editorial:** `34px` (Bold 800) con badge en pastilla `13px` mayúscula.

---

## 4. Motion Guidelines (HyperFrames & GSAP)

- **Duración Estricta:** 10.0 segundos exactos a 30 FPS (`data-duration="10"`, `data-fps="30"`).
- **Haces Vectoriales Láser:** Conexiones geométricas limpias (`stroke-width: 2.5px`) con paquetes de datos circulares trazados dinámicamente mediante `getPointAtLength()`.
- **Ondas Sonar de Badge:** Expansión suave de onda de choque elástica al activarse cada estación.
- **Transición de Estado:** Entradas con `ease: "back.out(1.4)"`.
- **Hold Final de Armonía:** Entre los segundos 8.0s y 10.0s todas las tarjetas permanecen activas en iluminación equilibrada.
