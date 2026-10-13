import { HEALTH_DISCLAIMER } from '@/data/projects'

export function HealthNote({ className = '' }: { className?: string }) {
  return (
    <p
      role="note"
      className={`border-l-2 border-pine bg-[#f3f7f6] px-3 py-2 text-sm leading-relaxed text-ink ${className}`}
    >
      {HEALTH_DISCLAIMER}
    </p>
  )
}
