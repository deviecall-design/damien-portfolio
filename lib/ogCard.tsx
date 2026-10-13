export function OgCard({
  kicker,
  title,
  footer,
}: {
  kicker: string
  title: string
  footer: string
}) {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        background: '#f4f1ea',
        color: '#171614',
      }}
    >
      <div style={{ width: 18, background: '#1a403a' }} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', fontSize: 22, letterSpacing: 3, color: '#1a403a' }}>
          {kicker}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: title.length > 42 ? 54 : 68,
            lineHeight: 1.05,
            letterSpacing: -1,
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#3c3934', maxWidth: 900 }}>
          {footer}
        </div>
      </div>
    </div>
  )
}
