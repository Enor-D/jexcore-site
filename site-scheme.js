/* JexCore — animated field-site scheme (Digital section).
   Schematic only: no real coordinates or live data. The water truck shuttles rig ⇄ water source,
   the crew vehicle runs base ⇄ rig; Starlink beams and GPS trails follow them. Demo timing, not real time. */
(() => {
  'use strict';
  const svg = document.getElementById('siteScheme');
  if (!svg) return;
  const NS = 'http://www.w3.org/2000/svg';
  const $ = id => document.getElementById(id);
  const routeW = $('ssRouteWater'), routeB = $('ssRouteBase');
  const truck = $('ssWater'), car = $('ssCar'), beams = $('ssBeams'), trail = $('ssTrail'), status = $('ssStatus');
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const SAT = [340, 46], BASE = [560, 312], RIG = [496, 156];
  const LW = routeW.getTotalLength(), LB = routeB.getTotalLength();
  const T = {
    ru: { go: 'Водовоз: едет к источнику воды', fill: 'Водовоз: набирает воду', back: 'Водовоз: везёт воду на буровую', unload: 'Водовоз: сливает воду у буровой' },
    en: { go: 'Water truck: driving to the water source', fill: 'Water truck: filling up', back: 'Water truck: delivering water to the rig', unload: 'Water truck: unloading at the rig' }
  };
  const lang = () => (document.documentElement.lang === 'en' ? 'en' : 'ru');

  // beams: satellite → base, rig, truck, car
  const beam = () => { const l = document.createElementNS(NS, 'line'); l.setAttribute('x1', SAT[0]); l.setAttribute('y1', SAT[1] + 8); beams.appendChild(l); return l; };
  const bBase = beam(), bRig = beam(), bTruck = beam(), bCar = beam();
  const aim = (l, p) => { l.setAttribute('x2', p[0]); l.setAttribute('y2', p[1]); };
  aim(bBase, [BASE[0], BASE[1] - 22]); aim(bRig, [RIG[0], RIG[1] - 20]);

  // GPS trail dots behind the truck
  const dots = Array.from({ length: 9 }, () => { const c = document.createElementNS(NS, 'circle'); c.setAttribute('r', '2.4'); trail.appendChild(c); return c; });
  const history = [];

  // water truck cycle (s): drive to water, fill, drive back, unload
  const W = { drive: 7, stop: 2.5 }, WC = 2 * W.drive + 2 * W.stop;
  // crew vehicle cycle (s): base → rig, wait, rig → base, wait
  const C = { drive: 4.5, wait: 3.5, home: 5 }, CC = 2 * C.drive + C.wait + C.home;
  const ease = t => t * t * (3 - 2 * t);
  const at = (path, len, f) => { const p = path.getPointAtLength(len * f); return [p.x, p.y]; };
  const place = (g, p, dir) => {
    g.setAttribute('transform', `translate(${p[0].toFixed(1)} ${p[1].toFixed(1)})`);
    g.querySelector('.ss-flip').setAttribute('transform', dir < 0 ? 'scale(-1 1)' : '');
  };

  let t0 = null, lastStatus = '', running = false, raf = 0, lastTrail = 0;
  function frame(now) {
    if (t0 === null) t0 = now;
    const t = (now - t0) / 1000;
    // truck along the water route: path runs rig (0) → water (1)
    let x = t % WC, f, dir, key;
    if (x < W.drive) { f = ease(x / W.drive); dir = -1; key = 'go'; }
    else if ((x -= W.drive) < W.stop) { f = 1; dir = 1; key = 'fill'; }
    else if ((x -= W.stop) < W.drive) { f = 1 - ease(x / W.drive); dir = 1; key = 'back'; }
    else { f = 0; dir = -1; key = 'unload'; }
    const pt = at(routeW, LW, f);
    // parked: stand beside the icon, not on it (offset eases in/out over the last/first 15 % of the route)
    const OW = [46, -12], OR = [-58, 26], ramp = (v, a, b) => Math.min(1, Math.max(0, (v - a) / (b - a)));
    const kw = ramp(f, 0.85, 1), kr = ramp(0.15 - f, 0, 0.15);
    const tp = [pt[0] + OW[0] * kw + OR[0] * kr, pt[1] + OW[1] * kw + OR[1] * kr];
    place(truck, tp, dir); aim(bTruck, [tp[0], tp[1] - 22]);
    // car along the base route: path runs base (0) → rig (1)
    let y = t % CC, g, cdir;
    if (y < C.drive) { g = ease(y / C.drive); cdir = -1; }
    else if ((y -= C.drive) < C.wait) { g = 1; cdir = -1; }
    else if ((y -= C.wait) < C.drive) { g = 1 - ease(y / C.drive); cdir = 1; }
    else { g = 0; cdir = 1; }
    const pc = at(routeB, LB, g);
    const cp = [pc[0] + (g === 1 ? 2 : 0), pc[1] + (g === 1 ? 46 : g === 0 ? -56 : 0)];
    place(car, cp, cdir); aim(bCar, [cp[0], cp[1] - 20]);
    // trail
    if (now - lastTrail > 260) { history.unshift(tp); history.length = Math.min(history.length, dots.length); lastTrail = now; }
    dots.forEach((d, i) => { const p = history[i]; if (!p) { d.setAttribute('opacity', 0); return; } d.setAttribute('cx', p[0]); d.setAttribute('cy', p[1]); d.setAttribute('opacity', (0.55 * (1 - i / dots.length)).toFixed(2)); });
    const s = T[lang()][key];
    if (s !== lastStatus) { status.textContent = s; lastStatus = s; }
    if (running) raf = requestAnimationFrame(frame);
  }
  function start() { if (running || reduceMotion) return; running = true; raf = requestAnimationFrame(frame); }
  function stop() { running = false; cancelAnimationFrame(raf); }
  // static layout for reduced motion (truck halfway to the water, car at the base)
  if (reduceMotion) { t0 = 0; frame(3500); } else frame(performance.now());

  // view switch: scheme ⇄ map recording
  const panes = document.querySelectorAll('[data-pane-id]');
  const tabs = document.querySelectorAll('.ops-switch [data-pane]');
  const video = document.getElementById('opsMapVideo');
  let view = 'scheme', visible = false;
  tabs.forEach(b => b.addEventListener('click', () => {
    view = b.dataset.pane;
    tabs.forEach(x => { const on = x === b; x.classList.toggle('active', on); x.setAttribute('aria-selected', on ? 'true' : 'false'); });
    panes.forEach(p => { p.hidden = p.dataset.paneId !== view; });
    if (view === 'video') { stop(); if (video) { video.preload = 'auto'; video.play().catch(() => {}); } }
    else { if (video) video.pause(); if (visible) start(); }
  }));
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(es => es.forEach(e => {
      visible = e.isIntersecting;
      if (visible && view === 'scheme') start(); else stop();
      if (!visible && video) video.pause();
    }), { threshold: 0.2 }).observe(svg);
  } else start();
})();
