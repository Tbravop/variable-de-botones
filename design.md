---
version: 5.0.0
system: "SYNAPSE // Avant-Garde Architectural Editorial System"
lastUpdated: 2026-11-16
branch: "feature/synapse-tech-podcast"
source: "c:/Los tipos de boton/design.md_podcast.md"
context: "Sistema de diseño experimental y editorial de alta gama para SYNAPSE // LAB ARCHIVE (Variante 3). Inspirado en 032c, Volume Magazine, ARCH+, con brutalismo monumental tipográfico, serifa couture itálica, telemetría forense monoespaciada y tensión óptica Amarillo Ácido (#D4FF00)."
---

# SYNAPSE // Avant-Garde Architectural Editorial — Design System Specification

> Documento canónico sincronizado desde [`design.md_podcast.md`](file:///c:/Los%20tipos%20de%20boton/design.md_podcast.md).

## 1. Filosofía, Concepto & Manifiesto Estético

La **Variante 3 (Avant-Garde Architectural Editorial)** replantea la experiencia de un podcast tecnológico no como un portal de medios comerciales o streaming de consumo rápido, sino como un **aparato de investigación epistemológica y publicación arquitectónica de culto**.

Inspirado en la gráfica editorial radical europea (revistas como *032c*, *Volume Magazine*, *ARCH+*, *Domus* y publicaciones experimentales suizas), el sistema articula una tensión calculada entre tres polaridades:
1. **Monolito & Monumentalidad**: Encabezados condensados a sangre con escala sobredimensionada (`Archivo Black`) que operan como declaraciones de arquitectura tipográfica.
2. **Couture & Fragilidad Crítica**: Fragmentos ensayísticos y citas filosóficas compuestas en serifa clásica itálica (`Instrument Serif`), aportando sofisticación editorial frente a la crudeza de la ingeniería.
3. **Indexación Forense de Silicio**: Metadatos, coordenadas, números de fascículo en números romanos (`XLII`, `XLI`) y telemetría de archivo codificados en fuentes monoespaciadas (`Geist Mono` / `Space Mono`), tratados como evidencia pericial de sistemas de computación.

---

## 2. Paleta Cromática y Tensión Óptica

| Token | Valor HEX | Uso y Rol Semántico |
|---|---|---|
| `colors.canvas` | `#F8F8F6` | **Fondo General del Soporte**: Papel técnico/marfil desaturado que confiere corporeidad física a la pantalla. |
| `colors.canvas-pure` | `#FFFFFF` | Fondos de tarjetas interiores y paneles de catálogo para contrastar con el canvas perla. |
| `colors.ink` | `#080808` | **Negro Carbón Primario**: Tinta tipográfica principal, títulos de sección, bordes de 1px a 2px y sellos. |
| `colors.ink-secondary` | `#444444` | Descripciones ensayísticas, notas analíticas de programas y textos explicativos. |
| `colors.ink-muted` | `#7A7A7A` | Metadatos secundarios, folios de expedientes, timestamps y líneas de créditos. |
| `colors.accent-lime` | `#D4FF00` | **Amarillo Ácido / Neon Lime**: Foco lumínico de acción. Scrubber activo, badges de duración, resaltadores de texto en citas y botón CTA. |
| `colors.accent-violet` | `#4A00E0` | **Ultra Violet**: Acento cromático secundario en bloques de tensión óptica y tags temáticos (#NEUROMÓRFICA). |
| `colors.surface-dark` | `#050505` | Bloque monolítico oscuro del reproductor de transmisión sonora. |
| `colors.border` | `#080808` | Bordes negros milimétricos (1px) que encuadran rigurosamente cada módulo sin margen de error. |
| `colors.border-subtle` | `#D6D6D2` | Divisiones verticales y horizontales de lectura secundaria. |

---

## 3. Jerarquía Tipográfica

- **Titulares Monumentales y Cabeceras Display**: `Archivo Black` (o `Syne 900`). Mayúsculas compactas, interletraje negativo (`letter-spacing: -0.04em`), altura de línea ceñida (`line-height: 0.95`).
- **Aforismos, Tesis y Declaraciones Críticas**: `Instrument Serif` (Italic). Utilizada en citas de gran tamaño (32px–38px) con texto destacado en cajas neón `#D4FF00`.
- **Telemetría, Tickers, Folios e Índices**: `Geist Mono` / `Space Mono`. Composición en mayúsculas con espaciado expandido (`letter-spacing: 0.08em` a `0.1em`).
- **Cuerpo Editorial Crítico**: Sans-serif neutral suiza (`Inter` o sistema) a 13px–15px con interlineado generoso (1.6).

---

## 4. Regla Inviolable de Radio: `rounded-none` (0px)

- **Cero bordes redondeados**: Todo el sistema elimina cualquier redondez (`border-radius: 0px`). Botones, tarjetas, imágenes, barras de progreso y reproductores se cortan con esquinas ortogonales puras.
- **Micro-indicadores circulares (`9999px`)**: Reservado exclusivamente para puntos de estado y telemetría en vivo (ej. indicador de señal activa `● EN LÍNEA`).
- **Elevación / Sombras**: Únicamente sombras duras de bloque brutalista (`box-shadow: 4px 4px 0px #080808`). Prohibidas sombras difusas SaaS o neumórficas.
