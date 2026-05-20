import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="px-4 sm:px-8 lg:px-16 py-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-lg font-bold hover:text-gray-700 transition-colors">
              DC
            </Link>
            <nav className="hidden md:flex gap-8 text-sm text-gray-600">
              <a href="/work" className="hover:text-gray-900 transition-colors">Work</a>
              <a href="/research" className="hover:text-gray-900 transition-colors">Research</a>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="https://www.linkedin.com/in/damiencallaghan/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/deviecall-design" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
