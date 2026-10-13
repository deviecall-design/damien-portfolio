import Link from 'next/link'
import { themeLabels, themes, type Theme } from '@/data/projects'

const options: { id: Theme | 'all'; label: string; href: string }[] = [
  { id: 'all', label: 'All', href: '/lab' },
  ...themes.map((theme) => ({
    id: theme,
    label: themeLabels[theme],
    href: `/lab?theme=${theme}`,
  })),
]

export function ThemeFilter({ current }: { current: Theme | 'all' }) {
  return (
    <nav aria-label="Filter by theme">
      <ul className="flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = option.id === current
          return (
            <li key={option.id}>
              <Link
                href={option.href}
                aria-current={selected ? 'true' : undefined}
                className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm ${
                  selected
                    ? 'border-ink bg-ink text-paper'
                    : 'border-line bg-card text-ink hover:border-ink'
                }`}
              >
                {option.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
