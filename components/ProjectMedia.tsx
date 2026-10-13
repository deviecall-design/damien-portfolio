import Image from 'next/image'
import type { Project } from '@/data/projects'

export function ProjectMedia({
  project,
  priority = false,
  sizes = '(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw',
  showCaption = true,
}: {
  project: Project
  priority?: boolean
  sizes?: string
  showCaption?: boolean
}) {
  if (!project.image) {
    return (
      <div className="flex aspect-[16/10] items-end bg-pine p-5 text-paper">
        <p className="text-xs font-medium uppercase tracking-[0.16em]">Screenshot to be added</p>
      </div>
    )
  }

  const frame = (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#ebe6dc]">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  )

  if (!showCaption) return frame

  return (
    <figure>
      {frame}
      <figcaption className="mt-2 text-sm leading-relaxed text-ink-muted">
        {project.image.caption}
      </figcaption>
    </figure>
  )
}
