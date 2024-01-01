import type { Metadata } from 'next'
import { Roboto, Oswald } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const oswald = Oswald({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Matt Hall - Full Stack Software Developer',
  description: 'Professional portfolio site for Matt Hall',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ `${roboto.className} ${oswald.className}` }>{children}</body>
    </html>
  )
}
