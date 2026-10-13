import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { ComponentType } from 'react'
import { CaseStudy } from '@/components/CaseStudy'
import { getProject, projects } from '@/data/projects'
import Ares from '@/content/lab/ares.mdx'
import EchoOncology from '@/content/lab/echo-oncology.mdx'
import ElectraScan from '@/content/lab/electrascan.mdx'
import EmberEcho from '@/content/lab/ember-echo.mdx'
import EmberSwarm from '@/content/lab/ember-swarm.mdx'
import Matakite from '@/content/lab/matakite.mdx'
import MiroFish from '@/content/lab/mirofish-trader.mdx'

const studies: Record<string, ComponentType> = {
  'echo-oncology': EchoOncology,
  'ember-echo': EmberEcho,
  'ember-swarm': EmberSwarm,
  'mirofish-trader': MiroFish,
  matakite: Matakite,
  electrascan: ElectraScan,
  ares: Ares,
}

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug)
  if (!project) return { title: 'Not found' }
  const description =
    project.theme === 'health'
      ? `${project.problem} Research demo. Not a medical device. Not for clinical use.`
      : project.problem
  return {
    title: project.title,
    description,
    alternates: { canonical: `/lab/${project.slug}` },
    openGraph: {
      title: project.title,
      description,
      url: `/lab/${project.slug}`,
    },
  }
}

export default function LabCaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  const Content = studies[params.slug]
  if (!project || !Content) notFound()
  return (
    <CaseStudy project={project}>
      <Content />
    </CaseStudy>
  )
}
