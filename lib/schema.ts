import { SITE, EMAIL, TEL, FB } from './site';
import { servicios } from './servicios';

export const NEGOCIO_ID = `${SITE}/#negocio`;
export const jsonLd = (o: unknown) => ({ __html: JSON.stringify(o) });

export const migas = (items: { name: string; url: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.name, item: x.url })),
});

// Organization + LocalBusiness (ProfessionalService) + WebSite. Se publica una sola vez, en el layout.
// Pendiente de agregar cuando se tengan: dirección de calle (streetAddress), código postal y horarios (openingHours).
export const negocioJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'], '@id': NEGOCIO_ID, name: 'Dynamedia', url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/brand/logo-dynamedia.png`, width: 400, height: 100 },
      image: `${SITE}/og/dynamedia.jpg`,
      description: 'Diseño web, software a la medida y marketing digital en Monterrey, Nuevo León.',
      foundingDate: '2010', email: EMAIL, telephone: TEL,
      address: { '@type': 'PostalAddress', addressLocality: 'Monterrey', addressRegion: 'Nuevo León', addressCountry: 'MX' },
      areaServed: [{ '@type': 'City', name: 'Monterrey' }, { '@type': 'State', name: 'Nuevo León' }, { '@type': 'Country', name: 'México' }],
      sameAs: [FB],
      contactPoint: [{ '@type': 'ContactPoint', contactType: 'customer service', telephone: TEL, email: EMAIL, areaServed: 'MX', availableLanguage: 'es' }],
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'Servicios de Dynamedia',
        itemListElement: servicios.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.nombre, url: `${SITE}/servicios/${s.slug}` } })),
      },
    },
    { '@type': 'WebSite', '@id': `${SITE}/#sitio`, url: SITE, name: 'Dynamedia', inLanguage: 'es-MX', publisher: { '@id': NEGOCIO_ID } },
  ],
};
