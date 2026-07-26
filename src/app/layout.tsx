import type { Metadata } from "next";
import { JetBrains_Mono, Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: '--font-jetbrainsMono',
  display: 'swap',
  preload: false,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: '--font-inter',
  display: 'swap',
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: '--font-source-serif',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.juancodedev.dev"),
  title: {
    default: "Juan Muñoz - Full Stack Developer Portfolio",
    template: "%s | Juan Muñoz"
  },
  description: "Full Stack Developer with 19 years in IT and 3+ years building modern web applications. Specialized in Python, React, Next.js, AWS, and cloud solutions.",
  keywords: ["Full Stack Developer", "Python", "JavaScript", "React", "Next.js", "AWS", "PostgreSQL", "Web Development", "Software Engineer", "Juan Muñoz"],
  authors: [{ name: "Juan Muñoz", url: "https://github.com/juancodedev" }],
  creator: "Juan Muñoz",
  alternates: {
    canonical: "https://www.juancodedev.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.juancodedev.dev",
    title: "Juan Muñoz - Full Stack Developer Portfolio",
    description: "Full Stack Developer with 19 years in IT and 3+ years building modern applications. Python, React, Next.js, AWS.",
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
  verification: {
    // Get your verification code from Google Search Console and add it below
    google: "0-XgaOFCJ-mGCf6F8eqk2J4L7lUB_qYzaabSy_N-vKQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NMR8WGWX');`,
          }}
        />
      <body className={`${jetbrainsMono.variable} ${inter.variable} ${sourceSerif4.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NMR8WGWX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <SpeedInsights />
        <Analytics />
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        {/* JSON-LD Structured Data for rich snippets */}
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Juan Muñoz",
              givenName: "Juan",
              familyName: "Muñoz",
              url: "https://www.juancodedev.dev",
              image: "https://www.juancodedev.dev/assets/new_profile.webp",
              jobTitle: "Full Stack Developer",
              description: "Full Stack Developer with 19 years in IT and 3+ years building modern web applications. Specialized in Python, React, Next.js, AWS, and cloud solutions.",
              sameAs: [
                "https://github.com/juancodedev",
                "https://www.linkedin.com/in/juanshocl/",
                "https://www.youtube.com/juanshocl",
              ],
              knowsAbout: ["Python", "JavaScript", "React", "Next.js", "AWS", "PostgreSQL", "TypeScript", "Web Development"],
            }),
          }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Juan Muñoz Portfolio",
              url: "https://www.juancodedev.dev",
              description: "Full Stack Developer portfolio showcasing web development projects and services.",
              author: {
                "@type": "Person",
                name: "Juan Muñoz",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
