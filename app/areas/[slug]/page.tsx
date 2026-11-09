import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Faq from '@/components/Faq';
import Reveal from '@/components/Reveal';
import SeccionContacto from '@/components/SeccionContacto';
import ProyectosRelacionados from '@/components/ProyectosRelacionados';
import { Tarjeta, Magnetico, Parallax } from '@/components/ui';
import { areas, areaPorSlug } from '@/lib/areas';
import { porSlug } from '@/lib/servicios';
import { iconos } from '@/lib/iconos';
import { metaPagina } from '@/lib/seo';
import { NEGOCIO_ID, migas } from '@/lib/schema';
import { SITE, WA_BASE } from '@/lib/site';

export function generateStaticParams() { return areas.map((a) => ({ slug: a.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = areaPorSlug(params.slug);
  if (!a) return {};
  return metaPagina({ title: a.title, description: a.description, path: `/areas/${a.slug}`, imagen: `/og/areas-${a.slug}.jpg`, imagenAlt: a.h1 });
}

const traer = (slugs: string[]) => slugs.flatMap((s) => { const x = porSlug(s); return x ? [x] : []; });

export default function AreaPage({ params }: { params: { slug: string } }) {
  const a = areaPorSlug(params.slug);
  if (!a) notFound();
  const Icono = iconos[a.icono];
  const url = `${SITE}/areas/${a.slug}`;
  const servs = traer(a.servicios);
  const rels = traer(a.relacionados);
  const wa = `${WA_BASE}${encodeURIComponent(`Hola, quiero información sobre ${a.nombre} en Monterrey`)}`;
  const grafo = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', '@id': `${url}#servicio`, name: a.h1, serviceType: a.nombre, description: a.description, url, provider: { '@id': NEGOCIO_ID },
      areaServed: [{ '@type': 'City', name: 'Monterrey' }, { '@type': 'State', name: 'Nuevo León' }],
      hasOfferCatalog: { '@type': 'OfferCatalog', name: a.nombre, itemListElement: servs.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.nombre, url: `${SITE}/servicios/${s.slug}` } })) } },
    migas([{ name: 'Inicio', url: SITE }, { name: 'Servicios', url: `${SITE}/servicios` }, { name: a.nombre, url }]),
    { '@type': 'FAQPage', mainEntity: a.faqs.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) },
  ] };

  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(grafo) }} />

        <section className="relative overflow-hidden bg-azul-oscuro pb-24 pt-40 text-white md:pb-32 md:pt-48">
          <div aria-hidden className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(60% 80% at 85% 20%, rgba(242,107,33,.55), transparent 60%)' }} />
          <span aria-hidden className="pointer-events-none absolute -bottom-16 right-4 select-none font-display text-[14rem] font-extrabold leading-none md:text-[24rem]" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)', color: 'transparent' }}>{a.n}</span>
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <nav aria-label="Ruta de navegación" className="text-sm text-white/70"><Link href="/" className="hover:text-white">Inicio</Link> / <Link href="/servicios" className="hover:text-white">Servicios</Link> / {a.nombre}</nav>
              <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-naranja-claro">Área de especialidad {a.n} · Monterrey, Nuevo León</p>
              <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-6xl">{a.h1}</h1>
              <p className="mt-6 max-w-2xl font-display text-xl font-semibold text-white md:text-2xl">{a.titulo}</p>
              <p className="mt-4 max-w-2xl text-lg text-white/85">{a.texto}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Magnetico><a href="#contacto" className="brillo block rounded-full bg-naranja px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-naranja-claro">Cotiza esta área</a></Magnetico>
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
            <h2 className="font-display text-3xl font-bold md:text-4xl">{a.nombre} para empresas en Monterrey</h2>
            {a.intro.map((p) => <p key={p} className="mt-5 text-lg text-grafito/85">{p}</p>)}
          </Reveal>
          <Reveal delay={150}>
            <aside className="lg:sticky lg:top-8">
              <Tarjeta className="border border-black/10 bg-white p-8">
                <h3 className="font-display text-xl font-bold text-azul">Esta área incluye</h3>
                <ul className="mt-4 space-y-3">{a.lista.map((x) => <li key={x} className="flex gap-2"><Check size={18} className="mt-1 shrink-0 text-naranja" />{x}</li>)}</ul>
                <a href="#contacto" className="mt-6 inline-flex items-center gap-2 font-semibold text-azul hover:text-naranja">Cuéntanos tu proyecto <ArrowUpRight size={18} /></a>
              </Tarjeta>
            </aside>
          </Reveal>
        </section>

        <section className="bg-niebla py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Servicios de {a.nombre.toLowerCase()}</h2>
            <p className="mt-3 max-w-2xl text-grafito/80">Cada servicio tiene su propia página con todo lo que incluye, el proceso y las preguntas frecuentes.</p>
            <div className={`mt-10 grid gap-6 ${servs.length > 1 ? 'md:grid-cols-2' : ''}`}>
              {servs.map((s, k) => {
                const I = iconos[s.icono];
                return (
                  <Reveal key={s.slug} delay={(k % 2) * 120} className="h-full">
                    <Link href={`/servicios/${s.slug}`} className="block h-full">
                      <Tarjeta className="h-full border border-black/10 bg-white p-8" inner="relative flex h-full flex-col">
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-azul text-white transition-all duration-300 group-hover:rotate-6 group-hover:bg-naranja"><I size={28} /></div>
                          <h3 className="font-display text-xl font-bold text-azul">{s.nombre}</h3>
                        </div>
                        <p className="mt-4 text-grafito/80">{s.corto}</p>
                        <ul className="mt-5 space-y-2">{s.incluye.slice(0, 3).map((x) => <li key={x.t} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-naranja" />{x.t}</li>)}</ul>
                        <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-naranja">Ver el servicio completo <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                      </Tarjeta>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Beneficios para tu empresa</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {a.beneficios.map((b, k) => (
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
                {a.pasos.map((p, k) => (
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

        <ProyectosRelacionados slugs={a.servicios} servicio={a.nombre} />

        <section className="mx-auto max-w-4xl px-5 pb-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Preguntas frecuentes</h2>
          <div className="mt-8"><Faq items={a.faqs} /></div>
        </section>

        <section className="bg-niebla py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Servicios relacionados</h2>
            <p className="mt-3 max-w-2xl text-grafito/80">Otros servicios que se complementan con {a.nombre.toLowerCase()}.</p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {rels.map((r) => {
                const I = iconos[r.icono];
                return (
                  <Link key={r.slug} href={`/servicios/${r.slug}`} className="block h-full">
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

        <SeccionContacto preseleccion={a.servicios.slice(0, 1)} />
      </main>
      <Footer />
    </>
  );
}
