import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
const txt = (v: unknown, max: number) => String(v ?? '').trim().slice(0, max);
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

// Revisión rápida: abre /api/contact en el navegador para ver si el correo está configurado (no muestra claves).
export async function GET() {
  const dest = process.env.CONTACT_TO || 'info@dynamedia.mx';
  const [u, d] = dest.split('@');
  return NextResponse.json({
    clave_configurada: !!process.env.RESEND_API_KEY,
    destino: `${u.slice(0, 2)}***@${d ?? ''}`,
    remitente: process.env.CONTACT_FROM || 'Dynamedia Web <onboarding@resend.dev>',
  });
}

export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return NextResponse.json({ error: 'Solicitud inválida', codigo: 'solicitud' }, { status: 400 }); }

  // Anti-spam: campo trampa (los bots lo llenan) y envíos demasiado rápidos. Se responde "ok" sin enviar nada.
  if (txt(b.web, 200) || Number(b.tiempo) < 2500) return NextResponse.json({ ok: true });

  const nombre = txt(b.nombre, 120).replace(/[\r\n]+/g, ' ');
  const correo = txt(b.correo, 200);
  const telefono = txt(b.telefono, 40);
  const empresa = txt(b.empresa, 120);
  const cuando = txt(b.cuando, 60);
  const pagina = txt(b.pagina, 300);
  const mensaje = txt(b.mensaje, 4000);
  const servicios = Array.isArray(b.servicios) ? b.servicios.slice(0, 12).map((s) => txt(s, 80)).filter(Boolean) : [];
  if (nombre.length < 2 || !emailOk(correo) || mensaje.length < 5) return NextResponse.json({ error: 'Datos incompletos', codigo: 'datos' }, { status: 400 });

  const key = process.env.RESEND_API_KEY;
  if (!key) { console.error('Falta RESEND_API_KEY: el formulario de contacto no puede enviar correos.'); return NextResponse.json({ error: 'Servicio de correo no configurado', codigo: 'sin-clave' }, { status: 503 }); }
  const to = process.env.CONTACT_TO || 'info@dynamedia.mx';
  const from = process.env.CONTACT_FROM || 'Dynamedia Web <onboarding@resend.dev>';

  const fila = (k: string, v: string) => (v ? `<tr><td style="padding:6px 12px;color:#666">${k}</td><td style="padding:6px 12px"><strong>${esc(v)}</strong></td></tr>` : '');
  const html = `<div style="font-family:Arial,sans-serif;max-width:560px;color:#2B2F36">
    <h2 style="color:#1B4F9C;margin-bottom:8px">Nuevo mensaje desde dynamedia.mx</h2>
    <table style="border-collapse:collapse;background:#F4F5F7;border-radius:8px;width:100%">
      ${fila('Nombre', nombre)}${fila('Correo', correo)}${fila('Teléfono / WhatsApp', telefono)}${fila('Empresa', empresa)}
      ${fila('Le interesa', servicios.join(', '))}${fila('Para cuándo', cuando)}${fila('Enviado desde', pagina)}
    </table>
    <h3 style="margin-top:24px">Mensaje</h3>
    <p style="white-space:pre-wrap;line-height:1.5">${esc(mensaje)}</p>
    <p style="color:#888;font-size:12px">Puedes responder directamente a este correo: llegará a ${esc(correo)}.</p>
  </div>`;
  const text = `Nuevo mensaje desde dynamedia.mx\n\nNombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nEmpresa: ${empresa}\nLe interesa: ${servicios.join(', ')}\nPara cuándo: ${cuando}\nEnviado desde: ${pagina}\n\n${mensaje}`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [to], reply_to: correo, subject: `Nuevo contacto web: ${nombre}`, html, text }),
    });
    if (!r.ok) { console.error('Error de Resend', r.status, await r.text()); return NextResponse.json({ error: 'No se pudo enviar', codigo: `resend-${r.status}` }, { status: 502 }); }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Error enviando correo', e);
    return NextResponse.json({ error: 'No se pudo enviar', codigo: 'red' }, { status: 502 });
  }
}
