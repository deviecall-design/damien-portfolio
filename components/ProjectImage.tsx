import Image from 'next/image'
import type { ProjectImage as ProjectImageType } from '@/data/projects'

export function ProjectImage({
  image,
  crop = false,
  sizes,
}: {
  image: ProjectImageType
  crop?: boolean
  sizes: string
}) {
  const fit =
    image.focus === 'center' || (!image.focus && image.kind === 'cover')
      ? 'object-cover object-center'
      : 'object-cover object-top'

  if (crop) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-[#ebe6de]">
        <Image src={image.src} alt={image.alt} fill className={fit} sizes={sizes} />
      </div>
    )
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className="h-auto w-full bg-[#ebe6de]"
      sizes={sizes}
    />
  )
}
