import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FlowDiagram } from '@/components/FlowDiagram'
import { HealthNote } from '@/components/HealthNote'
import { PageFrame } from '@/components/PageFrame'
import { ProjectImage } from '@/components/ProjectImage'
import { ProjectLinks } from '@/components/ProjectLinks'
import { StatusBadge } from '@/components/StatusBadge'
import { getProject, projects, themeLabels } from '@/data/projects'
import { textLinkClass } from '@/lib/site'

type Params = { slug: string }

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: { params: Params }): Metadata {
  const project = getProject(params.slug)
  if (!project) return { title: 'Not found' }
  const title = project.aka ? `${project.title} — ${project.aka}` : project.title
  return {
    title,
    description: project.problem,
  }
}

export default function CaseStudyPage({ params }: { params: Params }) {
  const project = getProject(params.slug)
  if (!project) notFound()

  return (
    <PageFrame>
      <article>
        <div className="max-w-3xl">
        <p className="text-sm">
          <Link href="/lab" className={textLinkClass}>
            Lab
          </Link>
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          {project.theme ? (
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {themeLabels[project.theme]}
            </p>
          ) : null}
        </div>
        <h1 className="mt-4 font-serif text-5xl leading-[0.98] tracking-[-0.03em] text-ink [text-wrap:balance] sm:text-6xl">
          {project.title}
        </h1>
        {project.aka ? <p className="mt-3 text-lg text-muted">{project.aka}</p> : null}
        <p className="mt-6 text-lg leading-relaxed text-muted">{project.problem}</p>
        {project.role ? (
          <p className="mt-4 text-sm text-ink">
            <span className="text-muted">Role. </span>
            {project.role}
          </p>
        ) : null}
        {project.healthDisclaimer ? <HealthNote className="mt-6" /> : null}
        {project.honestyNote ? <p className="mt-4 text-sm text-muted">{project.honestyNote}</p> : null}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line">
          {project.image ? (
            <figure>
              <ProjectImage image={project.image} sizes="(min-width: 1024px) 1100px, 100vw" />
              <figcaption className="border-t border-line px-4 py-3 text-sm leading-relaxed text-muted">
                {project.image.caption}
              </figcaption>
            </figure>
          ) : (
            <p className="bg-[#ebe6de] px-6 py-16 text-center text-sm text-muted">Screenshot to be added</p>
          )}
        </div>

        {project.sections.length === 0 ? (
          <div className="mt-12 max-w-3xl rounded-2xl border border-line bg-card px-6 py-10">
            <h2 className="font-serif text-3xl text-ink">Details coming soon</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              This entry does not have a public description yet.
            </p>
          </div>
        ) : (
          <div className="mt-12 max-w-3xl space-y-12">
            {project.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-3xl tracking-[-0.02em] text-ink">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-base leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.heading === 'Stack and architecture' && project.diagram ? (
                  <FlowDiagram diagram={project.diagram} />
                ) : null}
              </section>
            ))}
          </div>
        )}

        {project.gaps && project.gaps.length > 0 ? (
          <section className="mt-12 max-w-3xl rounded-2xl border border-line bg-card p-6">
            <h2 className="font-serif text-3xl text-ink">Details coming soon</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              {project.gaps.map((gap) => (
                <li key={gap}>{gap}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-12 max-w-3xl border-t border-line pt-8">
          <h2 className="font-serif text-3xl tracking-[-0.02em] text-ink">Links</h2>
          <div className="mt-4">
            <ProjectLinks project={project} includeStudy={false} />
          </div>
          {project.healthDisclaimer ? <HealthNote className="mt-6" /> : null}
        </section>
      </article>
    </PageFrame>
  )
}
