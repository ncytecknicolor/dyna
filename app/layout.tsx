import type { Metadata, Viewport } from 'next';
import { Poppins, Roboto } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/site';
import { metaPagina } from '@/lib/seo';
import { negocioJsonLd, jsonLd } from '@/lib/schema';

const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['500', '600', '700', '800'] });
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto', weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  ...metaPagina({
    title: 'Dynamedia | Diseño web, software y marketing en Monterrey',
    description: 'Dynamedia: diseño web, software a la medida y marketing digital en Monterrey, N.L. Soluciones digitales para que tu empresa crezca. Cotiza tu proyecto.',
    path: '/',
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};
export const viewport: Viewport = { themeColor: '#123874' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${poppins.variable} ${roboto.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(negocioJsonLd)} />
        {children}
      </body>
    </html>
  );
}
