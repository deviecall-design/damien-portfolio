export const themes = ['health', 'defence-geo', 'fintech', 'sport'] as const

export type Theme = (typeof themes)[number]

export const themeLabels: Record<Theme, string> = {
  health: 'Health',
  'defence-geo': 'Defence / geospatial',
  fintech: 'Fintech',
  sport: 'Sport',
}

export const statuses = [
  'Live',
  'Demo',
  'Simulated',
  'Parked',
  'Private',
  'Screenshots only',
  'Details coming soon',
] as const

export type Status = (typeof statuses)[number]

export const STATUS_HELP: Record<Status, string> = {
  Live: 'A public product that is maintained.',
  Demo: 'Synthetic or teaching data. Not a production system.',
  Simulated: 'An interface with no real sensors or live feeds.',
  Parked: 'Still reachable, and not actively maintained.',
  Private: 'Not open to the public.',
  'Screenshots only': 'No public link. Images only.',
  'Details coming soon': 'A public description is not ready.',
}

export const HEALTH_DISCLAIMER =
  'Research demo. Not a medical device. Not for clinical use.'

export type ProjectImage = {
  src: string
  alt: string
  width: number
  height: number
  kind: 'screenshot' | 'cover'
  focus?: 'top' | 'center'
  caption: string
}

export type Diagram = {
  caption: string
  steps: { title: string; detail: string }[]
}

export type Section = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type Project = {
  slug: string
  title: string
  aka?: string
  problem: string
  theme?: Theme
  stack: string[]
  status: Status
  honestyNote?: string
  healthDisclaimer?: boolean
  role?: string
  image?: ProjectImage
  liveUrl?: string
  linkPublic: boolean
  sections: Section[]
  diagram?: Diagram
  gaps?: string[]
  work?: { headline: string; paragraphs: string[] }
  research?: { title: string; paragraphs: string[] }
}

export function isTheme(value: string): value is Theme {
  return (themes as readonly string[]).includes(value)
}

export function activeTheme(value: string | undefined): Theme | 'all' {
  if (value && isTheme(value)) return value
  return 'all'
}

const role = 'Design and engineering'

export const projects: Project[] = [
  {
    slug: 'echo-oncology',
    title: 'Echo Oncology',
    aka: 'Eagle Eye Guided',
    problem: 'A teaching walkthrough of one surgical case, marked as a story.',
    theme: 'health',
    stack: ['Web demo', 'Synthetic case'],
    status: 'Demo',
    healthDisclaimer: true,
    role,
    image: {
      src: '/lab/echo-oncology.png',
      alt: 'Eagle Eye Guided demo. A banner across the top says the sensing is simulated and not for clinical use.',
      width: 1440,
      height: 1100,
      kind: 'screenshot',
      caption: 'Top of the public Eagle Eye Guided demo, including its research-use banner.',
    },
    liveUrl: 'https://echo-oncology.vercel.app/eagleeye-guided',
    linkPublic: true,
    diagram: {
      caption: 'Structure of the public demo. Not a clinical system.',
      steps: [
        {
          title: 'Pre-op planning',
          detail: 'Imaging and a model summary for one teaching case.',
        },
        {
          title: 'Intra-op view',
          detail: 'Scripted progress, with sensing marked as simulated.',
        },
        {
          title: 'Post-op review',
          detail: 'A follow-up screen. The demo does not present it as an outcome score.',
        },
      ],
    },
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          'A surgical case is easier to teach when the plan, the intra-operative picture, and the follow-up sit in one walkthrough. A screen that looks clinical is also easy to misread as a device.',
          'Eagle Eye Guided keeps the walkthrough and keeps the fiction on the label.',
        ],
      },
      {
        heading: 'What I built',
        paragraphs: [
          'I designed and engineered Eagle Eye Guided, a public web demo for Echo Oncology. It steps through pre-operative planning, an intra-operative view, and a post-operative review.',
          'The demo states that the person, the grade, the location, and the operative story are invented for teaching. My role is design and engineering.',
        ],
      },
      {
        heading: 'Stack and architecture',
        paragraphs: [
          'The public artefact is one website organised as a three-stage walkthrough. Framework and model names are not listed here, because this page only describes what a visitor can see.',
        ],
      },
      {
        heading: 'Key design decisions',
        bullets: [
          'A banner states that contactless sensing and acoustic vitals are simulated and investigational, and not for clinical use.',
          'Grades and resection figures are labelled on the demo as a teaching story, not as measured confidence.',
          'Intra-operative progress is described on the demo as scripted, so it does not read as a live operation.',
        ],
        paragraphs: [],
      },
      {
        heading: "What's real, what's simulated",
        bullets: [
          'Real: a public website you can open.',
          'Invented for teaching: the case itself.',
          'Simulated: contactless sensing, acoustic vitals, alerts, and surgical progress. The demo says no hardware is connected.',
        ],
        paragraphs: ['Not a medical device. Not for clinical use.'],
      },
      {
        heading: "What I'd do next",
        paragraphs: [
          'Keep the teaching labels in place. A stack note can be added when I want it public. The demo stays a research demo.',
        ],
      },
    ],
    work: {
      headline: 'A surgical case, labelled as a teaching story.',
      paragraphs: [
        'Eagle Eye Guided walks through pre-op, intra-op, and post-op for one fictional case. The demo marks the story, the sensing, and the progress as teaching material.',
        'It is a research demo. It is not a medical device and it is not for clinical use.',
      ],
    },
    research: {
      title: 'A labelled teaching demo for a surgical case',
      paragraphs: [
        'Eagle Eye Guided is a research interface for walking through one surgical story. The public demo says the case is fictional and that the sensing is simulated.',
        'The point of the prototype is the walkthrough, with the limit printed on the page. It is not a device and it is not validated for clinical use.',
      ],
    },
  },
  {
    slug: 'gods-eye',
    title: "God's Eye",
    aka: 'Ember Swarm',
    problem: 'A simulated map of drones, alerts, and an operations feed.',
    theme: 'defence-geo',
    stack: ['Geospatial UI', 'Simulated feeds'],
    status: 'Simulated',
    honestyNote: 'Simulated feeds. Public URL to be confirmed.',
    role,
    image: {
      src: '/press-images/godseye-hero.jpg',
      alt: "God's Eye dashboard with a map, drone markers, an alerts column, and an operations feed.",
      width: 1394,
      height: 1124,
      kind: 'screenshot',
      focus: 'center',
      caption: 'The simulated geospatial dashboard. Feeds on this screen are not live sensors.',
    },
    linkPublic: false,
    diagram: {
      caption: 'Layout of the simulated dashboard. Not a live sensor network.',
      steps: [
        { title: 'Map', detail: 'Drone markers on a geospatial view.' },
        { title: 'Alerts', detail: 'An alerts column beside the map.' },
        { title: 'Operations feed', detail: 'A feed of events. Treated here as simulated.' },
      ],
    },
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          'Someone watching drones and incidents needs one picture: where the aircraft are, which alerts matter, and what the feed is saying.',
          "God's Eye, also called Ember Swarm, is that picture as a simulated dashboard. This site has no public deployment URL for it.",
        ],
      },
      {
        heading: 'What I built',
        paragraphs: [
          'I designed and engineered a geospatial drone operations dashboard. The view combines a map, drone markers, an alerts column, and an operations feed.',
          'My role is design and engineering. The screenshot is the interface I am willing to show.',
        ],
      },
      {
        heading: 'Stack and architecture',
        paragraphs: [
          'The interface is the architecture I am publishing: map, alerts, and a feed. Framework names are not listed. Nothing on this page claims a connection to live aircraft or ground sensors.',
        ],
      },
      {
        heading: 'Key design decisions',
        bullets: [
          'Call it simulated, not a fielded system.',
          'Do not attach a response-time or outcome claim to the screenshot.',
          'Leave the deployment unlinked until a public URL is confirmed.',
        ],
        paragraphs: [],
      },
      {
        heading: "What's real, what's simulated",
        bullets: [
          'Real: the interface in the screenshot.',
          'Simulated: positions, alerts, and the operations feed.',
          'Not claimed: live airspace, a sensor network, or a deployment with a response agency.',
        ],
        paragraphs: [],
      },
      {
        heading: "What I'd do next",
        paragraphs: [
          'Publish a URL only when it points at this simulated demo, and keep the simulated label on it.',
        ],
      },
    ],
    work: {
      headline: 'One map for drones, alerts, and a feed.',
      paragraphs: [
        "God's Eye is a geospatial dashboard for drone operations, also called Ember Swarm. The screen holds a map, aircraft markers, alerts, and an operations feed.",
        'The feeds are simulated. There is no public link yet, and no response-time claim attached to the work.',
      ],
    },
    research: {
      title: 'A simulated operational picture',
      paragraphs: [
        "God's Eye asks what a single geospatial view needs when the question is drones, alerts, and a feed. The current build answers that with a simulated interface.",
        'It is not presented as a live sensor network. A public URL is still to be confirmed.',
      ],
    },
  },
  {
    slug: 'ember-echo',
    title: 'Ember Echo',
    problem: 'A parked briefing on cardiac signals in data hospitals already store.',
    theme: 'health',
    stack: ['Research briefing'],
    status: 'Parked',
    honestyNote: 'Parked. The linked briefing is not maintained.',
    healthDisclaimer: true,
    role,
    image: {
      src: '/press-images/ember-echo-hero.jpg',
      alt: 'Abstract red and black cover image for Ember Echo.',
      width: 1158,
      height: 1076,
      kind: 'cover',
      caption: 'Cover image. Not a product screenshot, and not a clinical result.',
    },
    liveUrl: 'https://ember-echo-research-k29u.bolt.host/',
    linkPublic: true,
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          'Hospitals already keep signals such as ECG, oxygen saturation, heart-rate variability, blood pressure, and the clinical record. Ember Echo is a research prototype about whether earlier warning patterns could be studied in that existing data.',
          'This portfolio does not claim that a warning time or a diagnosis has been shown.',
        ],
      },
      {
        heading: 'What I built',
        paragraphs: [
          'I designed and engineered a public research briefing. It is parked: the page is still reachable, and it is not a maintained product.',
          'My role is design and engineering. No detection performance is claimed here.',
        ],
      },
      {
        heading: 'Stack and architecture',
        paragraphs: [
          'The public artefact is a briefing site. It points at data hospitals already store, and at the idea of using that data without new hardware. A detector architecture is not claimed on this page.',
        ],
      },
      {
        heading: 'Key design decisions',
        bullets: [
          'Describe the question the prototype explores, and stop before a time-to-onset or a diagnosis.',
          'Mark the briefing as parked.',
          'Use the same health disclaimer as every other health card on this site.',
        ],
        paragraphs: [],
      },
      {
        heading: "What's real, what's simulated",
        bullets: [
          'Real: a public briefing page.',
          'Not claimed: a working clinical detector, a validated warning window, or a diagnosis.',
        ],
        paragraphs: [
          'If the linked briefing states a detection time, a diagnosis, or a partnership, that wording is retired. This case study is the account I stand behind.',
        ],
      },
      {
        heading: "What I'd do next",
        paragraphs: [
          'Leave it parked until a revision can describe the prototype without a clinical performance claim.',
        ],
      },
    ],
    work: {
      headline: 'A research briefing, parked.',
      paragraphs: [
        'Ember Echo explores whether earlier cardiac signals could be studied in data hospitals already keep. This site does not claim a detection time or a diagnosis.',
        'The briefing is still online and is not maintained. Research demo. Not a medical device. Not for clinical use.',
      ],
    },
    research: {
      title: 'A parked question about existing cardiac data',
      paragraphs: [
        'Ember Echo is a research briefing about signals that hospitals already store. It is not maintained, and it is not presented here as a detector.',
        'No warning window and no diagnosis are claimed. Research demo. Not a medical device. Not for clinical use.',
      ],
    },
  },
  {
    slug: 'mirofish',
    title: 'MiroFish Trader',
    problem: 'A multi-agent simulation of how market views might form.',
    theme: 'fintech',
    stack: ['Multi-agent simulation'],
    status: 'Screenshots only',
    honestyNote: 'No public link.',
    role,
    image: {
      src: '/press-images/mirofish-hero.jpg',
      alt: 'Abstract blue and gold cover image for MiroFish Trader. Not a product screenshot.',
      width: 1254,
      height: 1254,
      kind: 'cover',
      caption: 'Cover image. A product screenshot has not been added.',
    },
    linkPublic: false,
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          'A market number arrives after many people have already leaned the same way. MiroFish Trader is a swarm simulation of that kind of collective behaviour.',
          'It is not presented here as a forecast, and it has no public link.',
        ],
      },
      {
        heading: 'What I built',
        paragraphs: [
          'I designed and engineered a multi-agent simulation around market sentiment and investor behaviour. This portfolio shows a cover image only.',
          'My role is design and engineering. There is no public demo to open from this site.',
        ],
      },
      {
        heading: 'Stack and architecture',
        paragraphs: [
          'It is a multi-agent simulation. The implementation stack is not listed, and there is no public deployment.',
        ],
      },
      {
        heading: 'Key design decisions',
        bullets: [
          'Keep the build unlinked.',
          'Do not state a lead time, a return, or an accuracy figure.',
        ],
        paragraphs: [],
      },
      {
        heading: "What's real, what's simulated",
        bullets: [
          'The project is a simulation of collective market behaviour.',
          'No live trading system is claimed.',
        ],
        paragraphs: [],
      },
      {
        heading: "What I'd do next",
        paragraphs: [
          'Add product screenshots. A public link stays off this site until I choose to publish one.',
        ],
      },
    ],
    work: {
      headline: 'A swarm, not a forecast.',
      paragraphs: [
        'MiroFish Trader simulates how market views might form across many agents. No lead time and no return are stated.',
        'There is no public link. The image on this page is a cover, not a screenshot of the product.',
      ],
    },
    research: {
      title: 'Simulating how a market view forms',
      paragraphs: [
        'MiroFish Trader models collective behaviour around market sentiment. It is a simulation, shown here without a public link.',
        'No accuracy, lead time, or trading result is stated.',
      ],
    },
  },
  {
    slug: 'matakite',
    title: 'Matakite',
    problem: 'A private dossier for reviewing a rugby player.',
    theme: 'sport',
    stack: [],
    status: 'Private',
    honestyNote: 'No public link.',
    role,
    linkPublic: false,
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          'Matakite is a private dossier for reviewing a rugby player. The dossier is not public, so this page stops at that description.',
        ],
      },
      {
        heading: 'What I built',
        paragraphs: [
          'A private player dossier. My role is design and engineering. There is no public build to open.',
        ],
      },
      {
        heading: 'Stack and architecture',
        paragraphs: ['The stack stays private with the product.'],
      },
      {
        heading: 'Key design decisions',
        paragraphs: [
          'Keep it unlinked until there is a public demo or a screenshot I am willing to show.',
        ],
      },
      {
        heading: "What's real, what's simulated",
        paragraphs: ['Private. No club, dataset, or performance figure is stated.'],
      },
      {
        heading: "What I'd do next",
        paragraphs: ['A public demo or a screenshot, if I publish one. Until then there is no link.'],
      },
    ],
    work: {
      headline: 'A dossier that stays private.',
      paragraphs: [
        'Matakite is a private dossier for reviewing a rugby player. It is not linked, and this site does not describe what is inside it.',
      ],
    },
  },
  {
    slug: 'electrascan',
    title: 'ElectraScan',
    problem: 'AI estimating for Australian electrical contractors.',
    stack: [],
    status: 'Details coming soon',
    honestyNote: 'Status, stack, and a public URL are not confirmed.',
    role,
    linkPublic: false,
    gaps: ['Which status label fits', 'Stack', 'Product screenshot', 'Public URL'],
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          'ElectraScan is estimating software for Australian electrical contractors. It automates a bill of materials and tracks order value in dollars rather than metres.',
          'Pricing in the existing brief covers copper, cable, and petroleum-linked materials.',
        ],
      },
      {
        heading: 'What I built',
        paragraphs: [
          'I designed and engineered the product around that estimating workflow. This page does not add a customer result or a public URL.',
        ],
      },
    ],
  },
  {
    slug: 'ares',
    title: 'Ares',
    problem: 'Details coming soon.',
    stack: [],
    status: 'Details coming soon',
    linkPublic: false,
    sections: [],
  },
]

export const featuredSlugs = ['echo-oncology', 'gods-eye', 'mirofish', 'ember-echo'] as const

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function requireProject(slug: string): Project {
  const project = getProject(slug)
  if (!project) throw new Error(`Missing project ${slug}`)
  return project
}

export function filterProjects(theme: Theme | 'all'): Project[] {
  if (theme === 'all') return projects
  return projects.filter((project) => project.theme === theme)
}

export function publicUrl(project: Project): string | undefined {
  if (!project.linkPublic || !project.liveUrl) return undefined
  return project.liveUrl
}

export function liveLinkLabel(status: Status): string {
  if (status === 'Parked') return 'View parked site'
  if (status === 'Demo') return 'View demo'
  if (status === 'Live') return 'View live site'
  return 'Open site'
}
