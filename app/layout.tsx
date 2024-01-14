import './globals.css'
import "prismjs/themes/prism.css"
import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro',
})

export const metadata: Metadata = {
  title: 'Animate In',
  description: 'Generate custom Open AI functions that return JSON',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sourceCodePro.variable}`}>
      <body>{children}</body>
    </html>
  )
}
