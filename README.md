# Variable de Botones — Matriz Atómica de Diseño

> **"¿Qué tan complejo es un simple botón?"**  
> Demostración visual y animada de arquitectura de Design Systems: cómo un único botón semilla escala atómicamente hasta generar **96 variantes funcionales**.

---

## 📐 Estructura de la Matriz (96 Variantes)

El componente botón se organiza en una matriz multidimensional:

$$\text{Total Variantes} = 8\text{ estados funcionales} \times 4\text{ intenciones} \times 3\text{ tamaños} = 96$$

### 1. Estados Funcionales (8)
- **Default** (Continuar)
- **Hover**
- **Active / Pressed**
- **Focus Visible**
- **Disabled**
- **Leading Icon** (Con icono auxiliar)
- **Icon-Only** (Modo solo icono)
- **Loading** (Spinner animado)

### 2. Intenciones de Jerarquía (4)
- **Primary**: Acción principal en azul sólido.
- **Secondary**: Acción secundaria con borde neutral y fondo translúcido.
- **Ghost**: Acción ligera sin borde (borderless) en cyan.
- **Danger**: Acción destructiva en rojo sólido.

### 3. Escalas de Componente (3)
- **Small (32px)**
- **Medium (48px)** — Tamaño base
- **Large (56px)**

---

## 🎬 Especificaciones Técnicas

- **Framework**: [HyperFrames](https://hyperframes.dev) / HTML5 Canvas & GSAP 3
- **Formato**: Vertical 9:16 (`1080 x 1920 px`)
- **Framerate**: 30 FPS
- **Duración**: 20 segundos

---

## 🚀 Previsualización y Ejecución

Para correr el proyecto localmente con HyperFrames:

```bash
# Iniciar servidor de preview interactivo
npx hyperframes preview

# Comprobar integridad y compatibilidad
npx hyperframes check

# Exportar captura de frames
npx hyperframes snapshot
```

---

Diseñado por [Tomás Bravo (Tbravop)](https://github.com/Tbravop).
