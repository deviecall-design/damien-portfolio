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
        <div className="mb-16 space-y-8">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight">
              Founder and operator building ventures that ship.
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              No large team. Just me, Claude Sonnet, Codex, and OpenClaw running 24/7. Building AI defense infrastructure, cardiac detection, electrical SaaS, recovery products. Exiting corporate this year.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Why Founder, Not Corporate</h2>
            <p className="text-gray-600 max-w-3xl">
              Corporate scales people. Ventures scale ideas. I wear every hat — product, code, GTM, ops. When I see a problem, I build it. When I ship, I own the outcome. That optionality and velocity beats title and politics. My network is the only moat that matters. Depth over credentials.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Current Ventures</h2>
            <div className="text-gray-600 max-w-3xl space-y-3">
              <p><strong>God's Eye:</strong> Global ops intelligence platform for real-time mission-critical tracking across fires, distributed assets, and autonomous deployments. Defense-grade sensor fusion from edge to command.</p>
              <p><strong>Ember Echo:</strong> Detects pre-symptomatic cardiac signal — up to 14 hours before onset — using ECG, SpO2, HRV, blood pressure, and EHR data. No new hardware required. Healthcare at the speed of ML.</p>
              <p><strong>ElectraScan:</strong> AI estimating for Australian electricians. Automates Bill of Materials generation and tracks total order value in dollars. Real-time pricing for copper, cable, and commodity-linked materials. SaaS with teeth.</p>
              <p><strong>PLÉO:</strong> Premium recovery kits for dance athletes. Direct-to-consumer physical product. Built distribution model and unit economics that scale.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">What's Next</h2>
            <p className="text-gray-600 max-w-3xl">
              Not managing. Leading. High pace. Clear impact. Sharp teams and co-founders who think differently. Open to scaling current ventures or founding the next — depends on the problem and the people. If you're shipping something hard, let's talk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">How I Work</h2>
            <p className="text-gray-600 max-w-3xl">
              Full-stack execution. Team scaling from founding to product-market fit. GTM velocity. Extreme bias toward shipping. Better done than perfect. Built with code, design, and AI infrastructure that moves faster than traditional teams.
            </p>
          </div>
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
