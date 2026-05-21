'use client'

import { useState } from 'react'
import { ProjectCard, type ProjectCardProps } from '@/components/ProjectCard'
import { ProjectModal } from '@/components/ProjectModal'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { modalContents } from '@/lib/modalContent'

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const projects: ProjectCardProps[] = [
    {
      id: 'gods-eye',
      title: 'God\'s Eye',
      tagline: 'Global Ops Intelligence Platform',
      description: 'Real-time global ops platform for mission-critical environments. Live tracking across fires, distributed assets, and autonomous drone deployments. Defense-grade sensor fusion from edge to command.',
      tags: ['Distributed Systems', 'Real-time Processing', 'Sensor Fusion'],
      status: 'Production',
      image: '/press-images/godseye-hero.jpg',
      imagePosition: '50% 50%',
      onLearnMore: () => setActiveModal('gods-eye')
    },
    {
      id: 'ghost-murmur',
      title: 'Ember Echo',
      tagline: 'Cardiac AI / Early Detection',
      description: 'Detects the pre-symptomatic cardiac signal — up to 14 hours before onset. Runs on existing clinical data: ECG, SpO2, HRV, blood pressure, EHR. No new hardware required.',
      tags: ['AI Research', 'Healthcare Tech', 'Distributed Sensors'],
      status: 'Research',
      image: '/press-images/ember-echo-hero.jpg',
      imagePosition: 'center center',
      onLearnMore: () => setActiveModal('ghost-murmur')
    },
    {
      id: 'foundry-work',
      title: 'Foundry & OSDK',
      tagline: 'Enterprise Data Orchestration',
      description: 'Custom ontology design and Palantir AIP integrations. Data model architecture for complex operational environments.',
      tags: ['Palantir', 'OSDK', 'Data Architecture'],
      status: 'Production',
      image: '/press-images/palantir-hospitals-digital-twin.png',
      imagePosition: 'center center',
      onLearnMore: () => setActiveModal('foundry-work')
    },
    {
      id: 'ember',
      title: 'Ember',
      tagline: 'Multi-Agent Orchestration',
      description: 'Advanced swarm intelligence and distributed AI agent coordination. Autonomous task execution and knowledge sharing.',
      tags: ['AI Agents', 'Swarm Intelligence', 'Orchestration'],
      status: 'Production',
      image: '/press-images/ember-anduril-hero.png',
      imagePosition: 'center center',
      onLearnMore: () => setActiveModal('ember')
    },
    {
      id: 'mirofish',
      title: 'MiroFish',
      tagline: 'Swarm Intelligence Market Prediction',
      description: 'Multi-agent swarm simulation for market sentiment prediction. Distributed consensus protocols modeling investor behavior and collective decision-making.',
      tags: ['Swarm Intelligence', 'Market Analysis', 'Prediction'],
      status: 'Production',
      image: '/press-images/mirofish-hero.jpg',
      imagePosition: 'center center',
      onLearnMore: () => setActiveModal('mirofish')
    },
    {
      id: 'electrascan',
      title: 'ElectraScan',
      tagline: 'AI Estimating SaaS for Electrical Contractors',
      description: 'Automates Bill of Materials generation for Australian electricians. Tracks total order value in dollars — not metres. Real-time pricing for copper, cable, and petroleum-linked materials.',
      tags: ['SaaS', 'ML Estimating', 'B2B'],
      status: 'Commercial',
      image: '/press-images/electrascan-hero.png',
      imagePosition: '50% 30%',
      onLearnMore: () => setActiveModal('electrascan')
    }
  ]

  const activeContent = activeModal ? modalContents[activeModal] : null

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      
      <section className="px-4 sm:px-8 lg:px-16 py-20 max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Founder and operator<br />building ventures that ship.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Running four in-flight plays — AI defense infrastructure, cardiac detection, electrical SaaS, and recovery products. Exiting corporate this year to go full-time on the portfolio.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <Footer />

      {activeContent && activeModal && (
        <ProjectModal
          content={activeContent}
          projectId={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}
    </main>
  )
}
