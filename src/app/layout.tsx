import type { Metadata } from 'next'
import { playfairDisplay } from './fonts'
import './globals.css'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sceaux-equilibre.fr/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sceaux Equilibre | Équilibre et Bien-être à Sceaux',
    url: 'https://www.sceaux-equilibre.fr',
    siteName: 'Sceaux Equilibre',
    images: '/carousel/cabinet-portrait-1.jpg',
    locale: 'fr_FR',
    type: 'website',
  },
  title: 'Sceaux Equilibre | Équilibre et Bien-être à Sceaux',
  description:
    "Découvrez une approche complète pour votre bien-être : de la psychothérapie à la nutrition, en passant par la pleine conscience et l'hypnose. Explorez les voies de l'harmonie physique et mentale.\n",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={playfairDisplay.className}>
        <Header />
        <article className="container py-10">{children}</article>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
