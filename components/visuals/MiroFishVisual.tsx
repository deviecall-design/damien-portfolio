'use client'

export function MiroFishVisual() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-40 bg-black rounded-lg" xmlns="http://www.w3.org/2000/svg">
      {/* Wave grid background */}
      <g stroke="#00ccff" strokeWidth="0.3" opacity="0.1">
        {[0,20,40,60,80,100,120,140,160,180,200].map(y => (
          <line key={y} x1="0" y1={y} x2="300" y2={y} />
        ))}
      </g>

      {/* Swarm particles */}
      {[
        {cx:40,cy:80,dur:"3s",dx:"60",dy:"20"},
        {cx:70,cy:60,dur:"2.8s",dx:"50",dy:"30"},
        {cx:55,cy:100,dur:"3.2s",dx:"70",dy:"10"},
        {cx:200,cy:70,dur:"2.5s",dx:"-50",dy:"30"},
        {cx:220,cy:100,dur:"2.9s",dx:"-60",dy:"20"},
        {cx:210,cy:130,dur:"3.1s",dx:"-45",dy:"-10"},
        {cx:130,cy:40,dur:"4s",dx:"10",dy:"60"},
        {cx:160,cy:160,dur:"3.7s",dx:"-20",dy:"-50"},
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.cx} cy={p.cy} r="3" fill="#00ccff" opacity="0.8">
            <animate attributeName="cx" values={`${p.cx};${p.cx+parseInt(p.dx)};${p.cx}`} dur={p.dur} repeatCount="indefinite" />
            <animate attributeName="cy" values={`${p.cy};${p.cy+parseInt(p.dy)};${p.cy}`} dur={p.dur} repeatCount="indefinite" />
          </circle>
          <circle cx={p.cx} cy={p.cy} r="3" fill="none" stroke="#00ccff" strokeWidth="1" opacity="0.3">
            <animate attributeName="r" values="3;8" dur={p.dur} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0" dur={p.dur} repeatCount="indefinite" />
            <animate attributeName="cx" values={`${p.cx};${p.cx+parseInt(p.dx)};${p.cx}`} dur={p.dur} repeatCount="indefinite" />
            <animate attributeName="cy" values={`${p.cy};${p.cy+parseInt(p.dy)};${p.cy}`} dur={p.dur} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* Central consensus node */}
      <circle cx="150" cy="100" r="10" fill="none" stroke="#00ccff" strokeWidth="2" opacity="0.9" />
      <circle cx="150" cy="100" r="5" fill="#00ccff" opacity="0.9" />
      <circle cx="150" cy="100" r="10" fill="none" stroke="#00ccff" strokeWidth="1" opacity="0.5">
        <animate attributeName="r" values="10;25" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Sentiment indicators */}
      <text x="110" y="95" fill="#00ccff" fontSize="7" fontFamily="monospace" opacity="0.6">BULLISH</text>
      <text x="110" y="115" fill="#ff4444" fontSize="7" fontFamily="monospace" opacity="0.6">BEARISH</text>

      {/* Labels */}
      <text x="10" y="190" fill="#00ccff" fontSize="9" fontFamily="monospace" opacity="0.5">SWARM INTELLIGENCE</text>
      <text x="200" y="190" fill="#00ccff" fontSize="9" fontFamily="monospace" opacity="0.7">8 AGENTS</text>
    </svg>
  )
}
