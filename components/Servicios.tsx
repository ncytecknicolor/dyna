import Link from 'next/link';
import { Check, ArrowUpRight } from 'lucide-react';
import { Tarjeta } from './ui';
import Reveal from './Reveal';
import { areas } from '@/lib/areas';
import { iconos } from '@/lib/iconos';

export default function Servicios() {
  return (
    <section id="servicios" className="bg-niebla py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Lo que hacemos por tu empresa</h2>
        <p className="mt-3 max-w-xl text-grafito/80">Cuatro áreas de trabajo para hacer crecer tu empresa en Monterrey y todo México.</p>
        <ul className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-2">
          {areas.map(({ slug, n, icono, nombre, titulo, texto, lista, cta }, k) => {
            const Icon = iconos[icono];
            return (
              <li key={slug}>
                <Reveal delay={(k % 2) * 120} className="h-full">
                  <Tarjeta className="h-full border border-black/10 border-t-4 border-t-azul bg-white p-8 hover:border-t-naranja" inner="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-azul text-white transition-colors group-hover:bg-naranja"><Icon size={26} /></div>
                      <span aria-hidden className="font-display text-5xl font-extrabold text-azul/10 transition-colors group-hover:text-naranja/30">{n}</span>
                    </div>
                    <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-naranja">{nombre}</h3>
                    <p className="mt-2 font-display text-2xl font-bold leading-snug text-azul">{titulo}</p>
                    <p className="mt-3 text-grafito/80">{texto}</p>
                    <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-grafito/60">Servicios</p>
                    <ul className="mt-2 space-y-2">
                      {lista.map((i) => <li key={i} className="flex gap-2"><Check size={18} className="mt-0.5 shrink-0 text-naranja" />{i}</li>)}
                    </ul>
                    <Link href={`/areas/${slug}`} className="mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-azul hover:text-naranja">
                      {cta} <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </Tarjeta>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
