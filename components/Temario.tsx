'use client';
import { useState, type KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Modulo } from '@/lib/cursos';

export default function Temario({ modulos }: { modulos: Modulo[] }) {
  const [a, setA] = useState(0);
  const n = modulos.length;
  const ir = (j: number) => { const k = Math.max(0, Math.min(n - 1, j)); setA(k); document.getElementById(`mod-tab-${k}`)?.focus(); };
  const teclas = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); ir(a + 1); } else if (e.key === 'ArrowLeft') { e.preventDefault(); ir(a - 1); }
    else if (e.key === 'Home') { e.preventDefault(); ir(0); } else if (e.key === 'End') { e.preventDefault(); ir(n - 1); }
  };
  const pct = n > 1 ? a / (n - 1) : 1;
  return (
    <div>
      <div className="overflow-x-auto pb-3">
        <div role="tablist" aria-label="Módulos del curso" className="relative flex min-w-max justify-between px-2 pt-2" onKeyDown={teclas}>
          <div aria-hidden className="absolute left-[3.5rem] right-[3.5rem] top-[1.85rem] h-1 rounded bg-grafito/10" />
          <div aria-hidden className="absolute left-[3.5rem] top-[1.85rem] h-1 rounded bg-gradient-to-r from-azul to-naranja transition-all duration-500 motion-reduce:transition-none" style={{ width: `calc((100% - 7rem) * ${pct})` }} />
          {modulos.map((m, i) => (
            <button key={m.t} id={`mod-tab-${i}`} role="tab" aria-selected={a === i} aria-controls={`mod-panel-${i}`} tabIndex={a === i ? 0 : -1} onClick={() => setA(i)}
              className="relative flex w-28 flex-col items-center gap-2 text-center">
              <span className={`flex h-12 w-12 items-center justify-center rounded-full border-4 font-display font-bold transition-all duration-300 ${i <= a ? 'border-naranja bg-azul text-white' : 'border-grafito/15 bg-white text-grafito/50'} ${i === a ? 'scale-110 shadow-lg' : ''}`}>{i + 1}</span>
              <span className={`text-xs font-semibold leading-tight ${i === a ? 'text-azul' : 'text-grafito/60'}`}>{m.t}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8">
        {modulos.map((m, i) => (
          <div key={m.t} id={`mod-panel-${i}`} role="tabpanel" aria-labelledby={`mod-tab-${i}`} hidden={a !== i} className="panel-entra">
            <div className="relative overflow-hidden rounded-3xl bg-azul-oscuro p-8 text-white md:p-10">
              <span aria-hidden className="pointer-events-none absolute -right-2 -top-8 font-display text-[9rem] font-extrabold leading-none text-white/5">{`0${i + 1}`}</span>
              <p className="relative text-sm font-semibold uppercase tracking-widest text-naranja-claro">Módulo {i + 1} de {n}</p>
              <h3 className="relative mt-2 font-display text-2xl font-bold md:text-3xl">{m.t}</h3>
              <p className="relative mt-3 max-w-2xl text-lg text-white/85">{m.d}</p>
              <ul className="relative mt-6 flex flex-wrap gap-3">
                {m.temas.map((t) => <li key={t} className="rounded-full border border-white/25 px-4 py-2 text-sm">{t}</li>)}
              </ul>
            </div>
          </div>
        ))}
        <div className="mt-5 flex justify-between">
          <button onClick={() => ir(a - 1)} disabled={a === 0} className="flex items-center gap-2 rounded-full border border-grafito/20 px-5 py-2.5 text-sm font-semibold text-azul transition-colors hover:border-naranja hover:text-naranja disabled:opacity-30"><ChevronLeft size={18} /> Anterior</button>
          <button onClick={() => ir(a + 1)} disabled={a === n - 1} className="flex items-center gap-2 rounded-full bg-azul px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-naranja disabled:opacity-30">Siguiente <ChevronRight size={18} /></button>
        </div>
      </div>
    </div>
  );
}
