'use client'

import { motion } from 'motion/react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function t(delay: number) {
  return { duration: 0.7, ease: 'easeOut' as const, delay }
}

const socials = [
  { label: 'GitHub', href: 'https://github.com/Cornnn-el' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cornelouis-b96628380' },
  { label: 'Email', href: 'mailto:70crlouis02@gmail.com' },
]

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-between bg-bg px-8 pb-10 pt-36 md:pt-32 md:px-16">

      {/* ── Main content ── */}
      <motion.div
        className="flex flex-col gap-8 max-w-4xl"
        initial="hidden"
        animate="visible"
      >

        {/* Location tag */}
        <motion.div className="flex items-center gap-3" variants={fadeUp} transition={t(0.1)}>
          <span className="h-px w-6 bg-accent" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">
            Full-stack developer · Cikarang, ID
          </span>
        </motion.div>

        {/* Headline — two lines, second carries the italic accent word */}
        <div className="flex flex-col gap-1">
          <motion.h1
            className="font-display text-6xl font-bold leading-tight tracking-tight text-ink md:text-8xl"
            variants={fadeUp}
            transition={t(0.2)}
          >
            Code is my craft.
          </motion.h1>

          <motion.h1
            className="font-display text-6xl font-bold leading-tight tracking-tight text-ink md:text-8xl"
            variants={fadeUp}
            transition={t(0.35)}
          >
            Music is my{' '}
            <em className="italic text-accent">soul.</em>
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          className="font-sans text-lg leading-relaxed text-muted max-w-lg"
          variants={fadeUp}
          transition={t(0.5)}
        >
          I&apos;m Cornelouis — a full-stack developer who brings rhythm,
          intention, and a little bit of music into everything I build.
          From the database to the interface.
        </motion.p>

        {/* CTAs */}
        <motion.div className="flex items-center gap-6 pt-2" variants={fadeUp} transition={t(0.6)}>
          <a
            href="#work"
            className="rounded-full bg-ink px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-bg transition-colors duration-500 hover:bg-accent"
          >
            See my work
          </a>
          <a
            href="/cv.pdf"
            className="flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-muted transition-colors duration-300 hover:text-ink"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-border text-[10px]">
              ↓
            </span>
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* ── Bottom bar ── */}
      <motion.div
        className="flex items-end justify-between border-t border-border pt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={t(0.9)}
      >
        {/* Replace with: */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#4A7C59]" />
            <span className="font-sans text-xs text-muted">Open to opportunities</span>
          </div>
          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs uppercase tracking-widest text-muted transition-colors duration-300 hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <span className="font-sans text-xs uppercase tracking-widest text-muted">
          Scroll to explore ↓
        </span>
      </motion.div>

    </section>
  )
}
