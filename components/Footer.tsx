import Link from 'next/link'
import { projects } from '@/data/projects'
import { site } from '@/data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-8 border-t border-line">
      <div className="mx-auto grid max-w-page gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="font-serif text-2xl tracking-tight">{site.name}</p>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">{site.role}</p>
          <p className="max-w-sm text-sm leading-relaxed text-ink-muted">{site.openTo}</p>
        </div>
        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-ink-muted">Lab</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={`/lab/${project.slug}`} className="text-ink-soft hover:text-ink">
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-ink-muted">Connect</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/work" className="text-ink-soft hover:text-ink">
                Work
              </Link>
            </li>
            <li>
              <Link href="/research" className="text-ink-soft hover:text-ink">
                Research
              </Link>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft hover:text-ink"
              >
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft hover:text-ink"
              >
                GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-ink-soft hover:text-ink">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-page flex-col gap-2 px-5 py-5 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Health prototypes are research demos, not medical devices.</p>
          <p>
            &copy; {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
