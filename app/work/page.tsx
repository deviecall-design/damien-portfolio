import type { Metadata } from 'next'
import Link from 'next/link'
import { PageMain } from '@/components/PageMain'
import { ProjectMedia } from '@/components/ProjectMedia'
import { ComingSoonBadge, StatusBadge } from '@/components/StatusBadge'
import { projects } from '@/data/projects'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Notes on Damien Callaghan’s prototypes. Claims are limited to what the work can support.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Work',
    description: 'Notes on the prototypes, with the limits written in.',
    url: '/work',
  },
}

export default function WorkPage() {
  return (
    <PageMain>
      <section className="mx-auto max-w-page px-5 pb-4 pt-16 sm:px-8 sm:pt-20">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-pine">Studies</p>
        <h1 className="mt-4 font-serif text-5xl leading-none tracking-tight sm:text-7xl">Work</h1>
        <p className="mt-5 max-w-xl border-l-2 border-pine pl-4 text-lg leading-relaxed text-ink-soft">
          Notes on the prototypes. Where a result is not shown, it is because there is not one to
          stand behind.
        </p>
      </section>

      <section className="mx-auto max-w-page px-5 pb-8 sm:px-8">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="grid items-start gap-8 border-t border-line py-12 lg:grid-cols-2 lg:gap-12"
          >
            <ProjectMedia
              project={project}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-pine">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight">{project.title}</h2>
              <div className="mt-4">
                {project.status ? <StatusBadge status={project.status} /> : <ComingSoonBadge />}
              </div>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                {project.story.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <Link
                href={`/lab/${project.slug}`}
                className="mt-6 inline-flex min-h-11 items-center text-sm font-medium underline decoration-line underline-offset-4 hover:text-pine"
              >
                Case study
              </Link>
            </div>
          </article>
        ))}

        <article className="border-t border-line py-12">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-pine">Also</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight">PLÉO</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">{site.pleo}</p>
        </article>
      </section>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-page flex-col gap-3 px-5 py-6 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>If you want to go deeper on a prototype, write.</p>
          <a href={`mailto:${site.email}`} className="underline decoration-line underline-offset-4 hover:text-ink">
            {site.email}
          </a>
        </div>
      </div>
    </PageMain>
  )
}
