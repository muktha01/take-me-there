import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Take Me There - Discover Incredible India | Travel Guides & Itineraries",
    template: "%s | Take Me There - India Travel Guide"
  },
  description: "Explore India's diverse destinations with comprehensive travel guides, cultural insights, and detailed itineraries. From sacred temples to pristine beaches, hill stations to heritage sites - discover incredible India with Take Me There.",
  keywords: [
    "India travel guide", "Indian destinations", "travel itineraries India", 
    "Indian temples", "Kerala backwaters", "Rajasthan heritage", "Goa beaches",
    "Himachal Pradesh", "spiritual journeys India", "Indian culture", 
    "travel planning India", "Indian tourism", "incredible India",
    "Indian hill stations", "wildlife safari India", "heritage sites India"
  ],
  authors: [{ name: "Take Me There Team" }],
  creator: "Take Me There",
  publisher: "Take Me There",
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.takemethere.life',
    title: 'Take Me There - Discover Incredible India',
    description: 'Your comprehensive guide to exploring India\'s diverse destinations, rich culture, and spiritual heritage. Plan your perfect Indian journey with detailed travel guides and itineraries.',
    siteName: 'Take Me There',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Take Me There - India Travel Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Take Me There - Discover Incredible India',
    description: 'Explore India\'s diverse destinations with comprehensive travel guides and cultural insights.',
    images: ['/twitter-image.jpg'],
    creator: '@takemethere_in',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://www.takemethere.life',
    languages: {
      'en-IN': 'https://www.takemethere.life',
      'hi-IN': 'https://www.takemethere.life/hi',
    },
  },
  category: 'travel',
  classification: 'Travel Guide',
  other: {
    'geo.region': 'IN',
    'geo.country': 'India',
    'geo.placename': 'India',
    'application-name': 'Take Me There',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Take Me There',
    'theme-color': '#f97316',
    'msapplication-TileColor': '#f97316',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://www.takemethere.life" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Take Me There",
              "description": "Comprehensive India travel guide platform providing detailed destination information, cultural insights, and travel itineraries.",
              "url": "https://www.takemethere.life",
              "logo": "https://www.takemethere.life/logo.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-98765-43210",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"]
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "serviceType": "Travel Information and Guides"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
