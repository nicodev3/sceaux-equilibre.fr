import Image from 'next/image'
import Link from 'next/link'
import Card from '@/app/components/Card'
import Carousel from '@/app/components/Carousel'
import { openSans } from './fonts'

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://sceaux-equilibre.fr/'),
    alternates: {
      canonical: '/',
    },
    title: 'Cabinet de consultation pluridisciplinaire à Sceaux',
    description:
      'Cabinet de consultation pluridisciplinaire à Sceaux. (Re)Trouvez votre équilibre avec des professionnels de la santé mentale, de la nutrition et du bien-être.',
  }
}

export default function Home() {
  return (
    <main className="md:grid md:grid-cols-12">
      <section className="flex flex-col gap-5 md:col-start-1 md:col-end-9">
        <div className="mb-12">
          <header className="mb-5">
            <h1 className={`mb-5 xl:mb-12 text-3xl xl:text-4xl ${openSans.className}`}>
              Cabinet de consultation pluridisciplinaire à Sceaux
            </h1>

            <h2 className="mb-5  xl:mb-8 text-2xl xl:text-3xl">
              (Re)Trouvez votre équilibre
            </h2>
            <p className="mb-5">
              L&apos;équilibre, qu&apos;il soit physique, mental ou émotionnel,
              est un élément clé de la santé et du bien-être. Dans le contexte
              actuel où les exigences du quotidien sont multiples, maintenir cet
              équilibre peut être un défi.
            </p>
            <p>
              Une prise en charge globale, qui considère la personne dans sa
              totalité, peut s&apos;avérer bénéfique. Cette approche vise à
              intégrer les aspects physiologiques, psychologiques et
              comportementaux de l&apos;individu. Qu&apos;il s&apos;agisse
              d&apos;explorer des thérapies centrées sur l&apos;esprit,
              de découvrir des techniques de pleine conscience, de relaxation ou des approches corporelles de soin psychique, l&apos;objectif
              est de favoriser une harmonie intérieure et extérieure.
            </p>
          </header>
          <p className="mb-10">
            Au cabinet pluridisciplinaire de Sceaux, plusieurs professionnels
            peuvent vous accueillir pour vous accompagner vers un mieux être.
            Psychologue, psychanalyste, psychomotricien, consultez le spécialiste
            qui correspond à votre besoin.
          </p>
          <Carousel />
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <Card
            title="Psychologue"
            description="Le psychologue en cabinet libéral joue un rôle crucial dans le domaine de la santé mentale. Spécialiste de l'esprit humain, il offre un espace de parole sécurisé pour explorer, comprendre et traiter les troubles émotionnels et comportementaux."
            href="/psychologue-sceaux"
            linkText="En savoir plus"
          />
          <Card
            title="Psychomotricité"
            description="La psychomotricité est une approche qui combine les sciences de la psychologie et de la motricité. Elle vise à favoriser le développement de l'enfant et à améliorer ses compétences motrices et cognitives."
            href="/psychomotricite"
            linkText="En savoir plus"
          />
        </div>
      </section>
      <aside className="border-green rounded border p-5 shadow-md md:col-start-10 md:col-end-13">
        <Image
          alt="equilibre nature"
          src="/sceaux-equilibre-home.jpg"
          width="266"
          height="266"
        />
        <h2
          className={`text-green my-5 text-2xl font-semibold ${openSans.className}`}
        >
          Informations :
        </h2>
        <p className="mb-5">
          Des places sont actuellement disponibles dans le cadre du partage du
          cabinet pour les professionnels intéréssés.
        </p>
        <p>
          Plus d&apos;informations sur le site{' '}
          <Link
            href="https://location-cabinet-sceaux.fr"
            target="_blank"
            className="c-text-link"
          >
            https://location-cabinet-sceaux.fr
          </Link>
        </p>
      </aside>
    </main>
  )
}
