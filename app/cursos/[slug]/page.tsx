import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check, Laptop, ListChecks, CalendarDays, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Faq from '@/components/Faq';
import Temario from '@/components/Temario';
import Contador from '@/components/Contador';
import Reveal from '@/components/Reveal';
import { Tarjeta, Magnetico, Parallax } from '@/components/ui';
import { MockNavegador, BuscadorTyping } from '@/components/Visuales';
import { cursos, cursoPorSlug } from '@/lib/cursos';
import { porSlug } from '@/lib/servicios';
import { iconos } from '@/lib/iconos';
import { SITE, WA_BASE } from '@/lib/site';
import { metaPagina } from '@/lib/seo';
import { NEGOCIO_ID } from '@/lib/schema';

export function generateStaticParams() { return cursos.map((c) => ({ slug: c.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = cursoPorSlug(params.slug);
  if (!c) return {};
  return metaPagina({ title: c.title, description: c.description, path: `/cursos/${c.slug}`, imagen: `/og/cursos-${c.slug}.jpg`, imagenAlt: c.h1 });
}

const frases = ['curso de seo en monterrey', 'cómo posicionar mi sitio en google', 'seo local monterrey', 'cómo salir en google maps'];

export default function CursoPage({ params }: { params: { slug: string } }) {
  const c = cursoPorSlug(params.slug);
  if (!c) notFound();
  const url = `${SITE}/cursos/${c.slug}`;
  const wa = `${WA_BASE}${encodeURIComponent(`Hola, quiero información del ${c.nombre.charAt(0).toLowerCase()}${c.nombre.slice(1)}`)}`;
  const otro = cursos.find((x) => x.slug !== c.slug)!;
  const serv = porSlug(c.servicio)!;
  const Icono = iconos[c.icono];
  const grafo = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Course', name: c.h1, description: c.description, url, inLanguage: 'es-MX', provider: { '@id': NEGOCIO_ID },
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online' } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE }, { '@type': 'ListItem', position: 2, name: 'Cursos', item: `${SITE}/cursos` }, { '@type': 'ListItem', position: 3, name: c.nombre, item: url } ] },
    { '@type': 'FAQPage', mainEntity: c.faqs.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) },
  ] };
  const tarjetasLista = [{ t: 'Es ideal para', l: c.paraQuien }, { t: 'Requisitos', l: c.requisitos }, { t: 'Qué incluye', l: c.incluye }];
  const otros = [
    { h: `/cursos/${otro.slug}`, t: otro.nombre, d: otro.corto, I: iconos[otro.icono] },
    { h: `/servicios/${serv.slug}`, t: `Servicio: ${serv.nombre}`, d: serv.corto, I: iconos[serv.icono] },
    { h: '/servicios/capacitacion', t: 'Capacitación a la medida', d: 'Talleres diseñados para las necesidades de tu equipo.', I: iconos.GraduationCap },
  ];

  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(grafo) }} />

        <section className="relative overflow-hidden bg-azul-oscuro pb-24 pt-40 text-white md:pb-32 md:pt-48">
          <div aria-hidden className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(60% 80% at 85% 20%, rgba(242,107,33,.55), transparent 60%)' }} />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <nav aria-label="Ruta de navegación" className="text-sm text-white/70">
                <Link href="/" className="hover:text-white">Inicio</Link> / <Link href="/cursos" className="hover:text-white">Cursos</Link> / {c.nombre}
              </nav>
              <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-naranja-claro">Curso en línea</p>
              <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-6xl">{c.h1}</h1>
              <p className="mt-6 max-w-2xl text-lg text-white/85">{c.description}</p>
              <ul className="mt-6 flex flex-wrap gap-3 text-sm">
                {['En línea', 'Práctica guiada', 'Material de apoyo'].map((x) => <li key={x} className="rounded-full border border-white/25 px-4 py-1.5">{x}</li>)}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Magnetico><a href={wa} className="brillo flex items-center gap-2 rounded-full bg-naranja px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-naranja-claro"><MessageCircle size={18} /> Pregunta por fechas</a></Magnetico>
                <Magnetico><a href="#temario" className="block rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-white/10">Ver temario</a></Magnetico>
              </div>
            </div>
            <Parallax className="relative mx-auto w-full max-w-md">
              <div aria-hidden className="flota absolute -right-8 -top-8 h-40 w-40 opacity-80" style={{ background: 'linear-gradient(135deg,#F26B21 50%,#1B4F9C 50%)' }} />
              <div className="relative">{c.visual === 'navegador' ? <MockNavegador /> : <BuscadorTyping frases={frases} />}</div>
            </Parallax>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-bold md:text-4xl">{c.nombre}: de qué trata</h2>
            {c.intro.map((p) => <p key={p} className="mt-5 text-lg text-grafito/85">{p}</p>)}
          </Reveal>
          <Reveal delay={150}>
            <aside className="lg:sticky lg:top-8">
              <Tarjeta className="border border-black/10 bg-white p-8">
                <h3 className="font-display text-xl font-bold text-azul">Datos del curso</h3>
                <ul className="mt-5 space-y-4">
                  <li className="flex gap-3"><Laptop size={20} className="mt-0.5 shrink-0 text-naranja" /><span><strong>Modalidad:</strong> en línea, desde donde estés</span></li>
                  <li className="flex gap-3"><ListChecks size={20} className="mt-0.5 shrink-0 text-naranja" /><span><strong>Contenido:</strong> {c.temario.length} módulos prácticos</span></li>
                  <li className="flex gap-3"><CalendarDays size={20} className="mt-0.5 shrink-0 text-naranja" /><span><strong>Fechas y costo:</strong> pregúntanos y te respondemos pronto</span></li>
                </ul>
                <a href={wa} className="mt-6 inline-flex items-center gap-2 font-semibold text-azul hover:text-naranja">Consultar por WhatsApp <ArrowUpRight size={18} /></a>
              </Tarjeta>
            </aside>
          </Reveal>
        </section>

        <section className="bg-niebla py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Lo que aprenderás en el {c.nombre.replace('Curso de ', 'curso de ')}</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.aprenderas.map((a, k) => (
                <Reveal key={a} delay={(k % 3) * 100} className="h-full">
                  <Tarjeta className="h-full border border-black/10 bg-white p-6" inner="relative flex h-full flex-col">
                    <span aria-hidden className="font-display text-4xl font-extrabold text-azul/10 transition-colors group-hover:text-naranja/30">{`0${k + 1}`}</span>
                    <p className="mt-2 flex gap-2 font-semibold text-azul"><Check size={20} className="mt-0.5 shrink-0 text-naranja" />{a}</p>
                  </Tarjeta>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="temario" className="mx-auto max-w-6xl scroll-mt-8 px-5 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Temario del curso</h2>
          <p className="mb-10 mt-3 max-w-2xl text-grafito/80">Recorre los módulos, uno por uno, para ver qué trabajarás en cada sesión.</p>
          <Temario modulos={c.temario} />
        </section>

        <section className="relative overflow-hidden bg-grafito py-20 text-white">
          <Icono aria-hidden className="pointer-events-none absolute -right-10 top-1/2 h-80 w-80 -translate-y-1/2 text-white/5" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[auto_1fr]">
            <div>
              <p className="font-display text-[7rem] font-extrabold leading-none text-naranja-claro md:text-[9rem]"><Contador hasta={c.temario.length} /></p>
              <p className="font-display text-xl font-bold">módulos prácticos</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-naranja-claro">Tu proyecto</p>
              <p className="mt-3 font-display text-2xl font-bold leading-snug md:text-3xl">{c.practica}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-5 md:grid-cols-3">
            {tarjetasLista.map(({ t, l }, k) => (
              <Reveal key={t} delay={k * 120} className="h-full">
                <Tarjeta className="h-full border border-black/10 bg-white p-7">
                  <h3 className="font-display text-xl font-bold text-azul">{t}</h3>
                  <ul className="mt-4 space-y-3">{l.map((x) => <li key={x} className="flex gap-2"><Check size={18} className="mt-1 shrink-0 text-naranja" />{x}</li>)}</ul>
                </Tarjeta>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-niebla py-20">
          <div className="mx-auto max-w-4xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Preguntas frecuentes</h2>
            <div className="mt-8"><Faq items={c.faqs} /></div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Sigue aprendiendo</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {otros.map(({ h, t, d, I }) => (
              <Link key={h} href={h} className="block h-full">
                <Tarjeta className="h-full border border-black/10 bg-white p-7" inner="relative flex h-full flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-azul text-white transition-colors group-hover:bg-naranja"><I size={24} /></div>
                  <h3 className="mt-4 font-display text-xl font-bold text-azul">{t}</h3>
                  <p className="mt-2 text-grafito/80">{d}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-naranja">Conocer más <ArrowUpRight size={18} /></span>
                </Tarjeta>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-azul-oscuro py-20 text-center text-white">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-5xl">Reserva tu lugar</h2>
            <p className="mt-4 text-lg text-white/80">Escríbenos y te compartimos fechas, horarios y costo del {c.nombre.charAt(0).toLowerCase()}{c.nombre.slice(1)}.</p>
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
