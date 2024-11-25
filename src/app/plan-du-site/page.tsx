import Link from 'next/link'

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://sceaux-equilibre.fr/'),
    alternates: {
      canonical: '/plan-du-site',
    },
    title: 'Plan du site',
    description:
      'Plan du site de Sceaux Equilibre. Retrouvez toutes les pages de notre site web pour une navigation simplifiée.',
  }
}

const PlanDuSitePage = () => {
  return (
    <div>
      <header className="c-wysiwyg">
        <h1>Plan du site</h1>
      </header>
      <nav>
        <ul className="flex flex-col gap-y-4">
          <li>
            <Link
              href="/choisir-son-psy"
              className="c-text-link"
            >
              Choisir son psy
            </Link>
          </li>
          <li>
            <Link
              href="/bilan-psychologique"
              className="c-text-link"
            >
              Bilan psychologique
            </Link>
          </li>
          <li>
            <Link
              href="/drainage-lymphatique"
              className="c-text-link"
            >
              Drainage lymphatique
            </Link>
          </li>
          <li>
            <Link
              href="/psychologue-sceaux"
              className="c-text-link"
            >
              Psychologue Sceaux
            </Link>
          </li>
          <li>
            <Link
              href="/psychotherapies-psychanalytiques"
              className="c-text-link"
            >
              Psychothérapies psychanalytiques
            </Link>
          </li>
          <li>
            <Link
              href="/psychomotricite"
              className="c-text-link"
            >
              Psychomotricité
            </Link>
          </li>
          <li>
            <Link
              href="/psychanalyste-sceaux"
              className="c-text-link"
            >
              Psychanalyste Sceaux
            </Link>
          </li>
          <li>
            <Link
              href="/relaxation-sceaux"
              className="c-text-link"
            >
              Relaxtion Sceaux
            </Link>
          </li>
          <li>
            <Link
              href="/pleine-conscience-sceaux"
              className="c-text-link"
            >
              Pleine Conscience Sceaux
            </Link>
          </li>
          <li>
            <Link
              href="/dieteticienne-sceaux"
              className="c-text-link"
            >
              Diététicienne Sceaux
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="c-text-link"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/hypnose-sceaux"
              className="c-text-link"
            >
              Hypnose Sceaux
            </Link>
          </li>
          <li>
            <Link
              href="/mentions-legales"
              className="c-text-link"
            >
              Mentions légales
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default PlanDuSitePage
