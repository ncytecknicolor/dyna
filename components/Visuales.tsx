'use client';
import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';

// Maqueta decorativa de un navegador cuyos bloques aparecen en secuencia.
export function MockNavegador() {
  const b = 'sk rounded-md bg-white/20';
  return (
    <div aria-hidden className="overflow-hidden rounded-xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/10 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-white/30" /><span className="h-2.5 w-2.5 rounded-full bg-white/30" /><span className="h-2.5 w-2.5 rounded-full bg-white/30" />
        <span className="mx-auto w-1/2 rounded-full bg-white/15 px-3 py-0.5 text-center text-[10px] text-white/60">www.tu-sitio.mx</span>
      </div>
      <div className="space-y-3 p-4">
        <div className={`${b} h-4 w-1/3`} style={{ ['--d' as string]: '0s' }} />
        <div className="sk h-24 rounded-lg bg-gradient-to-br from-naranja/70 to-azul/70" style={{ ['--d' as string]: '.6s' }} />
        <div className="grid grid-cols-3 gap-3">
          {[1.2, 1.7, 2.2].map((d) => <div key={d} className={`${b} h-14`} style={{ ['--d' as string]: `${d}s` }} />)}
        </div>
        <div className={`${b} h-3 w-4/5`} style={{ ['--d' as string]: '2.7s' }} />
        <div className={`${b} h-3 w-3/5`} style={{ ['--d' as string]: '3.1s' }} />
      </div>
    </div>
  );
}

// Barra de búsqueda decorativa que "escribe" consultas de ejemplo.
export function BuscadorTyping({ frases }: { frases: string[] }) {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(frases[0].length); return; }
    const frase = frases[i];
    const t = n < frase.length ? setTimeout(() => setN(n + 1), 70) : setTimeout(() => { setN(0); setI((i + 1) % frases.length); }, 1800);
    return () => clearTimeout(t);
  }, [n, i, frases]);
  return (
    <div aria-hidden className="rounded-xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur">
      <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 text-grafito">
        <Search size={18} className="shrink-0 text-azul" />
        <span className="truncate text-sm">{frases[i].slice(0, n)}<span className="caret ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-grafito" /></span>
      </div>
      <div className="mt-4 space-y-3">
        <div className="rounded-lg border-l-4 border-naranja bg-white/15 p-3"><div className="h-3 w-2/3 rounded bg-white/50" /><div className="mt-2 h-2 w-full rounded bg-white/25" /></div>
        <div className="rounded-lg bg-white/10 p-3"><div className="h-3 w-1/2 rounded bg-white/30" /><div className="mt-2 h-2 w-5/6 rounded bg-white/20" /></div>
        <div className="rounded-lg bg-white/10 p-3"><div className="h-3 w-3/5 rounded bg-white/30" /><div className="mt-2 h-2 w-4/6 rounded bg-white/20" /></div>
      </div>
    </div>
  );
}
