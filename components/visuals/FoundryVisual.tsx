'use client'

export function FoundryVisual() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-40 bg-black rounded-lg" xmlns="http://www.w3.org/2000/svg">
      {/* Data sources on left */}
      <rect x="10" y="20" width="40" height="30" fill="none" stroke="#ffaa00" strokeWidth="1" opacity="0.7" />
      <text x="20" y="42" fill="#ffaa00" fontSize="8" fontFamily="monospace">DATA</text>
      
      <rect x="10" y="80" width="40" height="30" fill="none" stroke="#ffaa00" strokeWidth="1" opacity="0.7" />
      <text x="15" y="102" fill="#ffaa00" fontSize="8" fontFamily="monospace">EVENTS</text>
      
      <rect x="10" y="140" width="40" height="30" fill="none" stroke="#ffaa00" strokeWidth="1" opacity="0.7" />
      <text x="15" y="162" fill="#ffaa00" fontSize="8" fontFamily="monospace">STREAMS</text>

      {/* Central orchestration */}
      <rect x="120" y="60" width="60" height="80" fill="none" stroke="#00ff41" strokeWidth="1.5" opacity="0.8" />
      <text x="135" y="85" fill="#00ff41" fontSize="8" fontFamily="monospace">ONTOLOGY</text>
      <text x="140" y="130" fill="#00ff41" fontSize="8" fontFamily="monospace">LAYER</text>

      {/* Animated data flow arrows */}
      <g stroke="#ffaa00" strokeWidth="1" fill="none" markerEnd="url(#arrowhead)">
        <path d="M 50 35 Q 85 50 120 90" opacity="0.7">
          <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M 50 95 Q 85 90 120 100" opacity="0.7">
          <animate attributeName="stroke-dashoffset" values="0;-10" dur="2.2s" repeatCount="indefinite" />
        </path>
        <path d="M 50 155 Q 85 130 120 110" opacity="0.7">
          <animate attributeName="stroke-dashoffset" values="0;-10" dur="2.4s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Output transformations */}
      <rect x="250" y="60" width="40" height="80" fill="none" stroke="#0066ff" strokeWidth="1" opacity="0.7" />
      <text x="255" y="85" fill="#0066ff" fontSize="8" fontFamily="monospace">AIP</text>
      <text x="255" y="130" fill="#0066ff" fontSize="8" fontFamily="monospace">API</text>

      {/* Data flow out */}
      <g stroke="#0066ff" strokeWidth="1" fill="none">
        <path d="M 180 100 L 250 100" opacity="0.7">
          <animate attributeName="stroke-dashoffset" values="0;-10" dur="2.3s" repeatCount="indefinite" />
        </path>
      </g>

      {/* SVG marker for arrows */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#ffaa00" />
        </marker>
      </defs>

      {/* Labels */}
      <text x="10" y="190" fill="#ffaa00" fontSize="9" fontFamily="monospace" opacity="0.5">DATA PIPELINE</text>
      <text x="220" y="190" fill="#0066ff" fontSize="9" fontFamily="monospace" opacity="0.5">TRANSFORM</text>
    </svg>
  )
}
