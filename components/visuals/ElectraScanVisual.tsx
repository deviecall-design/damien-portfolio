'use client'

import { useEffect, useState } from 'react'

export function ElectraScanVisual() {
  const [total, setTotal] = useState(44635)
  const [change, setChange] = useState(0)
  const [showDetection1, setShowDetection1] = useState(false)
  const [showDetection2, setShowDetection2] = useState(false)
  const [showFinal, setShowFinal] = useState(false)

  useEffect(() => {
    // Sequence: detections appear, then totals update
    const t1 = setTimeout(() => setShowDetection1(true), 600)
    const t2 = setTimeout(() => setShowDetection2(true), 1400)
    const t3 = setTimeout(() => {
      setShowFinal(true)
      // Animate the change value counting up
      let i = 0
      const interval = setInterval(() => {
        i += 155
        if (i >= 6220) { i = 6220; clearInterval(interval) }
        setChange(i)
        setTotal(44635 + i)
      }, 16)
    }, 2200)

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  const fmt = (n: number) => n.toLocaleString('en-AU', { minimumFractionDigits: 0 })

  return (
    <div className="w-full h-40 bg-[#0d0d0d] rounded-lg border border-gray-800 overflow-hidden font-mono text-xs flex flex-col">
      {/* Header bar */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-800 bg-[#111]">
        <div className="flex items-center gap-2">
          <span className="text-orange-400 font-bold text-xs">⚡ ElectraScan</span>
          <span className="text-gray-600">·</span>
          <span className="text-gray-400 text-xs">Variation Report</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
          <span className="text-gray-500 text-[10px]">AI Active</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 px-3 pt-2 pb-1">
        <div>
          <div className="text-gray-500 text-[9px] uppercase">Net Change</div>
          <div className={`text-green-400 font-bold text-sm transition-all duration-300 ${showFinal ? 'opacity-100' : 'opacity-40'}`}>
            +${fmt(change)}
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-[9px] uppercase">New Total</div>
          <div className={`text-white font-bold text-sm transition-all duration-300 ${showFinal ? 'opacity-100' : 'opacity-40'}`}>
            ${fmt(total)}
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-[9px] uppercase">Changes</div>
          <div className="text-orange-400 font-bold text-sm">7</div>
        </div>
      </div>

      {/* AI detection feed */}
      <div className="flex-1 px-3 py-1 space-y-1 overflow-hidden">
        <div className={`flex items-start gap-2 transition-all duration-500 ${showDetection1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <span className="text-yellow-500 text-[9px] px-1 rounded border border-yellow-800 bg-yellow-950 whitespace-nowrap">MEDIUM</span>
          <span className="text-gray-300 text-[10px]">EV Charger added — 2 points detected</span>
          <span className="text-green-400 text-[10px] ml-auto whitespace-nowrap">+$2,800</span>
        </div>
        <div className={`flex items-start gap-2 transition-all duration-500 ${showDetection2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <span className="text-blue-500 text-[9px] px-1 rounded border border-blue-800 bg-blue-950 whitespace-nowrap">INFO</span>
          <span className="text-gray-300 text-[10px]">Motorised Blind qty increase — 4 additional</span>
          <span className="text-green-400 text-[10px] ml-auto whitespace-nowrap">+$620</span>
        </div>
      </div>

      {/* Footer tagline */}
      <div className="px-3 py-1 border-t border-gray-800 bg-[#111]">
        <span className="text-gray-600 text-[9px] italic">Groundplan measures your plans. ElectraScan reads them — and writes your quote.</span>
      </div>
    </div>
  )
}
