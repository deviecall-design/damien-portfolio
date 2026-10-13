import Link from 'next/link'
import { projects } from '@/data/projects'
import { site, textLinkClass } from '@/lib/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-ink">Pages</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className={textLinkClass}>Home</Link></li>
            <li><Link href="/lab" className={textLinkClass}>Lab</Link></li>
            <li><Link href="/work" className={textLinkClass}>Work</Link></li>
            <li><Link href="/research" className={textLinkClass}>Research</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Lab</p>
          <ul className="mt-4 space-y-2 text-sm">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={`/lab/${project.slug}`} className={textLinkClass}>
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Connect</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={textLinkClass}>
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className={textLinkClass}>
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={textLinkClass}>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {year} {site.name}</p>
        <p>Built with Next.js. Deployed on Vercel.</p>
      </div>
    </footer>
  )
}
