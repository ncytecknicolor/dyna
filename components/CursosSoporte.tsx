import Link from 'next/link';
import { GraduationCap, LifeBuoy, ArrowUpRight, Check } from 'lucide-react';
import { Tarjeta } from './ui';
import Reveal from './Reveal';

const cursos = [
  { t: 'Curso de WordPress en línea', d: 'Aprende a crear y administrar tu propio sitio web.', h: '/cursos/wordpress-monterrey' },
  { t: 'Curso de posicionamiento web en Google', d: 'Aprende a mejorar la visibilidad de tu sitio en buscadores.', h: '/cursos/posicionamiento-en-google' },
];
const soporte = ['Soporte para el manejo de tu sitio', 'Actualización de contenidos', 'Resolución de problemas en tu página o sistema', 'Pólizas de soporte (pregunta por ellas)'];

export default function CursosSoporte() {
  return (
    <section className="bg-niebla py-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 lg:grid-cols-2">
        <Reveal className="h-full">
          <div id="cursos" className="h-full scroll-mt-24">
            <Tarjeta className="h-full border border-black/10 bg-white p-8 md:p-10" inner="relative flex h-full flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-azul text-white transition-colors group-hover:bg-naranja"><GraduationCap size={28} /></div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-naranja">Cursos en línea</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-azul md:text-3xl">Aprende a crear y posicionar tu propio sitio</h2>
              <p className="mt-3 text-grafito/80">Capacitamos a equipos y a particulares que quieren crear o mantener páginas de internet.</p>
              <ul className="mt-6 space-y-3">
                {cursos.map((c) => (
                  <li key={c.t}><Link href={c.h} className="group/c flex items-center justify-between gap-3 rounded-xl bg-niebla p-4 transition-colors hover:bg-azul/10"><span><span className="block font-semibold text-azul">{c.t}</span><span className="block text-sm text-grafito/75">{c.d}</span></span><ArrowUpRight size={18} className="shrink-0 text-naranja transition-transform group-hover/c:-translate-y-0.5 group-hover/c:translate-x-0.5" /></Link></li>
                ))}
              </ul>
              <Link href="/cursos" className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-azul hover:text-naranja">Ver todos los cursos <ArrowUpRight size={18} /></Link>
            </Tarjeta>
          </div>
        </Reveal>
        <Reveal delay={150} className="h-full">
          <div id="soporte" className="h-full scroll-mt-24">
            <Tarjeta className="h-full border-0 bg-azul-oscuro p-8 text-white md:p-10" inner="relative flex h-full flex-col" luz="rgba(255,255,255,0.12)">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-naranja text-white"><LifeBuoy size={28} /></div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-naranja-claro">Asesoría y soporte</p>
              <h2 className="mt-1 font-display text-2xl font-bold md:text-3xl">Resolvemos los problemas de tu página o sistema</h2>
              <p className="mt-3 text-white/80">No te dejamos solo después de entregar: seguimos a tu lado con soporte y asesoría técnica.</p>
              <ul className="mt-6 space-y-3">
                {soporte.map((s) => <li key={s} className="flex gap-3"><Check size={20} className="mt-0.5 shrink-0 text-naranja-claro" />{s}</li>)}
              </ul>
              <Link href="/#contacto" className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-naranja-claro hover:text-white">Pregunta por el soporte <ArrowUpRight size={18} /></Link>
            </Tarjeta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
