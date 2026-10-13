import { STATUS_HELP, type Status } from '@/data/projects'

const statusClass: Record<Status, string> = {
  Live: 'bg-[#e5f4ec] text-[#0d5c3d]',
  Demo: 'bg-[#e7eef8] text-[#1a3f73]',
  Simulated: 'bg-[#f8f0dc] text-[#6a4b12]',
  Parked: 'bg-[#eeeae4] text-[#3f3b36]',
  Private: 'bg-[#f3e8f1] text-[#6b2d5b]',
  'Screenshots only': 'bg-[#e8e6f2] text-[#3d3a6b]',
  'Details coming soon': 'bg-[#f4eee6] text-[#5c4a32]',
}

export function StatusBadge({ status }: { status: Status }) {
  const help = STATUS_HELP[status]
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium leading-none shadow-sm ${statusClass[status]}`}
      title={help}
    >
      {status}
      <span className="sr-only">. {help}</span>
    </span>
  )
}
