import { openSans } from '@/app/fonts'
import Image from 'next/image'

const RelaxationSceauxPage = () => {
  return (
    <div className="grid md:grid-cols-12 md:gap-20">
      <section
        className="c-wysiwyg md:col-span-8"
        role="main"
      >
        <h1 className={`${openSans.className}`}>La relaxation</h1>
        <h2 className={`${openSans.className}`}>
          Qu&apos;est-ce que la relaxation psychosomatique&nbsp;?
        </h2>
        <p>
          La relaxation psychosomatique est une méthode née en France de la
          conjonction de recherches en psychanalyse et en psychopathologie et de
          méthodes de relaxation traditionnelles appliquées dans le domaine
          médical. C&apos;est un médecin, le Dr Schultz, qui le premier
          introduira des techniques de relaxation appliquées au domaine médical
          et pathologique. D&apos;autres médecins, psychanalystes et plus tard
          psychomotriciens feront évoluer ces techniques dont les domaines
          d&apos;application sont nombreux.
        </p>
        <Image
          src="/relaxation.jpeg"
          width="800"
          height="533"
          alt="illustration relaxation"
        />
        <p>
          La relaxation pratiquée dans ce cadre, le plus souvent par les
          psychomotriciens, mais aussi certains psychologues ou médecins
          spécifiquement formés, se différencie des méthodes qui visent le
          simple apprentissage du relâchement musculaire et mental, comme le
          fait la sophrologie par exemple. Il s&apos;agit ici d&apos;introduire
          une véritable relation à son corps, à ses émotions, ses sensations,
          afin d&apos;accéder à des représentations qui donnent sens au vécu
          corporel.
        </p>
        <p>
          Psyché et soma sont interdépendants de par leur nature même. Nous
          sommes construits sur la base de sensations corporelles. Les travaux
          modernes sur la vie intra-utérine montrent dès ce stade de
          développement l&apos;importance de l&apos;accordage affectif avec la
          mère, accordage qui, avec ses aléas, construira chez l&apos;enfant
          puis chez l&apos;adulte un style bien particulier qui dépend des
          premières interactions.
        </p>
        <p>
          Donald Woods Winnicott, un pédiatre et psychanalyste désormais célèbre
          par sa théorisation autour de l&apos;objet transitionnel, montrera que
          le corps de l&apos;enfant, investi par la mère, est le lieu
          d&apos;accords et de désaccords, constitutifs de notre sécurité
          intérieure et de nos fragilités. La relaxation thérapeutique vise à
          revisiter ce chemin, non par la remémoration d&apos;expériences
          infantiles enfouies, mais par un jeu de portage, de reconstruction de
          contenants corporels aptes à juguler nos angoisses.
        </p>
        <h2 className={`${openSans.className}`}>
          Les indications de relaxation.
        </h2>
        <p>
          Médecine, psychiatrie, psychosomatique, sexologie, stress, les
          indications à la relaxation sont si nombreuses que nous ne pouvons
          toutes les détailler ici. En tant que méthode prophylactique, la
          relaxation est également un excellent outil pour évoluer dans notre
          monde moderne. Elle est également utilisée comme travail préparatoire
          à une psychothérapie ou en prévention des rechutes, notamment
          dépressives.
        </p>
        <h2 className={`${openSans.className}`}>
          Adultes, adolescents, enfants, qui est concerné&nbsp;?
        </h2>
        <p>
          Les enfants, adolescents, adultes, mais aussi les personnes âgées
          peuvent bénéficier de ces techniques. Il existe toutefois des contre
          indications connues des spécialistes.
        </p>
      </section>
    </div>
  )
}

export default RelaxationSceauxPage
