/* ------------------------------------------------------------------ */
/* Diagrams. Each helper returns an inline SVG string that follows the */
/* page theme: geometry in ink, forces in the accent, weight in red.   */
/* ------------------------------------------------------------------ */
const Fig = (() => {
  const INK = 'var(--ink)', MUTE = 'var(--muted)', FORCE = 'var(--accent)', WEIGHT = 'var(--pen)', SOFT = 'var(--accent-soft)';
  const rad = d => d * Math.PI / 180;
  const n2 = v => Math.round(v * 10) / 10;
  const escT = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  function wrap(w, h, body, label){
    return `<figure class="fig"><svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${escT(label)}" font-family="var(--f-body)" font-size="14">${body}</svg></figure>`;
  }
  function text(x, y, s, { col = INK, anchor = 'middle', size = 14, italic = false, weight = 'normal' } = {}){
    return `<text x="${n2(x)}" y="${n2(y)}" fill="${col}" text-anchor="${anchor}" dominant-baseline="middle" font-size="${size}" font-weight="${weight}"${italic ? ' font-style="italic"' : ''}>${escT(s)}</text>`;
  }
  function line(x1, y1, x2, y2, { col = INK, w = 1.6, dash = '' } = {}){
    return `<line x1="${n2(x1)}" y1="${n2(y1)}" x2="${n2(x2)}" y2="${n2(y2)}" stroke="${col}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''} stroke-linecap="round"/>`;
  }
  // Arrow in SVG coordinates, with a filled head at (x2, y2).
  function arrow(x1, y1, x2, y2, col = FORCE, w = 2.2, dash = ''){
    const a = Math.atan2(y2 - y1, x2 - x1), hl = 10, hw = 5;
    const bx = x2 - hl * Math.cos(a), by = y2 - hl * Math.sin(a);
    const p1 = [bx + hw * Math.sin(a), by - hw * Math.cos(a)], p2 = [bx - hw * Math.sin(a), by + hw * Math.cos(a)];
    return line(x1, y1, bx, by, { col, w, dash }) + `<polygon points="${n2(x2)},${n2(y2)} ${n2(p1[0])},${n2(p1[1])} ${n2(p2[0])},${n2(p2[1])}" fill="${col}"/>`;
  }
  // Arc for an angle at (cx, cy) between directions a1 and a2 (degrees, anticlockwise from +x, maths sense).
  function arc(cx, cy, r, a1, a2, label, { col = MUTE, lr = r + 14 } = {}){
    const x1 = cx + r * Math.cos(rad(a1)), y1 = cy - r * Math.sin(rad(a1));
    const x2 = cx + r * Math.cos(rad(a2)), y2 = cy - r * Math.sin(rad(a2));
    const large = Math.abs(a2 - a1) > 180 ? 1 : 0, sweep = a2 > a1 ? 0 : 1;
    const mid = (a1 + a2) / 2;
    return `<path d="M${n2(x1)},${n2(y1)} A${r},${r} 0 ${large} ${sweep} ${n2(x2)},${n2(y2)}" fill="none" stroke="${col}" stroke-width="1.4"/>`
      + (label ? text(cx + lr * Math.cos(rad(mid)), cy - lr * Math.sin(rad(mid)), label, { col, size: 13 }) : '');
  }
  // Label for a resolved component: "30 N" at 20° gives "30 cos 20°"; "mg" on slope α gives "mg sin α".
  const compLabel = (lab, fn, ang) => `${String(lab).replace(/\s*N$/, '')} ${fn} ${ang}`;
  // Dashed component arrow with a label placed off to one side of its middle.
  function comp(x1, y1, x2, y2, lab, side, col){
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, L = Math.hypot(x2 - x1, y2 - y1) || 1;
    const ox = -(y2 - y1) / L * side, oy = (x2 - x1) / L * side;
    const dx = String(lab).length * 3.1 * Math.abs(ox / Math.abs(side || 1));
    return arrow(x1, y1, x2, y2, col, 1.6, '5 4') + text(mx + ox + Math.sign(ox) * dx, my + oy, lab, { col, size: 12 });
  }
  function rightAngle(x, y, d1, d2, s = 10){
    const ax = x + s * Math.cos(rad(d1)), ay = y - s * Math.sin(rad(d1));
    const bx = x + s * Math.cos(rad(d2)), by = y - s * Math.sin(rad(d2));
    const cx = ax + s * Math.cos(rad(d2)), cy = ay - s * Math.sin(rad(d2));
    return `<path d="M${n2(ax)},${n2(ay)} L${n2(cx)},${n2(cy)} L${n2(bx)},${n2(by)}" fill="none" stroke="${MUTE}" stroke-width="1.3"/>`;
  }
  // A force arrow from (x, y) in direction deg, with its label beyond the tip.
  function force(x, y, deg, len, label, col = FORCE){
    const x2 = x + len * Math.cos(rad(deg)), y2 = y - len * Math.sin(rad(deg));
    const off = 12 + String(label || '').length * 3.6 * Math.abs(Math.cos(rad(deg))) + 6 * Math.abs(Math.sin(rad(deg)));
    const lx = x + (len + off) * Math.cos(rad(deg)), ly = y - (len + off) * Math.sin(rad(deg));
    return arrow(x, y, x2, y2, col) + (label ? text(lx, ly, label, { col, weight: 'bold' }) : '');
  }

  /* Particle with forces. forces: [{deg, label, len, weight:true}], angles: [{from, to, label, r}], ref: dashed axes. */
  function particle({ forces = [], angles = [], ref = false, w = 340, h = 230, label = 'Force diagram', mass = '' } = {}){
    const cx = w / 2, cy = h / 2;
    let body = '';
    if (ref) body += line(cx - 100, cy, cx + 100, cy, { col: MUTE, w: 1, dash: '4 4' }) + line(cx, cy - 90, cx, cy + 90, { col: MUTE, w: 1, dash: '4 4' });
    angles.forEach(a => { body += arc(cx, cy, a.r || 34, a.from, a.to, a.label); });
    forces.forEach(f => { body += force(cx, cy, f.deg, f.len || 72, f.label, f.weight ? WEIGHT : FORCE); });
    body += `<circle cx="${cx}" cy="${cy}" r="6" fill="${INK}"/>`;
    if (mass) body += text(cx + 14, cy + 14, mass, { col: INK, anchor: 'start', size: 13 });
    return wrap(w, h, body, label);
  }

  /* Particle hanging from strings fixed to a ceiling. strings: [{deg, label}] measured from +x (e.g. 150 = up-left). */
  function hanging({ strings = [], extra = [], weightLabel = 'mg', angles = [], w = 340, h = 230, label = 'Particle held by strings' } = {}){
    const cx = w / 2, top = 30;
    // Keep both fixed points on the ceiling inside the picture: shallow strings need a smaller drop.
    const drop = Math.min(120, ...strings.map(st => (cx - 24) * Math.tan(rad(st.deg > 90 ? 180 - st.deg : st.deg))));
    const cy = top + Math.max(drop, 60);
    let body = line(20, top, w - 20, top, { col: INK, w: 2 });
    for (let x = 26; x < w - 20; x += 12) body += line(x, top, x - 8, top - 8, { col: MUTE, w: 1 });
    strings.forEach(s => {
      const t = (cy - top) / Math.sin(rad(s.deg));
      const ex = cx + t * Math.cos(rad(s.deg));
      body += line(cx, cy, ex, top, { col: INK, w: 1.4 });
      body += force(cx, cy, s.deg, 58, s.label);
      if (s.angleLabel){
        const [a1, a2] = s.deg > 90 ? [s.deg - 180, 0] : [180, s.deg + 180];
        body += arc(ex, top, 26, a1, a2, s.angleLabel, { lr: 42 });
      }
    });
    extra.forEach(f => { body += force(cx, cy, f.deg, f.len || 60, f.label); });
    angles.forEach(a => { body += arc(cx, cy, a.r || 30, a.from, a.to, a.label); });
    body += force(cx, cy, 270, 52, weightLabel, WEIGHT);
    body += `<circle cx="${cx}" cy="${cy}" r="6" fill="${INK}"/>`;
    return wrap(w, cy + 80, body, label);
  }

  /* Inclined plane rising to the right at deg. forces use dir: 'up' | 'down' | 'normal' | 'weight' | 'horiz' | {rel: β} (β above the slope).
     pulley: {label, weightLabel} hangs a second particle over a pulley at the top. */
  function slope({ deg = 30, angleLabel, forces = [], pulley = null, label = 'Particle on an inclined plane', motion = '', components = true } = {}){
    const L = 300, A = [24, 0];
    const w = 360, hgt = L * Math.sin(rad(deg));
    const h = Math.max(150, hgt + (pulley ? 120 : 70));
    const base = h - 22;
    A[1] = base;
    const C = [A[0] + L * Math.cos(rad(deg)), base - hgt];
    let body = `<polygon points="${n2(A[0])},${n2(base)} ${n2(C[0])},${n2(base)} ${n2(C[0])},${n2(C[1])}" fill="${SOFT}" stroke="${INK}" stroke-width="1.6"/>`;
    body += arc(A[0], base, 38, 0, deg, angleLabel || (deg + '°'), { lr: 54 });
    const f = pulley ? 0.55 : 0.5;
    const P = [A[0] + f * L * Math.cos(rad(deg)), base - f * L * Math.sin(rad(deg))];
    const nx = -Math.sin(rad(deg)), ny = Math.cos(rad(deg));
    const B = [P[0] + 13 * nx, P[1] - 13 * ny]; // block centre, sitting on the surface
    body += `<rect x="${n2(B[0] - 20)}" y="${n2(B[1] - 13)}" width="40" height="26" rx="3" fill="var(--paper)" stroke="${INK}" stroke-width="1.6" transform="rotate(${-deg} ${n2(B[0])} ${n2(B[1])})"/>`;
    const dirDeg = d => d === 'up' ? deg : d === 'down' ? deg + 180 : d === 'normal' ? deg + 90 : d === 'weight' ? 270 : d === 'horiz' ? 0 : d === 'horizL' ? 180 : (d && d.rel != null) ? deg + d.rel : Number(d);
    const ang = angleLabel || (deg + '°');
    forces.forEach(fc => {
      const dd = dirDeg(fc.dir);
      const len = fc.len || (fc.dir === 'weight' ? 62 : 58);
      if (components && fc.dir === 'weight' && fc.label){
        // weight = (component into the plane) + (component down the slope): draw them as a dashed triangle
        const c1 = len * Math.cos(rad(deg)), qx = B[0] + c1 * Math.sin(rad(deg)), qy = B[1] + c1 * Math.cos(rad(deg));
        body += comp(B[0], B[1], qx, qy, compLabel(fc.label, 'cos', ang), -14, WEIGHT);
        body += comp(qx, qy, B[0], B[1] + len, compLabel(fc.label, 'sin', ang), -14, WEIGHT);
      }
      if (components && fc.dir === 'horiz' && fc.label){
        // a horizontal push = (up the slope) + (into the plane)
        const c1 = len * Math.cos(rad(deg)), qx = B[0] + c1 * Math.cos(rad(deg)), qy = B[1] - c1 * Math.sin(rad(deg));
        body += comp(B[0], B[1], qx, qy, compLabel(fc.label, 'cos', ang), -18, FORCE);
        body += comp(qx, qy, B[0] + len, B[1], compLabel(fc.label, 'sin', ang), -16, FORCE);
      }
      body += force(B[0], B[1], dd, len, fc.label, fc.dir === 'weight' ? WEIGHT : FORCE);
      if (fc.dir && fc.dir.rel && fc.relLabel){
        body += line(B[0], B[1], B[0] + 70 * Math.cos(rad(deg)), B[1] - 70 * Math.sin(rad(deg)), { col: MUTE, w: 1, dash: '4 4' });
        body += arc(B[0], B[1], 30, deg, deg + fc.dir.rel, fc.relLabel, { lr: 44 });
      }
    });
    if (motion) body += text(B[0] - 70 * Math.cos(rad(deg)) + 18 * nx, B[1] + 70 * Math.sin(rad(deg)) - 40 * ny, motion, { col: MUTE, size: 12 });
    if (pulley){
      const pr = 10, pc = [C[0] - 2, C[1] - 4];
      body += `<circle cx="${n2(pc[0])}" cy="${n2(pc[1])}" r="${pr}" fill="var(--paper)" stroke="${INK}" stroke-width="1.6"/>`;
      const sx = B[0] + 20 * Math.cos(rad(deg)), sy = B[1] - 20 * Math.sin(rad(deg));
      body += line(sx, sy, pc[0] - pr * Math.sin(rad(deg)), pc[1] - pr * Math.cos(rad(deg)), { col: INK, w: 1.3 });
      const hx = pc[0] + pr, hy = pc[1] + 64;
      body += line(hx, pc[1], hx, hy - 12, { col: INK, w: 1.3 });
      body += `<rect x="${n2(hx - 12)}" y="${n2(hy - 12)}" width="24" height="24" rx="3" fill="var(--paper)" stroke="${INK}" stroke-width="1.6"/>`;
      if (pulley.name) body += text(hx + 22, hy, pulley.name, { anchor: 'start', size: 13 });
      body += force(hx, hy + 12, 270, 30, pulley.weightLabel || 'mg', WEIGHT);
      if (pulley.tension) body += force(hx, hy - 12, 90, 26, '', FORCE) + text(hx - 14, hy - 34, pulley.tension, { col: FORCE, weight: 'bold', anchor: 'end' });
      if (pulley.blockName) body += text(B[0] - 30 * nx, B[1] + 30 * ny, pulley.blockName, { size: 13 });
    }
    return wrap(w, h, body, label);
  }

  /* Flat ground with a block; forces as in particle(). */
  function ground({ forces = [], angles = [], label = 'Block on horizontal ground', rough = false, motion = '' } = {}){
    const w = 360, h = 210, gy = 150, bx = 150, by = gy - 16;
    let body = line(20, gy, w - 20, gy, { col: INK, w: 2 });
    if (rough) for (let x = 26; x < w - 20; x += 12) body += line(x, gy, x - 8, gy + 8, { col: MUTE, w: 1 });
    body += `<rect x="${bx - 26}" y="${gy - 32}" width="52" height="32" rx="3" fill="var(--paper)" stroke="${INK}" stroke-width="1.6"/>`;
    angles.forEach(a => {
      body += line(bx, by, bx + 70, by, { col: MUTE, w: 1, dash: '4 4' });
      body += arc(bx, by, a.r || 34, a.from, a.to, a.label);
    });
    forces.forEach(f => {
      const angled = !f.weight && f.label && f.deg % 90 !== 0 && f.components !== false;
      const len = f.len || 64;
      if (angled){
        const ang = (angles[0] && angles[0].label) || (Math.abs(f.deg) + '°');
        const hx = bx + len * Math.cos(rad(f.deg)), ty = by - len * Math.sin(rad(f.deg));
        body += arrow(bx, by, hx, by, FORCE, 1.6, '5 4') + text(hx + 4, by + 13, compLabel(f.label, 'cos', ang), { col: FORCE, size: 12, anchor: 'start' });
        body += arrow(hx, by, hx, ty, FORCE, 1.6, '5 4') + text(hx + 8, (by + ty) / 2 + 2, compLabel(f.label, 'sin', ang), { col: FORCE, size: 12, anchor: 'start' });
      }
      body += force(bx, by, f.deg, len, f.label, f.weight ? WEIGHT : FORCE);
    });
    if (motion) body += arrow(28, 26, 88, 26, MUTE, 1.4) + text(96, 26, motion, { col: MUTE, size: 12, anchor: 'start' });
    return wrap(w, h, body, label);
  }

  /* Geometry: points {A:[x,y]} in maths coordinates (y up, roughly 0..10), segments 'AB BC', right angles, angle marks and side labels. */
  function geo({ pts, segs, labels = {}, right = [], angles = [], sides = [], label = 'Diagram', w = 320, h = 220, pad = 30 } = {}){
    const xs = Object.values(pts).map(p => p[0]), ys = Object.values(pts).map(p => p[1]);
    const minx = Math.min(...xs), maxx = Math.max(...xs), miny = Math.min(...ys), maxy = Math.max(...ys);
    const s = Math.min((w - 2 * pad) / (maxx - minx || 1), (h - 2 * pad) / (maxy - miny || 1));
    const ox = (w - s * (maxx - minx)) / 2, oy = (h - s * (maxy - miny)) / 2;
    const P = k => [ox + s * (pts[k][0] - minx), h - oy - s * (pts[k][1] - miny)];
    const ang = (a, b) => { const p = P(a), q = P(b); return Math.atan2(-(q[1] - p[1]), q[0] - p[0]) * 180 / Math.PI; };
    let body = '';
    segs.split(' ').forEach(sg => { const p = P(sg[0]), q = P(sg[1]); body += line(p[0], p[1], q[0], q[1], { col: INK, w: 1.8 }); });
    right.forEach(r => { const p = P(r[1]); body += rightAngle(p[0], p[1], ang(r[1], r[0]), ang(r[1], r[2]), 11); });
    angles.forEach(a => {
      const p = P(a.at); let d1 = ang(a.at, a.from), d2 = ang(a.at, a.to);
      if (d2 < d1) [d1, d2] = [d2, d1];
      if (d2 - d1 > 180) { const t = d1; d1 = d2; d2 = t + 360; }
      body += arc(p[0], p[1], a.r || 26, d1, d2, a.label, { lr: (a.r || 26) + 15 });
    });
    sides.forEach(sd => { const p = P(sd.on[0]), q = P(sd.on[1]); const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
      const dx = q[0] - p[0], dy = q[1] - p[1], L = Math.hypot(dx, dy) || 1; const off = sd.off || 14;
      body += text(mx - dy / L * off, my + dx / L * off, sd.label, { col: MUTE, size: 13 }); });
    Object.keys(pts).forEach(k => { const p = P(k); const o = labels[k] || [0, 0];
      body += text(p[0] + o[0], p[1] + o[1], k, { weight: 'bold', size: 14 }); });
    return wrap(w, h, body, label);
  }

  /* Graph of y = f(x). fns: [{f, label}], ticks as [value, text]. */
  let graphId = 0;
  function graph({ fns = [], x0, x1, y0, y1, xticks = [], yticks = [], hlines = [], vlines = [], regions = [], points = [], texts = [], segs = [], circles = [], equal = false, xlab = 'x', ylab = 'y', w = 380, h = 230, label = 'Graph' } = {}){
    const L = 44, Rr = 16, T = 14, B = 34;
    if (equal) h = Math.round(T + B + (y1 - y0) * (w - L - Rr) / (x1 - x0));   // same scale on both axes, so circles look round
    const X = x => L + (x - x0) / (x1 - x0) * (w - L - Rr), Y = y => T + (y1 - y) / (y1 - y0) * (h - T - B);
    let body = ''; const cid = 'gc' + (++graphId);
    const clampY = v => Math.min(Math.max(v, y0 - (y1 - y0)), y1 + (y1 - y0));
    // Shaded regions between two boundary functions (or the plot edges) over [from, to].
    regions.forEach(rg => {
      const a = rg.from != null ? rg.from : x0, b = rg.to != null ? rg.to : x1, N = 160;
      const lo = rg.lo || (() => y0), hi = rg.hi || (() => y1);
      let d = '';
      for (let k = 0; k <= N; k++){ const xx = a + (b - a) * k / N; d += (k ? 'L' : 'M') + n2(X(xx)) + ',' + n2(Y(Math.max(y0, Math.min(y1, hi(xx))))); }
      for (let k = N; k >= 0; k--){ const xx = a + (b - a) * k / N; d += 'L' + n2(X(xx)) + ',' + n2(Y(Math.max(y0, Math.min(y1, lo(xx))))); }
      body += `<path d="${d}Z" fill="var(--accent)" fill-opacity="0.18" stroke="none"/>`;
      if (rg.label) body += text(X(rg.lx), Y(rg.ly), rg.label, { col: FORCE, size: 13, weight: 'bold' });
    });
    yticks.forEach(([v, s]) => { body += line(L, Y(v), w - Rr, Y(v), { col: 'var(--line)', w: 1 }) + text(L - 6, Y(v), s, { col: MUTE, anchor: 'end', size: 11 }); });
    xticks.forEach(([v, s]) => { body += line(X(v), T, X(v), h - B, { col: 'var(--line)', w: 1 }) + text(X(v), h - B + 14, s, { col: MUTE, size: 11 }); });
    const zy = Math.min(Math.max(Y(0), T), h - B), zx = Math.min(Math.max(X(0), L), w - Rr);
    body += line(L, zy, w - Rr, zy, { col: INK, w: 1.3 }) + line(zx, T, zx, h - B, { col: INK, w: 1.3 });
    body += text(w - Rr, zy - 10, xlab, { col: MUTE, anchor: 'end', size: 12, italic: true }) + text(zx + 8, T + 4, ylab, { col: MUTE, anchor: 'start', size: 12, italic: true });
    hlines.forEach(hl => { body += line(L, Y(hl.y), w - Rr, Y(hl.y), { col: WEIGHT, w: 1.3, dash: '5 4' }) + (hl.label ? text(w - Rr - 2, Y(hl.y) - 9, hl.label, { col: WEIGHT, anchor: 'end', size: 11 }) : ''); });
    vlines.forEach(vl => { body += line(X(vl.x), T, X(vl.x), h - B, { col: vl.col || WEIGHT, w: 1.6, dash: vl.dash ? '5 4' : '' }) + (vl.label ? text(X(vl.x) + 4, T + 8, vl.label, { col: vl.col || WEIGHT, anchor: 'start', size: 11 }) : ''); });
    fns.forEach((fn, i) => {
      let d = '', pen = false, prev = null;
      const a = fn.from != null ? fn.from : x0, b = fn.to != null ? fn.to : x1;
      for (let k = 0; k <= 600; k++){
        const x = a + (b - a) * k / 600, y = fn.f(x);
        if (!isFinite(y) || y < y0 - (y1 - y0) || y > y1 + (y1 - y0)){ pen = false; continue; }
        if (pen && Math.abs(y - prev) > (y1 - y0)) pen = false;   // jumped across an asymptote
        d += (pen ? 'L' : 'M') + n2(X(x)) + ',' + n2(Y(y)); pen = true; prev = y;
      }
      const col = fn.col || (i ? WEIGHT : FORCE);
      body += `<path d="${d}" fill="none" stroke="${col}" stroke-width="2.2" clip-path="url(#${cid})"${fn.dash ? ' stroke-dasharray="6 5"' : ''}/>`;
      if (fn.label) body += text(X(fn.lx != null ? fn.lx : x1) - 4, Math.max(T + 8, Y(fn.ly != null ? fn.ly : fn.f(x1)) - 12), fn.label, { col, anchor: 'end', size: 12 });
    });
    circles.forEach(cc => { body += `<ellipse cx="${n2(X(cc.x))}" cy="${n2(Y(cc.y))}" rx="${n2(cc.r * (w - L - Rr) / (x1 - x0))}" ry="${n2(cc.r * (h - T - B) / (y1 - y0))}" fill="none" stroke="${cc.col || FORCE}" stroke-width="2.2" clip-path="url(#${cid})"${cc.dash ? ' stroke-dasharray="6 5"' : ''}/>`; });
    segs.forEach(sg => { body += sg.arrow ? arrow(X(sg.x1), Y(sg.y1), X(sg.x2), Y(sg.y2), sg.col || MUTE, sg.w || 2) : line(X(sg.x1), Y(sg.y1), X(sg.x2), Y(sg.y2), { col: sg.col || MUTE, w: sg.w || 1.6, dash: sg.dash ? '5 4' : '' }); });
    texts.forEach(tx => { body += text(X(tx.x), Y(tx.y), tx.label, { col: tx.col || INK, size: tx.size || 12, anchor: tx.anchor || 'middle' }); });
    points.forEach(p => { body += `<circle cx="${n2(X(p.x))}" cy="${n2(Y(p.y))}" r="4" fill="${INK}"/>` + (p.label ? text(X(p.x) + (p.dx || 0), Y(p.y) + (p.dy || -14), p.label, { size: 12 }) : ''); });
    return wrap(w, h, `<defs><clipPath id="${cid}"><rect x="${L}" y="${T}" width="${w - L - Rr}" height="${h - T - B}"/></clipPath></defs><g>${body}</g>`, label);
  }

  return { particle, hanging, slope, ground, geo, graph };
})();
