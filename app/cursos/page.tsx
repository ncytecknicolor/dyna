import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check, MessageCircle, Presentation, Laptop, Target, MessagesSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Faq from '@/components/Faq';
import Audiencia from '@/components/Audiencia';
import Reveal from '@/components/Reveal';
import { Tarjeta, Magnetico, Parallax, Inclinar } from '@/components/ui';
import { MockNavegador, BuscadorTyping } from '@/components/Visuales';
import { cursos, type Curso } from '@/lib/cursos';
import { SITE, WA_BASE } from '@/lib/site';
import { metaPagina } from '@/lib/seo';
import { migas } from '@/lib/schema';

export const metadata: Metadata = metaPagina({
  title: 'Cursos en línea de WordPress y SEO | Dynamedia',
  description: 'Cursos en línea de WordPress y de posicionamiento web en Google de Dynamedia (Monterrey, N.L.). Aprende a crear y posicionar tu sitio. Pregunta por fechas.',
  path: '/cursos', imagen: '/og/cursos.jpg',
});

const pasos = [
  { icon: Presentation, t: 'Explicamos lo esencial', d: 'Sesiones claras, sin tecnicismos innecesarios.' },
  { icon: Laptop, t: 'Practicas con nosotros', d: 'Ejercicios guiados paso a paso.' },
  { icon: Target, t: 'Trabajas en tu proyecto', d: 'Aplicas lo aprendido a tu propio sitio o negocio.' },
  { icon: MessagesSquare, t: 'Resuelves tus dudas', d: 'Te orientamos durante y después del curso.' },
];
const filas: { t: string; v: (c: Curso) => string }[] = [
  { t: 'Para qué sirve', v: (c) => c.corto },
  { t: 'Ideal si eres…', v: (c) => c.paraQuien[0] },
  { t: 'Práctica', v: (c) => c.practica },
  { t: 'Contenido', v: (c) => `${c.temario.length} módulos` },
];
const faqs = [
  { q: '¿Los cursos son en línea?', a: 'Sí. Nuestros cursos de WordPress y de posicionamiento web son en línea, para que los tomes desde donde estés.' },
  { q: '¿Puedo tomar los dos cursos?', a: 'Sí. Se complementan: primero creas o administras tu sitio con WordPress y después aprendes a posicionarlo en Google.' },
  { q: '¿Capacitan a equipos de empresas?', a: 'Podemos preparar talleres a la medida de tu equipo. Cuéntanos tus objetivos y te proponemos un temario.' },
  { q: '¿Cuánto cuestan y cuándo son las próximas fechas?', a: 'Pregúntanos por fechas, horarios y costos; te respondemos por WhatsApp o por correo.' },
];
const frases = ['curso de seo en línea', 'agencia de marketing digital monterrey', 'cómo salir en google maps', 'diseño web monterrey'];

export default function Cursos() {
  const wa = `${WA_BASE}${encodeURIComponent('Hola, quiero información sobre los cursos de Dynamedia en Monterrey')}`;
  const grafo = { '@context': 'https://schema.org', '@graph': [
    migas([{ name: 'Inicio', url: SITE }, { name: 'Cursos', url: `${SITE}/cursos` }]),
    { '@type': 'ItemList', name: 'Cursos de Dynamedia en Monterrey', itemListElement: cursos.map((c, k) => ({ '@type': 'ListItem', position: k + 1, name: c.nombre, url: `${SITE}/cursos/${c.slug}` })) },
    { '@type': 'FAQPage', mainEntity: faqs.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) },
  ] };
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(grafo) }} />
        <section className="relative overflow-hidden bg-azul-oscuro pb-28 pt-40 text-white md:pb-36 md:pt-52">
          <div aria-hidden className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(60% 80% at 85% 20%, rgba(242,107,33,.55), transparent 60%)' }} />
          <Parallax className="absolute -right-16 top-1/2 -translate-y-1/2 md:right-16">
            <div aria-hidden className="flota h-72 w-72 opacity-70 md:h-[26rem] md:w-[26rem] md:opacity-100" style={{ background: 'linear-gradient(135deg,#F26B21 50%,#1B4F9C 50%)' }} />
          </Parallax>
          <div className="relative mx-auto max-w-6xl px-5">
            <nav aria-label="Ruta de navegación" className="text-sm text-white/70"><Link href="/" className="hover:text-white">Inicio</Link> / Cursos</nav>
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-naranja-claro">Cursos en línea</p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">Cursos en línea de WordPress y posicionamiento en Google</h1>
            <p className="mt-6 max-w-2xl text-xl text-white/85">Aprende a crear, administrar y posicionar tu propio sitio web con práctica guiada, desde donde estés.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Magnetico><a href="#cursos-disponibles" className="brillo block rounded-full bg-naranja px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-naranja-claro">Ver los cursos</a></Magnetico>
              <Magnetico><a href={wa} className="flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-white/10"><MessageCircle size={18} /> Pregunta por fechas</a></Magnetico>
            </div>
          </div>
        </section>

        <section id="cursos-disponibles" className="mx-auto max-w-6xl scroll-mt-8 px-5 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Elige tu curso</h2>
          <p className="mt-3 max-w-xl text-grafito/80">Dos cursos que se complementan: crea tu sitio y aprende a posicionarlo.</p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {cursos.map((c, k) => (
              <Reveal key={c.slug} delay={k * 150} className="h-full">
                <Inclinar className="h-full">
                  <Link href={`/cursos/${c.slug}`} className="block h-full">
                    <Tarjeta className="h-full border border-black/10 bg-white" inner="relative flex h-full flex-col">
                      <div className="bg-gradient-to-br from-azul-oscuro to-azul p-6">
                        {c.visual === 'navegador' ? <MockNavegador /> : <BuscadorTyping frases={frases} />}
                      </div>
                      <div className="flex flex-1 flex-col p-8">
                        <p className="text-sm font-semibold uppercase tracking-widest text-naranja">Curso en línea</p>
                        <h3 className="mt-1 font-display text-2xl font-bold text-azul">{c.nombre}</h3>
                        <p className="mt-2 text-grafito/80">{c.corto}</p>
                        <ul className="mt-5 space-y-2">{c.aprenderas.slice(0, 3).map((a) => <li key={a} className="flex gap-2 text-sm"><Check size={18} className="mt-0.5 shrink-0 text-naranja" />{a}</li>)}</ul>
                        <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-azul group-hover:text-naranja">Ver temario y detalles <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                      </div>
                    </Tarjeta>
                  </Link>
                </Inclinar>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-niebla py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-4xl">¿Quién puede aprovecharlos?</h2>
            <p className="mb-10 mt-3 max-w-xl text-grafito/80">Elige tu perfil y te decimos por dónde empezar.</p>
            <Audiencia />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Aprendes haciendo</h2>
          <Reveal className="mt-12">
            <div className="relative grid gap-8 md:grid-cols-4">
              <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-0.5 origin-left scale-x-0 bg-gradient-to-r from-azul to-naranja transition-transform duration-[1400ms] group-data-[v=true]/rv:scale-x-100 md:block motion-reduce:scale-x-100" />
              {pasos.map(({ icon: Icon, t, d }) => (
                <div key={t} className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-azul text-white shadow"><Icon size={20} /></div>
                  <h3 className="mt-4 font-display text-lg font-bold text-azul">{t}</h3>
                  <p className="mt-1 text-grafito/80">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="bg-niebla py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-4xl">¿Cuál curso es para ti?</h2>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-black/10 bg-white shadow-sm">
              <table className="w-full min-w-[42rem] text-left">
                <thead>
                  <tr><th className="p-5" />{cursos.map((c) => <th key={c.slug} className="p-5 font-display text-lg text-azul"><Link href={`/cursos/${c.slug}`} className="hover:text-naranja">{c.nombre}</Link></th>)}</tr>
                </thead>
                <tbody>
                  {filas.map((r) => (
                    <tr key={r.t} className="border-t border-black/10 transition-colors hover:bg-niebla/60">
                      <th scope="row" className="p-5 align-top text-sm font-semibold uppercase tracking-wider text-naranja">{r.t}</th>
                      {cursos.map((c) => <td key={c.slug} className="p-5 align-top text-grafito/85">{r.v(c)}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-grafito py-20 text-white">
          <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rotate-45 opacity-20" style={{ background: 'linear-gradient(135deg,#F26B21 50%,#1B4F9C 50%)' }} />
          <div className="relative mx-auto max-w-4xl px-5 text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">¿Necesitas capacitar a todo tu equipo?</h2>
            <p className="mt-4 text-lg text-white/80">Preparamos talleres a la medida de lo que necesita tu empresa.</p>
            <div className="mt-8"><Magnetico><Link href="/servicios/capacitacion" className="brillo block rounded-full bg-naranja px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-naranja-claro">Capacitación a la medida</Link></Magnetico></div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Preguntas frecuentes</h2>
          <div className="mt-8"><Faq items={faqs} /></div>
        </section>

        <section className="bg-azul-oscuro py-20 text-center text-white">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-5xl">Reserva tu lugar</h2>
            <p className="mt-4 text-lg text-white/80">Escríbenos y te compartimos fechas, horarios y costos.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Magnetico><a href={wa} className="brillo flex items-center gap-2 rounded-full bg-naranja px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-naranja-claro"><MessageCircle size={18} /> WhatsApp</a></Magnetico>
              <Magnetico><Link href="/?servicio=capacitacion#contacto" className="block rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-white/10">Contacto</Link></Magnetico>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
