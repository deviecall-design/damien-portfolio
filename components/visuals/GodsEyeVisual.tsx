'use client'

export function GodsEyeVisual() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-40 bg-black rounded-lg" xmlns="http://www.w3.org/2000/svg">
      {/* Define perspective transform */}
      <defs>
        <radialGradient id="globeGradient" cx="50%" cy="40%">
          <stop offset="0%" style={{stopColor: '#00ff41', stopOpacity: '0.1'}} />
          <stop offset="100%" style={{stopColor: '#00ff41', stopOpacity: '0.05'}} />
        </radialGradient>
      </defs>

      {/* Globe sphere base */}
      <circle cx="150" cy="100" r="70" fill="url(#globeGradient)" stroke="#00ff41" strokeWidth="0.5" opacity="0.6" />

      {/* Rotating longitude lines (vertical) */}
      <g stroke="#00ff41" strokeWidth="0.5" opacity="0.3">
        <line x1="150" y1="30" x2="150" y2="170" />
        <line x1="115" y1="35" x2="115" y2="165" />
        <line x1="185" y1="35" x2="185" y2="165" />
        <line x1="95" y1="50" x2="95" y2="150" />
        <line x1="205" y1="50" x2="205" y2="150" />
      </g>

      {/* Latitude lines (horizontal curves) */}
      <g stroke="#00ff41" strokeWidth="0.5" opacity="0.3" fill="none">
        <ellipse cx="150" cy="100" rx="70" ry="20" />
        <ellipse cx="150" cy="100" rx="60" ry="35" />
        <ellipse cx="150" cy="100" rx="45" ry="55" />
      </g>

      {/* Animated active nodes on globe */}
      {/* North America */}
      <circle cx="95" cy="75" r="3" fill="#00ff41" opacity="0.9">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="95" cy="75" r="3" fill="none" stroke="#00ff41" strokeWidth="1">
        <animate attributeName="r" values="3;12" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Europe/Africa */}
      <circle cx="170" cy="85" r="3" fill="#00ff41" opacity="0.8">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="85" r="3" fill="none" stroke="#00ff41" strokeWidth="1">
        <animate attributeName="r" values="3;12" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Asia/Pacific */}
      <circle cx="205" cy="100" r="3" fill="#00ff41" opacity="0.7">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="205" cy="100" r="3" fill="none" stroke="#00ff41" strokeWidth="1">
        <animate attributeName="r" values="3;12" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* South America */}
      <circle cx="120" cy="130" r="2.5" fill="#00ff41" opacity="0.6">
        <animate attributeName="opacity" values="0.1;0.6;0.1" dur="2.2s" repeatCount="indefinite" />
      </circle>

      {/* Center indicator */}
      <circle cx="150" cy="100" r="5" fill="#00ff41" opacity="0.8" />
      <circle cx="150" cy="100" r="5" fill="none" stroke="#00ff41" strokeWidth="1.5" opacity="0.6">
        <animate attributeName="r" values="5;20" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Globe rotation animation (subtle tilt) */}
      <g opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" values="0 150 100;360 150 100" dur="20s" repeatCount="indefinite" />
        <circle cx="150" cy="100" r="70" fill="none" stroke="#00ff41" strokeWidth="0.3" opacity="0.2" />
      </g>

      {/* Labels */}
      <text x="10" y="190" fill="#00ff41" fontSize="9" fontFamily="monospace" opacity="0.5">GLOBAL COVERAGE</text>
      <text x="210" y="190" fill="#00ff41" fontSize="9" fontFamily="monospace" opacity="0.5">4 ACTIVE</text>
    </svg>
  )
}
