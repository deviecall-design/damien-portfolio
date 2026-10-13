export const HEALTH_DISCLAIMER =
  'Research demo. Not a medical device. Not for clinical use.'

export const THEMES = [
  { id: 'health', label: 'Health' },
  { id: 'defence-geo', label: 'Defence / geospatial' },
  { id: 'fintech', label: 'Fintech' },
  { id: 'sport', label: 'Sport' },
  { id: 'tools', label: 'Tools' },
] as const

export type ThemeId = (typeof THEMES)[number]['id']

export const STATUSES = [
  'Live',
  'Demo',
  'Simulated',
  'Parked',
  'Private',
  'Screenshots only',
] as const

export type Status = (typeof STATUSES)[number]

export const STATUS_HELP: Record<Status, string> = {
  Live: 'A public deployment you can use.',
  Demo: 'A public demo. Figures may be synthetic or scripted.',
  Simulated: 'An interface exercise. No real sensors or live feeds.',
  Parked: 'Still reachable, and not actively maintained.',
  Private: 'Not available to the public.',
  'Screenshots only': 'No public link. Images and notes only.',
}

export interface ProjectImage {
  src: string
  alt: string
  caption: string
}

interface ProjectBase {
  slug: string
  title: string
  problem: string
  theme?: ThemeId
  stack: string[]
  honestyNote?: string
  image?: ProjectImage
  story: string[]
  researchQuestion?: string
  linkCaution?: string
  comingSoon?: boolean
}

export type Project = ProjectBase &
  (
    | { status: Status; linkPublic: true; liveUrl: string }
    | { status: Status | null; linkPublic: false }
  )

export const projects: Project[] = [
  {
    slug: 'echo-oncology',
    title: 'Echo Oncology — Eagle Eye Guided',
    problem: 'A guided demo for reviewing a fictional surgical teaching case.',
    theme: 'health',
    stack: [],
    status: 'Demo',
    honestyNote: HEALTH_DISCLAIMER,
    image: {
      src: '/press-images/echo-hero.jpg',
      alt: 'Abstract violet image standing in for Echo Oncology. Not a patient scan.',
      caption: 'Stand-in image. Not a patient scan.',
    },
    liveUrl: 'https://echo-oncology.vercel.app/eagleeye-guided',
    linkPublic: true,
    linkCaution:
      'The demo uses a fictional teaching case and says its sensing is simulated.',
    story: [
      'Eagle Eye Guided is a research demo of a surgical review flow, walked through as pre-op, intra-op, and post-op steps.',
      'The public page states that the case is not a patient, that several figures are a teaching story, and that contactless sensing is simulated. No hardware is connected.',
    ],
    researchQuestion:
      'What should a guided surgical review show when the case is fictional and the sensing is simulated?',
  },
  {
    slug: 'ember-echo',
    title: 'Ember Echo',
    problem:
      'A parked prototype exploring early-warning signals in existing clinical data.',
    theme: 'health',
    stack: [],
    status: 'Parked',
    honestyNote: HEALTH_DISCLAIMER,
    image: {
      src: '/press-images/ember-echo-hero.jpg',
      alt: 'Abstract red image standing in for Ember Echo. Not a clinical result.',
      caption: 'Stand-in image. Not a clinical result.',
    },
    liveUrl: 'https://ember-echo-research-k29u.bolt.host/',
    linkPublic: true,
    linkCaution:
      'The archived page is a design prototype. It is not a validated clinical result.',
    story: [
      'Ember Echo is a research prototype about signals already collected in care, including ECG, SpO2, heart-rate variability, blood pressure, and the clinical record.',
      'It is parked. It is not a validated detector, and this site makes no timing or diagnostic claim about it.',
    ],
    researchQuestion:
      'What would it mean to study early-warning signals in data already collected in care, without claiming a detection result?',
  },
  {
    slug: 'ember-swarm',
    title: "Ember Swarm / God's Eye",
    problem: 'A simulated geospatial dashboard for drone and asset operations.',
    theme: 'defence-geo',
    stack: [],
    status: 'Simulated',
    image: {
      src: '/press-images/godseye-hero.jpg',
      alt: 'Several quadcopter drones on the ground. Not a live feed from the dashboard.',
      caption: 'Reference photo. Not a live dashboard.',
    },
    linkPublic: false,
    story: [
      "A simulated dashboard for drone and asset operations. The same work has also been called God's Eye.",
      'There is no public URL yet, and no live sensor feed. Earlier wording on this site described a field outcome for emergency teams. That claim has been removed.',
    ],
    researchQuestion:
      'What belongs in a geospatial picture of drone operations when the scene is simulated and nothing is live?',
  },
  {
    slug: 'mirofish-trader',
    title: 'MiroFish Trader',
    problem: 'A swarm simulation exploring how market sentiment might be modelled.',
    theme: 'fintech',
    stack: [],
    status: 'Screenshots only',
    image: {
      src: '/press-images/mirofish-hero.jpg',
      alt: 'Abstract network of nodes and lines, standing in for MiroFish Trader.',
      caption: 'Stand-in image. Not a market result.',
    },
    linkPublic: false,
    story: [
      'MiroFish Trader is a swarm simulation around market sentiment and investor behaviour.',
      'This site does not link to a deployment. No accuracy, return, or timing is claimed.',
    ],
    researchQuestion:
      'How might a swarm of simple agents explore market sentiment without being treated as a forecast?',
  },
  {
    slug: 'matakite',
    title: 'Matakite',
    problem: 'A private dossier for rugby players.',
    theme: 'sport',
    stack: [],
    status: 'Private',
    linkPublic: false,
    story: ['A private dossier for rugby players. Details coming soon.'],
  },
  {
    slug: 'electrascan',
    title: 'ElectraScan',
    problem: 'AI-powered electrical estimating from drawings.',
    theme: 'tools',
    stack: [],
    status: 'Demo',
    liveUrl: 'https://electrascan-app.vercel.app/dashboard',
    linkPublic: true,
    story: ['AI-powered electrical estimating from drawings.'],
  },
  {
    slug: 'ares',
    title: 'Ares',
    problem: 'Details coming soon.',
    stack: [],
    status: null,
    comingSoon: true,
    linkPublic: false,
    story: ['Details coming soon.'],
  },
]

const bySlug = new Map(projects.map((project) => [project.slug, project]))

export function getProject(slug: string): Project | undefined {
  return bySlug.get(slug)
}

export function isThemeId(value: string): value is ThemeId {
  return THEMES.some((theme) => theme.id === value)
}

export function themeLabel(id: ThemeId): string {
  const theme = THEMES.find((item) => item.id === id)
  return theme ? theme.label : id
}

export function filterProjects(theme: ThemeId | null): Project[] {
  if (!theme) return projects
  return projects.filter((project) => project.theme === theme)
}

export const featuredSlugs = [
  'echo-oncology',
  'ember-echo',
  'ember-swarm',
  'mirofish-trader',
] as const

export function featuredProjects(): Project[] {
  return featuredSlugs.map((slug) => {
    const project = bySlug.get(slug)
    if (!project) {
      throw new Error(`Missing featured project: ${slug}`)
    }
    return project
  })
}

export function researchProjects(): Project[] {
  return projects.filter((project) => project.researchQuestion)
}

export function publicLinkLabel(project: Project): string | null {
  if (!project.linkPublic) return null
  return project.status === 'Parked' ? 'Archived prototype' : 'Open demo'
}

export function unavailableLabel(project: Project): string | null {
  if (project.linkPublic) return null
  if (project.status === 'Simulated') return 'Public URL to be confirmed'
  if (project.comingSoon) return 'No public link yet'
  return 'No public link'
}
