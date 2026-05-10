import type { Metadata } from 'next'
import { Fraunces, DM_Sans } from 'next/font/google'
import SmoothScroll from '@/components/SmoothScroll'
import Cursor from '@/components/Cursor'
import PageLoader from '@/components/PageLoader'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cornelouis — Full-Stack Developer',
  description:
    'Code is my craft. Music is my soul. ' +
    'Full-stack developer based in Cikarang, Indonesia.',
  openGraph: {
    title: 'Cornelouis — Full-Stack Developer',
    description: 'Code is my craft. Music is my soul.',
    url: 'https://cornelouis-portfolio.vercel.app',
    siteName: 'Cornelouis',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cornelouis — Full-Stack Developer',
    description: 'Code is my craft. Music is my soul.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-bg text-ink">
        <PageLoader />
        <Cursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}