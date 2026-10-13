import Link from 'next/link'
import { site } from '@/lib/site'
import { DesktopNav, MobileMenu } from './SiteNav'

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold tracking-tight text-ink">
          {site.name}
        </Link>
        <div className="flex items-center gap-6">
          <DesktopNav />
          <div className="hidden items-center gap-4 text-sm md:flex">
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink">
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink">
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
