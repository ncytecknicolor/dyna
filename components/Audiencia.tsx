'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Rocket, Users, BriefcaseBusiness, Check, ArrowUpRight } from 'lucide-react';

const WP = { t: 'Curso de WordPress', h: '/cursos/wordpress-monterrey' };
const SEO = { t: 'Curso de posicionamiento en Google', h: '/cursos/posicionamiento-en-google' };
const perfiles = [
  { id: 'emprendedores', t: 'Emprendedores', icon: Rocket, titulo: 'Lanza y administra tu propio sitio sin depender de nadie.',
    d: 'Si estás empezando o tienes un negocio pequeño, aprender lo básico te ahorra tiempo y te da control sobre tu presencia en internet.',
    lista: ['Crea tu sitio y actualízalo cuando quieras', 'Entiende cómo te encuentran tus clientes en Google', 'Toma mejores decisiones cuando contrates ayuda'], enlaces: [WP, SEO] },
  { id: 'equipos', t: 'Equipos de trabajo', icon: Users, titulo: 'Que tu equipo domine su sitio y sepa cómo posicionarlo.',
    d: 'Capacitamos a equipos de marketing, ventas y comunicación para que actualicen contenido y entiendan los fundamentos del posicionamiento.',
    lista: ['Menos dependencia de proveedores externos', 'Procesos claros para publicar contenido', 'Talleres a la medida de tu equipo'], enlaces: [WP, SEO, { t: 'Capacitación a la medida', h: '/servicios/capacitacion' }] },
  { id: 'profesionistas', t: 'Profesionistas y freelancers', icon: BriefcaseBusiness, titulo: 'Suma habilidades digitales a tu perfil.',
    d: 'Si ofreces servicios por tu cuenta o quieres crecer profesionalmente, estos cursos te dan herramientas prácticas para el trabajo diario.',
    lista: ['Crea sitios para tus proyectos o tus clientes', 'Aprende a medir y mejorar resultados en Google', 'Presenta mejor tu marca personal en línea'], enlaces: [WP, SEO] },
];

export default function Audiencia() {
  const [a, setA] = useState(0);
  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div role="tablist" aria-orientation="vertical" aria-label="Elige tu perfil" className="flex gap-2 overflow-x-auto lg:flex-col">
        {perfiles.map(({ id, t, icon: Icon }, i) => (
          <button key={id} id={`aud-tab-${id}`} role="tab" aria-selected={a === i} aria-controls={`aud-panel-${id}`} onClick={() => setA(i)} onMouseEnter={() => setA(i)}
            className={`flex shrink-0 items-center gap-3 rounded-2xl px-5 py-4 text-left font-semibold transition-all duration-300 ${a === i ? 'bg-azul text-white shadow-lg lg:translate-x-2' : 'bg-white text-grafito/70 hover:bg-white/70'}`}>
            <span className={`flex h-10 w-10 items-center justify-center rounded-full ${a === i ? 'bg-naranja' : 'bg-niebla text-azul'}`}><Icon size={20} /></span>{t}
          </button>
        ))}
      </div>
      <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:p-10">
        {perfiles.map((p, i) => (
          <div key={p.id} id={`aud-panel-${p.id}`} role="tabpanel" aria-labelledby={`aud-tab-${p.id}`} hidden={a !== i} className="panel-entra">
            <h3 className="font-display text-2xl font-bold text-azul md:text-3xl">{p.titulo}</h3>
            <p className="mt-3 text-lg text-grafito/80">{p.d}</p>
            <ul className="mt-5 space-y-3">{p.lista.map((l) => <li key={l} className="flex gap-2"><Check size={20} className="mt-0.5 shrink-0 text-naranja" />{l}</li>)}</ul>
            <div className="mt-7 flex flex-wrap gap-3">
              {p.enlaces.map((e) => <Link key={e.h} href={e.h} className="inline-flex items-center gap-2 rounded-full border border-azul px-5 py-2.5 text-sm font-semibold text-azul transition-colors hover:bg-azul hover:text-white">{e.t} <ArrowUpRight size={16} /></Link>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
