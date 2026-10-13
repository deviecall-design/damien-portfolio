import { spawnSync } from 'node:child_process'
import { mkdirSync } from 'node:fs'

const browsers = ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser']
const chrome = browsers.find((bin) => spawnSync('which', [bin], { encoding: 'utf8' }).status === 0)

if (!chrome) {
  console.error('No Chrome or Chromium binary found. Install one, then rerun this script.')
  process.exit(1)
}

mkdirSync('public/lab', { recursive: true })

const target = 'https://echo-oncology.vercel.app/eagleeye-guided'
const output = 'public/lab/echo-oncology.png'

const result = spawnSync(
  chrome,
  [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--hide-scrollbars',
    '--window-size=1440,900',
    `--screenshot=${output}`,
    target,
  ],
  { stdio: 'inherit' },
)

if (result.status !== 0) process.exit(result.status ?? 1)

console.log(`Wrote ${output}`)
console.log('Review the shot before using it. It is not referenced by the site until the stand-in image is replaced.')
console.log('This script does not capture unlinked or private projects.')
