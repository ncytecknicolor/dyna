'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, MessageCircle, Menu, X, ChevronDown } from 'lucide-react';
import { servicios } from '@/lib/servicios';
import { FB, WA } from '@/lib/site';

type Item = { t: string; h: string; sub?: { t: string; h: string }[] };
const links: Item[] = [
  { t: 'Inicio', h: '/' },
  { t: 'Nosotros', h: '/nosotros' },
  { t: 'Servicios', h: '/servicios', sub: [{ t: 'Ver todos los servicios', h: '/servicios' }, ...servicios.map((s) => ({ t: s.nombre, h: `/servicios/${s.slug}` }))] },
  { t: 'Cursos', h: '/cursos', sub: [{ t: 'Curso de WordPress en línea', h: '/cursos/wordpress-monterrey' }, { t: 'Curso de posicionamiento en Google', h: '/cursos/posicionamiento-en-google' }] },
  { t: 'Asesoría y soporte', h: '/#soporte' },
  { t: 'Contacto', h: '/#contacto' },
];
const base = 'text-[13px] font-semibold uppercase tracking-wider transition-colors';

export default function Header() {
  const [abierto, setAbierto] = useState(false);
  const [solido, setSolido] = useState(false);
  useEffect(() => {
    const f = () => setSolido(window.scrollY > 40);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  // Transparente sobre la portada; al bajar se vuelve blanco y se queda fijo arriba.
  const item = `${base} text-grafito hover:text-naranja`;
  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${solido ? 'border-black/10 bg-white/95 shadow-md' : 'border-black/5 bg-white/80'} backdrop-blur-md`}>
        <nav aria-label="Principal" className={`flex items-center justify-between px-6 transition-all duration-300 lg:px-14 ${solido ? 'py-2' : 'py-4'}`}>
          <Link href="/" aria-label="Dynamedia, inicio">
            <Image src="/brand/logo-dynamedia.png" alt="Dynamedia" width={400} height={100} priority className={`h-auto transition-all duration-300 ${solido ? 'w-36 lg:w-44' : 'w-48 lg:w-60'}`} />
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <div key={l.t} className="group relative">
                <Link href={l.h} className={`${item} flex items-center gap-1 py-2`}>{l.t}{l.sub && <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />}</Link>
                {l.sub && (
                  <div className="invisible absolute left-0 top-full z-40 translate-y-2 pt-2 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="min-w-72 overflow-hidden rounded-xl border border-white/10 bg-grafito py-2 shadow-2xl">
                      {l.sub.map((s, k) => (
                        <li key={s.h}>
                          <Link href={s.h} className={`block px-5 py-2.5 text-sm hover:bg-white/10 hover:text-naranja-claro ${k === 0 && l.t === 'Servicios' ? 'border-b border-white/10 font-semibold text-naranja-claro' : 'text-white'}`}>{s.t}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <a href={FB} aria-label="Facebook" className={item}><Facebook size={18} /></a>
            <a href={WA} aria-label="WhatsApp" className={item}><MessageCircle size={20} /></a>
          </div>
          <button aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={abierto} onClick={() => setAbierto(!abierto)} className="text-grafito lg:hidden">
            {abierto ? <X size={30} /> : <Menu size={30} />}
          </button>
        </nav>
        {abierto && (
          <div className="max-h-[75vh] overflow-y-auto bg-white/95 px-6 pb-6 backdrop-blur-md lg:hidden">
            {links.map((l) => (
              <div key={l.t}>
                <Link href={l.h} onClick={() => setAbierto(false)} className={`${base} block py-3 text-grafito hover:text-naranja`}>{l.t}</Link>
                {l.sub && (
                  <ul className="mb-2 ml-3 space-y-1 border-l border-grafito/20 pl-4">
                    {l.sub.map((s) => <li key={s.h}><Link href={s.h} onClick={() => setAbierto(false)} className="block py-1.5 text-sm text-grafito/70 hover:text-naranja">{s.t}</Link></li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </header>
      <div className="fixed right-0 top-[38%] z-30 hidden flex-col md:flex">
        <a href={FB} aria-label="Facebook" className="flex h-14 w-14 items-center justify-center bg-[#3b6bc6] text-white"><Facebook size={20} /></a>
        <a href={WA} aria-label="WhatsApp" className="flex h-14 w-14 items-center justify-center bg-[#8cc152] text-white"><MessageCircle size={22} /></a>
      </div>
    </>
  );
}
