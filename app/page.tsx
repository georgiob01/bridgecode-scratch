export default function Home() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '96px 24px 80px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ marginBottom: 16 }}>Welcome to the Scratch Site</h1>
      <p
        style={{
          color: 'var(--muted)',
          fontSize: '1.15rem',
          maxWidth: 520,
          margin: '0 auto 36px',
        }}
      >
        This homepage exists so Bridgecode sessions have something to change.
      </p>
      <a
        href="/pricing"
        style={{
          display: 'inline-block',
          background: 'var(--accent)',
          color: '#fff',
          padding: '14px 32px',
          borderRadius: 10,
          textDecoration: 'none',
          fontWeight: 600,
          letterSpacing: '0.01em',
          boxShadow: '0 8px 20px rgba(26, 26, 46, 0.18)',
        }}
      >
        View pricing
      </a>
    </main>
  )
}
