# SYNAPSE // Avant-Garde Architectural Editorial & Hyperframes Suite

> **Rama Activa**: `feature/synapse-tech-podcast`  
> **Sistema de Diseño**: [`design.md_podcast.md`](design.md_podcast.md) & [`design.md`](design.md) (Variante 3: Avant-Garde Architectural Editorial)  
> **Motor de Animación**: [Hyperframes](https://hyperframes.dev) determinista a 1920×1080 @ 30 FPS  
> **Despliegue GitHub Pages**: Listo para visualizar en `https://tbravop.github.io/variable-de-botones/`

---

## 🏛️ Manifiesto & Identidad de Marca: SYNAPSE // LAB ARCHIVE

La **Variante 3 (Avant-Garde Architectural Editorial)** replantea la experiencia del podcast tecnológico como un **aparato de investigación epistemológica y publicación arquitectónica de culto** inspirada en revistas europeas (*032c*, *Volume Magazine*, *ARCH+*, *Domus*).

### Principios Fundamentales:
1. **Rigor Tectónico Inviolable (`rounded-none: 0px`)**: Cero bordes redondeados en contenedores, tarjetas, scrubbers y botones. Solo los micro-indicadores de estado circulares llevan radio.
2. **Brutalismo Óptico de Alto Contraste**: Blanco Perla (`#F8F8F6`) y Negro Carbón puro (`#080808`), tensados quirúrgicamente con **Amarillo Ácido / Neon Lime (`#D4FF00`)** y **Ultra Violet (`#4A00E0`)**.
3. **Jerarquía Couture & Monumental**:
   - Títulos Colosales: `Archivo Black` / `Syne 900`
   - Aforismos y Citas Críticas: `Instrument Serif` (itálica)
   - Telemetría Forense: `Geist Mono` / `Space Mono`
4. **Sombras de Bloque Brutalista**: Desplazamiento rígido `box-shadow: 4px 4px 0px #080808`. Prohibido el sombreado difuso o neumórfico.

---

## 🚀 Componentes Principales de la Nueva Versión

### 1. Hub Editorial Web para GitHub Pages (`index.html`)
- **Ticker Superior Forense**: Coordenadas de transmisión, reloj UTC y estado de búfer criptográfico en vivo.
- **Barra Curatorial**: Acceso a secciones con prefijos monoespaciados (`[ S.01 APARATO ]`, `[ S.02 REPRODUCTOR ]`, `[ S.03 TRATADOS ]`, `[ S.04 MONOGRAFÍA ]`, `[ S.05 TRIBUNAL ]`, `[ S.06 HIPERFRAMES ]`).
- **Hero Monumental ("Aparato Teórico")**: Título monumental hueco `SYNAPSE LAB`, cita en serif con resaltador amarillo neón y matriz de audio directo.
- **Reproductor Monolítico Escultórico (Dark Block `#050505`)**: Espectrograma interactivo bicolor animado de 64 barras con tiempo de reproducción sincronizado, selector de cadencia (`1.0x`, `1.50x`, `2.0x`), y selector interactivo de fascículos (`XLII`, `XLI`, `XL`, `XXXIX`).
- **Grilla de 4 Métricas Curatoriales**: Auditoría de sistemas, posicionamiento, corpus y rigor analítico.
- **Pliego Monográfico Editorial (Dos Columnas)**: Oblea litográfica de silicio a 2nm y dossier de interlocutores.
- **Índice de Tratados & Catálogo**: Filtros temáticos por categoría (Teoría de IA, Mecánica Cuántica, Topología Distribuida) y botones de escucha instantánea.
- **Suite Hyperframes Integrada**: Visor interactivo en tiempo real con selector de composiciones y controles de reinicio.
- **El Tribunal / Curadores**: Tarjetas biográficas con sombras duras y firmas PGP de los investigadores.
- **Press Kit & Inspector de Tokens**: Muestrario de paleta de colores y especificaciones de diseño.

---

## 🎬 Composiciones Hyperframes (1920×1080 @ 30 FPS, 10s)

Todas las composiciones cumplen estrictamente el contrato determinista de Hyperframes (`SKILL_HYPERFRAME.md`):

1. **`synapse_hyperframe_intro.html`**:
   - Secuencia monumental de cabecera para transmisiones y YouTube Master.
   - Despliegue de grilla arquitectónica, numeración romana `XLII` en bloque monolítico, conductos vectoriales animados de silicio, y cita monográfica con espectrograma bicolor.
   - Registrado en `window.__timelines["synapse_intro_10s"]`.

2. **`synapse_hyperframe_treatise.html`**:
   - Infografía broadcast en 3 columnas rígidas: Epistemología (Límite de Landauer), Hardware Neuromórfico (Memristores sinápticos) y Síntesis Tectónica.
   - Barra de progreso temporal de 10 segundos y estado de sostenimiento final (*Hold State*).
   - Registrado en `window.__timelines["synapse_treatise_10s"]`.

3. **`synapse_hyperframe_obs_cam.html`**:
   - Overlay de emisión en directo para OBS Studio en formato 16:9 con área de recorte de cámara enmarcada con esquinas en corchetes neón.
   - Telemetría lateral con medidores VU dinámicos de audio multicanal y lower-third editorial inferior.
   - Registrado en `window.__timelines["synapse_obs_cam_10s"]`.

---

## 💻 Comandos Útiles

```bash
# 1. Previsualizar localmente el Hub o las animaciones
npx serve . -p 3000
# Abre: http://localhost:3000/

# 2. Renderizar las piezas de video Full HD con Hyperframes CLI
npx hyperframes render -c synapse_hyperframe_intro.html -o renders/synapse_intro.mp4 --fps 30 --format mp4
npx hyperframes render -c synapse_hyperframe_treatise.html -o renders/synapse_treatise.mp4 --fps 30 --format mp4
```

---

## 🌐 Publicación en GitHub Pages

1. La rama `feature/synapse-tech-podcast` contiene el archivo `.nojekyll` en la raíz para garantizar la entrega íntegra de todos los recursos estáticos.
2. `index.html` en la raíz sirve como puerta de enlace y visor directo para GitHub Pages.
3. Al fusionar o publicar esta rama (`gh-pages` o `main`), el sitio queda disponible inmediatamente en:
   **`https://tbravop.github.io/variable-de-botones/`**
