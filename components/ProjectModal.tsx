'use client'

import { useEffect } from 'react'
import { GodsEyeVisual } from './visuals/GodsEyeVisual'
import { LatticeVisual } from './visuals/LatticeVisual'
import { GhostMurmurVisual } from './visuals/GhostMurmurVisual'
import { FoundryVisual } from './visuals/FoundryVisual'
import { EmberVisual } from './visuals/EmberVisual'
import { MiroFishVisual } from './visuals/MiroFishVisual'
import { ElectraScanVisual } from './visuals/ElectraScanVisual'

interface ModalContent {
  title: string
  tagline: string
  body: string
  snippet?: string
  snippetLabel?: string
  footer: string
  footerType: 'nda' | 'live' | 'research' | 'partner'
}

interface ProjectModalProps {
  content: ModalContent
  projectId?: string
  onClose: () => void
}

const visualComponents: Record<string, () => JSX.Element> = {
  'gods-eye': GodsEyeVisual,
  'lattice-integration': LatticeVisual,
  'ghost-murmur': GhostMurmurVisual,
  'foundry-work': FoundryVisual,
  'ember': EmberVisual,
  'mirofish': MiroFishVisual,
  'electrascan': ElectraScanVisual,
}

const footerStyles = {
  nda: 'border-yellow-800 bg-yellow-950 text-yellow-300',
  live: 'border-emerald-800 bg-emerald-950 text-emerald-300',
  research: 'border-purple-800 bg-purple-950 text-purple-300',
  partner: 'border-blue-800 bg-blue-950 text-blue-300',
}

export function ProjectModal({ content, projectId, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const VisualComponent = projectId ? visualComponents[projectId] : null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-2xl bg-white border border-gray-300 rounded-xl shadow-2xl overflow-hidden animate-in">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold mb-1 text-gray-900">{content.title}</h2>
            <p className="text-gray-600 text-sm">{content.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 transition-colors ml-4 mt-1 text-xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {VisualComponent && (
            <div className="rounded-lg overflow-hidden border border-gray-300 bg-gray-50 p-3">
              <VisualComponent />
            </div>
          )}

          <p className="text-gray-800 leading-relaxed">{content.body}</p>

          {content.snippet && (
            <div className="rounded-lg overflow-hidden border border-gray-300">
              {content.snippetLabel && (
                <div className="px-4 py-2 bg-gray-100 border-b border-gray-300 text-xs text-gray-600 font-mono">
                  {content.snippetLabel}
                </div>
              )}
              <pre className="p-4 text-sm text-gray-800 font-mono bg-gray-50 overflow-x-auto leading-relaxed whitespace-pre-wrap">
                {content.snippet}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mx-6 mb-6 px-4 py-3 rounded-lg border text-sm font-mono bg-gray-50 border-gray-300 text-gray-700">
          {content.footer}
        </div>
      </div>
    </div>
  )
}
