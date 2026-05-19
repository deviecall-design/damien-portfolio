import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const stories = [
  {
    id: 'gods-eye',
    chapter: '01',
    title: "God's Eye",
    headline: 'When every second counts, blind spots cost lives.',
    narrative:
      'We built a distributed sensor intelligence platform that fuses data from heterogeneous networks into a single, real-time operational picture. Deployed across NSW emergency response operations — tracking assets, detecting anomalies, and surfacing decisions before humans knew they needed them.',
    image: '/godseye_f001.png',
    tags: ['Sensor Fusion', 'Distributed Systems', 'Real-time Intelligence'],
    cta: 'Explore →',
    align: 'left',
  },
  {
    id: 'ember',
    chapter: '02',
    title: 'Ember',
    headline: 'Eight agents. One objective. No supervisor.',
    narrative:
      'A multi-agent swarm orchestration engine built for environments where central control is a liability. Ember coordinates distributed AI agents using consensus protocols — each one autonomous, collectively unstoppable. Designed for operational scenarios where latency and failure tolerance are non-negotiable.',
    image: '/godseye_f120.png',
    tags: ['Swarm Intelligence', 'Autonomous Systems', 'Multi-Agent AI'],
    cta: 'Explore →',
    align: 'right',
  },
  {
    id: 'lattice',
    chapter: '03',
    title: 'Lattice Integration',
    headline: 'Anduril built the platform. We pushed it further.',
    narrative:
      'Custom ontology design and autonomous coordination layer on top of Anduril\'s C2 infrastructure. Built for edge environments where connectivity is intermittent, decisions are irreversible, and latency is measured in milliseconds — not seconds.',
    image: '/godseye_f180.png',
    tags: ['Anduril', 'Autonomous Coordination', 'Edge AI'],
    cta: 'Explore →',
    align: 'left',
  },
  {
    id: 'electrascan',
    chapter: '04',
    title: 'ElectraScan',
    headline: 'Australian electricians were quoting blind. Not anymore.',
    narrative:
      'An AI-powered estimating platform that reads electrical plans and generates complete cost estimates in seconds. Live commercial product. Early customers are booking more jobs, reducing quote time by 80%, and winning more bids with margin confidence they\'ve never had before.',
    image: '/godseye_f240.png',
    tags: ['SaaS', 'AI Estimation', 'Construction Tech'],
    cta: 'Explore →',
    align: 'right',
  },
]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <Header />

      {/* Hero */}
      <section className="px-4 sm:px-8 lg:px-16 pt-20 pb-8 max-w-6xl mx-auto w-full">
        <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-none tracking-tight">
          Work
        </h1>
        <p className="text-gray-500 text-xl max-w-xl border-l-2 border-gray-700 pl-4">
          We build systems that operate where failure is not an option.
        </p>
      </section>

      {/* Story sections */}
      <section className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-8 lg:px-16 pb-20 space-y-32">
        {stories.map((story) => (
          <div
            key={story.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
              story.align === 'right' ? 'lg:grid-flow-dense' : ''
            }`}
          >
            {/* Image */}
            <div
              className={`relative aspect-[4/3] overflow-hidden bg-gray-900 ${
                story.align === 'right' ? 'lg:col-start-2' : ''
              }`}
            >
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Copy */}
            <div className={story.align === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}>
              <p className="text-gray-600 text-xs font-mono mb-4 tracking-widest">
                {story.chapter}
              </p>
              <h2 className="text-4xl font-bold mb-4">{story.title}</h2>
              <p className="text-xl text-gray-300 font-medium mb-6 leading-snug">
                {story.headline}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {story.narrative}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-gray-900 text-gray-400 border border-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center text-sm text-white hover:text-gray-300 transition-colors border-b border-gray-600 hover:border-gray-400 pb-0.5"
              >
                {story.cta}
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* NDA footer */}
      <div className="border-t border-gray-900 px-4 sm:px-8 lg:px-16 py-6 max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-between">
          <p className="text-gray-700 text-xs font-mono">
            Additional artefacts available under NDA
          </p>
          <a
            href="https://www.linkedin.com/in/damiencallaghan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white text-xs transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
