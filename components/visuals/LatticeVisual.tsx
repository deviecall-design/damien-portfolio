'use client'

export function LatticeVisual() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-40 bg-black rounded-lg" xmlns="http://www.w3.org/2000/svg">
      {/* Background grid */}
      <g stroke="#0066ff" strokeWidth="0.5" opacity="0.1">
        {[0, 50, 100, 150, 200, 250, 300].map(x => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="200" />
        ))}
        {[0, 50, 100, 150, 200].map(y => (
          <line key={`h${y}`} x1="0" y1={y} x2="300" y2={y} />
        ))}
      </g>
      
      {/* Nodes */}
      <g id="nodes">
        {/* Top tier */}
        <circle cx="75" cy="40" r="4" fill="#0066ff" />
        <circle cx="150" cy="40" r="4" fill="#0066ff" />
        <circle cx="225" cy="40" r="4" fill="#0066ff" />
        
        {/* Middle tier */}
        <circle cx="50" cy="100" r="4" fill="#0066ff" />
        <circle cx="150" cy="100" r="4" fill="#00ff41" />
        <circle cx="250" cy="100" r="4" fill="#0066ff" />
        
        {/* Bottom tier */}
        <circle cx="75" cy="160" r="4" fill="#0066ff" />
        <circle cx="150" cy="160" r="4" fill="#0066ff" />
        <circle cx="225" cy="160" r="4" fill="#0066ff" />
      </g>

      {/* Connections with animation */}
      <g stroke="#0066ff" strokeWidth="1" opacity="0.6">
        {/* Top to middle */}
        <line x1="75" y1="40" x2="50" y2="100" />
        <line x1="150" y1="40" x2="150" y2="100" strokeWidth="1.5" stroke="#00ff41" opacity="0.8" />
        <line x1="225" y1="40" x2="250" y2="100" />
        
        {/* Middle to bottom */}
        <line x1="50" y1="100" x2="75" y2="160" />
        <line x1="150" y1="100" x2="150" y2="160" strokeWidth="1.5" stroke="#00ff41" opacity="0.8" />
        <line x1="250" y1="100" x2="225" y2="160" />
      </g>

      {/* Pulse animation on center node */}
      <circle cx="150" cy="100" r="4" fill="none" stroke="#00ff41" strokeWidth="1">
        <animate attributeName="r" values="4;15" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Labels */}
      <text x="10" y="190" fill="#0066ff" fontSize="9" fontFamily="monospace" opacity="0.5">ASSET MESH</text>
      <text x="200" y="190" fill="#00ff41" fontSize="9" fontFamily="monospace" opacity="0.7">9 NODES</text>
    </svg>
  )
}
