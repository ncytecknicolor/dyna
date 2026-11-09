import type { IconoKey } from './iconos';
import type { Faq } from './servicios';

export type Modulo = { t: string; d: string; temas: string[] };
export type Curso = {
  slug: string; nombre: string; corto: string; icono: IconoKey; visual: 'navegador' | 'buscador';
  h1: string; title: string; description: string; intro: string[];
  aprenderas: string[]; temario: Modulo[]; practica: string;
  paraQuien: string[]; requisitos: string[]; incluye: string[]; faqs: Faq[]; servicio: string;
};

const m = (t: string, d: string, temas: string[]): Modulo => ({ t, d, temas });
const f = (q: string, a: string): Faq => ({ q, a });
const incluye = ['Clases en línea', 'Práctica guiada paso a paso', 'Material de apoyo', 'Resolución de dudas posteriores'];
const costo = f('¿Cuánto cuesta y cuándo es el siguiente curso?', 'Pregúntanos por fechas, horarios y costo; te respondemos por WhatsApp o por correo.');

// TEMARIOS Y DETALLES: propuesta redactada por Claude a partir de los nombres de los cursos. Ajusta a tu temario real.
export const cursos: Curso[] = [
  {
    slug: 'wordpress-monterrey', nombre: 'Curso de WordPress en línea', icono: 'Globe', visual: 'navegador',
    corto: 'Aprende a crear y administrar tu propio sitio web, paso a paso y sin saber programar.',
    h1: 'Curso de WordPress en línea',
    title: 'Curso de WordPress en línea | Dynamedia',
    description: 'Curso en línea de WordPress de Dynamedia (Monterrey, N.L.): crea y administra tu propio sitio web paso a paso, sin saber programar. Pregunta por fechas.',
    intro: [
      'WordPress es una de las plataformas más usadas para crear sitios web, y permite que una persona sin conocimientos de programación publique, edite y mantenga su propia página.',
      'En este curso en línea aprendes desde cero a montar tu sitio, personalizar su diseño, agregar funciones y mantenerlo seguro, con práctica guiada por un equipo que desarrolla sitios web desde 2010.',
    ],
    aprenderas: [
      'Montar tu sitio en WordPress con dominio y hosting', 'Crear páginas, entradas y menús bien organizados', 'Personalizar el diseño con temas y constructores visuales',
      'Agregar formularios, botón de WhatsApp y otras funciones con plugins', 'Preparar tu sitio para celular y para que cargue rápido', 'Mantenerlo actualizado, respaldado y seguro',
    ],
    temario: [
      m('Fundamentos', 'Qué necesitas para tener un sitio y cómo se instala WordPress.', ['Dominio y hosting', 'Instalación de WordPress', 'Recorrido por el panel de administración']),
      m('Estructura', 'Cómo organizar el contenido para que tu sitio sea claro.', ['Páginas y entradas', 'Menús y navegación', 'Mapa del sitio']),
      m('Diseño', 'Dale a tu sitio la imagen de tu marca.', ['Elegir un tema', 'Colores, tipografías y logotipo', 'Constructores visuales de páginas']),
      m('Contenido', 'Publica textos, imágenes y videos con buen aspecto.', ['Editor de bloques', 'Optimización de imágenes', 'Galerías y videos']),
      m('Plugins', 'Amplía las funciones de tu sitio sin programar.', ['Qué son y cuáles instalar', 'Formularios de contacto', 'WhatsApp y redes sociales']),
      m('Celular y velocidad', 'Que tu sitio se vea bien y cargue rápido en cualquier pantalla.', ['Versión móvil', 'Velocidad de carga', 'Caché e imágenes ligeras']),
      m('Seguridad y mantenimiento', 'Protege y cuida tu inversión.', ['Actualizaciones', 'Respaldos', 'Seguridad básica']),
      m('Publicación y primeros pasos en SEO', 'Lanza tu sitio y prepáralo para Google.', ['Revisión final y publicación', 'Títulos y descripciones', 'Introducción a Google Search Console']),
    ],
    practica: 'Durante el curso construyes tu propio sitio web, o el de tu empresa, desde cero, y sales con una base lista para terminar y publicar.',
    paraQuien: ['Emprendedores y dueños de negocio', 'Personal de marketing o comunicación que actualiza la página de su empresa', 'Profesionistas que quieren su propio sitio', 'Quienes desean dejar de depender de terceros para cambios sencillos'],
    requisitos: ['No necesitas saber programar', 'Manejo básico de computadora e internet', 'Computadora con conexión a internet estable', 'Opcional: tu logotipo, textos e imágenes para practicar con tu proyecto'],
    incluye,
    faqs: [
      f('¿Necesito saber programar?', 'No. El curso está pensado para personas sin conocimientos técnicos; aprendes a usar WordPress paso a paso.'),
      f('¿El curso es en línea?', 'Sí. Se imparte en línea, así que puedes tomarlo desde cualquier lugar. Pregúntanos por fechas y horarios.'),
      f('¿Puedo trabajar con mi propio proyecto?', 'Sí. Si llevas tu logotipo, textos e imágenes, practicas directamente con el sitio de tu negocio.'),
      costo,
    ],
    servicio: 'diseno-web',
  },
  {
    slug: 'posicionamiento-en-google', nombre: 'Curso de posicionamiento web en Google', icono: 'Search', visual: 'buscador',
    corto: 'Aprende a mejorar la visibilidad de tu sitio en Google y a medir si funciona.',
    h1: 'Curso de posicionamiento web en Google en línea',
    title: 'Curso de posicionamiento web en Google en línea | Dynamedia',
    description: 'Curso en línea de SEO y posicionamiento en Google de Dynamedia (Monterrey, N.L.): mejora la visibilidad de tu sitio y mide resultados. Pregunta por fechas.',
    intro: [
      'El posicionamiento web (SEO) ayuda a que tu sitio aparezca cuando las personas buscan lo que ofreces. No es magia ni se compra: se construye con una estrategia y con trabajo constante.',
      'En este curso en línea aprendes cómo funciona Google, cómo elegir palabras clave, cómo optimizar tu sitio y cómo medir resultados, con énfasis en el SEO local para negocios de Monterrey y Nuevo León.',
    ],
    aprenderas: [
      'Entender cómo Google encuentra, indexa y ordena las páginas', 'Elegir las palabras clave que usan tus clientes', 'Optimizar títulos, textos, encabezados y estructura de tu sitio',
      'Mejorar la velocidad y la versión móvil, que influyen en el posicionamiento', 'Posicionarte en búsquedas locales y en Google Maps', 'Medir resultados con Google Search Console y Google Analytics',
    ],
    temario: [
      m('Cómo funciona Google', 'Rastreo, indexación y posicionamiento, explicados sin tecnicismos.', ['Qué hace un buscador', 'Resultados orgánicos y de pago', 'Qué influye en el posicionamiento']),
      m('Palabras clave', 'Descubre lo que realmente busca tu cliente.', ['Intención de búsqueda', 'Herramientas para investigar', 'Elegir y priorizar palabras']),
      m('SEO en la página', 'Optimiza cada página de tu sitio.', ['Títulos y descripciones', 'Encabezados y URLs', 'Textos e imágenes']),
      m('SEO técnico', 'Que Google pueda leer tu sitio sin problemas.', ['Velocidad y versión móvil', 'Indexación y mapa del sitio', 'Errores frecuentes']),
      m('Contenido que posiciona', 'Planea contenido útil para tus clientes.', ['Páginas de servicio', 'Blog y temas', 'Estructura y enlaces internos']),
      m('SEO local', 'Aparece en las búsquedas de tu ciudad.', ['Google Maps y perfil de empresa', 'Reseñas', 'Búsquedas con intención local']),
      m('Autoridad y enlaces', 'Cómo construir confianza alrededor de tu sitio.', ['Enlaces internos y externos', 'Menciones y directorios', 'Buenas prácticas']),
      m('Medición y plan de acción', 'Mide, decide y mejora.', ['Google Search Console', 'Google Analytics', 'Plan de trabajo priorizado']),
    ],
    practica: 'Haces una auditoría básica de tu propio sitio y sales con un plan de acción priorizado para empezar a mejorar tu posicionamiento.',
    paraQuien: ['Dueños de negocio que ya tienen sitio web', 'Equipos de marketing y ventas', 'Freelancers y consultores', 'Quienes administran un sitio en WordPress u otra plataforma'],
    requisitos: ['Manejo básico de internet', 'Idealmente, un sitio web propio para practicar', 'Computadora con conexión a internet estable', 'No necesitas conocimientos técnicos previos'],
    incluye,
    faqs: [
      f('¿El curso garantiza que mi sitio llegue a la primera posición?', 'No. Nadie puede garantizarlo, porque Google decide con muchos factores. Aprendes qué sí puedes mejorar y cómo medir el avance.'),
      f('¿Necesito saber WordPress?', 'No es indispensable. Los principios aplican a cualquier plataforma; si tu sitio está en WordPress, te mostramos ejemplos.'),
      f('¿Se ve SEO local para Monterrey?', 'Sí. Incluimos posicionamiento local y Google Maps, clave para negocios con clientes en Monterrey y su área metropolitana.'),
      costo,
    ],
    servicio: 'posicionamiento-en-google',
  },
];

export const cursoPorSlug = (slug: string) => cursos.find((c) => c.slug === slug);
