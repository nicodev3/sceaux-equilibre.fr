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
          <header className="mb-8">
            <h1 className={`mb-5 text-3xl xl:mb-12 xl:text-4xl ${openSans.className}`}>
              Cabinet de consultation pluridisciplinaire à Sceaux
            </h1>

            <h2 className="mb-5  text-2xl xl:mb-8 xl:text-3xl">(Re)Trouvez votre équilibre</h2>
            <p className="mb-5">
              L&apos;équilibre – qu&apos;il soit physique, mental ou émotionnel – est au cœur de la santé et de
              l&apos;épanouissement personnel. Dans un monde où les exigences du quotidien s&apos;accumulent, il devient
              parfois difficile de préserver cette harmonie essentielle.
            </p>
            <p>
              C&apos;est pourquoi une approche globale, prenant en compte la personne dans sa totalité, peut faire toute
              la différence. En intégrant les dimensions physiologiques, psychologiques et comportementales, cette
              démarche permet de reconnecter l&apos;esprit, le corps et les émotions. Que vous souhaitiez explorer des
              thérapies centrées sur l&apos;esprit, pratiquer la pleine conscience, découvrir des techniques de
              relaxation ou adopter des approches corporelles favorisant l&apos;équilibre intérieur, chaque outil a un
              même objectif : retrouver l&apos;harmonie, en soi et avec le monde qui nous entoure.
            </p>
          </header>
          <h2 className="mb-5 text-xl xl:mb-8 xl:mt-8 xl:text-2xl">Un accompagnement adapté à vos besoins</h2>
          <p className="mb-10">
            Au sein du cabinet pluridisciplinaire de Sceaux, une équipe de professionnels dédiés est à votre écoute.
            Psychologue, psychanalyste, psychomotricien... Chaque spécialiste est là pour répondre à vos besoins
            spécifiques et vous guider vers un mieux-être durable. Ensemble, prenons le temps de construire votre
            équilibre, pour que chaque jour devienne une étape vers un épanouissement plus profond.
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
          <Card
            title="Relaxation"
            description="La relaxation est une approche thérapeutique qui aide à réduire le stress, l'anxiété et les tensions physiques. Elle permet de retrouver calme et sérénité au quotidien."
            href="/relaxation-sceaux"
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
        <h2 className={`text-green my-5 text-2xl font-semibold ${openSans.className}`}>Informations :</h2>
        <p className="mb-5">
          Des places sont actuellement disponibles dans le cadre du partage du cabinet pour les professionnels
          intéréssés.
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
