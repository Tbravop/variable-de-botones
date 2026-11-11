# Hyperframe Motion Suite — Arquitectura Guiada por Especificaciones (SDD)

Sistema modular y desacoplado para diseñar, especificar y renderizar animaciones web de alta fidelidad (16:9 editorial UI graphics a 30 FPS) mediante el motor determinista de **Hyperframe**.

---

## 🏛️ Filosofía de Arquitectura: Separación de Responsabilidades

Este repositorio desacopla completamente tres dimensiones clave para permitir que cualquier persona o agente de IA genere nuevas piezas sin fricción:

```text
       ┌────────────────────────┐
       │   SPEC_TEMPLATE.md     │  ◄── 1. EL QUÉ (Objetivo funcional, datos y guion)
       └───────────┬────────────┘
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
┌──────────────────┐ ┌─────────────────────────┐
│    design.md     │ │   SKILL_HYPERFRAME.md   │  ◄── 2. LAS REGLAS (Estética visual + Técnica)
└────────┬─────────┘ └───────────┬─────────────┘
         │                       │
         └─────────┬─────────────┘
                   ▼
       ┌────────────────────────┐
       │      pieza_*.html      │  ◄── 3. EL CÓDIGO (Animación final determinista)
       └────────────────────────┘
```

1. **`SPEC_TEMPLATE.md` (El QUÉ):** Define el propósito, contenido de las tarjetas y flujo cronológico de la escena.
2. **`design.md` (La ESTÉTICA):** Define los tokens visuales, paleta pastel, tipografía `#0F172A`, sombras y regla de síntesis (Notion / Apple Keynote light UI).
3. **`SKILL_HYPERFRAME.md` (El CÓMO TÉCNICO):** Define el contrato del motor (estructura `.clip`, determinismo temporal, registro de `window.__timelines` y manejo de SVG con GSAP).

---

## ⚡ Flujo de Trabajo en 3 Pasos Rápidos

Para crear una nueva animación en este repositorio:

### Paso 1: Definir la Especificación (`SPEC_TEMPLATE.md`)
Duplica o rellena [`SPEC_TEMPLATE.md`](SPEC_TEMPLATE.md) con los datos de tu nueva pieza:
- Asigna un `composition_id` único.
- Elige el layout que mejor exprese la lógica del tema (3 Columnas, Stepped 2+3, Center Hero, etc.).
- Detalla los títulos de las tarjetas, íconos sugeridos y desglose de tiempos en segundos.

### Paso 2: Consultar las Reglas del Sistema
Antes de escribir una sola línea de código, verifica:
- [`design.md`](design.md): Tokens cromáticos (`#F8FAFC`, badges pasteles Cobalt `#0284C7`, Indigo `#7C3AED`, Emerald `#059669`), sombras y regla de no incluir párrafos ni cajas secundarias.
- [`SKILL_HYPERFRAME.md`](SKILL_HYPERFRAME.md): Reglas estrictas para que el motor no falle (timeline en pausa, registro en `window.__timelines`, cero `Date.now()`, cero transiciones CSS desincronizadas).

### Paso 3: Generar y Previsualizar el HTML Animado
Genera el archivo HTML (ej. `mi_animacion.html`) aplicando la especificación y ejecuta los comandos de comprobación y renderizado:

```bash
# 1. Comprobar cumplimiento del contrato técnico
npx hyperframes check

# 2. Previsualizar localmente en navegador
npx serve . -p 3000
# Abre: http://localhost:3000/mi_animacion.html

# 3. Renderizar a video MP4 Full HD (1920x1080 @ 30 FPS)
npx hyperframes render -c mi_animacion.html -o renders/mi_animacion.mp4 --fps 30 --format mp4
```

---

## 📂 Directorio del Repositorio

- [`SKILL_HYPERFRAME.md`](SKILL_HYPERFRAME.md) — Contrato técnico y patrones de ingeniería de Hyperframe.
- [`SPEC_TEMPLATE.md`](SPEC_TEMPLATE.md) — Plantilla vacía para especificar nuevas animaciones.
- [`design.md`](design.md) — Sistema de diseño visual y tokens estéticos.
- `infografia_1_writing_process.html` — Ejemplo de referencia: Layout Stepped 2+3.
- `infografia_2_agentic_flow.html` — Ejemplo de referencia: Layout 3 Columnas Lineales.
- `infografia_3_rl_vs_imitation.html` — Ejemplo de referencia: Layout Convergent Center Hero.
- `infografia_4_funnel_marketing.html` — Ejemplo de referencia: Layout Secuencial 4 Etapas.
- `renders/` — Videos MP4 Full HD compilados.
