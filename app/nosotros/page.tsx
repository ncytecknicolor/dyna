import type { Metadata } from 'next';
import Link from 'next/link';
import { Search, ClipboardList, PenTool, Rocket, LifeBuoy, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { metaPagina } from '@/lib/seo';
import { migas, jsonLd, NEGOCIO_ID } from '@/lib/schema';
import { SITE } from '@/lib/site';
import TestimoniosTabs from '@/components/TestimoniosTabs';
import NosotrosTabs from '@/components/NosotrosTabs';
import Reveal from '@/components/Reveal';
import Contador from '@/components/Contador';

export const metadata: Metadata = metaPagina({
  title: 'Somos Dynamedia: diseño web y software en Monterrey',
  description: 'Somos Dynamedia: desde 2010 desarrollamos sitios web, software a la medida y estrategias de marketing digital en Monterrey. Conoce nuestra historia.',
  path: '/nosotros', imagen: '/og/nosotros.jpg',
});

const WA = 'https://api.whatsapp.com/send?phone=528131979805&text=Hola%20quiero%20informacion%20de%20los%20servicios%20de%20Dynamedia';
const cifras = [
  { n: 15, p: '+', l: 'años de experiencia' }, { n: 320, p: '+', l: 'proyectos desarrollados' },
  { n: 280, p: '+', l: 'clientes atendidos' }, { n: 4, p: '', l: 'áreas de especialidad' },
];
const palabras = ['Diseño web', 'Software a la medida', 'Ecommerce', 'Crecimiento digital', 'Capacitación', 'Soporte', 'SEO', 'Marketing digital'];
const pasos = [
  { icon: Search, t: 'Escuchamos', d: 'Entendemos tu negocio, tus clientes y lo que necesitas lograr.' },
  { icon: ClipboardList, t: 'Planeamos', d: 'Definimos alcances, tiempos y la mejor solución para ti.' },
  { icon: PenTool, t: 'Creamos', d: 'Diseñamos y desarrollamos tu sitio, sistema o campaña.' },
  { icon: Rocket, t: 'Lanzamos', d: 'Probamos, publicamos y ponemos todo a funcionar.' },
  { icon: LifeBuoy, t: 'Te acompañamos', d: 'Soporte, actualización y capacitación para que tu equipo sea autónomo.' },
];

const grafo = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'AboutPage', '@id': `${SITE}/nosotros#pagina`, url: `${SITE}/nosotros`, name: 'Somos Dynamedia', about: { '@id': NEGOCIO_ID }, isPartOf: { '@id': `${SITE}/#sitio` } },
  migas([{ name: 'Inicio', url: SITE }, { name: 'Nosotros', url: `${SITE}/nosotros` }]),
] };

export default function Nosotros() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(grafo)} />
        <section className="relative overflow-hidden bg-azul-oscuro pb-28 pt-40 text-white md:pb-36 md:pt-52">
          <div aria-hidden className="absolute -right-24 top-1/2 -translate-y-1/2 opacity-60 md:right-16 md:opacity-100">
            <div className="flota h-72 w-72 md:h-[26rem] md:w-[26rem]" style={{ background: 'linear-gradient(135deg,#F26B21 50%,#1B4F9C 50%)' }} />
          </div>
          <div aria-hidden className="absolute right-32 top-1/4 hidden md:block">
            <div className="flota-b h-36 w-36 bg-white/90" style={{ clipPath: 'polygon(0 0,100% 0,0 100%)' }} />
          </div>
          <div className="relative mx-auto max-w-6xl px-5">
            <nav aria-label="Ruta de navegación" className="text-sm text-white/70"><Link href="/" className="hover:text-white">Inicio</Link> / Nosotros</nav>
            <h1 className="mt-4 font-display text-[clamp(3rem,10vw,7.5rem)] font-extrabold uppercase leading-none tracking-tight">Somos Dynamedia</h1>
            <p className="mt-6 max-w-3xl font-display text-2xl font-bold leading-snug md:text-4xl">Más que proveedores, somos aliados tecnológicos de tu empresa.</p>
            <p className="mt-6 max-w-2xl text-lg text-white/85">En Dynamedia combinamos experiencia, estrategia y tecnología para desarrollar soluciones digitales que responden a las necesidades reales de cada negocio. Acompañamos a las empresas en su evolución digital, desde su presencia en internet hasta la optimización de sus procesos.</p>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-16 max-w-6xl px-5">
          <div className="grid gap-8 rounded-2xl bg-white p-8 shadow-xl sm:grid-cols-2 md:grid-cols-4">
            {cifras.map((c) => (
              <div key={c.l}>
                <p className="font-display text-4xl font-extrabold text-azul md:text-5xl"><Contador hasta={c.n} prefijo={c.p} /></p>
                <p className="mt-1 text-grafito/70">{c.l}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="marquee marquee-mascara overflow-hidden py-8" aria-hidden>
          <div className="marquee-pista" style={{ ['--dur' as string]: '45s' }}>
            {[0, 1, 2].map((c) => (
              <div key={c} className={`flex shrink-0 gap-12 pr-12 font-display text-2xl font-extrabold uppercase text-azul/15 md:text-4xl ${c > 0 ? 'copia' : ''}`}>
                {palabras.map((w) => <span key={w}>{w}</span>)}
              </div>
            ))}
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-5 py-12"><NosotrosTabs /></section>

        <section className="bg-niebla py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Cómo trabajamos</h2>
            <p className="mt-3 max-w-xl text-grafito/80">Un proceso claro, de la primera conversación al soporte posterior.</p>
            <div className="mt-5 flex flex-wrap gap-6 font-semibold text-azul">
              <Link href="/servicios" className="hover:text-naranja">Conoce nuestros servicios →</Link>
              <Link href="/#proyectos" className="hover:text-naranja">Mira nuestros proyectos →</Link>
            </div>
            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {pasos.map(({ icon: Icon, t, d }, k) => (
                <li key={t}>
                  <Reveal delay={k * 120} className="h-full">
                    <div className="group h-full rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none">
                      <span aria-hidden className="font-display text-5xl font-extrabold text-azul/10">{`0${k + 1}`}</span>
                      <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-lg bg-azul text-white transition-colors group-hover:bg-naranja"><Icon size={24} /></div>
                      <h3 className="mt-4 font-display text-lg font-bold text-azul">{t}</h3>
                      <p className="mt-2 text-sm text-grafito/80">{d}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <TestimoniosTabs />

        <section className="bg-azul-oscuro py-20 text-center text-white">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-5xl">¿Hablamos de tu proyecto?</h2>
            <p className="mt-4 text-lg text-white/80">Cuéntanos qué necesitas y te respondemos pronto.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/#contacto" className="rounded-full bg-naranja px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-naranja-claro">Contacto</Link>
              <a href={WA} className="flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-white/10"><MessageCircle size={18} /> WhatsApp</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
