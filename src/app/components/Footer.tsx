import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer bg-juniper-700 pt-8 text-xs text-white">
      <div className="container justify-between pb-8 md:flex-col">
        <h3 className="mb-5 text-2xl">Plan du site</h3>
        <nav>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link
                href="/psychologue-sceaux"
                className="c-text-link--dark"
              >
                Psychothérapies
              </Link>
            </li>
            <li>
              <Link
                href="/dieteticienne-sceaux"
                className="c-text-link--dark"
              >
                Diététique
              </Link>
            </li>
            <li>
              <Link
                href="/hypnose-sceaux"
                className="c-text-link--dark"
              >
                Hypnose
              </Link>
            </li>
            <li>
              <Link
                href="/bilan-psychologique"
                className="c-text-link--dark"
              >
                Bilans
              </Link>
            </li>
            <li>
              <Link
                href="/psychanalyste-sceaux"
                className="c-text-link--dark"
              >
                Psychanalyse
              </Link>
            </li>
            <li>
              <Link
                href="/psychomotricite"
                className="c-text-link--dark"
              >
                Psychomotricité
              </Link>
            </li>
            <li>
              <Link
                href="/relaxation-sceaux"
                className="c-text-link--dark"
              >
                Relaxation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bg-norway-900 py-3">
        <p className="container">
          Tous droits réservés, SCI Nicolas DEVAUX, 2023
        </p>
      </div>
    </footer>
  )
}

export default Footer
