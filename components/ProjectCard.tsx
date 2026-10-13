import Link from 'next/link'
import { ComingSoonBadge, StatusBadge } from '@/components/StatusBadge'
import { HealthDisclaimer } from '@/components/HealthDisclaimer'
import { ProjectLinks } from '@/components/ProjectLinks'
import { ProjectMedia } from '@/components/ProjectMedia'
import { themeLabel, type Project } from '@/data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-[#fffcf7] p-3 shadow-card">
      <Link href={`/lab/${project.slug}`} className="block overflow-hidden rounded-xl focus-visible:outline-offset-4">
        <ProjectMedia project={project} showCaption={false} />
      </Link>
      {project.image ? (
        <p className="px-2 pt-2 text-sm leading-relaxed text-ink-muted">{project.image.caption}</p>
      ) : null}
      <div className="flex flex-1 flex-col gap-3 px-2 pb-2 pt-4">
        {project.status ? <StatusBadge status={project.status} /> : <ComingSoonBadge />}
        <div className="space-y-1">
          <h2 className="font-serif text-[1.65rem] leading-tight tracking-tight">
            <Link href={`/lab/${project.slug}`} className="hover:text-pine">
              {project.title}
            </Link>
          </h2>
          {project.theme ? (
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
              {themeLabel(project.theme)}
            </p>
          ) : null}
        </div>
        <p className="text-sm leading-relaxed text-ink-soft">{project.problem}</p>
        {project.stack.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-soft"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
        {project.theme === 'health' ? <HealthDisclaimer /> : null}
        <div className="mt-auto pt-2">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  )
}
