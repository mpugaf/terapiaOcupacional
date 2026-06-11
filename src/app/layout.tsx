import type { Metadata } from 'next'
import { Playfair_Display, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import { JsonLd } from '@/components/ui/JsonLd'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '700'],
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: 'Sinapsis60 — Atención en consulta y domiciliaria para personas mayores',
  description:
    'Sinapsis60 ofrece atención profesional en consulta y domiciliaria para adultos mayores en Santiago. Profesionales de salud con trato cercano y personalizado.',
  keywords: 'atención domiciliaria personas mayores Santiago, cuidado adulto mayor, Sinapsis60',
  metadataBase: new URL('https://sinapsis.cl'),
  openGraph: {
    title: 'Sinapsis60',
    description: 'Atención especializada para personas mayores en Santiago.',
    url: 'https://sinapsis.cl',
    siteName: 'Sinapsis60',
    locale: 'es_CL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://sinapsis.cl',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL">
      <head>
        <JsonLd />
      </head>
      <body className={`${playfair.variable} ${sourceSerif.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}
