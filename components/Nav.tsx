'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'
import Link from "next/link";

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  //Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* ── Main nav bar ── */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 md:px-16 transition-all duration-500 ${scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'}`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Link href="/" className="font-display text-base font-semibold text-ink tracking-tight z-50">
          Cornelouis
        </Link>

        {/* Desktop links — add explicit display none */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs uppercase tracking-widest text-muted transition-colors duration-300 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-sans text-xs font-semibold uppercase tracking-widest text-accent transition-colors duration-300 hover:text-ink"
          >
            Hire me ↗
          </a>
        </nav>

        {/* Hamburger — ensure it only shows on mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden z-50 flex-col gap-1.5 p-2"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <motion.span
            className="block h-px w-6 bg-ink origin-center"
            animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
          <motion.span
            className="block h-px w-6 bg-ink origin-center"
            animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </button>
      </motion.header>

      {/* ── Mobile full-screen overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-8 py-24"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* Links */}
            <nav className="flex flex-col gap-2">
              {[...links, { label: 'Hire me ↗', href: '#contact' }].map(
                (link, i) => (
                  <motion.a
                    key={link.href + link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className="font-display text-5xl font-bold text-bg py-3 border-b border-bg/10 hover:text-accent transition-colors duration-300"
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.07 }}
                  >
                    {link.label}
                  </motion.a>
                )
              )}
            </nav>

            {/* Bottom — socials */}
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <a
                href="https://github.com/Cornnn-el"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="font-sans text-xs uppercase tracking-widest text-bg/50 hover:text-bg transition-colors duration-300"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/cornelouis-b96628380"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="font-sans text-xs uppercase tracking-widest text-bg/50 hover:text-bg transition-colors duration-300"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:70crlouis02@gmail.com"
                onClick={closeMenu}
                className="font-sans text-xs uppercase tracking-widest text-bg/50 hover:text-bg transition-colors duration-300"
              >
                Email ↗
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
