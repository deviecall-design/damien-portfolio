'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { site } from '@/lib/site'

const links = [
  { href: '/lab', label: 'Lab' },
  { href: '/work', label: 'Work' },
  { href: '/research', label: 'Research' },
]

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function DesktopNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Primary" className="hidden items-center gap-8 text-sm md:flex">
      {links.map((link) => {
        const active = isActive(pathname, link.href)
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? 'page' : undefined}
            className={active ? 'text-ink' : 'text-muted hover:text-ink'}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}

export function MobileMenu() {
  const pathname = usePathname()
  const detailsRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    if (detailsRef.current) detailsRef.current.open = false
  }, [pathname])

  const close = () => {
    if (detailsRef.current) detailsRef.current.open = false
  }

  return (
    <details ref={detailsRef} className="relative md:hidden">
      <summary className="cursor-pointer list-none rounded-full border border-line px-3 py-2 text-sm text-ink">
        Menu
      </summary>
      <div className="absolute right-0 z-40 mt-2 w-56 rounded-2xl border border-line bg-card p-3 shadow-sm">
        <nav aria-label="Primary mobile" className="flex flex-col">
          {links.map((link) => {
            const active = isActive(pathname, link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                onClick={close}
                className={`rounded-lg px-3 py-3 text-sm ${active ? 'text-ink' : 'text-muted'}`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="mt-2 flex flex-col border-t border-line pt-2">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg px-3 py-3 text-sm text-muted">
            LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="rounded-lg px-3 py-3 text-sm text-muted">
            GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </details>
  )
}
