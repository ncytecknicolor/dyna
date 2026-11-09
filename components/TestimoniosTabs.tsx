'use client';
import { useState, type KeyboardEvent } from 'react';
import { Quote } from 'lucide-react';
import { testimonios, MOSTRAR_PENDIENTES, iniciales } from '@/lib/testimonios';

// Testimonios de Nosotros: selector de cliente y cita grande con transición.
export default function TestimoniosTabs() {
  const lista = testimonios.filter((t) => t.texto || MOSTRAR_PENDIENTES);
  const [a, setA] = useState(0);
  if (!lista.length) return null;
  const teclas = (e: KeyboardEvent, i: number) => {
    const n = lista.length;
    const j = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? (i + 1) % n : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? (i - 1 + n) % n : -1;
    if (j >= 0) { e.preventDefault(); setA(j); document.getElementById(`test-tab-${j}`)?.focus(); }
  };
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display text-3xl font-bold md:text-4xl">Lo que dicen de nosotros</h2>
      <p className="mt-3 max-w-xl text-grafito/80">La opinión de quienes ya trabajaron con Dynamedia.</p>
      <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr]">
        <div role="tablist" aria-orientation="vertical" aria-label="Clientes" className="flex gap-3 overflow-x-auto lg:flex-col">
          {lista.map((t, i) => (
            <button key={t.id} id={`test-tab-${i}`} role="tab" aria-selected={a === i} aria-controls={`test-panel-${i}`} tabIndex={a === i ? 0 : -1}
              onClick={() => setA(i)} onMouseEnter={() => setA(i)} onKeyDown={(e) => teclas(e, i)}
              className={`flex shrink-0 items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300 ${a === i ? 'bg-azul text-white shadow-lg lg:translate-x-2' : 'bg-niebla text-grafito/80 hover:bg-niebla/70'}`}>
              <span aria-hidden className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display font-bold ${a === i ? 'bg-naranja text-white' : 'bg-white text-azul'}`}>{iniciales(t.nombre)}</span>
              <span><span className="block font-semibold">{t.nombre}</span><span className={`block text-sm ${a === i ? 'text-white/80' : 'text-grafito/60'}`}>{t.empresa}</span></span>
            </button>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-azul-oscuro p-8 text-white md:p-12">
          <Quote aria-hidden className="pointer-events-none absolute -right-6 -top-6 h-52 w-52 text-white/5" />
          {lista.map((t, i) => (
            <figure key={t.id} id={`test-panel-${i}`} role="tabpanel" aria-labelledby={`test-tab-${i}`} hidden={a !== i} className="panel-entra relative">
              <Quote aria-hidden size={44} className="text-naranja-claro" />
              <blockquote className="mt-5 text-xl leading-relaxed md:text-2xl">
                {t.texto ?? <span className="flex flex-wrap items-center gap-2 text-base text-white/70"><span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">Pendiente</span> Falta el testimonio de {t.nombre}.</span>}
              </blockquote>
              <figcaption className="mt-8 border-t border-white/15 pt-5"><span className="font-display text-lg font-bold">{t.nombre}</span><span className="text-white/70"> · {[t.cargo, t.empresa].filter(Boolean).join(' · ')}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
