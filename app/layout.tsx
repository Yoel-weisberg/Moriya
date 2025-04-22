import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'מגע לנשמה',
  description: 'מגע לנשמה',
  generator: 'v0.dev',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
