import { HEALTH_DISCLAIMER } from '@/data/projects'

export function HealthDisclaimer() {
  return (
    <p
      role="note"
      className="rounded-xl border border-[#d7c4a4] bg-[#f8f1e4] px-3 py-2 text-sm leading-relaxed text-[#3f3424]"
    >
      {HEALTH_DISCLAIMER}
    </p>
  )
}
