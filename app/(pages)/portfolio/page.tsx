'use client';

import React from 'react';
import Head from 'next/head';
import Portfolios from '@/components/Portfolios';
import { usePathname } from 'next/navigation';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title:
    "How We Work – M.A.P. Tech | Nepal's Top Software & Web Development company",
  description:
    'Explore how M.A.P. Tech Nepal connects global clients with top-tier Nepali developers. Learn our Agile process, from idea to delivery.',
  alternates: {
    canonical: 'https://maptechnepal.com/insights',
  },
  openGraph: {
    title: 'Our Agile Process | How We Work – M.A.P. Tech',
    description:
      'At M.A.P. Tech, we use Agile methodology to deliver top-quality websites and software with transparency, speed, and collaboration.',
    url: 'https://maptechnepal.com/insights',
    type: 'article',
    images: [
      {
        url: 'https://maptechnepal.com/Site_Logo.webp',
        width: 1200,
        height: 630,
        alt: 'M.A.P. Tech Agile Development Process',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "M.A.P. Tech's Agile Development Process",
    description:
      'See how our expert Nepali developers work with clients worldwide using an Agile approach for consistent, high-quality results.',
    images: ['https://maptechnepal.com/Site_Logo.webp'],
  },
};

const PortfoliosPage = () => {
  const pathname = usePathname();
  const siteUrl = 'https://maptechnepal.com';
  const pageUrl = `${siteUrl}${pathname}`;

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
      contactType: 'customer service',
    },
  };

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Portfolio - M.A.P. Tech Pvt. Ltd.',
    description:
      'Explore our portfolio of successful web development, software solutions, and digital marketing projects delivered across Nepal and beyond.',
    url: pageUrl,
    mainEntity: {
      '@type': 'Organization',
      name: 'M.A.P. Tech Pvt. Ltd.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Technology Services Portfolio',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Development',
              description: 'Custom website development and web applications',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Software Development',
              description: 'Custom software solutions and applications',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Digital Marketing',
              description:
                'SEO, social media marketing, and digital advertising services',
            },
          },
        ],
      },
    },
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
          item: pageUrl,
        },
      ],
    },
  };

  return (
    <>
      <Head>
        {/* SEO Title & Description */}
        <title>
          Portfolio | M.A.P. Tech Pvt. Ltd. - Web Development & Software
          Solutions Nepal
        </title>
        <meta
          name="description"
          content="Explore M.A.P. Tech's portfolio of successful web development, software solutions, and digital marketing projects. See our work across Nepal and beyond."
        />
        <meta
          name="keywords"
          content="MAP Tech portfolio, web development projects Nepal, software development portfolio, digital marketing case studies, IT projects Nepal, website portfolio Nepal, CRM software examples"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Open Graph Meta */}
        <meta
          property="og:title"
          content="Portfolio | M.A.P. Tech Pvt. Ltd. - Showcasing Excellence in Technology"
        />
        <meta
          property="og:description"
          content="Discover our impressive portfolio of web development, software solutions, and digital marketing projects that have transformed businesses across Nepal."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_NP" />
        <meta property="og:site_name" content="M.A.P. Tech Pvt. Ltd." />
        <meta
          property="og:image"
          content={`${siteUrl}/portfolio-Site_Logo.webp`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="M.A.P. Tech Portfolio - Web Development & Software Solutions"
        />
        <meta property="og:image:type" content="image/webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Portfolio | M.A.P. Tech Nepal - Our Best Work"
        />
        <meta
          name="twitter:description"
          content="Browse through our collection of successful technology projects including websites, software applications, and digital marketing campaigns."
        />
        <meta
          name="twitter:image"
          content={`${siteUrl}/portfolio-Site_Logo.webp`}
        />

        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />

        {/* Icons */}
        <link rel="icon" href="/Site_Logo.webp" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Apple Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-title"
          content="M.A.P. Tech Portfolio"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Format Detection */}
        <meta name="format-detection" content="telephone=no" />

        {/* Fonts Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Theme Color */}
        <meta name="theme-color" content="#3b82f6" />

        {/* Additional Performance Optimizations */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
        />
      </Head>

      <main role="main" aria-labelledby="portfolio-heading">
        <section className="container w-full lg:w-[80vw] mx-auto mt-32 mb-20 px-4 lg:px-20 items-center">
          <h1 id="portfolio-heading" className="sr-only">
            M.A.P. Tech Portfolio - Our Technology Projects and Solutions
          </h1>
          <Portfolios />
        </section>
      </main>
    </>
  );
};

export default PortfoliosPage;
