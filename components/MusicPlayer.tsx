'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const BAR_HEIGHTS = ['12px', '16px', '10px', '18px', '8px']

type WindowWithAudio = Window & {
    __ambientAudio?: HTMLAudioElement
    __ambientPlaying?: boolean
}

export default function MusicPlayer() {
    const [playing, setPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        // Listen for PageLoader firing the ambient-started event
        const onAmbientStarted = () => {
            const w = window as WindowWithAudio
            if (w.__ambientAudio) {
                audioRef.current = w.__ambientAudio
            }
            setPlaying(true)
        }

        window.addEventListener('ambient-started', onAmbientStarted)
        return () => window.removeEventListener('ambient-started', onAmbientStarted)
    }, [])

    function toggle() {
        const w = window as WindowWithAudio

        if (!audioRef.current) {
            if (w.__ambientAudio) {
                audioRef.current = w.__ambientAudio
            } else {
                audioRef.current = new Audio('/ambient.mp3')
                audioRef.current.loop = true
                audioRef.current.volume = 0.4
                w.__ambientAudio = audioRef.current
            }
        }

        if (playing) {
            audioRef.current.pause()
            w.__ambientPlaying = false
            setPlaying(false)
        } else {
            audioRef.current.play()
            w.__ambientPlaying = true
            setPlaying(true)
        }
    }

    return (
        <div className="flex items-center gap-3">
            <button
                onClick={toggle}
                aria-label={playing ? 'Pause music' : 'Play music'}
                className="group flex h-8 w-8 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-accent"
            >
                <span className="font-sans text-xs text-muted transition-colors duration-300 group-hover:text-accent">
                    {playing ? '■' : '♪'}
                </span>
            </button>

            <AnimatePresence>
                {playing && (
                    <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="font-sans text-xs uppercase tracking-widest text-muted">
                            Now playing
                        </span>
                        <div className="flex items-end gap-0.5 h-4">
                            {BAR_HEIGHTS.map((maxH, i) => (
                                <motion.span
                                    key={i}
                                    className="w-0.5 rounded-full bg-accent"
                                    animate={{ height: ['4px', maxH, '4px'] }}
                                    transition={{
                                        duration: 0.6 + i * 0.15,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: i * 0.1,
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}