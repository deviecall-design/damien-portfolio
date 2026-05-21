import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

interface ResearchItem {
  id: string
  title: string
  abstract: string
  tags: string[]
  date: string
  status: 'draft' | 'in-review' | 'published' | 'research'
  link?: string
}

const research: ResearchItem[] = [
  {
    id: 'ghost-murmur',
    title: 'Distributed Sensor Mesh for Real-time Cardiac Monitoring',
    abstract:
      'Cardiac events aren\'t sudden — they\'re preceded by hours of detectable pre-symptomatic signals. We\'re building AI-native sensor fusion systems that detect the signal before the crisis, leveraging proven clinical data patterns and edge inference for real-time analysis. 14-hour early detection window changes intervention from emergency to managed care.\n\nReal-world: A patient in rural Australia has ECG, SpO2, and blood pressure monitors at home. Standard systems see normal vitals. Ours detects HRV micro-degradation + blood pressure drift 14 hours before cardiac event onset. Early warning reaches clinician. Intervention happens before crisis. Aligns with Palantir\'s proven healthcare data patterns.',
    tags: ['Healthcare', 'Distributed Systems', 'Edge AI', 'Medical'],
    date: '2026 (In Progress)',
    status: 'research',
    link: '/#ghost-murmur',
  },
  {
    id: 'mirofish',
    title: 'Swarm Intelligence Models for Market Sentiment Prediction',
    abstract:
      'Markets move on consensus — but consensus is invisible until it\'s priced in. We model how investor behavior aggregates across information asymmetry, macro catalysts, and herd dynamics. Validated against Fed decisions, earnings surprises, geopolitical shocks. The swarm model catches sentiment shifts 2–4 weeks before traditional market signals surface.\n\nReal-world: Major central bank signals policy shift. Market consensus hasn\'t formed yet. Our swarm protocol detects micro-consensus across fund flows, positioning data, and macro positioning 2–3 weeks before market reprices. Early signal. Actionable window.',
    tags: ['Markets', 'Swarm AI', 'Prediction', 'Consensus'],
    date: '2026 (Research)',
    status: 'research',
    link: '/#mirofish',
  },
  {
    id: 'lattice-arch',
    title: 'Autonomous Coordination at the Edge: Lattice Architecture Integration',
    abstract:
      'Autonomous systems assume persistent command & control. Defense, emergency response, and edge computing can\'t afford that. We\'re building autonomous coordination layers where each agent thinks independently but acts in consensus with the swarm. No central authority. No single point of failure. Generalizing battle-tested defense architectures for fire, flood, and search & rescue.\n\nReal-world: 2019-style bushfire event. Comms infrastructure compromised. Multiple response assets enter zone autonomously — thermal, RF, visual sensors. Each sees different fire behavior. Instead of waiting for HQ decision, assets reach local consensus on fire progression and coordinate response in-silo. Humans get aggregated intelligence, not individual feeds.',
    tags: ['Autonomy', 'Edge Computing', 'C2 Systems', 'Architecture'],
    date: '2026 (Research)',
    status: 'research',
    link: '/#lattice-integration',
  },
  {
    id: 'gods-eye',
    title: 'Real-time Intelligence Fusion Across Heterogeneous Sensor Networks',
    abstract:
      'Most organizations have sensor networks that don\'t talk to each other. We\'re building consensus protocols that fuse conflicting sensor data into actionable intelligence. Works with existing infrastructure. No sensor replacement required. Operates in contested environments where jamming is expected. Operational awareness in minutes instead of hours — the difference between containment and escalation.\n\nReal-world: Search & rescue operation. Thermal, RF, ground sensors give conflicting signals about target location. Our fusion algorithm weights by environment (terrain, weather), sensor reliability history, and signal consistency. Consensus emerges in minutes. Rescue dispatch has high-confidence location. Time to rescue window narrows significantly.'
    tags: ['Sensors', 'Fusion', 'Real-time', 'Distributed'],
    date: '2026 (Research)',
    status: 'research',
    link: '/#gods-eye',
  },
]

const publications = [
  {
    title: 'Ghost Murmur: Applied Cardiac AI Research',
    venue: 'Victor Chang Cardiac Research Institute — Partnership Initiative',
    date: '2026',
    link: '/#ghost-murmur',
  },
  {
    title: 'MiroFish Swarm Sentiment Engine',
    venue: 'Internal Research — Market Prediction Systems',
    date: '2026',
    link: '/#mirofish',
  },
  {
    title: 'Autonomous Coordination Patterns on Anduril Lattice',
    venue: 'Defense Tech Research — Edge Autonomy',
    date: '2026',
    link: '/#lattice-integration',
  },
]

const statusBadge = {
  draft: 'bg-gray-100 text-gray-800 border-gray-300',
  'in-review': 'bg-yellow-100 text-yellow-800 border-yellow-300',
  published: 'bg-green-100 text-green-800 border-green-300',
  research: 'bg-blue-100 text-blue-800 border-blue-300',
}

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />

      <section className="flex-1 px-4 sm:px-8 lg:px-16 py-20 max-w-5xl mx-auto w-full">
        {/* Hero */}
        <div className="mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">Research</h1>
          <div className="max-w-3xl space-y-6 text-gray-600">
            <p className="text-lg leading-relaxed">
              I'm not publishing papers. I'm solving real problems with AI-first architectures that operate at the edge, where latency kills and human oversight isn't always possible. Building systems that leverage proven patterns from leading platforms (Palantir, Anduril) and adapt them for civil applications.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>The thesis:</strong> Distributed intelligence — sensor fusion, autonomous coordination, real-time consensus — works better when it's designed for <em>constraint</em>, not capacity. Most AI research assumes unlimited compute and connectivity. My work assumes the opposite: edge devices, intermittent networks, irreversible decisions, and millisecond latencies. We apply battle-tested architecture patterns to healthcare, emergency response, and market intelligence.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
              <p className="font-semibold text-gray-900 mb-3">Tech Stack:</p>
              <ul className="space-y-2 text-sm">
                <li><strong>Palantir Foundry OSDK</strong> — Data fusion, healthcare patterns, enterprise integration</li>
                <li><strong>Anduril Lattice</strong> — Autonomous C2 architecture, sensor coordination</li>
                <li><strong>ROS 2 + PX4</strong> — Professional autonomous platforms, distributed communication</li>
                <li><strong>EGO-Planner Swarm</strong> — Decentralized trajectory planning, edge coordination</li>
                <li><strong>FARSITE</strong> — Validated fire spread prediction (USDA open-source)</li>
                <li><strong>React + Mapbox + Three.js</strong> — Real-time visualization and geospatial mapping</li>
                <li><strong>Field systems</strong> — Actual hardware: cardiac sensors, distributed mesh networks, autonomous platforms</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Research Items Grid */}
        <div className="grid gap-6 mb-20">
          {research.map((item) => (
            <div
              key={item.id}
              className="group p-6 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-md transition-all bg-gradient-to-br from-gray-50 to-white"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-gray-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 whitespace-pre-line">
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
                      className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <span className="text-xs text-gray-600">{item.date}</span>
                  <a
                    href={`mailto:ember@research.com?subject=Research%20Inquiry:%20${encodeURIComponent(item.title)}`}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors font-semibold"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Publication List */}
        <div>
          <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-200">
            Publications & Engagements
          </h2>

          <div className="space-y-4">
            {publications.map((pub, i) => (
              <div key={i} className="flex items-start justify-between py-4 border-b border-gray-100 hover:border-gray-300 transition-colors">
                <div className="flex-1">
                  <p className="font-semibold text-sm text-gray-900 mb-1">
                    {pub.link ? (
                      <a href={pub.link} className="hover:text-gray-700 transition-colors">
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </p>
                  <p className="text-xs text-gray-600">{pub.venue}</p>
                </div>
                <p className="text-xs text-gray-600 font-mono ml-4 whitespace-nowrap">
                  {pub.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Interested in the Research?</h3>
            <p className="text-gray-600 mb-4">
              These initiatives are active and evolving. For technical depth, collaboration inquiries, or partnership discussions:
            </p>
            <a
              href="mailto:ember@research.com"
              className="inline-block bg-gray-900 text-white px-6 py-2 rounded font-semibold hover:bg-gray-800 transition-colors"
            >
              Contact: ember@research.com
            </a>
            <p className="text-gray-600 text-xs mt-4">
              NDA agreements in place for restricted content and proprietary methodologies.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
