import { Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import ContactForm from './ContactForm';
import Reveal from './Reveal';
import { Tarjeta } from './ui';
import { EMAIL, WA } from '@/lib/site';

const sigue = ['Recibimos tu mensaje.', 'Te contactamos para entender tu proyecto.', 'Te enviamos una propuesta con costos y tiempos.'];
const tarjeta = 'border border-white/15 bg-white/5 p-5 backdrop-blur';

export default function SeccionContacto({ preseleccion }: { preseleccion?: string[] }) {
  return (
    <section id="contacto" className="relative scroll-mt-8 overflow-hidden bg-azul-oscuro py-24 text-white">
      <div aria-hidden className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(55% 70% at 90% 10%, rgba(242,107,33,.55), transparent 60%), radial-gradient(45% 60% at 0% 100%, rgba(27,79,156,.9), transparent 70%)' }} />
      <div aria-hidden className="absolute -right-24 top-24 hidden md:block"><div className="flota h-64 w-64 opacity-30" style={{ background: 'linear-gradient(135deg,#F26B21 50%,#1B4F9C 50%)' }} /></div>
      <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-naranja-claro">Contacto</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">Hablemos de tu proyecto</h2>
          <p className="mt-4 max-w-md text-lg text-white/80">Cuéntanos qué necesitas y te respondemos pronto. Sin compromiso.</p>
          <div className="mt-8 space-y-4">
            <a href={`mailto:${EMAIL}`} className="block">
              <Tarjeta className={tarjeta} luz="rgba(255,255,255,0.14)" inner="relative flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-naranja"><Mail size={22} /></span>
                <span><span className="block text-sm text-white/60">Correo</span><span className="block font-semibold">{EMAIL}</span></span>
                <ArrowUpRight size={18} className="ml-auto text-naranja-claro transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Tarjeta>
            </a>
            <a href={WA} className="block">
              <Tarjeta className={tarjeta} luz="rgba(255,255,255,0.14)" inner="relative flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-naranja"><MessageCircle size={22} /></span>
                <span><span className="block text-sm text-white/60">WhatsApp</span><span className="block font-semibold">Escríbenos ahora</span></span>
                <ArrowUpRight size={18} className="ml-auto text-naranja-claro transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Tarjeta>
            </a>
            <Tarjeta className={tarjeta} luz="rgba(255,255,255,0.14)" inner="relative flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-naranja"><MapPin size={22} /></span>
              <span><span className="block text-sm text-white/60">Ubicación</span><span className="block font-semibold">Monterrey, Nuevo León</span></span>
            </Tarjeta>
          </div>
          <h3 className="mt-10 font-display text-xl font-bold">¿Qué sigue después?</h3>
          <ol className="mt-4 space-y-3">
            {sigue.map((s, k) => (
              <li key={s} className="flex items-center gap-3 text-white/85">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-naranja-claro font-display text-sm font-bold text-naranja-claro">{k + 1}</span>{s}
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={150}><ContactForm preseleccion={preseleccion} /></Reveal>
      </div>
    </section>
  );
}
