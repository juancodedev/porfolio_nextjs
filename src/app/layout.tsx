import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const SITE_URL = "https://www.juancode.dev";
const SITE_TITLE = "Juan Muñoz | Full Stack Developer · Python, Django, React";
const SITE_DESCRIPTION =
  "Full Stack Developer with 4 years building production systems in Python, Django, React, PostgreSQL and AWS. HCM and payroll SaaS in Chile and Ecuador.";
// X/Twitter handle: disabled for now. Uncomment this and the site/creator lines in `twitter` to enable.
// const X_HANDLE = "@juancodedev";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1A1A" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Juan Muñoz"
  },
  description: SITE_DESCRIPTION,
  keywords: ["Full Stack Developer", "Python", "Django", "JavaScript", "React", "Redux", "Next.js", "AWS", "AWS Serverless", "PostgreSQL", "HCM", "Payroll", "Web Development", "Software Engineer", "Juan Muñoz"],
  authors: [{ name: "Juan Muñoz", url: "https://github.com/juancodedev" }],
  creator: "Juan Muñoz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Juan Muñoz Portfolio",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      type: "image/jpeg",
      alt: "Juan Muñoz - Full Stack Developer"
    }]
  },
  twitter: {
    card: "summary_large_image",
    // site: X_HANDLE,
    // creator: X_HANDLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{
      url: "/og-image.jpg",
      alt: "Juan Muñoz - Full Stack Developer"
    }]
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Juan Muñoz",
      givenName: "Juan",
      familyName: "Muñoz",
      url: SITE_URL,
      image: `${SITE_URL}/assets/new_profile.webp`,
      jobTitle: "Full Stack Developer",
      description: SITE_DESCRIPTION,
      sameAs: [
        "https://github.com/juancodedev",
        "https://www.linkedin.com/in/juanshocl/",
        "https://www.youtube.com/juanshocl",
      ],
      knowsAbout: ["Python", "Django", "JavaScript", "TypeScript", "React", "Redux", "Next.js", "PostgreSQL", "AWS"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Juan Muñoz Portfolio",
      url: SITE_URL,
      inLanguage: "en",
      description: SITE_DESCRIPTION,
      author: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
  ],
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
      <body className={`${jetbrainsMono.variable} ${inter.variable} ${sourceSerif4.variable} flex min-h-screen flex-col`}>
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-background focus:px-4 focus:py-2 focus:text-primary"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        {/* JSON-LD structured data, rendered in the server HTML so crawlers see it */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
