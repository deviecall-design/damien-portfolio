'use client'

export function GodsEyeVisual() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-40 bg-black rounded-lg" xmlns="http://www.w3.org/2000/svg">
      {/* Radar rings */}
      {[30, 60, 90, 120].map((r, i) => (
        <circle key={r} cx="150" cy="100" r={r} fill="none" stroke="#00ff41" strokeWidth="0.5" opacity={0.3 - i * 0.05} />
      ))}
      {/* Crosshairs */}
      <line x1="150" y1="0" x2="150" y2="200" stroke="#00ff41" strokeWidth="0.4" opacity="0.2" />
      <line x1="0" y1="100" x2="300" y2="100" stroke="#00ff41" strokeWidth="0.4" opacity="0.2" />
      {/* Sweep */}
      <animateTransform attributeName="transform" type="rotate" values="0 150 100;360 150 100" dur="4s" repeatCount="indefinite" />
      <line x1="150" y1="100" x2="150" y2="0" stroke="#00ff41" strokeWidth="1.5" opacity="0.8" />
      <line x1="150" y1="100" x2="150" y2="0" stroke="#00ff41" strokeWidth="20" opacity="0.05" />
      {/* Blips */}
      <circle cx="190" cy="70" r="3" fill="#00ff41" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="115" cy="130" r="2" fill="#00ff41" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.1;0.7" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="220" cy="115" r="2.5" fill="#00ff41" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.5s" repeatCount="indefinite" />
      </circle>
      {/* Center dot */}
      <circle cx="150" cy="100" r="3" fill="#00ff41" />
      <text x="10" y="190" fill="#00ff41" fontSize="9" fontFamily="monospace" opacity="0.5">SENSOR FUSION ACTIVE</text>
      <text x="200" y="190" fill="#00ff41" fontSize="9" fontFamily="monospace" opacity="0.5">3 NODES</text>
    </svg>
  )
}
