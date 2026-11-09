import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { proyectos } from './proyectos';
import { Tarjeta } from './ui';
import Reveal from './Reveal';

// Enlaza cada servicio con proyectos reales (enlazado interno + imágenes con texto alternativo descriptivo).
export default function ProyectosRelacionados({ slugs, servicio }: { slugs: string[]; servicio: string }) {
  const lista = proyectos.filter((p) => p.servicios?.some((s) => s.slug && slugs.includes(s.slug))).slice(0, 3);
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display text-3xl font-bold md:text-4xl">Proyectos que hemos desarrollado</h2>
      <p className="mt-3 max-w-2xl text-grafito/80">{lista.length ? 'Mira algunos proyectos de este tipo que hemos desarrollado para empresas.' : 'Conoce los proyectos que hemos desarrollado para empresas de distintos giros.'}</p>
      {lista.length > 0 && (
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {lista.map((p, k) => (
            <Reveal key={p.slug} delay={k * 100} className="h-full">
              <Link href="/#proyectos" className="block h-full">
                <Tarjeta className="h-full border border-black/10 bg-white" inner="relative flex h-full flex-col">
                  <div className="relative aspect-[2/1] overflow-hidden bg-grafito">
                    <Image src={p.principal.src} fill sizes="(min-width:768px) 380px, 100vw" alt={`Sitio web de ${p.nombre}, proyecto de ${servicio.toLowerCase()} de Dynamedia`} className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5"><p className="font-display text-lg font-bold text-azul">{p.nombre}</p><p className="text-sm text-grafito/70">{p.categoria}</p></div>
                </Tarjeta>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
      <Link href="/#proyectos" className="mt-8 inline-flex items-center gap-2 font-semibold text-azul hover:text-naranja">Ver todos los proyectos <ArrowUpRight size={18} /></Link>
    </section>
  );
}
