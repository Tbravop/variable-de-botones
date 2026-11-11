---
version: 3.0.0
system: "Broadcast TV Motion Graphics Design System"
lastUpdated: 2026-11-11
context: "Animaciones de 10s Full HD (1920×1080 @ 30 FPS) para Pantallas de Televisión, Móviles y Streaming"
---

# TV Broadcast Motion Graphics — Especificación de Diseño & Animación (v3.0)

Este documento define las reglas de diseño visual, arquitectura tipográfica y estándares de animación para piezas audiovisuales de **10 segundos exactos** reproducidas en pantallas de televisión (TV distance), transmisiones y smartphones.

---

## 1. Principio Fundamental: Síntesis Total & TV / Mobile Readability

A diferencia de un diagrama técnico o un manual de lectura estático:
1. **Regla de Oro: SOLO ÍCONO + TÍTULO GIGANTE.** En una pieza de 10 segundos, el espectador no alcanza a procesar párrafos explicativos ni tablas de telemetría. Debe comunicarse un modelo mental inmediato: **Ícono Vectorial SVG + Título en negrita de 1 a 3 palabras**.
2. **Prohibido el Texto de Relleno:** Eliminar micro-subtítulos, descripciones extensas, tablas de entrada/salida y etiquetas innecesarias (ej: "5 etapas críticas", "Metodología", "Listo ✓").
3. **Zona Segura para Subtítulos (Subtitle Safe Area):** Toda la zona inferior de la pantalla (desde $Y \ge 750px$ hasta $1080px$, es decir más de 300px libres) debe reservarse exclusivamente para subtítulos (closed captions), banners informativos o controles de video. Ninguna tarjeta o nodo debe ocupar esta área.
4. **Íconos Vectoriales Propios (Prohibido Emojis):** Se prohíbe el uso de emojis del sistema (🤖, 👤, 🛡️, 🌐, etc.). Todos los íconos deben ser vectores SVG limpios, profesionales, con trazos geométricos y resplandores neon acordes a la paleta.

---

## 2. Paleta Cromática de Emisión (Broadcast Palette)

| Token | Código HEX | Rol Semántico en Pantalla |
|---|---|---|
| `colors.cyan` | `#00F0FF` | **Luz Primaria & Señal Activa**: Cables láser, trazadores de datos, pulsos de foco y badges. |
| `colors.emerald` | `#10B981` | **Éxito & Validación**: Estados completados, métricas óptimas y meta final de conversión. |
| `colors.amber` | `#F59E0B` | **Atención & Automatización**: Flujos secundarios, secuencias de email y demostraciones. |
| `colors.bg-dark` | `#070B14` | Fondo cinemático con degradado radial hacia `#020408`. |
| `colors.bg-card` | `rgba(13, 21, 38, 0.94)` | Tarjetas traslúcidas con desenfoque de cristal (`backdrop-filter: blur(16px)`). |
| `colors.border` | `rgba(255, 255, 255, 0.14)` | Bordes técnicos sutiles que ganan resplandor al activarse. |
| `colors.text-white`| `#FFFFFF` | Titulares con máxima legibilidad y nitidez a distancia. |
| `colors.text-muted`| `#94A3B8` | Etiquetas de etapa y números de fase. |

---

## 3. Escala Tipográfica para TV & Pantallas Móviles

Se emplean fuentes de alta legibilidad geométrica (`Montserrat` y `JetBrains Mono`):
- **Titular Principal (Header Broadcast):** `24px` a `28px` (ExtraBold, Tracking +0.05em).
- **Títulos de Tarjeta / Fase / Estación:** `34px` a `44px` (Black 900, Mayúsculas).
- **Números de Etapa:** `40px` a `48px` (Black 900).
- **Pills de Estado (Mono):** `13px` a `15px` (JetBrains Mono 800, Mayúsculas).

> **Restricción Estricta:** No emplear fuentes menores a `20px` para elementos de lectura esenciales.

---

## 4. Motion Guidelines: Animación Cinematográfica Avanzada

Para evitar el aspecto rígido o plano de diapositivas estáticas tipo Canva:

### 4.1. Paquetes de Energía y Fotones Trazadores
- Las conexiones entre nodos son líneas activas por donde viaja un fotón de luz (`<circle r="7-8">`) que recorre dinámicamente la curva SVG mediante `getPointAtLength()` sincronizado con GSAP.
- Tienen resplandor neon (`filter: drop-shadow(0 0 12px var(--cyan))`).

### 4.2. Ondas de Choque (Sonar Shockwaves)
- Cada activación de tarjeta emite una onda sonar circular expansiva:
  ```javascript
  tl.fromTo(sonarRing, 
    { scale: 0.8, opacity: 1 }, 
    { scale: 2.2, opacity: 0, duration: 0.7, ease: "power2.out" }
  );
  ```

### 4.3. Easing Orgánico y Enérgico
- Se utiliza `ease: "back.out(1.5)"` para entradas que entran a pantalla con firmeza y presencia.
- Sincronización escalonada precisa para distribuir los 10 segundos sin aceleraciones caóticas.
- Los últimos 1.5 segundos (8.5s a 10s) unifican todas las estaciones iluminadas en armonía visual.

### 4.4. Barra de Progreso Global
- En el borde inferior exacto (Y=1074) corre una línea milimétrica de 0% a 100% durante los 10.0 segundos exactos.

---

## 5. Do's & Don'ts para Broadcast TV

### ✅ Do
- Mantener la regla: **SOLO ÍCONO VECTORIAL + TÍTULO GIGANTE**.
- Dejar el tercio inferior ($Y \ge 750px$) completamente despejado para subtítulos de TV / video players.
- Utilizar íconos vectoriales SVG limpios con trazo `2` o `2.2px`.
- Verificar que el contenedor `#stage-scaler` mantenga la resolución base 1920×1080 con escalado responsive automático.

### ❌ Don't
- **No usar emojis** del sistema operativo (🤖, 👤, 🛡️, etc.).
- **No colocar párrafos ni descripciones en texto pequeño** que no puedan leerse en 10 segundos.
- **No invadir la zona inferior de la pantalla**, reservada para subtítulos.
- **No incluir referencias o marcas comerciales (Trébol)** para preservar neutralidad técnica.
