import type { Metadata, Viewport } from 'next'
import { Instrument_Sans, Instrument_Serif } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { site } from '@/data/site'
import './globals.css'

const sans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const serif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
})

export const viewport: Viewport = {
  themeColor: '#f4f1ea',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Designer-engineer`,
    template: `%s — ${site.name}`,
  },
  description: `${site.role} ${site.description}`,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.linkedin }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Designer-engineer`,
    description: `${site.role} ${site.description}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Designer-engineer`,
    description: `${site.role} ${site.description}`,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: site.url,
    jobTitle: 'Designer-engineer',
    email: `mailto:${site.email}`,
    sameAs: [site.linkedin, site.github],
  }

  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="relative flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
