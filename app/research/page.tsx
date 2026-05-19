import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

interface ResearchItem {
  id: string
  title: string
  abstract: string
  tags: string[]
  date: string
  status: 'draft' | 'in-review' | 'published' | 'research'
}

const research: ResearchItem[] = [
  {
    id: 'ghost-murmur',
    title: 'Distributed Sensor Mesh for Real-time Cardiac Monitoring',
    abstract:
      'Applied research on distributed sensor networks enabling edge inference for cardiac diagnostics. Partnership with Victor Chang Cardiac Research Institute.',
    tags: ['Healthcare', 'Distributed Systems', 'Edge AI', 'Medical'],
    date: '2026 (In Progress)',
    status: 'research',
  },
  {
    id: 'mirofish',
    title: 'Swarm Intelligence Models for Market Sentiment Prediction',
    abstract:
      'Multi-agent consensus protocols for predicting investor behavior and market reactions to macro events. Validated against historical catalysts and earnings releases.',
    tags: ['Markets', 'Swarm AI', 'Prediction', 'Consensus'],
    date: '2026 (Research)',
    status: 'research',
  },
  {
    id: 'lattice-arch',
    title: 'Autonomous Coordination at the Edge: Lattice Architecture Integration',
    abstract:
      'Custom ontology design and autonomous decision-making on Anduril C2 platform. Edge computing patterns for real-time coordination without centralized control.',
    tags: ['Autonomy', 'Edge Computing', 'C2 Systems', 'Architecture'],
    date: '2026 (Research)',
    status: 'research',
  },
  {
    id: 'gods-eye',
    title: 'Real-time Intelligence Fusion Across Heterogeneous Sensor Networks',
    abstract:
      'Distributed consensus protocols for high-confidence data fusion. Application: operational awareness across emergency response networks.',
    tags: ['Sensors', 'Fusion', 'Real-time', 'Distributed'],
    date: '2026 (Research)',
    status: 'research',
  },
]

const publications = [
  {
    title: 'Ghost Murmur: Applied Cardiac AI Research',
    venue: 'Victor Chang Cardiac Research Institute — Partnership Initiative',
    date: '2026',
  },
  {
    title: 'MiroFish Swarm Sentiment Engine',
    venue: 'Internal Research — Market Prediction Systems',
    date: '2026',
  },
  {
    title: 'Autonomous Coordination Patterns on Anduril Lattice',
    venue: 'Defense Tech Research — Edge Autonomy',
    date: '2026',
  },
]

const statusBadge = {
  draft: 'bg-gray-900 text-gray-400 border-gray-700',
  'in-review': 'bg-yellow-950 text-yellow-400 border-yellow-800',
  published: 'bg-green-950 text-green-400 border-green-800',
  research: 'bg-blue-950 text-blue-400 border-blue-800',
}

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <Header />

      <section className="flex-1 px-4 sm:px-8 lg:px-16 py-20 max-w-5xl mx-auto w-full">
        {/* Hero */}
        <div className="mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">Research</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Applied research and investigations into distributed systems, autonomous coordination, and advanced AI architectures.
          </p>
        </div>

        {/* Research Items Grid */}
        <div className="grid gap-6 mb-20">
          {research.map((item) => (
            <div
              key={item.id}
              className="group p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors bg-gradient-to-br from-gray-900/50 to-black"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-gray-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {item.abstract}
                  </p>
                </div>
                <span
                  className={`text-xs font-mono px-3 py-1 rounded border whitespace-nowrap ml-4 ${
                    statusBadge[item.status]
                  }`}
                >
                  {item.status === 'research' ? 'RESEARCH' : item.status.toUpperCase()}
                </span>
              </div>

              <div className="flex items-end justify-between">
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
                <div className="flex items-center gap-3 ml-4">
                  <span className="text-xs text-gray-600">{item.date}</span>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    Read →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Publication List */}
        <div>
          <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-800">
            Publications & Engagements
          </h2>

          <div className="space-y-4">
            {publications.map((pub, i) => (
              <div key={i} className="flex items-start justify-between py-4 border-b border-gray-900 hover:border-gray-800 transition-colors">
                <div className="flex-1">
                  <p className="font-semibold text-sm text-gray-300 mb-1">
                    {pub.title}
                  </p>
                  <p className="text-xs text-gray-600">{pub.venue}</p>
                </div>
                <p className="text-xs text-gray-700 font-mono ml-4 whitespace-nowrap">
                  {pub.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-600 text-xs">
            Additional research available upon request. NDA agreements in place for restricted content.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
