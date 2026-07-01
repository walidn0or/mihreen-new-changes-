import type { Metadata } from "next"
import { Sora, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { HashScrollHandler } from "@/components/hash-scroll-handler"
import { siteDescription, siteLogo, siteName, siteUrl } from "@/lib/site"
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Mining, Construction & Professional Services`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Mihreen LLC",
    "mining extraction",
    "construction services",
    "procurement and supply",
    "warehouse management",
    "logistics and transportation",
    "professional services",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} | Delivering Trust`,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/background.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Mining, Construction & Professional Services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Delivering Trust`,
    description: siteDescription,
    images: [`${siteUrl}/background.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: siteLogo, type: "image/svg+xml" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body className={`${dmSans.className} antialiased`}>
        <HashScrollHandler />
        <div className="pt-[68px]">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
