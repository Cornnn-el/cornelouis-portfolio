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
        year: '2025–2026',
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
        link: null,
        github: 'https://github.com/Cornnn-el',
        images: [],
    },
]