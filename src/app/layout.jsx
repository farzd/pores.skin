import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s - Pores',
    default: 'Pores - AI Skin Analysis',
  },
  description:
    'Transform your skincare routine with our AI skin scanner. Get personalized skin scans, detailed analyses, and expert product recommendations tailored to your skin’s unique needs. Start your journey to healthier, radiant skin today!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('bg-white antialiased', inter.variable)}>
      <body>{children}</body>
    </html>
  )
}
