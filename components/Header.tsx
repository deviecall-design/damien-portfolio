import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b border-gray-800 bg-black/50 backdrop-blur">
      <div className="px-4 sm:px-8 lg:px-16 py-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-lg font-bold hover:text-gray-300 transition-colors">
              DC
            </Link>
            <nav className="hidden md:flex gap-8 text-sm text-gray-400">
              <a href="/work" className="hover:text-white transition-colors">Work</a>
              <a href="/research" className="hover:text-white transition-colors">Research</a>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="https://www.linkedin.com/in/damiencallaghan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/deviecall-design" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
