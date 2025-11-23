import React, { useEffect, useRef } from 'react';

// High-performance, canvas-based mouse glow and particles
// Uses CSS design tokens (HSL) pulled from :root to avoid hardcoded colors
// Pointer-events are disabled so it never blocks interactions

const getCssVar = (name: string, fallback: string) => {
  if (typeof window === 'undefined') return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
};

const hslToRgba = (hsl: string, alpha = 1) => {
  // Expecting format "hsl(H S% L%)" or "H S% L%" from tokens
  const cleaned = hsl.replace(/hsl\(|\)/g, '').trim();
  const parts = cleaned.split(/\s+/);
  if (parts.length < 3) return `rgba(14,118,168,${alpha})`;
  const [h, s, l] = parts;
  return `hsla(${h}, ${s}, ${l}, ${alpha})`;
};

const MouseGlowCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>();
  const dprRef = useRef<number>(1);

  // Runtime state (not triggering React re-renders)
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0, moving: false, clicking: false });
  const lastMoveT = useRef(0);
  const lastT = useRef(0);
  const trail = useRef<{ x: number; y: number }[]>([]);
  const particles = useRef<
    {
      x: number; y: number; vx: number; vy: number; life: number; max: number; size: number; hueShift: number;
    }[]
  >([]);

  // Colors from design system
  const primaryHsl = useRef(getCssVar('--primary', '210 90% 45%'));
  const accentHsl = useRef(getCssVar('--accent', '190 90% 45%'));

  const resize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    dprRef.current = dpr;
    const { innerWidth: w, innerHeight: h } = window;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
  };

  const spawnParticles = (x: number, y: number, count = 10) => {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 2.5; // modest speeds
      particles.current.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 40 + Math.random() * 20,
        max: 60,
        size: 1 + Math.random() * 2.5,
        hueShift: (Math.random() - 0.5) * 20,
      });
    }
    // Cap particle count to prevent buildup
    if (particles.current.length > 160) particles.current.splice(0, particles.current.length - 160);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resize();

    const onPointerMove = (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      mouse.current.tx = x;
      mouse.current.ty = y;
      mouse.current.moving = true;
      lastMoveT.current = performance.now();
      // Keep short trail of last positions
      trail.current.push({ x, y });
      if (trail.current.length > 10) trail.current.shift();
    };

    const onPointerDown = (e: PointerEvent) => {
      mouse.current.clicking = true;
      spawnParticles(e.clientX, e.clientY, 12);
    };

    const onPointerUp = () => {
      mouse.current.clicking = false;
      // small sparkle
      spawnParticles(mouse.current.tx, mouse.current.ty, 4);
    };

    const onResize = () => resize();

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('resize', onResize);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize mouse to center for first paint
    mouse.current.x = window.innerWidth / 2;
    mouse.current.y = window.innerHeight / 2;
    mouse.current.tx = mouse.current.x;
    mouse.current.ty = mouse.current.y;

    const render = (t: number) => {
      const dpr = dprRef.current;
      const width = canvas.width;
      const height = canvas.height;

      // Smoothly approach target to reduce jitter
      const smoothing = 0.22; // higher = snappier
      mouse.current.x += (mouse.current.tx - mouse.current.x) * smoothing;
      mouse.current.y += (mouse.current.ty - mouse.current.y) * smoothing;

      ctx.clearRect(0, 0, width, height);

      // Background fade for subtle motion blur (clears artifacts smoothly)
      ctx.fillStyle = 'rgba(0,0,0,0)';
      ctx.fillRect(0, 0, width, height);

      const mx = mouse.current.x * dpr;
      const my = mouse.current.y * dpr;

      // Colors (hsla strings) from CSS tokens
      const primary = hslToRgba(primaryHsl.current, mouse.current.clicking ? 0.35 : mouse.current.moving ? 0.22 : 0.12);
      const primarySoft = hslToRgba(primaryHsl.current, 0.06);
      const accent = hslToRgba(accentHsl.current, mouse.current.clicking ? 0.28 : mouse.current.moving ? 0.16 : 0.08);

      // Main glow
      const g1 = ctx.createRadialGradient(mx, my, 0, mx, my, 140 * dpr);
      g1.addColorStop(0, primary);
      g1.addColorStop(0.45, primarySoft);
      g1.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g1;
      ctx.beginPath();
      ctx.arc(mx, my, 140 * dpr, 0, Math.PI * 2);
      ctx.fill();

      // Secondary ripple
      const r2 = mouse.current.clicking ? 50 : mouse.current.moving ? 38 : 32;
      const g2 = ctx.createRadialGradient(mx, my, 0, mx, my, r2 * dpr);
      g2.addColorStop(0, accent);
      g2.addColorStop(0.75, 'rgba(0,0,0,0)');
      ctx.fillStyle = g2;
      ctx.beginPath();
      ctx.arc(mx, my, r2 * dpr, 0, Math.PI * 2);
      ctx.fill();

      // Orbital dots (3)
      const time = t * 0.001;
      for (let i = 0; i < 3; i++) {
        const R = (42 + i * 16) * dpr;
        const ox = mx + Math.sin(time * (0.9 + i * 0.1) + i) * R;
        const oy = my + Math.cos(time * (0.9 + i * 0.1) + i) * R;
        ctx.fillStyle = i % 2 === 0 ? hslToRgba(primaryHsl.current, 0.7) : hslToRgba(accentHsl.current, 0.7);
        ctx.beginPath();
        ctx.arc(ox, oy, 2 * dpr, 0, Math.PI * 2);
        ctx.fill();
      }

      // Trail dots
      const len = trail.current.length;
      for (let i = 0; i < len; i++) {
        const p = trail.current[i];
        const alpha = (i / len) * 0.5;
        ctx.fillStyle = hslToRgba(primaryHsl.current, alpha);
        ctx.beginPath();
        ctx.arc(p.x * dpr, p.y * dpr, (1.5 + i * 0.15) * dpr, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw click particles
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985; // friction
        p.vy = p.vy * 0.985 + 0.06; // gravity
        p.life -= 1;
        if (p.life <= 0) {
          particles.current.splice(i, 1);
          continue;
        }
        const lifeRatio = p.life / p.max;
        const size = p.size * (0.7 + lifeRatio * 0.6);
        const col = hslToRgba(primaryHsl.current, 0.7 * lifeRatio);
        ctx.shadowBlur = 8 * dpr;
        ctx.shadowColor = col;
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(p.x * dpr, p.y * dpr, size * dpr, 0, Math.PI * 2);
        ctx.fill();
      }

      // Decay "moving" flag when idle to reduce intensity
      if (performance.now() - lastMoveT.current > 120) {
        mouse.current.moving = false;
      }

      ctx.shadowBlur = 0;
      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', onPointerMove as any);
      window.removeEventListener('pointerdown', onPointerDown as any);
      window.removeEventListener('pointerup', onPointerUp as any);
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default MouseGlowCanvas;
