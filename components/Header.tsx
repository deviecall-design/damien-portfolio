import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { site } from '@/data/site'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-page flex-col gap-1 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link href="/" className="font-serif text-[1.45rem] leading-none tracking-tight">
          {site.name}
        </Link>
        <div className="flex flex-wrap items-center gap-x-6">
          <Nav />
          <nav aria-label="Contact" className="flex gap-4 text-sm">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-ink-muted hover:text-ink"
            >
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-ink-muted hover:text-ink"
            >
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
