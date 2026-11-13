const fs = require('fs');
const path = require('path');

console.log('Building 4 Perk UX-Motion Infographics & Unified Dashboard...');

// =========================================================================
// 1. INFOGRAFÍA 1: PROCESO EDITORIAL (STEPPED 2+3)
// =========================================================================
const perk1Html = `<!DOCTYPE html>
<html lang="es" data-fps="30" data-duration="10" data-width="1920" data-height="1080">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1920, height=1080, initial-scale=1.0">
  <title>El Proceso Editorial // Perk UX-Motion (Stepped 2+3)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
  <style>
    :root {
      --color-primary-purple: #A78BFA;
      --color-primary-purple-soft: #EDE9FE;
      --color-primary-purple-deep: #7C3AED;
      
      --color-accent-coral: #FF5A36;
      --color-accent-coral-soft: #FFEFEB;
      
      --color-off-black-ink: #14140f;
      --color-off-white-canvas: #f5f5eb;
      --color-pure-white: #ffffff;
      --color-ash: #d2d2c8;
      --color-graphite: #383832;
      
      --font-otsono: 'Inter', system-ui, -apple-system, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;

      /* Snappy UX-Motion Timing Tokens (Skills 10 & 11) */
      --ease-snappy-out: cubic-bezier(0.16, 1, 0.3, 1);
      --ease-snappy-in: cubic-bezier(0.4, 0, 1, 1);
      --ease-elastic-out: cubic-bezier(0.34, 1.56, 0.64, 1);
      --ease-in-out-smooth: cubic-bezier(0.4, 0, 0.2, 1);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    html, body {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background: var(--color-off-white-canvas);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-otsono);
      color: var(--color-off-black-ink);
      -webkit-font-smoothing: antialiased;
    }

    #stage-scaler {
      position: absolute;
      width: 1920px;
      height: 1080px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1);
      transform-origin: center center;
      background: var(--color-off-white-canvas);
      overflow: hidden;
    }

    /* Top Editorial Header */
    .perk-nav {
      position: absolute;
      top: 48px;
      left: 140px;
      right: 140px;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--color-ash);
      padding-bottom: 18px;
      z-index: 30;
    }

    .perk-logo {
      font-size: 28px;
      font-weight: 800;
      letter-spacing: -0.04em;
      color: var(--color-off-black-ink);
    }

    .perk-nav-context {
      font-size: 15px;
      font-weight: 600;
      color: var(--color-graphite);
      letter-spacing: 0.01em;
    }

    /* Subheader Title */
    .header-bar {
      position: absolute;
      top: 122px;
      left: 140px;
      right: 140px;
      height: 52px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      z-index: 20;
    }

    .header-bar h1 {
      font-size: 46px;
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1;
      color: var(--color-off-black-ink);
      text-wrap: balance;
    }

    /* STEPPED 2+3 CONTAINER: 3D Perspective (Skill 19) */
    .stepped-container {
      position: absolute;
      top: 212px;
      left: 140px;
      width: 1640px;
      height: 576px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      z-index: 10;
      perspective: 1200px;
    }

    /* ROW 1: 2 WIDE CARDS */
    .row-top {
      width: 100%;
      height: 276px;
      display: grid;
      grid-template-columns: 1fr 1.35fr;
      gap: 24px;
    }

    /* ROW 2: 3 EQUAL CARDS */
    .row-bottom {
      width: 100%;
      height: 276px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 24px;
    }

    /* CARD BASE: Concentric Inner Radii & Tactile Cursor */
    .card-item {
      background: var(--color-pure-white);
      border-radius: 26px;
      border: 1px solid var(--color-ash);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 24px 30px;
      opacity: 0;
      transform: translateY(24px);
      cursor: pointer;
      transform-style: preserve-3d;
      transition: opacity 0.35s ease, transform 0.35s var(--ease-snappy-out), border-color 0.3s ease, box-shadow 0.35s ease;
    }

    /* Staging the Focus (Skill 09) */
    .stepped-container.staged .card-item:not(.active-focus) {
      opacity: 0.52 !important;
      transform: scale(0.985);
      filter: grayscale(12%);
    }

    .card-item.active-focus {
      opacity: 1 !important;
      transform: scale(1.025) !important;
      z-index: 25;
      border-color: var(--color-primary-purple);
      box-shadow: 0 16px 36px rgba(167, 139, 250, 0.22);
    }

    /* ENLARGED HERO FEATURE (REDACCIÓN) */
    .card-hero-purple {
      background: var(--color-primary-purple);
      border: 1px solid var(--color-primary-purple);
      color: var(--color-off-black-ink);
      gap: 18px;
      padding: 26px 36px;
    }

    .card-hero-purple.active-focus {
      box-shadow: 0 20px 48px rgba(124, 58, 237, 0.32);
    }

    /* Shockwave for Exaggerated Feedback (Skill 18) */
    #hero-shockwave {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-top: -60px;
      margin-left: -60px;
      border-radius: 50%;
      border: 3.5px solid var(--color-accent-coral);
      pointer-events: none;
      opacity: 0;
      z-index: 1;
    }

    /* Icon Container */
    .icon-container {
      width: 80px;
      height: 80px;
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-primary-purple-soft);
      border: 1px solid rgba(124, 58, 237, 0.2);
      transition: transform 0.2s var(--ease-snappy-out);
    }

    .card-hero-purple .icon-container {
      width: 90px;
      height: 90px;
      border-radius: 20px;
      background: var(--color-off-black-ink);
      border: 1px solid var(--color-off-black-ink);
    }

    .icon-container svg {
      width: 42px;
      height: 42px;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
      stroke: var(--color-primary-purple-deep);
    }

    .card-hero-purple .icon-container svg {
      width: 48px;
      height: 48px;
      stroke: var(--color-accent-coral);
    }

    .headline-wrap {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .card-title {
      font-size: 27px;
      font-weight: 800;
      letter-spacing: -0.025em;
      line-height: 1.15;
      color: var(--color-off-black-ink);
      text-wrap: balance;
      max-width: 380px;
      margin: 0 auto;
    }

    .card-hero-purple .card-title {
      font-size: 38px;
      letter-spacing: -0.03em;
      line-height: 1.1;
      max-width: 540px;
    }

    .card-desc {
      font-size: 16.5px;
      font-weight: 500;
      color: var(--color-graphite);
      line-height: 1.45;
      text-wrap: balance;
      max-width: 420px;
      margin: 0 auto;
    }

    .card-hero-purple .card-desc {
      color: rgba(20, 20, 15, 0.88);
      font-size: 18px;
      max-width: 500px;
    }

    /* Bottom Technical Ticker */
    .perk-footer-ticker {
      position: absolute;
      bottom: 36px;
      left: 140px;
      right: 140px;
      height: 38px;
      border-top: 1px solid var(--color-ash);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
      font-weight: 600;
      color: var(--color-graphite);
      z-index: 20;
    }

    .editorial-progress {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--color-ash);
    }

    .editorial-fill {
      height: 100%;
      width: 0%;
      background: var(--color-primary-purple-deep);
    }
  </style>
</head>
<body>

  <div id="stage-scaler" class="clip" data-composition-id="infografia_perk_1_writing" data-width="1920" data-height="1080" data-duration="10" data-start="0">

    <header class="perk-nav">
      <span class="perk-logo">Perk</span>
      <span class="perk-nav-context">Estructura Editorial &bull; UX-Motion Stepped 2+3</span>
    </header>

    <div class="header-bar" id="header-bar">
      <h1>Metodología de Producción Editorial</h1>
    </div>

    <main class="stepped-container" id="stepped-wrap">

      <!-- ROW 1: 2 WIDE CARDS -->
      <div class="row-top">

        <!-- CARD 1: INVESTIGACIÓN -->
        <div class="card-item" id="card-1" onclick="focusCard(1)">
          <div class="icon-container" id="icon-1">
            <svg viewBox="0 0 24 24" id="svg-1">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <div class="headline-wrap" id="hw-1">
            <h2 class="card-title">Investigación &amp; Extracción de Fuentes</h2>
            <p class="card-desc">Curaduría de referencias primarias y estructuración de evidencias.</p>
          </div>
        </div>

        <!-- CARD 2: REDACCIÓN HERO -->
        <div class="card-item card-hero-purple" id="card-2" onclick="focusCard(2)">
          <div id="hero-shockwave"></div>
          <div class="icon-container" id="icon-2">
            <svg viewBox="0 0 24 24" id="svg-2">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
          </div>
          <div class="headline-wrap" id="hw-2">
            <h2 class="card-title">Redacción Estructurada de Alta Densidad</h2>
            <p class="card-desc">Síntesis narrativa rigurosa calibrada para máxima retención de lectura.</p>
          </div>
        </div>

      </div>

      <!-- ROW 2: 3 EQUAL CARDS -->
      <div class="row-bottom">

        <!-- CARD 3: REVISIÓN -->
        <div class="card-item" id="card-3" onclick="focusCard(3)">
          <div class="icon-container" id="icon-3">
            <svg viewBox="0 0 24 24" id="svg-3">
              <polyline points="9 11 12 14 22 4"></polyline>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
          </div>
          <div class="headline-wrap" id="hw-3">
            <h2 class="card-title">Fact-Checking &amp; Coherencia</h2>
            <p class="card-desc">Auditoría cruzada de afirmaciones técnicas y eliminación de sesgos.</p>
          </div>
        </div>

        <!-- CARD 4: EDICIÓN -->
        <div class="card-item" id="card-4" onclick="focusCard(4)">
          <div class="icon-container" id="icon-4">
            <svg viewBox="0 0 24 24" id="svg-4">
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </div>
          <div class="headline-wrap" id="hw-4">
            <h2 class="card-title">Edición de Estilo &amp; Tipografía</h2>
            <p class="card-desc">Pulido de ritmo prosódico, micro-espaciado y jerarquías limpias.</p>
          </div>
        </div>

        <!-- CARD 5: PUBLICACIÓN -->
        <div class="card-item" id="card-5" onclick="focusCard(5)">
          <div class="icon-container" id="icon-5">
            <svg viewBox="0 0 24 24" id="svg-5">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </div>
          <div class="headline-wrap" id="hw-5">
            <h2 class="card-title">Distribución &amp; Difusión</h2>
            <p class="card-desc">Publicación multicanal y análisis de impacto en la audiencia.</p>
          </div>
        </div>

      </div>

    </main>

    <footer class="perk-footer-ticker">
      <span>PALETTE: #A78BFA PURPLE // #FF5A36 SIGNAL CORAL // #F5F5EB CANVAS</span>
      <span>UX-MOTION DETERMINISTIC 10.0s @ 30FPS</span>
    </footer>

    <div class="editorial-progress">
      <div class="editorial-fill" id="progress-fill"></div>
    </div>

  </div>

  <script>
    function fitStage() {
      const stage = document.getElementById('stage-scaler');
      const w = window.innerWidth;
      const h = window.innerHeight;
      const scale = Math.min(w / 1920, h / 1080);
      stage.style.transform = \`translate(-50%, -50%) scale(\${scale})\`;
    }
    window.addEventListener('resize', fitStage);
    fitStage();

    const steppedWrap = document.getElementById('stepped-wrap');

    function focusCard(n) {
      steppedWrap.classList.add('staged');
      document.querySelectorAll('.card-item').forEach(c => c.classList.remove('active-focus'));
      const target = document.getElementById(\`card-\${n}\`);
      if (target) {
        target.classList.add('active-focus');
        gsap.fromTo(target, 
          { scaleX: 1.035, scaleY: 0.965 }, 
          { scaleX: 1.025, scaleY: 1.025, duration: 0.35, ease: 'back.out(2)' }
        );
      }
      setTimeout(() => {
        steppedWrap.classList.remove('staged');
        if (target) target.classList.remove('active-focus');
      }, 1600);
    }

    window.__timelines = window.__timelines || {};
    const tl = gsap.timeline({ paused: true });
    if (Array.isArray(window.__timelines)) {
      window.__timelines.push(tl);
    } else {
      window.__timelines["infografia_perk_1_writing"] = tl;
    }

    gsap.set('.perk-nav', { opacity: 0, y: -16 });
    gsap.set('#header-bar', { opacity: 0, y: -12 });
    gsap.set('.perk-footer-ticker', { opacity: 0 });
    gsap.set(['#card-1', '#card-3', '#card-4', '#card-5'], { opacity: 0, y: 32, rotateX: 6, scale: 0.96 });
    gsap.set('#card-2', { opacity: 0, scale: 0.92, y: 36, rotateX: 8 });
    gsap.set('#hero-shockwave', { opacity: 0, scale: 0.6 });

    tl
      // Nav & Header Entrance with Snappy Timing (Skills 10 & 11)
      .to('.perk-nav', { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, 0.2)
      .to('#header-bar', { opacity: 1, y: 0, duration: 0.5, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.35)
      .to('.perk-footer-ticker', { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0.5)

      // Staggered Entry with 3D Solid Drawing (Skill 19) & Follow-Through (Skill 16)
      .to('#card-1', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.7, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.55)
      .fromTo('#icon-1', { scale: 0.85, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, 0.65)
      
      // Hero Card 2 Elastic Landing with Squash & Stretch (Skill 15)
      .to('#card-2', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.85, ease: 'back.out(1.4)' }, 0.75)
      .fromTo('#icon-2', { scale: 0.8, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(2.5)' }, 0.85)

      // Bottom Row Sequential Entrance
      .to('#card-3', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.65, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.95)
      .to('#card-4', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.65, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 1.1)
      .to('#card-5', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.65, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 1.25)

      // --- EDITORIAL EXECUTION PULSES (SKILLS 09, 13, 17, 18) ---
      // 1. Staging Focus on Card 1 (Investigación) + Anticipation Recoil (Skill 13)
      .call(() => {
        steppedWrap.classList.add('staged');
        document.getElementById('card-1').classList.add('active-focus');
      }, null, 2.0)
      .to('#card-1', { y: -4, scale: 1.025, duration: 0.1, ease: 'power1.in' }, 2.05)
      .to('#card-1', { y: 0, scale: 1.02, duration: 0.2, ease: 'back.out(2)' }, 2.15)
      .to('#svg-1', { rotation: 10, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 2.2)

      // 2. Cascade into Hero Card 2 (Redacción) + Exaggerated Shockwave (Skill 18)
      .call(() => {
        document.getElementById('card-1').classList.remove('active-focus');
        document.getElementById('card-2').classList.add('active-focus');
      }, null, 3.2)
      .to('#card-2', { scaleX: 1.03, scaleY: 0.97, duration: 0.12, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 3.2)
      .fromTo('#hero-shockwave', 
        { opacity: 0.9, scale: 0.7 }, 
        { opacity: 0, scale: 2.2, duration: 0.75, ease: 'power2.out' }, 3.2
      )
      .to('#svg-2', { rotation: -8, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 3.25)

      // 3. Step Down to Card 3 (Revisión)
      .call(() => {
        document.getElementById('card-2').classList.remove('active-focus');
        document.getElementById('card-3').classList.add('active-focus');
      }, null, 4.8)
      .to('#card-3', { scaleX: 1.03, scaleY: 0.97, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 4.8)
      .to('#svg-3', { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 4.85)

      // 4. Step to Card 4 (Edición)
      .call(() => {
        document.getElementById('card-3').classList.remove('active-focus');
        document.getElementById('card-4').classList.add('active-focus');
      }, null, 6.2)
      .to('#card-4', { scaleX: 1.03, scaleY: 0.97, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 6.2)
      .to('#svg-4', { rotation: 8, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 6.25)

      // 5. Step to Card 5 (Publicación / Entrega)
      .call(() => {
        document.getElementById('card-4').classList.remove('active-focus');
        document.getElementById('card-5').classList.add('active-focus');
      }, null, 7.5)
      .to('#card-5', { scaleX: 1.035, scaleY: 0.965, duration: 0.12, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 7.5)
      .to('#svg-5', { x: 4, y: -4, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 7.55)

      // 6. Overall Appeal Restoration (Skill 20)
      .call(() => {
        steppedWrap.classList.remove('staged');
        document.querySelectorAll('.card-item').forEach(c => c.classList.remove('active-focus'));
      }, null, 8.8)

      .to('#progress-fill', { width: '100%', duration: 10, ease: 'none' }, 0);

    tl.play();
  </script>
</body>
</html>`;

fs.writeFileSync('infografia_perk_1_writing.html', perk1Html);
console.log('✔ infografia_perk_1_writing.html upgraded');

// =========================================================================
// 2. INFOGRAFÍA 2: CICLO AGÉNTICO (3 LINEAR COLUMNS)
// =========================================================================
const perk2Html = `<!DOCTYPE html>
<html lang="es" data-fps="30" data-duration="10" data-width="1920" data-height="1080">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1920, height=1080, initial-scale=1.0">
  <title>Ciclo de Desarrollo Agéntico // Perk UX-Motion (3 Columnas)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
  <style>
    :root {
      --color-primary-purple: #A78BFA;
      --color-primary-purple-soft: #EDE9FE;
      --color-primary-purple-deep: #7C3AED;
      
      --color-accent-coral: #FF5A36;
      --color-accent-coral-soft: #FFEFEB;
      
      --color-off-black-ink: #14140f;
      --color-off-white-canvas: #f5f5eb;
      --color-pure-white: #ffffff;
      --color-ash: #d2d2c8;
      --color-graphite: #383832;
      
      --font-otsono: 'Inter', system-ui, -apple-system, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;

      --ease-snappy-out: cubic-bezier(0.16, 1, 0.3, 1);
      --ease-snappy-in: cubic-bezier(0.4, 0, 1, 1);
      --ease-elastic-out: cubic-bezier(0.34, 1.56, 0.64, 1);
      --ease-in-out-smooth: cubic-bezier(0.4, 0, 0.2, 1);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    html, body {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background: var(--color-off-white-canvas);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-otsono);
      color: var(--color-off-black-ink);
      -webkit-font-smoothing: antialiased;
    }

    #stage-scaler {
      position: absolute;
      width: 1920px;
      height: 1080px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1);
      transform-origin: center center;
      background: var(--color-off-white-canvas);
      overflow: hidden;
    }

    .perk-nav {
      position: absolute;
      top: 48px;
      left: 140px;
      right: 140px;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--color-ash);
      padding-bottom: 18px;
      z-index: 30;
    }

    .perk-logo {
      font-size: 28px;
      font-weight: 800;
      letter-spacing: -0.04em;
      color: var(--color-off-black-ink);
    }

    .perk-nav-context {
      font-size: 15px;
      font-weight: 600;
      color: var(--color-graphite);
      letter-spacing: 0.01em;
    }

    .header-bar {
      position: absolute;
      top: 122px;
      left: 140px;
      right: 140px;
      height: 52px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      z-index: 20;
    }

    .header-bar h1 {
      font-size: 46px;
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1;
      color: var(--color-off-black-ink);
      text-wrap: balance;
    }

    /* 3 COLUMNS CONTAINER: 3D Perspective (Skill 19) */
    .columns-container {
      position: absolute;
      top: 220px;
      left: 140px;
      width: 1640px;
      height: 560px;
      display: grid;
      grid-template-columns: 1fr 1.55fr 1fr;
      gap: 36px;
      z-index: 10;
      perspective: 1200px;
    }

    .col-card {
      background: var(--color-pure-white);
      border-radius: 28px;
      border: 1px solid var(--color-ash);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 22px;
      padding: 36px 32px;
      opacity: 0;
      transform: translateY(28px);
      cursor: pointer;
      transform-style: preserve-3d;
      transition: opacity 0.35s ease, transform 0.35s var(--ease-snappy-out), border-color 0.3s ease, box-shadow 0.35s ease;
    }

    /* Staging the Focus (Skill 09) */
    .columns-container.staged .col-card:not(.active-focus) {
      opacity: 0.52 !important;
      transform: scale(0.985);
      filter: grayscale(12%);
    }

    .col-card.active-focus {
      opacity: 1 !important;
      transform: scale(1.025) !important;
      z-index: 25;
      border-color: var(--color-primary-purple);
      box-shadow: 0 16px 36px rgba(167, 139, 250, 0.22);
    }

    .card-hero-purple {
      background: var(--color-primary-purple);
      border: 1px solid var(--color-primary-purple);
      color: var(--color-off-black-ink);
      padding: 44px 44px;
    }

    .card-hero-purple.active-focus {
      box-shadow: 0 20px 50px rgba(124, 58, 237, 0.32);
    }

    #hero-shockwave {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-top: -60px;
      margin-left: -60px;
      border-radius: 50%;
      border: 3.5px solid var(--color-accent-coral);
      pointer-events: none;
      opacity: 0;
      z-index: 1;
    }

    .icon-container {
      width: 92px;
      height: 92px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-primary-purple-soft);
      border: 1px solid rgba(124, 58, 237, 0.2);
    }

    .card-hero-purple .icon-container {
      width: 110px;
      height: 110px;
      border-radius: 24px;
      background: var(--color-off-black-ink);
      border: 1px solid var(--color-off-black-ink);
    }

    .icon-container svg {
      width: 48px;
      height: 48px;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
      stroke: var(--color-primary-purple-deep);
    }

    .card-hero-purple .icon-container svg {
      width: 58px;
      height: 58px;
      stroke: var(--color-accent-coral);
    }

    .headline-wrap {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .card-title {
      font-size: 28px;
      font-weight: 800;
      letter-spacing: -0.025em;
      line-height: 1.15;
      color: var(--color-off-black-ink);
      text-wrap: balance;
      max-width: 380px;
      margin: 0 auto;
    }

    .card-hero-purple .card-title {
      font-size: 40px;
      letter-spacing: -0.03em;
      line-height: 1.1;
      max-width: 520px;
    }

    .card-desc {
      font-size: 16.5px;
      font-weight: 500;
      color: var(--color-graphite);
      line-height: 1.45;
      text-wrap: balance;
      max-width: 360px;
      margin: 0 auto;
    }

    .card-hero-purple .card-desc {
      color: rgba(20, 20, 15, 0.9);
      font-size: 18.5px;
      max-width: 460px;
    }

    /* Arced Vector Conduits (Skill 14: Moving in Arcs) */
    #connecting-svg {
      position: absolute;
      top: 250px;
      left: 140px;
      width: 1640px;
      height: 500px;
      pointer-events: none;
      z-index: 5;
    }

    .vector-track {
      stroke: var(--color-ash);
      stroke-width: 2.5px;
      fill: none;
      stroke-dasharray: 6 6;
    }

    .vector-active {
      stroke: var(--color-primary-purple-deep);
      stroke-width: 4px;
      fill: none;
      stroke-linecap: round;
      stroke-dasharray: 120;
      stroke-dashoffset: 120;
    }

    .vector-active-coral {
      stroke: var(--color-accent-coral);
      stroke-width: 4px;
      fill: none;
      stroke-linecap: round;
      stroke-dasharray: 120;
      stroke-dashoffset: 120;
    }

    .vector-packet {
      fill: var(--color-primary-purple-deep);
      opacity: 0;
    }

    .vector-packet-coral {
      fill: var(--color-accent-coral);
      opacity: 0;
    }

    .perk-footer-ticker {
      position: absolute;
      bottom: 36px;
      left: 140px;
      right: 140px;
      height: 38px;
      border-top: 1px solid var(--color-ash);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
      font-weight: 600;
      color: var(--color-graphite);
      z-index: 20;
    }

    .editorial-progress {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--color-ash);
    }

    .editorial-fill {
      height: 100%;
      width: 0%;
      background: var(--color-primary-purple-deep);
    }
  </style>
</head>
<body>

  <div id="stage-scaler" class="clip" data-composition-id="infografia_perk_2_agentic" data-width="1920" data-height="1080" data-duration="10" data-start="0">

    <header class="perk-nav">
      <span class="perk-logo">Perk</span>
      <span class="perk-nav-context">Pipeline de Ejecución Agéntica &bull; UX-Motion 3 Columnas</span>
    </header>

    <div class="header-bar" id="header-bar">
      <h1>Ciclo de Desarrollo Agéntico Autónomo</h1>
    </div>

    <!-- Arced Vector Conduits (Skill 14) -->
    <svg id="connecting-svg" viewBox="0 0 1640 500">
      <!-- Arc 1 -> 2: X ~435 to 495 -->
      <path class="vector-track" d="M 430 250 Q 460 236 490 250" />
      <path id="vector-1-2" class="vector-active" d="M 430 250 Q 460 236 490 250" />
      <circle id="pkt-1-2" class="vector-packet" r="5.5" />

      <!-- Arc 2 -> 3: X ~1150 to 1210 -->
      <path class="vector-track" d="M 1150 250 Q 1180 236 1210 250" />
      <path id="vector-2-3" class="vector-active-coral" d="M 1150 250 Q 1180 236 1210 250" />
      <circle id="pkt-2-3" class="vector-packet-coral" r="6" />
    </svg>

    <!-- 3 COLUMNS -->
    <main class="columns-container" id="columns-wrap">

      <!-- COLUMN 1: ESPECIFICACIÓN -->
      <div class="col-card" id="card-1" onclick="focusCard(1)">
        <div class="icon-container" id="icon-1">
          <svg viewBox="0 0 24 24" id="svg-1">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <div class="headline-wrap" id="hw-1">
          <h2 class="card-title">Captura de Intención &amp; Esquema Formal</h2>
          <p class="card-desc">Normalización de directivas libres hacia especificaciones técnicas estrictas.</p>
        </div>
      </div>

      <!-- COLUMN 2: ORQUESTACIÓN (HERO FEATURE) -->
      <div class="col-card card-hero-purple" id="card-2" onclick="focusCard(2)">
        <div id="hero-shockwave"></div>
        <div class="icon-container" id="icon-2">
          <svg viewBox="0 0 24 24" id="svg-2">
            <rect x="4" y="4" width="16" height="16" rx="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
            <line x1="9" y1="1" x2="9" y2="4"></line>
            <line x1="15" y1="1" x2="15" y2="4"></line>
            <line x1="9" y1="20" x2="9" y2="23"></line>
            <line x1="15" y1="20" x2="15" y2="23"></line>
            <line x1="20" y1="9" x2="23" y2="9"></line>
            <line x1="20" y1="14" x2="23" y2="14"></line>
            <line x1="1" y1="9" x2="4" y2="9"></line>
            <line x1="1" y1="14" x2="4" y2="14"></line>
          </svg>
        </div>
        <div class="headline-wrap" id="hw-2">
          <h2 class="card-title">Orquestación Multi-Modelo &amp; Razonamiento</h2>
          <p class="card-desc">Búsqueda en árboles de decisión, llamadas MCP y autocorrección estructurada de código.</p>
        </div>
      </div>

      <!-- COLUMN 3: DESPLIEGUE -->
      <div class="col-card" id="card-3" onclick="focusCard(3)">
        <div class="icon-container" id="icon-3">
          <svg viewBox="0 0 24 24" id="svg-3">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <polyline points="9 12 11 14 15 10"></polyline>
          </svg>
        </div>
        <div class="headline-wrap" id="hw-3">
          <h2 class="card-title">Verificación Aislada en Sandbox Seguro</h2>
          <p class="card-desc">Compilación de artefactos, testing estático y despliegue determinista.</p>
        </div>
      </div>

    </main>

    <footer class="perk-footer-ticker">
      <span>PALETTE: #A78BFA PURPLE // #FF5A36 SIGNAL CORAL // #F5F5EB CANVAS</span>
      <span>UX-MOTION DETERMINISTIC 10.0s @ 30FPS</span>
    </footer>

    <div class="editorial-progress">
      <div class="editorial-fill" id="progress-fill"></div>
    </div>

  </div>

  <script>
    function fitStage() {
      const stage = document.getElementById('stage-scaler');
      const w = window.innerWidth;
      const h = window.innerHeight;
      const scale = Math.min(w / 1920, h / 1080);
      stage.style.transform = \`translate(-50%, -50%) scale(\${scale})\`;
    }
    window.addEventListener('resize', fitStage);
    fitStage();

    const columnsWrap = document.getElementById('columns-wrap');

    function focusCard(n) {
      columnsWrap.classList.add('staged');
      document.querySelectorAll('.col-card').forEach(c => c.classList.remove('active-focus'));
      const target = document.getElementById(\`card-\${n}\`);
      if (target) {
        target.classList.add('active-focus');
        gsap.fromTo(target, 
          { scaleX: 1.035, scaleY: 0.965 }, 
          { scaleX: 1.025, scaleY: 1.025, duration: 0.35, ease: 'back.out(2)' }
        );
      }
      setTimeout(() => {
        columnsWrap.classList.remove('staged');
        if (target) target.classList.remove('active-focus');
      }, 1600);
    }

    window.__timelines = window.__timelines || {};
    const tl = gsap.timeline({ paused: true });
    if (Array.isArray(window.__timelines)) {
      window.__timelines.push(tl);
    } else {
      window.__timelines["infografia_perk_2_agentic"] = tl;
    }

    gsap.set('.perk-nav', { opacity: 0, y: -16 });
    gsap.set('#header-bar', { opacity: 0, y: -12 });
    gsap.set('.perk-footer-ticker', { opacity: 0 });
    gsap.set(['#card-1', '#card-3'], { opacity: 0, y: 32, rotateX: 6, scale: 0.96 });
    gsap.set('#card-2', { opacity: 0, scale: 0.92, y: 36, rotateX: 8 });
    gsap.set('#connecting-svg', { opacity: 0 });
    gsap.set('#hero-shockwave', { opacity: 0, scale: 0.6 });

    tl
      .to('.perk-nav', { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, 0.2)
      .to('#header-bar', { opacity: 1, y: 0, duration: 0.5, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.35)
      .to('.perk-footer-ticker', { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0.5)

      // Card 1 Entrance with Follow-Through (Skill 16)
      .to('#card-1', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.7, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.6)
      .fromTo('#icon-1', { scale: 0.85, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, 0.7)

      // Hero Card 2 Entrance with Elastic Landing (Skill 15)
      .to('#card-2', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.85, ease: 'back.out(1.4)' }, 0.85)
      .fromTo('#icon-2', { scale: 0.8, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(2.5)' }, 0.95)

      // Card 3 Entrance
      .to('#card-3', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.7, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 1.1)
      .fromTo('#icon-3', { scale: 0.85, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, 1.2)
      .to('#connecting-svg', { opacity: 1, duration: 0.4 }, 1.3)

      // Staging on Card 1 + Anticipation Wind-up (Skills 09, 13)
      .call(() => {
        columnsWrap.classList.add('staged');
        document.getElementById('card-1').classList.add('active-focus');
      }, null, 2.0)
      .to('#card-1', { x: -3, scale: 0.99, duration: 0.08, ease: 'power1.in' }, 2.05)
      .to('#card-1', { x: 0, scale: 1.02, duration: 0.15, ease: 'back.out(2)' }, 2.15)

      // Arced Vector 1->2 (Skill 14)
      .fromTo('#vector-1-2', { strokeDashoffset: 120 }, { strokeDashoffset: 0, duration: 0.75, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }, 2.2)
      .fromTo('#pkt-1-2', { cx: 430, cy: 250, opacity: 1 }, { cx: 490, cy: 250, opacity: 0, duration: 0.75, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }, 2.2)

      // Impact on Hero Card 2: Exaggerated Feedback (Skill 18) & Secondary Spin (Skill 17)
      .call(() => {
        document.getElementById('card-1').classList.remove('active-focus');
        document.getElementById('card-2').classList.add('active-focus');
      }, null, 3.0)
      .to('#card-2', { scaleX: 1.03, scaleY: 0.97, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 3.0)
      .fromTo('#hero-shockwave', 
        { opacity: 0.9, scale: 0.7 }, 
        { opacity: 0, scale: 2.2, duration: 0.7, ease: 'power2.out' }, 3.0
      )
      .to('#svg-2', { rotation: 8, duration: 0.15, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 3.05)

      // Hero Card 2 Anticipation & Emits Coral Conduit to Card 3
      .to('#card-2', { x: 2, scale: 0.99, duration: 0.08, ease: 'power1.in' }, 4.6)
      .to('#card-2', { x: 0, scale: 1.02, duration: 0.15, ease: 'back.out(2)' }, 4.7)
      .fromTo('#vector-2-3', { strokeDashoffset: 120 }, { strokeDashoffset: 0, duration: 0.75, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }, 4.75)
      .fromTo('#pkt-2-3', { cx: 1150, cy: 250, opacity: 1 }, { cx: 1210, cy: 250, opacity: 0, duration: 0.75, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }, 4.75)

      // Impact on Card 3
      .call(() => {
        document.getElementById('card-2').classList.remove('active-focus');
        document.getElementById('card-3').classList.add('active-focus');
      }, null, 5.5)
      .to('#card-3', { scaleX: 1.025, scaleY: 0.975, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 5.5)
      .to('#svg-3', { scale: 1.15, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 5.55)

      // Overall Appeal Restoration (Skill 20)
      .call(() => {
        columnsWrap.classList.remove('staged');
        document.querySelectorAll('.col-card').forEach(c => c.classList.remove('active-focus'));
      }, null, 6.8)

      .to('#progress-fill', { width: '100%', duration: 10, ease: 'none' }, 0);

    tl.play();
  </script>
</body>
</html>`;

fs.writeFileSync('infografia_perk_2_agentic.html', perk2Html);
console.log('✔ infografia_perk_2_agentic.html upgraded');

// =========================================================================
// 3. INFOGRAFÍA 3: REFUERZO VS IMITACIÓN (CONVERGENT CENTER HERO)
// =========================================================================
const perk3Html = `<!DOCTYPE html>
<html lang="es" data-fps="30" data-duration="10" data-width="1920" data-height="1080">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1920, height=1080, initial-scale=1.0">
  <title>Refuerzo vs. Imitación // Perk UX-Motion (Center Hero)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
  <style>
    :root {
      --color-primary-purple: #A78BFA;
      --color-primary-purple-soft: #EDE9FE;
      --color-primary-purple-deep: #7C3AED;
      
      --color-accent-coral: #FF5A36;
      --color-accent-coral-soft: #FFEFEB;
      
      --color-off-black-ink: #14140f;
      --color-off-white-canvas: #f5f5eb;
      --color-pure-white: #ffffff;
      --color-ash: #d2d2c8;
      --color-graphite: #383832;
      
      --font-otsono: 'Inter', system-ui, -apple-system, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;

      --ease-snappy-out: cubic-bezier(0.16, 1, 0.3, 1);
      --ease-snappy-in: cubic-bezier(0.4, 0, 1, 1);
      --ease-elastic-out: cubic-bezier(0.34, 1.56, 0.64, 1);
      --ease-in-out-smooth: cubic-bezier(0.4, 0, 0.2, 1);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    html, body {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background: var(--color-off-white-canvas);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-otsono);
      color: var(--color-off-black-ink);
      -webkit-font-smoothing: antialiased;
    }

    #stage-scaler {
      position: absolute;
      width: 1920px;
      height: 1080px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1);
      transform-origin: center center;
      background: var(--color-off-white-canvas);
      overflow: hidden;
    }

    .perk-nav {
      position: absolute;
      top: 48px;
      left: 140px;
      right: 140px;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--color-ash);
      padding-bottom: 18px;
      z-index: 30;
    }

    .perk-logo {
      font-size: 28px;
      font-weight: 800;
      letter-spacing: -0.04em;
      color: var(--color-off-black-ink);
    }

    .perk-nav-context {
      font-size: 15px;
      font-weight: 600;
      color: var(--color-graphite);
      letter-spacing: 0.01em;
    }

    .header-bar {
      position: absolute;
      top: 122px;
      left: 140px;
      right: 140px;
      height: 52px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      z-index: 20;
    }

    .header-bar h1 {
      font-size: 46px;
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1;
      color: var(--color-off-black-ink);
      text-wrap: balance;
    }

    /* CONVERGENT HERO CONTAINER: 3D Perspective (Skill 19) */
    .convergent-container {
      position: absolute;
      top: 220px;
      left: 140px;
      width: 1640px;
      height: 560px;
      display: grid;
      grid-template-columns: 1fr 1.6fr 1fr;
      align-items: center;
      gap: 36px;
      z-index: 10;
      perspective: 1200px;
    }

    .bento-card {
      background: var(--color-pure-white);
      border-radius: 28px;
      border: 1px solid var(--color-ash);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding: 34px 30px;
      opacity: 0;
      transform: translateY(24px);
      cursor: pointer;
      transform-style: preserve-3d;
      transition: opacity 0.35s ease, transform 0.35s var(--ease-snappy-out), border-color 0.3s ease, box-shadow 0.35s ease;
    }

    .card-satellite {
      height: 480px;
    }

    /* Staging Focus (Skill 09) */
    .convergent-container.staged .bento-card:not(.active-focus) {
      opacity: 0.52 !important;
      transform: scale(0.985);
      filter: grayscale(12%);
    }

    .bento-card.active-focus {
      opacity: 1 !important;
      transform: scale(1.025) !important;
      z-index: 25;
      border-color: var(--color-primary-purple);
      box-shadow: 0 16px 36px rgba(167, 139, 250, 0.22);
    }

    /* CENTER DOMINANT HERO */
    .card-hero-purple {
      background: var(--color-primary-purple);
      border: 1px solid var(--color-primary-purple);
      color: var(--color-off-black-ink);
      height: 540px;
      padding: 44px 40px;
    }

    .card-hero-purple.active-focus {
      box-shadow: 0 20px 50px rgba(124, 58, 237, 0.32);
    }

    #hero-shockwave {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 140px;
      height: 140px;
      margin-top: -70px;
      margin-left: -70px;
      border-radius: 50%;
      border: 4px solid var(--color-accent-coral);
      pointer-events: none;
      opacity: 0;
      z-index: 1;
    }

    .icon-container {
      width: 92px;
      height: 92px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-primary-purple-soft);
      border: 1px solid rgba(124, 58, 237, 0.2);
    }

    .card-hero-purple .icon-container {
      width: 115px;
      height: 115px;
      border-radius: 26px;
      background: var(--color-off-black-ink);
      border: 1px solid var(--color-off-black-ink);
    }

    .icon-container svg {
      width: 48px;
      height: 48px;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
      stroke: var(--color-primary-purple-deep);
    }

    .card-hero-purple .icon-container svg {
      width: 62px;
      height: 62px;
      stroke: var(--color-accent-coral);
    }

    .headline-wrap {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .card-title {
      font-size: 27px;
      font-weight: 800;
      letter-spacing: -0.025em;
      line-height: 1.15;
      color: var(--color-off-black-ink);
      text-wrap: balance;
      max-width: 360px;
      margin: 0 auto;
    }

    .card-hero-purple .card-title {
      font-size: 38px;
      letter-spacing: -0.03em;
      line-height: 1.1;
      max-width: 520px;
    }

    .card-desc {
      font-size: 16.5px;
      font-weight: 500;
      color: var(--color-graphite);
      line-height: 1.45;
      text-wrap: balance;
      max-width: 360px;
      margin: 0 auto;
    }

    .card-hero-purple .card-desc {
      color: rgba(20, 20, 15, 0.9);
      font-size: 18.5px;
      max-width: 460px;
    }

    /* Converging Vector Arcs (Skill 14) */
    #connecting-svg {
      position: absolute;
      top: 220px;
      left: 140px;
      width: 1640px;
      height: 560px;
      pointer-events: none;
      z-index: 5;
    }

    .vector-track {
      stroke: var(--color-ash);
      stroke-width: 2.5px;
      fill: none;
      stroke-dasharray: 6 6;
    }

    .vector-active-left {
      stroke: var(--color-primary-purple-deep);
      stroke-width: 4px;
      fill: none;
      stroke-linecap: round;
      stroke-dasharray: 120;
      stroke-dashoffset: 120;
    }

    .vector-active-right {
      stroke: var(--color-accent-coral);
      stroke-width: 4px;
      fill: none;
      stroke-linecap: round;
      stroke-dasharray: 120;
      stroke-dashoffset: 120;
    }

    .vector-packet {
      fill: var(--color-primary-purple-deep);
      opacity: 0;
    }

    .vector-packet-coral {
      fill: var(--color-accent-coral);
      opacity: 0;
    }

    .perk-footer-ticker {
      position: absolute;
      bottom: 36px;
      left: 140px;
      right: 140px;
      height: 38px;
      border-top: 1px solid var(--color-ash);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
      font-weight: 600;
      color: var(--color-graphite);
      z-index: 20;
    }

    .editorial-progress {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--color-ash);
    }

    .editorial-fill {
      height: 100%;
      width: 0%;
      background: var(--color-primary-purple-deep);
    }
  </style>
</head>
<body>

  <div id="stage-scaler" class="clip" data-composition-id="infografia_perk_3_rl_vs_imitation" data-width="1920" data-height="1080" data-duration="10" data-start="0">

    <header class="perk-nav">
      <span class="perk-logo">Perk</span>
      <span class="perk-nav-context">Estrategia de Entrenamiento &bull; UX-Motion Convergent Hero</span>
    </header>

    <div class="header-bar" id="header-bar">
      <h1>Refuerzo Autónomo vs. Imitación Guiada</h1>
    </div>

    <!-- Converging Vector Arcs (Skill 14) -->
    <svg id="connecting-svg" viewBox="0 0 1640 560">
      <!-- Left to Center Arc: 440,280 -> 500,280 -->
      <path class="vector-track" d="M 430 280 Q 465 260 500 280" />
      <path id="vector-left" class="vector-active-left" d="M 430 280 Q 465 260 500 280" />
      <circle id="pkt-left" class="vector-packet" r="6" />

      <!-- Right to Center Arc: 1210,280 -> 1140,280 -->
      <path class="vector-track" d="M 1210 280 Q 1175 260 1140 280" />
      <path id="vector-right" class="vector-active-right" d="M 1210 280 Q 1175 260 1140 280" />
      <circle id="pkt-right" class="vector-packet-coral" r="6" />
    </svg>

    <main class="convergent-container" id="convergent-wrap">

      <!-- LEFT SATELLITE: APRENDIZAJE POR REFUERZO -->
      <div class="bento-card card-satellite" id="card-left" onclick="focusCard('left')">
        <div class="icon-container" id="icon-left">
          <svg viewBox="0 0 24 24" id="svg-left">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </div>
        <div class="headline-wrap" id="hw-left">
          <h2 class="card-title">Exploración Autónoma por Refuerzo (RL)</h2>
          <p class="card-desc">Búsqueda estocástica en entornos de simulación acelerada y optimización de recompensas.</p>
        </div>
      </div>

      <!-- CENTER HERO: NÚCLEO DE APRENDIZAJE HÍBRIDO -->
      <div class="bento-card card-hero-purple" id="card-center" onclick="focusCard('center')">
        <div id="hero-shockwave"></div>
        <div class="icon-container" id="icon-center">
          <svg viewBox="0 0 24 24" id="svg-center">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
        <div class="headline-wrap" id="hw-center">
          <h2 class="card-title">Núcleo Central de Síntesis de Políticas</h2>
          <p class="card-desc">Convergencia en tiempo real: el rigor demostrativo humano modula la velocidad de exploración autónoma.</p>
        </div>
      </div>

      <!-- RIGHT SATELLITE: IMITACIÓN HUMANA -->
      <div class="bento-card card-satellite" id="card-right" onclick="focusCard('right')">
        <div class="icon-container" id="icon-right">
          <svg viewBox="0 0 24 24" id="svg-right">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <polyline points="17 11 19 13 23 9"></polyline>
          </svg>
        </div>
        <div class="headline-wrap" id="hw-right">
          <h2 class="card-title">Alineación con Demostraciones Humanas</h2>
          <p class="card-desc">Clonación de conducta experta y delimitación de guardrails de seguridad operativa.</p>
        </div>
      </div>

    </main>

    <footer class="perk-footer-ticker">
      <span>PALETTE: #A78BFA PURPLE // #FF5A36 SIGNAL CORAL // #F5F5EB CANVAS</span>
      <span>UX-MOTION DETERMINISTIC 10.0s @ 30FPS</span>
    </footer>

    <div class="editorial-progress">
      <div class="editorial-fill" id="progress-fill"></div>
    </div>

  </div>

  <script>
    function fitStage() {
      const stage = document.getElementById('stage-scaler');
      const w = window.innerWidth;
      const h = window.innerHeight;
      const scale = Math.min(w / 1920, h / 1080);
      stage.style.transform = \`translate(-50%, -50%) scale(\${scale})\`;
    }
    window.addEventListener('resize', fitStage);
    fitStage();

    const convergentWrap = document.getElementById('convergent-wrap');

    function focusCard(which) {
      convergentWrap.classList.add('staged');
      document.querySelectorAll('.bento-card').forEach(c => c.classList.remove('active-focus'));
      const target = document.getElementById(\`card-\${which}\`);
      if (target) {
        target.classList.add('active-focus');
        gsap.fromTo(target, 
          { scaleX: 1.035, scaleY: 0.965 }, 
          { scaleX: 1.025, scaleY: 1.025, duration: 0.35, ease: 'back.out(2)' }
        );
      }
      setTimeout(() => {
        convergentWrap.classList.remove('staged');
        if (target) target.classList.remove('active-focus');
      }, 1600);
    }

    window.__timelines = window.__timelines || {};
    const tl = gsap.timeline({ paused: true });
    if (Array.isArray(window.__timelines)) {
      window.__timelines.push(tl);
    } else {
      window.__timelines["infografia_perk_3_rl_vs_imitation"] = tl;
    }

    gsap.set('.perk-nav', { opacity: 0, y: -16 });
    gsap.set('#header-bar', { opacity: 0, y: -12 });
    gsap.set('.perk-footer-ticker', { opacity: 0 });
    gsap.set(['#card-left', '#card-right'], { opacity: 0, y: 32, rotateX: 6, scale: 0.96 });
    gsap.set('#card-center', { opacity: 0, scale: 0.92, y: 36, rotateX: 8 });
    gsap.set('#connecting-svg', { opacity: 0 });
    gsap.set('#hero-shockwave', { opacity: 0, scale: 0.6 });

    tl
      .to('.perk-nav', { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, 0.2)
      .to('#header-bar', { opacity: 1, y: 0, duration: 0.5, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.35)
      .to('.perk-footer-ticker', { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0.5)

      // Satellites Entrance with Follow-Through (Skill 16)
      .to('#card-left', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.7, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.55)
      .fromTo('#icon-left', { scale: 0.85, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, 0.65)
      
      .to('#card-right', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.7, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.7)
      .fromTo('#icon-right', { scale: 0.85, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, 0.8)

      // Dominant Center Hero Elastic Landing (Skill 15 & 19)
      .to('#card-center', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.85, ease: 'back.out(1.4)' }, 0.85)
      .fromTo('#icon-center', { scale: 0.8, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(2.5)' }, 0.95)
      .to('#connecting-svg', { opacity: 1, duration: 0.4 }, 1.3)

      // 1. Stage Left Exploration Activation (RL) + Anticipation Recoil (Skill 13)
      .call(() => {
        convergentWrap.classList.add('staged');
        document.getElementById('card-left').classList.add('active-focus');
      }, null, 2.0)
      .to('#card-left', { x: -3, scale: 0.99, duration: 0.08, ease: 'power1.in' }, 2.05)
      .to('#card-left', { x: 0, scale: 1.02, duration: 0.15, ease: 'back.out(2)' }, 2.15)
      .fromTo('#vector-left', { strokeDashoffset: 120 }, { strokeDashoffset: 0, duration: 0.75, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }, 2.2)
      .fromTo('#pkt-left', { cx: 430, cy: 280, opacity: 1 }, { cx: 500, cy: 280, opacity: 0, duration: 0.75, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }, 2.2)

      // 2. Stage Right Human Demonstrations Activation (Imitation) + Anticipation Recoil (Skill 13)
      .call(() => {
        document.getElementById('card-left').classList.remove('active-focus');
        document.getElementById('card-right').classList.add('active-focus');
      }, null, 3.4)
      .to('#card-right', { x: 3, scale: 0.99, duration: 0.08, ease: 'power1.in' }, 3.45)
      .to('#card-right', { x: 0, scale: 1.02, duration: 0.15, ease: 'back.out(2)' }, 3.55)
      .fromTo('#vector-right', { strokeDashoffset: 120 }, { strokeDashoffset: 0, duration: 0.75, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }, 3.6)
      .fromTo('#pkt-right', { cx: 1210, cy: 280, opacity: 1 }, { cx: 1140, cy: 280, opacity: 0, duration: 0.75, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }, 3.6)

      // 3. Convergent Collision into Center Hero (Skills 15, 17, 18)
      .call(() => {
        document.getElementById('card-right').classList.remove('active-focus');
        document.getElementById('card-center').classList.add('active-focus');
      }, null, 4.8)
      .to('#card-center', { scaleX: 1.035, scaleY: 0.965, duration: 0.12, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 4.8)
      .fromTo('#hero-shockwave', 
        { opacity: 1, scale: 0.7 }, 
        { opacity: 0, scale: 2.3, duration: 0.85, ease: 'power2.out' }, 4.8
      )
      .to('#svg-center', { rotation: 18, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 4.85)

      // 4. Synergistic Harmonic Pulse (Skill 20)
      .to('#card-center', { scale: 1.02, duration: 0.8, yoyo: true, repeat: 1, ease: 'sine.inOut' }, 6.2)
      .call(() => {
        convergentWrap.classList.remove('staged');
        document.querySelectorAll('.bento-card').forEach(c => c.classList.remove('active-focus'));
      }, null, 7.8)

      .to('#progress-fill', { width: '100%', duration: 10, ease: 'none' }, 0);

    tl.play();
  </script>
</body>
</html>`;

fs.writeFileSync('infografia_perk_3_rl_vs_imitation.html', perk3Html);
console.log('✔ infografia_perk_3_rl_vs_imitation.html upgraded');

// =========================================================================
// 4. INFOGRAFÍA 4: FUNNEL DE CONVERSIÓN (SEQUENTIAL 4 COLUMNS)
// =========================================================================
const perk4Html = `<!DOCTYPE html>
<html lang="es" data-fps="30" data-duration="10" data-width="1920" data-height="1080">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1920, height=1080, initial-scale=1.0">
  <title>Funnel de Conversión // Perk UX-Motion (Sequential 4)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
  <style>
    :root {
      --color-primary-purple: #A78BFA;
      --color-primary-purple-soft: #EDE9FE;
      --color-primary-purple-deep: #7C3AED;
      
      --color-accent-coral: #FF5A36;
      --color-accent-coral-soft: #FFEFEB;
      
      --color-off-black-ink: #14140f;
      --color-off-white-canvas: #f5f5eb;
      --color-pure-white: #ffffff;
      --color-ash: #d2d2c8;
      --color-graphite: #383832;
      
      --font-otsono: 'Inter', system-ui, -apple-system, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;

      --ease-snappy-out: cubic-bezier(0.16, 1, 0.3, 1);
      --ease-snappy-in: cubic-bezier(0.4, 0, 1, 1);
      --ease-elastic-out: cubic-bezier(0.34, 1.56, 0.64, 1);
      --ease-in-out-smooth: cubic-bezier(0.4, 0, 0.2, 1);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    html, body {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background: var(--color-off-white-canvas);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-otsono);
      color: var(--color-off-black-ink);
      -webkit-font-smoothing: antialiased;
    }

    #stage-scaler {
      position: absolute;
      width: 1920px;
      height: 1080px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1);
      transform-origin: center center;
      background: var(--color-off-white-canvas);
      overflow: hidden;
    }

    .perk-nav {
      position: absolute;
      top: 48px;
      left: 140px;
      right: 140px;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--color-ash);
      padding-bottom: 18px;
      z-index: 30;
    }

    .perk-logo {
      font-size: 28px;
      font-weight: 800;
      letter-spacing: -0.04em;
      color: var(--color-off-black-ink);
    }

    .perk-nav-context {
      font-size: 15px;
      font-weight: 600;
      color: var(--color-graphite);
      letter-spacing: 0.01em;
    }

    .header-bar {
      position: absolute;
      top: 122px;
      left: 140px;
      right: 140px;
      height: 52px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      z-index: 20;
    }

    .header-bar h1 {
      font-size: 46px;
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1;
      color: var(--color-off-black-ink);
      text-wrap: balance;
    }

    /* 4 SEQUENTIAL COLUMNS: 3D Perspective (Skill 19) */
    .funnel-container {
      position: absolute;
      top: 220px;
      left: 140px;
      width: 1640px;
      height: 560px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1.38fr; /* ENLARGED HERO CONVERSIÓN */
      gap: 28px;
      z-index: 10;
      perspective: 1200px;
    }

    .funnel-card {
      background: var(--color-pure-white);
      border-radius: 28px;
      border: 1px solid var(--color-ash);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding: 34px 28px;
      opacity: 0;
      transform: translateY(28px);
      cursor: pointer;
      transform-style: preserve-3d;
      transition: opacity 0.35s ease, transform 0.35s var(--ease-snappy-out), border-color 0.3s ease, box-shadow 0.35s ease;
    }

    /* Staging Focus (Skill 09) */
    .funnel-container.staged .funnel-card:not(.active-focus) {
      opacity: 0.52 !important;
      transform: scale(0.985);
      filter: grayscale(12%);
    }

    .funnel-card.active-focus {
      opacity: 1 !important;
      transform: scale(1.025) !important;
      z-index: 25;
      border-color: var(--color-primary-purple);
      box-shadow: 0 16px 36px rgba(167, 139, 250, 0.22);
    }

    /* HERO FEATURE: CONVERSIÓN */
    .card-hero-feature {
      background: var(--color-primary-purple);
      border: 1px solid var(--color-primary-purple);
      color: var(--color-off-black-ink);
      padding: 40px 36px;
    }

    .card-hero-feature.active-focus {
      box-shadow: 0 20px 50px rgba(124, 58, 237, 0.32);
    }

    #hero-shockwave {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-top: -60px;
      margin-left: -60px;
      border-radius: 50%;
      border: 3.5px solid var(--color-accent-coral);
      pointer-events: none;
      opacity: 0;
      z-index: 1;
    }

    .icon-container {
      width: 84px;
      height: 84px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-primary-purple-soft);
      border: 1px solid rgba(124, 58, 237, 0.2);
    }

    .card-hero-feature .icon-container {
      width: 104px;
      height: 104px;
      border-radius: 24px;
      background: var(--color-off-black-ink);
      border: 1px solid var(--color-off-black-ink);
    }

    .icon-container svg {
      width: 44px;
      height: 44px;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
      stroke: var(--color-primary-purple-deep);
    }

    .card-hero-feature .icon-container svg {
      width: 54px;
      height: 54px;
      stroke: var(--color-accent-coral);
    }

    .headline-wrap {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .stage-headline {
      font-size: 26px;
      font-weight: 800;
      letter-spacing: -0.025em;
      line-height: 1.15;
      color: var(--color-off-black-ink);
      text-wrap: balance;
      max-width: 320px;
      margin: 0 auto;
    }

    .card-hero-feature .stage-headline {
      font-size: 36px;
      letter-spacing: -0.03em;
      line-height: 1.1;
      max-width: 420px;
    }

    .stage-detail {
      font-size: 15.5px;
      font-weight: 500;
      color: var(--color-graphite);
      line-height: 1.45;
      text-wrap: balance;
      max-width: 310px;
      margin: 0 auto;
    }

    .card-hero-feature .stage-detail {
      color: rgba(20, 20, 15, 0.9);
      font-size: 17.5px;
      max-width: 380px;
    }

    /* Arced Conduits Connecting 4 Stages (Skill 14) */
    #connecting-svg {
      position: absolute;
      top: 220px;
      left: 140px;
      width: 1640px;
      height: 560px;
      pointer-events: none;
      z-index: 5;
    }

    .vector-track {
      stroke: var(--color-ash);
      stroke-width: 2.5px;
      fill: none;
      stroke-dasharray: 6 6;
    }

    .vector-active {
      stroke: var(--color-primary-purple-deep);
      stroke-width: 4px;
      fill: none;
      stroke-linecap: round;
      stroke-dasharray: 80;
      stroke-dashoffset: 80;
    }

    .vector-active-coral {
      stroke: var(--color-accent-coral);
      stroke-width: 4px;
      fill: none;
      stroke-linecap: round;
      stroke-dasharray: 80;
      stroke-dashoffset: 80;
    }

    .vector-packet {
      fill: var(--color-primary-purple-deep);
      opacity: 0;
    }

    .vector-packet-coral {
      fill: var(--color-accent-coral);
      opacity: 0;
    }

    .perk-footer-ticker {
      position: absolute;
      bottom: 36px;
      left: 140px;
      right: 140px;
      height: 38px;
      border-top: 1px solid var(--color-ash);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
      font-weight: 600;
      color: var(--color-graphite);
      z-index: 20;
    }

    .editorial-progress {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--color-ash);
    }

    .editorial-fill {
      height: 100%;
      width: 0%;
      background: var(--color-primary-purple-deep);
    }
  </style>
</head>
<body>

  <div id="stage-scaler" class="clip" data-composition-id="infografia_perk_4_funnel" data-width="1920" data-height="1080" data-duration="10" data-start="0">

    <header class="perk-nav">
      <span class="perk-logo">Perk</span>
      <span class="perk-nav-context">Optimización de Conversión &bull; UX-Motion Sequential 4</span>
    </header>

    <div class="header-bar" id="header-bar">
      <h1>Embudo de Conversión &amp; Activación</h1>
    </div>

    <!-- Arced Vector Conduits Between 4 Stages (Skill 14) -->
    <svg id="connecting-svg" viewBox="0 0 1640 560">
      <!-- 1 -> 2: X ~350 to 390 -->
      <path class="vector-track" d="M 335 280 Q 360 268 385 280" />
      <path id="vector-1-2" class="vector-active" d="M 335 280 Q 360 268 385 280" />
      <circle id="pkt-1-2" class="vector-packet" r="5" />

      <!-- 2 -> 3: X ~730 to 770 -->
      <path class="vector-track" d="M 725 280 Q 750 268 775 280" />
      <path id="vector-2-3" class="vector-active" d="M 725 280 Q 750 268 775 280" />
      <circle id="pkt-2-3" class="vector-packet" r="5" />

      <!-- 3 -> 4: X ~1120 to 1160 -->
      <path class="vector-track" d="M 1115 280 Q 1140 268 1165 280" />
      <path id="vector-3-4" class="vector-active-coral" d="M 1115 280 Q 1140 268 1165 280" />
      <circle id="pkt-3-4" class="vector-packet-coral" r="5.5" />
    </svg>

    <main class="funnel-container" id="funnel-wrap">

      <!-- STAGE 1: ATRACCIÓN -->
      <div class="funnel-card" id="card-1" onclick="focusCard(1)">
        <div class="icon-container" id="icon-1">
          <svg viewBox="0 0 24 24" id="svg-1">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        </div>
        <div class="headline-wrap" id="hw-1">
          <h2 class="stage-headline">Atracción &amp; Tráfico Cualificado</h2>
          <p class="stage-detail">Captación orgánica multicanal basada en autoridad editorial demostrada.</p>
        </div>
      </div>

      <!-- STAGE 2: INTERÉS -->
      <div class="funnel-card" id="card-2" onclick="focusCard(2)">
        <div class="icon-container" id="icon-2">
          <svg viewBox="0 0 24 24" id="svg-2">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        </div>
        <div class="headline-wrap" id="hw-2">
          <h2 class="stage-headline">Interés &amp; Descubrimiento Activo</h2>
          <p class="stage-detail">Consumo recurrente de contenido técnico de alto valor y exploración de producto.</p>
        </div>
      </div>

      <!-- STAGE 3: DECISIÓN -->
      <div class="funnel-card" id="card-3" onclick="focusCard(3)">
        <div class="icon-container" id="icon-3">
          <svg viewBox="0 0 24 24" id="svg-3">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div class="headline-wrap" id="hw-3">
          <h2 class="stage-headline">Demostración Directa de Valor</h2>
          <p class="stage-detail">Eliminación de barreras técnicas con pruebas en entornos interactivos.</p>
        </div>
      </div>

      <!-- STAGE 4: CONVERSIÓN HERO -->
      <div class="funnel-card card-hero-feature" id="card-4" onclick="focusCard(4)">
        <div id="hero-shockwave"></div>
        <div class="icon-container" id="icon-4">
          <svg viewBox="0 0 24 24" id="svg-4">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
            <path d="M4 22h16"></path>
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
          </svg>
        </div>
        <div class="headline-wrap" id="hw-4">
          <h2 class="stage-headline">Activación Inmediata &amp; Cierre de Pago</h2>
          <p class="stage-detail">Onboarding fluido sin fricción y retención vitalicia de cuenta.</p>
        </div>
      </div>

    </main>

    <footer class="perk-footer-ticker">
      <span>PALETTE: #A78BFA PURPLE // #FF5A36 SIGNAL CORAL // #F5F5EB CANVAS</span>
      <span>UX-MOTION DETERMINISTIC 10.0s @ 30FPS</span>
    </footer>

    <div class="editorial-progress">
      <div class="editorial-fill" id="progress-fill"></div>
    </div>

  </div>

  <script>
    function fitStage() {
      const stage = document.getElementById('stage-scaler');
      const w = window.innerWidth;
      const h = window.innerHeight;
      const scale = Math.min(w / 1920, h / 1080);
      stage.style.transform = \`translate(-50%, -50%) scale(\${scale})\`;
    }
    window.addEventListener('resize', fitStage);
    fitStage();

    const funnelWrap = document.getElementById('funnel-wrap');

    function focusCard(n) {
      funnelWrap.classList.add('staged');
      document.querySelectorAll('.funnel-card').forEach(c => c.classList.remove('active-focus'));
      const target = document.getElementById(\`card-\${n}\`);
      if (target) {
        target.classList.add('active-focus');
        gsap.fromTo(target, 
          { scaleX: 1.035, scaleY: 0.965 }, 
          { scaleX: 1.025, scaleY: 1.025, duration: 0.35, ease: 'back.out(2)' }
        );
      }
      setTimeout(() => {
        funnelWrap.classList.remove('staged');
        if (target) target.classList.remove('active-focus');
      }, 1600);
    }

    window.__timelines = window.__timelines || {};
    const tl = gsap.timeline({ paused: true });
    if (Array.isArray(window.__timelines)) {
      window.__timelines.push(tl);
    } else {
      window.__timelines["infografia_perk_4_funnel"] = tl;
    }

    gsap.set('.perk-nav', { opacity: 0, y: -16 });
    gsap.set('#header-bar', { opacity: 0, y: -12 });
    gsap.set('.perk-footer-ticker', { opacity: 0 });
    gsap.set(['#card-1', '#card-2', '#card-3'], { opacity: 0, y: 32, rotateX: 6, scale: 0.96 });
    gsap.set('#card-4', { opacity: 0, scale: 0.92, y: 36, rotateX: 8 });
    gsap.set('#connecting-svg', { opacity: 0 });
    gsap.set('#hero-shockwave', { opacity: 0, scale: 0.6 });

    tl
      .to('.perk-nav', { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, 0.2)
      .to('#header-bar', { opacity: 1, y: 0, duration: 0.5, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.35)
      .to('.perk-footer-ticker', { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0.5)

      // Sequential 4-Stage Entry (Skill 16 & 19)
      .to('#card-1', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.65, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.55)
      .fromTo('#icon-1', { scale: 0.85, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, 0.65)

      .to('#card-2', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.65, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.75)
      .fromTo('#icon-2', { scale: 0.85, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, 0.85)

      .to('#card-3', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.65, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.95)
      .fromTo('#icon-3', { scale: 0.85, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, 1.05)

      // Hero Card 4 Elastic Landing (Skill 15)
      .to('#card-4', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.85, ease: 'back.out(1.4)' }, 1.15)
      .fromTo('#icon-4', { scale: 0.8, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(2.5)' }, 1.25)
      .to('#connecting-svg', { opacity: 1, duration: 0.4 }, 1.4)

      // 1. Stage 1 (Atracción) -> Stage 2 (Interés)
      .call(() => {
        funnelWrap.classList.add('staged');
        document.getElementById('card-1').classList.add('active-focus');
      }, null, 2.0)
      .to('#card-1', { x: -3, scale: 0.99, duration: 0.08, ease: 'power1.in' }, 2.05)
      .to('#card-1', { x: 0, scale: 1.02, duration: 0.15, ease: 'back.out(2)' }, 2.15)
      .fromTo('#vector-1-2', { strokeDashoffset: 80 }, { strokeDashoffset: 0, duration: 0.65, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }, 2.2)
      .fromTo('#pkt-1-2', { cx: 335, cy: 280, opacity: 1 }, { cx: 385, cy: 280, opacity: 0, duration: 0.65, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }, 2.2)

      // 2. Stage 2 (Interés) -> Stage 3 (Decisión)
      .call(() => {
        document.getElementById('card-1').classList.remove('active-focus');
        document.getElementById('card-2').classList.add('active-focus');
      }, null, 3.2)
      .to('#card-2', { x: -2, scale: 0.99, duration: 0.08, ease: 'power1.in' }, 3.25)
      .to('#card-2', { x: 0, scale: 1.02, duration: 0.15, ease: 'back.out(2)' }, 3.35)
      .fromTo('#vector-2-3', { strokeDashoffset: 80 }, { strokeDashoffset: 0, duration: 0.65, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }, 3.4)
      .fromTo('#pkt-2-3', { cx: 725, cy: 280, opacity: 1 }, { cx: 775, cy: 280, opacity: 0, duration: 0.65, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }, 3.4)

      // 3. Stage 3 (Decisión) -> Hero Stage 4 (Conversión)
      .call(() => {
        document.getElementById('card-2').classList.remove('active-focus');
        document.getElementById('card-3').classList.add('active-focus');
      }, null, 4.4)
      .to('#card-3', { x: -2, scale: 0.99, duration: 0.08, ease: 'power1.in' }, 4.45)
      .to('#card-3', { x: 0, scale: 1.02, duration: 0.15, ease: 'back.out(2)' }, 4.55)
      .fromTo('#vector-3-4', { strokeDashoffset: 80 }, { strokeDashoffset: 0, duration: 0.65, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }, 4.6)
      .fromTo('#pkt-3-4', { cx: 1115, cy: 280, opacity: 1 }, { cx: 1165, cy: 280, opacity: 0, duration: 0.65, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }, 4.6)

      // 4. Hero Stage 4 Climax (Skills 15, 17, 18)
      .call(() => {
        document.getElementById('card-3').classList.remove('active-focus');
        document.getElementById('card-4').classList.add('active-focus');
      }, null, 5.5)
      .to('#card-4', { scaleX: 1.035, scaleY: 0.965, duration: 0.12, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 5.5)
      .fromTo('#hero-shockwave', 
        { opacity: 0.9, scale: 0.7 }, 
        { opacity: 0, scale: 2.3, duration: 0.8, ease: 'power2.out' }, 5.5
      )
      .to('#svg-4', { rotation: -12, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 5.55)

      // 5. Overall Appeal Stabilization (Skill 20)
      .call(() => {
        funnelWrap.classList.remove('staged');
        document.querySelectorAll('.funnel-card').forEach(c => c.classList.remove('active-focus'));
      }, null, 7.2)

      .to('#progress-fill', { width: '100%', duration: 10, ease: 'none' }, 0);

    tl.play();
  </script>
</body>
</html>`;

fs.writeFileSync('infografia_perk_4_funnel.html', perk4Html);
console.log('✔ infografia_perk_4_funnel.html upgraded');

// =========================================================================
// 5. VISTA UNIFICADA: 4-EN-1 DASHBOARD UX-MOTION (vista_4_infografias_ux_motion.html)
// =========================================================================
const multiViewHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard 4 Infografías Perk // UX-Motion Master View</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --color-primary-purple: #A78BFA;
      --color-accent-coral: #FF5A36;
      --bg-dark: #0D111A;
      --card-bg: #151C2C;
      --border-color: #243048;
      --font-sans: 'Inter', system-ui, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg-dark);
      color: #F8FAFC;
      font-family: var(--font-sans);
      min-height: 100vh;
      padding: 24px 28px 48px;
    }
    /* Grid Pattern */
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      background-image: radial-gradient(circle, rgba(167, 139, 250, 0.08) 1.5px, transparent 1.5px);
      background-size: 32px 32px;
      z-index: -1;
      pointer-events: none;
    }
    header {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 20px 28px;
      margin-bottom: 24px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    }
    .header-title h1 {
      font-size: 22px;
      font-weight: 800;
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .badge-purple {
      background: var(--color-primary-purple);
      color: #14140F;
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 999px;
      text-transform: uppercase;
    }
    .header-title p {
      font-size: 13.5px;
      color: #94A3B8;
      margin-top: 4px;
    }
    .header-actions {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
    }
    .btn {
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 12.5px;
      font-weight: 700;
      font-family: var(--font-mono);
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s;
    }
    .btn-sync {
      background: #1E293B;
      color: #F8FAFC;
      border: 1px solid #334155;
    }
    .btn-sync:hover {
      background: #2D3D58;
      border-color: #64748B;
    }
    .btn-purple {
      background: var(--color-primary-purple);
      color: #14140F;
      border: 1px solid var(--color-primary-purple);
    }
    .btn-purple:hover {
      background: #C4B5FD;
    }
    .btn-coral {
      background: rgba(255, 90, 54, 0.15);
      color: #FF7B50;
      border: 1px solid var(--color-accent-coral);
    }
    .btn-coral:hover {
      background: var(--color-accent-coral);
      color: #FFF;
    }

    /* 4-QUADRANT GRID (2x2) */
    .quadrant-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      width: 100%;
    }
    @media (max-width: 1200px) {
      .quadrant-grid {
        grid-template-columns: 1fr;
      }
    }
    .quadrant-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 12px 32px rgba(0,0,0,0.35);
      transition: transform 0.2s ease, border-color 0.2s ease;
    }
    .quadrant-card:hover {
      border-color: var(--color-primary-purple);
    }
    .card-topbar {
      padding: 14px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #1E273D;
      background: #111724;
    }
    .card-meta {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .meta-tag {
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 700;
      color: var(--color-primary-purple);
      background: rgba(167, 139, 250, 0.12);
      border: 1px solid rgba(167, 139, 250, 0.3);
      padding: 2px 8px;
      border-radius: 4px;
    }
    .meta-title {
      font-size: 14px;
      font-weight: 700;
      color: #FFFFFF;
    }
    .card-links {
      display: flex;
      gap: 8px;
    }
    .icon-link {
      color: #94A3B8;
      font-size: 11.5px;
      font-family: var(--font-mono);
      text-decoration: none;
      padding: 4px 8px;
      border-radius: 6px;
      border: 1px solid #283752;
      background: #162032;
      transition: all 0.15s;
    }
    .icon-link:hover {
      color: #FFF;
      border-color: var(--color-primary-purple);
    }

    /* 16:9 IFRAME THEATER */
    .iframe-stage-wrap {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 9;
      background: #F5F5EB;
      overflow: hidden;
    }
    .iframe-stage-wrap iframe {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: none;
      display: block;
    }

    /* CARD BOTTOM SPECS */
    .card-footer {
      padding: 12px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--font-mono);
      font-size: 11px;
      color: #64748B;
      background: #0F1420;
    }
    .skills-applied-badge {
      color: #A78BFA;
    }
  </style>
</head>
<body>

  <header>
    <div class="header-title">
      <h1>
        Dashboard 4 Infografías Perk
        <span class="badge-purple">21 UX-Motion Skills</span>
      </h1>
      <p>Visualización unificada 4-en-1: Staging focus, micro-física squash &amp; stretch, arcos vectoriales y 3D en tiempo real.</p>
    </div>
    <div class="header-actions">
      <button class="btn btn-sync" onclick="reloadAll()">🔄 Reiniciar Todas Simultáneamente</button>
      <a class="btn btn-purple" href="suite_transiciones_perk.html">🎬 Abrir Presentation Suite</a>
      <a class="btn btn-coral" href="prueba_perk_ux_motion.html">🧪 Lab Telemetría</a>
    </div>
  </header>

  <main class="quadrant-grid">

    <!-- 1. PROCESO EDITORIAL -->
    <div class="quadrant-card">
      <div class="card-topbar">
        <div class="card-meta">
          <span class="meta-tag">01 // STEPPED 2+3</span>
          <span class="meta-title">El Proceso Editorial</span>
        </div>
        <div class="card-links">
          <a class="icon-link" href="infografia_perk_1_writing.html" target="_blank">Abrir Completa ↗</a>
          <a class="icon-link" href="renders/infografia_perk_1_writing.mp4" download>📥 MP4</a>
        </div>
      </div>
      <div class="iframe-stage-wrap">
        <iframe id="frame-1" src="infografia_perk_1_writing.html"></iframe>
      </div>
      <div class="card-footer">
        <span class="skills-applied-badge">⚡ Skills 09, 13, 15, 16, 17, 18, 19, 20</span>
        <span>1920×1080 &bull; 10s GSAP</span>
      </div>
    </div>

    <!-- 2. CICLO AGÉNTICO -->
    <div class="quadrant-card">
      <div class="card-topbar">
        <div class="card-meta">
          <span class="meta-tag">02 // 3 LINEAR COLUMNS</span>
          <span class="meta-title">Ciclo de Desarrollo Agéntico</span>
        </div>
        <div class="card-links">
          <a class="icon-link" href="infografia_perk_2_agentic.html" target="_blank">Abrir Completa ↗</a>
          <a class="icon-link" href="renders/infografia_perk_2_agentic.mp4" download>📥 MP4</a>
        </div>
      </div>
      <div class="iframe-stage-wrap">
        <iframe id="frame-2" src="infografia_perk_2_agentic.html"></iframe>
      </div>
      <div class="card-footer">
        <span class="skills-applied-badge">⚡ Skills 09, 10, 13, 14, 15, 16, 17, 18, 19</span>
        <span>1920×1080 &bull; 10s GSAP</span>
      </div>
    </div>

    <!-- 3. REFUERZO VS IMITACIÓN -->
    <div class="quadrant-card">
      <div class="card-topbar">
        <div class="card-meta">
          <span class="meta-tag">03 // CONVERGENT HERO</span>
          <span class="meta-title">Refuerzo vs. Imitación</span>
        </div>
        <div class="card-links">
          <a class="icon-link" href="infografia_perk_3_rl_vs_imitation.html" target="_blank">Abrir Completa ↗</a>
          <a class="icon-link" href="renders/infografia_perk_3_rl_vs_imitation.mp4" download>📥 MP4</a>
        </div>
      </div>
      <div class="iframe-stage-wrap">
        <iframe id="frame-3" src="infografia_perk_3_rl_vs_imitation.html"></iframe>
      </div>
      <div class="card-footer">
        <span class="skills-applied-badge">⚡ Skills 09, 11, 13, 14, 15, 17, 18, 19, 20</span>
        <span>1920×1080 &bull; 10s GSAP</span>
      </div>
    </div>

    <!-- 4. FUNNEL DE CONVERSIÓN -->
    <div class="quadrant-card">
      <div class="card-topbar">
        <div class="card-meta">
          <span class="meta-tag">04 // SEQUENTIAL 4</span>
          <span class="meta-title">Funnel de Conversión</span>
        </div>
        <div class="card-links">
          <a class="icon-link" href="infografia_perk_4_funnel.html" target="_blank">Abrir Completa ↗</a>
          <a class="icon-link" href="renders/infografia_perk_4_funnel.mp4" download>📥 MP4</a>
        </div>
      </div>
      <div class="iframe-stage-wrap">
        <iframe id="frame-4" src="infografia_perk_4_funnel.html"></iframe>
      </div>
      <div class="card-footer">
        <span class="skills-applied-badge">⚡ Skills 09, 10, 13, 14, 15, 16, 17, 18, 20</span>
        <span>1920×1080 &bull; 10s GSAP</span>
      </div>
    </div>

  </main>

  <script>
    function reloadAll() {
      ['frame-1', 'frame-2', 'frame-3', 'frame-4'].forEach(id => {
        const f = document.getElementById(id);
        if (f) f.src = f.src;
      });
    }
  </script>
</body>
</html>`;

fs.writeFileSync('vista_4_infografias_ux_motion.html', multiViewHtml);
console.log('✔ vista_4_infografias_ux_motion.html created');

console.log('All 4 Perk UX-Motion infographics & dashboard generated successfully!');
