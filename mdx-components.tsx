import type { MDXComponents } from 'mdx/types'
import type { ReactNode } from 'react'

function ExternalAwareLink({
  href,
  children,
}: {
  href?: string
  children?: ReactNode
}) {
  const external = Boolean(href && href.startsWith('http'))
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ExternalAwareLink,
  }
}
