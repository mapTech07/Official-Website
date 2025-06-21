import type { Metadata, Viewport } from 'next';
import './globals.css';

/**
 * Import font from Google Fonts
 */
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

/**
 * SEO optimized metadata
 */
export const metadata: Metadata = {
  title: 'M.A.P. Tech: Website, Software & Digital Marketing Experts',
  description:
    "M.A.P. Tech: Nepal's leading IT company for website development, software, digital marketing, graphic design & branding. Solutions for growth.",
  keywords:
    'website development company Nepal, software company Nepal, IT company Nepal, digital marketing company Nepal, creative agency Nepal, graphic design services Nepal, logo design services Nepal, social media marketing Nepal, web design Kathmandu, custom software development Nepal, branding solutions Nepal, logo design ' +
    'website development services, custom software development, digital marketing services, graphic design agency, creative design studio, remote web development, IT outsourcing solutions, offshore software development, global digital marketing',

  alternates: {
    canonical: 'https://maptechnepal.com',
  },

  openGraph: {
    title: "M.A.P. Tech Nepal's Top Web, Software, & Digital Agency",
    description:
      'Top IT company in Nepal for web development, software, graphics design, branding, and digital marketing. Creative solutions that drive growth.',
    url: 'https://maptechnepal.com',
    type: 'website',
    locale: 'en_NP',
    images: [
      {
        url: 'https://maptechnepal.com/Site_Logo.webp',
        width: 1200,
        height: 630,
        alt: 'M.A.P. Tech: Leading Website, Software & Digital Marketing Company in Nepal',
        type: 'image/webp',
      },
    ],
    siteName: 'M.A.P. Tech',
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'M.A.P. Tech Nepal’s Leading Web, Software, and Digital Marketing Company',
    description:
      "M.A.P. Tech is Nepal's top IT company specializing in website development, custom software, digital marketing, graphic design, branding, and social media marketing.",
    images: ['https://maptechnepal.com/Site_Logo.webp'],
  },

  // viewport: {
  //   width: 'device-width',
  //   initialScale: 1,
  //   maximumScale: 1,
  // },
  icons: {
    icon: '/Site_Logo.webp',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },

  appleWebApp: {
    capable: true,
    title: 'M.A.P. Tech',
    statusBarStyle: 'default',
  },

  formatDetection: {
    telephone: false,
  },
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon improvements */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" /> */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* Fallback favicon */}
        <link rel="icon" href="/Site_Logo.webp" type="image/png" />

        {/* --- LOCAL BUSINESS SCHEMA MARKUP --- */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "M.A.P. Tech",
              "image": "https://maptechnepal.com/Site_Logo.webp",
              "@id": "https://maptechnepal.com",
              "url": "https://maptechnepal.com",
              "telephone": "+9779745673009",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Naya Thimi",
                "addressLocality": "Bhaktapur",
                "addressRegion": "Bagmati",
                "postalCode": "44800",
                "addressCountry": "NP"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "27.7172",
                "longitude": "85.3240"
              },
              "hasMap": "https://maps.app.goo.gl/yNFYdFD1tXGhYNhG7",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/maptech.np",
                "https://www.instagram.com/maptech.np/",
                "https://www.linkedin.com/company/105687482/"
              ]
            }
          `}
        </script>

        {/* --- ORGANIZATION SCHEMA MARKUP --- */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "M.A.P. Tech",
              "url": "https://maptechnepal.com",
              "logo": "https://maptechnepal.com/Site_Logo.webp",
              "sameAs": [
                "https://www.facebook.com/maptech.np",
                "https://www.instagram.com/maptech.np/",
                "https://www.linkedin.com/company/105687482/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+9779745673009",
                "contactType": "customer service",
                "areaServed": "NP",
                "availableLanguage": ["English", "Nepali"]
              }
            }
          `}
        </script>

        {/* --- BREADCRUMB SCHEMA MARKUP --- */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://maptechnepal.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://maptechnepal.com/services"
                }
              ]
            }
          `}
        </script>

        {/* Optional hreflang tags for multilingual support */}
        {/* 
        <link rel="alternate" href="https://maptechnepal.com" hrefLang="en" />
        <link rel="alternate" href="https://maptechnepal.com/ne" hrefLang="ne" />
        */}
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
