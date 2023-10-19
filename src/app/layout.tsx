import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { Analytics } from '@vercel/analytics/react'

const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
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
