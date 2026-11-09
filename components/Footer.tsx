import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Mail, MapPin, MessageCircle } from 'lucide-react';
import { servicios } from '@/lib/servicios';
import { areas } from '@/lib/areas';
import { EMAIL, FB, WA } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-grafito text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_1.4fr_1fr]">
        <div>
          <Image src="/brand/logo-dynamedia.png" alt="Dynamedia" width={400} height={100} className="h-auto w-48 brightness-0 invert" />
          <p className="mt-5 max-w-xs text-sm">Diseño web, software a la medida y marketing digital en Monterrey, Nuevo León.</p>
          <div className="mt-5 flex gap-3">
            <a href={FB} aria-label="Facebook" className="rounded-full border border-white/25 p-2 hover:border-naranja hover:text-naranja"><Facebook size={18} /></a>
            <a href={WA} aria-label="WhatsApp" className="rounded-full border border-white/25 p-2 hover:border-naranja hover:text-naranja"><MessageCircle size={18} /></a>
          </div>
        </div>
        <nav aria-label="Servicios">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-white">Servicios en Monterrey</p>
          <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
            {servicios.map((s) => <li key={s.slug}><Link href={`/servicios/${s.slug}`} className="hover:text-naranja-claro">{s.nombre}</Link></li>)}
          </ul>
        </nav>
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-white">Dynamedia</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/nosotros" className="hover:text-naranja-claro">Nosotros</Link></li>
            <li><Link href="/servicios" className="hover:text-naranja-claro">Todos los servicios</Link></li>
            {areas.map((a) => <li key={a.slug}><Link href={`/areas/${a.slug}`} className="hover:text-naranja-claro">{a.nombre}</Link></li>)}
            <li><Link href="/cursos/wordpress-monterrey" className="hover:text-naranja-claro">Curso de WordPress</Link></li>
            <li><Link href="/cursos/posicionamiento-en-google" className="hover:text-naranja-claro">Curso de posicionamiento en Google</Link></li>
            <li><Link href="/#proyectos" className="hover:text-naranja-claro">Proyectos</Link></li>
            <li><Link href="/#contacto" className="hover:text-naranja-claro">Contacto</Link></li>
          </ul>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail size={16} className="text-naranja" /> {EMAIL}</li>
            <li className="flex items-center gap-2"><MapPin size={16} className="text-naranja" /> Monterrey, Nuevo León</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-sm text-white/50">© 2026 Dynamedia · Monterrey, Nuevo León, México</p>
    </footer>
  );
}
