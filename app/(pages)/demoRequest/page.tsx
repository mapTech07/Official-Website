'use client';
import Head from 'next/head';
import React from 'react';
import Demo from '@/components/DemoRequest';
import { usePathname } from 'next/navigation';

/**
 * Get a Demo Page
 */
const GetDemo: React.FC = () => {
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
  return (
    <>
      <Head>
        {/* SEO Title & Description */}
        <title>Request Demo | M.A.P. Tech Pvt. Ltd.</title>
        <meta
          name="description"
          content="Request a demo of M.A.P. Tech's products - RMS, DormDex, MERP, and InvSys. Experience Nepal's leading software solutions for restaurants, hostels, ERP, and inventory management."
        />
        <meta
          name="keywords"
          content="Request demo Nepal, RMS demo, Restaurant Management System Nepal, DormDex demo, Hostel Management System Nepal, MERP ERP demo, Inventory Management demo, M.A.P. Tech demo"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, noimageindex, max-video-preview:-1, max-snippet:-1"
        />

        {/* Open Graph Meta */}
        <meta
          property="og:title"
          content="Request Demo | M.A.P. Tech Pvt. Ltd. Software Solutions Nepal"
        />
        <meta
          property="og:description"
          content="Try a live demo of our software products including RMS, DormDex, MERP, and InvSys. Contact M.A.P. Tech today for expert tech solutions."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_NP" />
        <meta property="og:site_name" content="M.A.P. Tech Pvt. Ltd." />
        <meta property="og:image" content={`${siteUrl}/Site_Logo.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Request Demo - M.A.P. Tech Pvt. Ltd. Software Solutions Nepal"
        />
        <meta property="og:image:type" content="image/webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Request Demo | M.A.P. Tech Nepal" />
        <meta
          name="twitter:description"
          content="Request a demo of RMS, DormDex, MERP, or InvSys from M.A.P. Tech Pvt. Ltd."
        />
        <meta name="twitter:image" content={`${siteUrl}/Site_Logo.webp`} />

        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />

        {/* Icons */}
        <link rel="icon" href="/Site_Logo.webp" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Apple Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="M.A.P. Tech" />
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

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 xl:px-8">
          <div className="py-2 lg:py-2 xl:py-4">
            <Demo />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetDemo;
