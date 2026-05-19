interface ModalContent {
  title: string
  tagline: string
  body: string
  snippet?: string
  snippetLabel?: string
  footer: string
  footerType: 'nda' | 'live' | 'research' | 'partner'
}

export const modalContents: Record<string, ModalContent> = {
  'gods-eye': {
    title: "God's Eye",
    tagline: 'Full-Spectrum Operational Awareness',
    body: 'Real-time sensor orchestration platform enabling distributed intelligence fusion across heterogeneous networks. Aggregates and contextualizes streaming data from multiple sensor types with sub-second latency, presenting a unified operational picture to command systems.',
    snippet: `// Sensor fusion architecture
interface SensorNode {
  id: string
  type: 'radar' | 'infrared' | 'signal'
  location: Geolocation
  confidence: number
  timestamp: Date
}

// Distributed consensus protocol
const fusedState = await consensus({
  nodes: activeSensors,
  strategy: 'weighted-confidence',
  timeout: 500 // ms
})`,
    snippetLabel: 'TypeScript – Fusion Engine Core',
    footer: 'Full artefacts available under NDA. Restricted engagement.',
    footerType: 'nda',
  },
  'lattice-integration': {
    title: 'Lattice Integration',
    tagline: 'Autonomous Asset Coordination',
    body: 'Custom ontology and autonomous coordination layer built on Anduril\'s C2 platform. Implements advanced autonomous decision-making, multi-asset coordination, and real-time adaptation to dynamic environments. Deep integration with Lattice OS architecture for edge autonomy.',
    snippet: `// Custom ontology schema
const assetModel = {
  asset_type: "autonomous_system",
  capabilities: ["navigation", "sensing", "decision"],
  coordination_rules: {
    swarm_behavior: "consensus",
    decision_latency: 100,  // ms
    state_sync: "eventual"
  }
}

// C2 integration point
const c2Adapter = new LatticeAdapter({
  protocol: 'osdk-2.1',
  encryption: 'AES-256'
})`,
    snippetLabel: 'TypeScript – OSDK Integration',
    footer: 'Anduril partnership engagement. NDA protected.',
    footerType: 'nda',
  },
  'ghost-murmur': {
    title: 'Ghost Murmur',
    tagline: 'Applied Cardiac AI Research',
    body: 'Distributed sensor mesh for real-time physiological monitoring and cardiac diagnostics. Applied research initiative in partnership with leading medical institutions. Combines edge AI inference with centralized model management for clinical-grade accuracy.',
    snippet: `// Distributed inference pipeline
const cardiacModel = await loadModel('cardiac-ai-v2')

// Edge processing
const heartRate = processSignal(ecgData, {
  window: 2000,  // milliseconds
  confidence_threshold: 0.95
})

// Centralized validation
const diagnosis = await validateWithClinicalModel(heartRate)`,
    snippetLabel: 'Python – Diagnostic Pipeline',
    footer: 'Research partnership in progress. Academic publication pending.',
    footerType: 'research',
  },
  'foundry-work': {
    title: 'Foundry & OSDK',
    tagline: 'Enterprise Data Orchestration',
    body: 'Custom ontology design and Palantir AIP integrations for complex operational environments. Designs scalable data models, implements automated ontology transforms, and builds real-time analytics pipelines. Proven approach for enterprise data challenges.',
    snippet: `// Ontology object definition
{
  "id": "operational_event",
  "description": "Unified event model",
  "properties": {
    "event_type": { "dataType": "string" },
    "timestamp": { "dataType": "long" },
    "entities": { "dataType": "array<string>" },
    "confidence": { "dataType": "double" }
  },
  "primaryKey": ["id"],
  "displayName": "Operational Event"
}`,
    snippetLabel: 'JSON – OSDK Ontology Schema',
    footer: 'Palantir AIP integration. Commercial engagement.',
    footerType: 'nda',
  },
  'ember': {
    title: 'Ember',
    tagline: 'Multi-Agent Orchestration',
    body: 'Advanced swarm intelligence platform enabling distributed AI agent coordination and autonomous task execution. Agents share knowledge, adapt to dynamic conditions, and coordinate across multiple domains. Purpose-built for complex multi-objective scenarios.',
    snippet: `// Agent coordination protocol
class SwarmAgent {
  async executeTask(task: Task) {
    const context = await this.getSharedState()
    const plan = await this.computePlan(task, context)
    
    // Broadcast for consensus
    const approval = await this.swarm.consensus(plan)
    if (approval.confidence > 0.8) {
      return await this.execute(plan)
    }
  }
}

// Swarm supervisor
const swarm = new AgentSwarm({
  agents: 8,
  consensus_threshold: 0.7,
  heartbeat_interval: 500
})`,
    snippetLabel: 'TypeScript – Coordination Core',
    footer: 'Production system. Proprietary architecture.',
    footerType: 'nda',
  },
  'electrascan': {
    title: 'ElectraScan',
    tagline: 'AI Cost Estimating SaaS',
    body: 'Machine learning-powered cost estimation platform for electrical contracting. Live commercial product serving Australian electricians. Delivers accurate material and labour cost estimates in seconds, enabling faster quoting and improved project margins.',
    footer: 'Live product. Visit electrascan.io for details.',
    footerType: 'live',
  },
}
