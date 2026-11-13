const fs = require('fs');

console.log('Upgrading Perk Infographics: Removing shockwave circles & restoring straight lines...');

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

    .row-top {
      width: 100%;
      height: 276px;
      display: grid;
      grid-template-columns: 1fr 1.35fr;
      gap: 24px;
    }

    .row-bottom {
      width: 100%;
      height: 276px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 24px;
    }

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

    .icon-container {
      width: 80px;
      height: 80px;
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-primary-purple-soft);
      border: 1px solid rgba(124, 58, 237, 0.2);
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

      <div class="row-top">

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

        <div class="card-item card-hero-purple" id="card-2" onclick="focusCard(2)">
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

      <div class="row-bottom">

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

    tl
      .to('.perk-nav', { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, 0.2)
      .to('#header-bar', { opacity: 1, y: 0, duration: 0.5, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.35)
      .to('.perk-footer-ticker', { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0.5)

      // Staggered Entrance
      .to('#card-1', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.7, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.55)
      .fromTo('#icon-1', { scale: 0.85, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, 0.65)
      
      .to('#card-2', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.85, ease: 'back.out(1.4)' }, 0.75)
      .fromTo('#icon-2', { scale: 0.8, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(2.5)' }, 0.85)

      .to('#card-3', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.65, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.95)
      .to('#card-4', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.65, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 1.1)
      .to('#card-5', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.65, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 1.25)

      // 1. Stage Focus on Card 1
      .call(() => {
        steppedWrap.classList.add('staged');
        document.getElementById('card-1').classList.add('active-focus');
      }, null, 2.0)
      .to('#card-1', { y: -4, scale: 1.025, duration: 0.1, ease: 'power1.in' }, 2.05)
      .to('#card-1', { y: 0, scale: 1.02, duration: 0.2, ease: 'back.out(2)' }, 2.15)
      .to('#svg-1', { rotation: 10, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 2.2)

      // 2. Cascade into Hero Card 2
      .call(() => {
        document.getElementById('card-1').classList.remove('active-focus');
        document.getElementById('card-2').classList.add('active-focus');
      }, null, 3.2)
      .to('#card-2', { scaleX: 1.03, scaleY: 0.97, duration: 0.12, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 3.2)
      .to('#svg-2', { rotation: -8, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 3.25)

      // 3. Step Down to Card 3
      .call(() => {
        document.getElementById('card-2').classList.remove('active-focus');
        document.getElementById('card-3').classList.add('active-focus');
      }, null, 4.8)
      .to('#card-3', { scaleX: 1.03, scaleY: 0.97, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 4.8)
      .to('#svg-3', { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 4.85)

      // 4. Step to Card 4
      .call(() => {
        document.getElementById('card-3').classList.remove('active-focus');
        document.getElementById('card-4').classList.add('active-focus');
      }, null, 6.2)
      .to('#card-4', { scaleX: 1.03, scaleY: 0.97, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 6.2)
      .to('#svg-4', { rotation: 8, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 6.25)

      // 5. Step to Card 5
      .call(() => {
        document.getElementById('card-4').classList.remove('active-focus');
        document.getElementById('card-5').classList.add('active-focus');
      }, null, 7.5)
      .to('#card-5', { scaleX: 1.035, scaleY: 0.965, duration: 0.12, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 7.5)
      .to('#svg-5', { x: 4, y: -4, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 7.55)

      // 6. Overall Appeal Restoration
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
console.log('✔ infografia_perk_1_writing.html: shockwave removed');

// =========================================================================
// 2. INFOGRAFÍA 2: CICLO AGÉNTICO (3 LINEAR COLUMNS) - STRAIGHT LINES & NO SHOCKWAVE
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

    /* STRAIGHT Vector Conduits */
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
      stroke-width: 2px;
      fill: none;
      stroke-dasharray: 6 6;
    }

    .vector-active {
      stroke: var(--color-primary-purple-deep);
      stroke-width: 2.5px;
      fill: none;
      stroke-linecap: round;
      stroke-dasharray: 100;
      stroke-dashoffset: 100;
    }

    .vector-active-coral {
      stroke: var(--color-accent-coral);
      stroke-width: 2.5px;
      fill: none;
      stroke-linecap: round;
      stroke-dasharray: 100;
      stroke-dashoffset: 100;
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

    <!-- Straight Horizontal Lines (M x1 y L x2 y) -->
    <svg id="connecting-svg" viewBox="0 0 1640 560">
      <!-- Straight line 1 to 2 (Y: 280) -->
      <path class="vector-track" d="M 430 280 L 490 280" />
      <path id="vector-1-2" class="vector-active" d="M 430 280 L 490 280" />
      <circle id="pkt-1-2" class="vector-packet" r="5" />

      <!-- Straight line 2 to 3 (Y: 280) -->
      <path class="vector-track" d="M 1150 280 L 1210 280" />
      <path id="vector-2-3" class="vector-active-coral" d="M 1150 280 L 1210 280" />
      <circle id="pkt-2-3" class="vector-packet-coral" r="5.5" />
    </svg>

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

    tl
      .to('.perk-nav', { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, 0.2)
      .to('#header-bar', { opacity: 1, y: 0, duration: 0.5, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.35)
      .to('.perk-footer-ticker', { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0.5)

      // Card 1 Entrance
      .to('#card-1', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.7, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.6)
      .fromTo('#icon-1', { scale: 0.85, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, 0.7)

      // Hero Card 2 Entrance
      .to('#card-2', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.85, ease: 'back.out(1.4)' }, 0.85)
      .fromTo('#icon-2', { scale: 0.8, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(2.5)' }, 0.95)

      // Card 3 Entrance
      .to('#card-3', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.7, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 1.1)
      .fromTo('#icon-3', { scale: 0.85, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, 1.2)
      .to('#connecting-svg', { opacity: 1, duration: 0.4 }, 1.3)

      // Staging on Card 1 + Anticipation Wind-up
      .call(() => {
        columnsWrap.classList.add('staged');
        document.getElementById('card-1').classList.add('active-focus');
      }, null, 2.0)
      .to('#card-1', { x: -3, scale: 0.99, duration: 0.08, ease: 'power1.in' }, 2.05)
      .to('#card-1', { x: 0, scale: 1.02, duration: 0.15, ease: 'back.out(2)' }, 2.15)

      // Straight Vector 1->2
      .fromTo('#vector-1-2', { strokeDashoffset: 100 }, { strokeDashoffset: 0, duration: 0.7, ease: 'power1.inOut' }, 2.2)
      .fromTo('#pkt-1-2', { cx: 430, cy: 280, opacity: 1 }, { cx: 490, cy: 280, opacity: 0, duration: 0.7, ease: 'power1.inOut' }, 2.2)

      // Impact on Hero Card 2
      .call(() => {
        document.getElementById('card-1').classList.remove('active-focus');
        document.getElementById('card-2').classList.add('active-focus');
      }, null, 3.0)
      .to('#card-2', { scaleX: 1.03, scaleY: 0.97, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 3.0)
      .to('#svg-2', { rotation: 8, duration: 0.15, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 3.05)

      // Hero Card 2 Emits to Card 3 along straight line
      .to('#card-2', { x: 2, scale: 0.99, duration: 0.08, ease: 'power1.in' }, 4.6)
      .to('#card-2', { x: 0, scale: 1.02, duration: 0.15, ease: 'back.out(2)' }, 4.7)
      .fromTo('#vector-2-3', { strokeDashoffset: 100 }, { strokeDashoffset: 0, duration: 0.7, ease: 'power1.inOut' }, 4.75)
      .fromTo('#pkt-2-3', { cx: 1150, cy: 280, opacity: 1 }, { cx: 1210, cy: 280, opacity: 0, duration: 0.7, ease: 'power1.inOut' }, 4.75)

      // Impact on Card 3
      .call(() => {
        document.getElementById('card-2').classList.remove('active-focus');
        document.getElementById('card-3').classList.add('active-focus');
      }, null, 5.5)
      .to('#card-3', { scaleX: 1.025, scaleY: 0.975, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 5.5)
      .to('#svg-3', { scale: 1.15, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 5.55)

      // Overall Appeal Restoration
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
console.log('✔ infografia_perk_2_agentic.html: straight lines restored, shockwave removed');

// =========================================================================
// 3. INFOGRAFÍA 3: REFUERZO VS IMITACIÓN - STRAIGHT LINES & NO SHOCKWAVE
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

    /* STRAIGHT Vector Conduits */
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
      stroke-width: 2px;
      fill: none;
      stroke-dasharray: 6 6;
    }

    .vector-active-left {
      stroke: var(--color-primary-purple-deep);
      stroke-width: 2.5px;
      fill: none;
      stroke-linecap: round;
      stroke-dasharray: 100;
      stroke-dashoffset: 100;
    }

    .vector-active-right {
      stroke: var(--color-accent-coral);
      stroke-width: 2.5px;
      fill: none;
      stroke-linecap: round;
      stroke-dasharray: 100;
      stroke-dashoffset: 100;
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

    <!-- Straight Horizontal Lines (M x1 y L x2 y) -->
    <svg id="connecting-svg" viewBox="0 0 1640 560">
      <!-- Straight Left to Center (Y: 280) -->
      <path class="vector-track" d="M 430 280 L 500 280" />
      <path id="vector-left" class="vector-active-left" d="M 430 280 L 500 280" />
      <circle id="pkt-left" class="vector-packet" r="5" />

      <!-- Straight Right to Center (Y: 280) -->
      <path class="vector-track" d="M 1210 280 L 1140 280" />
      <path id="vector-right" class="vector-active-right" d="M 1210 280 L 1140 280" />
      <circle id="pkt-right" class="vector-packet-coral" r="5" />
    </svg>

    <main class="convergent-container" id="convergent-wrap">

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

      <div class="bento-card card-hero-purple" id="card-center" onclick="focusCard('center')">
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

    tl
      .to('.perk-nav', { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, 0.2)
      .to('#header-bar', { opacity: 1, y: 0, duration: 0.5, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.35)
      .to('.perk-footer-ticker', { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0.5)

      // Satellites Entrance
      .to('#card-left', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.7, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.55)
      .fromTo('#icon-left', { scale: 0.85, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, 0.65)
      
      .to('#card-right', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.7, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.7)
      .fromTo('#icon-right', { scale: 0.85, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, 0.8)

      // Center Hero Elastic Landing
      .to('#card-center', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.85, ease: 'back.out(1.4)' }, 0.85)
      .fromTo('#icon-center', { scale: 0.8, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(2.5)' }, 0.95)
      .to('#connecting-svg', { opacity: 1, duration: 0.4 }, 1.3)

      // 1. Stage Left Exploration (RL)
      .call(() => {
        convergentWrap.classList.add('staged');
        document.getElementById('card-left').classList.add('active-focus');
      }, null, 2.0)
      .to('#card-left', { x: -3, scale: 0.99, duration: 0.08, ease: 'power1.in' }, 2.05)
      .to('#card-left', { x: 0, scale: 1.02, duration: 0.15, ease: 'back.out(2)' }, 2.15)
      .fromTo('#vector-left', { strokeDashoffset: 100 }, { strokeDashoffset: 0, duration: 0.7, ease: 'power1.inOut' }, 2.2)
      .fromTo('#pkt-left', { cx: 430, cy: 280, opacity: 1 }, { cx: 500, cy: 280, opacity: 0, duration: 0.7, ease: 'power1.inOut' }, 2.2)

      // 2. Stage Right Demonstrations (Imitation)
      .call(() => {
        document.getElementById('card-left').classList.remove('active-focus');
        document.getElementById('card-right').classList.add('active-focus');
      }, null, 3.4)
      .to('#card-right', { x: 3, scale: 0.99, duration: 0.08, ease: 'power1.in' }, 3.45)
      .to('#card-right', { x: 0, scale: 1.02, duration: 0.15, ease: 'back.out(2)' }, 3.55)
      .fromTo('#vector-right', { strokeDashoffset: 100 }, { strokeDashoffset: 0, duration: 0.7, ease: 'power1.inOut' }, 3.6)
      .fromTo('#pkt-right', { cx: 1210, cy: 280, opacity: 1 }, { cx: 1140, cy: 280, opacity: 0, duration: 0.7, ease: 'power1.inOut' }, 3.6)

      // 3. Collision into Center Hero
      .call(() => {
        document.getElementById('card-right').classList.remove('active-focus');
        document.getElementById('card-center').classList.add('active-focus');
      }, null, 4.8)
      .to('#card-center', { scaleX: 1.035, scaleY: 0.965, duration: 0.12, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 4.8)
      .to('#svg-center', { rotation: 18, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 4.85)

      // 4. Harmonic Pulse
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
console.log('✔ infografia_perk_3_rl_vs_imitation.html: straight lines restored, shockwave removed');

// =========================================================================
// 4. INFOGRAFÍA 4: FUNNEL DE CONVERSIÓN - STRAIGHT LINES & NO SHOCKWAVE
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

    .funnel-container {
      position: absolute;
      top: 220px;
      left: 140px;
      width: 1640px;
      height: 560px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1.38fr;
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

    .card-hero-feature {
      background: var(--color-primary-purple);
      border: 1px solid var(--color-primary-purple);
      color: var(--color-off-black-ink);
      padding: 40px 36px;
    }

    .card-hero-feature.active-focus {
      box-shadow: 0 20px 50px rgba(124, 58, 237, 0.32);
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

    /* STRAIGHT Vector Conduits */
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
      stroke-width: 2px;
      fill: none;
      stroke-dasharray: 6 6;
    }

    .vector-active {
      stroke: var(--color-primary-purple-deep);
      stroke-width: 2.5px;
      fill: none;
      stroke-linecap: round;
      stroke-dasharray: 80;
      stroke-dashoffset: 80;
    }

    .vector-active-coral {
      stroke: var(--color-accent-coral);
      stroke-width: 2.5px;
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

    <!-- Straight Horizontal Lines (M x1 y L x2 y) -->
    <svg id="connecting-svg" viewBox="0 0 1640 560">
      <!-- 1 -> 2: Straight horizontal line (Y: 280) -->
      <path class="vector-track" d="M 335 280 L 385 280" />
      <path id="vector-1-2" class="vector-active" d="M 335 280 L 385 280" />
      <circle id="pkt-1-2" class="vector-packet" r="5" />

      <!-- 2 -> 3: Straight horizontal line (Y: 280) -->
      <path class="vector-track" d="M 725 280 L 775 280" />
      <path id="vector-2-3" class="vector-active" d="M 725 280 L 775 280" />
      <circle id="pkt-2-3" class="vector-packet" r="5" />

      <!-- 3 -> 4: Straight horizontal line (Y: 280) -->
      <path class="vector-track" d="M 1115 280 L 1165 280" />
      <path id="vector-3-4" class="vector-active-coral" d="M 1115 280 L 1165 280" />
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

      <!-- STAGE 4: CONVERSIÓN HERO (NO CIRCLE SHOCKWAVE) -->
      <div class="funnel-card card-hero-feature" id="card-4" onclick="focusCard(4)">
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

    tl
      .to('.perk-nav', { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, 0.2)
      .to('#header-bar', { opacity: 1, y: 0, duration: 0.5, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.35)
      .to('.perk-footer-ticker', { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0.5)

      // Sequential Entrance
      .to('#card-1', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.65, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.55)
      .fromTo('#icon-1', { scale: 0.85, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, 0.65)

      .to('#card-2', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.65, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.75)
      .fromTo('#icon-2', { scale: 0.85, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, 0.85)

      .to('#card-3', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.65, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }, 0.95)
      .fromTo('#icon-3', { scale: 0.85, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, 1.05)

      // Hero Card 4 Entrance
      .to('#card-4', { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.85, ease: 'back.out(1.4)' }, 1.15)
      .fromTo('#icon-4', { scale: 0.8, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(2.5)' }, 1.25)
      .to('#connecting-svg', { opacity: 1, duration: 0.4 }, 1.4)

      // 1. Stage 1 -> Stage 2 (Straight horizontal line)
      .call(() => {
        funnelWrap.classList.add('staged');
        document.getElementById('card-1').classList.add('active-focus');
      }, null, 2.0)
      .to('#card-1', { x: -3, scale: 0.99, duration: 0.08, ease: 'power1.in' }, 2.05)
      .to('#card-1', { x: 0, scale: 1.02, duration: 0.15, ease: 'back.out(2)' }, 2.15)
      .fromTo('#vector-1-2', { strokeDashoffset: 80 }, { strokeDashoffset: 0, duration: 0.65, ease: 'power1.inOut' }, 2.2)
      .fromTo('#pkt-1-2', { cx: 335, cy: 280, opacity: 1 }, { cx: 385, cy: 280, opacity: 0, duration: 0.65, ease: 'power1.inOut' }, 2.2)

      // 2. Stage 2 -> Stage 3 (Straight horizontal line)
      .call(() => {
        document.getElementById('card-1').classList.remove('active-focus');
        document.getElementById('card-2').classList.add('active-focus');
      }, null, 3.2)
      .to('#card-2', { x: -2, scale: 0.99, duration: 0.08, ease: 'power1.in' }, 3.25)
      .to('#card-2', { x: 0, scale: 1.02, duration: 0.15, ease: 'back.out(2)' }, 3.35)
      .fromTo('#vector-2-3', { strokeDashoffset: 80 }, { strokeDashoffset: 0, duration: 0.65, ease: 'power1.inOut' }, 3.4)
      .fromTo('#pkt-2-3', { cx: 725, cy: 280, opacity: 1 }, { cx: 775, cy: 280, opacity: 0, duration: 0.65, ease: 'power1.inOut' }, 3.4)

      // 3. Stage 3 -> Hero Stage 4 (Straight horizontal line)
      .call(() => {
        document.getElementById('card-2').classList.remove('active-focus');
        document.getElementById('card-3').classList.add('active-focus');
      }, null, 4.4)
      .to('#card-3', { x: -2, scale: 0.99, duration: 0.08, ease: 'power1.in' }, 4.45)
      .to('#card-3', { x: 0, scale: 1.02, duration: 0.15, ease: 'back.out(2)' }, 4.55)
      .fromTo('#vector-3-4', { strokeDashoffset: 80 }, { strokeDashoffset: 0, duration: 0.65, ease: 'power1.inOut' }, 4.6)
      .fromTo('#pkt-3-4', { cx: 1115, cy: 280, opacity: 1 }, { cx: 1165, cy: 280, opacity: 0, duration: 0.65, ease: 'power1.inOut' }, 4.6)

      // 4. Hero Stage 4 Climax (Elastic bounce without circle shockwave)
      .call(() => {
        document.getElementById('card-3').classList.remove('active-focus');
        document.getElementById('card-4').classList.add('active-focus');
      }, null, 5.5)
      .to('#card-4', { scaleX: 1.035, scaleY: 0.965, duration: 0.12, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 5.5)
      .to('#svg-4', { rotation: -12, duration: 0.2, yoyo: true, repeat: 1, ease: 'back.out(2)' }, 5.55)

      // 5. Overall Appeal Stabilization
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
console.log('✔ infografia_perk_4_funnel.html: straight lines restored, shockwave removed');

console.log('Regenerating done.');
