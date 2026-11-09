const palabras = ['Diseño web', 'Software a la medida', 'Ecommerce', 'SEO en Monterrey', 'Google Ads', 'Redes sociales', 'Contenido con IA', 'Capacitación', 'Diseño gráfico'];

// Franja de palabras en movimiento (solo CSS).
export default function Ticker({ dur = 50 }: { dur?: number }) {
  return (
    <div className="marquee marquee-mascara overflow-hidden py-8" aria-hidden>
      <div className="marquee-pista" style={{ ['--dur' as string]: `${dur}s` }}>
        {[0, 1, 2].map((c) => (
          <div key={c} className={`flex shrink-0 gap-12 pr-12 font-display text-2xl font-extrabold uppercase text-azul/15 md:text-4xl ${c > 0 ? 'copia' : ''}`}>
            {palabras.map((w) => <span key={w}>{w}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}
