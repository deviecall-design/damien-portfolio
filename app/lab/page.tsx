import type { Metadata } from 'next'
import { PageFrame } from '@/components/PageFrame'
import { ProjectCard } from '@/components/ProjectCard'
import { StatusBadge } from '@/components/StatusBadge'
import { ThemeFilter } from '@/components/ThemeFilter'
import { activeTheme, filterProjects, STATUS_HELP, statuses } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Lab',
  description:
    'Proofs of concept across health, defence and geospatial work, fintech, and sport, each labelled by status.',
}

export default function LabPage({
  searchParams,
}: {
  searchParams?: { theme?: string }
}) {
  const theme = activeTheme(searchParams?.theme)
  const visible = filterProjects(theme)

  return (
    <PageFrame>
      <header className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Lab</p>
        <h1 className="mt-3 font-serif text-5xl leading-[0.98] tracking-[-0.03em] text-ink sm:text-6xl">
          Proofs of concept
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Each card says what the build is, and what it is not. Health work carries the same research disclaimer. ElectraScan and Ares sit under All until a description is ready.
        </p>
      </header>

      <div className="mt-10">
        <ThemeFilter current={theme} />
      </div>

      <section className="mt-10" aria-labelledby="lab-projects">
        <h2 id="lab-projects" className="sr-only">
          Projects
        </h2>
        {visible.length > 0 ? (
          <ul className="grid gap-6 lg:grid-cols-2">
            {visible.map((project) => (
              <li key={project.slug} className="h-full">
                <ProjectCard project={project} headingLevel="h3" />
              </li>
            ))}
          </ul>
        ) : (
          <p className="rounded-2xl border border-line bg-card px-6 py-10 text-muted">
            Nothing in this theme yet.
          </p>
        )}
      </section>

      <section className="mt-20 border-t border-line pt-12" aria-labelledby="status-labels">
        <h2 id="status-labels" className="font-serif text-3xl tracking-[-0.02em] text-ink">
          Status labels
        </h2>
        <dl className="mt-8 grid gap-6 sm:grid-cols-2">
          {statuses.map((status) => (
            <div key={status} className="rounded-2xl border border-line bg-card p-5">
              <dt>
                <StatusBadge status={status} />
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted">{STATUS_HELP[status]}</dd>
            </div>
          ))}
        </dl>
      </section>
    </PageFrame>
  )
}
