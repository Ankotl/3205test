import { Raleway } from 'next/font/google'

export const ralewayFont = Raleway({
  variable: '--font-main',
  style: ['normal', 'italic'],
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700', '800'],
})
