import { Providers } from './providers'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: true })
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EventTix - Event Management & Ticketing System',
  description: 'Modern event management and ticketing platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
