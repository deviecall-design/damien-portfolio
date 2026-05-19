'use client'

export function GhostMurmurVisual() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-40 bg-black rounded-lg" xmlns="http://www.w3.org/2000/svg">
      {/* Baseline */}
      <line x1="0" y1="100" x2="300" y2="100" stroke="#ff0055" strokeWidth="0.5" opacity="0.3" />

      {/* ECG waveform */}
      <g stroke="#ff0055" strokeWidth="1.5" fill="none">
        <polyline points="0,100 15,100 25,75 35,100 45,100 55,90 60,70 65,90 70,100 85,100 95,95 100,85 105,95 110,100 130,100 140,50 160,150 170,100 190,100" />
        
        {/* Animated scanning line */}
        <line x1="0" y1="0" x2="0" y2="200" stroke="#ff0055" strokeWidth="0.8" opacity="0.8">
          <animate attributeName="x1" values="0;300" dur="3s" repeatCount="indefinite" />
          <animate attributeName="x2" values="300;600" dur="3s" repeatCount="indefinite" />
        </line>
      </g>

      {/* Heart pulse indicator */}
      <circle cx="40" cy="30" r="8" fill="none" stroke="#ff0055" strokeWidth="1.5">
        <animate attributeName="r" values="8;14" dur="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0" dur="1s" repeatCount="indefinite" />
      </circle>

      {/* Heart symbol */}
      <text x="30" y="35" fill="#ff0055" fontSize="14" fontWeight="bold">❤</text>

      {/* Sensor points */}
      <g fill="#ff0055" opacity="0.7">
        <circle cx="80" cy="50" r="2" />
        <circle cx="150" cy="45" r="2" />
        <circle cx="220" cy="55" r="2" />
      </g>

      {/* Labels */}
      <text x="10" y="190" fill="#ff0055" fontSize="9" fontFamily="monospace" opacity="0.5">CARDIAC MONITORING</text>
      <text x="200" y="190" fill="#ff0055" fontSize="9" fontFamily="monospace" opacity="0.5">72 BPM</text>
    </svg>
  )
}
