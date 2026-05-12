'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

type Stage = 'loading' | 'prompt' | 'done'

export default function PageLoader() {
    const [stage, setStage] = useState<Stage>('loading')

    function playTick() {
        try {
            const sound = new Audio('/hover-sound.mp3')
            sound.volume = 0.5
            sound.play()
        } catch (_) { }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'

        const timer = setTimeout(() => setStage('prompt'), 2200)

        return () => {
            clearTimeout(timer)
            document.body.style.overflow = ''
            document.documentElement.style.overflow = ''
        }
    }, [])

    function handleChoice(withSound: boolean) {
        if (withSound) {
            const audio = new Audio('/ambient.mp3')
            audio.loop = true
            audio.volume = 0.4
            audio.play().catch(() => { })
                ; (window as unknown as Record<string, unknown>).__ambientAudio = audio
                ; (window as unknown as Record<string, unknown>).__ambientPlaying = true
            window.dispatchEvent(new CustomEvent('ambient-started'))
        }
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
        setStage('done')
    }

    return (
        <AnimatePresence>

            {/* ── Stage 1: Loader ── */}
            {stage === 'loading' && (
                <motion.div
                    key="loader"
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-ink"
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                >
                    <motion.p
                        className="font-display text-5xl font-bold text-bg md:text-7xl"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        Cornelouis
                    </motion.p>
                    <motion.p
                        className="mt-3 font-sans text-xs uppercase tracking-[0.25em] text-bg/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
                    >
                        Code is my craft. Music is my soul.
                    </motion.p>
                    <div className="mt-12 h-px w-48 overflow-hidden bg-bg/10">
                        <motion.div
                            className="h-full bg-accent"
                            initial={{ x: '-100%' }}
                            animate={{ x: '0%' }}
                            transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                        />
                    </div>
                </motion.div>
            )}

            {/* ── Stage 2: Volume prompt ── */}
            {stage === 'prompt' && (
                <motion.div
                    key="prompt"
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-bg px-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    {/* Decorative top line */}
                    <motion.div
                        className="mb-12 flex items-center gap-3"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="h-px w-8 bg-accent" />
                        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">
                            A note before you explore
                        </span>
                        <span className="h-px w-8 bg-accent" />
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        className="font-display text-center text-4xl font-bold leading-tight text-ink md:text-6xl"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        For the full experience,
                        <br />
                        <em className="italic text-accent">turn up the volume.</em>
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p
                        className="mt-6 font-sans text-base text-muted text-center max-w-sm leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                    >
                        This portfolio has an ambient soundtrack.
                        Music is part of who I am — and now part of this site.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="mt-12 flex flex-col items-center gap-4 md:flex-row"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                    >
                        {/* Primary button — volume on */}
                        <motion.button
                            onClick={() => handleChoice(true)}
                            onHoverStart={() => playTick()}
                            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-ink px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-bg"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                        >
                            {/* Ripple fill on hover */}
                            <motion.span
                                className="absolute inset-0 rounded-full bg-accent"
                                initial={{ scale: 0, opacity: 0 }}
                                whileHover={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                style={{ originX: '50%', originY: '50%' }}
                            />

                            {/* Speaker SVG icon — thin, modern */}
                            <span className="relative z-10">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                    <motion.path
                                        d="M15.54 8.46a5 5 0 0 1 0 7.07"
                                        initial={{ opacity: 0, pathLength: 0 }}
                                        whileHover={{ opacity: 1, pathLength: 1 }}
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                    />
                                    <motion.path
                                        d="M19.07 4.93a10 10 0 0 1 0 14.14"
                                        initial={{ opacity: 0, pathLength: 0 }}
                                        whileHover={{ opacity: 1, pathLength: 1 }}
                                        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
                                    />
                                </svg>
                            </span>

                            <span className="relative z-10">Turn on volume</span>
                        </motion.button>

                        {/* Skip button */}
                        <motion.button
                            onClick={() => handleChoice(false)}
                            className="font-sans text-sm uppercase tracking-widest text-muted"
                            whileHover={{ x: 4, color: '#1C1E21' }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                        >
                            Skip →
                        </motion.button>
                    </motion.div>

                </motion.div>
            )}

        </AnimatePresence>
    )
}