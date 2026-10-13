import type { Metadata } from 'next'
import { HealthNote } from '@/components/HealthNote'
import { PageFrame } from '@/components/PageFrame'
import { ProjectImage } from '@/components/ProjectImage'
import { ProjectLinks } from '@/components/ProjectLinks'
import { StatusBadge } from '@/components/StatusBadge'
import { projects } from '@/data/projects'
import { site, textLinkClass } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected proofs of concept, with the limits written into each case study.',
}

export default function WorkPage() {
  const stories = projects.filter((project) => project.work)

  return (
    <PageFrame>
      <header className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Work</p>
        <h1 className="mt-3 font-serif text-5xl leading-[0.98] tracking-[-0.03em] text-ink sm:text-7xl">
          Selected builds
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          A closer read on the work in the lab. Limits sit in the case study, next to the build.
        </p>
      </header>

      <div className="mt-8">
        {stories.map((project, index) => {
          const story = project.work
          if (!story) return null
          return (
            <article key={project.slug} className="grid items-start gap-8 border-t border-line py-14 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-line">
                  {project.image ? (
                    <ProjectImage
                      image={project.image}
                      crop
                      sizes="(min-width: 1024px) 420px, 100vw"
                    />
                  ) : (
                    <div className="flex aspect-[16/10] items-center justify-center bg-[#ebe6de] px-6 text-center text-sm text-muted">
                      Screenshot to be added
                    </div>
                  )}
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</p>
                <div className="mt-3">
                  <StatusBadge status={project.status} />
                </div>
                <h2 className="mt-4 font-serif text-4xl tracking-[-0.02em] text-ink">{project.title}</h2>
                {project.aka ? <p className="mt-1 text-sm text-muted">{project.aka}</p> : null}
                <p className="mt-4 text-xl leading-snug text-ink">{story.headline}</p>
                {story.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-sm leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
                {project.healthDisclaimer ? <HealthNote className="mt-5" /> : null}
                <div className="mt-6">
                  <ProjectLinks project={project} />
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="border-t border-line py-8">
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          Private builds stay unlinked. Email{' '}
          <a href={`mailto:${site.email}`} className={textLinkClass}>
            {site.email}
          </a>{' '}
          for a walkthrough.
        </p>
      </div>
    </PageFrame>
  )
}
