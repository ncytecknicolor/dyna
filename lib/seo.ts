import type { Metadata } from 'next';

export const OG_DEFAULT = '/og/dynamedia.jpg';

// Metadatos completos de una página: título, descripción, canonical, Open Graph y tarjeta de Twitter/X.
export function metaPagina({ title, description, path, imagen = OG_DEFAULT, imagenAlt }: { title: string; description: string; path: string; imagen?: string; imagenAlt?: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: 'Dynamedia', locale: 'es_MX', type: 'website', images: [{ url: imagen, width: 1200, height: 630, alt: imagenAlt ?? title }] },
    twitter: { card: 'summary_large_image', title, description, images: [imagen] },
  };
}
