import type { Metadata } from "next"
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://anomalyer.vercel.app"
  ),
  title: {
    default: "AnomalyeR | Manga independiente",
    template: "%s | AnomalyeR",
  },
  description:
    "Web oficial de AnomalyeR, un manga independiente con una experiencia editorial oscura, íntima y atmosférica.",
  openGraph: {
    title: "AnomalyeR",
    description:
      "Manga independiente, noticias de autor, progreso de obra y futuros capítulos web.",
    images: ["/anomalyer-cover.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  )
}
