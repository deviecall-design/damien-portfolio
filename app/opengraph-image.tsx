import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Damien Callaghan, designer-engineer building AI products'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f6f4f0',
          color: '#1c1917',
          padding: '72px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 22, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          Damien Callaghan
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 68, lineHeight: 1.05, maxWidth: 920 }}>
            Designer-engineer building AI products.
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 28, color: '#44403c' }}>
            Proofs of concept, labelled honestly.
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
