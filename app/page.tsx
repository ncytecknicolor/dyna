import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import Proyectos from '@/components/Proyectos';
import Testimonios from '@/components/Testimonios';
import ExploraServicios from '@/components/ExploraServicios';
import CursosSoporte from '@/components/CursosSoporte';
import { PorQue, Giros } from '@/components/HomeSecciones';
import Ticker from '@/components/Ticker';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import SeccionContacto from '@/components/SeccionContacto';
import Contador from '@/components/Contador';

const cifras = [
  { n: 15, p: '+', l: 'años de experiencia' }, { n: 320, p: '+', l: 'proyectos desarrollados' },
  { n: 280, p: '+', l: 'clientes atendidos' }, { n: 4, p: '', l: 'áreas de especialidad' },
];
const faqs = [
  { q: '¿Dónde está Dynamedia y a quién atiende?', a: 'Estamos en Monterrey, Nuevo León, y trabajamos con empresas de Monterrey y de todo México.' },
  { q: '¿Qué servicios ofrece Dynamedia?', a: 'Diseño web, ecommerce (tiendas en línea), software a la medida, posicionamiento en Google, campañas de pago por clic, redes sociales, contenido con IA, diseño gráfico y capacitación.' },
  { q: '¿Dan soporte después de entregar el proyecto?', a: 'Sí. Seguimos brindando soporte para el manejo y la actualización de los sitios que desarrollamos, y ofrecemos pólizas de soporte.' },
  { q: '¿Imparten cursos?', a: 'Sí. Ofrecemos cursos en línea, como el de WordPress y el de posicionamiento web en Google, y talleres para equipos.' },
  { q: '¿Cuánto cuesta un proyecto y cuánto tarda?', a: 'Depende del alcance de cada proyecto. Cuéntanos qué necesitas y te enviamos una cotización con costos y tiempos.' },
];
const grafo = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) };

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(grafo) }} />
        <Hero />
        <Ticker />

        <section id="nosotros" className="mx-auto max-w-6xl px-5 pb-16">
          <div className="grid gap-8 rounded-2xl bg-white p-8 shadow-xl sm:grid-cols-2 md:grid-cols-4">
            {cifras.map((c) => (
              <div key={c.l}>
                <p className="font-display text-4xl font-extrabold text-azul md:text-5xl"><Contador hasta={c.n} prefijo={c.p} /></p>
                <p className="mt-1 text-grafito/70">{c.l}</p>
              </div>
            ))}
          </div>
          <Link href="/nosotros" className="mt-6 inline-flex items-center gap-2 font-semibold text-azul hover:text-naranja">Conoce más sobre nosotros <ArrowRight size={18} /></Link>
        </section>

        <Servicios />

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Soluciones digitales para empresas</h2>
              <p className="mt-3 max-w-xl text-grafito/80">Cada servicio tiene su propia página con todo lo que incluye.</p>
            </div>
            <Link href="/servicios" className="inline-flex items-center gap-2 font-semibold text-azul hover:text-naranja">Ver todos los servicios <ArrowRight size={18} /></Link>
          </div>
          <div className="mt-8"><ExploraServicios /></div>
        </section>

        <Proyectos />
        <Testimonios />
        <PorQue />
        <Giros />
        <CursosSoporte />

        <section className="mx-auto max-w-4xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Preguntas frecuentes</h2>
          <div className="mt-8"><Faq items={faqs} /></div>
        </section>

        <SeccionContacto />
      </main>
      <Footer />
    </>
  );
}
