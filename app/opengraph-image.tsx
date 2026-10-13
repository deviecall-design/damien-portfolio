import { ImageResponse } from 'next/og'
import { OgCard } from '@/lib/ogCard'
import { site } from '@/data/site'

export const alt = 'Damien Callaghan, designer-engineer building AI products'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    OgCard({
      kicker: 'DAMIEN CALLAGHAN',
      title: site.role,
      footer: 'Proofs of concept, labelled honestly.',
    }),
    { ...size },
  )
}
