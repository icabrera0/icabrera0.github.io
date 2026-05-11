import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Izan Cabrera Martínez — Software Engineer & QA",
  description:
    "Software Engineer with 3+ years in QA at Telefónica. Python automation, AI-driven tools, Claude API, agent swarms.",
  openGraph: {
    title: "Izan Cabrera Martínez — Software Engineer & QA",
    description:
      "Software Engineer with 3+ years in QA at Telefónica. Python automation, AI-driven tools.",
    url: "https://icabrera0.github.io",
    siteName: "Izan Cabrera Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Izan Cabrera Martínez — Software Engineer & QA",
    description: "Software Engineer with 3+ years in QA at Telefónica.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="bg-black antialiased">{children}</body>
    </html>
  )
}
