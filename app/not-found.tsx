import Link from 'next/link'
import { PageMain } from '@/components/PageMain'

export default function NotFound() {
  return (
    <PageMain className="mx-auto max-w-page px-5 py-24 sm:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-pine">404</p>
      <h1 className="mt-4 font-serif text-5xl tracking-tight">This page is not on the site.</h1>
      <p className="mt-4 max-w-lg text-ink-soft">The lab index is the surest place to continue.</p>
      <Link
        href="/lab"
        className="mt-8 inline-flex min-h-11 items-center rounded-full bg-pine px-5 text-sm font-medium text-paper"
      >
        Browse the lab
      </Link>
    </PageMain>
  )
}
