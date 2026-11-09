'use client';
import { useEffect, useRef, type PointerEvent, type ReactNode } from 'react';

// Tarjeta con luz que sigue al cursor. Si pasas className, reemplaza el borde/fondo/padding por defecto.
export function Tarjeta({ children, className = 'border border-black/10 bg-white p-6', inner = 'relative', luz = 'rgba(242,107,33,0.16)' }:
  { children: ReactNode; className?: string; inner?: string; luz?: string }) {
  const mover = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`);
  };
  return (
    <div onPointerMove={mover} className={`group relative overflow-hidden rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none ${className}`}>
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(280px circle at var(--x,50%) var(--y,50%), ${luz}, transparent 70%)` }} />
      <div className={inner}>{children}</div>
    </div>
  );
}

// Botón "magnético": se desplaza un poco hacia el cursor.
export function Magnetico({ children, fuerza = 0.25, className = '' }: { children: ReactNode; fuerza?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const mover = (e: PointerEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * fuerza}px, ${(e.clientY - (r.top + r.height / 2)) * fuerza}px)`;
  };
  return (
    <span ref={ref} onPointerMove={mover} onPointerLeave={() => { if (ref.current) ref.current.style.transform = ''; }}
      className={`inline-block transition-transform duration-200 ease-out ${className}`}>
      {children}
    </span>
  );
}

// Mueve sus hijos en sentido contrario al cursor (efecto de profundidad).
export function Parallax({ children, fuerza = 24, className = '' }: { children: ReactNode; fuerza?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const h = (e: globalThis.PointerEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${(e.clientX / window.innerWidth - 0.5) * -fuerza}px, ${(e.clientY / window.innerHeight - 0.5) * -fuerza}px)`;
    };
    window.addEventListener('pointermove', h);
    return () => window.removeEventListener('pointermove', h);
  }, [fuerza]);
  return <div ref={ref} className={`transition-transform duration-300 ease-out ${className}`}>{children}</div>;
}

// Inclina la tarjeta en 3D según la posición del cursor.
export function Inclinar({ children, max = 7, className = '' }: { children: ReactNode; max?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mover = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-py * max}deg) rotateY(${px * max}deg)`;
  };
  return (
    <div ref={ref} onPointerMove={mover} onPointerLeave={() => { if (ref.current) ref.current.style.transform = ''; }}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}>
      {children}
    </div>
  );
}
