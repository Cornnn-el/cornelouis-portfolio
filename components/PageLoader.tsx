'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function PageLoader() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Lock scroll while loader is visible
        document.body.style.overflow = 'hidden'

        const timer = setTimeout(() => {
            setLoading(false)
            document.body.style.overflow = ''
        }, 2200)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-ink"
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                >

                    {/* Your name */}
                    <motion.p
                        className="font-display text-5xl font-bold text-bg md:text-7xl"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        Cornelouis
                    </motion.p>

                    {/* Tagline */}
                    <motion.p
                        className="mt-3 font-sans text-xs uppercase tracking-[0.25em] text-bg/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
                    >
                        Code is my craft. Music is my soul.
                    </motion.p>

                    {/* Loading bar */}
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
        </AnimatePresence>
    )
}