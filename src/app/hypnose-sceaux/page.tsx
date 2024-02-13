import Image from 'next/image'
import Link from 'next/link'
import { openSans } from '@/app/fonts'

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://sceaux-equilibre.fr/'),
    alternates: {
      canonical: '/hypnose-sceaux',
    },
    openGraph: {
      title: 'Thérapie par Hypnose : Bienfaits et Applications',
      url: '/hypnose-sceaux',
      images: 'https://sceaux-equilibre.fr/sceaux-equilibre-hypnose.jpg',
    },
    title: 'Thérapie par Hypnose : Bienfaits et Applications',
    description:
      'Hypnose thérapeutique : arrêt du tabac à accompagnement périnatal, une méthode douce et efficace pour divers troubles, révélant de nouvelles potentialités.',
  }
}

const HypnoSceauxPage = () => {
  return (
    <div className="md:grid md:grid-cols-12">
      <div className="flex flex-col gap-5 md:col-start-1 md:col-end-9">
        <header>
          <h1 className={`mb-5 text-3xl xl:text-4xl ${openSans.className}`}>
            La Thérapie par Hypnose : Bienfaits et Applications
          </h1>
          <p className="mb-5">
            L&apos;hypnose est une technique thérapeutique développée depuis
            plusieurs siècles par des figures éminentes telles que Mesmer,
            Charcot, et Erickson. Loin du spectacle, l&apos;hypnose
            thérapeutique est un soin scientifiquement reconnu basé sur la
            modification de l’état de conscience. Elle facilite
            l&apos;interaction entre le conscient et l&apos;inconscient,
            conduisant à l&apos;état de transe — un état naturel entre vigilance
            et rêverie.
          </p>

          <Image
            src="/sceaux-equilibre-hypnose.jpg"
            width="1000"
            height="767"
            alt="Thérapie par la Pleine Conscience à Sceaux"
          />

          <p>
            Grâce à l’hypnose, l’inconscient mobilise ses ressources souvent
            inexploitées pour traiter divers troubles. Que ce soit
            l&apos;addiction, le stress, la douleur chronique, ou encore la
            préparation à la maternité, l&apos;hypnose ouvre une voie de
            guérison et de transformation.
          </p>
        </header>
        <h2 className={`text-xl ${openSans.className}`}>
          Applications de l&apos;Hypnose Thérapeutique
        </h2>
        <h3 className="text-lg">Arrêt du Tabac</h3>
        <p>
          Basée sur la suggestion, l’hypnose se révèle efficace dans la lutte
          contre la dépendance au tabac. Elle transforme la perception de la
          cigarette, aidant le patient à reconnaître et mobiliser ses ressources
          intérieures pour arrêter de fumer.
        </p>

        <h3 className="text-lg">Gestion du Stress</h3>
        <p>
          Face aux défis modernes qui peuvent engendrer stress et anxiété,
          l’hypnose offre une approche douce et efficace pour reprendre le
          contrôle et gérer ces émotions envahissantes.
        </p>

        <h3 className="text-lg">Douleurs et Analgésie</h3>
        <p>
          Employée depuis des siècles, l’hypnose permet de moduler la perception
          de la douleur, qu’elle soit aiguë ou chronique, en s’appuyant sur
          l’inconscient. Elle offre une amélioration notable de la qualité de
          vie.
        </p>

        <h3 className="text-lg">Accompagnement Périnatal</h3>
        <p>
          L’Hypnose Périnatale aide les futures mères à vivre sereinement leur
          grossesse et accouchement. Par le biais de visualisations et
          suggestions, elle transforme la naissance en une expérience
          enrichissante et unique.
        </p>

        <p>
          Découvrez la puissance de l&apos;hypnose et ses applications
          thérapeutiques. Redécouvrez vos potentialités et progressez vers un
          bien-être optimal.
        </p>
      </div>
      <aside className="border-green rounded border p-5 shadow-md md:col-start-10 md:col-end-13">
        <h2 className={`mb-3 text-2xl ${openSans.className}`}>
          Audrey Bruderer, hypnothérapeute à Sceaux
        </h2>
        <p>
          Audrey Bruderer vous accueil au cabinet de Sceaux, 63 rue Houdan, les
          vendredis après-midi et samedis matins.
        </p>
        <p className="mb-3">Contact et rdv :</p>
        <p>06 16 18 81 04</p>
        <Link
          href="https://www.bruderer-hypnose.com/"
          target="_blank"
          className="bg-cta hover:bg-cta-dark my-5 block rounded p-3 text-center text-white transition-colors ease-out"
        >
          Visiter son site
        </Link>

        <h2 className={`mb-3 text-2xl ${openSans.className}`}>
          Qu&apos;attendre d&apos;une séance d&apos;hypnose&nbsp;?
        </h2>
        <p className="mb-3">
          En position assise ou debout, vous serez guidé vers un état entre
          l&apos;alerte et la rêverie, explorant vos sensations et votre
          imagination dans un environnement bienveillant. Vous restez conscient
          et en contrôle, participant activement pour maximiser les bénéfices.
        </p>

        <h2 className="mb-5">Le parcours de l&apos;accompagnement :</h2>
        <ol>
          <li>
            <strong>Introduction :</strong> Évaluation des besoins et
            établissement d&apos;une confiance mutuelle.
          </li>
          <li>
            <strong>Séances de travail :</strong> Adaptées à vos besoins et à
            vos progrès.
          </li>
          <li>
            <strong>Conclusion :</strong> Réflexion sur les changements et
            célébration des succès.
          </li>
        </ol>
      </aside>
    </div>
  )
}

export default HypnoSceauxPage
