import Link from 'next/link';
import { ArrowUpRight, MessagesSquare, LifeBuoy, GraduationCap, LayoutGrid, Store, Factory, Briefcase, Newspaper, Globe } from 'lucide-react';
import { Tarjeta } from './ui';
import Contador from './Contador';
import Reveal from './Reveal';

export function PorQue() {
  const chicas = [
    { icon: MessagesSquare, t: 'Atención cercana y comunicación directa', d: 'Escuchamos tus necesidades de frente y mantenemos una comunicación directa durante todo el proyecto, para ofrecerte soluciones funcionales.' },
    { icon: LifeBuoy, t: 'Acompañamiento más allá del lanzamiento', d: 'Publicar es solo el comienzo: seguimos contigo con soporte, actualización y mejoras para que tu sitio o sistema siga funcionando y evolucionando.' },
    { icon: GraduationCap, t: 'Capacitación para aprovechar la tecnología', d: 'Cursos y talleres para que tu equipo domine sus herramientas digitales y las aproveche mejor, con menos dependencia de terceros.' },
    { icon: LayoutGrid, t: 'Una visión integral de tu negocio digital', d: 'Integramos diseño web, software, ecommerce y estrategias digitales para ofrecer soluciones que trabajan en conjunto.' },
  ];
  return (
    <section className="bg-niebla py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Por qué elegir Dynamedia</h2>
        <p className="mt-3 max-w-xl text-grafito/80">Un socio tecnológico para tu empresa, no solo un proveedor que entrega páginas web.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          <Reveal className="md:col-span-2 md:row-span-2">
            <Tarjeta className="h-full border-0 bg-azul-oscuro p-8 text-white md:p-10" inner="relative flex h-full flex-col" luz="rgba(255,255,255,0.12)">
              <p className="font-display text-[6rem] font-extrabold leading-none text-naranja-claro md:text-[8rem]"><Contador hasta={15} prefijo="+" /></p>
              <p className="mt-2 font-display text-2xl font-bold">años como socio tecnológico de empresas</p>
              <p className="mt-4 max-w-md text-white/80">Desde 2010 acompañamos a empresas en su evolución digital: entendemos tu negocio, proponemos la tecnología adecuada y seguimos a tu lado conforme creces.</p>
              <Link href="/nosotros" className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-naranja-claro hover:text-white">Conoce nuestra historia <ArrowUpRight size={18} /></Link>
            </Tarjeta>
          </Reveal>
          {chicas.map(({ icon: Icon, t, d }, k) => (
            <Reveal key={t} delay={(k + 1) * 100} className="h-full">
              <Tarjeta className="h-full border border-black/10 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-azul text-white transition-colors group-hover:bg-naranja"><Icon size={24} /></div>
                <h3 className="mt-4 font-display text-lg font-bold text-azul">{t}</h3>
                <p className="mt-2 text-sm text-grafito/80">{d}</p>
              </Tarjeta>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Giros() {
  const giros = [{ icon: Store, t: 'Tiendas departamentales' }, { icon: Factory, t: 'Industriales' }, { icon: Briefcase, t: 'Servicios' }, { icon: Newspaper, t: 'Periódicos digitales' }, { icon: Globe, t: 'Sitios informativos' }, { icon: GraduationCap, t: 'Educación y capacitación' }];
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display text-3xl font-bold md:text-4xl">Experiencia en distintos giros</h2>
      <p className="mt-3 max-w-2xl text-grafito/80">Hemos desarrollado proyectos para empresas comerciales, industriales y de servicios, así como para medios digitales, sitios informativos y proyectos de educación y capacitación.</p>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {giros.map(({ icon: Icon, t }, k) => (
          <Reveal key={t} delay={k * 90} className="h-full">
            <Tarjeta className="h-full border border-black/10 bg-white p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-niebla text-azul transition-all duration-300 group-hover:scale-110 group-hover:bg-naranja group-hover:text-white"><Icon size={26} /></div>
              <p className="mt-4 font-semibold text-azul">{t}</p>
            </Tarjeta>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
