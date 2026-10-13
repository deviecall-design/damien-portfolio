import Link from 'next/link'
import { liveLinkLabel, publicUrl, type Project } from '@/data/projects'
import { textLinkClass } from '@/lib/site'
import { ExternalLink } from './ExternalLink'

export function ProjectLinks({
  project,
  includeStudy = true,
}: {
  project: Project
  includeStudy?: boolean
}) {
  const url = publicUrl(project)
  const unavailable = project.status === 'Screenshots only' ? 'Screenshots only' : 'No public link'

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
      {includeStudy ? (
        <Link href={`/lab/${project.slug}`} className={`${textLinkClass} inline-flex min-h-11 items-center`}>
          Case study
        </Link>
      ) : (
        <Link href="/lab" className={`${textLinkClass} inline-flex min-h-11 items-center`}>
          Back to the lab
        </Link>
      )}
      {url ? (
        <ExternalLink href={url}>{liveLinkLabel(project.status)}</ExternalLink>
      ) : (
        <span className="inline-flex min-h-11 items-center text-muted">{unavailable}</span>
      )}
    </div>
  )
}
