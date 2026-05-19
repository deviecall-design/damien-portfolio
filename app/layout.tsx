import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Damien Callaghan | Advanced AI Systems & Distributed Architecture',
  description: 'Enterprise AI systems, distributed architecture, and autonomous coordination platforms.',
  keywords: ['AI Systems', 'Distributed Architecture', 'Autonomous Coordination', 'Enterprise AI'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
