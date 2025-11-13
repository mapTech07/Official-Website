import Portfolios from '@/components/Portfolios';
import Client from '@/components/Client';

import { Metadata } from 'next';

// ✅ Modern Next.js Metadata
export const metadata: Metadata = {
  title: 'Portfolio | M.A.P. Tech – Web & Software Development Nepal',
  description:
    'Explore M.A.P. Tech’s portfolio of successful web development, software solutions, and digital marketing projects. Trusted by startups, enterprises, and government partners across Nepal.',
  keywords: [
    'web development Nepal',
    'software company Nepal',
    'M.A.P. Tech portfolio',
    'digital solutions Nepal',
    'IT projects Nepal',
    'custom software Nepal',
  ],
  alternates: {
    canonical: 'https://maptechnepal.com/portfolio',
  },
  openGraph: {
    title: 'Our Work – M.A.P. Tech Portfolio',
    description:
      'Discover how we empower businesses with innovative technology solutions across Nepal.',
    url: 'https://maptechnepal.com/portfolio',
    type: 'website',
    siteName: 'M.A.P. Tech Pvt. Ltd.',
    locale: 'en_NP',
    images: [
      {
        url: 'https://maptechnepal.com/og-portfolio.webp',
        width: 1200,
        height: 630,
        alt: 'M.A.P. Tech Portfolio – Web & Software Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work – M.A.P. Tech Portfolio',
    description:
      'Cutting-edge web and software solutions built for real impact in Nepal.',
    images: ['https://maptechnepal.com/og-portfolio.webp'],
  },
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
  icons: {
    icon: '/Site_Logo.webp',
    apple: '/Site_Logo.webp',
  },
};

const PortfolioPage = () => {
  const siteUrl = 'https://maptechnepal.com';

  // ✅ Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'M.A.P. Tech Pvt. Ltd.',
    url: siteUrl,
    logo: `${siteUrl}/Site_Logo.webp`,
    description:
      'Leading technology company in Nepal providing web development, software solutions, and digital marketing services.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NP',
      addressLocality: 'Bhaktapur',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+977-9745673009',
      contactType: 'Customer Service',
    },
  };

  // ✅ Portfolio Page Schema
  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Portfolio - M.A.P. Tech Pvt. Ltd.',
    description:
      'Our portfolio showcases innovative web and software projects across Nepal.',
    url: `${siteUrl}/portfolio`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Portfolio',
          item: `${siteUrl}/portfolio`,
        },
      ],
    },
    mainEntity: {
      '@type': 'OfferCatalog',
      name: 'Technology Services Portfolio',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            description: 'Custom website and web application development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Software Development',
            description: 'Tailored software and enterprise solutions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Marketing',
            description: 'SEO, social media, and digital advertising',
          },
        },
      ],
    },
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />

      {/* Page Content */}
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 xl:px-8">
          <div className="py-2 lg:py-2 xl:py-4">
            {/* Portfolio Projects Section */}
            <Portfolios />

            {/* Clients Section */}
            <div className="text-center mb-12">
              <Client />
            </div>

            {/* CTA Section */}
            <div className="mt-10 mb-16 text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto transform transition hover:shadow-xl duration-300">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-gray-600 mb-8 text-sm sm:text-base">
                  Let&apos;s discuss how we can help bring your vision to life
                  with our proven expertise.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  Start Your Project
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
