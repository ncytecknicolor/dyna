# Dynamedia

    npm install
    npm run dev     # http://localhost:3000

- Formulario: completa el envío en `app/api/contact/route.ts` (ejemplo con Resend).
- Redirecciones del WordPress viejo: `next.config.mjs`.
- Colores: `tailwind.config.ts` (azul, naranja, grafito, niebla).

## Hero (carrusel de portada)
- Textos y orden de las 7 pantallas: `components/heroSlides.ts`.
- Para poner la imagen de cada pantalla: copia el archivo a `public/hero/` y escribe su ruta en `imagen` (ej. `'/hero/01-somos.jpg'`).
- Video de fondo: copia el .mp4 a `public/hero/` y agrega `video: '/hero/video.mp4'` a la pantalla (sin sonido, ideal 5-8 MB).

## Proyectos (carrusel y fichas)
- Datos de cada proyecto: `components/proyectos.ts` (un registro = una imagen del carrusel + su ficha).
- Imágenes: `public/proyectos/<slug>/`. Con `MOSTRAR_PENDIENTES = false` se ocultan los bloques sin dato.
- Distribución de filas: arriba de `Proyectos.tsx` (listas `arriba` y `abajo`).

## Página Nosotros
- `app/nosotros/page.tsx` (hero, cifras con contador, proceso y cierre) y `components/NosotrosTabs.tsx` (pestañas: quiénes somos, misión y visión, valores, experiencia).
- Efectos: `Reveal.tsx` (aparición al hacer scroll), `Contador.tsx` (números animados), luz que sigue al cursor en las tarjetas, indicador de pestaña deslizante.

## Servicios y SEO
- Contenido de las 9 páginas `/servicios/<slug>` y del listado: `lib/servicios.ts` (títulos, descripciones, textos, preguntas frecuentes).
- Constantes del sitio (dominio, WhatsApp, zonas de Monterrey): `lib/site.ts`.
- `app/sitemap.ts` y `app/robots.ts` generan `/sitemap.xml` y `/robots.txt`. Cada página trae datos estructurados (Service, FAQ, migas de pan).
- Efectos reutilizables: `components/ui.tsx` (Tarjeta con luz de cursor, botón magnético, parallax).

## Cursos
- Contenido de `/cursos`, `/cursos/wordpress-monterrey` y `/cursos/posicionamiento-en-google`: `lib/cursos.ts` (temarios, requisitos, preguntas frecuentes). Es una propuesta: ajusta al temario real.
- Menú: Servicios y Cursos tienen submenú (se arma desde `lib/servicios.ts` y la lista `links` de `components/Header.tsx`).
- Efectos nuevos: `Inclinar` (tilt 3D) en `components/ui.tsx`, `Visuales.tsx` (maqueta de navegador y buscador que escribe), `Temario.tsx` (módulos con barra de progreso).

## Formulario de contacto (envío de correo)
- Formulario en 3 pasos: `components/ContactForm.tsx`; sección completa: `components/SeccionContacto.tsx`; envío: `app/api/contact/route.ts` (usa Resend).
- Variables en Vercel: `RESEND_API_KEY`, `CONTACT_TO` (info@dynamedia.mx) y `CONTACT_FROM`. Ver `.env.example`.
- Los botones "Cotiza este servicio" de cada página abren el formulario con ese servicio ya elegido (`/?servicio=<slug>#contacto`).
