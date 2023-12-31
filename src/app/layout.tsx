import './globals.css'
import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'CarZ',
  description: 'Get your favourite car in just few clicks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
