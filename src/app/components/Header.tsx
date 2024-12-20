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
    <header className="flex h-12 items-center border-b bg-juniper-500 text-raffia-100 md:h-auto">
      <nav
        className={`${openSans.className} ${isOpen ? 'is-open' : ''
          } c-nav container absolute inset-0 flex flex-wrap items-center justify-center gap-2 bg-norway-900 py-4 md:sticky md:flex-row md:justify-end md:bg-transparent`}
      >
        <Link
          href="/"
          className="mr-auto w-full text-2xl font-semibold uppercase text-juniper-50 md:w-auto"
        >
          Sceaux Equilibre
        </Link>
        <Link
          href="/psychologue-sceaux"
          className="c-nav-link md:border-r md:border-r-amber-300 md:pr-2"
        >
          Psychologie
        </Link>
        <Link
          href="/psychomotricite"
          className="c-nav-link md:border-r md:border-r-amber-300 md:pr-2"
        >
          Psychomotricité
        </Link>
        <Link
          href="/relaxation-sceaux"
          className="c-nav-link md:border-r md:border-r-amber-300 md:pr-2"
        >
          Relaxation
        </Link>
        <Link
          href="/contact"
          className="c-nav-link md:ml-5"
        >
          Contact
        </Link>
      </nav>
      <button
        onClick={handleMenuClick}
        className="z-20 ml-auto mr-5 flex flex-col items-center justify-center md:hidden"
        aria-label="Menu"
      >
        <span
          className={`block h-0.5 w-6 rounded-sm bg-raffia-50 transition-all duration-300 ease-out ${isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
            }`}
        ></span>
        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm bg-raffia-50 transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'
            }`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm bg-raffia-50 transition-all duration-300 ease-out ${isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
            }`}
        ></span>
      </button>
    </header>
  )
}

export default Header
