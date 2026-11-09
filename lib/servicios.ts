import type { IconoKey } from './iconos';

export type Par = { t: string; d: string };
export type Faq = { q: string; a: string };
export type Servicio = {
  slug: string; nombre: string; corto: string; eje: 'web' | 'marketing' | 'marca'; icono: IconoKey;
  h1: string; title: string; description: string; intro: string[];
  incluye: Par[]; beneficios: Par[]; pasos: Par[]; para: string[]; faqs: Faq[]; relacionados: string[];
};

export const ejes = [
  { id: 'todos', t: 'Todos' }, { id: 'web', t: 'Web y tecnología' }, { id: 'marketing', t: 'Marketing digital' }, { id: 'marca', t: 'Marca y capacitación' },
] as const;

const i = (t: string, d: string): Par => ({ t, d });
const f = (q: string, a: string): Faq => ({ q, a });

// Orden = prioridad de mercado (el mismo del home). Aquí vive TODO el contenido SEO de cada página /servicios/<slug>.
export const servicios: Servicio[] = [
  {
    slug: 'campanas-pago-por-clic', nombre: 'Campañas de pago por clic (PPC)', eje: 'marketing', icono: 'MousePointerClick',
    corto: 'Anuncios en Google y redes que aparecen justo cuando alguien busca lo que vendes.',
    h1: 'Campañas de pago por clic (Google Ads) en Monterrey',
    title: 'Publicidad en Google Ads en Monterrey, N.L. | Dynamedia',
    description: 'Campañas de Google Ads y redes sociales en Monterrey: atrae clientes potenciales y mide cada peso invertido. Cotiza tu campaña con Dynamedia.',
    intro: [
      'La publicidad de pago por clic (PPC) te permite aparecer en los primeros resultados de Google y en redes sociales justo cuando una persona en Monterrey busca lo que tú ofreces. Solo pagas cuando alguien hace clic en tu anuncio, y puedes empezar a recibir visitas y contactos en cuanto la campaña está activa.',
      'En Dynamedia diseñamos, publicamos y optimizamos campañas en Google Ads y en redes sociales, con anuncios y páginas de destino pensadas para convertir visitas en llamadas, mensajes de WhatsApp y cotizaciones.',
    ],
    incluye: [
      i('Configuración de campañas', 'Estructura de campañas, grupos de anuncios y presupuesto en Google Ads y redes sociales.'),
      i('Investigación de palabras clave', 'Identificamos las búsquedas de tus clientes en Monterrey y descartamos las que no vale la pena pagar.'),
      i('Segmentación local', 'Anuncios dirigidos por zona, horario y tipo de audiencia en Monterrey y su área metropolitana.'),
      i('Anuncios y páginas de destino', 'Textos y diseños pensados para que quien hace clic realice una acción.'),
      i('Medición de conversiones', 'Seguimiento de clics, llamadas, formularios y mensajes de WhatsApp para saber qué campaña funciona.'),
      i('Optimización y reportes', 'Ajustes continuos y reportes claros con el costo por cliente potencial.'),
    ],
    beneficios: [
      i('Resultados rápidos', 'Tus anuncios pueden empezar a mostrarse poco después de aprobarse la campaña.'),
      i('Control del gasto', 'Tú defines el presupuesto y puedes pausarlo o cambiarlo cuando quieras.'),
      i('Todo medible', 'Sabes cuántas visitas, mensajes y contactos genera cada campaña.'),
      i('Enfoque local', 'Llegas a personas de Monterrey y de las zonas que te interesan.'),
    ],
    pasos: [i('Diagnóstico', 'Revisamos tu oferta, tu competencia y tus objetivos.'), i('Estrategia', 'Definimos plataformas, palabras clave, audiencias y presupuesto.'), i('Lanzamiento', 'Creamos los anuncios, configuramos la medición y publicamos.'), i('Optimización', 'Analizamos resultados y ajustamos para mejorar cada periodo.')],
    para: ['Negocios que quieren recibir contactos pronto', 'Empresas que lanzan un producto, servicio o promoción', 'Comercios y despachos de Monterrey con competencia local', 'Quienes ya tienen sitio web y no reciben suficientes visitas'],
    faqs: [
      f('¿Cuánto debo invertir en publicidad de pago por clic?', 'Depende de tu giro, tu competencia y tus objetivos. Definimos contigo un presupuesto inicial razonable y lo ajustamos con los resultados; al cotizar te explicamos cómo se estructura la inversión.'),
      f('¿Cuánto tardan en verse resultados?', 'Los anuncios pueden empezar a mostrarse poco después de aprobarse. Los primeros días sirven para aprender qué funciona, y los mejores resultados llegan al optimizar la campaña con datos reales.'),
      f('¿Qué diferencia hay entre pago por clic y SEO?', 'El pago por clic da visibilidad inmediata mientras la campaña está activa; el SEO construye visibilidad orgánica a mediano plazo. Muchas empresas combinan ambos.'),
    ],
    relacionados: ['posicionamiento-en-google', 'diseno-web', 'redes-sociales-para-pymes'],
  },
  {
    slug: 'posicionamiento-en-google', nombre: 'Posicionamiento en Google', eje: 'marketing', icono: 'Search',
    corto: 'Que te encuentren en Google cuando buscan lo que vendes en Monterrey.',
    h1: 'Posicionamiento SEO en Monterrey, Nuevo León',
    title: 'Posicionamiento SEO en Monterrey, N.L. | Dynamedia',
    description: 'Posicionamiento SEO y SEO local en Monterrey, N.L. Haz que tus clientes te encuentren en Google y Google Maps. Solicita tu cotización.',
    intro: [
      'El posicionamiento SEO (optimización para buscadores) busca que tu sitio aparezca en Google cuando las personas buscan los productos o servicios que ofreces, sin pagar por cada visita. Para una empresa de Monterrey, el SEO local es la forma de ser encontrada por clientes de la ciudad y de su área metropolitana.',
      'En Dynamedia analizamos tu sitio, definimos las palabras clave que realmente usan tus clientes y trabajamos el contenido, la estructura técnica y tu presencia en Google Maps. Es un trabajo de mediano plazo y no prometemos posiciones específicas: trabajamos para mejorar tu visibilidad y la medimos con reportes claros.',
    ],
    incluye: [
      i('Auditoría SEO', 'Revisión técnica y de contenido para detectar qué frena tu posicionamiento.'),
      i('Palabras clave locales', 'Las búsquedas reales de tus clientes en Monterrey y Nuevo León.'),
      i('Optimización de páginas', 'Títulos, textos, encabezados y enlaces internos alineados con cada búsqueda.'),
      i('SEO técnico', 'Velocidad, versión móvil, indexación y estructura del sitio.'),
      i('Google Maps y perfil de empresa', 'Ficha de tu negocio optimizada para búsquedas locales.'),
      i('Reportes de avance', 'Visitas, posiciones y contactos, explicados sin tecnicismos.'),
    ],
    beneficios: [
      i('Visitas sin pagar por clic', 'El tráfico orgánico no cuesta por cada visita.'),
      i('Clientes con intención', 'Llegan personas que ya buscan lo que ofreces.'),
      i('Presencia local', 'Apareces en búsquedas de tu zona y en Google Maps.'),
      i('Resultados que se acumulan', 'El trabajo de hoy sigue sumando con el tiempo.'),
    ],
    pasos: [i('Auditoría', 'Revisamos el estado actual de tu sitio y de tu competencia.'), i('Plan de palabras clave', 'Elegimos las búsquedas que más te convienen.'), i('Optimización', 'Mejoramos páginas, contenido y aspectos técnicos.'), i('Seguimiento', 'Medimos avances y seguimos mejorando.')],
    para: ['Negocios con sitio web que casi no reciben visitas', 'Empresas con competencia fuerte en Monterrey', 'Comercios con ubicación física que quieren aparecer en Google Maps', 'Quienes estrenan sitio y quieren nacer bien posicionados'],
    faqs: [
      f('¿Cuánto tarda el SEO en dar resultados?', 'El SEO es una inversión a mediano plazo. Los primeros avances suelen notarse en semanas o meses, según tu competencia y el estado de tu sitio, y mejoran con el trabajo constante.'),
      f('¿Garantizan la primera posición en Google?', 'No. Nadie puede garantizar posiciones, porque Google decide con cientos de factores. Lo que hacemos es mejorar todo lo que sí está bajo tu control y medir el avance.'),
      f('¿Qué es el SEO local?', 'Es optimizar tu presencia para búsquedas con intención geográfica, como "agencia de diseño web en Monterrey". Incluye tu sitio y tu ficha de Google Maps.'),
    ],
    relacionados: ['campanas-pago-por-clic', 'contenido-con-ia', 'diseno-web'],
  },
  {
    slug: 'contenido-con-ia', nombre: 'Creación de contenido con IA', eje: 'marketing', icono: 'Sparkles',
    corto: 'Textos, imágenes y video para tus redes y tu blog, con IA y revisión humana.',
    h1: 'Creación de contenido con inteligencia artificial en Monterrey',
    title: 'Creación de contenido con IA en Monterrey | Dynamedia',
    description: 'Contenido para redes, blog y correo creado con IA y revisión humana en Monterrey. Publica más y mejor sin saturar a tu equipo. Cotiza hoy.',
    intro: [
      'Publicar con constancia es difícil para una pyme. La inteligencia artificial permite producir textos, imágenes y guiones de video en menos tiempo, y la revisión humana asegura que cada pieza suene a tu marca, tenga datos correctos y cumpla un objetivo.',
      'En Dynamedia creamos contenido con IA para redes sociales, blog, correo y anuncios, adaptado al tono de tu empresa y al público de Monterrey y Nuevo León.',
    ],
    incluye: [
      i('Calendario de contenido', 'Un plan de publicaciones alineado con tus objetivos y tus fechas clave.'),
      i('Textos para redes, blog y correo', 'Escritos con el tono de tu marca y pensados para tu público.'),
      i('Imágenes y piezas gráficas con IA', 'Material visual creado y ajustado a tu identidad.'),
      i('Guiones y videos cortos', 'Ideas y guiones para videos breves de redes sociales.'),
      i('Voz de marca', 'Definimos cómo habla tu empresa para que todo suene coherente.'),
      i('Revisión humana', 'Cada pieza se revisa en calidad, datos y estilo antes de publicarse.'),
    ],
    beneficios: [
      i('Más constancia', 'Publicas con regularidad sin saturar a tu equipo.'),
      i('Más rapidez', 'Producimos más material en menos tiempo.'),
      i('Mejor aprovechamiento', 'Sacas más provecho de tu presupuesto de marketing.'),
      i('Calidad cuidada', 'La revisión humana protege tu imagen.'),
    ],
    pasos: [i('Brief y voz de marca', 'Conocemos tu empresa, tu público y tu estilo.'), i('Plan de contenido', 'Definimos temas, formatos y calendario.'), i('Producción con IA', 'Creamos textos, imágenes y guiones.'), i('Revisión y publicación', 'Ajustamos, aprobamos contigo y publicamos.')],
    para: ['Pymes que publican sin estrategia o sin tiempo', 'Negocios que necesitan un blog o redes activas', 'Equipos de marketing pequeños', 'Marcas que quieren usar IA sin perder su estilo'],
    faqs: [
      f('¿El contenido con IA se nota artificial?', 'Sin supervisión puede notarse. Por eso partimos de la voz de tu marca y cada pieza pasa por revisión humana: ajustamos tono, datos y estilo antes de publicar.'),
      f('¿Quién puede usar el contenido que crean?', 'El contenido se entrega para uso de tu empresa. Al cotizar acordamos por escrito los detalles de uso.'),
      f('¿El contenido ayuda a mi posicionamiento en Google?', 'El contenido útil y bien planeado ayuda a tu visibilidad. Lo conectamos con tus palabras clave y con tu estrategia de SEO.'),
    ],
    relacionados: ['redes-sociales-para-pymes', 'posicionamiento-en-google', 'capacitacion'],
  },
  {
    slug: 'redes-sociales-para-pymes', nombre: 'Redes sociales para pymes', eje: 'marketing', icono: 'Share2',
    corto: 'Una identidad profesional que conecta tu negocio con el cliente ideal.',
    h1: 'Manejo de redes sociales para pymes en Monterrey',
    title: 'Manejo de redes sociales para pymes en Monterrey | Dynamedia',
    description: 'Manejo de redes sociales para pymes en Monterrey: identidad, contenido y campañas que conectan con tu cliente ideal. Pide tu cotización.',
    intro: [
      'Tener perfiles abiertos no es lo mismo que tener presencia en redes sociales. Una pyme necesita una identidad clara, publicaciones constantes y mensajes que lleguen al cliente indicado.',
      'En Dynamedia generamos propuestas de valor que unen a tu empresa con el segmento ideal mediante una identidad profesional: diseñamos tu imagen en redes, planeamos el contenido, publicamos y medimos los resultados para pymes de Monterrey y Nuevo León.',
    ],
    incluye: [
      i('Identidad visual en redes', 'Imagen de perfiles y estilo gráfico coherente con tu marca.'),
      i('Calendario de publicaciones', 'Planeación mensual de lo que se publica y cuándo.'),
      i('Diseño de piezas gráficas', 'Imágenes y materiales para tus publicaciones.'),
      i('Segmentación de audiencia', 'Definimos al cliente ideal y cómo hablarle.'),
      i('Campañas en redes', 'Promoción pagada para llegar a más personas de tu segmento.'),
      i('Reportes de resultados', 'Alcance, interacción y contactos explicados con claridad.'),
    ],
    beneficios: [
      i('Imagen profesional', 'Tus perfiles transmiten confianza.'),
      i('Constancia', 'Presencia regular, sin depender del tiempo libre de tu equipo.'),
      i('Cliente ideal', 'Mensajes dirigidos al segmento que te interesa.'),
      i('Resultados medibles', 'Sabes qué publicaciones y campañas funcionan.'),
    ],
    pasos: [i('Diagnóstico de perfiles', 'Revisamos tu presencia actual y la de tu competencia.'), i('Estrategia y segmento', 'Definimos a quién hablarle y qué decirle.'), i('Producción y publicación', 'Creamos y publicamos tu contenido.'), i('Medición y mejora', 'Analizamos resultados y ajustamos el plan.')],
    para: ['Pymes que publican sin estrategia o sin tiempo para hacerlo', 'Marcas nuevas que quieren nacer con buena imagen', 'Negocios locales de Monterrey', 'Empresas con perfiles abandonados'],
    faqs: [
      f('¿En qué redes sociales trabajan?', 'Definimos contigo en cuáles está tu cliente, normalmente Facebook, Instagram, TikTok o LinkedIn, según tu giro.'),
      f('¿Necesito tener ya mis perfiles?', 'No. Si ya los tienes, los revisamos y mejoramos; si no, los creamos con la identidad de tu marca.'),
      f('¿Puedo combinarlo con publicidad pagada?', 'Sí. Las campañas de pago por clic y las campañas en redes pueden potenciar el contenido que publicamos.'),
    ],
    relacionados: ['contenido-con-ia', 'campanas-pago-por-clic', 'diseno-grafico'],
  },
  {
    slug: 'diseno-web', nombre: 'Diseño web', eje: 'web', icono: 'Globe',
    corto: 'Sitios web funcionales, atractivos y estratégicos que fortalecen tu marca.',
    h1: 'Diseño de páginas web en Monterrey, Nuevo León',
    title: 'Diseño de páginas web en Monterrey, N.L. | Dynamedia',
    description: 'Diseño de páginas web en Monterrey, N.L.: sitios rápidos, atractivos y listos para Google que generan clientes. Solicita tu cotización.',
    intro: [
      'Tu sitio web es tu oficina abierta las 24 horas. Debe verse profesional, cargar rápido, funcionar bien en celular y explicar con claridad qué haces y cómo contactarte.',
      'Desde 2010 diseñamos y desarrollamos sitios web funcionales, atractivos y estratégicos que fortalecen tu marca y generan oportunidades comerciales para empresas de Monterrey y Nuevo León.',
    ],
    incluye: [
      i('Diseño y desarrollo de páginas web', 'Sitios a la medida de tu empresa, de la idea a la publicación.'),
      i('Sitios web corporativos', 'La presencia formal de tu empresa, con la información que tus clientes buscan.'),
      i('Landing pages', 'Páginas enfocadas en una sola acción, ideales para campañas.'),
      i('Portales y sitios especializados', 'Proyectos con más secciones, catálogos o funciones particulares.'),
      i('Rediseño y mantenimiento web', 'Renovamos sitios que se quedaron atrás y los mantenemos al día.'),
      i('Base para SEO', 'Estructura y contenido preparados para aparecer en Google.'),
    ],
    beneficios: [
      i('Imagen profesional', 'Un sitio que presenta bien a tu empresa desde la primera visita.'),
      i('Pensado para celular', 'Se ve y funciona bien en cualquier pantalla.'),
      i('Listo para Google', 'Estructura preparada para el posicionamiento.'),
      i('Con soporte', 'Te acompañamos con soporte y actualización.'),
    ],
    pasos: [i('Descubrimiento', 'Entendemos tu negocio, tu público y lo que necesitas lograr.'), i('Diseño', 'Proponemos la estructura y la imagen de tu sitio.'), i('Desarrollo', 'Construimos y probamos cada sección.'), i('Lanzamiento y soporte', 'Publicamos y seguimos a tu lado.')],
    para: ['Empresas que aún no tienen sitio web', 'Negocios con un sitio desactualizado', 'Marcas que están por lanzarse', 'Empresas que necesitan un portal especializado'],
    faqs: [
      f('¿Cuánto tarda en estar listo mi sitio web?', 'Depende del tamaño del proyecto y de qué tan pronto compartas textos e imágenes. Al cotizar te damos un calendario claro.'),
      f('¿Mi página se verá bien en celular?', 'Sí. Diseñamos pensando en celular, tablet y computadora.'),
      f('¿Dan soporte después de publicar el sitio?', 'Sí. Seguimos brindando soporte para el manejo y la actualización de tu sitio.'),
    ],
    relacionados: ['posicionamiento-en-google', 'tiendas-virtuales', 'diseno-grafico'],
  },
  {
    slug: 'tiendas-virtuales', nombre: 'Tiendas virtuales', eje: 'web', icono: 'ShoppingCart',
    corto: 'Tiendas en línea que facilitan la compra, la administración y el crecimiento.',
    h1: 'Tiendas en línea y ecommerce en Monterrey, Nuevo León',
    title: 'Tiendas en línea y ecommerce en Monterrey | Dynamedia',
    description: 'Creamos tiendas en línea en Monterrey con pagos, envíos y catálogo listos para vender desde el primer día. Cotiza tu ecommerce.',
    intro: [
      'Vender por internet exige más que subir productos: necesitas un catálogo claro, un proceso de compra sencillo, formas de pago confiables y control de pedidos y envíos.',
      'Creamos tiendas en línea que facilitan la compra, la administración y el crecimiento de tu negocio, para marcas y comercios de Monterrey y de todo México.',
    ],
    incluye: [
      i('Diseño y desarrollo de tiendas en línea', 'Una tienda hecha para tu marca y tus productos.'),
      i('Integración de pasarelas de pago', 'Cobros con tarjeta y otros métodos, de forma segura.'),
      i('Catálogos digitales', 'Productos organizados por categorías, con fichas claras.'),
      i('Envíos y logística', 'Integración de opciones de envío y seguimiento.'),
      i('Administración de la tienda', 'Un panel para gestionar productos, pedidos e inventario.'),
      i('Preparación para SEO y publicidad', 'Estructura lista para posicionarse y para campañas.'),
    ],
    beneficios: [
      i('Vendes 24/7', 'Tu tienda recibe pedidos a cualquier hora.'),
      i('Pagos integrados', 'Tus clientes pagan sin salir de la tienda.'),
      i('Control de pedidos', 'Todo en un solo panel.'),
      i('Lista para crecer', 'Agrega productos y funciones cuando lo necesites.'),
    ],
    pasos: [i('Plan de catálogo', 'Ordenamos productos, categorías y precios.'), i('Diseño de la tienda', 'Creamos una experiencia de compra clara.'), i('Pagos y envíos', 'Conectamos los métodos de cobro y entrega.'), i('Lanzamiento y mejora', 'Publicamos, medimos y optimizamos.')],
    para: ['Comercios con tienda física que quieren vender en línea', 'Marcas que ya venden por redes sociales', 'Fabricantes y distribuidores', 'Negocios que necesitan un catálogo digital'],
    faqs: [
      f('¿Qué formas de pago se pueden integrar?', 'Integramos pasarelas de pago para tarjeta y otros métodos. Elegimos contigo las que mejor se adapten a tu negocio y a tus clientes.'),
      f('¿Puedo administrar mis productos yo mismo?', 'Sí. La tienda incluye un panel para administrar productos, pedidos e inventario.'),
      f('¿También ayudan a conseguir ventas?', 'Sí, con posicionamiento en Google, campañas de pago por clic y redes sociales conectadas a tu tienda.'),
    ],
    relacionados: ['campanas-pago-por-clic', 'posicionamiento-en-google', 'diseno-web'],
  },
  {
    slug: 'software-a-la-medida', nombre: 'Software a la medida', eje: 'web', icono: 'Code2',
    corto: 'Sistemas y herramientas diseñados alrededor de los procesos de tu empresa.',
    h1: 'Desarrollo de software a la medida en Monterrey, Nuevo León',
    title: 'Desarrollo de software a la medida en Monterrey | Dynamedia',
    description: 'Software a la medida en Monterrey: sistemas administrativos, inventarios, CRM y automatización hechos para tu empresa. Agenda tu cotización.',
    intro: [
      'Cuando una empresa crece, las hojas de cálculo y los procesos manuales empiezan a frenarla. El software a la medida se adapta a tu forma de trabajar, y no al revés.',
      'Desarrollamos sistemas y herramientas digitales adaptados a los procesos y necesidades de cada empresa: desde un sistema de inventarios hasta un CRM o una plataforma empresarial, para empresas de Monterrey y Nuevo León.',
    ],
    incluye: [
      i('Sistemas administrativos', 'Control de las operaciones y la información de tu empresa.'),
      i('Sistemas de inventarios', 'Existencias, entradas y salidas siempre actualizadas.'),
      i('CRM y gestión de clientes', 'Seguimiento de clientes, prospectos y oportunidades.'),
      i('Automatización de procesos', 'Menos tareas manuales y menos errores.'),
      i('Aplicaciones y plataformas empresariales', 'Herramientas web hechas para tu operación.'),
      i('Soporte y capacitación', 'Acompañamiento para que tu equipo use bien el sistema.'),
    ],
    beneficios: [
      i('Se adapta a ti', 'Funciones hechas para tus procesos reales.'),
      i('Menos trabajo manual', 'Automatizas lo repetitivo.'),
      i('Información en un solo lugar', 'Datos ordenados y disponibles cuando los necesitas.'),
      i('Crece contigo', 'Se amplía cuando tu empresa lo necesita.'),
    ],
    pasos: [i('Análisis del proceso', 'Entendemos cómo trabajas hoy y qué quieres mejorar.'), i('Diseño de la solución', 'Definimos funciones, pantallas y alcance.'), i('Desarrollo y pruebas', 'Programamos y probamos contigo.'), i('Implementación y soporte', 'Lo ponemos en marcha y te acompañamos.')],
    para: ['Empresas que operan con hojas de Excel', 'Negocios con procesos repetitivos', 'Empresas con varias áreas que necesitan compartir información', 'Quienes buscan una plataforma propia'],
    faqs: [
      f('¿Por qué elegir software a la medida y no uno genérico?', 'Un sistema genérico te obliga a adaptar tus procesos. El software a la medida se construye para ellos, con las funciones que realmente usas.'),
      f('¿Cuánto tarda desarrollar un sistema?', 'Depende de su alcance. Primero analizamos tu proceso y, cuando conviene, dividimos el proyecto en etapas para que empieces a usar partes del sistema cuanto antes.'),
      f('¿Habrá soporte después de la entrega?', 'Sí, damos soporte y acompañamiento para que el sistema siga funcionando y evolucionando.'),
    ],
    relacionados: ['diseno-web', 'capacitacion', 'tiendas-virtuales'],
  },
  {
    slug: 'capacitacion', nombre: 'Capacitación', eje: 'marca', icono: 'GraduationCap',
    corto: 'Cursos en línea y talleres para que tu equipo domine las herramientas digitales.',
    h1: 'Cursos y capacitación digital en línea',
    title: 'Cursos y capacitación digital en línea | Dynamedia',
    description: 'Cursos en línea de WordPress y SEO, y talleres de marketing digital para equipos, de Dynamedia (Monterrey, N.L.). Pregunta por fechas y capacitación a la medida.',
    intro: [
      'Una página o una campaña rinde más cuando tu equipo sabe manejarla. Impartimos talleres para que personas y empresas aprendan a crear, administrar y posicionar sus propios sitios.',
      'Ofrecemos cursos en línea, como el curso de WordPress y el de posicionamiento web en Google, y también capacitación a la medida para equipos de trabajo.',
    ],
    incluye: [
      i('Curso de WordPress en línea', 'Aprende a crear y administrar tu propio sitio web.'),
      i('Curso de posicionamiento web en Google', 'Aprende a mejorar la visibilidad de tu sitio en buscadores.'),
      i('Talleres de marketing digital', 'Estrategias y herramientas para promover tu negocio en internet.'),
      i('Uso de IA en el trabajo diario', 'Cómo aprovechar la inteligencia artificial en tareas de marketing y contenido.'),
      i('Capacitación para equipos', 'Temarios a la medida de lo que necesita tu empresa.'),
      i('Material de apoyo', 'Recursos para seguir practicando después de la sesión.'),
    ],
    beneficios: [
      i('Aprendes practicando', 'Cursos con ejercicios sobre casos reales.'),
      i('En línea, desde donde estés', 'Tomas el curso desde cualquier lugar y resuelves tus dudas con nosotros.'),
      i('Para equipos o personas', 'Opciones para particulares y empresas.'),
      i('Más autonomía', 'Dependes menos de terceros para actualizar tu sitio.'),
    ],
    pasos: [i('Definimos objetivos', 'Vemos qué necesitas aprender y para qué.'), i('Armamos el temario', 'Preparamos el contenido adecuado a tu nivel.'), i('Impartimos el curso', 'Sesiones prácticas y participativas.'), i('Resolvemos dudas', 'Te orientamos después del curso.')],
    para: ['Emprendedores que quieren manejar su propio sitio', 'Equipos de marketing y ventas', 'Empresas que quieren actualizar su web sin depender de terceros', 'Profesionales que desean actualizarse'],
    faqs: [
      f('¿Los cursos son en línea?', 'Sí, nuestros cursos de WordPress y de posicionamiento web son en línea. Pregúntanos por fechas y por capacitación a la medida.'),
      f('¿Necesito experiencia previa?', 'Depende del curso. Te orientamos para elegir el nivel adecuado antes de inscribirte.'),
      f('¿Pueden preparar un taller para mi equipo?', 'Podemos preparar talleres a la medida de tu equipo. Cuéntanos tus objetivos y te proponemos un temario.'),
    ],
    relacionados: ['posicionamiento-en-google', 'diseno-web', 'contenido-con-ia'],
  },
  {
    slug: 'diseno-grafico', nombre: 'Diseño gráfico', eje: 'marca', icono: 'Palette',
    corto: 'Logotipos, empaques, diseño editorial y material POP para una marca que se recuerda.',
    h1: 'Diseño gráfico y branding en Monterrey, Nuevo León',
    title: 'Diseño gráfico y branding en Monterrey, N.L. | Dynamedia',
    description: 'Diseño de logotipos, empaques, material POP y diseño editorial en Monterrey, N.L. Haz que tu marca se recuerde. Pide tu cotización.',
    intro: [
      'Tu marca es lo primero que ven tus clientes. Un buen diseño la hace reconocible, transmite confianza y mantiene una imagen consistente en todos tus medios.',
      'En Dynamedia creamos experiencias a través de logotipos, empaques, diseño editorial, material POP e impresos de todo tipo para empresas de Monterrey y Nuevo León.',
    ],
    incluye: [
      i('Logotipos e identidad de marca', 'El símbolo, los colores y el estilo que te distinguen.'),
      i('Empaques y etiquetas', 'Diseño que presenta tu producto en el anaquel y en línea.'),
      i('Diseño editorial', 'Catálogos, folletos, revistas y reportes.'),
      i('Material POP', 'Piezas para punto de venta y promoción.'),
      i('Impresos de todo tipo', 'Papelería, volantes, lonas y más.'),
      i('Piezas para redes y web', 'Material gráfico coherente con tu identidad.'),
    ],
    beneficios: [
      i('Marca reconocible', 'Se te identifica y se te recuerda.'),
      i('Imagen consistente', 'La misma identidad en todos tus medios.'),
      i('Listo para imprimir y publicar', 'Archivos preparados para cada uso.'),
      i('Pensado para comunicar', 'Cada pieza tiene un propósito.'),
    ],
    pasos: [i('Brief creativo', 'Conocemos tu marca, tu público y tus objetivos.'), i('Propuestas', 'Presentamos opciones de diseño.'), i('Ajustes', 'Afinamos contigo hasta el resultado final.'), i('Entrega de archivos', 'Recibes todo listo para usar.')],
    para: ['Marcas nuevas', 'Empresas que quieren renovar su imagen', 'Productos que necesitan empaque', 'Negocios con material impreso o de punto de venta'],
    faqs: [
      f('¿Qué incluye el diseño de un logotipo?', 'Definimos contigo el concepto, presentamos propuestas y entregamos los archivos finales listos para usarse en impresos y en medios digitales.'),
      f('¿También se encargan de la impresión?', 'Preparamos tus archivos listos para imprimir y te orientamos sobre el material y el proveedor adecuados.'),
      f('¿Pueden rediseñar una marca que ya existe?', 'Sí. Podemos actualizar tu identidad conservando lo que tus clientes ya reconocen.'),
    ],
    relacionados: ['diseno-web', 'redes-sociales-para-pymes', 'tiendas-virtuales'],
  },
];

export const porSlug = (slug: string) => servicios.find((s) => s.slug === slug);

// Enlaces internos: qué cursos y qué tipo de proyectos se muestran en cada página de servicio.
export const cursosDeServicio: Record<string, string[]> = {
  'posicionamiento-en-google': ['posicionamiento-en-google'],
  'diseno-web': ['wordpress-monterrey'],
  capacitacion: ['wordpress-monterrey', 'posicionamiento-en-google'],
};
