---
version: 1.0.0
name: SYNAPSE // Avant-Garde Architectural Editorial System
description: |
  Sistema de diseño experimental y editorial de alta gama para "SYNAPSE // LAB ARCHIVE" (Variante 3).
  Inspirado en publicaciones de vanguardia arquitectónica, revistas culturales de culto (032c, Volume, ARCH+)
  y el rigor epistemológico del silicio. Fusiona el brutalismo tipográfico monumental con elegancia editorial
  de alto contraste (blanco perla y negro carbón puro), un acento lumínico en Amarillo Ácido / Neon Lime (#D4FF00),
  ultra-violeta (#4A00E0) y composiciones estructuradas con líneas milimétricas de 1px.
source:
  brand: "SYNAPSE // LAB ARCHIVE"
  variant: "Variante 3: Avant-Garde Architectural Editorial"
  lastUpdated: 2025-05-12
  tokensMeasured: true
colors:
  canvas: "#F8F8F6"               # Blanco perla / fondo principal texturado y sereno
  canvas-pure: "#FFFFFF"          # Blanco absoluto para contraste interior
  ink: "#080808"                  # Negro carbón absoluto para tipografía monumental y trazos
  ink-secondary: "#444444"        # Gris carbón para texto analítico y cuerpos de lectura
  ink-muted: "#7A7A7A"            # Gris medio para metadatos, folios y coordenadas de archivo
  accent-lime: "#D4FF00"          # Amarillo Ácido / Acid Neon Lime: acento primario de tensión óptica y reproducción
  accent-lime-hover: "#BEE600"    # Hover del acento neón
  accent-violet: "#4A00E0"        # Ultra Violet de tensión cromática secundaria
  surface-dark: "#050505"         # Superficie negra pura para bloques monolíticos (reproductor sonoro)
  surface-dark-card: "#0C0C0E"    # Tarjeta en bloque oscuro
  border: "#080808"               # Borde estructural primario (1px sólido o 2px en elementos clave)
  border-subtle: "#D6D6D2"        # Borde secundario para divisiones sutiles de grilla
  border-dark: "#222222"          # Borde para módulos interiores en bloques oscuros
typography:
  font-display: "'Archivo Black', 'Syne', sans-serif"
  font-serif: "'Instrument Serif', 'Newsreader', serif"
  font-mono: "'Geist Mono', 'Space Mono', 'JetBrains Mono', monospace"
  font-body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  display-monumental:
    fontFamily: "Archivo Black"
    fontSize: 72px
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: -0.04em
    textTransform: uppercase
  display-editorial:
    fontFamily: "Archivo Black"
    fontSize: 48px
    fontWeight: 900
    lineHeight: 1.0
    letterSpacing: -0.03em
    textTransform: uppercase
  heading-monograph:
    fontFamily: "Archivo Black"
    fontSize: 32px
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: -0.02em
    textTransform: uppercase
  heading-title:
    fontFamily: "Instrument Serif"
    fontSize: 36px
    fontWeight: 400
    fontStyle: italic
    lineHeight: 1.15
  body-essay:
    fontFamily: "Instrument Serif"
    fontSize: 32px
    fontWeight: 400
    fontStyle: italic
    lineHeight: 1.25
  body-critique:
    fontFamily: "sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
  label-mono-sm:
    fontFamily: "Geist Mono"
    fontSize: 10px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.08em
    textTransform: uppercase
  label-mono-xs:
    fontFamily: "Geist Mono"
    fontSize: 9px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.1em
    textTransform: uppercase
rounded:
  none: 0px                       # Rigor tectónico: todas las tarjetas, contenedores y botones llevan 0px
  full: 9999px                    # Reservado exclusivamente para micro-indicadores circulares de estado
spacing:
  micro: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  monumental: 64px
---

# SYNAPSE // Avant-Garde Architectural Editorial — Design System Specification

## 1. Filosofía, Concepto & Manifiesto Estético

La **Variante 3 (Avant-Garde Architectural Editorial)** replantea la experiencia de un podcast tecnológico no como un portal de medios comerciales o streaming de consumo rápido, sino como un **aparato de investigación epistemológica y publicación arquitectónica de culto**.

Inspirado en la gráfica editorial radical europea (revistas como *032c*, *Volume Magazine*, *ARCH+*, *Domus* y publicaciones experimentales suizas), el sistema articula una tensión calculada entre tres polaridades:
1. **Monolito & Monumentalidad**: Encabezados condensados a sangre con escala sobredimensionada (`Archivo Black`) que operan como declaraciones de arquitectura tipográfica.
2. **Couture & Fragilidad Crítica**: Fragmentos ensayísticos y citas filosóficas compuestas en serifa clásica itálica (`Instrument Serif`), aportando sofisticación editorial frente a la crudeza de la ingeniería.
3. **Indexación Forense de Silicio**: Metadatos, coordenadas, números de fascículo en números romanos (`XLII`, `XLI`) y telemetría de archivo codificados en fuentes monoespaciadas (`Geist Mono`), tratados como evidencia pericial de sistemas de computación.

---

## 2. Paleta Cromática y Tensión Óptica

El cromatismo se rige por un **brutalismo óptico** de alto contraste: la serenidad del papel japonés y el blanco perla choca intencionalmente contra la estridencia lumínica del silicio reactivo.

| Token | Valor HEX | Uso y Rol Semántico |
|---|---|---|
| `colors.canvas` | `#F8F8F6` | **Fondo General del Soporte**: Papel técnico/marfil desaturado que confiere corporeidad física a la pantalla. |
| `colors.canvas-pure` | `#FFFFFF` | Fondos de tarjetas interiores y paneles de catálogo para contrastar con el canvas perla. |
| `colors.ink` | `#080808` | **Negro Carbón Primario**: Tinta tipográfica principal, títulos de sección, bordes de 1px a 2px y sellos. |
| `colors.ink-secondary` | `#444444` | Descripciones ensayísticas, notas analíticas de programas y textos explicativos. |
| `colors.ink-muted` | `#7A7A7A` | Metadatos secundarios, folios de expedientes, timestamps y líneas de créditos. |
| `colors.accent-lime` | `#D4FF00` | **Amarillo Ácido / Neon Lime**: Foco lumínico de acción. Usado en scrubber activo del reproductor, badges de duración, resaltadores de texto en citas y botón de descarga de Kit de Prensa. |
| `colors.accent-violet` | `#4A00E0` | **Ultra Violet**: Acento cromático secundario en bloques de tensión óptica y tags temáticos (#NEUROMÓRFICA). |
| `colors.surface-dark` | `#050505` | Bloque monolítico oscuro del reproductor de transmisión sonora, que contrasta como un volumen sólido incrustado en la página blanca. |
| `colors.border` | `#080808` | Bordes negros milimétricos (1px) que encuadran rigurosamente cada módulo sin margen de error. |
| `colors.border-subtle` | `#D6D6D2` | Divisiones verticales y horizontales de lectura secundaria. |

---

## 3. Jerarquía Tipográfica: "Couture & Brutal"

El sistema tipográfico opera bajo la tríada **Monumental + Serif + Monospaced**:

### 3.1. Roles Tipográficos
- **Titulares Monumentales y Cabeceras Display**: `Archivo Black` (o `Syne 900`). Mayúsculas compactas, interletraje negativo (`letterSpacing: -0.04em`), altura de línea ceñida (`lineHeight: 0.95`).
- **Aforismos, Tesis y Declaraciones Críticas**: `Instrument Serif` (Italic). Utilizada en citas de gran tamaño (32px–36px) con texto destacado en cajas neón `#D4FF00`.
- **Telemetría, Tickers, Folios e Índices**: `Geist Mono` / `Space Mono`. Composición en mayúsculas con espaciado expandido (`letterSpacing: 0.08em` a `0.1em`).
- **Cuerpo Editorial Crítico**: Sans-serif neutral suiza o `Open Sans` a 13px con interlineado generoso (1.6) para resúmenes de conferencias y fichas curatoriales.

### 3.2. Escala de Texto

```css
/* Títulos a sangre de identidad */
.display-monumental {
  font-family: 'Archivo Black', sans-serif;
  font-size: 72px;
  line-height: 0.95;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

/* Títulos de sección (ej. ENSAYO MONOGRÁFICO, ÍNDICE DE TRATADOS) */
.display-editorial {
  font-family: 'Archivo Black', sans-serif;
  font-size: 48px;
  line-height: 1.0;
  letter-spacing: -0.03em;
  text-transform: uppercase;
}

/* Título de monografía en tarjeta */
.heading-monograph {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 36px;
  line-height: 1.15;
}

/* Cita ensayística del Hero */
.quote-essay {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 38px;
  line-height: 1.25;
}

/* Indicadores de telemetría y folios */
.label-mono {
  font-family: 'Geist Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

---

## 4. Arquitectura de Componentes & Reglas de Forma

### 4.1. Regla Inviolable de Radio: `rounded-none` (0px)
- **Cero bordes redondeados**: Todo el sistema elimina cualquier redondez (`border-radius: 0px`). Botones, tarjetas, imágenes, barras de progreso y reproductores se cortan con esquinas ortogonales puras. Esto produce una estética táctil de catálogo físico, folio encuadernado y placa de silicio.

### 4.2. Estructura de Grilla y Enmarcado
- **Líneas de encuadre perimetral**: Las secciones se dividen mediante bordes sólidos negros de 1px (`border-t border-b border-[#080808]`).
- **Composición asimétrica**: Citas dominantes a la izquierda que se equilibran con resúmenes curatoriales justificados en monoespaciado a la derecha.

---

## 5. Especificación de Componentes Clave

### 5.1. Ticker Superior y Barra Curatorial
- Franja negra con telemetría en neón: `VOL. 04 // FASCÍCULO 42 // ARCHITECTURAL SOUND SYSTEM & PHILOSOPHIC APPARATUS`.
- Barra de navegación tipo índice impreso: links entre corchetes o con prefijo de fascículo (`S.01 TRATADOS`, `S.02 MANIFIESTO XLII`, `S.03 TRIBUNAL`, `S.04 TECTÓNICA`).
- Botón de acción destacado en neón amarillo (`#D4FF00`) con esquinas en 0px: `[ ESCUCHAR SESIÓN ]`.

### 5.2. Bloque de Cita Hero ("Aparato Teórico")
- Título colosal `SYNAPSE LAB` con tipografía outline/monumental hueca.
- Cita ensayística destacada en serif itálica con marcador fluorescente neón en palabras clave (*"TECTÓNICA"*, *"RECONFIGURACIÓN TERMODINÁMICA"*).
- Enlaces de audio en caja de brackets monoespaciada: `[ SPOTIFY DIRECT AUDIO ]`, `[ APPLE ARCHIVE ]`, `[ YOUTUBE MASTER ]`, `[ RAW RSS STREAM ]`.

### 5.3. Reproductor Monolítico Escultórico (Dark Block)
- Contenedor en negro profundo (`#050505`) con borde perimetral verde neón o blanco de 1px.
- Encabezado con número de episodio en números romanos de gran cuerpo (`XLII`).
- **Espectrograma Bicolor**: Barras verticales ecualizadoras en amarillo ácido neón (`#D4FF00`) para la porción transcurrida y gris oscuro apagado para el búfer restante.
- Botonera brutalista en bloques sólidos con borde negro: `[ SUSPENDER REPRODUCCIÓN ]`, selector de cadencia (`1.50x`), control de volumen.

### 5.4. Grilla de Métricas de Curaduría
- Módulo en 4 columnas separadas por líneas divisorias de 1px (`border-r border-[#080808]`).
- Encabezados mono entre corchetes: `[ 01 // AUDITORÍA ]`, `[ 02 // POSICIONAMIENTO ]`, `[ 03 // CORPUS DISPONIBLE ]`, `[ 04 // EVALUACIÓN CRÍTICA ]`.
- Números display imponentes (`+120,000`, `RANG Nº 01`, `XLVIII DISCOS`, `4.99 / 5.0`).

### 5.5. Ensayo Monográfico Destacado
- Módulo tipo pliego editorial a dos columnas:
  - **Columna izquierda**: Fotografía de placa litográfica de silicio o microscopía cuántica con chasis negro y pie de foto técnico (`PLATE Nº 41 — PLACA FOTOGRÁFICA SILICIO`).
  - **Columna derecha**: Fondo negro con tags temáticos en violeta y azul, título en serifa itálica sobredimensionada, ficha de interlocutores y botón primario en amarillo ácido (`[ ACCEDER A LA SESIÓN (1H 14M) ]`).

### 5.6. Índice de Tratados y Episodios (Catálogo)
- Filtros tipo botones de archivo: `[ TODOS LOS TRATADOS ]`, `[ TEORÍA DE IA ]`, `[ MECÁNICA CUÁNTICA ]`, `[ TOPOLOGÍA DISTRIBUIDA ]`.
- Tarjetas verticales de episodio con marco negro de 1.5px, fotografía 16:9 monocromática, badge de duración en esquina superior derecha (`52 MINUTOS` sobre neón), título en mayúsculas pesadas, sinopsis y botón `[ ESCUCHAR ]`.

### 5.7. Los Curadores / El Tribunal
- Módulos biográficos enmarcados en negro con sombra dura de 4px tipo cómic suizo/brutalista (`box-shadow: 4px 4px 0px #080808`).
- Fotografías en escala de grises de alto contraste con insignias de cargo en neón y enlaces a repositorios teóricos y claves PGP.

### 5.8. Manifiesto & Kit de Prensa
- Panel de despiece tipográfico y cromático que expone los átomos del propio sistema:
  - Tarjeta A: Logomarca & Sello con instrucciones de aislamiento sobre fondo negro.
  - Tarjeta B: Paleta de tensión óptica mostrando los bloques HEX de Acid Neon, Ultra Violet y Pearl/Noir con gradiente de onda lumínica.
  - Tarjeta C: Muestrario de tipografías con especificación de licencias (SIL OFL 1.1).

---

## 6. Do's & Don'ts

### Do
- Utilizar **`rounded-none` (0px)** en todos los elementos interactivos, contenedores y botones sin excepción.
- Usar **Amarillo Ácido (`#D4FF00`)** de forma quirúrgica como punto de máxima tensión óptica (CTAs, scrubbers, palabras clave).
- Emplear **números romanos (`XLII`, `XLI`)** para la indexación de emisiones y tratados.
- Mantener bordes nítidos de 1px a 2px en negro carbón para delimitar claramente los módulos.
- Expresar los metadatos y timestamps en tipografía monoespaciada (`Geist Mono` o `Space Mono`) con tratamiento de telemetría de archivo.

### Don't
- No utilizar bordes redondeados (`rounded-md`, `rounded-lg`, etc.).
- No aplicar sombras difusas o desenfocadas de estilo neumórfico o SaaS comercial; la única elevación permitida es el desplazamiento duro de borde (`box-shadow: 4px 4px 0px #080808`).
- No usar colores pastel suaves, degradados florales o tonalidades corporativas estándar.
- No alterar la sobriedad del blanco perla y el negro carbón como anclas del 90% de la superficie visual.
- No omitir los folios de archivo, números de fascículo ni la precisión terminológica técnica-epistemológica.
