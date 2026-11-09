'use client';
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from 'react';
import Link from 'next/link';
import { History, Target, Gem, Building2, Lightbulb, BadgeCheck, Eye, Headset, Clock, Store, Factory, Briefcase, Newspaper, Globe, MessagesSquare, LifeBuoy, GraduationCap, ArrowUpRight, Flag, LayoutGrid } from 'lucide-react';
import Reveal from './Reveal';

const tabs = [
  { id: 'historia', t: 'Quiénes somos', icon: History },
  { id: 'mision', t: 'Misión y visión', icon: Target },
  { id: 'valores', t: 'Valores', icon: Gem },
  { id: 'experiencia', t: 'Experiencia', icon: Building2 },
];
const hitos = [
  { icon: Flag, ano: '2010', t: 'Nacemos', d: 'Iniciamos colaborando en proyectos de desarrollo de sitios web.' },
  { icon: GraduationCap, ano: 'Después', t: 'Compartimos lo aprendido', d: 'Empezamos a impartir talleres para que más personas y equipos aprendieran a crear y administrar sus sitios.' },
  { icon: Building2, ano: 'Hoy', t: 'Una amplia cartera de clientes', d: 'Desarrollamos sitios y sistemas para empresas de distintos giros y seguimos acompañándolas con soporte y actualización.' },
];
const distintivos = [
  { icon: MessagesSquare, t: 'Atención cercana y comunicación directa', d: 'Creemos en hablar de frente con cada cliente para entender qué necesita y ofrecerle soluciones funcionales.' },
  { icon: LifeBuoy, t: 'Acompañamiento más allá del lanzamiento', d: 'Seguimos brindando soporte para el manejo y la actualización de tu sitio o sistema, y evolucionamos contigo.' },
  { icon: GraduationCap, t: 'Capacitación para aprovechar la tecnología', d: 'Capacitamos a equipos y a particulares para que administren su propio sitio y aprovechen mejor sus herramientas digitales.' },
  { icon: LayoutGrid, t: 'Una visión integral de tu negocio digital', d: 'Integramos diseño web, software, ecommerce y estrategias digitales para ofrecer soluciones que trabajan en conjunto.' },
];
const valores = [
  { icon: Lightbulb, t: 'Creatividad', d: 'Buscamos ideas propias para que cada proyecto se vea y funcione a la medida de su negocio.' },
  { icon: BadgeCheck, t: 'Calidad', d: 'Cuidamos cada detalle, del diseño al código, para entregar algo que funcione bien y dure.' },
  { icon: Eye, t: 'Transparencia', d: 'Hablamos claro sobre alcances, tiempos y costos, sin sorpresas.' },
  { icon: Headset, t: 'Atención', d: 'Escuchamos lo que necesitas y seguimos disponibles después de entregar el proyecto.' },
  { icon: Clock, t: 'Puntualidad', d: 'Respetamos las fechas acordadas, porque tu negocio no puede esperar.' },
];
const sectores = [
  { icon: Store, t: 'Tiendas departamentales' }, { icon: Factory, t: 'Industriales' }, { icon: Briefcase, t: 'Servicios' },
  { icon: Newspaper, t: 'Periódicos digitales' }, { icon: Globe, t: 'Sitios informativos' }, { icon: GraduationCap, t: 'Educación y capacitación' },
];

// Tarjeta con luz que sigue al cursor
function Tarjeta({ children, className = '' }: { children: ReactNode; className?: string }) {
  const mover = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`);
  };
  return (
    <div onPointerMove={mover} className={`group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none ${className}`}>
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(260px circle at var(--x,50%) var(--y,50%), rgba(242,107,33,0.16), transparent 70%)' }} />
      <div className="relative">{children}</div>
    </div>
  );
}
const Icono = ({ icon: Icon }: { icon: typeof Flag }) => (
  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-azul text-white transition-colors group-hover:bg-naranja"><Icon size={24} /></div>
);

export default function NosotrosTabs() {
  const [activo, setActivo] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const [ind, setInd] = useState({ left: 0, width: 0 });
  useEffect(() => {
    const medir = () => { const b = refs.current[activo]; if (b) setInd({ left: b.offsetLeft, width: b.offsetWidth }); };
    medir();
    window.addEventListener('resize', medir);
    return () => window.removeEventListener('resize', medir);
  }, [activo]);
  const teclas = (e: KeyboardEvent, i: number) => {
    const n = tabs.length;
    const j = e.key === 'ArrowRight' ? (i + 1) % n : e.key === 'ArrowLeft' ? (i - 1 + n) % n : e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : -1;
    if (j >= 0) { e.preventDefault(); setActivo(j); refs.current[j]?.focus(); }
  };
  const panel = (i: number) => ({ role: 'tabpanel' as const, id: `panel-${tabs[i].id}`, 'aria-labelledby': `tab-${tabs[i].id}`, hidden: activo !== i, className: 'panel-entra' });

  return (
    <div>
      <div role="tablist" aria-label="Conoce a Dynamedia" className="relative flex gap-1 overflow-x-auto border-b border-grafito/15">
        {tabs.map(({ id, t, icon: Icon }, i) => (
          <button key={id} ref={(el) => { refs.current[i] = el; }} role="tab" id={`tab-${id}`} aria-selected={activo === i} aria-controls={`panel-${id}`} tabIndex={activo === i ? 0 : -1}
            onClick={() => setActivo(i)} onKeyDown={(e) => teclas(e, i)}
            className={`flex shrink-0 items-center gap-2 px-5 py-4 font-semibold transition-colors ${activo === i ? 'text-azul' : 'text-grafito/60 hover:text-azul'}`}>
            <Icon size={18} /> {t}
          </button>
        ))}
        <span aria-hidden className="absolute bottom-0 h-1 rounded-full bg-naranja transition-all duration-300 motion-reduce:transition-none" style={{ left: ind.left, width: ind.width }} />
      </div>

      <div className="mt-10">
        <div {...panel(0)}>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Acerca de Dynamedia</h2>
              <div className="mt-5 space-y-4 text-lg text-grafito/85">
                <p>Dynamedia nació en 2010 con el objetivo de acercar la tecnología a las empresas mediante soluciones digitales funcionales y adaptadas a sus necesidades.</p>
                <p>Comenzamos desarrollando sitios web y compartiendo nuestros conocimientos a través de talleres y capacitación. Con el tiempo, nuestra experiencia evolucionó hacia nuevas áreas como el ecommerce, el desarrollo de software a la medida, la automatización y las estrategias de crecimiento digital.</p>
                <p>Hoy trabajamos con empresas de distintos sectores, creando soluciones que les permiten fortalecer su presencia en internet, optimizar sus procesos y aprovechar mejor las herramientas tecnológicas.</p>
                <p>Creemos que un buen proyecto no termina cuando se publica o se entrega: también implica acompañar, orientar y ayudar a nuestros clientes a sacar el máximo provecho de su inversión tecnológica.</p>
              </div>
            </div>
            <div className="grid gap-4">
              {distintivos.map(({ icon, t, d }) => (
                <Tarjeta key={t}><div className="flex gap-4"><Icono icon={icon} /><div><h3 className="font-display text-lg font-bold text-azul">{t}</h3><p className="mt-1 text-grafito/80">{d}</p></div></div></Tarjeta>
              ))}
            </div>
          </div>
          <Reveal className="mt-14">
            <h3 className="font-display text-xl font-bold text-azul">Nuestro camino</h3>
            <div className="relative mt-8 grid gap-8 md:grid-cols-3">
              <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-0.5 origin-left scale-x-0 bg-gradient-to-r from-azul to-naranja transition-transform duration-[1400ms] group-data-[v=true]/rv:scale-x-100 md:block motion-reduce:scale-x-100" />
              {hitos.map(({ icon: Icon, ano, t, d }) => (
                <div key={t} className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-azul text-white shadow"><Icon size={20} /></div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-naranja">{ano}</p>
                  <h4 className="font-display text-lg font-bold text-azul">{t}</h4>
                  <p className="mt-1 text-grafito/80">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div {...panel(1)}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl bg-azul-oscuro p-8 text-white md:p-10">
              <Target aria-hidden className="absolute -bottom-8 -right-8 h-48 w-48 text-white/10" />
              <p className="relative text-sm font-semibold uppercase tracking-widest text-naranja-claro">Misión</p>
              <p className="relative mt-4 font-display text-xl font-bold leading-snug md:text-2xl">Ayudar a las empresas a aprovechar la tecnología mediante soluciones digitales funcionales, creativas y adaptadas a sus necesidades, que fortalezcan sus negocios y faciliten su crecimiento.</p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:p-10">
              <Eye aria-hidden className="absolute -bottom-8 -right-8 h-48 w-48 text-azul/10" />
              <p className="relative text-sm font-semibold uppercase tracking-widest text-naranja">Visión</p>
              <p className="relative mt-4 font-display text-xl font-bold leading-snug text-azul md:text-2xl">Ser un aliado tecnológico de confianza para las empresas, reconocido por desarrollar soluciones digitales de calidad, aportar valor a sus operaciones y construir relaciones duraderas con nuestros clientes.</p>
            </div>
          </div>
        </div>

        <div {...panel(2)}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map(({ icon, t, d }) => (
              <Tarjeta key={t}><Icono icon={icon} /><h3 className="mt-5 font-display text-xl font-bold text-azul">{t}</h3><p className="mt-2 text-grafito/80">{d}</p></Tarjeta>
            ))}
          </div>
        </div>

        <div {...panel(3)}>
          <h2 className="font-display text-3xl font-bold md:text-4xl">Empresas que confían en nosotros</h2>
          <p className="mt-4 max-w-3xl text-lg text-grafito/85">Entre las empresas que nos han brindado su confianza se encuentran tiendas departamentales, industriales y de servicios, así como periódicos digitales, sitios informativos y proyectos de educación y capacitación.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {sectores.map(({ icon: Icon, t }) => (
              <Tarjeta key={t} className="text-center"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-azul text-white transition-colors group-hover:bg-naranja"><Icon size={24} /></div><p className="mt-4 font-semibold text-azul">{t}</p></Tarjeta>
            ))}
          </div>
          <Link href="/#proyectos" className="mt-8 inline-flex items-center gap-2 font-semibold text-azul hover:text-naranja">Ver proyectos recientes <ArrowUpRight size={18} /></Link>
        </div>
      </div>
    </div>
  );
}
