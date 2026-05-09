'use client'

import { motion } from 'motion/react'

function t(delay = 0) {
    return { duration: 0.8, ease: 'easeOut' as const, delay }
}

export default function Contact() {
    return (
        <section id="contact" className="bg-ink px-8 py-32 md:px-16">
            <div className="mx-auto max-w-6xl">

                {/* Tag */}
                <motion.div
                    className="flex items-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={t(0)}
                >
                    <span className="h-px w-6 bg-accent" />
                    <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">
                        Get in touch
                    </span>
                </motion.div>

                {/* Big headline */}
                <motion.h2
                    className="font-display font-bold text-bg leading-[1.05] tracking-tight text-5xl md:text-7xl lg:text-8xl mb-16 max-w-4xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={t(0.1)}
                >
                    Let&apos;s build something<br />
                    that <em className="italic text-accent">feels</em> like music.
                </motion.h2>

                {/* Email CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={t(0.25)}
                >
                    <a
                        href="mailto:70crlouis02@gmail.com"
                        className="group inline-flex items-center gap-4 font-sans text-lg font-semibold uppercase tracking-widest text-bg transition-colors duration-300 hover:text-accent md:text-xl"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-bg/30 text-sm transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                            ↗
                        </span>
                        70crlouis02@gmail.com
                    </a>
                </motion.div>

                {/* Divider */}
                <motion.div
                    className="my-16 h-px w-full bg-bg/10"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={t(0.4)}
                />

                {/* Footer row */}
                <motion.div
                    className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={t(0.5)}
                >
                    {/* Copyright */}
                    <span className="font-sans text-xs uppercase tracking-widest text-bg/40">
                        © {new Date().getFullYear()} Cornelouis. All rights reserved.
                    </span>

                    {/* Social links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/Cornnn-el"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-sans text-xs uppercase tracking-widest text-bg/50 transition-colors duration-300 hover:text-bg"
                        >
                            GitHub ↗
                        </a>
                        <a
                            href="https://www.linkedin.com/in/cornelouis-b96628380"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-sans text-xs uppercase tracking-widest text-bg/50 transition-colors duration-300 hover:text-bg"
                        >
                            LinkedIn ↗
                        </a>
                        <a
                            href="mailto:70crlouis02@gmail.com"
                            className="font-sans text-xs uppercase tracking-widest text-bg/50 transition-colors duration-300 hover:text-bg"
                        >
                            Email ↗
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}