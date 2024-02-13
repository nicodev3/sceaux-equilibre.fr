import Image from 'next/image'
import Link from 'next/link'
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
            <h1 className={`mb-5 text-3xl xl:text-4xl ${openSans.className}`}>
              Cabinet de consultation pluridisciplinaire à Sceaux
            </h1>

            <h2 className="mb-5 text-2xl xl:text-3xl">
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
              d&apos;explorer des thérapies centrées sur l&apos;esprit, de
              bénéficier de conseils nutritionnels adaptés ou de découvrir des
              techniques de pleine conscience, l&apos;objectif est de favoriser
              une harmonie intérieure et extérieure.
            </p>
          </header>
          <p className="mb-10">
            Au cabinet pluridisciplinaire de Sceaux, plusieurs professionnels
            peuvent vous accueillir pour vous accompagner vers un mieux être.
            {` `}
            <Link
              href="/psychologue-sceaux"
              className="c-text-link"
            >
              Psychologue
            </Link>
            , psychanalyste, nutritionniste, hypnothérapeute, consultez le
            spécialiste qui correspond à votre besoin.
          </p>
          <Carousel />
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-5 rounded shadow">
            <h2
              className={`bg-raffia-100 px-10 py-5 text-xl font-semibold text-raffia-900 ${openSans.className}`}
            >
              Psychothérapies
            </h2>
            <p className="p-10 pt-0">
              Il existe de nombreuses formes de psychothérapies, des plus
              traditionnelles comme la psychanalyse, à des approches innovantes
              comme la thérapie par la pleine conscience. Découvrez les
              différentes formes de{' '}
              <Link
                href="/psychotherapies-sceaux"
                className="c-text-link"
              >
                psychothérapies
              </Link>{' '}
              et trouvez celle qui vous correspond.
            </p>
          </div>
          <div className="flex flex-col gap-5 rounded shadow">
            <h2
              className={`bg-raffia-100 px-10 py-5 text-xl font-semibold text-raffia-900 ${openSans.className}`}
            >
              Hypnose
            </h2>
            <p className="p-10 pt-0">
              Explorez le pouvoir de l&apos;hypnose, une méthode thérapeutique
              basée sur la modification de l&apos;état de conscience. Loin de
              l&apos;hypnose de spectacle, il s&apos;agit d&apos;une véritable
              approche soignante. Apprenez-en davantage sur les bienfaits de
              l&apos;
              <Link
                href="/hypnose-sceaux"
                className="c-text-link"
              >
                hypnose
              </Link>{' '}
              .
            </p>
          </div>
          <div className="flex flex-col gap-5 rounded shadow">
            <h2
              className={`bg-raffia-100 px-10 py-5 text-xl font-semibold text-raffia-900 ${openSans.className}`}
            >
              Drainage lymphatique et massages
            </h2>
            <p className="p-10 pt-0">
              Massage prénatal et postnatal, drainage lymphatique, méthode
              Renata França, Vanessa Treney vous accueille. Découvrez les
              bienfaits du{' '}
              <Link
                href="/drainage-lymphatique"
                className="c-text-link"
              >
                drainage lymphatique et des massages
              </Link>{' '}
              tous les mardis et jeudis au cabinet de Sceaux.
            </p>
          </div>
          <div className="flex flex-col gap-5 rounded shadow">
            <h2
              className={`bg-raffia-100 px-10 py-5 text-xl font-semibold text-raffia-900 ${openSans.className}`}
            >
              Conseils en Diététique
            </h2>
            <p className="p-10 pt-0">
              Mangez de manière équilibrée et saine avec Lucille Anglard, votre
              diététicienne. Elle saura adapter vos habitudes alimentaires à vos
              besoins spécifiques, vous aidant ainsi à atteindre vos objectifs
              de santé et de bien-être. Découvrez comment une{' '}
              <Link
                href="/dieteticienne-sceaux"
                className="c-text-link"
              >
                diététicienne
              </Link>{' '}
              peut vous aider.
            </p>
          </div>
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
