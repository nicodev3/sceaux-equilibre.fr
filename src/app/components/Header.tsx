'use client'
import Link from 'next/link'
import { openSans } from '@/app/fonts'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = () => {
    setIsOpen(!isOpen)
    console.log('clicked')
  }

  return (
    <header className="flex h-12 items-center border-b bg-lavande md:h-auto">
      <nav
        className={`${openSans.className} ${
          isOpen ? 'is-open' : ''
        } c-nav container absolute inset-0 flex flex-wrap items-center justify-center gap-4 bg-lavande py-4 md:sticky md:flex-row md:justify-end md:bg-transparent`}
      >
        <Link
          href="/"
          className={`mr-auto w-full text-2xl font-semibold uppercase text-green-dark md:w-auto`}
        >
          Sceaux Equilibre
        </Link>
        <Link href="/psychologue-sceaux">Psychothérapie</Link>
        <Link href="/dieteticienne-sceaux">Diététique</Link>
        <Link href="/hypnose-sceaux">Hypnose</Link>
        <Link href="/pleine-conscience-sceaux">Pleine conscience</Link>
      </nav>
      <button
        onClick={handleMenuClick}
        className="z-20 ml-auto mr-5 flex flex-col items-center justify-center md:hidden"
      >
        <span
          className={`block h-0.5 w-6 rounded-sm bg-green-dark transition-all duration-300 ease-out ${
            isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm bg-green-dark transition-all duration-300 ease-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm bg-green-dark transition-all duration-300 ease-out ${
            isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
          }`}
        ></span>
      </button>
    </header>
  )
}

export default Header
