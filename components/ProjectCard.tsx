import Link from 'next/link'

export interface ProjectCardProps {
  id: string
  title: string
  tagline: string
  description: string
  tags: string[]
  status: 'Production' | 'Active' | 'Research' | 'Commercial'
  link?: string
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
  onLearnMore,
}: ProjectCardProps) {
  const isExternal = link && link.startsWith('http')
  
  const handleClick = () => {
    if (onLearnMore) {
      onLearnMore()
    }
  }

  const baseContent = (
    <div className="h-full border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-all bg-gradient-to-br from-gray-50 to-white group cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 group-hover:text-gray-700 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {tagline}
          </p>
        </div>
        <span className={`text-xs font-mono px-3 py-1 rounded whitespace-nowrap ml-2 ${statusColors[status]}`}>
          {status}
        </span>
      </div>

      <p className="text-gray-700 text-sm leading-relaxed mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 border border-gray-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="text-gray-600 group-hover:text-gray-700 transition-colors text-sm">
        {isExternal ? 'Visit →' : 'Learn more →'}
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
