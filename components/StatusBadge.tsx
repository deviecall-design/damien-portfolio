import { STATUS_HELP, type Status } from '@/data/projects'

const styles: Record<Status, string> = {
  Live: 'bg-[#dceee4] text-[#0c3d2e]',
  Demo: 'bg-[#e3eaf6] text-[#1a365d]',
  Simulated: 'bg-[#f8efd4] text-[#5c3b09]',
  Parked: 'bg-[#eceae4] text-[#3f3c37]',
  Private: 'bg-[#efe6f6] text-[#43265f]',
  'Screenshots only': 'bg-[#e6e8ee] text-[#243044]',
}

export function StatusBadge({
  status,
  described = true,
}: {
  status: Status
  described?: boolean
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide ${styles[status]}`}
    >
      {status}
      {described ? <span className="sr-only">. {STATUS_HELP[status]}</span> : null}
    </span>
  )
}

export function ComingSoonBadge() {
  return (
    <span className="inline-flex items-center rounded-full bg-[#f3efe6] px-2.5 py-1 text-xs font-medium tracking-wide text-[#4a4338]">
      Details coming soon
    </span>
  )
}
