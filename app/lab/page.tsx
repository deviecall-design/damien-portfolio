import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { PageMain } from '@/components/PageMain'
import { ProjectCard } from '@/components/ProjectCard'
import { StatusBadge } from '@/components/StatusBadge'
import { ThemeFilter } from '@/components/ThemeFilter'
import {
  STATUSES,
  STATUS_HELP,
  filterProjects,
  isThemeId,
  projects,
  themeLabel,
  type ThemeId,
} from '@/data/projects'

export const metadata: Metadata = {
  title: 'Lab',
  description:
    'Proofs of concept by Damien Callaghan, labelled live, demo, simulated, parked, private, or screenshots only.',
  alternates: { canonical: '/lab' },
  openGraph: {
    title: 'Lab',
    description:
      'Proofs of concept labelled live, demo, simulated, parked, private, or screenshots only.',
    url: '/lab',
  },
}

export default function LabPage({
  searchParams,
}: {
  searchParams: { theme?: string | string[] }
}) {
  const raw = Array.isArray(searchParams.theme) ? searchParams.theme[0] : searchParams.theme
  if (raw && !isThemeId(raw)) redirect('/lab')
  const theme: ThemeId | null = raw && isThemeId(raw) ? raw : null
  const visible = filterProjects(theme)

  return (
    <PageMain>
      <section className="mx-auto max-w-page px-5 pb-6 pt-16 sm:px-8 sm:pt-20">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-pine">Index</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl">
          Lab
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Proofs of concept, labelled by what they actually are. Health work on this page is a
          research demo, not a medical device, and not for clinical use.
        </p>
      </section>

      <section className="mx-auto max-w-page px-5 sm:px-8" aria-labelledby="status-legend-heading">
        <h2 id="status-legend-heading" className="text-xs font-medium uppercase tracking-[0.16em] text-ink-muted">
          Status key
        </h2>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {STATUSES.map((status) => (
            <div key={status} className="rounded-xl border border-line bg-[#fffcf7] px-3 py-3">
              <dt>
                <StatusBadge status={status} described={false} />
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{STATUS_HELP[status]}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-page px-5 py-10 sm:px-8" aria-labelledby="proofs-heading">
        <div className="flex flex-col gap-5">
          <h2 id="proofs-heading" className="sr-only">
            Proofs
          </h2>
          <ThemeFilter current={theme} />
          <p aria-live="polite" className="text-sm text-ink-muted">
            Showing {visible.length} of {projects.length}
            {theme ? ` in ${themeLabel(theme)}` : ''}.
          </p>
        </div>
        {visible.length === 0 ? (
          <p className="mt-8 text-ink-soft">No proofs in this theme yet.</p>
        ) : (
          <ul className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((project) => (
              <li key={project.slug} className="h-full">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </PageMain>
  )
}
