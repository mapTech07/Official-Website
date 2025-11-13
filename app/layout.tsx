import type { Metadata, Viewport } from 'next';
import './globals.css';

// Import Google Font: Inter
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

// =======================
// METADATA
// =======================
export const metadata: Metadata = {
  title: 'M.A.P. Tech Pvt. Ltd. | Leading IT Company in Nepal',
  description:
    "M.A.P. Tech is Nepal's premier technology company specializing in web development, software solutions, digital marketing, and IT consulting services.",
  keywords: [
    'IT company Nepal',
    'web development Nepal',
    'software company Nepal',
    'digital marketing Nepal',
    'M.A.P. Tech',
    'technology solutions Nepal',
  ],
  authors: [{ name: 'M.A.P. Tech Pvt. Ltd.' }],
  creator: 'M.A.P. Tech Pvt. Ltd.',
  publisher: 'M.A.P. Tech Pvt. Ltd.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_NP',
    url: 'https://maptechnepal.com',
    siteName: 'M.A.P. Tech Pvt. Ltd.',
    title: 'M.A.P. Tech Pvt. Ltd. | Leading IT Company in Nepal',
    description:
      "Transform your business with cutting-edge technology solutions from Nepal's most trusted IT partner.",
    images: [
      {
        url: 'https://maptechnepal.com/Site_Logo.webp',
        width: 1200,
        height: 630,
        alt: 'M.A.P. Tech Pvt. Ltd.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M.A.P. Tech Pvt. Ltd. | Leading IT Company in Nepal',
    description:
      "Transform your business with cutting-edge technology solutions from Nepal's most trusted IT partner.",
    images: ['https://maptechnepal.com/Site_Logo.webp'],
  },
  icons: {
    icon: '/Site_Logo.webp',
    shortcut: '/Site_Logo.webp',
    apple: '/Site_Logo.webp',
  },
  alternates: {
    canonical: 'https://maptechnepal.com',
  },
};

// =======================
// VIEWPORT
// =======================
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0066FF',
};

// =======================
// ROOT LAYOUT
// =======================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl = 'https://maptechnepal.com';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'M.A.P. Tech Pvt. Ltd.',
    alternateName: ['MAP Tech Nepal', 'M.A.P. Tech Nepal'],
    url: siteUrl,
    logo: `${siteUrl}/Site_Logo.webp`,
    description:
      'Leading technology company in Nepal providing web development, software solutions, and digital marketing services.',
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NP',
      addressLocality: 'Bhaktapur',
      addressRegion: 'Bagmati Province',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+977-9745673009',
        contactType: 'Customer Service',
        availableLanguage: ['English', 'Nepali'],
      },
    ],
    sameAs: [
      'https://www.facebook.com/maptechnepal',
      'https://www.linkedin.com/company/maptechnepal',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'M.A.P. Tech Pvt. Ltd.',
    url: siteUrl,
    description:
      "Nepal's leading technology company offering comprehensive IT solutions.",
    publisher: {
      '@type': 'Organization',
      name: 'M.A.P. Tech Pvt. Ltd.',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Favicon */}
        <link rel="icon" href="/Site_Logo.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/Site_Logo.webp" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0066FF" />

        {/* Base Meta */}
        <meta name="format-detection" content="telephone=no" />

        {/* Optional: Hreflang for Multilingual Support */}
        {/*
        <link rel="alternate" href="https://maptechnepal.com" hrefLang="en" />
        <link rel="alternate" href="https://maptechnepal.com/ne" hrefLang="ne" />
        <link rel="alternate" href="https://maptechnepal.com" hrefLang="x-default" />
        */}
      </head>
      <body className="min-h-screen font-sans antialiased bg-white">
        <Navbar />
        <main className="pt-16">
          {children}
          <ScrollToTopButton /> {/* Always render at the end */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
