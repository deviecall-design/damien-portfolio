import Link from 'next/link'
import { themeLabels, type Project } from '@/data/projects'
import { HealthNote } from './HealthNote'
import { ProjectImage } from './ProjectImage'
import { ProjectLinks } from './ProjectLinks'
import { StatusBadge } from './StatusBadge'

export function ProjectCard({
  project,
  headingLevel = 'h2',
}: {
  project: Project
  headingLevel?: 'h2' | 'h3'
}) {
  const Title = headingLevel
  const studyHref = `/lab/${project.slug}`

  return (
    <article id={project.slug} className="flex h-full scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-line bg-card">
      <div className="relative">
        {project.image ? (
          <ProjectImage
            image={project.image}
            crop
            sizes="(min-width: 1024px) 540px, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <div className="flex aspect-[16/10] items-center justify-center bg-[#ebe6de] px-6 text-center text-sm text-muted">
            Screenshot to be added
          </div>
        )}
        <div className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)]">
          <StatusBadge status={project.status} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {project.theme ? (
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            {themeLabels[project.theme]}
          </p>
        ) : null}
        <Title className="mt-2 font-serif text-[1.7rem] leading-tight tracking-[-0.02em] text-ink">
          <Link href={studyHref} className="hover:underline">
            {project.title}
          </Link>
        </Title>
        {project.aka ? <p className="mt-1 text-sm text-muted">{project.aka}</p> : null}
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.problem}</p>
        {project.healthDisclaimer ? <HealthNote className="mt-4" /> : null}
        {project.stack.length > 0 ? (
          <ul aria-label="Stack" className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <li key={tag} className="rounded-full border border-line px-2.5 py-1 text-xs text-ink">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
        {project.honestyNote ? (
          <p className="mt-4 text-xs leading-relaxed text-muted">{project.honestyNote}</p>
        ) : null}
        <div className="mt-auto pt-5">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  )
}
