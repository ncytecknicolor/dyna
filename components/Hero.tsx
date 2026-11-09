'use client';
import { useEffect, useState, type PointerEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slides } from './heroSlides';
import { Magnetico } from './ui';

export default function Hero() {
  const [i, setI] = useState(0);
  const [pausa, setPausa] = useState(false);
  const [fallo, setFallo] = useState<Record<string, boolean>>({});
  const n = slides.length;
  useEffect(() => {
    // Todas las pantallas duran lo mismo, tengan imagen o video
    if (pausa) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 6500);
    return () => clearInterval(t);
  }, [pausa, n, i]);
  const ir = (k: number) => setI((k + n) % n);
  const mover = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  const flecha = 'absolute top-1/2 z-20 -translate-y-1/2 rounded-full p-2 text-white/90 hover:bg-white/15';

  return (
    <section id="inicio" aria-roledescription="carousel" aria-label="Servicios de Dynamedia"
      onPointerMove={mover}
      onMouseEnter={() => setPausa(true)} onMouseLeave={() => setPausa(false)}
      onFocus={() => setPausa(true)} onBlur={() => setPausa(false)}
      className="relative h-[100svh] min-h-[600px] overflow-hidden bg-grafito text-white">
      {slides.map((s, k) => {
        const H = (k === 0 ? 'h1' : 'h2') as 'h1';
        const activa = k === i;
        return (
          <div key={s.id} aria-hidden={!activa} aria-roledescription="slide" aria-label={`${k + 1} de ${n}`}
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${activa ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
            <div className="absolute inset-0" style={{ background: s.fondo }} />
            {s.imagen && <Image src={s.imagen} alt="" fill priority={k === 0} sizes="100vw" className="object-cover" />}
            {s.imagen2 && <Image src={s.imagen2} alt="" fill sizes="100vw" className="object-cover" style={{ clipPath: 'polygon(56% 0, 100% 0, 100% 100%, 38% 100%)' }} />}
            {s.video && activa && !fallo[s.id] && (
              <video src={s.video} poster={s.imagen} autoPlay muted playsInline preload="metadata"
                onError={() => setFallo((f) => ({ ...f, [s.id]: true }))}
                className="absolute inset-0 h-full w-full object-cover" />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
            {s.velo && <div className="absolute inset-0" style={{ background: s.velo }} />}
            <div className="relative flex h-full flex-col items-center justify-center px-6 pt-24 text-center">
              {s.eyebrow && <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/90 md:text-sm">{s.eyebrow}</p>}
              <H className={`font-display font-extrabold uppercase tracking-tight ${s.tam === 'medio' ? 'text-[clamp(2rem,5.2vw,4.5rem)] leading-[1.02]' : 'text-[clamp(2.25rem,8vw,6.5rem)] leading-[0.95]'}`}>
                {s.titulo.map((l) => <span key={l} className="block">{l}{' '}</span>)}
              </H>
              {Array.isArray(s.texto)
                ? <div className="mt-8 max-w-3xl space-y-3 text-base md:text-lg">{s.texto.map((p) => <p key={p}>{p}</p>)}</div>
                : <p className="mt-8 max-w-2xl text-lg md:text-xl">{s.texto}</p>}
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                {(s.botones ?? [{ t: 'Contacto', h: '#contacto' }]).map((b, j) => {
                  const cls = `brillo block rounded-full px-9 py-4 text-sm font-semibold uppercase tracking-widest ${j === 0 ? 'bg-naranja hover:bg-naranja-claro' : 'border-2 border-white/70 hover:bg-white/15'}`;
                  return (
                    <Magnetico key={b.t}>
                      {b.h.startsWith('/')
                        ? <Link href={b.h} tabIndex={activa ? 0 : -1} className={cls}>{b.t}</Link>
                        : <a href={b.h} tabIndex={activa ? 0 : -1} className={cls}>{b.t}</a>}
                    </Magnetico>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10 hidden md:block" style={{ background: 'radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.13), transparent 60%)' }} />
      <button aria-label="Pantalla anterior" onClick={() => ir(i - 1)} className={`${flecha} left-3 md:left-6`}><ChevronLeft size={32} /></button>
      <button aria-label="Pantalla siguiente" onClick={() => ir(i + 1)} className={`${flecha} right-3 md:right-6`}><ChevronRight size={32} /></button>
      <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center gap-3">
        {slides.map((s, k) => (
          <button key={s.id} aria-label={`Ir a la pantalla ${k + 1}`} aria-current={k === i} onClick={() => ir(k)}
            className={`h-2.5 w-2.5 rounded-full ${k === i ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`} />
        ))}
      </div>
    </section>
  );
}
