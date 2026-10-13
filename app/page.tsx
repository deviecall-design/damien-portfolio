import type { Metadata } from 'next'
import Link from 'next/link'
import { PageMain } from '@/components/PageMain'
import { ProjectCard } from '@/components/ProjectCard'
import { featuredProjects } from '@/data/projects'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: `${site.name} — Designer-engineer`,
  description: `${site.role} ${site.description}`,
  alternates: { canonical: '/' },
  openGraph: {
    title: `${site.name} — Designer-engineer`,
    description: `${site.role} ${site.description}`,
    url: '/',
  },
}

const principles = [
  {
    title: 'Design and engineering',
    body: 'The prototypes are drawn and built as products, from the interface through to a working demo.',
  },
  {
    title: 'Plain status',
    body: 'Each lab card says whether the work is a demo, a simulation, parked, private, or still only screenshots.',
  },
  {
    title: 'Open to roles',
    body: 'AI product and engineering roles, and conversations about the prototypes themselves.',
  },
]

export default function HomePage() {
  const featured = featuredProjects()

  return (
    <PageMain>
      <section className="mx-auto max-w-page px-5 pb-8 pt-16 sm:px-8 sm:pt-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-pine">Portfolio</p>
        <h1 className="mt-4 max-w-4xl font-serif text-[clamp(2.8rem,7vw,5.4rem)] leading-[0.98] tracking-tight">
          Designer-engineer
          <span className="block italic text-pine">building AI products.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          I design and build proofs of concept, and I label what is real. The lab collects that
          work across health, geospatial systems, fintech, and sport. {site.openTo}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/lab"
            className="inline-flex min-h-11 items-center rounded-full bg-pine px-5 text-sm font-medium text-paper hover:bg-pine-deep"
          >
            Browse the lab
          </Link>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full border border-line bg-[#fffcf7] px-5 text-sm font-medium hover:border-ink"
          >
            LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-12 sm:px-8" aria-labelledby="selected-heading">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 id="selected-heading" className="font-serif text-3xl tracking-tight sm:text-4xl">
            Selected proofs
          </h2>
          <Link href="/lab" className="text-sm underline decoration-line underline-offset-4 hover:text-pine">
            All proofs
          </Link>
        </div>
        <ul className="grid gap-5 md:grid-cols-2">
          {featured.map((project) => (
            <li key={project.slug} className="h-full">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-ink-soft">
          Also in the lab:{' '}
          <Link href="/lab/matakite" className="underline decoration-line underline-offset-4 hover:text-pine">
            Matakite
          </Link>
          ,{' '}
          <Link href="/lab/electrascan" className="underline decoration-line underline-offset-4 hover:text-pine">
            ElectraScan
          </Link>
          , and{' '}
          <Link href="/lab/ares" className="underline decoration-line underline-offset-4 hover:text-pine">
            Ares
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-page px-5 py-8 sm:px-8" aria-labelledby="pleo-heading">
        <div className="rounded-2xl border border-line bg-[#fffcf7] px-6 py-8 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink-muted">Physical product</p>
          <h2 id="pleo-heading" className="mt-3 font-serif text-4xl tracking-tight">
            PLÉO
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">{site.pleo}</p>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-12 sm:px-8" aria-labelledby="work-heading">
        <h2 id="work-heading" className="font-serif text-3xl tracking-tight sm:text-4xl">
          How I work
        </h2>
        <ul className="mt-8 grid gap-8 md:grid-cols-3">
          {principles.map((item) => (
            <li key={item.title} className="border-t border-line pt-4">
              <h3 className="font-serif text-2xl tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </PageMain>
  )
}
