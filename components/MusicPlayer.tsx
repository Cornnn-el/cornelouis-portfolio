'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const BAR_HEIGHTS = ['12px', '16px', '10px', '18px', '8px']

export default function MusicPlayer() {
    const [playing, setPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const startedRef = useRef(false)

    function initAudio() {
        if (!audioRef.current) {
            audioRef.current = new Audio('/ambient.mp3')
            audioRef.current.loop = true
            audioRef.current.volume = 0.4
        }
    }

    function startMusic() {
        if (startedRef.current) return
        startedRef.current = true
        initAudio()
        audioRef.current?.play().then(() => {
            setPlaying(true)
        }).catch(() => {
            // Still blocked — do nothing, button still works manually
            startedRef.current = false
        })
    }

    useEffect(() => {
        // Attempt autoplay immediately
        initAudio()
        audioRef.current?.play().then(() => {
            startedRef.current = true
            setPlaying(true)
        }).catch(() => {
            // Autoplay blocked — wait for first interaction
            const onInteract = () => {
                startMusic()
                document.removeEventListener('click', onInteract)
                document.removeEventListener('scroll', onInteract)
                document.removeEventListener('keydown', onInteract)
            }
            document.addEventListener('click', onInteract)
            document.addEventListener('scroll', onInteract)
            document.addEventListener('keydown', onInteract)
        })

        return () => {
            audioRef.current?.pause()
        }
    }, [])

    function toggle() {
        if (playing) {
            audioRef.current?.pause()
            setPlaying(false)
        } else {
            initAudio()
            audioRef.current?.play()
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