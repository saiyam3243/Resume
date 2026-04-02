import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: "Saiyam Jain — Frontend & Fullstack Engineer",
  description: "Munich-based software engineer with 3+ years experience in React, TypeScript, and Java. Open to junior/mid-level roles.",
  openGraph: {
    title: "Saiyam Jain — Frontend & Fullstack Engineer",
    description: "Portfolio of Saiyam Jain, TU Munich CS student and working developer at Yunex Traffic.",
    url: "https://saiyamjain.de",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
