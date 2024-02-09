import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer bg-juniper-700 pt-8 text-xs text-white">
      <div className="container justify-between pb-8 md:flex-col">
        <nav>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link
                href="/"
                className={`mr-auto w-full text-2xl font-semibold uppercase text-green-dark md:w-auto`}
              >
                Sceaux Equilibre
              </Link>
            </li>
            <li>
              <Link href="/psychologue-sceaux">Psychothérapies</Link>
            </li>
            <li>
              <Link href="/dieteticienne-sceaux">Diététique</Link>
            </li>
            <li>
              <Link href="/hypnose-sceaux">Hypnose</Link>
            </li>
            <li>
              <Link href="/bilan-psychologique">Bilans</Link>
            </li>
            <li>
              <Link href="/psychanalyste-sceaux">Psychanalyse</Link>
            </li>
            <li>
              <Link href="/psychomotricite">Psychomotricité</Link>
            </li>
            <li>
              <Link href="/relaxation-sceaux">Relaxation</Link>
            </li>
            <li>
              <Link href="/therapie-cognitive-comportementale">TCC</Link>
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
