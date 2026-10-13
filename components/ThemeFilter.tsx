import Link from 'next/link'
import { THEMES, type ThemeId } from '@/data/projects'

const options: { id: ThemeId | null; label: string; href: string }[] = [
  { id: null, label: 'All', href: '/lab' },
  ...THEMES.map((theme) => ({
    id: theme.id,
    label: theme.label,
    href: `/lab?theme=${theme.id}`,
  })),
]

export function ThemeFilter({ current }: { current: ThemeId | null }) {
  return (
    <nav aria-label="Filter by theme">
      <ul className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = option.id === current
          return (
            <li key={option.label}>
              <Link
                href={option.href}
                scroll={false}
                aria-current={active ? 'true' : undefined}
                className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm ${
                  active
                    ? 'border-ink bg-ink text-paper'
                    : 'border-line bg-[#fffcf7] text-ink hover:border-ink'
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
