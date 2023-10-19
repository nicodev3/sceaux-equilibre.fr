import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer bg-green-dark py-8 text-xs text-white">
      <div className="container flex justify-between">
        <nav>
          <ul>
            <li>
              <Link href="/psychologue-sceaux">Psychothérapie Sceaux</Link>
            </li>
            <li></li>
            <li>
              <Link href="/dieteticienne-sceaux">Diététique Sceaux</Link>
            </li>
            <li>
              <Link href="/hypnose-sceaux">Hypnose Sceaux</Link>
            </li>
            <li>
              <Link href="/pleine-conscience-sceaux">
                Pleine conscience Sceaux
              </Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="">Mentions légales</Link>
            </li>
          </ul>
        </nav>
        <p>Tous droits réservés, SCI Nicolas DEVAUX</p>
      </div>
    </footer>
  )
}

export default Footer
