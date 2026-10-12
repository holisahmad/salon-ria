import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Salon Ria - Salon Kecantikan Profesional di Tangerang',
  description: 'Salon Ria menawarkan layanan perawatan kecantikan lengkap untuk wajah, rambut, dan tubuh. Lokasi di Jl. HOS Cokroaminoto No. 58 E, Cipondoh, Tangerang. Hubungi kami di +6285655268945.',
  keywords: ['salon tangerang', 'salon cipondoh', 'perawatan kecantikan', 'salon rambut', 'salon spa'],
  authors: [{ name: 'Salon Ria' }],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://salon-ria.vercel.app',
    siteName: 'Salon Ria',
    title: 'Salon Ria - Salon Kecantikan Profesional di Tangerang',
    description: 'Layanan perawatan kecantikan profesional dengan standar internasional',
    images: [{
      url: 'https://salon-ria.vercel.app/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://salon-ria.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#d4a574" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
