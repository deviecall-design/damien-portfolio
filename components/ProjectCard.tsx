import Link from 'next/link'

export interface ProjectCardProps {
  id: string
  title: string
  tagline: string
  description: string
  tags: string[]
  status: 'Production' | 'Active' | 'Research' | 'Commercial'
  link?: string
  image?: string
  imagePosition?: string
  onLearnMore?: () => void
}

const statusColors = {
  Production: 'bg-emerald-100 text-emerald-800',
  Active: 'bg-blue-100 text-blue-800',
  Research: 'bg-purple-100 text-purple-800',
  Commercial: 'bg-amber-100 text-amber-800',
}

export function ProjectCard({
  title,
  tagline,
  description,
  tags,
  status,
  link,
  image,
  imagePosition,
  onLearnMore,
}: ProjectCardProps) {
  const isExternal = link && link.startsWith('http')
  
  const handleClick = () => {
    if (onLearnMore) {
      onLearnMore()
    }
  }

  const baseContent = (
    <div className="h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all bg-white group cursor-pointer flex flex-col">
      {image && (
        <div className="w-full h-48 overflow-hidden bg-gray-100">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" style={imagePosition ? { objectPosition: imagePosition } : undefined} />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-gray-700 transition-colors">
                {title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {tagline}
              </p>
            </div>
            <span className={`text-xs font-mono px-3 py-1 rounded whitespace-nowrap ml-2 ${statusColors[status]}`}>
              {status}
            </span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600 border border-gray-200">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="text-gray-400 group-hover:text-gray-700 transition-colors text-sm">
          {isExternal ? 'Visit →' : 'Learn more →'}
        </div>
      </div>
    </div>
  )

  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {baseContent}
      </a>
    )
  }

  return (
    <button onClick={handleClick} className="w-full text-left">
      {baseContent}
    </button>
  )
}
