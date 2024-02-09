import { openSans } from '@/app/fonts'

const TherapieCognitiveComportementalePage = () => {
  return (
    <div className="grid md:grid-cols-12 md:gap-20">
      <section
        className="c-wysiwyg md:col-span-8"
        role="main"
      >
        <h1 className={`${openSans.className}`}>
          Thérapies cognitives et comportementales
        </h1>
        <h2 className={`${openSans.className}`}>Une démarche pragmatique</h2>
        <p>
          Les<strong> Thérapies Comportementales et Cognitives (TCC)</strong>{' '}
          sont orientées vers la solution aux symptômes entravant la vie du
          patient. Le symptôme est ici considéré comme un dysfonctionnement
          comme en médecine classique.
        </p>
        <h2 className={`${openSans.className}`}>
          Une phase de compréhension des symptômes
        </h2>
        <p>
          Une première phase de travail consiste à comprendre, avec l&apos;aide
          active du thérapeute, le fonctionnement pathologique en cause. Cela
          étant fait, les moyens d&apos;action sont définis et commence la phase
          de travail.
        </p>
        <h2 className={`${openSans.className}`}>
          Une thérapie par l&apos;action
        </h2>
        <p>
          Le patient est actif, et doit effectuer des exercices pendant et entre
          les séances. Ces exercices sont orientés autour de la sphère
          <strong> comportementale</strong>, dans une perspective
          d&apos;apprentissage,
          <strong> cognitive</strong>, ciblant les pensées à modifier, ou encore
          <strong> corporelle</strong>, par des exercices de relaxation ou
          inspirés de la méditation.
        </p>
        <h2 className={`${openSans.className}`}>Une formation rigoureuse</h2>
        <p>
          Il est à noter que ces psychothérapies sont mises en oeuvre par des
          professionnels longuement formés à la psychanalyse, par une analyse
          personnelle et un travail d&apos;élaboration théorique, qu&apos;ils
          soient par ailleurs psychologues, psychiatres, psychomotriciens ou
          plus rarement médecins.
        </p>
        <h2 className={`${openSans.className}`}>Une pratique réglementée</h2>
        <p>
          La formation des praticiens en TCC, d&apos;une durée de deux à trois
          ans, est réservée aux psychologues et médecins.
        </p>
        <aside className="le-point-sur">
          <p>Le point sur :</p>
          <h3> TCC vs psychanalyse</h3>
          <p>
            Un débat fait rage dans la communauté des psys qui oppose souvent
            les tenants des TCC et les partisans de la psychanalyse.
          </p>
          <p>
            Souvent relayé par la presse qui semble y trouver matière à vendre,
            ces débats sont en fait inutiles pour le patient, qui est bien
            entendu libre de ses choix, mais également en pratique, psychanalyse
            et TCC n&apos;ayant pas tout à fait les mêmes objectifs, bien que le
            principe de base en soit le soulagement de la souffrance du patient.
          </p>
        </aside>
      </section>
    </div>
  )
}

export default TherapieCognitiveComportementalePage
