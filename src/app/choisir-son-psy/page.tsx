import { openSans } from '@/app/fonts'

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://sceaux-equilibre.fr/'),
    alternates: {
      canonical: '/choisir-son-psy',
    },
    openGraph: {
      title: 'Choisir son psy',
      url: '/choisir-son-psy',
      images: 'https://sceaux-equilibre.fr/psychologue.jpg',
    },
    title: 'Choisir son psy',
    description:
      'Comment choisir un psy ? Se repérer dans la jungle des "psys".',
  }
}

const ChoisirSonPsyPage = () => {
  return (
    <div className="c-page-layout grid gap-10 lg:grid-cols-12">
      <div
        className="c-wysiwyg lg:col-span-8"
        role="main"
      >
        <section className="c-page-section">
          <h1 className={openSans.className}>Choisir un psy</h1>
          <h2 className={openSans.className}>
            Se repérer dans la jungle des &ldquo;psys&rdquo;
          </h2>
          <p>
            Psy… Voilà un drôle de mot passé dans le langage courant ! Mais qui
            est vraiment psy ? Il est difficile de se repérer lorsqu&apos;on
            souhaite s&apos;adresser à un professionnel. Il existe un dispositif
            légal qui encadre les activités du domaine psy. Voici donc un panel
            non exhaustif qui vous permettra de savoir à qui vous vous adressez.
            Petite boussole en milieu psy...
          </p>
          <hr className="my-10" />
          <h2 className={openSans.className}>Professions réglementées</h2>
          <section className="grid gap-10 lg:grid-cols-2">
            <div className="c-wysiwyg c-card">
              <h3 className={`${openSans.className} c-card__title`}>
                Le psychologue
              </h3>
              <div className="c-card__content">
                <p>
                  Le <strong>psychologue</strong> est un expert du
                  fonctionnement psychique. Le titre de psychologue, protégé par
                  la loi depuis 1985, est accessible après une formation
                  universitaire de haut niveau (3e cycle, bac +5).
                </p>
                <p>
                  Le psychologue peut évaluer, à l&apos;aide de bilans et de
                  tests, le fonctionnement affectif et cognitif du sujet. Le
                  psychologue est à même de conduire des psychothérapies qui
                  peuvent prendre plusieurs aspects suivant sa formation.
                </p>
                <p>
                  À noter que seul un travail personnel de thérapie sur de
                  longues années qualifie le psychologue en tant que thérapeute.
                  Le numéro ADELI est une garantie offerte au patient.
                </p>
                <p>
                  La profession de psychologue est la seule profession
                  réglementée, gérée par le ministère de l&apos;Enseignement
                  supérieur et de la Recherche.
                </p>
                <p>
                  <strong>
                    L&apos;usurpation du titre de psychologue est un délit et
                    expose à des sanctions
                  </strong>
                  .
                </p>
              </div>
            </div>
            <div className="c-wysiwyg c-card">
              <h3 className={`${openSans.className} c-card__title`}>
                Le psychiatre
              </h3>
              <div className="c-card__content">
                <p>
                  Le <strong>psychiatre</strong> est un médecin spécialiste des
                  maladies psychiatriques. Il peut à ce titre prescrire des
                  médicaments qui soulagent la souffrance psychique.
                </p>
                <p>
                  Il peut mener des psychothérapies - non remboursées la plupart
                  du temps - mais, bien que la loi l&apos;y autorise sans
                  détour, il est préférable, comme pour le psychologue,
                  qu&apos;il ait effectué un travail personnel. Le numéro ADELI
                  permet de s&apos;assurer que le praticien exerce légalement.
                </p>
              </div>
            </div>
            <div className="c-wysiwyg c-card">
              <h3 className={`${openSans.className} c-card__title`}>
                Le psychomotricien
              </h3>
              <div className="c-card__content">
                <p>
                  Le travail du <strong>psychomotricien</strong> vise à traiter,
                  par et au travers du corps, les troubles psychologiques ou
                  psychiatriques. Le cursus, d&apos;une durée de trois ans, mêle
                  un enseignement en anatomie fonctionnelle, physiologie,
                  psychologie, psychiatrie. La fin des études est sanctionnée
                  par l&apos;obtention du diplôme d&apos;État de
                  psychomotricité.
                </p>
                <p>
                  La relaxation, les techniques corporelles, font partie des
                  outils du psychomotricien. Le psychomotricien, comme le
                  psychologue, doit posséder un numéro ADELI
                </p>
              </div>
            </div>
            <div className="c-wysiwyg c-card">
              <h3 className={`${openSans.className} c-card__title`}>
                Le psychothérapeute
              </h3>
              <div className="c-card__content">
                <p>
                  Le titre de <strong>psychothérapeute</strong> est réglementé
                  depuis un décret du 20 mai 2010. Ne peuvent faire usage de ce
                  titre que les psychologues, psychiatres et psychanalystes dont
                  les critères de formation correspondent à la loi.
                </p>
                <p>
                  Malheureusement, cette loi censée limiter les dérives
                  sectaires est contournée par des praticiens peu scrupuleux qui
                  s&apos;autoproclament &ldquo;praticiens en
                  psychothérapie&rdquo; ou encore tout simplement
                  &ldquo;thérapeutes&rdquo;.
                </p>
                <p>
                  Tous ne sont pas dangereux, mais ces activités non encadrées
                  prodiguées pas des thérapeutes le plus souvent peu formés
                  peuvent facilement dériver vers des pratiques sectaires, voire
                  franchement nocives.
                </p>
              </div>
            </div>
          </section>
        </section>

        <section className="c-wysiwyg">
          <h2 className={openSans.className}>Professions non règlementées</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="c-wysiwyg c-card">
              <h3 className={`${openSans.className} c-card__title`}>
                Le psychanalyste
              </h3>
              <div className="c-card__content">
                <p>
                  Est <strong>psychanalyste</strong> celui qui se réfère à la
                  théorie psychanalytique et qui met en oeuvre avec ses patients
                  un dispositif analytique. Évident, mais pas si simple. En
                  réalité, si l&apos;État français ne légifère pas - encore -
                  sur le statut des psychanalystes, ces derniers ont depuis
                  longtemps mis en place des instances de régulation et
                  d&apos;encadrement de leur activité.
                </p>
                <p>
                  Les psychanalystes français sont regroupés au sein de diverses
                  associations dont seules trois sont reconnues par
                  l&apos;Association Psychanalytique Internationale. Souvent
                  psychologues ou médecins, mais pas nécessairement, les futurs
                  psychanalystes doivent suivre un long parcours de formation,
                  tant personnelle que théorique avant d&apos;être reconnus par
                  leurs pairs.
                </p>
              </div>
            </div>
            <div className="c-wysiwyg c-card">
              <h3 className={`${openSans.className} c-card__title`}>
                Praticiens en psychothérapie
              </h3>
              <div className="c-card__content">
                <p>
                  Praticien en psychothérapie ou encore psychopraticien est une
                  appellation récente qui découle de la loi sur le titre de
                  psychothérapeute. Les psychothérapeutes sans formation
                  reconnue se sont ainsi regroupés, dans le meilleur des cas au
                  sein d&apos;associations qui contrôlent la formation de leurs
                  membres.
                </p>
                <p>
                  Attention toutefois aux autoproclamés et aux associations
                  fantaisistes. Ici, seul votre discernement peut vous guider.
                </p>
              </div>
            </div>
            <div className="c-wysiwyg c-card">
              <h3 className={`${openSans.className} c-card__title`}>
                Développement personnel
              </h3>
              <div className="c-card__content">
                <p>
                  C&apos;est dans cette catégorie que l&apos;on retrouve les
                  praticiens en psychothérapie, parfois sérieusement formés, et
                  certains thérapeutes aux idées parfois originales. C&apos;est
                  également dans cette catégorie que l&apos;on rencontre le plus
                  de dérives sectaires. C&apos;est un véritable fourre-tout.
                </p>
                <p>
                  Sophrologie, sophro-analyse, bio-énergétique, PNL, EMDR et
                  autres, si elles ne sont pas nocives la plupart du temps, ne
                  sont pas des psychothérapies. Si le principe de ces méthodes
                  est parfois reconnu, voire utile en accompagnement du travail
                  psychothérapeutique réalisé par un professionnel, il faut être
                  très vigilant et ne pas donner son âme au premier gourou
                  charismatique venu.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ChoisirSonPsyPage
