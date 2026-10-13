import type { Metadata } from 'next'
import Link from 'next/link'
import { PageMain } from '@/components/PageMain'
import { researchProjects } from '@/data/projects'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Questions behind Damien Callaghan’s prototypes. Not papers, and not evidence of clinical or market performance.',
  alternates: { canonical: '/research' },
  openGraph: {
    title: 'Research',
    description:
      'Questions behind the prototypes. Not papers, and not evidence of clinical or market performance.',
    url: '/research',
  },
}

export default function ResearchPage() {
  const notes = researchProjects()

  return (
    <PageMain>
      <section className="mx-auto max-w-3xl px-5 pb-16 pt-16 sm:px-8 sm:pt-20">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-pine">Notes</p>
        <h1 className="mt-4 font-serif text-5xl leading-none tracking-tight sm:text-7xl">Research</h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
          <p>
            Questions behind the prototypes. These notes are not papers, and they are not evidence
            of clinical or market performance.
          </p>
          <p>
            The interesting constraint is the opposite of a lab bench with unlimited compute: a
            demo that has to say what is scripted, what is private, and what is still only an idea.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {notes.map((project) => (
            <article key={project.slug} className="rounded-2xl border border-line bg-[#fffcf7] p-6">
              <h2 className="font-serif text-2xl tracking-tight">{project.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">{project.researchQuestion}</p>
              <Link
                href={`/lab/${project.slug}`}
                className="mt-4 inline-flex min-h-11 items-center text-sm font-medium underline decoration-line underline-offset-4 hover:text-pine"
              >
                Case study
              </Link>
            </article>
          ))}
        </div>

        <aside className="mt-12 rounded-2xl border border-line bg-[#fffcf7] p-6">
          <h2 className="font-serif text-2xl tracking-tight">A conversation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            For technical depth on anything in the lab, email or LinkedIn. Health prototypes are
            research demos, not medical devices, and not for clinical use.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 font-medium text-paper"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center underline decoration-line underline-offset-4"
            >
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </aside>
      </section>
    </PageMain>
  )
}
