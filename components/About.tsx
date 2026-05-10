'use client'

import Image from 'next/image'
import MusicPlayer from '@/components/MusicPlayer'
import { motion } from 'motion/react'

const skills = [
    'TypeScript', 'React', 'Next.js', 'Vite',
    'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Git',
]

function t(delay = 0) {
    return { duration: 0.7, ease: 'easeOut' as const, delay }
}

export default function About() {
    return (
        <section id="about" className="bg-surface px-8 py-32 md:px-16">
            <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-24 md:items-start">

                {/* Left — text */}
                <div className="flex flex-col gap-8">

                    <motion.div
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={t(0)}
                    >
                        <span className="h-px w-6 bg-accent" />
                        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">
                            About me
                        </span>
                    </motion.div>

                    <motion.h2
                        className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={t(0.1)}
                    >
                        Developer by day,<br />
                        listener by <em className="italic text-accent">always.</em>
                    </motion.h2>

                    <motion.div
                        className="flex flex-col gap-5"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={t(0.2)}
                    >
                        <p className="font-sans text-base leading-relaxed text-muted">
                            I&apos;m Cornelouis — a full-stack developer from Cikarang, Indonesia.
                            Three years ago I wrote my first line of code out of curiosity.
                            That curiosity never really went away.
                        </p>
                        <p className="font-sans text-base leading-relaxed text-muted">
                            Music is always in the background when I build — pop, R&B, folk,
                            whatever the moment calls for. Somewhere along the way I realised
                            that the songs I love most aren&apos;t just heard, they&apos;re{' '}
                            <em className="italic text-ink">felt.</em>{' '}
                            That&apos;s what I want from the things I build too.
                        </p>
                        <p className="font-sans text-base leading-relaxed text-muted">
                            I care about the details that make software feel right — the
                            interaction that lands naturally, the transition that doesn&apos;t
                            call attention to itself, the interface that just gets out of the way.
                        </p>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        className="flex flex-col gap-3"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={t(0.35)}
                    >
                        <span className="font-sans text-xs uppercase tracking-widest text-muted">
                            Technologies I work with
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-border bg-bg px-3 py-1 font-sans text-xs uppercase tracking-wider text-muted"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right — photo */}
                {/* Right — floating cutout photo */}
                <motion.div
                    className="relative flex justify-center md:justify-end mt-8 md:mt-0"
                    initial={{ opacity: 0, x: 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={t(0.25)}
                >
                    <div className="relative">

                        {/* Decorative circles */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 md:h-96 md:w-96 rounded-full border border-accent opacity-20" />
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-52 w-52 md:h-80 md:w-80 rounded-full bg-accent opacity-5" />

                        {/* Photo — smaller on mobile */}
                        <div className="relative h-[340px] w-[260px] md:h-[580px] md:w-[440px]">
                            <Image
                                src="/cornel-photo.png"
                                alt="Cornelouis — developer and music lover"
                                fill
                                className="object-contain object-bottom drop-shadow-xl"
                                priority
                            />
                        </div>

                        {/* Caption badge */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                            <div className="flex items-center gap-2 rounded-full bg-ink px-4 py-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-bg whitespace-nowrap">
                                    Cikarang, ID · 3 yrs coding
                                </span>
                            </div>
                            <MusicPlayer />
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}