import Link from 'next/link'

const Header = () => {
  return (
    <header className="border-b bg-lavande">
      <nav className="container sticky top-0 flex justify-end gap-4 py-4">
        <Link
          href="/"
          className="mr-auto"
        >
          Sceaux Equilibre
        </Link>
        <Link href="/psychologue-sceaux">Psychothérapie</Link>
        <Link href="/nutritionniste-sceaux">Nutrition</Link>
        <Link href="/hypnose-sceaux">Hypnose</Link>
        <Link href="/pleine-conscience-sceaux">Pleine conscience</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header
