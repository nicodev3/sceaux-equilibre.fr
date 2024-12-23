import { openSans } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import Doctolib from '../components/Doctolib'

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://sceaux-equilibre.fr/'),
    alternates: {
      canonical: '/psychomotricite',
    },
    openGraph: {
      title: 'Psychomotricité',
      url: '/psychomotricite',
      images: 'https://sceaux-equilibre.fr/psychomotricite.png',
    },
    title: 'Psychomotricité',
    description:
      'Les psychomotriciens sont des auxiliaires médicaux diplômés d&apos;Etat. Cette profession en plein essor possède de multiples applications.',
  }
}

const PsychomotricitePage = () => {
  return (
    <div className="md:grid md:grid-cols-12">
      <section
        className="c-wysiwyg flex flex-col gap-5 md:col-start-1 md:col-end-9"
        role="main"
      >
        <h1 className={`${openSans.className}`}>Le psychomotricien</h1>
        <p>
          Les psychomotriciens sont des auxiliaires médicaux diplômés d&apos;Etat. Cette profession en plein essor
          possède de multiples applications. Tous les âges sont concernés, de la femme enceinte jusqu&apos;à la personne
          âgée. Le champ d&apos;intervention des psychomotriciens est le suivant:
        </p>
        <div>
          <h2 className={`${openSans.className}`}>Bilan psychomoteur</h2>
          <p>
            Le bilan psychomoteur est un examen clinique qui se déroule sous forme de jeux et de divers tests qui
            permettent d&apos;apprécier le profil psychomoteur de la personne. Cette évaluation permet d&apos;apprécier
            l&apos;importance et la nature d&apos;éventuels troubles psychomoteurs, mais aussi de dégager les
            compétences du sujet. C&apos;est l&apos;examen de référence du psychomotricien et il permet en outre
            d&apos;envisager le projet thérapeutique.
          </p>
          <h2 className={`${openSans.className}`}>Education précoce et stimulation psychomotrices</h2>
          <p>
            L&apos;éducation psychomotrice permet, à partir d&apos;un âge précoce, de stimuler les processus normaux de
            développement de l&apos;enfant afin de favoriser l&apos;intégration harmonieuse de ses diverses fonctions.
          </p>
          <Image
            src="/psychomotricite.png"
            width="400"
            height="410"
            alt="illustration psychomotricité"
          />
          <h2 className={`${openSans.className}`}>Rééducation</h2>
          <p>
            Rééducation des troubles du développement psychomoteur ou des désordres psychomoteurs suivants au moyen de
            techniques de relaxation dynamique, d&apos;éducation gestuelle, d&apos;expression corporelle ou plastique et
            par des activités rythmiques, de jeu, d&apos;équilibration et de coordination.
          </p>
          <h3 className={`${openSans.className}`}>Retards du développement psychomoteur</h3>
          <p>
            Il s&apos;agit de tout retard anormal du développement psychomoteur. Acquisition de la marche, troubles de
            la préhension, troubles de l&apos;équilibre, de la coordination des gestes etc...
          </p>
          <p>
            Troubles de la maturation et de la régulation tonique Ces troubles sont soit liés à un déficit neurologique,
            ou encore à des difficultés de nature émotionnelle. Le champ d&apos;application est très large, de
            l&apos;hypotonie chez l&apos;enfant aux troubles neurologiques de l&apos;adulte et de la personne âgée, en
            passant par les manifestations neuro-végétatives et/ou neuro-musculaires liées au stress.
          </p>
          <h3 className={`${openSans.className}`}>Troubles du schéma corporel</h3>
          <p>
            On les rencontre ici encore dans divers tableaux cliniques allant de l&apos;immaturité du système nerveux,
            qui peut avoir des origines diverses, à des difficultés d&apos;ordre psychologique qui entravent la
            perception de soi et de l&apos;espace.
          </p>
          <h3 className={`${openSans.className}`}>Troubles de la latéralité</h3>
          <p>
            Difficultés d&apos;orientation dans l&apos;espace, maladresse gestuelle, difficultés d&apos;apprentissage de
            l&apos;écriture et de la lecture peuvent avoir pour origine une latéralité peu structurée ou mal organisée.
            La rééducation permet le plus souvent de pallier ces difficultés.
          </p>
          <h3 className={`${openSans.className}`}>Troubles de l&apos;organisation spatio-temporelle</h3>
          <p>
            Ces troubles ont diverses origines. On les rencontre à tous les âges de la vie, sous leur forme la plus
            banale et parfois bénigne chez l&apos;enfant, ou encore chez les personnes souffrant de maladies
            neuro-dégénératives telles que la maladie d&apos;Alzheimer. Le bilan psychomoteur permet d&apos;apprécier la
            nature et l&apos;étendue des difficultés.
          </p>
          <h3 className={`${openSans.className}`}>Dysharmonies psychomotrices</h3>
          <p>
            La dysharmonie psychomotrice est évoquée lorsqu&apos;il existe une évolution inégale des acquisitions
            psychomotrices. Ce concept est vaste et il doit ici encore être précisé par un bilan psychomoteur croisé
            avec d&apos;autres observations, à la recherche d&apos;une cause des troubles.
          </p>
          <h3 className={`${openSans.className}`}>Troubles tonico-émotionnel</h3>
          <p>
            La peur accompagnée de tremblements est le prototype du trouble de la régulation tonico-émotionnelle. Nos
            émotions et nos muscles sont intimement liées. Et que dire du muscle cardiaque qui réagit en cas
            d&apos;émotion forte ! Ces processus se font en dehors de tout contrôle conscient. Chez certaines personnes
            plus sensibles, les réactions émotionnelles deviennent envahissantes et empêchent de vivre une vie épanouie.
            Certains tics, des formes de crampes, le fait de rougir en public, sont des exemples bien connus de ces
            troubles.
          </p>
          <h3 className={`${openSans.className}`}>Maladresses motrices et gestuelles, dyspraxies</h3>
          <p>
            La dyspraxie est un mot barbare qui désigne tout simplement un geste inadapté qui manque sont but ou dont la
            réalisation est entravée par des causes psychomotrices, et donc à l&apos;exclusion des causes purement
            motrices comme dans le cas d&apos;une fracture ou d&apos;une paralysie d&apos;origine neurologique. On les
            rencontre fréquemment chez l&apos;enfant qui présente un retard de développement psychomoteur, mais aussi
            chez l&apos;adulte. Les causes, diverses, et la portée des troubles sont appréciés par le bilan psychomoteur
            qui détermine le projet thérapeutique.
          </p>
          <h3 className={`${openSans.className}`}>Débilité motrice</h3>
          <p>
            Il s&apos;agit d&apos;une appelation un peu vieillotte pour désigner... la maladresse ! Cette maladresse des
            mouvements corporels peut être rencontrée dans de nombreux tableaux cliniques. Dans le champ du handicap
            mental elle est fréquente et d&apos;intensité diverse, mais ne lui est pas réservée. Les sportifs de haut
            niveau rencontrent également parfois une difficulté dans certains gestes qu&apos;un travail en
            psychomotricité peut améliorer.
          </p>
          <h3 className={`${openSans.className}`}>Inhibition psychomotrice</h3>
          <p>
            Rareté des gestes, amplitude réduite en raison de facteurs psychologiques et émotionnels, l&apos;inibition
            psychomotrice se rencontre dans de nombreux tableaux cliniques.
          </p>
          <h3 className={`${openSans.className}`}>Instabilité psychomotrice</h3>
          <p>
            Outre la très médiatisée - et peut être sur-diagnostiquée - hyperactivité que l&apos;on rencontre chez
            l&apos;enfant, l&apos;instabilité psychomotrice peut prendre diverses formes selon qu&apos;elle est
            l&apos;expression d&apos;un malaise psychologique, d&apos;une dépression masquée, ou parfois de troubles en
            lien avec des déficits neurologiques. L&apos;intervention du psychomotricien prend ici toute sa place encore
            une fois.
          </p>
          <h3 className={`${openSans.className}`}>
            Troubles de la graphomotricité, à l&apos;exclusion de la rééducation du langage écrit
          </h3>
          <p>
            Si la rééducation du langage écrit est une spécialité des orthophonistes, le psychomotricien prend en charge
            les troubles liés au geste de l&apos;écriture. Mauvaise tenue du crayon ou du stylo, troubles de la
            régulation du tonus musculaire déteriorant l&apos;écriture, latéralité contrariée, difficultés de repérage
            dans l&apos;espace entravant le passage à l&apos;écrit, de nombreux facteurs entravant la réussite scolaire
            peuvent être traités en rééducation psychomotrice.
          </p>
          <h2 className={`${openSans.className}`}>Thérapie psychomotrice</h2>
          <p>
            Contribution, par des techniques d&apos;approche corporelle, au traitement des déficiences intellectuelles,
            des troubles caractériels ou de la personnalité, des troubles des régulations émotionnelles et
            relationnelles et des troubles de la représentation du corps d&apos;origine psychique ou physique.
          </p>
          <p>
            La thérapie psychomotrice est un facteur d&apos;intégration des sensations corporelles, des émotions et des
            cognitions. En ce sens, il s&apos;agit à proprement parler d&apos;une thérapie prenant en compte le corps
            dans sa dimension relationnelle et dans son vécu. Anxiété, stress, angoisses, dépression, troubles de la
            relation à l&apos;autre, manifestations psychosomatiques, la thérapie psychomotrice présente une alternative
            aux psychothérapies exclusivement verbales.
          </p>
        </div>
      </section>
      <aside className="border-green flex flex-col gap-4 rounded border p-5 text-sm shadow-md md:col-start-10 md:col-end-13">
        <h2 className={`${openSans.className} text-2xl font-semibold mb-4`}>Consulter un psychomotricien</h2>
        <p>
          Nicolas Devaux, psychomotricien DE et psychologue, vous accueille à son cabinet de psychomotricité et de
          psychologie à Sceaux.
        </p>
        <Doctolib />
      </aside>
    </div>
  )
}

export default PsychomotricitePage
