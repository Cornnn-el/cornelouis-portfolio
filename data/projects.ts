export type Project = {
    id: string
    year: string
    category: string
    title: string
    description: string
    stack: string[]
    link: string | null
    comingSoon?: boolean
}

export const projects: Project[] = [
    {
        id: '01',
        year: '2025–2026',
        category: 'Full-stack Application',
        title: 'President University Announcement Hub',
        description:
            'A centralised announcement platform for President University — keeping students and staff informed with a clean, fast, real-time interface.',
        stack: ['TypeScript', 'React', 'Vite', 'ReactBits'],
        link: null,
        comingSoon: false,
    },
    // ─── Add your next project here when it's ready ───
    // {
    //   id: '02',
    //   year: '2026',
    //   category: 'Web Application',
    //   title: 'Your Next Project',
    //   description: 'One sentence about what it does.',
    //   stack: ['Next.js', 'PostgreSQL', 'Tailwind'],
    //   link: 'https://yourproject.com',
    // },
]