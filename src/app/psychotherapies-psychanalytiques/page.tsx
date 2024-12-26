import { openSans } from '@/app/fonts'

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://sceaux-equilibre.fr/'),
    alternates: {
      canonical: '/psychotherapies-psychanalytiques',
    },
    openGraph: {
      title: 'Psychothérapies Psychanalytiques | Psychologue à Sceaux',
      url: '/psychotherapies-psychanalytiques',
      images: 'https://sceaux-equilibre.fr/psychotherapies-psychanalytiques.jpg',
    },
    title: 'Psychothérapies Psychanalytiques | Psychologue à Sceaux',
    description:
      'Découvrez les psychothérapies psychanalytiques : un cadre différent, un processus psychanalytique, une formation rigoureuse et une authentique psychanalyse.',
  }
}

const PsychotherapiesPsychanalytiquesPage = () => {
  return (
    <div>
      <h1 className={openSans.className}>Les psychothérapies psychanalytiques</h1>
      <h2 className={openSans.className}>Un cadre différent</h2>
      <p>
        La<strong> psychothérapie psychanalytique</strong> diffère de la
        <a
          href="https://psy92.info/psychotherapies/psychanalyste-sceaux.html"
          title="psychanalyse"
        >
          psychanalyse
        </a>
        classique par son dispositif. La fréquence des séances peut être moindre, et varie entre plusieurs séances par
        semaine et deux séances par mois.
      </p>
      <h2 className={openSans.className}>Un processus psychanalytique</h2>
      <p>
        Le processus de soin demeure psychanalytique en ce sens que le transfert et la prise en compte de
        l&apos;inconscient font pleinement partie de cette technique. Toutefois le psychologue ou le psychanalyste y est
        plus actif qu&apos;en psychanalyse classique. Il peut proposer à son patient des explications rationnelles sur
        les processus en cours, lui exprimer un soutien plus actif, le rassurer.
      </p>
      <p>
        Pour demeurer psychanalytique, cette thérapie réclame de la part du psychologue ou du psychanalyste une analyse
        fine du transfert et du contre-tranfert qui mettra à jour les processus inconscients en oeuvre dans le symptôme.
      </p>
      <h2 className={openSans.className}>Une formation rigoureuse</h2>
      <p>
        Il est à noter que ces psychothérapies sont mises en oeuvre par des professionnels longuement formés à la
        psychanalyse, par une analyse personnelle et un travail d&apos;élaboration théorique, qu&apos;ils soient par
        ailleurs psychologues, psychiatres, psychomotriciens ou plus rarement médecins.
      </p>
      <h2 className={openSans.className}>Une authentique psychanalyse</h2>
      <p>
        Freud, à son époque, différenciait
        <cite> l&apos;or pur de la psychanalyse</cite> et le
        <cite> vil plomb de la psychothérapie</cite>. De nos jours on peut considérer que dans certaines conditions une
        psychothérapie psychanalytique est un authentique travail psychanalytique en profondeur qui donne des résultats
        durables.
      </p>
      <aside className="c-le-point-sur">
        <p>Le point sur :</p>
        <h3 className={openSans.className}> L&apos;efficacité de la psychanalyse.</h3>
        <p>
          Malgré un rapport vivement critiqué sur le plan méthodologique datant de 2005 et depuis lors retiré du site du
          ministère, et qui présentait une supériorité des méthodes comportementales sur la psychanalyse, cette dernière
          reste à ce jour une méthode de choix dans le soin psychique.
        </p>
      </aside>
    </div>
  )
}

export default PsychotherapiesPsychanalytiquesPage
