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
      tagline: 'Full-Spectrum Operational Awareness',
      description: 'Real-time sensor orchestration and distributed intelligence fusion across heterogeneous networks.',
      tags: ['Distributed Systems', 'Real-time Processing', 'Sensor Fusion'],
      status: 'Production',
      image: '/press-images/godseye-globe.jpg',
      imagePosition: '50% 65%',
      onLearnMore: () => setActiveModal('gods-eye')
    },
    {
      id: 'lattice-integration',
      title: 'Lattice Integration',
      tagline: 'Autonomous Asset Coordination',
      description: 'Custom ontology and autonomous coordination layer built on Anduril\'s C2 platform. Advanced AIP orchestration.',
      tags: ['Anduril', 'Autonomous Systems', 'C2 Integration'],
      status: 'Active',
      image: '/press-images/menace-1-container.jpg',
      onLearnMore: () => setActiveModal('lattice-integration')
    },
    {
      id: 'ghost-murmur',
      title: 'Ember Echo',
      tagline: 'Applied Cardiac AI Research',
      description: 'Distributed sensor mesh for real-time physiological monitoring. Research initiative in partnership with leading medical institutions.',
      tags: ['AI Research', 'Healthcare Tech', 'Distributed Sensors'],
      status: 'Research',
      image: '/press-images/echo-hero.jpg',
      imagePosition: 'center bottom',
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
      onLearnMore: () => setActiveModal('foundry-work')
    },
    {
      id: 'ember',
      title: 'Ember',
      tagline: 'Multi-Agent Orchestration',
      description: 'Advanced swarm intelligence and distributed AI agent coordination. Autonomous task execution and knowledge sharing.',
      tags: ['AI Agents', 'Swarm Intelligence', 'Orchestration'],
      status: 'Production',
      image: '/press-images/ember-hero.jpg',
      onLearnMore: () => setActiveModal('ember')
    },
    {
      id: 'mirofish',
      title: 'MiroFish',
      tagline: 'Swarm Intelligence Market Prediction',
      description: 'Multi-agent swarm simulation for market sentiment prediction. Distributed consensus protocols modeling investor behavior and collective decision-making.',
      tags: ['Swarm Intelligence', 'Market Analysis', 'Prediction'],
      status: 'Production',
      onLearnMore: () => setActiveModal('mirofish')
    },
    {
      id: 'electrascan',
      title: 'ElectraScan',
      tagline: 'AI Cost Estimating SaaS',
      description: 'Machine learning-powered cost estimation for electrical contracting. Live commercial product for Australian market.',
      tags: ['SaaS', 'ML Estimating', 'B2B'],
      status: 'Commercial',
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
            Advanced AI Systems <br />& Distributed Architecture
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Enterprise-grade platforms for autonomous coordination, real-time intelligence, and distributed AI orchestration.
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
