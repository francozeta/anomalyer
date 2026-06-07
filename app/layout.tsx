import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anomalyer.vercel.app"
const siteDescription =
  "Acompaña a Pierre y Mercedes en AnomalyeR, una historia independiente de drama, existencialismo y ciencia ficción anómala a través de Terra-3."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "AnomalyeR",
  title: {
    default: "AnomalyeR | Manga independiente",
    template: "%s | AnomalyeR",
  },
  description: siteDescription,
  keywords: [
    "AnomalyeR",
    "manga independiente",
    "Pierre Dessendre",
    "Mercedes Rhiannon",
    "Terra-3",
    "ciencia ficcion anomalía",
    "manga grunge",
    "drama existencialista",
  ],
  authors: [
    {
      name: "Paintress Anomalyer",
      url: "https://www.instagram.com/paintress.anomalyer/",
    },
  ],
  creator: "Paintress Anomalyer",
  publisher: "Paintress Anomalyer",
  category: "manga",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AnomalyeR | Manga independiente",
    description: siteDescription,
    url: "/",
    siteName: "AnomalyeR",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/anomalyer-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Portada de AnomalyeR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnomalyeR | Manga independiente",
    description: siteDescription,
    images: ["/anomalyer-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
        <Analytics />
      </body>
    </html>
  )
}
