'use client';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Check, Send, MessageCircle, Loader2 } from 'lucide-react';
import { servicios } from '@/lib/servicios';
import { iconos } from '@/lib/iconos';
import { EMAIL, WA } from '@/lib/site';
import { Magnetico } from './ui';

const NO_SE = 'Aún no estoy seguro';
const cuandoOps = ['Lo antes posible', 'Este mes', 'En 2 o 3 meses', 'Solo estoy explorando'];
type Datos = { nombre: string; correo: string; telefono: string; empresa: string; mensaje: string };
type Errores = Partial<Record<'nombre' | 'correo' | 'mensaje', string>>;
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

function Campo({ id, label, value, onChange, error, required, type = 'text', autoComplete, area }:
  { id: string; label: string; value: string; onChange: (v: string) => void; error?: string; required?: boolean; type?: string; autoComplete?: string; area?: boolean }) {
  const cls = `peer w-full rounded-xl border bg-white px-4 pb-2 pt-6 text-grafito outline-none transition focus:border-naranja focus:ring-4 focus:ring-naranja/15 ${error ? 'border-red-400' : 'border-grafito/20'}`;
  const comun = { id, value, placeholder: ' ', 'aria-invalid': !!error, 'aria-describedby': error ? `${id}-err` : undefined, className: cls };
  return (
    <div className="relative">
      {area
        ? <textarea {...comun} rows={4} required={required} onChange={(e) => onChange(e.target.value)} />
        : <input {...comun} type={type} required={required} autoComplete={autoComplete} onChange={(e) => onChange(e.target.value)} />}
      <label htmlFor={id} className="pointer-events-none absolute left-4 top-4 origin-left text-grafito/60 transition-all duration-200 peer-focus:top-2 peer-focus:scale-75 peer-focus:text-naranja peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-75">
        {label}{required && ' *'}
      </label>
      {error && <p id={`${id}-err`} role="alert" className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

// Número de sección: se vuelve palomita naranja cuando esa parte ya está lista.
function Num({ n, listo }: { n: number; listo: boolean }) {
  return (
    <span aria-hidden className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white transition-colors duration-300 ${listo ? 'bg-naranja' : 'bg-azul'}`}>
      {listo ? <Check size={15} /> : n}
    </span>
  );
}

export default function ContactForm({ preseleccion = [] }: { preseleccion?: string[] }) {
  const [sel, setSel] = useState<string[]>([]);
  const [cuando, setCuando] = useState('');
  const [d, setD] = useState<Datos>({ nombre: '', correo: '', telefono: '', empresa: '', mensaje: '' });
  const [err, setErr] = useState<Errores>({});
  const [estado, setEstado] = useState<'idle' | 'enviando' | 'ok' | 'error'>('idle');
  const [web, setWeb] = useState('');
  const [codigo, setCodigo] = useState('');
  const t0 = useRef(0);

  useEffect(() => {
    t0.current = Date.now();
    const s = new URLSearchParams(window.location.search).get('servicio');
    const m = servicios.find((x) => x.slug === s);
    if (m) setSel([m.nombre]);
    else {
      const ini = servicios.filter((x) => preseleccion.includes(x.slug)).map((x) => x.nombre);
      if (ini.length) setSel(ini);
    }
  }, []);

  const set = (k: keyof Datos) => (v: string) => { setD((p) => ({ ...p, [k]: v })); if (k === 'nombre' || k === 'correo' || k === 'mensaje') setErr((p) => ({ ...p, [k]: undefined })); };
  const alternar = (n: string) =>
    setSel((p) => (n === NO_SE ? (p.includes(n) ? [] : [n]) : p.includes(n) ? p.filter((x) => x !== n) : [...p.filter((x) => x !== NO_SE), n]));

  const okNombre = d.nombre.trim().length >= 2;
  const okCorreo = emailOk(d.correo.trim());
  const okMensaje = d.mensaje.trim().length >= 10;
  const avance = ([okNombre, okCorreo, okMensaje].filter(Boolean).length / 3) * 100;

  const enviar = async (ev: FormEvent) => {
    ev.preventDefault();
    const e: Errores = {};
    if (!okNombre) e.nombre = 'Escribe tu nombre.';
    if (!okCorreo) e.correo = 'Escribe un correo válido.';
    if (!okMensaje) e.mensaje = 'Cuéntanos un poco más (mínimo 10 caracteres).';
    setErr(e);
    const primero = (['nombre', 'correo', 'mensaje'] as const).find((k) => e[k]);
    if (primero) { document.getElementById(`c-${primero}`)?.focus(); return; }
    setEstado('enviando');
    try {
      const r = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...d, servicios: sel, cuando: cuando || 'No indicó', web, tiempo: Date.now() - t0.current, pagina: window.location.href }),
      });
      if (!r.ok) { const j = await r.json().catch(() => null); setCodigo(j?.codigo ?? String(r.status)); }
      setEstado(r.ok ? 'ok' : 'error');
    } catch { setCodigo('conexion'); setEstado('error'); }
  };
  const reiniciar = () => { setSel([]); setCuando(''); setD({ nombre: '', correo: '', telefono: '', empresa: '', mensaje: '' }); setErr({}); setCodigo(''); setEstado('idle'); t0.current = Date.now(); };

  if (estado === 'ok') {
    const rombos = [[-90, -70], [90, -80], [-110, 10], [110, 20], [-60, 90], [70, 95], [0, -110], [0, 110]];
    return (
      <div role="status" className="relative overflow-hidden rounded-3xl bg-white p-10 text-center text-grafito shadow-2xl">
        {rombos.map(([x, y], k) => <span key={k} aria-hidden className="confeti absolute left-1/2 top-1/3 h-3 w-3 bg-naranja" style={{ ['--dx' as string]: `${x}px`, ['--dy' as string]: `${y}px`, background: k % 2 ? '#1B4F9C' : '#F26B21' }} />)}
        <svg aria-hidden viewBox="0 0 52 52" className="mx-auto h-24 w-24">
          <circle cx="26" cy="26" r="24" fill="none" stroke="#F26B21" strokeWidth="3" className="trazo-c" />
          <path d="M14 27l8 8 16-17" fill="none" stroke="#1B4F9C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="trazo" />
        </svg>
        <h3 className="mt-4 font-display text-3xl font-bold text-azul">¡Mensaje enviado!</h3>
        <p className="mx-auto mt-3 max-w-sm text-grafito/80">Gracias, {d.nombre.split(' ')[0]}. Te responderemos pronto a <strong>{d.correo}</strong>.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={WA} className="inline-flex items-center gap-2 rounded-full bg-naranja px-6 py-3 text-sm font-semibold text-white hover:bg-naranja-claro"><MessageCircle size={18} /> Escríbenos por WhatsApp</a>
          <button onClick={reiniciar} className="rounded-full border border-grafito/20 px-6 py-3 text-sm font-semibold text-azul hover:border-naranja hover:text-naranja">Enviar otro mensaje</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} noValidate className="relative overflow-hidden rounded-3xl bg-white text-grafito shadow-2xl">
      <div aria-hidden className="h-1.5 bg-niebla"><div className="h-full bg-gradient-to-r from-naranja to-azul transition-all duration-500 motion-reduce:transition-none" style={{ width: `${avance}%` }} /></div>
      <div className="p-6 md:p-8">
        <div aria-hidden className="absolute -left-[9999px] top-0"><label>Sitio web<input tabIndex={-1} autoComplete="off" value={web} onChange={(e) => setWeb(e.target.value)} /></label></div>

        <h3 className="font-display text-2xl font-bold text-azul">Cuéntanos tu proyecto</h3>
        <p className="mt-1 text-grafito/70">Te respondemos pronto. Solo toma un minuto.</p>

        <fieldset className="mt-6">
          <legend className="flex items-center gap-2 font-semibold text-azul"><Num n={1} listo={sel.length > 0} /> ¿Qué te interesa? <span className="text-sm font-normal text-grafito/60">(opcional)</span></legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {[...servicios.map((s) => ({ n: s.nombre, I: iconos[s.icono] })), { n: NO_SE, I: MessageCircle }].map(({ n, I }) => {
              const on = sel.includes(n);
              return (
                <button key={n} type="button" aria-pressed={on} onClick={() => alternar(n)}
                  className={`flex items-center gap-2 rounded-full border-2 px-3 py-2 text-left text-sm font-semibold transition-all duration-200 active:scale-95 ${on ? 'border-naranja bg-naranja text-white shadow-md' : 'border-grafito/15 text-grafito/80 hover:-translate-y-0.5 hover:border-azul/40'}`}>
                  <I size={16} className="shrink-0" />{n}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-7">
          <p className="flex items-center gap-2 font-semibold text-azul"><Num n={2} listo={okNombre && okCorreo} /> Tus datos</p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <Campo id="c-nombre" label="Nombre" value={d.nombre} onChange={set('nombre')} error={err.nombre} required autoComplete="name" />
            <Campo id="c-correo" label="Correo electrónico" type="email" value={d.correo} onChange={set('correo')} error={err.correo} required autoComplete="email" />
            <Campo id="c-tel" label="WhatsApp o teléfono" type="tel" value={d.telefono} onChange={set('telefono')} autoComplete="tel" />
            <Campo id="c-empresa" label="Empresa" value={d.empresa} onChange={set('empresa')} autoComplete="organization" />
          </div>
        </div>

        <div className="mt-7">
          <p className="flex items-center gap-2 font-semibold text-azul"><Num n={3} listo={okMensaje} /> Tu mensaje</p>
          <div className="mt-3"><Campo id="c-mensaje" label="¿En qué te podemos ayudar?" value={d.mensaje} onChange={set('mensaje')} error={err.mensaje} required area /></div>
          <p className="mt-4 text-sm font-semibold text-grafito/70">¿Para cuándo lo necesitas? <span className="font-normal text-grafito/60">(opcional)</span></p>
          <div role="radiogroup" aria-label="¿Para cuándo lo necesitas?" className="mt-2 flex flex-wrap gap-2">
            {cuandoOps.map((o) => (
              <button key={o} type="button" role="radio" aria-checked={cuando === o} onClick={() => setCuando(cuando === o ? '' : o)}
                className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all active:scale-95 ${cuando === o ? 'border-azul bg-azul text-white' : 'border-grafito/15 text-grafito/70 hover:border-azul/40'}`}>{o}</button>
            ))}
          </div>
        </div>

        {estado === 'error' && (
          <p role="alert" className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-700">No se pudo enviar tu mensaje. Escríbenos por <a href={WA} className="font-semibold underline">WhatsApp</a> o a <a href={`mailto:${EMAIL}`} className="font-semibold underline">{EMAIL}</a>.{codigo && <span className="mt-1 block text-xs text-red-700/70">Código: {codigo}</span>}</p>
        )}

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-grafito/60">* Campos obligatorios</p>
          <Magnetico className="w-full sm:w-auto">
            <button type="submit" disabled={estado === 'enviando'} className="brillo flex w-full items-center justify-center gap-2 rounded-full bg-naranja px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white hover:bg-naranja-claro disabled:opacity-70">
              {estado === 'enviando' ? <><Loader2 size={18} className="animate-spin" /> Enviando</> : <><Send size={18} /> Enviar mensaje</>}
            </button>
          </Magnetico>
        </div>
      </div>
    </form>
  );
}
