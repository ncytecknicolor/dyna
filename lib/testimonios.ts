// Testimonios de clientes (inicio y Nosotros). Escribe en "texto" las PALABRAS REALES del cliente, con su permiso.
// Mientras falte el texto, se muestra una etiqueta "Pendiente". Pon MOSTRAR_PENDIENTES en false para ocultar los que no tengan texto.
export const MOSTRAR_PENDIENTES = true;

export type Testimonio = { id: string; nombre: string; empresa: string; cargo?: string; texto?: string };

export const testimonios: Testimonio[] = [
  { id: 'trofeos-mg', nombre: 'Alfonso M.', empresa: 'Trofeos MG', texto: 'Trabajar con Dynamedia ha sido una excelente experiencia. Destaco su profesionalismo, atención y disposición para entender nuestras necesidades y encontrar soluciones adecuadas para nuestro negocio. Siempre recibimos un trato cercano y un servicio de calidad. Sin duda, es un equipo que recomiendo.' },
  { id: 'gsf-cargo', nombre: 'Miguel F.', empresa: 'GSF Cargo', texto: 'Dynamedia nos brindó soluciones digitales que nos ayudaron a fortalecer nuestra presencia en línea y mejorar nuestros procesos. Su experiencia, creatividad y compromiso hicieron que trabajar juntos sea una experiencia muy positiva. Recomiendo ampliamente sus servicios por su calidad y atención.' },
];

export const iniciales = (n: string) => n.replace(/\./g, '').split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
