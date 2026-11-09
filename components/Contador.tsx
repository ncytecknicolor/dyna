'use client';
import { useEffect, useRef, useState } from 'react';

// Número que sube desde 0 al entrar en pantalla.
export default function Contador({ hasta, prefijo = '', dur = 1600 }: { hasta: number; prefijo?: string; dur?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(hasta);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setN(0);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const paso = (t: number) => {
        const p = Math.min((t - t0) / dur, 1);
        setN(Math.round(hasta * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(paso);
      };
      requestAnimationFrame(paso);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [hasta, dur]);
  return <span ref={ref} aria-label={`${prefijo}${hasta.toLocaleString('es-MX')}`}>{prefijo}{n.toLocaleString('es-MX')}</span>;
}
