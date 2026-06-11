'use client'

import { useState, useEffect } from 'react'
import { siteContent } from '@/content/site'

export function Navbar() {
  const { nav, metadata } = siteContent
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 bg-white transition-shadow duration-200 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <nav
        className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-6"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a
          href="#inicio"
          onClick={() => setIsMenuOpen(false)}
          className="font-serif text-xl font-bold leading-none"
          style={{ color: 'var(--color-accent)' }}
        >
          {metadata.businessName}
        </a>

        {/* Links — desktop */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-body text-sm transition-colors duration-150 hover:opacity-70"
                style={{ color: 'var(--color-text)' }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger — mobile */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="flex items-center justify-center rounded p-2 md:hidden"
          style={{ color: 'var(--color-accent)' }}
        >
          {isMenuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Menú mobile */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t bg-white md:hidden"
          style={{ borderColor: 'var(--color-surface)' }}
        >
          <ul className="flex flex-col px-5 py-3" role="list">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 font-body text-base"
                  style={{ color: 'var(--color-text)' }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
