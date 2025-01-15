import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Deutsch Humanizer - KI-Text-Optimierung',
  description: 'Verwandeln Sie KI-generierten Text in natürlich klingende deutsche Sprache',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

