'use client';

import React from 'react';
import Head from 'next/head';
import Contact from '@/components/Contact';
import { usePathname } from 'next/navigation';

const Contacts = () => {
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
        <title>Contact Us | M.A.P. Tech Pvt. Ltd.</title>
        <meta
          name="description"
          content="Contact M.A.P. Tech Pvt. Ltd. – Nepal’s top web, software & digital marketing company. Reach us for project inquiries or support."
        />
        <meta
          name="keywords"
          content="MAP Tech Nepal, IT company Nepal, web development Nepal, software company Nepal, digital marketing Nepal, CRM software Nepal, contact M.A.P. Tech"
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
          content="Contact M.A.P. Tech Pvt. Ltd. | Website & Software Development Nepal"
        />
        <meta
          property="og:description"
          content="Have a project in mind? Contact M.A.P. Tech today for expert solutions in web development, digital marketing, and software systems."
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
          content="Contact M.A.P. Tech Pvt. Ltd. – IT Solutions Nepal"
        />
        <meta property="og:image:type" content="image/webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | M.A.P. Tech Nepal" />
        <meta
          name="twitter:description"
          content="Get in touch with M.A.P. Tech for innovative tech solutions, website & software development, and marketing services."
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

      <main role="main" aria-labelledby="contact-heading">
        <section className="container w-full lg:w-[80vw] mx-auto mt-32 mb-20 px-4 lg:px-20 items-center">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Contacts;
