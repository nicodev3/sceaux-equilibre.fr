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
                Psychologue Sceaux
              </Link>
            </li>
            <li>
              <Link
                href="/psychotherapies-sceaux"
                className="c-text-link--dark"
              >
                Psychothérapies Sceaux
              </Link>
            </li>
            <li>
              <Link
                href="/psychomotricite"
                className="c-text-link--dark"
              >
                Psychomotricité Sceaux
              </Link>
            </li>
            <li>
              <Link
                href="/relaxation-sceaux"
                className="c-text-link--dark"
              >
                Relaxation Sceaux
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bg-norway-900 py-3">
        <div className="container flex justify-between">
          <p>Tous droits réservés, SCI Nicolas DEVAUX, 2024</p>
          <Link
            href="/mentions-legales"
            className="c-text-link--dark"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
