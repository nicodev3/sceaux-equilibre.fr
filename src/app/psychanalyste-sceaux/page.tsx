import Image from 'next/image'

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://sceaux-equilibre.fr/'),
    alternates: {
      canonical: '/psychanalyste-sceaux',
    },
    openGraph: {
      title: 'Psychanalyste Sceaux',
      url: '/psychanalyste-sceaux',
      images: 'https://sceaux-equilibre.fr/psychanalyste.jpg',
    },
    title: 'Psychanalyste Sceaux',
    description:
      "Explorez la psychanalyse, une psychothérapie qui sonde l'inconscient pour gérer les émotions et booster le bien-être mental.",
  }
}

const PsychanalysteSceauxPage = () => {
  return (
    <div className="c-page-layout grid gap-10 lg:grid-cols-12">
      <section
        className="c-wysiwyg lg:col-span-8"
        role="main"
      >
        <h1>La psychanalyse</h1>
        <blockquote className="ml-8 block border-l-4 border-gray-400 pl-4 italic text-gray-600">
          La psychanalyse est un art qui s’applique à comprendre et modifier des phénomènes irrationnels, mais c’est un
          art rationnel, fondé sur des connaissances positives. Une psychanalyse est toujours une recherche, […] la
          découverte ne jaillit pas ex nihilo ou des ténèbres de l’inconscient. L’interprétation se forme souvent par
          tâtonnements progressifs. […] Le psychanalyste n’est ni un devin, ni un sorcier.
        </blockquote>
        <p className="flex justify-end gap-1">
          <span>Daniel LAGACHE</span>
          <cite>La psychanalyse</cite>
          <span>Presses Universitaires de France</span>
          <time>2009</time>
        </p>
        <h2 className="break">La psychanalyse, trouvée-créée</h2>
        <p> C’est un paradoxe, la psychanalyse a été découverte et inventée…</p>
        <p>
          La psychanalyse, comme technique, a été découverte par Sigmund Freud au début du siècle dernier, puis élaborée
          en tant que théorie jusqu’à nos jours.
        </p>
        <p>
          Découverte car c’est à partir de la clinique de patientes hystériques que se dessinent lentement les contours
          de la technique employée. C’est d’ailleurs une patiente d’un collègue de Freud, Anna O., qui la première
          évoque la « cure de parole » dès les années 1880.
        </p>
        <Image
          src="/psychanalyse.jpg"
          width="800"
          height="533"
          alt="illustration psychanalyse"
        />
        <p>
          Inventée car les élaborations théoriques qui ont suivi la découverte freudienne sont une création
          intellectuelle destinée à donner corps à l’expérience psychanalytique.
        </p>
        <h2>La psychanalyse moderne</h2>
        <p>
          Les psychanalystes d’aujourd’hui, s’ils sont pour une part fidèles à l’essentiel de la théorie originelle,
          tiennent compte de la réalité clinique de notre époque – les souffrances ne sont pas identiques à celles du
          XIXe siècle – et continuent d’inventer la psychanalyse.
        </p>
        <p>
          La psychanalyse est donc une entité pratique et théorique vivante qui se réactualise au fil des rencontres
          entre psychanalystes et analysants.
        </p>
        <h2>La psychanalyse : une expérience</h2>
        <p>
          Il est important de considérer que « la carte n’est pas le territoire ». Théorie et pratique psychanalytique
          sont deux perspectives qui ne se croisent jamais, l’une se situant sur le plan de la construction
          intellectuelle, l’autre étant du ressort de l’affect et du ressenti. Elles s’éclairent néanmoins mutuellement.
          Si vous maîtrisez parfaitement la physique théorique du saut périlleux, cela ne fait pas de vous un gymnaste
          accompli. Sans l’expérience du saut périlleux, la théorie reste vide. C’est ainsi qu’on n’entre pas en
          psychanalyse par la théorie ni par les livres, mais par l’expérience de la cure psychanalytique, qui est avant
          tout la rencontre d’un autre dans et par la parole.
        </p>
        <aside className="c-le-point-sur">
          <p>Le point sur :</p>
          <h3> La formation des psychanalystes</h3>
          <p>
            Les psychanalystes sont le plus souvent psychologues ou psychiatres de formation. Après une analyse
            personnelle dont la durée est rarement inférieure à 5 ans, il peuvent demander leur adhésion auprès de
            l&apos;une des deux Sociétés de psychanalyse reconnues par l&apos;Association Psychanalytique
            Internationale.
          </p>
        </aside>
      </section>
      <aside className="bg-gray-50 p-8 lg:col-span-4"></aside>
    </div>
  )
}

export default PsychanalysteSceauxPage
