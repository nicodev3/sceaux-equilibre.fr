'use client'
import Link from 'next/link'
import { openSans } from '@/app/fonts'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // hide sidebar on path change
    setIsOpen(false)
  }, [pathname])

  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-juniper-500 text-raffia-100 flex h-12 items-center border-b md:h-auto">
      <nav
        className={`${openSans.className} ${
          isOpen ? 'is-open' : ''
        } c-nav bg-norway-900 container absolute inset-0 flex flex-wrap items-center justify-center gap-2 py-4 md:sticky md:flex-row md:justify-end md:bg-transparent`}
      >
        <Link
          href="/"
          className={`mr-auto w-full text-2xl font-semibold uppercase text-green-dark md:w-auto`}
        >
          Sceaux Equilibre
        </Link>
        <Link
          href="/psychologue-sceaux"
          className="border-r border-r-amber-300 pr-2"
        >
          Psychothérapies
        </Link>
        <Link
          href="/dieteticienne-sceaux"
          className="border-r border-r-amber-300 pr-2"
        >
          Diététique
        </Link>
        <Link
          href="/hypnose-sceaux"
          className="border-r border-r-amber-300 pr-2"
        >
          Hypnose
        </Link>
        <Link
          href="/bilan-psychologique"
          className="border-r border-r-amber-300 pr-2"
        >
          Bilans
        </Link>
        <Link
          href="/psychanalyste-sceaux"
          className="border-r border-r-amber-300 pr-2"
        >
          Psychanalyse
        </Link>
        <Link
          href="/psychomotricite"
          className="border-r border-r-amber-300 pr-2"
        >
          Psychomotricité
        </Link>
        <Link
          href="/relaxation-sceaux"
          className="border-r border-r-amber-300 pr-2"
        >
          Relaxation
        </Link>
        <Link href="/therapie-cognitive-comportementale">TCC</Link>
      </nav>
      <button
        onClick={handleMenuClick}
        className="z-20 ml-auto mr-5 flex flex-col items-center justify-center md:hidden"
        aria-label="Menu"
      >
        <span
          className={`bg-raffia-50 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-raffia-50 my-0.5 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-raffia-50 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
          }`}
        ></span>
      </button>
    </header>
  )
}

export default Header
