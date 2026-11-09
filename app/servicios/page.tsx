import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExploraServicios from '@/components/ExploraServicios';
import Reveal from '@/components/Reveal';
import { Tarjeta, Magnetico, Parallax } from '@/components/ui';
import { servicios, porSlug } from '@/lib/servicios';
import { areas } from '@/lib/areas';
import { iconos } from '@/lib/iconos';
import { SITE, WA } from '@/lib/site';
import { metaPagina } from '@/lib/seo';
import { migas, jsonLd } from '@/lib/schema';

export const metadata: Metadata = metaPagina({
  title: 'Servicios digitales en Monterrey: web, SEO y software | Dynamedia',
  description: 'Diseño web, SEO, Google Ads, redes sociales, tiendas en línea, software a la medida y más en Monterrey. Elige tu servicio y cotiza con Dynamedia.',
  path: '/servicios', imagen: '/og/servicios.jpg',
});

const objetivos = [
  { t: 'Quiero que más clientes me encuentren', slugs: ['posicionamiento-en-google', 'campanas-pago-por-clic', 'redes-sociales-para-pymes'] },
  { t: 'Quiero vender por internet', slugs: ['tiendas-virtuales', 'diseno-web', 'contenido-con-ia'] },
  { t: 'Quiero ordenar y hacer crecer mi negocio', slugs: ['software-a-la-medida', 'capacitacion', 'diseno-grafico'] },
];

export default function Servicios() {
  const lista = { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Servicios de Dynamedia en Monterrey',
    itemListElement: servicios.map((s, k) => ({ '@type': 'ListItem', position: k + 1, name: s.nombre, url: `${SITE}/servicios/${s.slug}` })) };
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lista) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd({ '@context': 'https://schema.org', ...migas([{ name: 'Inicio', url: SITE }, { name: 'Servicios', url: `${SITE}/servicios` }]) })} />
        <section className="relative overflow-hidden bg-azul-oscuro pb-28 pt-40 text-white md:pb-36 md:pt-52">
          <div aria-hidden className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(60% 80% at 85% 20%, rgba(242,107,33,.55), transparent 60%)' }} />
          <Parallax className="absolute -right-16 top-1/2 -translate-y-1/2 md:right-16">
            <div aria-hidden className="flota h-72 w-72 opacity-70 md:h-[26rem] md:w-[26rem] md:opacity-100" style={{ background: 'linear-gradient(135deg,#F26B21 50%,#1B4F9C 50%)' }} />
          </Parallax>
          <div className="relative mx-auto max-w-6xl px-5">
            <nav aria-label="Ruta de navegación" className="text-sm text-white/70"><Link href="/" className="hover:text-white">Inicio</Link> / Servicios</nav>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">Servicios de diseño web, software y marketing digital en Monterrey</h1>
            <p className="mt-6 max-w-2xl text-xl text-white/85">Nueve servicios para que tu empresa de Monterrey, Nuevo León, tenga presencia, tecnología y clientes. Elige uno para conocerlo a fondo.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Magnetico><Link href="/#contacto" className="brillo block rounded-full bg-naranja px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-naranja-claro">Cotiza tu proyecto</Link></Magnetico>
              <Magnetico><a href={WA} className="flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-white/10"><MessageCircle size={18} /> WhatsApp</a></Magnetico>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pt-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Nuestras 4 áreas de especialidad</h2>
          <p className="mt-3 max-w-xl text-grafito/80">Cada área reúne los servicios que se complementan entre sí.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a) => { const I = iconos[a.icono]; return (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="block h-full">
                <Tarjeta className="h-full border border-black/10 bg-white p-6" inner="relative flex h-full flex-col">
                  <div className="flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-azul text-white transition-colors group-hover:bg-naranja"><I size={24} /></div><span aria-hidden className="font-display text-4xl font-extrabold text-azul/10">{a.n}</span></div>
                  <h3 className="mt-4 font-display text-lg font-bold text-azul">{a.nombre}</h3>
                  <p className="mt-2 text-sm text-grafito/80">{a.titulo}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-naranja">Ver el área <ArrowUpRight size={16} /></span>
                </Tarjeta>
              </Link>
            ); })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Explora todos los servicios</h2>
          <p className="mb-8 mt-3 max-w-xl text-grafito/80">Filtra por área o recorre la lista completa.</p>
          <ExploraServicios />
        </section>

        <section className="bg-niebla py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-4xl">¿No sabes por dónde empezar?</h2>
            <p className="mt-3 max-w-xl text-grafito/80">Elige tu objetivo y te mostramos los servicios que más te pueden ayudar.</p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {objetivos.map((o, k) => (
                <Reveal key={o.t} delay={k * 120} className="h-full">
                  <Tarjeta className="h-full border border-black/10 bg-white p-7">
                    <p className="font-display text-xl font-bold text-azul">{o.t}</p>
                    <ul className="mt-5 space-y-3">
                      {o.slugs.map((sl) => { const s = porSlug(sl)!; return (
                        <li key={sl}><Link href={`/servicios/${sl}`} className="flex items-center justify-between gap-3 rounded-lg bg-niebla px-4 py-3 font-semibold text-grafito transition-colors hover:bg-azul hover:text-white">{s.nombre} <ArrowUpRight size={18} /></Link></li>
                      ); })}
                    </ul>
                  </Tarjeta>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-azul-oscuro py-20 text-center text-white">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-5xl">¿Hablamos de tu proyecto en Monterrey?</h2>
            <p className="mt-4 text-lg text-white/80">Cuéntanos qué necesitas y te respondemos pronto.</p>
            <div className="mt-8"><Magnetico><Link href="/#contacto" className="brillo block rounded-full bg-naranja px-10 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-naranja-claro">Contacto</Link></Magnetico></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
