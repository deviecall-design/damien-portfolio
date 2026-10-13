export function PageMain({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <main id="content" tabIndex={-1} className={['outline-none', className].filter(Boolean).join(' ')}>
      {children}
    </main>
  )
}
