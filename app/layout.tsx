import './globals.css'
import "prismjs/themes/prism.css"
import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro',
})

const title = "Animate In"
const description = 'React UI Component for animating elements in with Tailwind and CSS Animation'

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: "website",
    url: "https://animate-in.vercel.app/",
    title,
    description,
    siteName: title,
    images: [{
      url: "https://animate-in.vercel.app/screenshot.jpg",
    }],
  },
  twitter: {
    card: "summary_large_image", 
    creator: "@johnpolacek", 
    images: "https://animate-in.vercel.app/screenshot.jpg",
  }
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
