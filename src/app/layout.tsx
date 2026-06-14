import type { Metadata } from "next";
import { JetBrains_Mono, Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: '--font-jetbrainsMono'
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: '--font-inter'
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: '--font-source-serif'
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.juancodedev.dev"),
  title: {
    default: "Juan Muñoz - Full Stack Developer Portfolio",
    template: "%s | Juan Muñoz"
  },
  description: "Full Stack Developer specializing in Python, JavaScript, React, Next.js, and AWS. Over 3 years of experience building modern web applications and cloud solutions.",
  keywords: ["Full Stack Developer", "Python", "JavaScript", "React", "Next.js", "AWS", "PostgreSQL", "Web Development", "Software Engineer", "Juan Muñoz"],
  authors: [{ name: "Juan Muñoz", url: "https://github.com/juancodedev" }],
  creator: "Juan Muñoz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.juancodedev.dev",
    title: "Juan Muñoz - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in Python, JavaScript, React, Next.js, and AWS. Over 3 years of experience building modern web applications.",
    siteName: "Juan Muñoz Portfolio",
    images: [{
      url: "/profile.png",
      width: 1200,
      height: 630,
      alt: "Juan Muñoz - Full Stack Developer"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Muñoz - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in Python, JavaScript, React, Next.js, and AWS.",
    images: ["/profile.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // TODO: Add Google Search Console verification code
  // verification: { google: "your-code" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} ${inter.variable} ${sourceSerif4.variable}`}>
        <SpeedInsights />
        <Analytics />
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
