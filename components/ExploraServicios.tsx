'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { servicios, ejes } from '@/lib/servicios';
import { iconos } from '@/lib/iconos';
import { Tarjeta } from './ui';

export default function ExploraServicios() {
  const [eje, setEje] = useState<string>('todos');
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const [ind, setInd] = useState({ left: 0, width: 0 });
  const k = ejes.findIndex((e) => e.id === eje);
  useEffect(() => {
    const medir = () => { const b = refs.current[k]; if (b) setInd({ left: b.offsetLeft, width: b.offsetWidth }); };
    medir();
    window.addEventListener('resize', medir);
    return () => window.removeEventListener('resize', medir);
  }, [k]);
  const lista = eje === 'todos' ? servicios : servicios.filter((s) => s.eje === eje);

  return (
    <div>
      <div role="tablist" aria-label="Filtrar servicios" className="relative inline-flex max-w-full gap-1 overflow-x-auto rounded-full bg-niebla p-1.5">
        <span aria-hidden className="absolute top-1.5 h-[calc(100%-0.75rem)] rounded-full bg-azul shadow transition-all duration-300 motion-reduce:transition-none" style={{ left: ind.left, width: ind.width }} />
        {ejes.map((e, i) => (
          <button key={e.id} ref={(el) => { refs.current[i] = el; }} role="tab" aria-selected={eje === e.id} onClick={() => setEje(e.id)}
            className={`relative z-10 shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${eje === e.id ? 'text-white' : 'text-grafito/70 hover:text-azul'}`}>
            {e.t}
          </button>
        ))}
      </div>
      <ul key={eje} className="panel-entra mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((s) => {
          const Icon = iconos[s.icono];
          return (
            <li key={s.slug}>
              <Link href={`/servicios/${s.slug}`} className="block h-full">
                <Tarjeta className="h-full border border-black/10 bg-white p-7" inner="relative flex h-full flex-col">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-azul text-white transition-all duration-300 group-hover:rotate-6 group-hover:bg-naranja"><Icon size={28} /></div>
                  <h3 className="mt-5 font-display text-xl font-bold text-azul">{s.nombre}</h3>
                  <p className="mt-2 text-grafito/80">{s.corto}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-naranja">
                    Conocer el servicio <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Tarjeta>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
