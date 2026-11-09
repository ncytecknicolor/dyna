// Un registro por proyecto: la imagen del carrusel y su ficha salen de aquí.
// Textos de las fichas: redactados a partir de las actividades que indicó Dynamedia. "reto" y "sector" son propuestas: ajústalos con datos reales.
// Opcionales: anio, url ('https://...' solo si el sitio sigue en línea), galeria: [{ src, w, h, pie }] (imágenes en public/proyectos/<slug>/).
// servicios: cada etiqueta puede llevar slug de /servicios/<slug> para enlazar (y para mostrar el proyecto en esa página de servicio).
export type Imagen = { src: string; w: number; h: number; pie?: string };
export type ServicioProyecto = { t: string; slug?: string };
export type Proyecto = {
  slug: string; nombre: string; principal: Imagen;
  categoria?: string; sector?: string; solucion?: string; anio?: string; servicios?: ServicioProyecto[];
  reto?: string; desarrollo?: string; actividades?: string[]; resultado?: string[]; url?: string; galeria?: Imagen[];
};

// Con false se ocultan los bloques sin dato (galería y enlace) hasta que los tengas.
export const MOSTRAR_PENDIENTES = false;

export const proyectos: Proyecto[] = [
  {
    slug: 'campo-aventura', nombre: "Campo Aventura", categoria: "Ecommerce", principal: { src: '/proyectos/campo-aventura/principal.jpg', w: 1600, h: 802 },
    sector: "Educación y eventos", solucion: "Tienda en línea y venta de boletos",
    servicios: [
      { t: "Tienda en línea", slug: 'tiendas-virtuales' },
      { t: "Software a la medida", slug: 'software-a-la-medida' },
      { t: "Integración de módulos", slug: 'software-a-la-medida' },
    ],
    reto: "Vender sus productos y los boletos de sus eventos por internet, con pagos seguros, y mantener informada a su comunidad.",
    desarrollo: "Desarrollamos una tienda en línea con cobro seguro mediante Stripe y un software para la venta de boletos en línea, y le integramos módulos que mejoran la experiencia de compra y la comunicación con su audiencia.",
    actividades: [
      "Tienda en línea con pasarela de pago Stripe.",
      "Software para la venta de boletos en línea.",
      "Integración de módulos: Spotify, suscriptores para el envío de información y descuentos por volumen.",
    ],
    resultado: [
      "Tienda en línea con pagos mediante Stripe implementada.",
      "Sistema de venta de boletos en línea implementado.",
      "Módulos de Spotify, suscriptores y descuentos por volumen integrados.",
    ],
  },
  {
    slug: 'trofeos-mg', nombre: "Trofeos MG", categoria: "Sitio catálogo", principal: { src: '/proyectos/trofeos-mg/principal.jpg', w: 1600, h: 805 },
    sector: "Reconocimientos, trofeos y medallas", solucion: "Sitio web tipo catálogo, contenido y soporte continuo", url: 'https://trofeosmg.com',
    servicios: [
      { t: "Diseño web", slug: 'diseno-web' },
      { t: "Catálogo en PDF", slug: 'diseno-grafico' },
      { t: "Redes sociales", slug: 'redes-sociales-para-pymes' },
      { t: "Videos con personaje de IA", slug: 'contenido-con-ia' },
      { t: "Mantenimiento web", slug: 'diseno-web' },
      { t: "Hospedaje web" },
    ],
    reto: "Mostrar en línea una gama amplia de productos personalizables (trofeos, reconocimientos, preseas y medallas) de forma ordenada y fácil de consultar, y mantener una presencia constante en redes sociales para llegar a más clientes.",
    desarrollo: "Acompañamos a Trofeos MG con una solución digital completa.",
    actividades: [
      "Sitio web tipo catálogo para explorar sus productos y técnicas, con búsqueda y formulario de contacto.",
      "Catálogo en PDF para compartir sus productos con clientes de forma directa.",
      "Manejo de redes sociales.",
      "Videos con un personaje creado con IA, para presentar la marca y sus productos.",
      "Mantenimiento del sitio.",
      "Hospedaje web.",
    ],
    resultado: [
      "Sitio web tipo catálogo publicado.",
      "Catálogo en PDF entregado.",
      "Redes sociales administradas por Dynamedia.",
      "Videos con personaje de IA producidos.",
      "Sitio con mantenimiento y hospedaje a cargo de Dynamedia.",
    ],
  },
  {
    slug: 'gsf', nombre: "GSF", categoria: "Branding y web", principal: { src: '/proyectos/gsf/principal.jpg', w: 1600, h: 768 },
    sector: "Logística y transporte", solucion: "Identidad de marca, sitio web y brandeo de flota", url: 'https://gsfcargo.com',
    servicios: [
      { t: "Logotipo e identidad", slug: 'diseno-grafico' },
      { t: "Diseño web", slug: 'diseno-web' },
      { t: "Presentación ejecutiva", slug: 'diseno-grafico' },
      { t: "Brandeo de camiones", slug: 'diseno-grafico' },
      { t: "Hospedaje web" },
    ],
    reto: "Construir una identidad sólida y consistente para una empresa de logística, tanto en sus medios digitales como en su flota de camiones.",
    desarrollo: "Creamos su logotipo y su sitio web, diseñamos una presentación ejecutiva y desarrollamos el brandeo de sus camiones, para que la marca se vea igual en todos sus puntos de contacto.",
    actividades: [
      "Creación de logotipo.",
      "Sitio web.",
      "Presentación ejecutiva.",
      "Brandeo de camiones.",
      "Hospedaje web.",
    ],
    resultado: [
      "Logotipo e identidad de marca creados.",
      "Sitio web publicado.",
      "Presentación ejecutiva entregada.",
      "Diseño del brandeo de camiones entregado.",
      "Sitio con hospedaje a cargo de Dynamedia.",
    ],
  },
  {
    slug: 'crealte', nombre: "Crealte", categoria: "Sitio catálogo", principal: { src: '/proyectos/crealte/principal.jpg', w: 1600, h: 801 },
    sector: "Consultoría empresarial", solucion: "Sitio web tipo catálogo, contenido y soporte continuo",
    servicios: [
      { t: "Diseño web", slug: 'diseno-web' },
      { t: "Catálogo en PDF", slug: 'diseno-grafico' },
      { t: "Redes sociales", slug: 'redes-sociales-para-pymes' },
      { t: "Videos con personaje de IA", slug: 'contenido-con-ia' },
      { t: "Mantenimiento web", slug: 'diseno-web' },
      { t: "Hospedaje web" },
    ],
    reto: "Presentar sus servicios de consultoría de forma clara y ordenada, y mantener una presencia digital constante frente a sus clientes.",
    desarrollo: "Desarrollamos su presencia digital completa: sitio web, material de ventas en PDF, redes sociales y contenido en video, con mantenimiento y hospedaje continuos.",
    actividades: [
      "Creación de sitio web tipo catálogo.",
      "Creación de catálogo en PDF.",
      "Manejo de redes sociales.",
      "Creación de videos con un personaje de IA.",
      "Mantenimiento del sitio.",
      "Hospedaje web.",
    ],
    resultado: [
      "Sitio web tipo catálogo publicado.",
      "Catálogo en PDF entregado.",
      "Redes sociales administradas por Dynamedia.",
      "Videos con personaje de IA producidos.",
      "Sitio con mantenimiento y hospedaje a cargo de Dynamedia.",
    ],
  },
  {
    slug: 'we-love-party', nombre: "We Love Party", categoria: "Sitio autoadministrable", principal: { src: '/proyectos/we-love-party/principal.jpg', w: 1600, h: 804 },
    sector: "Eventos e invitaciones digitales", solucion: "Sitio web autoadministrable",
    servicios: [
      { t: "Diseño web", slug: 'diseno-web' },
      { t: "Hospedaje web" },
    ],
    reto: "Presentar sus invitaciones digitales y servicios, y poder actualizar el contenido del sitio de forma ágil.",
    desarrollo: "Creamos un sitio web autoadministrable para que puedan gestionar su contenido, con hospedaje a cargo de Dynamedia.",
    actividades: [
      "Creación de sitio web autoadministrable.",
      "Hospedaje web.",
    ],
    resultado: [
      "Sitio web autoadministrable publicado.",
      "Sitio con hospedaje a cargo de Dynamedia.",
    ],
  },
  {
    slug: 'grupo-rios', nombre: "Grupo Ríos Premiaciones", categoria: "Sitio catálogo", principal: { src: '/proyectos/grupo-rios/principal.jpg', w: 1600, h: 805 },
    sector: "Reconocimientos y premiaciones", solucion: "Sitio web tipo catálogo, catálogo PDF y fotografía de producto",
    servicios: [
      { t: "Diseño web", slug: 'diseno-web' },
      { t: "Catálogo en PDF", slug: 'diseno-grafico' },
      { t: "Sesión de fotos y edición" },
      { t: "Hospedaje web" },
    ],
    reto: "Presentar sus reconocimientos con la calidad que merecen, para que sus clientes los conozcan y elijan en línea.",
    desarrollo: "Creamos su sitio web tipo catálogo y su catálogo en PDF, y realizamos una sesión de fotos con edición para mostrar cada pieza con la mejor imagen.",
    actividades: [
      "Creación de sitio web tipo catálogo.",
      "Creación de catálogo en PDF.",
      "Sesión de fotos y edición.",
      "Hospedaje web.",
    ],
    resultado: [
      "Sitio web tipo catálogo publicado.",
      "Catálogo en PDF entregado.",
      "Sesión de fotos realizada y fotografías editadas.",
      "Sitio con hospedaje a cargo de Dynamedia.",
    ],
  },
  {
    slug: 'wm-refractories', nombre: "WM Refractories", categoria: "Sitio autoadministrable", principal: { src: '/proyectos/wm-refractories/principal.jpg', w: 1600, h: 796 },
    sector: "Refractarios para la industria", solucion: "Sitio web autoadministrable y bilingüe",
    servicios: [
      { t: "Diseño web", slug: 'diseno-web' },
      { t: "Módulo bilingüe", slug: 'diseno-web' },
      { t: "Capacitación", slug: 'capacitacion' },
      { t: "Hospedaje web" },
    ],
    reto: "Contar con un sitio que su propio equipo pudiera actualizar y que atendiera a sus clientes en español e inglés.",
    desarrollo: "Creamos un sitio web autoadministrable con módulo bilingüe y brindamos capacitación a su equipo.",
    actividades: [
      "Creación de sitio web autoadministrable.",
      "Módulo bilingüe.",
      "Capacitación.",
      "Hospedaje web.",
    ],
    resultado: [
      "Sitio web autoadministrable publicado.",
      "Módulo bilingüe (español e inglés) implementado.",
      "Capacitación impartida a su equipo.",
      "Sitio con hospedaje a cargo de Dynamedia.",
    ],
  },
  {
    slug: 'inspira-stone', nombre: "Inspira Stone", categoria: "Sitio catálogo", principal: { src: '/proyectos/inspira-stone/principal.jpg', w: 1600, h: 797 },
    sector: "Cubiertas de cuarzo", solucion: "Sitio web tipo catálogo y actualización continua",
    servicios: [
      { t: "Diseño web", slug: 'diseno-web' },
      { t: "Actualización de sitio web", slug: 'diseno-web' },
      { t: "Hospedaje web" },
    ],
    reto: "Mostrar su catálogo de cubiertas de cuarzo con una imagen acorde a un producto premium y mantener el sitio actualizado.",
    desarrollo: "Creamos su sitio web tipo catálogo y lo actualizamos para que refleje su oferta, con hospedaje a cargo de Dynamedia.",
    actividades: [
      "Creación de sitio web tipo catálogo.",
      "Actualización de sitio web.",
      "Hospedaje web.",
    ],
    resultado: [
      "Sitio web tipo catálogo publicado.",
      "Actualizaciones del sitio realizadas.",
      "Sitio con hospedaje a cargo de Dynamedia.",
    ],
  },
  {
    slug: 'vida-esencial', nombre: "Vida Esencial", categoria: "Ecommerce", principal: { src: '/proyectos/vida-esencial/principal.jpg', w: 1600, h: 771 },
    sector: "Productos naturales", solucion: "Tienda en línea con envíos nacionales",
    servicios: [
      { t: "Tienda en línea", slug: 'tiendas-virtuales' },
      { t: "Envíos a nivel nacional", slug: 'tiendas-virtuales' },
      { t: "Catálogo en PDF", slug: 'diseno-grafico' },
      { t: "Mantenimiento web", slug: 'diseno-web' },
      { t: "Hospedaje web" },
    ],
    reto: "Vender sus productos por internet a clientes de todo el país, con cobro seguro y un proceso de envío claro.",
    desarrollo: "Desarrollamos su tienda en línea con pagos mediante Stripe y un módulo para envíos a nivel nacional, además de un catálogo en PDF, con mantenimiento y hospedaje continuos.",
    actividades: [
      "Tienda en línea con pasarela de pago Stripe.",
      "Módulo para envíos a nivel nacional.",
      "Creación de catálogo en PDF.",
      "Mantenimiento del sitio.",
      "Hospedaje web.",
    ],
    resultado: [
      "Tienda en línea con pagos mediante Stripe implementada.",
      "Módulo de envíos a nivel nacional implementado.",
      "Catálogo en PDF entregado.",
      "Sitio con mantenimiento y hospedaje a cargo de Dynamedia.",
    ],
  },
];
