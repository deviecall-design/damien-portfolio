import fs from 'fs'
import path from 'path'

const roots = ['app', 'components', 'data', 'lib']
const extensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.css', '.mjs'])

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.next') continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, out)
    else if (extensions.has(path.extname(entry.name))) out.push(full)
  }
  return out
}

const files = roots.flatMap((root) => (fs.existsSync(root) ? walk(root) : []))
const banned = [
  [/palantir/i, 'palantir'],
  [/anduril/i, 'anduril'],
  [/electrascan\.io/i, 'electrascan.io'],
  [/href\s*=\s*['"]#['"]/, 'href="#"'],
  [/14[\s-]*hours?/i, '14 hour claim'],
  [/hours to minutes/i, 'hours to minutes'],
  [/exiting corporate/i, 'exiting corporate'],
  [/founder,\s*not corporate/i, 'founder, not corporate'],
  [/ember@research\.com/i, 'placeholder research email'],
  [/victor chang/i, 'named clinical affiliation'],
  [/lives saved/i, 'lives saved claim'],
  [/80%\s*reduction/i, 'unverified reduction claim'],
  [/mirofish-trader\.vercel\.app/i, 'unlinked fintech URL'],
  [/matakite\.vercel\.app/i, 'private sport URL'],
  [/status:\s*'Production'/, 'Production status'],
  [/status:\s*'Commercial'/, 'Commercial status'],
]

let failed = false
function fail(message) {
  console.error(message)
  failed = true
}

for (const file of files) {
  if (file.endsWith('scripts/check-content.mjs')) continue
  const text = fs.readFileSync(file, 'utf8')
  for (const [pattern, label] of banned) {
    if (pattern.test(text)) fail(`${file}: found ${label}`)
  }
}

const projectsFile = fs.readFileSync('data/projects.ts', 'utf8')
const projects = projectsFile.slice(
  projectsFile.indexOf('export const projects'),
  projectsFile.indexOf('export const featuredSlugs')
)
const healthNote = fs.readFileSync('components/HealthNote.tsx', 'utf8')
if (!healthNote.includes('HEALTH_DISCLAIMER')) {
  fail('HealthNote must render HEALTH_DISCLAIMER')
}
if (!projectsFile.includes('Research demo. Not a medical device. Not for clinical use.')) {
  fail('Missing health disclaimer copy')
}

const chunks = projects.split("slug: '").slice(1)
if (chunks.length !== 7) fail(`Expected 7 projects, found ${chunks.length}`)

for (const chunk of chunks) {
  const slug = chunk.slice(0, chunk.indexOf("'"))
  const body = chunk.split(/\n\]/)[0]
  const theme = body.match(/theme:\s*'([^']+)'/)
  if (theme?.[1] === 'health' && !body.includes('healthDisclaimer: true')) {
    fail(`${slug} is health without a disclaimer flag`)
  }
  if (!body.includes('linkPublic:')) fail(`${slug} is missing linkPublic`)
}

const unlinked = ['gods-eye', 'mirofish', 'matakite', 'electrascan', 'ares']
for (const slug of unlinked) {
  const chunk = chunks.find((item) => item.startsWith(slug))
  if (!chunk) {
    fail(`Missing ${slug}`)
    continue
  }
  if (!chunk.includes('linkPublic: false')) fail(`${slug} must stay unlinked`)
  if (chunk.includes('liveUrl')) fail(`${slug} must not have a live URL`)
}

for (const slug of ['echo-oncology', 'ember-echo']) {
  const chunk = chunks.find((item) => item.startsWith(slug))
  if (!chunk?.includes('linkPublic: true') || !chunk.includes('liveUrl:')) {
    fail(`${slug} should keep its public URL`)
  }
}

const card = fs.readFileSync('components/ProjectCard.tsx', 'utf8')
const study = fs.readFileSync('app/lab/[slug]/page.tsx', 'utf8')
if (!card.includes('<HealthNote') || !study.includes('<HealthNote')) {
  fail('Health disclaimer must render on cards and case studies')
}

if (failed) process.exit(1)
console.log(`Checked ${files.length} files.`)
