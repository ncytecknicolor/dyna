import { Quote } from 'lucide-react';
import { testimonios, MOSTRAR_PENDIENTES, iniciales } from '@/lib/testimonios';
import { Tarjeta, Inclinar } from './ui';
import Reveal from './Reveal';

// Testimonios del inicio: dos tarjetas en cristal con inclinación 3D y luz de cursor.
export default function Testimonios() {
  const lista = testimonios.filter((t) => t.texto || MOSTRAR_PENDIENTES);
  if (!lista.length) return null;
  return (
    <section className="relative overflow-hidden bg-azul-oscuro py-24 text-white">
      <div aria-hidden className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(50% 70% at 10% 0%, rgba(242,107,33,.5), transparent 60%), radial-gradient(45% 60% at 100% 100%, rgba(27,79,156,.9), transparent 70%)' }} />
      <div aria-hidden className="absolute -left-20 bottom-10 hidden md:block"><div className="flota-b h-56 w-56 opacity-20" style={{ background: 'linear-gradient(135deg,#F26B21 50%,#1B4F9C 50%)' }} /></div>
      <div className="relative mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-naranja-claro">Testimonios</p>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Lo que dicen nuestros clientes</h2>
        <p className="mt-4 max-w-xl text-lg text-white/80">Empresas que confiaron en nosotros para su presencia digital.</p>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {lista.map((t, k) => (
            <Reveal key={t.id} delay={k * 150} className={`h-full ${k % 2 === 1 ? 'md:mt-14' : ''}`}>
              <Inclinar className="h-full">
                <figure className="h-full">
                  <Tarjeta className="h-full border border-white/15 bg-white/5 p-8 backdrop-blur md:p-10" luz="rgba(255,255,255,0.14)" inner="relative flex h-full flex-col">
                    <Quote aria-hidden size={56} className="text-naranja-claro transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
                    <blockquote className="mt-5 flex-1 text-lg leading-relaxed md:text-xl">
                      {t.texto ?? <span className="flex flex-wrap items-center gap-2 text-base text-white/70"><span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">Pendiente</span> Falta el testimonio de {t.nombre}.</span>}
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-4 border-t border-white/15 pt-6">
                      <span aria-hidden className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-naranja font-display text-lg font-bold">{iniciales(t.nombre)}</span>
                      <span><span className="block font-semibold">{t.nombre}</span><span className="block text-sm text-white/70">{[t.cargo, t.empresa].filter(Boolean).join(' · ')}</span></span>
                    </figcaption>
                  </Tarjeta>
                </figure>
              </Inclinar>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
