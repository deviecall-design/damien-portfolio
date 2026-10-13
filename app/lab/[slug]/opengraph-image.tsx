import { ImageResponse } from 'next/og'
import { HEALTH_DISCLAIMER, getProject } from '@/data/projects'
import { OgCard } from '@/lib/ogCard'

export const alt = 'Case study by Damien Callaghan'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function CaseStudyImage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  const title = project?.title ?? 'Lab'
  const footer =
    project?.theme === 'health'
      ? HEALTH_DISCLAIMER
      : project?.status ?? 'Details coming soon'

  return new ImageResponse(
    OgCard({
      kicker: 'DAMIEN CALLAGHAN · LAB',
      title,
      footer,
    }),
    { ...size },
  )
}
