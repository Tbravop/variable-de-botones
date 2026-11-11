# 📺 TV Broadcast Infographics Motion Suite — Handoff Package (v3.0)

Este paquete contiene las **4 infografías animadas cinematográficas** desarrolladas y optimizadas para visualización en **pantallas de televisión, dispositivos móviles y streaming** (Full HD 1920×1080 a 30 FPS con duración estricta de 10.0 segundos).

---

## 🎯 Estándares de Diseño & Emisión en TV / Móvil (v3.0)

1. **Regla de Oro: Solo Ícono Vectorial + Título Gigante:**
   - En una animación de 10 segundos el espectador no alcanza a procesar párrafos explicativos ni tablas de datos.
   - Cada estación o nodo comunica la idea de forma instantánea mediante un **ícono vectorial SVG limpio** y un **título en tipografía grande (34px - 44px)**.
   - Cero ruido visual: sin micro-subtítulos, sin párrafos de relleno, sin indicadores "Listo ✓" innecesarios.

2. **Íconos Vectoriales Propios (Sin Emojis):**
   - Todos los elementos gráficos utilizan vectores SVG personalizados con trazos limpios (`stroke-width: 2.2px`) y resplandores neon a juego con la identidad visual técnica.

3. **Zona Segura para Subtítulos (Subtitle Safe Area):**
   - El tercio inferior de la pantalla ($Y \ge 750px$ a $1080px$, más de 300px libres) está completamente despejado para closed captions de televisión, tercios inferiores (lower-thirds) y reproductores de video.

4. **Animación Dinámica Cinematográfica (GSAP + SVG):**
   - Fotones de energía trazadores que viajan en tiempo real sobre cables láser SVG con `getPointAtLength()`.
   - Ondas de choque (sonar shockwaves) que irradian desde los nodos al activarse.
   - Transiciones elásticas con `ease: "back.out(1.5)"` y sincronización a 10.0 segundos exactos.
   - Barra de progreso milimétrica en el borde inferior.

---

## 📂 Contenido del Directorio

```text
trebol_infografias_entrega/
│
├── DESIGN.md                          # 🎨 Guía oficial del sistema de diseño para TV (paleta, fuentes y motion)
├── README.md                          # 📘 Manual de handover e instrucciones técnicas
├── index.html                         # 🌐 Showcase interactivo con reproductores MP4 para televisión
├── package.json                       # ⚙️ Scripts npm para previsualización y renderizado con HyperFrames
│
├── infografia_1_writing_process.html  # 📄 Fuente HTML 01: The Writing Process (5 fases radiales con pulsos)
├── infografia_2_agentic_flow.html     # 📄 Fuente HTML 02: Ciclo Agéntico (Inception → Generación IA → Review)
├── infografia_3_rl_vs_imitation.html  # 📄 Fuente HTML 03: Reinforcement Learning vs. Imitation Learning
├── infografia_4_funnel_marketing.html # 📄 Fuente HTML 04: Embudo de Conversión & Nutrición de 5 Emails
│
└── renders/                           # 🎬 Videos finales MP4 Full HD (1920×1080 @ 30 FPS, 10.0s exactos):
    ├── infografia_01_writing_process.mp4
    ├── infografia_02_agentic_flow.mp4
    ├── infografia_03_rl_vs_imitation.mp4
    └── infografia_04_funnel_marketing.mp4
```

---

## 🚀 Visualización en Localhost

El servidor HTTP local se encuentra activo en el puerto 3000:
- Hub Principal de Entrega: `http://localhost:3000/trebol_infografias_entrega/index.html`
- Hub General: `http://localhost:3000/hub.html`
- Infografía 01 (HTML interactivo): `http://localhost:3000/infografia_1_writing_process.html`
- Infografía 02 (HTML interactivo): `http://localhost:3000/infografia_2_agentic_flow.html`
- Infografía 03 (HTML interactivo): `http://localhost:3000/infografia_3_rl_vs_imitation.html`
- Infografía 04 (HTML interactivo): `http://localhost:3000/infografia_4_funnel_marketing.html`

---

## 🎥 Comandos de Renderizado HyperFrames

Para renderizar las animaciones tras realizar cualquier cambio en el código:
```bash
# Renderizar individualmente a MP4 Full HD
npx hyperframes render infografia_1_writing_process.html -o renders/infografia_01_writing_process.mp4 --fps 30 --format mp4
npx hyperframes render infografia_2_agentic_flow.html -o renders/infografia_02_agentic_flow.mp4 --fps 30 --format mp4
npx hyperframes render infografia_3_rl_vs_imitation.html -o renders/infografia_03_rl_vs_imitation.mp4 --fps 30 --format mp4
npx hyperframes render infografia_4_funnel_marketing.html -o renders/infografia_04_funnel_marketing.mp4 --fps 30 --format mp4
```
*(Requiere Node.js 18+ y FFmpeg instalado).*
