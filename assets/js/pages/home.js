/* canvas cannot read CSS variables, so its colours are rgba strings of the brand tokens */
(function () {
  'use strict';
  const VERSION = 'v2.1';
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const SOURCE_TEXT = 'const dune=()=>{return<Sand/>};export default function Desert(){let wind=0.8;' +
    'for(i of layers){i.shift(wind)}}npm run build;git push origin main;<div class="ridge"></div>if(ready)ship();';
  const FAVOURITES = ['learning-gutenberg', 'website-creation-and-design', 'wp-video-focus', 'kickstart-genesis-framework-wp-theme'];
  const TERMINAL_PRODUCT = 'learning-gutenberg';
  const MONO_FONT = 'px "Fira Code",monospace';
  const AMBER = '233,184,114';
  const SAND = '243,230,208';
  const WARM_BLACK = '21,17,12';
  const $ = selector => document.querySelector(selector);
  const rgba = (rgb, alpha) => 'rgba(' + rgb + ',' + alpha + ')';
  const sourceChar = index => SOURCE_TEXT[index % SOURCE_TEXT.length];

  /* value noise */
  const PERMUTATION = new Uint8Array(512);
  (function () {
    const p = [];
    for (let i = 0; i < 256; i++) p[i] = i;
    let seed = 1337;
    for (let i = 255; i > 0; i--) {
      seed = (seed * 16807) % 2147483647;
      const j = seed % (i + 1);
      [p[i], p[j]] = [p[j], p[i]];
    }
    for (let i = 0; i < 512; i++) PERMUTATION[i] = p[i & 255];
  })();
  const smooth = t => t * t * (3 - 2 * t);
  function noise(x, y) {
    const P = PERMUTATION;
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    const topLeft = P[(P[xi & 255] + yi) & 255] / 255;
    const topRight = P[(P[(xi + 1) & 255] + yi) & 255] / 255;
    const bottomLeft = P[(P[xi & 255] + yi + 1) & 255] / 255;
    const bottomRight = P[(P[(xi + 1) & 255] + yi + 1) & 255] / 255;
    const u = smooth(xf), v = smooth(yf);
    return topLeft + (topRight - topLeft) * u + (bottomLeft - topLeft) * v +
      (topLeft - topRight - bottomLeft + bottomRight) * u * v;
  }
  function fbm(x, y, octaves) {
    let sum = 0, amplitude = 0.5, frequency = 1;
    for (let i = 0; i < (octaves || 4); i++) {
      sum += amplitude * noise(x * frequency, y * frequency);
      frequency *= 2;
      amplitude *= 0.5;
    }
    return sum;
  }
  // a dune ridge height between 0 and 1 from the noise field
  function ridge(x, y) {
    const r = 1 - Math.abs(fbm(x, y, 4) * 2 - 1);
    return r * r;
  }
  function fitCanvas(canvas) {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, width: rect.width, height: rect.height };
  }

  /* hero */
  const hero = {
    section: $('#hero'),
    state: { time: 0, pointerX: -9999, pointerY: -9999, lensX: null, lensY: null, lens: 0, grains: [] },
    running: false,
    frame: 0,
    last: 0
  };
  (function () {
    const section = hero.section, st = hero.state, canvas = section.querySelector('canvas');
    let ctx, width, height;
    function size() {
      const fit = fitCanvas(canvas);
      ctx = fit.ctx; width = fit.width; height = fit.height;
    }
    section.addEventListener('pointermove', e => {
      const rect = section.getBoundingClientRect();
      st.pointerX = e.clientX - rect.left;
      st.pointerY = e.clientY - rect.top;
    });
    section.addEventListener('pointerleave', () => { st.pointerX = -9999; st.pointerY = -9999; });

    function drawMoon(time, scale, lensX, lensY, lens) {
      const mobile = width < 820;
      const radius = (mobile ? 115 : 195) * Math.max(scale, 0.5);
      const rise = reducedMotion ? 1 : 1 - Math.pow(1 - Math.min(1, time / 2.6), 3);
      const cx = width * 0.5, cy = (mobile ? height * 0.22 : height * 0.3) + (1 - rise) * radius * 0.6;
      const halo = ctx.createRadialGradient(cx, cy, radius * 0.6, cx, cy, radius * 2.1);
      halo.addColorStop(0, rgba(SAND, 0.09));
      halo.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, width, height);
      const cell = Math.max(8, 11 * scale);
      ctx.font = Math.round(cell * 0.92) + MONO_FONT;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const tick = Math.floor(time * 2.2);
      const lensRadius = 230 * Math.max(scale, 0.6);
      for (let y = cy - radius; y < cy + radius; y += cell) {
        const row = Math.round((y - cy) / cell);
        for (let x = cx - radius; x <= cx + radius; x += cell * 0.62) {
          const nx = (x - cx) / radius, ny = (y - cy) / radius, distSq = nx * nx + ny * ny;
          if (distSq > 1) continue;
          const col = Math.round((x - cx) / (cell * 0.62));
          const hash = (row * 73856093 ^ col * 19349663) >>> 0;
          const nz = Math.sqrt(1 - distSq);
          const light = -0.45 * nx - 0.55 * ny + 0.7 * nz;
          let alpha = 0.1 + 0.68 * Math.max(0, light) + 0.2 * Math.pow(Math.sqrt(distSq), 8);
          if (lens > 0.02) {
            const d = Math.hypot(x - lensX, y - lensY);
            if (d < lensRadius) alpha = Math.min(1, alpha + 0.55 * lens * (1 - d / lensRadius));
          }
          alpha *= rise * (0.75 + 0.25 * ((hash % 7) / 6));
          ctx.fillStyle = rgba(SAND, alpha.toFixed(3));
          ctx.fillText(sourceChar(hash + (hash % 5 === 0 ? tick : 0)), x, y);
        }
      }
    }

    function drawGrains(rows, dt, scale, lensX, lensY, lens) {
      const grains = st.grains, max = width < 820 ? 110 : 260;
      if (!reducedMotion && dt > 0) {
        let spawn = Math.min(14, Math.round(max * dt / 1.1) + (Math.random() < 0.6 ? 2 : 0));
        while (spawn-- && grains.length < max) {
          const row = rows[Math.floor(Math.pow(Math.random(), 1.25) * rows.length * 0.75)];
          if (!row) break;
          const points = row.points, p = points[Math.floor(Math.random() * points.length)];
          const before = points[Math.max(0, p.index - 2)], after = points[Math.min(points.length - 1, p.index + 2)];
          if (!(p.y <= before.y + 1 && p.y <= after.y + 1)) continue;
          grains.push({
            x: p.x, y: p.y - 2,
            vx: (30 + Math.random() * 50) * scale, vy: -(6 + Math.random() * 16) * scale,
            age: 0, life: 3 + Math.random() * 4,
            char: SOURCE_TEXT[Math.floor(Math.random() * SOURCE_TEXT.length)],
            depth: row.depth
          });
        }
      }
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const lensRadius = 230 * Math.max(scale, 0.6);
      for (let i = grains.length - 1; i >= 0; i--) {
        const g = grains[i];
        g.age += dt;
        if (g.age > g.life) { grains.splice(i, 1); continue; }
        const dx = g.x - lensX, dy = g.y - lensY, d = Math.hypot(dx, dy);
        if (d < 160 * scale && d > 1) {
          const push = (1 - d / (160 * scale)) * 120 * scale * dt;
          g.x += dx / d * push;
          g.y += dy / d * push;
        }
        g.x += g.vx * dt;
        g.y += g.vy * dt;
        g.vy -= 2 * scale * dt;
        const fadeInOut = Math.sin(Math.PI * g.age / g.life);
        let alpha = fadeInOut * (0.5 + g.depth * 0.45);
        if (lens > 0.02 && d < lensRadius) alpha = Math.min(1, alpha + 0.6 * lens * fadeInOut * (1 - d / lensRadius));
        ctx.font = Math.round((11 + g.depth * 8) * Math.max(scale, 0.7)) + MONO_FONT;
        ctx.fillStyle = rgba(AMBER, alpha.toFixed(3));
        ctx.fillText(g.char, g.x, g.y);
      }
    }

    function drawLens(rows, time, step, scale, lensX, lensY, lens) {
      const lensRadius = 230 * Math.max(scale, 0.6) * (0.6 + 0.4 * lens);
      ctx.save();
      ctx.beginPath();
      ctx.arc(lensX, lensY, lensRadius, 0, 7);
      ctx.clip();
      const shade = ctx.createRadialGradient(lensX, lensY, lensRadius * 0.55, lensX, lensY, lensRadius);
      shade.addColorStop(0, rgba(WARM_BLACK, 0.96 * lens));
      shade.addColorStop(1, rgba(WARM_BLACK, 0));
      ctx.fillStyle = shade;
      ctx.fillRect(lensX - lensRadius, lensY - lensRadius, lensRadius * 2, lensRadius * 2);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const tick = Math.floor(time * 3);
      for (const row of rows) {
        const fontSize = Math.round((9 + row.depth * 9) * Math.max(scale, 0.7));
        ctx.font = fontSize + MONO_FONT;
        const every = Math.max(1, Math.round(fontSize * 0.75 / step));
        for (const p of row.points) {
          if (p.index % every) continue;
          const d = Math.hypot(p.x - lensX, p.y - lensY);
          if (d > lensRadius) continue;
          const falloff = 1 - d / lensRadius;
          const charIndex = p.index * 7 + Math.round(row.depth * 97) * 13 + (falloff > 0.8 ? tick : 0);
          const bright = falloff > 0.85 && (p.index + tick) % 9 === 0;
          ctx.fillStyle = bright
            ? rgba(SAND, falloff * lens)
            : rgba(AMBER, ((0.25 + row.depth * 0.75) * Math.min(1, falloff * 2.2) * lens).toFixed(3));
          ctx.fillText(sourceChar(charIndex), p.x, p.y);
        }
      }
      ctx.restore();
      ctx.strokeStyle = rgba(AMBER, 0.25 * lens);
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 6]);
      ctx.beginPath();
      ctx.arc(lensX, lensY, lensRadius, 0, 7);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    function draw(dt) {
      const time = st.time;
      ctx.fillStyle = '#15110C';
      ctx.fillRect(0, 0, width, height);
      const lineCount = 56, top = height * 0.44, bottom = height * 1.04;
      const step = Math.max(6, width / 220), scale = Math.min(width / 1920, height / 1080);
      const pointerIn = st.pointerX > -999;
      if (pointerIn) {
        if (st.lensX == null) { st.lensX = st.pointerX; st.lensY = st.pointerY; }
        else { st.lensX += (st.pointerX - st.lensX) * 0.18; st.lensY += (st.pointerY - st.lensY) * 0.18; }
      }
      const lensX = st.lensX == null ? -9999 : st.lensX, lensY = st.lensY == null ? -9999 : st.lensY;
      st.lens += ((pointerIn ? 1 : 0) - st.lens) * 0.08;
      drawMoon(time, scale, lensX, lensY, st.lens);

      const rows = [];
      for (let i = 0; i < lineCount; i++) {
        const depth = i / (lineCount - 1);
        const baseline = top + (bottom - top) * Math.pow(depth, 1.6);
        const amplitude = (20 + depth * 150) * scale * 1.4;
        const points = [];
        ctx.beginPath();
        for (let x = -10, index = 0; x <= width + 10; x += step, index++) {
          const y = baseline - ridge(x / width * 3 + time * 0.03 + i * 0.02, i * 0.09 + time * 0.01) * amplitude;
          points.push({ x, y, index });
          if (index === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        rows.push({ depth, points });
        ctx.strokeStyle = rgba(AMBER, (0.12 + depth * 0.6).toFixed(3));
        ctx.lineWidth = 0.6 + depth * 0.9;
        ctx.stroke();
        ctx.lineTo(width + 10, height);
        ctx.lineTo(-10, height);
        ctx.closePath();
        ctx.fillStyle = rgba(WARM_BLACK, 0.55 + depth * 0.3);
        ctx.fill();
      }
      drawGrains(rows, dt, scale, lensX, lensY, st.lens);

      const glow = ctx.createRadialGradient(width * 0.5, top - height * 0.02, 0, width * 0.5, top - height * 0.02, height * 0.5);
      glow.addColorStop(0, rgba(AMBER, 0.16));
      glow.addColorStop(1, rgba(AMBER, 0));
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';
      if (st.lens > 0.02 && lensX > -999) drawLens(rows, time, step, scale, lensX, lensY, st.lens);
    }

    function loop(now) {
      if (!hero.running) return;
      const dt = Math.min(0.05, (now - (hero.last || now)) / 1000);
      hero.last = now;
      st.time += dt;
      draw(dt);
      hero.frame = requestAnimationFrame(loop);
    }
    hero.start = () => {
      if (hero.running) return;
      size();
      if (reducedMotion) { st.time = 6; draw(0); return; }
      hero.running = true;
      hero.last = 0;
      hero.frame = requestAnimationFrame(loop);
    };
    hero.stop = () => { hero.running = false; cancelAnimationFrame(hero.frame); };
    addEventListener('resize', () => { size(); if (reducedMotion) draw(0); });
    size();
  })();

  /* product covers: ascii lens over the image */
  function lensCover(canvas, img) {
    const lens = { x: 0, y: 0, smoothX: null, smoothY: null, strength: 0, frame: 0, hover: false };
    const RAMP = ' .:-=+*%#@';
    const CELL = 9, CELL_WIDTH = CELL * 0.62;
    let ctx, width, height, grid = null, readable = true;
    function size() {
      const fit = fitCanvas(canvas);
      ctx = fit.ctx; width = fit.width; height = fit.height; grid = null;
    }
    function sample() {
      if (!img.complete || !img.naturalWidth) return;
      const cols = Math.ceil(width / CELL_WIDTH), rows = Math.ceil(height / CELL);
      const scratch = document.createElement('canvas');
      scratch.width = cols;
      scratch.height = rows;
      const sctx = scratch.getContext('2d');
      sctx.drawImage(img, 0, -rows * 0.193, cols, rows * (width * img.naturalHeight / img.naturalWidth) / height);
      let data;
      try {
        data = sctx.getImageData(0, 0, cols, rows).data;
      } catch (e) {
        // file:// taints the canvas; fall back to the plain cover
        readable = false;
        return;
      }
      grid = { cols, rows, light: new Float32Array(cols * rows) };
      for (let i = 0; i < cols * rows; i++) {
        grid.light[i] = (data[i * 4] * 0.3 + data[i * 4 + 1] * 0.59 + data[i * 4 + 2] * 0.11) / 255;
      }
    }
    function draw() {
      ctx.clearRect(0, 0, width, height);
      if (img.complete && img.naturalWidth) {
        ctx.drawImage(img, 0, -height * 0.193, width, width * img.naturalHeight / img.naturalWidth);
      }
      if (!readable || lens.strength <= 0.02 || lens.smoothX == null) return;
      if (!grid) sample();
      if (!grid) return;
      const s = lens.strength;
      const radius = Math.min(width, height) * 0.38 * (0.6 + 0.4 * s);
      ctx.save();
      ctx.beginPath();
      ctx.arc(lens.smoothX, lens.smoothY, radius, 0, 7);
      ctx.clip();
      const shade = ctx.createRadialGradient(lens.smoothX, lens.smoothY, radius * 0.55, lens.smoothX, lens.smoothY, radius);
      shade.addColorStop(0, rgba(WARM_BLACK, 0.94 * s));
      shade.addColorStop(1, rgba(WARM_BLACK, 0.25 * s));
      ctx.fillStyle = shade;
      ctx.fillRect(lens.smoothX - radius, lens.smoothY - radius, radius * 2, radius * 2);
      ctx.font = Math.round(CELL * 1.02) + MONO_FONT;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const colStart = Math.max(0, Math.floor((lens.smoothX - radius) / CELL_WIDTH));
      const colEnd = Math.min(grid.cols - 1, Math.ceil((lens.smoothX + radius) / CELL_WIDTH));
      const rowStart = Math.max(0, Math.floor((lens.smoothY - radius) / CELL));
      const rowEnd = Math.min(grid.rows - 1, Math.ceil((lens.smoothY + radius) / CELL));
      for (let row = rowStart; row <= rowEnd; row++) {
        for (let col = colStart; col <= colEnd; col++) {
          const px = col * CELL_WIDTH + CELL_WIDTH / 2, py = row * CELL + CELL / 2;
          const d = Math.hypot(px - lens.smoothX, py - lens.smoothY);
          if (d > radius) continue;
          const light = grid.light[row * grid.cols + col];
          const char = RAMP[Math.min(RAMP.length - 1, Math.floor(light * RAMP.length))];
          if (char === ' ') continue;
          ctx.fillStyle = rgba(AMBER, ((0.25 + 0.75 * light) * Math.min(1, (1 - d / radius) * 2.4) * s).toFixed(3));
          ctx.fillText(char, px, py);
        }
      }
      ctx.restore();
      ctx.strokeStyle = rgba(AMBER, 0.45 * s);
      ctx.setLineDash([2, 5]);
      ctx.beginPath();
      ctx.arc(lens.smoothX, lens.smoothY, radius, 0, 7);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    function loop() {
      lens.smoothX = lens.smoothX == null ? lens.x : lens.smoothX + (lens.x - lens.smoothX) * 0.12;
      lens.smoothY = lens.smoothY == null ? lens.y : lens.smoothY + (lens.y - lens.smoothY) * 0.12;
      lens.strength += ((lens.hover ? 1 : 0) - lens.strength) * 0.055;
      draw();
      if (lens.hover || lens.strength > 0.01) lens.frame = requestAnimationFrame(loop);
      else { lens.frame = 0; lens.strength = 0; draw(); }
    }
    const host = canvas.parentElement;
    if (!reducedMotion) {
      host.addEventListener('pointermove', e => {
        const rect = canvas.getBoundingClientRect();
        lens.x = e.clientX - rect.left;
        lens.y = e.clientY - rect.top;
        if (!lens.hover) {
          lens.hover = true;
          if (lens.smoothX == null) { lens.smoothX = lens.x; lens.smoothY = lens.y; }
        }
        if (!lens.frame) lens.frame = requestAnimationFrame(loop);
      });
      host.addEventListener('pointerleave', () => { lens.hover = false; });
    }
    if (!img.complete) img.addEventListener('load', () => { grid = null; draw(); });
    size();
    draw();
    addEventListener('resize', () => { size(); draw(); });
  }

  /* favourites */
  const favourites = $('[data-favourites]'), dots = $('[data-dots]');
  FAVOURITES.map(DD.product).filter(Boolean).forEach((product, i) => {
    const holder = document.createElement('div');
    holder.innerHTML = DD.ui.productCard(product);
    const card = holder.firstElementChild;
    card.classList.add('reveal');
    card.style.setProperty('--d', (i * 0.08) + 's');
    const media = card.querySelector('.product-card__media');
    const img = media.querySelector('img');
    img.loading = 'eager';
    img.hidden = true;
    const canvas = document.createElement('canvas');
    canvas.className = 'product-card__lens';
    media.removeAttribute('tabindex');
    media.style.top = '0';
    media.style.height = '100%';
    media.appendChild(canvas);
    favourites.appendChild(card);
    lensCover(canvas, img);
    const dot = document.createElement('i');
    if (!i) dot.className = 'is-current';
    dots.appendChild(dot);
  });
  favourites.addEventListener('scroll', () => {
    const left = favourites.getBoundingClientRect().left;
    let best = 0, bestDistance = 1e9;
    [...favourites.children].forEach((card, i) => {
      const distance = Math.abs(card.getBoundingClientRect().left - left);
      if (distance < bestDistance) { bestDistance = distance; best = i; }
    });
    [...dots.children].forEach((dot, i) => dot.classList.toggle('is-current', i === best));
  }, { passive: true });

  $('[data-rate]').dataset.usd = DD.oneOnOneRate;

  /* faq */
  const FAQ = [
    ['How do I get what I buy?',
      'The download appears in your account and stays there. Nothing expires and nothing needs buying twice.'],
    ['Can I use these in client work?', 'Yes. You can use what you buy in client work.'],
    ['What happens when a product is updated?', 'You get access to the updated version in your account.'],
    ['What is a 1 on 1?',
      'An hour with an experienced developer, on your own code and your own questions. Sessions start from ' +
      '<b class="mono" data-usd="' + DD.oneOnOneRate + '"></b> an hour.'],
    ['Which currencies can I pay in?',
      'Pick a currency in the nav and every price follows. The currencies on offer are shown again at checkout.']
  ];
  $('[data-faq]').innerHTML = FAQ.map(([question, answer], i) => `
    <div class="accordion__item${i === 0 ? ' is-open' : ''}">
      <button aria-expanded="${i === 0}">
        <span class="faq__number">0${i + 1}</span><span class="faq__question">${question}</span>
        <span class="faq__icon" aria-hidden="true"></span>
      </button>
      <div class="accordion__panel"><div><p>${answer}</p></div></div>
    </div>`).join('');
  DD.refreshPrices();

  /* terminal: typed when it comes into view */
  const termProduct = DD.product(TERMINAL_PRODUCT);
  const TERMINAL = [
    { kind: 'prompt', text: 'dd search "gutenberg"' },
    { kind: 'dim', text: '  1 result   video   ', price: true },
    { kind: 'prompt', text: 'dd add learning-gutenberg' },
    { kind: 'ok', text: '  added to cart' },
    { kind: 'prompt', text: 'dd checkout' },
    { kind: 'dim', text: '  continue to secure payment' },
    { kind: 'prompt', text: 'dd download' },
    { kind: 'ok', text: '  saved to ~/downloads' }
  ];
  const screen = $('[data-terminal-screen]');
  const CURSOR = '<span class="cursor"></span>';
  const promptHtml = text => '<span class="terminal__prompt">$ </span>' + text;
  function lineHtml(line) {
    if (line.kind === 'prompt') return promptHtml(line.text);
    const html = '<span class="terminal__' + line.kind + '">' + line.text + '</span>';
    if (!line.price) return html;
    return html + '<span class="terminal__ok" data-usd="' + termProduct.price + '">' + DD.money(termProduct.price) + '</span>';
  }
  function typeTerminal() {
    if (reducedMotion) {
      screen.innerHTML = TERMINAL.map(lineHtml).join('\n') + '\n' + CURSOR;
      return;
    }
    let lineIndex = 0, charIndex = 0;
    const done = [];
    (function step() {
      if (lineIndex >= TERMINAL.length) {
        screen.innerHTML = done.join('\n') + '\n' + CURSOR;
        return;
      }
      const line = TERMINAL[lineIndex];
      if (line.kind === 'prompt') {
        charIndex++;
        const typed = promptHtml(line.text.slice(0, charIndex));
        screen.innerHTML = done.concat([typed]).join('\n') + CURSOR;
        if (charIndex >= line.text.length) {
          done.push(typed);
          lineIndex++;
          charIndex = 0;
          setTimeout(step, 380);
        } else {
          setTimeout(step, 28 + Math.random() * 40);
        }
      } else {
        done.push(lineHtml(line));
        lineIndex++;
        screen.innerHTML = done.join('\n') + '\n' + CURSOR;
        setTimeout(step, 520);
      }
    })();
  }

  /* 1 on 1 route map */
  const route = $('[data-route]');
  let routeStart = null;
  // marching squares segment table: which cell edges an iso line crosses
  const SEGMENTS = {
    1: ['left', 'bottom'], 2: ['bottom', 'right'], 3: ['left', 'right'], 4: ['top', 'right'],
    5: ['left', 'top', 'bottom', 'right'], 6: ['top', 'bottom'], 7: ['left', 'top'], 8: ['left', 'top'],
    9: ['top', 'bottom'], 10: ['top', 'right', 'left', 'bottom'], 11: ['top', 'right'], 12: ['left', 'right'],
    13: ['bottom', 'right'], 14: ['left', 'bottom']
  };
  function drawContours(ctx, width, height) {
    const cell = 7, cols = Math.ceil(width / cell) + 1, rows = Math.ceil(height / cell) + 1;
    const field = new Float32Array(cols * rows);
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) field[y * cols + x] = fbm(x * cell / width * 2.4 + 3.1, y * cell / height * 1.7 + 1.7, 4);
    }
    const levels = 14;
    ctx.lineWidth = 1;
    for (let level = 1; level < levels; level++) {
      const iso = 0.25 + level * (0.5 / levels);
      ctx.strokeStyle = rgba(AMBER, (0.07 + 0.22 * (level / levels)).toFixed(3));
      ctx.beginPath();
      for (let y = 0; y < rows - 1; y++) {
        for (let x = 0; x < cols - 1; x++) {
          const a = field[y * cols + x], b = field[y * cols + x + 1];
          const d = field[(y + 1) * cols + x], e = field[(y + 1) * cols + x + 1];
          const index = (a > iso ? 8 : 0) | (b > iso ? 4 : 0) | (e > iso ? 2 : 0) | (d > iso ? 1 : 0);
          if (index === 0 || index === 15) continue;
          const left = x * cell, top = y * cell, t = (p, q) => (iso - p) / (q - p);
          const edges = {
            top: [left + cell * t(a, b), top],
            right: [left + cell, top + cell * t(b, e)],
            bottom: [left + cell * t(d, e), top + cell],
            left: [left, top + cell * t(a, d)]
          };
          const segment = SEGMENTS[index];
          for (let s = 0; s < segment.length; s += 2) {
            ctx.moveTo(edges[segment[s]][0], edges[segment[s]][1]);
            ctx.lineTo(edges[segment[s + 1]][0], edges[segment[s + 1]][1]);
          }
        }
      }
      ctx.stroke();
    }
  }
  function drawRoute(progress) {
    const { ctx, width, height } = fitCanvas(route.querySelector('canvas'));
    ctx.fillStyle = '#100D09';
    ctx.fillRect(0, 0, width, height);
    drawContours(ctx, width, height);
    const start = [width * 0.16, height * 0.74], end = [width * 0.82, height * 0.26];
    const control1 = [width * 0.36, height * 0.18], control2 = [width * 0.58, height * 0.86];
    const bezier = t => {
      const u = 1 - t;
      return [0, 1].map(k => u * u * u * start[k] + 3 * u * u * t * control1[k] + 3 * u * t * t * control2[k] + t * t * t * end[k]);
    };
    ctx.setLineDash([2, 7]);
    ctx.strokeStyle = rgba(SAND, 0.85);
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    const steps = 160;
    for (let i = 0; i <= steps * progress; i++) {
      const p = bezier(i / steps);
      if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]);
    }
    ctx.stroke();
    ctx.setLineDash([]);
    const dot = (p, colour, radius) => {
      ctx.fillStyle = colour;
      ctx.beginPath();
      ctx.arc(p[0], p[1], radius, 0, 7);
      ctx.fill();
    };
    const ring = (p, colour) => {
      ctx.strokeStyle = colour;
      ctx.beginPath();
      ctx.arc(p[0], p[1], 12, 0, 7);
      ctx.stroke();
    };
    dot(start, '#E9B872', 5);
    ring(start, rgba(AMBER, 0.35));
    if (progress >= 1) {
      dot(end, '#9CC59A', 5);
      ring(end, 'rgba(156,197,154,.35)');
    } else {
      dot(bezier(progress), '#F3E6D0', 3.5);
    }
    const startTag = $('[data-route-start]'), endTag = $('[data-route-end]');
    startTag.style.left = start[0] + 'px';
    startTag.style.top = start[1] + 'px';
    endTag.style.left = end[0] + 'px';
    endTag.style.top = end[1] + 'px';
  }
  function runRoute() {
    if (reducedMotion) { drawRoute(1); return; }
    routeStart = performance.now();
    (function frame(now) {
      const p = Math.min(1, (now - routeStart) / 1800);
      drawRoute(1 - Math.pow(1 - p, 3));
      if (p < 1) requestAnimationFrame(frame);
    })(routeStart);
  }
  drawRoute(reducedMotion ? 1 : 0);
  addEventListener('resize', () => drawRoute(routeStart || reducedMotion ? 1 : 0));

  /* contact band */
  function drawContactRidge() {
    const { ctx, width, height } = fitCanvas($('[data-cta] canvas'));
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < 14; i++) {
      const depth = i / 13;
      const baseline = height * 0.55 + height * 0.5 * Math.pow(depth, 1.5), amplitude = height * (0.05 + depth * 0.18);
      ctx.beginPath();
      for (let x = 0; x <= width; x += 6) {
        const y = baseline - ridge(x / width * 2.6 + 9, i * 0.1 + 2) * amplitude;
        if (x) ctx.lineTo(x, y); else ctx.moveTo(x, y);
      }
      ctx.strokeStyle = 'rgba(169,105,42,' + (0.08 + depth * 0.3).toFixed(3) + ')';
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fillStyle = 'rgba(251,248,242,' + (depth * 0.9).toFixed(3) + ')';
      ctx.fill();
    }
  }
  drawContactRidge();
  addEventListener('resize', drawContactRidge);
  if (document.fonts) document.fonts.ready.then(drawContactRidge);

  /* reveals */
  document.querySelectorAll('.reveal-lines').forEach(heading => heading.querySelectorAll('.line').forEach((line, i) => {
    const inner = line.firstElementChild;
    if (!inner.style.getPropertyValue('--d')) inner.style.setProperty('--d', (i * 0.08) + 's');
  }));
  const terminal = $('[data-terminal]');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    if (el.classList.contains('reveal-lines')) el.querySelectorAll('.line').forEach(line => line.classList.add('is-in'));
    else el.classList.add('is-in');
    if (el === terminal) typeTerminal();
    if (el === route) runRoute();
    observer.unobserve(el);
  }), { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });
  document.querySelectorAll('.reveal, .reveal-lines, [data-route], [data-band]').forEach(el => {
    if (!el.closest('#hero')) observer.observe(el);
  });
  new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) hero.start(); else hero.stop();
  }), { threshold: 0 }).observe(hero.section);
  // timeout, not rAF, so the hero still reveals in a background tab
  setTimeout(() => {
    hero.section.classList.add('is-in');
    hero.section.querySelectorAll('.reveal').forEach(el => el.classList.add('is-in'));
  }, 60);

  /* button pulse */
  (function () {
    if (reducedMotion) return;
    const GLYPHS = '{}[]()<>/=;:+*#$%&!?01xX_';
    const randomGlyph = () => GLYPHS[(Math.random() * GLYPHS.length) | 0];
    const canvas = document.createElement('canvas');
    canvas.className = 'home-pulse';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let viewWidth = 0, viewHeight = 0, particles = [], frame = 0, last = 0;
    function size() {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      viewWidth = innerWidth;
      viewHeight = innerHeight;
      canvas.width = viewWidth * dpr;
      canvas.height = viewHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    addEventListener('resize', size);
    // point on the outline at distance t, with its outward normal
    function outlinePoint(rect, t) {
      if (t < rect.width) return { x: rect.left + t, y: rect.top, nx: 0, ny: -1 };
      t -= rect.width;
      if (t < rect.height) return { x: rect.right, y: rect.top + t, nx: 1, ny: 0 };
      t -= rect.height;
      if (t < rect.width) return { x: rect.right - t, y: rect.bottom, nx: 0, ny: 1 };
      t -= rect.width;
      return { x: rect.left, y: rect.bottom - t, nx: -1, ny: 0 };
    }
    function burst(button) {
      const rect = button.getBoundingClientRect();
      const colour = button.closest('.home-section--light') ? '169,105,42' : AMBER;
      const perimeter = 2 * (rect.width + rect.height), count = Math.round(perimeter / 13);
      const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
      for (let i = 0; i < count; i++) {
        const p = outlinePoint(rect, i / count * perimeter);
        const dx = p.x - cx, dy = p.y - cy, length = Math.hypot(dx, dy) || 1, speed = 48 + Math.random() * 36;
        particles.push({
          x: p.x, y: p.y,
          vx: (p.nx * 0.6 + dx / length * 0.4) * speed + (Math.random() - 0.5) * 14,
          vy: (p.ny * 0.6 + dy / length * 0.4) * speed + (Math.random() - 0.5) * 14,
          age: 0, life: 0.55 + Math.random() * 0.4,
          char: randomGlyph(), size: 10 + Math.random() * 4, colour
        });
      }
      if (!frame) frame = requestAnimationFrame(tick);
    }
    function tick(now) {
      const dt = Math.min(0.05, (now - (last || now)) / 1000);
      last = now;
      ctx.clearRect(0, 0, viewWidth, viewHeight);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.age += dt;
        if (p.age > p.life) { particles.splice(i, 1); continue; }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vx *= 0.97;
        p.vy *= 0.97;
        if (Math.random() < 0.06) p.char = randomGlyph();
        ctx.font = p.size + MONO_FONT;
        ctx.fillStyle = rgba(p.colour, (Math.pow(1 - p.age / p.life, 1.8) * 0.8).toFixed(3));
        ctx.fillText(p.char, p.x, p.y);
      }
      if (particles.length) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
        last = 0;
        ctx.clearRect(0, 0, viewWidth, viewHeight);
      }
    }
    document.addEventListener('pointerover', e => {
      const button = e.target.closest('main .btn');
      if (button && !button.contains(e.relatedTarget)) burst(button);
    });
  })();

  /* smooth scroll */
  let lerp = 0.085;
  (function () {
    if (reducedMotion || matchMedia('(hover:none)').matches) return;
    const root = document.documentElement, content = document.getElementById('smooth');
    root.classList.add('has-smooth');
    let position = scrollY;
    const dpr = () => devicePixelRatio || 1;
    const parallax = [...document.querySelectorAll('[data-parallax]')];
    function measure() { document.body.style.height = content.offsetHeight + 'px'; }
    new ResizeObserver(measure).observe(content);
    addEventListener('resize', measure);
    measure();
    function tick() {
      const target = scrollY;
      position += (target - position) * lerp;
      if (Math.abs(target - position) < 0.05) position = target;
      const snapped = Math.round(position * dpr()) / dpr();
      content.style.transform = 'translate3d(0,' + (-snapped) + 'px,0)';
      for (const el of parallax) {
        const host = el.parentElement.getBoundingClientRect();
        if (host.bottom < -200 || host.top > innerHeight + 200) continue;
        const offset = (host.top + host.height / 2 - innerHeight / 2) * (+el.dataset.parallax);
        el.style.transform = 'translate3d(0,' + offset.toFixed(2) + 'px,0)';
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    document.addEventListener('click', e => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const target = document.getElementById(link.getAttribute('href').slice(1));
      if (!target) return;
      e.preventDefault();
      let top = 0, node = target;
      while (node && node !== content) { top += node.offsetTop; node = node.offsetParent; }
      scrollTo(0, target.id === 'top' ? 0 : Math.max(0, top - 72));
    }, true);
  })();

  /* console helpers */
  window.dd = {
    version: () => VERSION,
    state: () => ({ currency: DD.currency, cart: DD.cartIds(), reducedMotion, heroRunning: hero.running }),
    currency: code => DD.setCurrency(String(code).toUpperCase()),
    lerp: value => (value === undefined ? lerp : (lerp = value)),
    remeasure: () => dispatchEvent(new Event('resize'))
  };
})();
