import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "La Casa di Carlotta - Luxury Apartments in Naples",
  description:
    "Discover luxury apartments in the heart of Naples. Elegant spaces, premium services, and authentic Italian hospitality. Explore available units and book your stay.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
