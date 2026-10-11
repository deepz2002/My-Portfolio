import { useEffect, useRef } from 'react';

const SIZE = 16;

/** Falling 0/1 columns drawn on a fixed canvas behind the page. Re-reads colors when the theme changes. */
export default function BinaryRain({ theme }) {
  const ref = useRef(null);
  const colors = useRef({ rain: '0,255,156', bg: '7,11,8' });

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv.getContext('2d');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let cols = 0, drops = [], raf = 0, last = 0;

    const paintBg = () => {
      ctx.fillStyle = `rgb(${colors.current.bg})`;
      ctx.fillRect(0, 0, innerWidth, innerHeight);
    };
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      cv.width = innerWidth * dpr;
      cv.height = innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(innerWidth / SIZE);
      drops = Array.from({ length: cols }, () => Math.random() * -50);
      paintBg();
      if (reduce) staticField();
    };
    const staticField = () => {
      ctx.fillStyle = `rgba(${colors.current.rain},.3)`;
      ctx.font = `${SIZE}px "JetBrains Mono", monospace`;
      for (let i = 0; i < cols * 14; i++) ctx.fillText(Math.random() > 0.5 ? '1' : '0', Math.random() * innerWidth, Math.random() * innerHeight);
    };
    const draw = (t) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 55) return; // ~18fps: calm and cheap
      last = t;
      const { rain, bg } = colors.current;
      ctx.fillStyle = `rgba(${bg},.12)`;
      ctx.fillRect(0, 0, innerWidth, innerHeight);
      ctx.font = `${SIZE}px "JetBrains Mono", monospace`;
      for (let i = 0; i < cols; i++) {
        const y = drops[i] * SIZE;
        ctx.fillStyle = `rgba(${rain},${Math.random() > 0.96 ? 0.95 : 0.5})`;
        ctx.fillText(Math.random() > 0.5 ? '1' : '0', i * SIZE, y);
        if (y > innerHeight && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
    };

    ref.current.repaint = () => { paintBg(); if (reduce) staticField(); };
    resize();
    addEventListener('resize', resize);
    if (!reduce) raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); };
  }, []);

  useEffect(() => {
    const cs = getComputedStyle(document.documentElement);
    const toRgb = (v) => cs.getPropertyValue(v).trim().split(/\s+/).join(',');
    colors.current = { rain: toRgb('--rain'), bg: toRgb('--veil') };
    ref.current.repaint?.();
  }, [theme]);

  return (
    <>
      <canvas ref={ref} aria-hidden="true" className="fixed inset-0 z-0 h-full w-full" />
      {/* soft veil keeps text readable over the rain */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{ background: 'radial-gradient(ellipse at 50% 45%, rgb(var(--veil) / .82) 0%, rgb(var(--veil) / .55) 55%, rgb(var(--veil) / .15) 100%)' }}
      />
    </>
  );
}
