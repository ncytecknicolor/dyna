import type { IconoKey } from './iconos';
import type { Faq, Par } from './servicios';

export type Area = {
  slug: string; n: string; nombre: string; icono: IconoKey;
  titulo: string; texto: string; lista: string[]; cta: string;
  h1: string; title: string; description: string; intro: string[];
  servicios: string[]; relacionados: string[]; beneficios: Par[]; pasos: Par[]; faqs: Faq[];
};

const i = (t: string, d: string): Par => ({ t, d });
const f = (q: string, a: string): Faq => ({ q, a });

// Las 4 áreas de trabajo del inicio. Titular, texto y lista salen de tu información; el resto (intro, beneficios, pasos, preguntas) es propuesta.
export const areas: Area[] = [
  {
    slug: 'diseno-web', n: '01', nombre: 'Diseño web', icono: 'Globe',
    titulo: 'Tu empresa merece una presencia digital profesional.',
    texto: 'Diseñamos y desarrollamos sitios web funcionales, atractivos y estratégicos que fortalecen tu marca y generan oportunidades comerciales.',
    lista: ['Diseño y desarrollo de páginas web.', 'Sitios web corporativos.', 'Landing pages.', 'Portales y sitios especializados.', 'Rediseño y mantenimiento web.'],
    cta: 'Conoce nuestros servicios web',
    h1: 'Diseño web en Monterrey, Nuevo León',
    title: 'Diseño web en Monterrey: sitios corporativos | Dynamedia',
    description: 'Diseño web en Monterrey: sitios corporativos, landing pages, portales y rediseño. Una presencia digital profesional que genera clientes. Cotiza.',
    intro: [
      'Tu sitio web es la primera impresión de tu empresa en internet. Tiene que verse profesional, cargar rápido, funcionar en celular y explicar con claridad qué haces y cómo contactarte.',
      'Esta área reúne todo lo que necesitas para lograrlo: diseño y desarrollo de sitios, páginas corporativas, landing pages, portales especializados, y rediseño y mantenimiento de los que ya tienes. Trabajamos con empresas de Monterrey, Nuevo León, y de todo México.',
    ],
    servicios: ['diseno-web', 'diseno-grafico'], relacionados: ['posicionamiento-en-google', 'tiendas-virtuales', 'capacitacion'],
    beneficios: [i('Imagen profesional', 'Un sitio que presenta bien a tu empresa desde la primera visita.'), i('Pensado para convertir', 'Estructura y mensajes que invitan al contacto y a la cotización.'), i('Preparado para Google', 'Base técnica y de contenido lista para el posicionamiento.'), i('Con acompañamiento', 'Soporte y actualización después de publicar.')],
    pasos: [i('Descubrimiento', 'Entendemos tu negocio, tu público y lo que necesitas lograr.'), i('Diseño', 'Proponemos la estructura y la imagen de tu sitio.'), i('Desarrollo', 'Construimos y probamos cada sección.'), i('Lanzamiento y soporte', 'Publicamos y seguimos a tu lado.')],
    faqs: [
      f('¿Qué incluye el área de diseño web?', 'Diseño y desarrollo de páginas web, sitios corporativos, landing pages, portales y sitios especializados, y rediseño y mantenimiento web.'),
      f('¿Pueden rediseñar el sitio que ya tengo?', 'Sí. Revisamos tu sitio actual, conservamos lo que funciona y lo renovamos en diseño, estructura y velocidad.'),
      f('¿Atienden a empresas fuera de Monterrey?', 'Sí. Estamos en Monterrey, Nuevo León, y trabajamos con empresas de todo México.'),
    ],
  },
  {
    slug: 'software-a-la-medida', n: '02', nombre: 'Software a la medida', icono: 'Code2',
    titulo: 'Tecnología diseñada alrededor de tu negocio.',
    texto: 'Desarrollamos sistemas y herramientas digitales adaptados a los procesos y necesidades de cada empresa.',
    lista: ['Sistemas administrativos.', 'Sistemas de inventarios.', 'CRM y gestión de clientes.', 'Automatización de procesos.', 'Aplicaciones y plataformas empresariales.'],
    cta: 'Explora nuestras soluciones de software',
    h1: 'Software empresarial a la medida en Monterrey, Nuevo León',
    title: 'Desarrollo de software empresarial en Monterrey | Dynamedia',
    description: 'Software empresarial a la medida en Monterrey: sistemas administrativos, inventarios, CRM y automatización de procesos. Tecnología para tu negocio. Cotiza.',
    intro: [
      'Cuando una empresa crece, los procesos manuales y las hojas de cálculo se vuelven un freno. El software a la medida se adapta a tu forma de trabajar, y no al revés.',
      'Desarrollamos sistemas administrativos, de inventarios, CRM, automatización de procesos y aplicaciones y plataformas empresariales, y te acompañamos para que tu equipo los use con confianza. Trabajamos desde Monterrey para empresas de todo México.',
    ],
    servicios: ['software-a-la-medida', 'capacitacion'], relacionados: ['diseno-web', 'tiendas-virtuales', 'posicionamiento-en-google'],
    beneficios: [i('Se adapta a ti', 'Funciones hechas para tus procesos reales.'), i('Menos trabajo manual', 'Automatizas lo repetitivo y reduces errores.'), i('Información centralizada', 'Tus datos ordenados y disponibles cuando los necesitas.'), i('Capacitación y soporte', 'Acompañamiento para que tu equipo lo use bien.')],
    pasos: [i('Análisis del proceso', 'Entendemos cómo trabajas hoy y qué quieres mejorar.'), i('Diseño de la solución', 'Definimos funciones, pantallas y alcance.'), i('Desarrollo y pruebas', 'Programamos y probamos contigo.'), i('Implementación y soporte', 'Lo ponemos en marcha y te acompañamos.')],
    faqs: [
      f('¿Qué tipo de sistemas desarrollan?', 'Sistemas administrativos, de inventarios, CRM y gestión de clientes, automatización de procesos, y aplicaciones y plataformas empresariales.'),
      f('¿Cuánto tarda desarrollar un sistema?', 'Depende de su alcance. Primero analizamos tu proceso y, cuando conviene, dividimos el proyecto en etapas para que empieces a usar partes del sistema cuanto antes.'),
      f('¿Pueden integrarlo con mi sitio web o mi tienda?', 'Podemos evaluarlo según tu caso. Cuéntanos con qué herramientas trabajas hoy y te decimos qué es posible.'),
    ],
  },
  {
    slug: 'ecommerce', n: '03', nombre: 'Ecommerce', icono: 'ShoppingCart',
    titulo: 'Lleva tus productos y servicios al mundo digital.',
    texto: 'Creamos tiendas en línea que facilitan la compra, administración y crecimiento de tu negocio.',
    lista: ['Diseño y desarrollo de tiendas en línea.', 'Integración de pasarelas de pago.', 'Catálogos digitales.', 'Integración de envíos y logística.', 'Administración y optimización de ecommerce.'],
    cta: 'Descubre nuestras soluciones de ecommerce',
    h1: 'Ecommerce y tiendas en línea en Monterrey, Nuevo León',
    title: 'Ecommerce en Monterrey: tiendas en línea que venden | Dynamedia',
    description: 'Soluciones de ecommerce en Monterrey: tiendas en línea, pasarelas de pago, catálogos y envíos para vender por internet. Cotiza tu tienda.',
    intro: [
      'Vender por internet exige más que subir productos: necesitas un catálogo claro, un proceso de compra sencillo, formas de pago confiables y control de pedidos y envíos.',
      'Creamos tiendas en línea que facilitan la compra, la administración y el crecimiento de tu negocio, y las conectamos con estrategias para que más clientes las encuentren. Trabajamos con marcas y comercios de Monterrey y de todo México.',
    ],
    servicios: ['tiendas-virtuales'], relacionados: ['campanas-pago-por-clic', 'posicionamiento-en-google', 'diseno-web'],
    beneficios: [i('Vendes 24/7', 'Tu tienda recibe pedidos a cualquier hora.'), i('Pagos integrados', 'Tus clientes pagan sin salir de la tienda.'), i('Envíos y logística', 'Opciones de entrega conectadas a tu operación.'), i('Administración sencilla', 'Un solo panel para productos, pedidos e inventario.')],
    pasos: [i('Plan de catálogo', 'Ordenamos productos, categorías y precios.'), i('Diseño de la tienda', 'Creamos una experiencia de compra clara.'), i('Pagos y envíos', 'Conectamos los métodos de cobro y entrega.'), i('Lanzamiento y mejora', 'Publicamos, medimos y optimizamos.')],
    faqs: [
      f('¿Qué incluye una tienda en línea?', 'Diseño y desarrollo de la tienda, catálogo digital, integración de pasarelas de pago, integración de envíos y logística, y administración y optimización del ecommerce.'),
      f('¿Puedo administrar mis productos yo mismo?', 'Sí. La tienda incluye un panel para administrar productos, pedidos e inventario.'),
      f('¿También ayudan a conseguir ventas?', 'Sí, con posicionamiento en Google, campañas de pago por clic y redes sociales conectadas a tu tienda.'),
    ],
  },
  {
    slug: 'crecimiento-digital', n: '04', nombre: 'Crecimiento digital', icono: 'TrendingUp',
    titulo: 'Haz que más clientes encuentren tu empresa.',
    texto: 'Desarrollamos estrategias digitales para mejorar tu posicionamiento, atraer clientes potenciales y aprovechar mejor tus oportunidades comerciales.',
    lista: ['Posicionamiento en Google (SEO).', 'Publicidad en Google Ads y redes sociales.', 'Estrategias de marketing digital.', 'Generación de clientes potenciales.', 'Analítica y optimización de conversiones.'],
    cta: 'Conoce cómo impulsar tu crecimiento',
    h1: 'Crecimiento digital y marketing en Monterrey, Nuevo León',
    title: 'Marketing digital y crecimiento en Monterrey | Dynamedia',
    description: 'Crecimiento digital en Monterrey: SEO, Google Ads, redes sociales y contenido con IA para atraer clientes potenciales. Pide tu estrategia.',
    intro: [
      'Tener un buen sitio no basta si tus clientes no lo encuentran. El crecimiento digital reúne las estrategias que atraen clientes potenciales y los convierten en oportunidades comerciales.',
      'Combinamos posicionamiento en Google, publicidad en Google Ads y redes sociales, contenido con inteligencia artificial y manejo de redes, con analítica para medir qué funciona y optimizar tus conversiones. Trabajamos con empresas de Monterrey y Nuevo León.',
    ],
    servicios: ['posicionamiento-en-google', 'campanas-pago-por-clic', 'contenido-con-ia', 'redes-sociales-para-pymes'], relacionados: ['diseno-web', 'tiendas-virtuales', 'diseno-grafico'],
    beneficios: [i('Más visibilidad', 'Tu empresa aparece cuando tus clientes la buscan.'), i('Clientes potenciales', 'Estrategias pensadas para generar contactos y cotizaciones.'), i('Medición clara', 'Sabes qué funciona gracias a la analítica y los reportes.'), i('Estrategia integral', 'SEO, anuncios, redes y contenido trabajando juntos.')],
    pasos: [i('Diagnóstico', 'Revisamos tu presencia actual, tu competencia y tus objetivos.'), i('Estrategia', 'Definimos canales, mensajes y presupuesto.'), i('Ejecución', 'Ponemos en marcha las campañas y el contenido.'), i('Medición y optimización', 'Analizamos resultados y mejoramos cada periodo.')],
    faqs: [
      f('¿Por dónde empiezo: SEO o anuncios?', 'Depende de tus objetivos. Los anuncios dan visibilidad inmediata y el SEO construye visibilidad a mediano plazo; muchas empresas combinan ambos. Te ayudamos a definir el mejor orden.'),
      f('¿Cómo miden los resultados?', 'Con analítica: visitas, contactos, mensajes y costo por cliente potencial, explicados en reportes claros.'),
      f('¿Garantizan resultados?', 'No prometemos posiciones ni ventas específicas, porque dependen de muchos factores. Sí trabajamos con objetivos claros y medimos el avance.'),
    ],
  },
];

export const areaPorSlug = (slug: string) => areas.find((a) => a.slug === slug);
