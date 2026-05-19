'use client'

export function EmberVisual() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-40 bg-black rounded-lg" xmlns="http://www.w3.org/2000/svg">
      {/* Swarm agents */}
      <g id="agents">
        {/* Agent 1 - top left */}
        <circle cx="50" cy="50" r="5" fill="#ff00ff" opacity="0.8" />
        <circle cx="50" cy="50" r="5" fill="none" stroke="#ff00ff" strokeWidth="1" opacity="0.4">
          <animate attributeName="r" values="5;12" dur="1s" repeatCount="indefinite" />
        </circle>

        {/* Agent 2 - top right */}
        <circle cx="250" cy="60" r="5" fill="#ff00ff" opacity="0.8" />
        <circle cx="250" cy="60" r="5" fill="none" stroke="#ff00ff" strokeWidth="1" opacity="0.4">
          <animate attributeName="r" values="5;12" dur="1.2s" repeatCount="indefinite" />
        </circle>

        {/* Agent 3 - center */}
        <circle cx="150" cy="100" r="6" fill="#00ff00" opacity="0.9" />
        <circle cx="150" cy="100" r="6" fill="none" stroke="#00ff00" strokeWidth="1.5" opacity="0.5">
          <animate attributeName="r" values="6;14" dur="0.8s" repeatCount="indefinite" />
        </circle>

        {/* Agent 4 - bottom left */}
        <circle cx="70" cy="150" r="5" fill="#ff00ff" opacity="0.8" />
        <circle cx="70" cy="150" r="5" fill="none" stroke="#ff00ff" strokeWidth="1" opacity="0.4">
          <animate attributeName="r" values="5;12" dur="1.1s" repeatCount="indefinite" />
        </circle>

        {/* Agent 5 - bottom right */}
        <circle cx="230" cy="140" r="5" fill="#ff00ff" opacity="0.8" />
        <circle cx="230" cy="140" r="5" fill="none" stroke="#ff00ff" strokeWidth="1" opacity="0.4">
          <animate attributeName="r" values="5;12" dur="1.3s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Connecting lines (consensus bonds) */}
      <g stroke="#00ff00" strokeWidth="0.8" opacity="0.4" fill="none">
        <line x1="50" y1="50" x2="150" y2="100" />
        <line x1="250" y1="60" x2="150" y2="100" />
        <line x1="70" y1="150" x2="150" y2="100" />
        <line x1="230" y1="140" x2="150" y2="100" />
      </g>

      {/* Animated data packets flowing to center */}
      <g fill="#00ff00" opacity="0.8">
        <circle cx="80" cy="70" r="2">
          <animate attributeName="cx" values="80;150" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="cy" values="70;100" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="80" r="2">
          <animate attributeName="cx" values="200;150" dur="1.4s" repeatCount="indefinite" />
          <animate attributeName="cy" values="80;100" dur="1.4s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Center coordination indicator */}
      <text x="140" y="110" fill="#00ff00" fontSize="10" fontFamily="monospace" fontWeight="bold">COORD</text>

      {/* Labels */}
      <text x="10" y="190" fill="#ff00ff" fontSize="9" fontFamily="monospace" opacity="0.5">AGENT SWARM</text>
      <text x="210" y="190" fill="#00ff00" fontSize="9" fontFamily="monospace" opacity="0.5">5 AGENTS</text>
    </svg>
  )
}
