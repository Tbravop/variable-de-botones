---
version: 4.0.0
system: "Hyperframe Visual Design System"
lastUpdated: 2026-11-11
context: "Sistema de diseño visual editorial desacoplado para animaciones web e infografías 16:9 en Bright Light Mode (Apple Keynote & Notion Light UI)"
---

# Visual Design System (`design.md`)

Este documento define la capa estética (tokens, paleta cromática, espaciado, componentes visuales y reglas tipográficas) para las animaciones web generadas en el proyecto. Es agnóstico a la implementación funcional y debe ser consultado por cualquier generador o especificación.

---

## 1. Principios Visuales Fundamentales

1. **Estética Editorial Light UI:**
   - Inspirada en Notion Light UI y Apple Keynote.
   - Limpieza geométrica, alto contraste legible y generoso espacio negativo.
   - Cero artefactos visuales, degradados estridentes o ruido decorativo innecesario.

2. **Regla de Síntesis:**
   - Priorizar siempre jerarquía de lectura inmediata: **Badge con Ícono + Título Contundente**.
   - Prohibido el texto de relleno, párrafos explicativos extensos, cajas secundarias o etiquetas minúsculas.
   - Dejar siempre despejada la zona inferior ($Y \ge 780px$) para compatibilidad con subtítulos (closed captions) y controles de reproducción.

---

## 2. Paleta Cromática & Tokens de Color

| Token | Código HEX / Valor | Rol Visual |
|---|---|---|
| `bg-canvas` | `#F8FAFC` | Fondo de lienzo suave off-white. Admite micro-grilla radial sutil (`#CBD5E1` a 1px, separación 36px, opacidad 0.5). |
| `card-bg` | `#FFFFFF` | Superficie de tarjeta blanca pura. |
| `card-border` | `#E2E8F0` | Borde sutil de 1px en reposo. |
| `card-border-active`| `#CBD5E1` | Borde refinado al activarse. |
| `title-dark` | `#0F172A` | Tipografía principal Dark Slate de alto contraste. |
| `text-muted` | `#64748B` | Etiquetas secundarias de cabecera o tags neutros. |
| **Cobalt Blue** | `#0284C7` | Acento técnico primario. Pastel badge: `#E0F2FE` (borde `rgba(2, 132, 199, 0.22)`). |
| **Indigo Violet**| `#7C3AED` | Acento de síntesis o hero central. Pastel badge: `#EDE9FE` (borde `rgba(124, 58, 237, 0.22)`). |
| **Emerald** | `#059669` | Acento de verificación y éxito. Pastel badge: `#D1FAE5` (borde `rgba(5, 150, 105, 0.22)`). |

---

## 3. Sombras & Profundidad

- **Sombra Ambiental Base:**
  ```css
  box-shadow: 0 10px 30px -4px rgba(15, 23, 42, 0.04), 0 4px 12px -2px rgba(15, 23, 42, 0.02);
  ```
- **Sombra Hero / Activa:**
  ```css
  box-shadow: 0 24px 48px -12px rgba(15, 23, 42, 0.09), 0 8px 16px -4px rgba(15, 23, 42, 0.04);
  ```

---

## 4. Tipografía & Jerarquía

- **Familias Tipográficas:** `Inter`, `Outfit` y `JetBrains Mono` (para metadatos de cabecera).
- **Titular de Tarjeta:** `32px` a `42px`, peso `800` o `900`, mayúsculas, color `#0F172A`, letter-spacing `-0.01em` a `-0.02em`.
- **Hero Dominante Central:** `42px` a `48px`.
- **Cabecera de Escena:** `32px` a `36px` en peso `800` con badge en pastilla (`12px` - `13px` monospace).

---

## 5. Íconos & Badges

- **Íconos:** Únicamente vectores SVG minimalistas estilo Lucide (trazo continuo de `2px`, esquinas redondeadas `stroke-linecap="round" stroke-linejoin="round"`, sin relleno `fill="none"`).
- **Badges:** Cuadriláteros con bordes redondeados (`border-radius: 24px` a `34px`) en color pastel correspondiente al rol del acento.
- **Pulsos:** Onda expansiva suave (*sonar shockwave*) concéntrica al badge (`border: 2px solid <accent>`) que desvanece su opacidad de `1` a `0`.

---

## 6. Reglas de Refactorización y Pulido Visual (Craftsmanship Rules)

Estas 15 reglas deben aplicarse estrictamente en cada componente, infografía o pantalla generada:

1. **Delete filler badges:** Eliminar etiquetas y badges decorativos colocados solo para rellenar espacio (`01 // TOFU`, `01 // SOURCE`, números de esquina redundantes `01`, `02`). Si la caja o tarjeta ya explica su contenido mediante un titular específico, cualquier badge enumerador es redundante. Asimismo, no utilizar numeraciones artificiales ni porcentajes cosméticos con animaciones de contador en cabeceras o tarjetas.
2. **Drop redundant labels:** Eliminar textos que repitan lo obvio. Si el titular es específico y claro, no duplicarlo con micro-subtítulos o categorías obvias.
3. **Unitalicize random words:** Prohibir cursivas aleatorias o estilizadas en prosa, badges o etiquetas. La tipografía debe mantenerse upright/romana con pesos calibrados (400, 600, 800) para máxima solidez y legibilidad.
4. **Mono only where needed:** Reservar tipografías monospace (`JetBrains Mono`) exclusivamente para datos técnicos reales, hashes, código o cifras numéricas en tablas. Todo texto editorial, botones y titulares deben usar la fuente principal (`Inter` / `OTSono`).
5. **Enlarge the main feature or title:** Establecer una jerarquía sin timidez: el titular o la tarjeta principal (*Hero Feature*) debe tener un tamaño notablemente mayor y dominante (ej. 42px-54px vs 26px-30px en tarjetas secundarias) para guiar la mirada de inmediato.
6. **Group with spacing:** Agrupar elementos por proximidad y espacio en blanco calibrado (`gap: 8px-12px` para elementos vinculados, `32px-48px` entre secciones), en lugar de encerrar todo en cajas, divisores o bordes decorativos.
7. **Make headlines specific:** Reemplazar términos abstractos de una sola palabra (*"ATRACCIÓN"*, *"ORQUESTACIÓN"*, *"DECISIÓN"*) por titulares concretos, informativos y orientados a la acción (*"Captación de Demanda Cualificada"*, *"Orquestación Cognitiva Multi-Modelo"*, *"Activación & Cierre de Pago"*).
8. **Add an accent colour:** Además de la base cromática principal (pergamino `#F5F5EB` y morado sutil `#A78BFA`), utilizar un segundo color de acento de alto impacto de forma intencional y sobria (ej. Coral / Ámbar Eléctrico `#FF6B4A` o Coral Señal `#FF5A36`) para enfatizar el estado final, métricas críticas o la llamada principal.
9. **Keep icons consistent:** Todos los íconos deben compartir rigurosamente el mismo lenguaje geométrico: trazo vectorial de exactamente `2px`, terminaciones redondeadas (`stroke-linecap="round" stroke-linejoin="round"`), sin relleno (`fill="none"`) y misma área óptica de visualización.
10. **Remove embellishments:** Eliminar artefactos ornamentales innecesarios (patrones de puntos de fondo saturados, pulsos dobles distractores, gradientes estridentes y bordes decorativos que aporten ruido).
11. **Inner radius = outer - padding:** Respetar la ley geométrica de radios anidados concéntricos: el radio interior de un contenedor hijo debe ser exactamente igual al radio exterior menos el padding del padre ($R_{\text{interior}} = R_{\text{exterior}} - \text{padding}$). Si el padding excede el radio, el interior debe tender a radio natural o plano para evitar distorsión visual.
12. **Improve text contrast:** Garantizar contraste AAA. Todo texto principal debe renderizarse en tinta profunda (`#14140F` o `#0F172A`) y el secundario en grafito legible (`#33332D` o `#475569`). Prohibir grises claros deslavados sobre fondos cálidos o pasteles.
13. **Wrap headlines properly:** Utilizar `text-wrap: balance` (y `text-wrap: pretty`) con anchos máximos calibrados para evitar líneas huérfanas con una sola palabra o cortes antinaturales en titulares.
14. **Align by eye not pixels:** Aplicar alineación óptica. Los íconos con centros de masa asimétricos (triángulos de play, conos, embudos, flechas) deben compensarse visualmente en 1-2px para que el ojo humano los perciba perfectamente centrados, no solo por su caja contenedora.
15. **Use tabular nums:** Aplicar `font-variant-numeric: tabular-nums` y `font-feature-settings: "tnum" 1` a todo número, métrica, porcentaje, cronómetro o indicador secuencial, garantizando que los dígitos no salten ni desplacen el texto circundante al actualizarse.
