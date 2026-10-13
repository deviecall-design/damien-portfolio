import Link from 'next/link'
import { ComingSoonBadge, StatusBadge } from '@/components/StatusBadge'
import { HealthDisclaimer } from '@/components/HealthDisclaimer'
import { PageMain } from '@/components/PageMain'
import { ProjectLinks } from '@/components/ProjectLinks'
import { ProjectMedia } from '@/components/ProjectMedia'
import { themeLabel, type Project } from '@/data/projects'

export function CaseStudy({
  project,
  children,
}: {
  project: Project
  children: React.ReactNode
}) {
  return (
    <PageMain>
      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-sm text-ink-muted">
          <Link href="/lab" className="underline decoration-line underline-offset-4 hover:text-ink">
            Lab
          </Link>
          {project.theme ? <span> / {themeLabel(project.theme)}</span> : null}
        </p>
        <header className="mt-6 space-y-5">
          {project.status ? <StatusBadge status={project.status} /> : <ComingSoonBadge />}
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="text-lg leading-relaxed text-ink-soft">{project.problem}</p>
          {project.theme === 'health' ? <HealthDisclaimer /> : null}
          <ProjectLinks project={project} showCaseStudy={false} />
        </header>

        <div className="mt-10">
          <ProjectMedia
            project={project}
            priority
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>

        <div className="study mt-12">
          {children}
          <h2>Links and screenshots</h2>
          {project.image ? (
            <p>{project.image.caption}</p>
          ) : (
            <p>Screenshot to be added.</p>
          )}
          <ProjectLinks project={project} showCaseStudy={false} />
        </div>
      </article>
    </PageMain>
  )
}
