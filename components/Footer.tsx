export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="px-4 sm:px-8 lg:px-16 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Systems</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">God's Eye</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lattice Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ghost Murmur</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Enterprise</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Foundry & OSDK</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ember</a></li>
              <li><a href="https://electrascan.io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ElectraScan</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://www.linkedin.com/in/damiencallaghan/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/deviecall-design" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="mailto:damien@deviecall.com" className="hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} Damien Callaghan. All rights reserved.</p>
          <p>Built with Next.js. Deployed on Vercel.</p>
        </div>
      </div>
    </footer>
  )
}
