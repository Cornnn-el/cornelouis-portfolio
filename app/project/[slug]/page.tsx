import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Image from 'next/image'

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)
    if (!project) notFound()

    return (
        <main className="bg-bg min-h-screen">
            <Nav />

            {/* Hero */}
            <section className="px-8 pb-16 pt-40 md:px-16">
                <div className="mx-auto max-w-4xl">

                    <Link
                        href="/#work"
                        className="mb-12 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-muted transition-colors duration-300 hover:text-ink"
                    >
                        ← Back to work
                    </Link>

                    <div className="mt-8 flex items-center gap-4">
                        <span className="font-sans text-xs font-bold text-accent">
                            {project.id}
                        </span>
                        <span className="font-sans text-xs uppercase tracking-widest text-muted">
                            {project.category}
                        </span>
                        <span className="font-sans text-xs uppercase tracking-widest text-muted">
                            {project.year}
                        </span>
                    </div>

                    <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-ink md:text-6xl">
                        {project.title}
                    </h1>

                    <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-border pt-8">
                        <div className="flex flex-col gap-1">
                            <span className="font-sans text-xs uppercase tracking-widest text-muted">
                                Role
                            </span>
                            <span className="font-sans text-sm text-ink">{project.role}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-sans text-xs uppercase tracking-widest text-muted">
                                Stack
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-border bg-surface px-3 py-1 font-sans text-xs uppercase tracking-wider text-muted"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-auto rounded-full bg-ink px-6 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-bg transition-colors duration-300 hover:bg-accent"
                            >
                                Live site ↗
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Project images */}
            <section className="px-8 md:px-16">
                <div className="mx-auto max-w-4xl flex flex-col gap-4">
                    {project.images.length > 0 ? (
                        project.images.map((src, i) => (
                            <div key={i} className="relative w-full overflow-hidden rounded-2xl border border-border bg-surface">
                                <Image
                                    src={src}
                                    alt={`${project.title} screenshot ${i + 1}`}
                                    width={1200}
                                    height={800}
                                    className="w-full object-cover"
                                />
                            </div>
                        ))
                    ) : (
                        <div className="flex h-[400px] w-full items-center justify-center rounded-2xl border border-border bg-surface">
                            <span className="font-sans text-xs uppercase tracking-widest text-muted">
                                Project screenshots coming soon
                            </span>
                        </div>
                    )}
                </div>
            </section>

            {/* Case study body */}
            <section className="px-8 py-20 md:px-16">
                <div className="mx-auto flex max-w-2xl flex-col gap-8">
                    {project.fullDescription.map((para, i) => (
                        <p key={i} className="font-sans text-lg leading-relaxed text-muted">
                            {para}
                        </p>
                    ))}
                </div>
            </section>

            {/* Footer nav */}
            <section className="border-t border-border px-8 py-16 md:px-16">
                <div className="mx-auto flex max-w-4xl items-center justify-between">
                    <Link
                        href="/#work"
                        className="font-sans text-xs uppercase tracking-widest text-muted transition-colors duration-300 hover:text-ink"
                    >
                        ← All projects
                    </Link>
                    <Link
                        href="/#contact"
                        className="font-sans text-xs uppercase tracking-widest text-muted transition-colors duration-300 hover:text-ink"
                    >
                        Start a project →
                    </Link>
                </div>
            </section>

        </main>
    )
}