import Link from 'next/link'
import { featuredSlugs, projects, requireProject } from '@/data/projects'
import { PageFrame } from '@/components/PageFrame'
import { ProjectCard } from '@/components/ProjectCard'
import { site, textLinkClass } from '@/lib/site'

const also = ['matakite', 'electrascan', 'ares'] as const

const practice = [
  {
    title: 'One practice',
    body: 'I design the interface and engineer the build. The lab is the set of proofs of concept I can show.',
  },
  {
    title: 'The label matches the build',
    body: 'Demo means synthetic or teaching data. Simulated means no live sensors. Parked means it is not maintained. Private means it stays unlinked.',
  },
  {
    title: 'Not for clinical use',
    body: 'Health work on this site is a research demo. It is not a medical device and not for clinical use.',
  },
]

export default function HomePage() {
  const featured = featuredSlugs.map((slug) => requireProject(slug))
  const rest = also.map((slug) => requireProject(slug))

  return (
    <PageFrame>
      <section className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Portfolio</p>
        <h1 className="mt-4 font-serif text-[3.15rem] leading-[0.95] tracking-[-0.03em] text-ink [text-wrap:balance] sm:text-7xl">
          Designer-engineer
          <span className="mt-2 block italic text-pine">building AI products.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          I design and engineer proofs of concept across health, geospatial operations, markets, and sport. The lab labels each one by what it actually is.
        </p>
        <p className="mt-4 text-base font-medium text-ink">Open to AI product and engineering roles.</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/lab"
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-paper"
          >
            View the lab
          </Link>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={textLinkClass}>
            LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>

      <section className="mt-20" aria-labelledby="selected-work">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 id="selected-work" className="font-serif text-3xl tracking-[-0.02em] text-ink sm:text-4xl">
            Selected work
          </h2>
          <Link href="/lab" className={textLinkClass}>
            All {projects.length}
          </Link>
        </div>
        <ul className="grid gap-6 lg:grid-cols-2">
          {featured.map((project) => (
            <li key={project.slug} className="h-full">
              <ProjectCard project={project} headingLevel="h3" />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20 border-t border-line pt-12" aria-labelledby="also">
        <h2 id="also" className="font-serif text-3xl tracking-[-0.02em] text-ink">
          Also
        </h2>
        <dl className="mt-8 divide-y divide-line border-y border-line">
          {rest.map((project) => (
            <div key={project.slug} className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr] sm:gap-8">
              <dt className="font-medium text-ink">
                <Link href={`/lab/${project.slug}`} className={textLinkClass}>
                  {project.title}
                </Link>
              </dt>
              <dd className="text-sm leading-relaxed text-muted">{project.problem}</dd>
            </div>
          ))}
          <div className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr] sm:gap-8">
            <dt className="font-medium text-ink">PLÉO</dt>
            <dd className="text-sm leading-relaxed text-muted">
              Premium recovery kits for dance athletes. Direct-to-consumer physical product.
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-20" aria-labelledby="how-i-work">
        <h2 id="how-i-work" className="font-serif text-3xl tracking-[-0.02em] text-ink">
          How I work
        </h2>
        <ol className="mt-8 grid gap-8 md:grid-cols-3">
          {practice.map((item, index) => (
            <li key={item.title}>
              <p className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 text-lg font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </PageFrame>
  )
}
