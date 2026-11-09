import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check, MapPin, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Faq from '@/components/Faq';
import IncluyeTabs from '@/components/IncluyeTabs';
import Reveal from '@/components/Reveal';
import { Tarjeta, Magnetico, Parallax } from '@/components/ui';
import { servicios, porSlug, cursosDeServicio } from '@/lib/servicios';
import { cursoPorSlug } from '@/lib/cursos';
import { metaPagina } from '@/lib/seo';
import { NEGOCIO_ID } from '@/lib/schema';
import ProyectosRelacionados from '@/components/ProyectosRelacionados';
import { iconos } from '@/lib/iconos';
import { SITE, WA_BASE, ZONAS } from '@/lib/site';

export function generateStaticParams() { return servicios.map((s) => ({ slug: s.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = porSlug(params.slug);
  if (!s) return {};
  return metaPagina({ title: s.title, description: s.description, path: `/servicios/${s.slug}`, imagen: `/og/servicios-${s.slug}.jpg`, imagenAlt: s.h1 });
}

export default function ServicioPage({ params }: { params: { slug: string } }) {
  const s = porSlug(params.slug);
  if (!s) notFound();
  const Icono = iconos[s.icono];
  const cursosSrv = (cursosDeServicio[s.slug] ?? []).flatMap((x) => { const c = cursoPorSlug(x); return c ? [c] : []; });
  const url = `${SITE}/servicios/${s.slug}`;
  const wa = `${WA_BASE}${encodeURIComponent(`Hola, quiero información sobre ${s.nombre} en Monterrey`)}`;
  const grafo = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', '@id': `${url}#servicio`, name: s.h1, serviceType: s.nombre, description: s.description, url,
        areaServed: [{ '@type': 'City', name: 'Monterrey' }, { '@type': 'State', name: 'Nuevo León' }],
        provider: { '@id': NEGOCIO_ID } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE}/servicios` },
        { '@type': 'ListItem', position: 3, name: s.nombre, item: url } ] },
      { '@type': 'FAQPage', mainEntity: s.faqs.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(grafo) }} />

        <section className="relative overflow-hidden bg-azul-oscuro pb-24 pt-40 text-white md:pb-32 md:pt-48">
          <div aria-hidden className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(60% 80% at 85% 20%, rgba(242,107,33,.55), transparent 60%)' }} />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <nav aria-label="Ruta de navegación" className="text-sm text-white/70">
                <Link href="/" className="hover:text-white">Inicio</Link> / <Link href="/servicios" className="hover:text-white">Servicios</Link> / {s.nombre}
              </nav>
              <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-naranja-claro">Servicio en Monterrey, Nuevo León</p>
              <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-6xl">{s.h1}</h1>
              <p className="mt-6 max-w-2xl text-lg text-white/85">{s.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Magnetico><Link href={`/?servicio=${s.slug}#contacto`} className="brillo block rounded-full bg-naranja px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-naranja-claro">Cotiza este servicio</Link></Magnetico>
                <Magnetico><a href={wa} className="flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-white/10"><MessageCircle size={18} /> WhatsApp</a></Magnetico>
              </div>
            </div>
            <Parallax className="relative mx-auto hidden h-80 w-80 lg:block">
              <div aria-hidden className="flota absolute inset-6" style={{ background: 'linear-gradient(135deg,#F26B21 50%,#1B4F9C 50%)' }} />
              <div aria-hidden className="absolute inset-0 flex items-center justify-center"><Icono size={104} strokeWidth={1.4} className="text-white drop-shadow-lg" /></div>
            </Parallax>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-bold md:text-4xl">{s.nombre} en Monterrey: cómo te ayudamos</h2>
            {s.intro.map((p) => <p key={p} className="mt-5 text-lg text-grafito/85">{p}</p>)}
          </Reveal>
          <Reveal delay={150}>
            <aside className="lg:sticky lg:top-8">
              <Tarjeta className="border border-black/10 bg-white p-8">
                <h3 className="font-display text-xl font-bold text-azul">Ideal para</h3>
                <ul className="mt-4 space-y-3">{s.para.map((p) => <li key={p} className="flex gap-2"><Check size={18} className="mt-1 shrink-0 text-naranja" />{p}</li>)}</ul>
                <Link href={`/?servicio=${s.slug}#contacto`} className="mt-6 inline-flex items-center gap-2 font-semibold text-azul hover:text-naranja">Cuéntanos tu caso <ArrowUpRight size={18} /></Link>
              </Tarjeta>
            </aside>
          </Reveal>
        </section>

        <section className="bg-niebla py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Qué incluye el servicio de {s.nombre} en Monterrey</h2>
            <p className="mb-10 mt-3 max-w-2xl text-grafito/80">Recorre cada componente para ver en qué consiste.</p>
            <IncluyeTabs items={s.incluye} icono={s.icono} />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Beneficios para tu empresa</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {s.beneficios.map((b, k) => (
              <Reveal key={b.t} delay={k * 100} className={`h-full ${k === 0 || k === 3 ? 'md:col-span-2' : ''}`}>
                <Tarjeta className="h-full border border-black/10 bg-white p-7" inner="relative flex h-full flex-col">
                  <span aria-hidden className="font-display text-5xl font-extrabold text-azul/10 transition-colors group-hover:text-naranja/30">{`0${k + 1}`}</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-azul">{b.t}</h3>
                  <p className="mt-2 text-grafito/80">{b.d}</p>
                </Tarjeta>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-niebla py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Cómo trabajamos</h2>
            <Reveal className="mt-12">
              <div className="relative grid gap-8 md:grid-cols-4">
                <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-0.5 origin-left scale-x-0 bg-gradient-to-r from-azul to-naranja transition-transform duration-[1400ms] group-data-[v=true]/rv:scale-x-100 md:block motion-reduce:scale-x-100" />
                {s.pasos.map((p, k) => (
                  <div key={p.t} className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-niebla bg-azul font-display font-bold text-white shadow">{k + 1}</div>
                    <h3 className="mt-4 font-display text-lg font-bold text-azul">{p.t}</h3>
                    <p className="mt-1 text-grafito/80">{p.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-grafito py-24 text-white">
          <span aria-hidden className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 select-none font-display text-[12rem] font-extrabold leading-none md:text-[20rem]" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.12)', color: 'transparent' }}>MTY</span>
          <div className="relative mx-auto max-w-6xl px-5">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-naranja-claro"><MapPin size={16} /> Monterrey, Nuevo León</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold md:text-4xl">{s.nombre} en Monterrey, Nuevo León</h2>
            <p className="mt-4 max-w-2xl text-lg text-white/80">Estamos en Monterrey y trabajamos con empresas del área metropolitana y de todo México. Si estás por aquí, cuéntanos tu proyecto y te proponemos la mejor forma de trabajarlo.</p>
            <ul className="mt-6 flex flex-wrap gap-3">{ZONAS.map((z) => <li key={z} className="rounded-full border border-white/25 px-4 py-1.5 text-sm">{z}</li>)}</ul>
            <div className="mt-8"><Magnetico><Link href={`/?servicio=${s.slug}#contacto`} className="brillo block rounded-full bg-naranja px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-naranja-claro">Solicita una cotización</Link></Magnetico></div>
          </div>
        </section>

        <ProyectosRelacionados slugs={[s.slug]} servicio={s.nombre} />

        {cursosSrv.length > 0 && (
          <section className="bg-niebla py-16">
            <div className="mx-auto max-w-6xl px-5">
              <h2 className="font-display text-3xl font-bold md:text-4xl">¿Prefieres aprender a hacerlo tú?</h2>
              <p className="mt-3 max-w-2xl text-grafito/80">Si quieres manejar esto por tu cuenta, también ofrecemos cursos en línea.</p>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {cursosSrv.map((c) => {
                  const I = iconos[c.icono];
                  return (
                    <Link key={c.slug} href={`/cursos/${c.slug}`} className="block h-full">
                      <Tarjeta className="h-full border border-black/10 bg-white p-7" inner="relative flex h-full flex-col">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-azul text-white transition-colors group-hover:bg-naranja"><I size={24} /></div>
                        <h3 className="mt-4 font-display text-xl font-bold text-azul">{c.nombre}</h3>
                        <p className="mt-2 text-grafito/80">{c.corto}</p>
                        <span className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-naranja">Ver el curso <ArrowUpRight size={18} /></span>
                      </Tarjeta>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-4xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Preguntas frecuentes</h2>
          <div className="mt-8"><Faq items={s.faqs} /></div>
        </section>

        <section className="bg-niebla py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Servicios relacionados</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {s.relacionados.map((sl) => {
                const r = porSlug(sl)!; const I = iconos[r.icono];
                return (
                  <Link key={sl} href={`/servicios/${sl}`} className="block h-full">
                    <Tarjeta className="h-full border border-black/10 bg-white p-7" inner="relative flex h-full flex-col">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-azul text-white transition-colors group-hover:bg-naranja"><I size={24} /></div>
                      <h3 className="mt-4 font-display text-xl font-bold text-azul">{r.nombre}</h3>
                      <p className="mt-2 text-grafito/80">{r.corto}</p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-naranja">Conocer más <ArrowUpRight size={18} /></span>
                    </Tarjeta>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-azul-oscuro py-20 text-center text-white">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-5xl">¿Listo para empezar?</h2>
            <p className="mt-4 text-lg text-white/80">Platícanos tu proyecto de {s.nombre.toLowerCase().replace(' (ppc)', '')} y te respondemos pronto.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Magnetico><Link href={`/?servicio=${s.slug}#contacto`} className="brillo block rounded-full bg-naranja px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-naranja-claro">Contacto</Link></Magnetico>
              <Magnetico><a href={wa} className="flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-white/10"><MessageCircle size={18} /> WhatsApp</a></Magnetico>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
