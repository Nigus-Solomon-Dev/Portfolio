 import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata = {
  title: 'Nigus Solomon | Full-Stack Developer',
  description:
    'Full-Stack Developer based in Addis Ababa, Ethiopia. Specializing in Flutter, React, Next.js, Node.js, and modern web & mobile development.',
  keywords: [
    'Full-Stack Developer',
    'Flutter Developer',
    'React Developer',
    'Next.js',
    'Addis Ababa',
    'Ethiopia',
    'Nigus Solomon',
  ],
  authors: [{ name: 'Nigus Solomon' }],
  openGraph: {
    title: 'Nigus Solomon | Full-Stack Developer',
    description: 'Full-Stack Developer based in Addis Ababa, Ethiopia.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
