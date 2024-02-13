import { openSans } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://sceaux-equilibre.fr/'),
    alternates: {
      canonical: '/drainage-lymphatique',
    },
    openGraph: {
      title: 'Drainage lymphatique et massages',
      url: '/drainage-lymphatique',
      images: 'https://sceaux-equilibre.fr/drainage-lymphatique.jpg',
    },
    title: 'Drainage lymphatique et massages',
    description:
      'Découvrez DESTINATION MASSAGE à Sceaux : massages bien-être, méthode Renata França pour drainage, remodelage, et soins prénatal/postnatal pour détente et anti-stress.',
  }
}

const DrainageLymphatiquePage = () => {
  return (
    <div className="md:grid md:grid-cols-12">
      <div className="flex flex-col gap-5 md:col-start-1 md:col-end-9">
        <header>
          <h1 className={`mb-5 text-3xl xl:text-4xl ${openSans.className}`}>
            Massage bien-être : Drainage Lymphatique à Sceaux
          </h1>
          <p className="mb-5">
            Animée par une profonde passion pour mon domaine, je me tiens à
            votre service pour vous offrir un interlude de relaxation. Mon
            objectif est de vous accompagner dans une démarche de bien-être
            personnel, en vous octroyant un moment privilégié pour prendre soin
            de soi. Découvrez une variété de massages, incluant les techniques
            exclusives de Renata França (drainage lymphatique, remodelage,
            Miracle Face) et une sélection de massages internationaux tels que
            le californien, le balinais, l’hawaïen (Lomi-Lomi), sans oublier la
            relaxation coréenne. Des soins adaptés sont aussi disponibles pour
            les futures et nouvelles mamans, avec le massage prénatal et
            postnatal.
          </p>

          <Image
            src="/drainage-lymphatique.jpg"
            width="800"
            height="533"
            alt="Drainage lymphatique à Sceaux"
          />
        </header>
        <h2 className={`text-xl ${openSans.className}`}>Massages Bien-être</h2>
        <p>
          Si vous aspirez à un moment d&apos;évasion, à apaiser vos douleurs
          musculaires ou simplement à évacuer le stress, DESTINATION MASSAGE à
          Sceaux est votre refuge. La gamme de massages proposée est conçue pour
          procurer détente et soulagement, avec des options comme le massage
          californien, balinais, hawaïen et la relaxation coréenne, tous
          promettant une expérience de pur bien-être.
        </p>

        <h2 className={`text-xl ${openSans.className}`}>
          La Méthode Renata França
        </h2>
        <p>
          Formée et certifiée selon la méthode Renata França par Nathalie
          Duarte, Vanessa Treney vous invite à explorer des traitements
          innovants originaires du Brésil. Que ce soit pour traiter la rétention
          d&apos;eau, les gonflements, les problèmes de circulation, la
          cellulite, ou encore les douleurs intestinales, les séances,
          disponibles en cure ou à l&apos;unité, avec le drainage lymphatique,
          le remodelage et le massage Miracle Face, sont conçues pour apporter
          soulagement et revitalisation à votre corps et votre esprit.
        </p>

        <h2 className={`text-xl ${openSans.className}`}>
          Massage Prénatal et Postnatal
        </h2>
        <p>
          La grossesse est une période de transformation intense sur le plan
          physiologique et hormonal. Le massage prénatal, par son approche
          douce, contribue au bien-être de la future mère et de son bébé,
          offrant détente et multiples bienfaits. Le postnatal, adapté aux
          spécificités du corps après l&apos;accouchement, est idéal pour
          accompagner la jeune maman dans son rétablissement et son bien-être.
        </p>
      </div>
      <aside className="border-green c-wysiwyg rounded border p-5 shadow-md md:col-start-10 md:col-end-13">
        <h2 className={`mb-3 text-2xl ${openSans.className}`}>
          Vanessa Treney, Masseuse Bien-être à Sceaux
        </h2>
        <p className="mb-3">
          Vanessa Treney vous accueille dans un cadre chaleureux et apaisant les
          mardis et jeudis.
        </p>

        <p className="text-center text-2xl font-semibold">06 45 61 72 98</p>
        <Link
          href="https://www.destinationmassage.fr/"
          className="my-5 block rounded bg-atlantis-500 p-3 text-center text-white transition-colors ease-out hover:bg-atlantis-600"
        >
          https://www.destinationmassage.fr/
        </Link>
      </aside>
    </div>
  )
}

export default DrainageLymphatiquePage
