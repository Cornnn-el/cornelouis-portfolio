'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
    const dotRef = useRef<HTMLDivElement>(null)
    const ringRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const dot = dotRef.current
        const ring = ringRef.current
        if (!dot || !ring) return

        let mouseX = 0, mouseY = 0
        let ringX = 0, ringY = 0
        let frame: number

        // Track real mouse position instantly
        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX
            mouseY = e.clientY

            // Dot snaps to cursor immediately — feels connected
            dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
        }

        // Ring lags behind with lerp — creates the trailing feel
        const animate = () => {
            ringX += (mouseX - ringX) * 0.12
            ringY += (mouseY - ringY) * 0.12
            ring.style.transform = `translate(${ringX}px, ${ringY}px)`
            frame = requestAnimationFrame(animate)
        }

        // Grow ring on hoverable elements
        const onEnter = () => ring.classList.add('cursor-hover')
        const onLeave = () => ring.classList.remove('cursor-hover')

        const addHover = () => {
            document
                .querySelectorAll('a, button, [role="button"]')
                .forEach((el) => {
                    el.addEventListener('mouseenter', onEnter)
                    el.addEventListener('mouseleave', onLeave)
                })
        }

        window.addEventListener('mousemove', onMove)
        frame = requestAnimationFrame(animate)
        addHover()

        // Hide default cursor on desktop only
        document.body.style.cursor = 'none'

        return () => {
            window.removeEventListener('mousemove', onMove)
            cancelAnimationFrame(frame)
            document.body.style.cursor = ''
        }
    }, [])

    return (
        <>
            {/* Dot — was bg-accent, now bg-white with blend mode */}
            <div
                ref={dotRef}
                style={{ mixBlendMode: 'difference' }}
                className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                aria-hidden="true"
            />

            {/* Ring — was border-accent, now border-white with blend mode */}
            <div
                ref={ringRef}
                style={{ mixBlendMode: 'difference' }}
                className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white opacity-80 transition-[width,height,opacity] duration-300"
                aria-hidden="true"
            />
        </>
    )
}