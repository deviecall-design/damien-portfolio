import type { Metadata } from 'next'
import Link from 'next/link'
import { PageFrame } from '@/components/PageFrame'
import { StatusBadge } from '@/components/StatusBadge'
import { projects } from '@/data/projects'
import { site, textLinkClass } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Research prototypes and demos. Health work is not a medical device and not for clinical use.',
}

export default function ResearchPage() {
  const notes = projects.filter((project) => project.research)

  return (
    <PageFrame>
      <header className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Research</p>
        <h1 className="mt-3 font-serif text-5xl leading-[0.98] tracking-[-0.03em] text-ink sm:text-6xl">
          Prototypes, not papers
        </h1>
        <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
          <p>
            I use a prototype to test an interface against a specific problem. The constraint is part of the brief: a synthetic case, a simulated feed, or a private build.
          </p>
          <p>
            These notes are not publications. The health work is a research demo. It is not a medical device and not for clinical use.
          </p>
        </div>
      </header>

      <div className="mt-14 space-y-6">
        {notes.map((project) => {
          const note = project.research
          if (!note) return null
          return (
            <article key={project.slug} className="rounded-2xl border border-line bg-card p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <StatusBadge status={project.status} />
              </div>
              <h2 className="mt-4 font-serif text-3xl tracking-[-0.02em] text-ink">{note.title}</h2>
              {note.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-sm leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
              <p className="mt-6 text-sm">
                <Link href={`/lab/${project.slug}`} className={textLinkClass}>
                  Case study
                </Link>
              </p>
            </article>
          )
        })}
      </div>

      <section className="mt-16 rounded-2xl border border-line bg-card p-6 sm:p-8">
        <h2 className="font-serif text-3xl text-ink">A conversation</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          For a technical walkthrough, including a private build, email me or use LinkedIn.
        </p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a href={`mailto:${site.email}`} className={textLinkClass}>
            {site.email}
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={textLinkClass}>
            LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>
    </PageFrame>
  )
}
