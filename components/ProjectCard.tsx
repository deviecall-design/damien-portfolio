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
  Production: 'bg-emerald-900 text-emerald-200',
  Active: 'bg-blue-900 text-blue-200',
  Research: 'bg-purple-900 text-purple-200',
  Commercial: 'bg-amber-900 text-amber-200',
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
    <div className="h-full border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all bg-gradient-to-br from-gray-900 to-black group cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            {tagline}
          </p>
        </div>
        <span className={`text-xs font-mono px-3 py-1 rounded whitespace-nowrap ml-2 ${statusColors[status]}`}>
          {status}
        </span>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300 border border-gray-700">
            {tag}
          </span>
        ))}
      </div>

      <div className="text-gray-500 group-hover:text-gray-400 transition-colors text-sm">
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
