---
# ESPECIFICACIÓN FUNCIONAL DE ANIMACIÓN (SPEC)
# Toda generación basada en este archivo DEBE cumplir con:
# 1. Reglas estéticas y tokens de diseño: design.md
# 2. Contrato técnico y determinismo temporal: SKILL_HYPERFRAME.md
---

> ### ⚠️ INSTRUCCIÓN OBLIGATORIA PARA EL GENERADOR / AGENTE
> Esta especificación define exclusivamente el **QUÉ** funcional de la animación. Toda implementación en código HTML/CSS/JS debe adherirse de forma estricta a:
> - **Estética Visual:** [`design.md`](design.md) (paleta, badges pasteles, tipografía, sombras y regla de síntesis).
> - **Contrato Técnico:** [`SKILL_HYPERFRAME.md`](SKILL_HYPERFRAME.md) (duración exacta, registro en `window.__timelines`, estructura `.clip`, cero transiciones CSS no deterministas).

---

## 1. Metadatos de la Composición

- **Composition ID:** `[ej. data_pipeline_flow]` *(Alfanumérico, sin espacios, único)*
- **Título de la Pieza:** `[Título principal en mayúsculas]`
- **Etiqueta / Tag de Cabecera:** `[ej. PIPELINE // 2026]`
- **Formato y Relación de Aspecto:** `16:9` (`1920x1080 px`)
- **Framerate:** `30 FPS`
- **Duración Total:** `[ej. 10.0]` segundos

---

## 2. Propósito & Caso de Uso

- **Objetivo Central:** `[Describe en 1 o 2 líneas qué concepto o mensaje se comunica]`
- **Público / Contexto de Emisión:** `[ej. Pantalla de TV / Móvil / Keynote / Documentación UI]`

---

## 3. Disposición Espacial (Layout Bento)

- **Tipo de Layout Elegido:** `[Seleccionar uno: 3 Columnas Lineales | Bento Escalonado 2+3 | Hero Central Convergente | 4 Etapas Secuenciales | Personalizado]`
- **Justificación del Layout:** `[Por qué esta disposición representa fielmente la lógica del tema]`

---

## 4. Entidades Clave (Contenido de las Tarjetas / Nodos)

*Nota: Recordar la regla de oro: solo 1 ícono en badge pastel + 1 título Dark Slate (#0F172A). Cero párrafos o cajas secundarias.*

| # | Título de la Entidad (Mayúsculas) | Concepto / Rol | Ícono SVG Sugerido | Acento Sugerido (`Cobalt` / `Violet` / `Emerald`) |
|---|---|---|---|---|
| 1 | `[TÍTULO 1]` | `[Rol funcional]` | `[ej. Terminal / Search]` | `[Cobalt / Violet / Emerald]` |
| 2 | `[TÍTULO 2]` | `[Rol funcional]` | `[ej. Cpu / Database]` | `[Cobalt / Violet / Emerald]` |
| 3 | `[TÍTULO 3]` | `[Rol funcional]` | `[ej. CheckSquare / Git]` | `[Cobalt / Violet / Emerald]` |
| 4 | `[TÍTULO 4 (opcional)]` | `[Rol funcional]` | `[ej. Rocket / Sliders]` | `[Cobalt / Violet / Emerald]` |
| 5 | `[TÍTULO 5 (opcional)]` | `[Rol funcional]` | `[ej. Send / Trophy]` | `[Cobalt / Violet / Emerald]` |

---

## 5. Cronograma de Animación (Timeline Breakdown)

Definir la secuencia en segundos exactos (sumando el total de la duración):

- **[0.0s – 0.5s] Entrada:** `[Aparición de cabecera y estado inicial del lienzo]`
- **[0.6s – X.Xs] Activación Nodo 1:** `[Entrada elástica y pulso del badge]`
- **[X.Xs – Y.Ys] Conexión / Flujo 1 → 2:** `[Trazo vectorial y viaje del fotón de energía]`
- **[Y.Ys – Z.Zs] Activación Nodos Siguientes:** `[Secuencia sucesiva de nodos y enlaces]`
- **[Hold Final (ej. 8.0s – 10.0s)] Estado Armónico:** `[Todas las tarjetas activadas simultáneamente con barra de progreso al 100%]`

---

## 6. Conexiones Vectoriales Específicas

- **Rutas de Conexión:** `[Indicar qué nodos se conectan entre sí y la dirección del flujo]`
- **Comportamiento del Flujo:** `[ej. Secuencial de izquierda a derecha | Convergente hacia el centro]`
