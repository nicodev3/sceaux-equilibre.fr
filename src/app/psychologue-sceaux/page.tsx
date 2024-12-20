import Image from 'next/image'
import { openSans } from '@/app/fonts'
import Card from '@/app/components/Card'

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://sceaux-equilibre.fr/'),
    alternates: {
      canonical: '/psychologue-sceaux',
    },
    openGraph: {
      title: 'Psychologue à Sceaux',
      url: '/psychologue-sceaux',
      images: 'https://sceaux-equilibre.fr/psychologue.jpg',
    },
    title: 'Psychologue à Sceaux',
    description:
      'Psychologue à Sceaux, psychothérapies, accompagnement psychologique, adultes et adolescents. Troubles anxieux, dépression, confiance en soi, gestion des émotions.',
  }
}

const PsychologueSceauxPage = () => {
  return (
    <div className="md:grid md:grid-cols-12">
      <section className="c-wysiwyg flex flex-col gap-5 md:col-start-1 md:col-end-9">
        <header>
          <h1 className={`mb-5 text-3xl xl:text-4xl ${openSans.className}`}>Psychologue à Sceaux</h1>
          <p>
            Le psychologue en cabinet libéral joue un rôle crucial dans le domaine de la santé mentale. Spécialiste de
            l&apos;esprit humain, il offre un espace de parole sécurisé pour explorer, comprendre et traiter les
            troubles émotionnels et comportementaux. Son objectif est d&apos;améliorer le bien-être psychologique de ses
            patients à travers des approches thérapeutiques adaptées.
          </p>
        </header>

        <section className="mb-8 grid gap-12 md:grid-cols-2">
          <Card
            title="Nicolas Devaux"
            description="Psychologue clinicien et psychothérapeute, Nicolas Devaux propose un accompagnement psychologique pour les adultes et les adolescents. Il est spécialisé dans la gestion des troubles anxieux, la dépression, la confiance en soi, et la gestion des émotions. Sa pratique s'appuie sur des méthodes thérapeutiques reconnues pour favoriser le mieux-être de ses patients."
            href="https://www.doctolib.fr/psychologue/sceaux/nicolas-devaux-sceaux"
            linkText="Prendre rendez-vous"
          />
          <Card
            title="Andreas Matthaiou"
            description="Psychologue clinicien d'orientation psychanalytique. Membre de l'association de la cause freudienne. Andréas Matthaiou est spécialiste dans la psychologie de l'enfant, l'adolescent et l'adulte. 
Sa formation psychanalytique lui permet d'être un partenaire de l'individu en souffrance afin de l'accompagner vers un mieux être. "
            href="https://www.doctolib.fr/psychologue/sceaux/andreas-matthaiou"
            linkText="Prendre rendez-vous"
          />
        </section>

        <section>
          <h2>Évaluation et diagnostic</h2>
          <p>
            La première fonction d&apos;un psychologue est d&apos;évaluer la santé mentale de ses patients. À travers
            des entretiens et des tests psychologiques, il identifie les troubles présents et établit un diagnostic.
            Cette étape est essentielle pour définir un plan de traitement personnalisé.
          </p>
        </section>

        <section>
          <h2>Thérapie individuelle</h2>
          <p>
            La thérapie individuelle constitue le cœur de l&apos;intervention psychologique. Le psychologue utilise
            diverses méthodes, telles que la thérapie cognitive-comportementale, la psychanalyse, ou la thérapie
            systémique, pour travailler sur les problématiques spécifiques du patient. Cette approche favorise
            l&apos;autonomie et le développement personnel.
          </p>
        </section>

        <section>
          <h2>Thérapie de groupe</h2>
          <p>
            Le psychologue peut également animer des séances de thérapie de groupe. Ces séances permettent aux patients
            de partager leurs expériences et de bénéficier du soutien de pairs. La dynamique de groupe favorise
            l&apos;apprentissage de stratégies d&apos;adaptation et renforce le sentiment d&apos;appartenance.
          </p>
        </section>

        <section>
          <h2>Accompagnement et soutien</h2>
          <p>
            Outre la thérapie, le psychologue en cabinet libéral offre un accompagnement au quotidien. Il soutient ses
            patients dans la gestion des crises, les périodes de transition, et les défis de la vie. Son rôle est
            également préventif, visant à renforcer les ressources internes de chacun pour faire face aux difficultés
            futures.
          </p>
        </section>

        <section>
          <h2>Conclusion</h2>
          <p>
            Le psychologue en cabinet libéral est un allié précieux dans la quête du bien-être mental. Grâce à son
            expertise, il apporte des solutions personnalisées pour surmonter les troubles psychologiques. Si vous
            ressentez le besoin de parler, n&apos;hésitez pas à consulter un professionnel qui saura vous accompagner
            sur le chemin de la guérison.
          </p>
        </section>
      </section>
      <aside className="border-green flex flex-col gap-4 rounded border p-5 text-sm shadow-md md:col-start-10 md:col-end-13">
        <h2 className={`mb-3 text-2xl ${openSans.className}`}>Usage du Titre de Psychologue</h2>
        <Image
          src="/psychologue-adulte.png"
          width="269"
          height="160"
          alt="illustration psychologue"
        />

        <p>
          En France, le titre de psychologue est protégé par la loi. Pour l&apos;utiliser, il faut avoir un Master en
          psychologie reconnu par l&apos;État et être inscrit à l&apos;Agence Régionale de Santé (ARS). Cette
          réglementation garantit la qualité des soins et protège le public.
        </p>

        <p>
          En cas de doute sur la qualification d&apos;un psychologue, vous pouvez consulter le registre ADELI qui
          recense tous les professionnels autorisés à exercer en France.
        </p>
      </aside>
    </div>
  )
}

export default PsychologueSceauxPage
