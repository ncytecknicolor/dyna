'use client';
import { useState, type KeyboardEvent } from 'react';
import { iconos, type IconoKey } from '@/lib/iconos';

export default function IncluyeTabs({ items, icono }: { items: { t: string; d: string }[]; icono: IconoKey }) {
  const [a, setA] = useState(0);
  const Icon = iconos[icono];
  const teclas = (e: KeyboardEvent, i: number) => {
    const n = items.length;
    const j = e.key === 'ArrowDown' ? (i + 1) % n : e.key === 'ArrowUp' ? (i - 1 + n) % n : -1;
    if (j >= 0) { e.preventDefault(); setA(j); document.getElementById(`inc-tab-${j}`)?.focus(); }
  };
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
      <div role="tablist" aria-orientation="vertical" aria-label="Qué incluye" className="flex flex-col gap-2">
        {items.map((it, i) => (
          <button key={it.t} id={`inc-tab-${i}`} role="tab" aria-selected={a === i} aria-controls={`inc-panel-${i}`} tabIndex={a === i ? 0 : -1}
            onClick={() => setA(i)} onMouseEnter={() => setA(i)} onKeyDown={(e) => teclas(e, i)}
            className={`flex items-center gap-4 rounded-xl border-l-4 px-5 py-4 text-left transition-all duration-300 ${a === i ? 'border-naranja bg-white font-bold text-azul shadow-md lg:translate-x-2' : 'border-transparent text-grafito/70 hover:bg-white/60'}`}>
            <span className="font-display text-sm font-bold text-naranja">{`0${i + 1}`}</span>
            <span>{it.t}</span>
          </button>
        ))}
      </div>
      <div className="relative min-h-[18rem] overflow-hidden rounded-3xl bg-azul-oscuro p-8 text-white md:p-12">
        <span aria-hidden className="pointer-events-none absolute -right-4 -top-10 font-display text-[10rem] font-extrabold leading-none text-white/5">{`0${a + 1}`}</span>
        {items.map((it, i) => (
          <div key={it.t} id={`inc-panel-${i}`} role="tabpanel" aria-labelledby={`inc-tab-${i}`} hidden={a !== i} className="panel-entra relative">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-naranja"><Icon size={32} /></div>
            <h3 className="mt-6 font-display text-2xl font-bold md:text-3xl">{it.t}</h3>
            <p className="mt-4 max-w-xl text-lg text-white/85">{it.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
