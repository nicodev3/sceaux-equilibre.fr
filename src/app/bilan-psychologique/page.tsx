import Image from 'next/image'
import { openSans } from '@/app/fonts'

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://sceaux-equilibre.fr/'),
    alternates: {
      canonical: '/bilan-psychologique',
    },
    openGraph: {
      title: 'Bilans psychologiques',
      url: '/bilan-psychologique',
      images: 'https://sceaux-equilibre.fr/school-exams.jpg',
    },
    title: 'Bilans psychologiques',
    description:
      'Bilans psychologiques détaillés: évaluation complète des capacités cognitives et émotionnelles, mettant en lumière forces et points pouvant être améliorés.',
  }
}

const BilanPsychologiquePage = () => {
  return (
    <div className="c-page-layout grid gap-10 lg:grid-cols-12">
      <section
        className="c-wysiwyg lg:col-span-8"
        role="main"
      >
        <h1 className={openSans.className}>
          Bilans psychologiques et bilan psychomoteur
        </h1>
        <p>
          L&apos;évaluation des compétences d&apos;un sujet est une des
          spécificités des psychologues et des psychomotriciens. Parfois, il est
          nécessaire de faire appel à un spécialiste pour évaluer les
          compétences d&apos;un enfant, d&apos;un adolescent, d&apos;un adulte,
          ou encore les capacités d&apos;une personne âgée. Tous les tests sont
          construits selon une méthodologie scientifique et répondent à
          d&apos;exigeants critères de sensibilité, fidélité et validité.
        </p>
        <Image
          src="/school-exams.jpg"
          width="800"
          height="565"
          alt="Thérapie par la Pleine Conscience à Sceaux"
          className="mb-10"
        />
        <h2 className={openSans.className}>Le bilan psychologique</h2>
        <p>
          Les bilans psychologiques constituent un outil précieux dans la
          compréhension des fonctionnements cognitifs, émotionnels et
          comportementaux d&apos;un individu. Ils permettent d&apos;évaluer de
          manière approfondie les forces et les difficultés psychologiques à
          travers une série de tests et d&apos;entretiens cliniques. Ces
          évaluations sont menées par des psychologues formés qui utilisent une
          gamme de techniques standardisées pour mesurer différents aspects de
          la psyché, tels que l&apos;intelligence, la mémoire, l&apos;attention,
          le langage, ainsi que les structures émotionnelles et de personnalité.
        </p>

        <p>
          Le processus d&apos;évaluation débute souvent par un entretien
          clinique qui vise à recueillir des informations sur l&apos;histoire
          personnelle, familiale et médicale du patient. Cela permet au
          psychologue de comprendre le contexte de vie de l&apos;individu et
          d&apos;identifier les problématiques ou les demandes spécifiques. Les
          tests psychométriques sont ensuite sélectionnés en fonction de ces
          informations et peuvent inclure des échelles d&apos;intelligence, des
          tests de mémoire, d&apos;attention ou des questionnaires de
          personnalité. Chaque test est choisi pour son aptitude à explorer les
          domaines d&apos;intérêt spécifiques et à fournir des données
          objectives.
        </p>
        <p>
          Les résultats du bilan psychologique offrent un aperçu détaillé des
          capacités et des défis de l&apos;individu, facilitant ainsi
          l&apos;élaboration de plans de traitement ou de soutien personnalisés.
          Ils peuvent être utilisés pour diagnostiquer des troubles
          psychologiques, guider les interventions éducatives, ou soutenir les
          démarches thérapeutiques. En somme, les bilans psychologiques jouent
          un rôle crucial dans le domaine de la santé mentale, en aidant à mieux
          comprendre et à répondre aux besoins uniques de chaque personne.
        </p>
        <h2 className={openSans.className}>Le bilan psychomoteur</h2>
        <p>
          Le bilan psychomoteur est un outil utilisé par les psychomotriciens
          pour évaluer les aptitudes psychomotrices d&apos;un sujet.
        </p>
        <p>
          Le bilan évalue les aptitudes psychomotrices du sujet, enfant, adulte
          ou personne âgée, dans ses multiples dimensions. Ainsi sont évalués la
          perception et la structuration spatio-temporelles, la motricité fine
          et globale, les capacités de maitrise du tonus postural et musculaire,
          l&apos;équilibre statique et dynamique etc.
        </p>
        <p>Le bilan psychomoteur est réalisé sur préscription médicale. </p>
      </section>
      <aside className="bg-gray-50 p-8 lg:col-span-4"></aside>
    </div>
  )
}

export default BilanPsychologiquePage
