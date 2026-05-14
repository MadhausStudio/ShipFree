import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Bricolage_Grotesque, Inter, Cormorant_Garamond } from 'next/font/google'

import '@/app/_styles/globals.css'
import { QueryProvider } from '@/app/_providers/query-provider'
import { ToastProvider } from '@/components/ui/toast'
import { generateMetadata } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const bricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-bricolage-grotesque',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  ...generateMetadata({
    title: 'Spruce Ridge Wellness | Pelvic Health & Medical Aesthetics in Newfoundland',
    description:
      "FRCSC surgeon-led pelvic health, medical aesthetics, skin treatments, and women's wellness in Bay Roberts and St. John's, Newfoundland. Evidence-based, compassionate, stigma-free care.",
    isRootLayout: true,
  }),
  icons: {
    icon: '/images/logo-mark.png',
    shortcut: '/images/logo-mark.png',
    apple: '/images/logo-mark.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0F2A1F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${geistMono.variable} ${bricolageGrotesque.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <QueryProvider>
          <ToastProvider>{children}</ToastProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
