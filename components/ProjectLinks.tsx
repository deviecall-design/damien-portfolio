import Link from 'next/link'
import {
  publicLinkLabel,
  unavailableLabel,
  type Project,
} from '@/data/projects'

export function ProjectLinks({
  project,
  showCaseStudy = true,
}: {
  project: Project
  showCaseStudy?: boolean
}) {
  const liveLabel = publicLinkLabel(project)
  const closedLabel = unavailableLabel(project)

  return (
    <div className="flex flex-col gap-2 text-sm">
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {showCaseStudy ? (
          <Link
            href={`/lab/${project.slug}`}
            className="font-medium text-ink underline decoration-line underline-offset-4 hover:text-pine"
          >
            Case study
          </Link>
        ) : null}
        {project.linkPublic && liveLabel ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-pine underline decoration-pine/40 underline-offset-4 hover:decoration-pine"
          >
            {liveLabel}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          <span className="text-ink-muted">{closedLabel}</span>
        )}
      </div>
      {project.linkCaution ? (
        <p className="text-sm leading-relaxed text-ink-muted">{project.linkCaution}</p>
      ) : null}
    </div>
  )
}
