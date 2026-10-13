import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const skipDirs = new Set(['node_modules', '.next', 'archive', '.git', 'scripts'])
const textExts = new Set(['.ts', '.tsx', '.js', '.jsx', '.mdx', '.md', '.css'])
const skipFiles = new Set(['next-env.d.ts'])

const banned = [
  { re: /href\s*=\s*['"]#['"]/, label: 'placeholder href' },
  { re: /electrascan\.io/i, label: 'electrascan.io' },
  { re: /palantir/i, label: 'palantir' },
  { re: /anduril/i, label: 'anduril' },
  { re: /14\s*-?\s*hours/i, label: '14 hours' },
  { re: /hours to minutes/i, label: 'hours to minutes' },
  { re: /exiting corporate/i, label: 'exiting corporate' },
  { re: /founder,\s*not corporate/i, label: 'founder not corporate' },
  { re: /before onset/i, label: 'before onset' },
  { re: /victor chang/i, label: 'victor chang' },
  { re: /lives saved/i, label: 'lives saved' },
  { re: /ember@research\.com/i, label: 'placeholder research email' },
  { re: /\bProduction\b/, label: 'Production label' },
  { re: /learn more/i, label: 'learn more' },
  { re: /mirofish-trader\.vercel\.app/i, label: 'mirofish public url' },
  { re: /matakite\.vercel\.app/i, label: 'matakite public url' },
  { re: /80\s*%/, label: 'unverified 80 percent claim' },
]

const allowedUrls = new Set([
  'https://echo-oncology.vercel.app/eagleeye-guided',
  'https://ember-echo-research-k29u.bolt.host/',
  'https://electrascan-app.vercel.app/dashboard',
  'https://god-eye-nu.vercel.app/',
  'https://www.linkedin.com/in/damiencallaghan/',
  'https://github.com/deviecall-design',
  'https://damien-portfolio-tau.vercel.app',
  'https://schema.org',
])

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else if (textExts.has(path.extname(entry.name)) && !skipFiles.has(entry.name)) files.push(full)
  }
  return files
}

const errors = []
const files = walk(root)

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8')
  const rel = path.relative(root, file)
  for (const rule of banned) {
    if (rule.re.test(text)) errors.push(`${rel}: found ${rule.label}`)
  }
  const urls = text.match(/https?:\/\/[^\s'"`<>)\]]+/g) || []
  for (const url of urls) {
    const clean = url.replace(/[.,]$/, '')
    if (!allowedUrls.has(clean)) errors.push(`${rel}: unexpected URL ${clean}`)
  }
  if (text.includes('mailto:')) {
    const stripped = text
      .replaceAll('mailto:${site.email}', '')
      .replaceAll('mailto:damien@deviecall.com', '')
    if (stripped.includes('mailto:')) errors.push(`${rel}: unexpected mailto`)
  }
}

const card = fs.readFileSync(path.join(root, 'components/ProjectCard.tsx'), 'utf8')
const study = fs.readFileSync(path.join(root, 'components/CaseStudy.tsx'), 'utf8')
if (!card.includes("project.theme === 'health'") || !card.includes('<HealthDisclaimer />')) {
  errors.push('ProjectCard does not force the health disclaimer')
}
if (!study.includes("project.theme === 'health'") || !study.includes('<HealthDisclaimer />')) {
  errors.push('CaseStudy does not force the health disclaimer')
}

const projectsSrc = fs.readFileSync(path.join(root, 'data/projects.ts'), 'utf8')
const slugs = [...projectsSrc.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1])
if (!slugs.includes('echo-oncology') || !slugs.includes('ember-echo')) {
  errors.push('health prototypes missing from projects')
}

for (const slug of slugs) {
  const mdxPath = path.join(root, 'content/lab', `${slug}.mdx`)
  if (!fs.existsSync(mdxPath)) errors.push(`missing case study content/lab/${slug}.mdx`)
  const mdx = fs.existsSync(mdxPath) ? fs.readFileSync(mdxPath, 'utf8') : ''
  for (const heading of [
    '## Problem',
    '## What I built',
    '## Stack and architecture',
    '## Key design decisions',
    '## What is real and what is simulated',
    '## What I would do next',
  ]) {
    if (!mdx.includes(heading)) errors.push(`content/lab/${slug}.mdx missing heading: ${heading}`)
  }
}

const hrefRe = /(?:href=['"]|\]\()(\/[^'"`)\s]*)/g
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8')
  const rel = path.relative(root, file)
  hrefRe.lastIndex = 0
  let match = hrefRe.exec(text)
  while (match) {
    const href = match[1].split('?')[0].split('#')[0]
    if (href.startsWith('/press-images/')) {
      if (!fs.existsSync(path.join(root, 'public', href))) {
        errors.push(`${rel}: missing asset ${href}`)
      }
    } else {
      const known =
        href === '/' ||
        href === '/lab' ||
        href === '/work' ||
        href === '/research' ||
        (href.startsWith('/lab/') && slugs.includes(href.slice('/lab/'.length)))
      if (!known) errors.push(`${rel}: unknown internal link ${match[1]}`)
    }
    match = hrefRe.exec(text)
  }
}

for (const match of projectsSrc.matchAll(/src:\s*'([^']+)'/g)) {
  if (!fs.existsSync(path.join(root, 'public', match[1]))) {
    errors.push(`missing image ${match[1]}`)
  }
}

if (!projectsSrc.includes('linkPublic: false') || projectsSrc.includes('mirofish-trader.vercel.app')) {
  errors.push('MiroFish must stay unlinked')
}

if (errors.length > 0) {
  console.error(errors.join('\n'))
  process.exit(1)
}

console.log(`Checked ${files.length} files and ${slugs.length} case studies.`)
