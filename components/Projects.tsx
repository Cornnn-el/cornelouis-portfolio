'use client'

import { motion } from 'motion/react'
import { projects } from '@/data/projects'

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
}

function t(delay = 0) {
    return { duration: 0.7, ease: 'easeOut' as const, delay }
}

export default function Projects() {
    return (
        <section id="work" className="bg-bg px-8 py-32 md:px-16">

            <motion.div
                className="mb-16 flex items-end justify-between border-b border-border pb-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={t(0)}
            >
                <div className="flex items-baseline gap-4">
                    <h2 className="font-display text-4xl font-bold text-ink md:text-5xl">
                        Selected work
                    </h2>
                    <span className="font-sans text-sm text-muted">
                        ({String(projects.length).padStart(2, '0')})
                    </span>
                </div>
                <span className="font-sans text-xs uppercase tracking-widest text-muted hidden md:block">
                    {new Date().getFullYear()} — ongoing
                </span>
            </motion.div>

            <ul className="flex flex-col">
                {projects.map((project, index) => (
                    <motion.li
                        key={project.id}
                        className="group relative border-b border-border"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={fadeUp}
                        transition={t(index * 0.1)}
                    >
                        <span className="absolute left-0 top-0 h-full w-0.5 bg-accent scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100" />

                        <div className="flex flex-col gap-6 py-10 pl-6 md:flex-row md:items-start md:justify-between md:gap-12">
                            <div className="flex flex-col gap-4 md:max-w-xl">
                                <div className="flex items-center gap-4">
                                    <span className="font-sans text-xs font-bold text-accent">{project.id}</span>
                                    <span className="font-sans text-xs uppercase tracking-widest text-muted">{project.category}</span>
                                </div>
                                <h3 className="font-display text-2xl font-bold text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
                                    {project.title}
                                </h3>
                                <p className="font-sans text-base leading-relaxed text-muted">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="rounded-full border border-border bg-surface px-3 py-1 font-sans text-xs uppercase tracking-wider text-muted">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex shrink-0 flex-row items-center gap-6 md:flex-col md:items-end md:gap-4">
                                <span className="font-sans text-sm text-muted">{project.year}</span>
                                {project.link ? (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-bg">
                                        ↗
                                    </a>
                                ) : (
                                    <span className="rounded-full border border-border px-3 py-1 font-sans text-xs uppercase tracking-widest text-muted">
                                        Local
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.li>
                ))}
            </ul>

            <motion.div
                className="mt-12 flex items-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={t(0.3)}
            >
                <span className="h-px flex-1 bg-border" />
                <span className="font-sans text-xs uppercase tracking-widest text-muted">More projects on the way</span>
                <span className="h-px flex-1 bg-border" />
            </motion.div>

        </section>
    )
}