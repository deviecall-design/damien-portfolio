import type { Diagram } from '@/data/projects'

export function FlowDiagram({ diagram }: { diagram: Diagram }) {
  return (
    <figure className="mt-6">
      <ol className="grid gap-3 sm:grid-cols-3">
        {diagram.steps.map((step, index) => (
          <li key={step.title} className="rounded-2xl border border-line bg-paper p-4">
            <p className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</p>
            <p className="mt-2 font-medium text-ink">{step.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{step.detail}</p>
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 text-sm leading-relaxed text-muted">{diagram.caption}</figcaption>
    </figure>
  )
}
