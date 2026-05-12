export type Project = {
    id: string
    slug: string
    year: string
    category: string
    title: string
    description: string
    fullDescription: string[]
    role: string
    stack: string[]
    link: string | null
    github: string | null
    images: string[]
}

export const projects: Project[] = [
    {
        id: '01',
        slug: 'president-university-announcement-hub',
        year: 'September 2025 – May 2026',
        category: 'Full-stack Application',
        title: 'President University Announcement Hub',
        description:
            'A centralised announcement platform for President University — keeping students and staff informed with a clean, fast, real-time interface.',
        fullDescription: [
            'President University needed a better way to communicate with students and staff. Announcements were scattered across WhatsApp groups, email chains, and notice boards — important information was getting lost.',
            'I built a centralised hub that gives the university a single place to publish announcements, and students a clean interface to read them. The platform supports categories, priority levels, and real-time updates.',
            'The focus was on making something fast and easy to use for both the people publishing announcements and the people reading them. Every interaction was designed to feel effortless.',
        ],
        role: 'Full-stack Developer',
        stack: ['TypeScript', 'React', 'Vite', 'ReactBits'],
        link: 'https://synapse-presu.vercel.app',
        github: 'https://github.com/Cornnn-el',
        images: [
            '/projects/presu-announcement.jpg',
        ],
    },
    {
        id: '02',
        slug: 'spore-drift',
        year: 'April 2026',
        category: 'Interactive Experience',
        title: 'Spore Drift',
        description:
            'A scroll-driven 3D particle experience built with Three.js — 5,000 particles morphing through nature and cosmos as you scroll.',
        fullDescription: [
            'I wanted to build something that felt alive. Spore Drift is a creative experiment that takes 5,000 particles through five chapters — Seed, Bloom, Drift, Cosmos, and Helix — each one a different shape drawn from nature and science.',
            'Every chapter is a new geometry: a Fibonacci sphere, a sunflower spiral, wind-scattered spores, a two-arm galaxy, and a DNA double helix complete with base-pair rungs. Scrolling morphs the particles between shapes using per-particle lerp, while layered noise gives them organic turbulence that peaks during the Drift chapter and calms as they settle into the Helix.',
            'The interaction was designed to feel tactile — drag to spin the scene with real inertia, watch it coast and slowly stop. Additive blending makes dense clusters glow. The whole thing is a single HTML file, fully responsive, and runs smoothly on mobile.',
        ],
        role: 'Creative Developer',
        stack: ['Three.js', 'WebGL', 'JavaScript', 'HTML', 'CSS'],
        link: 'https://spore-drift.vercel.app',
        github: 'https://github.com/Cornnn-el',
        images: [
            '/projects/spore-drift.jpg',
        ],
    },
    {
        id: '03',
        slug: 'generative-art-studio',
        year: 'May 2026',
        category: 'Creative Tool',
        title: 'Generative Art Studio',
        description: 'A browser-based generative art studio — create stunning algorithmic visuals through noise, symmetry, and color with zero design experience needed.',
        fullDescription: [
            'Most creative tools require design skills. I wanted to build something where the art emerges from math — where anyone could produce something beautiful just by moving a slider.',
            'The studio offers four generative modes: Flow Fields driven by Simplex noise, symmetrical Particle systems, Lissajous curves, and Rose curves. Each mode produces a completely different visual language from the same set of parameters.',
            'Built entirely with the Canvas API and WebGL — no Three.js, no p5.js. The rendering loop runs on a ref-based architecture so every parameter change reflects instantly without restarting the animation. The landing page uses a full WebGL galaxy shader as a background.',
            'Users can switch color palettes mid-draw to layer colors, adjust speed, density, symmetry, noise scale, and fade — then export the result as a full-resolution PNG.',
        ],
        role: 'Frontend Developer',
        stack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Canvas API', 'WebGL', 'Simplex Noise', 'OGL'],
        link: 'https://artgenstudio.vercel.app',
        github: 'https://github.com/Cornnn-el',
        images: [
            '/projects/artgen-studio.jpg',
        ],
    },
]