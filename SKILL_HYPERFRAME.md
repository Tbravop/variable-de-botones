---
version: 1.0.0
name: "Hyperframe Engineering Contract & Skill"
description: "Reglas técnicas obligatorias, arquitectura de código y patrones de animación determinista para el motor Hyperframe."
---

# Hyperframe Engineering Skill (`SKILL_HYPERFRAME.md`)

Este documento compila el contrato técnico obligatorio ("el cómo se hace") para desarrollar animaciones web en HTML/CSS/JS ejecutadas y renderizadas cuadro por cuadro de forma determinista mediante el motor de **Hyperframe**.

---

## 1. Estructura HTML Requerida

Toda composición debe declarar sus dimensiones, framerate y duración tanto en la raíz `<html>` como en el nodo contenedor principal `.clip`.

```html
<!DOCTYPE html>
<html lang="es" data-fps="30" data-duration="10" data-width="1920" data-height="1080">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1920, height=1080, initial-scale=1.0">
  <title>Nombre de la Composición</title>
  
  <!-- Dependencia obligatoria del motor de interpolación -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
  <style>
    /* Reset base */
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Contenedor maestro a escala fija */
    #stage-scaler {
      position: absolute;
      width: 1920px;
      height: 1080px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1);
      transform-origin: center center;
      overflow: hidden;
    }
  </style>
</head>
<body>

  <!-- Nodo raíz con el contrato de atributos de Hyperframe -->
  <div id="stage-scaler" 
       class="clip" 
       data-composition-id="unique_composition_id" 
       data-width="1920" 
       data-height="1080" 
       data-duration="10" 
       data-start="0">
       
    <!-- Capas de contenido, SVG y elementos animados aquí -->
    
  </div>

  <script>
    /* Script de animación y registro de timeline */
  </script>
</body>
</html>
```

### Atributos Obligatorios del Contenedor Raíz
- `class="clip"`: Identifica el elemento como un clip secuenciable por el motor.
- `data-composition-id="<id_unico>"`: Identificador alfanumérico sin espacios.
- `data-width="1920"` y `data-height="1080"`: Resolución canónica de renderizado (16:9).
- `data-duration="<segundos>"`: Duración exacta en segundos del clip.
- `data-start="0"`: Offset temporal de inicio.

---

## 2. Responsive Stage Scaler

Para permitir previsualización interactiva en cualquier tamaño de pantalla sin descalibrar las coordenadas fijas de 1920×1080:

```javascript
function handleResize() {
  const stage = document.getElementById("stage-scaler");
  if (!stage) return;
  const scaleX = window.innerWidth / 1920;
  const scaleY = window.innerHeight / 1080;
  const scale = Math.min(scaleX, scaleY);
  stage.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

window.addEventListener('resize', handleResize);
handleResize();
```

---

## 3. Contrato de Determinismo Temporal (Reglas Sagradas)

Hyperframe renderiza fotograma por fotograma desplazando un cabezal de tiempo virtual (`seek`). Cualquier discrepancia con el reloj del sistema romperá la sincronía del video.

### 🚫 Prácticas Prohibidas
1. **NO usar reloj del sistema:** Prohibido `Date.now()`, `performance.now()`, `setTimeout` o `setInterval`.
2. **NO usar aleatoriedad no determinista:** Prohibido `Math.random()` sin un generador pseudoaleatorio basado en semilla (*seeded PRNG*).
3. **NO usar bucles infinitos:** Prohibido `repeat: -1` en GSAP. Toda animación debe tener fin antes de `data-duration`.
4. **NO usar transiciones CSS (`transition`):** Las propiedades `transition: all` o `transition: transform` en CSS se ejecutan en el hilo del navegador sin control frame-by-frame. Toda interpolación debe gestionarse vía GSAP.
5. **NO manipular `transform` por CSS en elementos animados por GSAP:** Emplear exclusivamente las propiedades nativas de GSAP (`x`, `y`, `scale`, `rotation`) para evitar pisar matrices.
6. **NO animar visibilidad en `.clip`:** Nunca tweenear `display`, `visibility` ni `autoAlpha` en un nodo que contenga `class="clip"`. Animar siempre sus nodos hijos.

### ✅ Prácticas Obligatorias
1. **Timeline Pausado al Inicio:** El timeline debe crearse en estado `paused: true`.
2. **Registro en `window.__timelines`:**
   ```javascript
   const tl = gsap.timeline({ paused: true });
   window.__timelines = window.__timelines || {};
   window.__timelines["unique_composition_id"] = tl;
   ```
3. **Autoplay Condicional para Preview:** Al final del script de inicialización, invocar `tl.play()` para que la vista en navegador se reproduzca sola, mientras que el CLI de Hyperframe tomará control llamando a `tl.pause()` y `tl.seek()`.

---

## 4. Patrones de Animación Reutilizables

### A. Inicialización Explícita de Estados (`gsap.set`)
Evita parpadeos de contenido (*FOUC*) estableciendo los estados iniciales al inicio del timeline:
```javascript
gsap.set("#header-bar", { opacity: 0, y: -16 });
gsap.set(".bento-card", { opacity: 0, y: 30 });
```

### B. Animación de Trazado Vectorial SVG
Para animar el recorrido de líneas o conductos vectoriales:
```javascript
const setupVector = (id) => {
  const p = document.getElementById(id);
  if (!p) return { path: null, len: 0 };
  const len = p.getTotalLength() + 4;
  gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
  return { path: p, len };
};

const v1 = setupVector("vector-conduit-1");

// Animación del trazo
tl.to(v1.path, { strokeDashoffset: 0, duration: 0.5, ease: "power2.inOut" }, 1.5);
```

### C. Partícula / Fotón Trazador Dinámico (`getPointAtLength`)
Para hacer que un elemento viaje sobre una ruta curva o recta de forma determinista:
```javascript
tl.set("#photon", { opacity: 1 }, 1.5);
tl.to("#photon", {
  duration: 0.5,
  ease: "power2.inOut",
  onUpdate: function() {
    const pt = v1.path.getPointAtLength(this.progress() * v1.len);
    const el = document.getElementById("photon");
    el.setAttribute("cx", pt.x);
    el.setAttribute("cy", pt.y);
  }
}, 1.5);
tl.set("#photon", { opacity: 0 }, 2.0);
```

### D. Ondas de Activación (Sonar Shockwaves)
```javascript
tl.fromTo("#pulse-badge", 
  { scale: 0.85, opacity: 0.9 }, 
  { scale: 1.8, opacity: 0, duration: 0.6, ease: "power2.out" }, 
  0.8
);
```

### E. Barra de Progreso Global
Sincronizada estrictamente de `0%` a `100%` en el tiempo total:
```javascript
tl.to("#progress-fill", { width: "100%", duration: 10, ease: "none" }, 0);
```

### F. Estado Final de Sostenimiento (*Hold State*)
Los últimos 1.5 a 2.0 segundos de la animación deben dejar todos los elementos clave en su estado de reposo definitivo activo, permitiendo al espectador asimilar la composición completa antes del corte o bucle.
```javascript
tl.to(".bento-card", {
  opacity: 1,
  y: 0,
  duration: 0.5,
  onStart: () => {
    document.querySelectorAll(".bento-card").forEach(c => c.classList.add("active"));
  }
}, 8.4);
```

---

## 5. Controles de Teclado para Previsualización

Incluir siempre en el bloque de inicialización para facilitar la inspección manual:
```javascript
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') tl.paused(!tl.paused());
  if (e.code === 'KeyR') tl.restart();
});
```
