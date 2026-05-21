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
      'NSW emergency response was operating in the dark. During major incidents — fires, floods, multi-asset coordination — field teams had no unified view of the operational landscape. Decisions that needed to happen in minutes were taking hours. We built a distributed sensor intelligence platform that fuses data from heterogeneous networks into a single, real-time operational picture. The platform tracks assets, detects anomalies, and surfaces critical decisions before humans even knew they needed them. Result: emergency response teams reduced incident assessment time from hours to minutes, enabling faster resource allocation and potentially saving lives.',
    image: '/press-images/godseye-hero.jpg',
    imagePosition: '50% 65%',
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
      'In denied environments — areas without reliable comms infrastructure — centralized control falls apart. Traditional command-and-control systems rely on constant contact with a supervisor. We built Ember, a multi-agent swarm orchestration engine that throws that assumption away. Ember coordinates distributed AI agents using pure consensus protocols, with no central authority. Each agent is fully autonomous, makes its own decisions, and the collective achieves complex objectives without ever checking in with a human. Impact: decentralized decision-making at scale, even when communications are jammed, severed, or unavailable.',
    image: '/press-images/ember-anduril-hero.png',
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
      'Anduril built a powerful command-and-control platform. We pushed it further. The challenge: edge environments where connectivity is intermittent, decisions are irreversible, and latency is measured in milliseconds. We designed a custom ontology and autonomous coordination layer that sits on top of their C2 infrastructure, enabling real-time decision-making without waiting for network conditions to be perfect. The system can operate autonomously when disconnected and re-synchronize intelligently when contact is restored. Impact: autonomous coordination in the harshest operational environments — where humans cannot be present and milliseconds determine outcomes.',
    image: '/press-images/lattice-container.jpg',
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
      'Australian electricians were trapped in an analog workflow: reading printed plans by hand, manually calculating labor and materials, writing estimates on the job. It was slow, error-prone, and cost them bids. ElectraScan solves this with AI that reads electrical plans instantly and generates complete, accurate cost estimates in seconds. The platform is live and in commercial production. Early customers are reporting 80% reduction in quote time, significantly higher bid conversion rates, and genuine margin confidence — a metric they\'ve never had before. Impact: electricians can quote faster, bid more often, and win more work.',
    image: '/press-images/electrascan-hero.png',
    tags: ['SaaS', 'AI Estimation', 'Construction Tech'],
    cta: 'Explore →',
    align: 'right',
  },
]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />

      {/* Hero */}
      <section className="px-4 sm:px-8 lg:px-16 pt-20 pb-8 max-w-6xl mx-auto w-full">
        <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-none tracking-tight text-gray-900">
          Work
        </h1>
        <p className="text-gray-600 text-xl max-w-xl border-l-2 border-gray-200 pl-4">
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
              className={`relative aspect-[4/3] overflow-hidden bg-gray-100 ${
                story.align === 'right' ? 'lg:col-start-2' : ''
              }`}
            >
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={story.imagePosition ? { objectPosition: story.imagePosition } : undefined}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Copy */}
            <div className={story.align === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}>
              <p className="text-gray-500 text-xs font-mono mb-4 tracking-widest">
                {story.chapter}
              </p>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">{story.title}</h2>
              <p className="text-xl text-gray-700 font-medium mb-6 leading-snug">
                {story.headline}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {story.narrative}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center text-sm text-gray-900 hover:text-gray-600 transition-colors border-b border-gray-300 hover:border-gray-500 pb-0.5"
              >
                {story.cta}
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* NDA footer */}
      <div className="border-t border-gray-200 px-4 sm:px-8 lg:px-16 py-6 max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-xs font-mono">
            Additional artefacts available under NDA
          </p>
          <a
            href="https://www.linkedin.com/in/damiencallaghan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 text-xs transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
