import Link from 'next/link'

const Header = () => {
  return (
    <header className="border-b bg-lavande">
      <nav className="container sticky top-0 flex flex-wrap justify-center gap-4 py-4 md:justify-end">
        <Link
          href="/"
          className="mr-auto w-full font-bold uppercase text-green-dark md:w-auto"
        >
          Sceaux Equilibre
        </Link>
        <Link href="/psychologue-sceaux">Psychothérapie</Link>
        <Link href="/dieteticienne-sceaux">Diététique</Link>
        <Link href="/hypnose-sceaux">Hypnose</Link>
        <Link href="/pleine-conscience-sceaux">Pleine conscience</Link>
      </nav>
    </header>
  )
}

export default Header
