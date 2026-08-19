export const metadata = { title: 'Scratch Site' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer
          style={{
            backgroundColor: '#1d4ed8',
            color: '#ffffff',
            padding: '16px',
            textAlign: 'center',
            marginTop: '32px',
          }}
        >
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} Scratch Site</p>
        </footer>
      </body>
    </html>
  )
}
