import type { Metadata } from 'next'
import { playfairDisplay } from './fonts'
import './globals.css'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Aside from '@/app/components/Aside'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sceaux-equilibre.fr/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sceaux Equilibre | Équilibre et Bien-être à Sceaux',
    url: 'https://sceaux-equilibre.fr',
    description: 'Découvrez une approche complète pour votre bien-être',
    images: '/carousel/cabinet-portrait-1.jpg',
    locale: 'fr_FR',
    type: 'website',
  },
  title: 'Sceaux Equilibre | Équilibre et Bien-être à Sceaux',
  description:
    'Cabinet pluridisciplinaire à Sceaux : psychologue, psychomotricien, relaxation. Une approche globale et personnalisée pour retrouver équilibre et bien-être au quotidien.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={playfairDisplay.className}>
        <Header />
        <div className="container py-10 md:py-16">
          <main className="md:grid md:grid-cols-12 md:gap-20">
            <article className="md:col-span-8 c-wysiwyg">
              {children}
            </article>
            <aside className="md:col-span-4">
              <Aside />
            </aside>
          </main>
        </div>

        <Footer />
      </body>
    </html>
  )
}
