import Link from 'next/link'
import { PageFrame } from '@/components/PageFrame'
import { textLinkClass } from '@/lib/site'

export default function NotFound() {
  return (
    <PageFrame>
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">404</p>
      <h1 className="mt-3 font-serif text-5xl tracking-[-0.03em] text-ink">This page is not on the site.</h1>
      <p className="mt-6 max-w-xl text-lg text-muted">The lab is the index of proofs of concept.</p>
      <div className="mt-8 flex gap-5 text-sm">
        <Link href="/" className={textLinkClass}>
          Home
        </Link>
        <Link href="/lab" className={textLinkClass}>
          Lab
        </Link>
      </div>
    </PageFrame>
  )
}
