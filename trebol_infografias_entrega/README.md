# 📺 Ultra-Clean 2026 Bento Grid Motion Suite (v4.0)

Este paquete contiene la nueva versión de **infografías técnicas animadas cinematográficas en formato 16:9 editorial UI graphic**, diseñadas con estética **Apple Keynote & Notion Light UI** para televisión, streaming y dispositivos móviles (Full HD 1920×1080 a 30 FPS con duración estricta de 10.0 segundos).

---

## 🎯 Estándares de Diseño Bento 2026 (v4.0)

1. **Bright Light Mode & Fondo Editorial:**
   - Fondo suave off-white (`#F8FAFC`) con micro-grilla arquitectónica sutil.
   - Tarjetas blancas puras redondeadas (`#FFFFFF`, `border-radius: 28px - 32px`) con bordes sutiles de 1px (`#E2E8F0`) y sombras de caída ambiental suaves (`box-shadow: 0 10px 30px -4px rgba(15, 23, 42, 0.04)`).

2. **Adaptación Dinámica del Layout al Flujo Lógico:**
   - **Stepped 2+3 Grid (`infografia_1_writing_process.html`):** Formato escalonado de 5 etapas editoriales con conducto ortogonal.
   - **3 Linear Columns (`infografia_2_agentic_flow.html`):** Pipeline horizontal de 3 estaciones de desarrollo agéntico.
   - **Convergent Center Hero (`infografia_3_rl_vs_imitation.html`):** Arquitectura de aprendizaje con tarjeta central hero dominante ("Núcleo de Aprendizaje") alimentada por haces vectoriales convergentes.
   - **Sequential 4 Stages (`infografia_4_funnel_marketing.html`):** Embudo de conversión en 4 etapas equilibradas.

3. **Regla Estricta: Cero Ruido Visual:**
   - **NO bottom boxes**
   - **NO secondary icons**
   - **NO small labels**
   - **NO paragraphs**
   - Dentro de cada tarjeta: **UN SOLO ícono minimalista estilo Lucide de trazo 2px** dentro de un badge suavemente redondeado de color pastel (Cobalt Blue `#0284C7`, Indigo Violet `#7C3AED`, Emerald `#059669`) y **UN SOLO título grande en negrita Dark Slate (`#0F172A`)** debajo.

4. **Líneas Vectoriales Geométricas & GSAP Motion:**
   - Haces vectoriales láser con paquetes de energía circulares sincronizados milimétricamente con `getPointAtLength()`.
   - Ondas sonar expansivas en cada badge pastel al activarse.
   - Duración exacta de 10.0 segundos y barra de progreso editorial milimétrica en la base.

---

## 📂 Contenido del Paquete

```text
trebol_infografias_entrega/
│
├── DESIGN.md                          # 🎨 Sistema de diseño Bento 2026 (paleta, tokens y motion)
├── README.md                          # 📘 Documentación de entrega
├── index.html                         # 🌐 Hub interactivo con reproductores Full HD
├── package.json                       # ⚙️ Scripts npm para renderizado con HyperFrames
│
├── infografia_1_writing_process.html  # 📄 Fuente HTML 01: The Writing Process (Stepped 2+3 Grid)
├── infografia_2_agentic_flow.html     # 📄 Fuente HTML 02: Ciclo Agéntico (3 Linear Columns)
├── infografia_3_rl_vs_imitation.html  # 📄 Fuente HTML 03: Refuerzo vs. Imitación (Convergent Center Hero)
├── infografia_4_funnel_marketing.html # 📄 Fuente HTML 04: Funnel de Conversión (Sequential 4 Stages)
│
└── renders/                           # 🎬 Videos MP4 Full HD (1920×1080 @ 30 FPS, 10.0s):
    ├── infografia_01_writing_process.mp4
    ├── infografia_02_agentic_flow.mp4
    ├── infografia_03_rl_vs_imitation.mp4
    └── infografia_04_funnel_marketing.mp4
```

---

## 🚀 Previsualización & Servidor Local

Con el servidor HTTP activo en el puerto 3000:
- Hub Principal de Entrega: `http://localhost:3000/trebol_infografias_entrega/index.html`
- Hub General: `http://localhost:3000/hub.html`
- Infografía 01 (HTML interactivo): `http://localhost:3000/infografia_1_writing_process.html`
- Infografía 02 (HTML interactivo): `http://localhost:3000/infografia_2_agentic_flow.html`
- Infografía 03 (HTML interactivo): `http://localhost:3000/infografia_3_rl_vs_imitation.html`
- Infografía 04 (HTML interactivo): `http://localhost:3000/infografia_4_funnel_marketing.html`
