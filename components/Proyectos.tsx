'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Pause, Play, ArrowUpRight, Check } from 'lucide-react';
import { proyectos, MOSTRAR_PENDIENTES, type Proyecto } from './proyectos';

// r = proporción ancho/alto de la tarjeta (2 = todas iguales). Si algún día quieres variar, cambia el número de cada una.
type Item = { p: Proyecto; r: number; pos?: 'left' };
const fila = (l: [string, number, 'left'?][]): Item[] => l.map(([s, r, pos]) => ({ p: proyectos.find((x) => x.slug === s)!, r, pos }));
const arriba = fila([['campo-aventura', 2], ['trofeos-mg', 2], ['gsf', 2], ['crealte', 2], ['we-love-party', 2]]);
const abajo = fila([['grupo-rios', 2], ['wm-refractories', 2], ['inspira-stone', 2], ['vida-esencial', 2]]);

const Pendiente = () => <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">Pendiente</span>;

function Fila({ items, alto, dir, dur, cta, abrir }: { items: Item[]; alto: string; dir: '' | 'der'; dur: number; cta?: boolean; abrir: (p: Proyecto) => void }) {
  return (
    <div className={`marquee marquee-mascara overflow-hidden py-4 ${alto}`}>
      <div className={`marquee-pista ${dir}`} style={{ ['--dur' as string]: `${dur}s` }}>
        {[0, 1, 2].map((c) => (
          <div key={c} aria-hidden={c > 0} className={`flex h-[var(--h)] shrink-0 gap-5 pr-5 ${c > 0 ? 'copia' : ''}`}>
            {items.map(({ p, r, pos }) => (
              <button key={p.slug} tabIndex={c > 0 ? -1 : 0} onClick={() => abrir(p)} aria-label={`Ver proyecto ${p.nombre}`} style={{ ['--r' as string]: r }}
                className="group flex h-full w-[calc((var(--h)_-_28px)_*_var(--r))] shrink-0 flex-col overflow-hidden rounded-xl border border-black/10 bg-white text-left shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)]">
                <span aria-hidden className="flex h-7 shrink-0 items-center gap-1.5 border-b border-black/5 bg-niebla px-3">
                  <span className="h-2 w-2 rounded-full bg-black/15" /><span className="h-2 w-2 rounded-full bg-black/15" /><span className="h-2 w-2 rounded-full bg-black/15" />
                  <span className="mx-auto max-w-[55%] truncate rounded-full bg-white px-3 py-0.5 text-[11px] font-medium text-grafito/60">{p.nombre}</span>
                </span>
                <span className="relative block flex-1 overflow-hidden">
                  <Image src={p.principal.src} fill sizes="560px" alt={c > 0 ? '' : `Captura del sitio web de ${p.nombre}${p.categoria ? `, ${p.categoria.toLowerCase()}` : ''}`} className={`object-cover ${pos === 'left' ? 'object-left-top' : 'object-top'} transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none`} />
                  {p.categoria && <span className="absolute bottom-3 left-3 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-azul shadow">{p.categoria}</span>}
                  <span className="absolute inset-0 z-20 flex items-center justify-center bg-grafito/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-semibold text-azul shadow-lg">Ver proyecto <ArrowUpRight size={18} /></span>
                  </span>
                </span>
              </button>
            ))}
            {cta && (
              <a href="#contacto" tabIndex={c > 0 ? -1 : 0}
                className="group flex h-full w-[300px] shrink-0 flex-col justify-center rounded-xl bg-gradient-to-br from-azul to-azul-oscuro p-6 text-white md:w-[380px]">
                <span className="font-display text-2xl font-bold leading-tight md:text-3xl">Tu proyecto puede ser el siguiente.</span>
                <span className="mt-4 inline-flex items-center gap-2 font-semibold text-naranja-claro">
                  Cotiza tu proyecto <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Bloque({ titulo, ok, children }: { titulo: string; ok: boolean; children: React.ReactNode }) {
  if (!ok && !MOSTRAR_PENDIENTES) return null;
  return (
    <section className="mt-8">
      <h3 className="font-display text-lg font-bold text-azul">{titulo}</h3>
      <div className="mt-2 text-grafito/85">{ok ? children : <p className="flex items-center gap-2"><Pendiente /> Por redactar</p>}</div>
    </section>
  );
}

function Ficha({ p, cerrar }: { p: Proyecto; cerrar: () => void }) {
  const meta = [p.sector, p.solucion ?? p.categoria, p.anio].filter(Boolean).join(' · ');
  return (
    <article>
      <div className="sticky top-0 z-10 h-0">
        <button onClick={cerrar} aria-label="Cerrar ficha" className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow hover:bg-white"><X size={22} /></button>
      </div>
      <Image src={p.principal.src} width={p.principal.w} height={p.principal.h} alt={`Página de inicio del sitio web de ${p.nombre}, proyecto de Dynamedia`} className="h-auto w-full" />
      <div className="p-6 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-naranja">Proyecto</p>
        <h2 id="ficha-titulo" className="mt-1 font-display text-3xl font-extrabold text-azul md:text-4xl">{p.nombre}</h2>
        <p className="mt-2 flex items-center gap-2 text-grafito/80">
          {meta || (MOSTRAR_PENDIENTES && <><Pendiente /> Sector y tipo de solución</>)}
        </p>
        <Bloque titulo="Servicios involucrados" ok={!!p.servicios?.length}>
          <ul className="flex flex-wrap gap-2">
            {p.servicios?.map((s) => (
              <li key={s.t}>
                {s.slug
                  ? <Link href={`/servicios/${s.slug}`} onClick={cerrar} className="block rounded-full bg-niebla px-3 py-1 text-sm font-semibold text-azul transition-colors hover:bg-naranja hover:text-white">{s.t}</Link>
                  : <span className="block rounded-full bg-niebla px-3 py-1 text-sm font-semibold">{s.t}</span>}
              </li>
            ))}
          </ul>
        </Bloque>
        <div className="grid gap-x-10 md:grid-cols-2">
          <Bloque titulo="El reto" ok={!!p.reto}><p>{p.reto}</p></Bloque>
          <Bloque titulo="Qué desarrollamos" ok={!!p.desarrollo || !!p.actividades?.length}>
            {p.desarrollo && <p>{p.desarrollo}</p>}
            {p.actividades && <ul className="mt-3 space-y-2">{p.actividades.map((a) => <li key={a} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-naranja" />{a}</li>)}</ul>}
          </Bloque>
        </div>
        <Bloque titulo="Resultado" ok={!!p.resultado?.length}>
          <ul className="space-y-2">{p.resultado?.map((r) => <li key={r} className="flex gap-2"><Check size={18} className="mt-0.5 shrink-0 text-naranja" />{r}</li>)}</ul>
        </Bloque>
        {(p.galeria?.length || MOSTRAR_PENDIENTES) && (
          <section className="mt-8">
            <h3 className="font-display text-lg font-bold text-azul">Galería</h3>
            <div className="mt-3 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {p.galeria?.length
                ? p.galeria.map((g) => (
                    <figure key={g.src}>
                      <Image src={g.src} width={g.w} height={g.h} alt={g.pie ?? `Pantalla de ${p.nombre}`} className="h-auto w-full rounded-lg" />
                      {g.pie && <figcaption className="mt-1 text-sm text-grafito/70">{g.pie}</figcaption>}
                    </figure>
                  ))
                : [1, 2, 3].map((n) => <div key={n} className="flex aspect-video items-center justify-center rounded-lg border-2 border-dashed border-grafito/20"><Pendiente /></div>)}
            </div>
          </section>
        )}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {p.url ? (
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-azul px-6 py-3 font-semibold text-azul hover:bg-azul hover:text-white">
              Visitar sitio web <ArrowUpRight size={18} />
            </a>
          ) : MOSTRAR_PENDIENTES && <span className="flex items-center gap-2 text-sm"><Pendiente /> Enlace al sitio</span>}
          <a href="#contacto" onClick={cerrar} className="rounded-full bg-naranja px-6 py-3 font-semibold text-white hover:bg-naranja-claro">Quiero un proyecto así</a>
        </div>
      </div>
    </article>
  );
}

export default function Proyectos() {
  const dlg = useRef<HTMLDialogElement>(null);
  const [sel, setSel] = useState<Proyecto | null>(null);
  const [pausa, setPausa] = useState(false);
  useEffect(() => {
    if (sel && dlg.current && !dlg.current.open) dlg.current.showModal();
    document.body.style.overflow = sel ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sel]);

  return (
    <section id="proyectos" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center gap-4">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Proyectos recientes</h2>
          <button onClick={() => setPausa(!pausa)} aria-pressed={pausa} aria-label={pausa ? 'Reanudar movimiento' : 'Pausar movimiento'} title={pausa ? 'Reanudar movimiento' : 'Pausar movimiento'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-grafito/20 text-grafito hover:border-naranja hover:text-naranja">
            {pausa ? <Play size={16} /> : <Pause size={16} />}
          </button>
        </div>
        <p className="mt-3 max-w-xl text-grafito/80">Marcas que confiaron en nosotros. Haz clic en un proyecto para conocerlo.</p>
      </div>
      <div className={`mt-8 space-y-2 ${pausa ? 'pausa' : ''}`}>
        <Fila items={arriba} alto="[--h:200px] md:[--h:300px]" dir="" dur={75} abrir={setSel} />
        <Fila items={abajo} alto="[--h:200px] md:[--h:300px]" dir="der" dur={71} cta abrir={setSel} />
      </div>
      <dialog ref={dlg} onClose={() => setSel(null)} onClick={(e) => e.target === dlg.current && dlg.current?.close()} aria-labelledby="ficha-titulo"
        className="m-auto max-h-[92vh] w-[min(1000px,94vw)] overflow-y-auto rounded-2xl bg-white p-0 text-grafito backdrop:bg-black/70">
        {sel && <Ficha p={sel} cerrar={() => dlg.current?.close()} />}
      </dialog>
    </section>
  );
}
