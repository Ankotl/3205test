import '../styles/globals.scss'
import type { Metadata } from 'next'

import { ralewayFont } from '@/styles/fonts'

export const metadata: Metadata = {
  title: 'Приветствую 3205.team',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ralewayFont.variable}>{children}</body>
    </html>
  )
}
