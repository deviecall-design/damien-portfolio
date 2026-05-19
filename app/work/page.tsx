'use client'

import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

interface Highlight {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
}

export default function WorkPage() {
  const highlights: Highlight[] = [
    {
      id: 'gods-eye-1',
      title: "God's Eye — Operational Awareness",
      description: 'Real-time sensor fusion and distributed intelligence. NSW emergency response operations.',
      image: '/godseye_f001.png',
      tags: ['Sensors', 'Real-time', 'Distributed Systems'],
    },
    {
      id: 'gods-eye-2',
      title: "God's Eye — Multi-Source Integration",
      description: 'Sensor mesh aggregation with high-confidence fusion across heterogeneous networks.',
      image: '/godseye_f120.png',
      tags: ['Intelligence', 'Fusion', 'Coordination'],
    },
    {
      id: 'gods-eye-3',
      title: "God's Eye — Dynamic Tracking",
      description: 'Real-time asset coordination and situational awareness across operational theatre.',
      image: '/godseye_f180.png',
      tags: ['Asset Tracking', 'C2', 'Real-time'],
    },
    {
      id: 'gods-eye-4',
      title: "God's Eye — Command Integration",
      description: 'Command and control integration with autonomous decision-making capabilities.',
      image: '/godseye_f240.png',
      tags: ['Autonomy', 'C2', 'Decision Making'],
    },
    {
      id: 'gods-eye-5',
      title: "God's Eye — Distributed Consensus",
      description: 'Multi-agent consensus protocols enabling autonomous coordination at scale.',
      image: '/godseye_f300.png',
      tags: ['Consensus', 'Autonomous', 'Distributed'],
    },
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <Header />

      <section className="flex-1 px-4 sm:px-8 lg:px-16 py-20 max-w-6xl mx-auto w-full">
        <div className="mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Selected Engagements
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Production systems and operational deployments. Sanitised for display.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-max">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-lg border border-gray-800 hover:border-gray-700 transition-colors bg-black"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-gray-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 group-hover:text-gray-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-6 rounded-lg border border-gray-800 bg-gradient-to-r from-gray-900 to-black text-center">
          <p className="text-gray-400 text-sm mb-3">
            Additional artefacts available under NDA.
          </p>
          <p className="text-gray-500 text-xs">
            Restricted engagement. Contact for full access.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
