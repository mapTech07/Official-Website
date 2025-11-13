import React from 'react';
import Contact from '@/components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | M.A.P. Tech Pvt. Ltd.',
  description:
    "Contact M.A.P. Tech Pvt. Ltd. – Nepal's top web, software & digital marketing company. Reach us for project inquiries or support.",
  keywords: [
    'MAP Tech Nepal',
    'IT company Nepal',
    'web development Nepal',
    'software company Nepal',
    'digital marketing Nepal',
    'CRM software Nepal',
    'contact M.A.P. Tech',
  ],
  alternates: {
    canonical: 'https://maptechnepal.com/contact',
  },
  openGraph: {
    title:
      'Contact M.A.P. Tech Pvt. Ltd. | Website & Software Development Nepal',
    description:
      'Have a project in mind? Contact M.A.P. Tech today for expert solutions in web development, digital marketing, and software systems.',
    url: 'https://maptechnepal.com/contact',
    type: 'website',
    locale: 'en_NP',
    siteName: 'M.A.P. Tech Pvt. Ltd.',
    images: [
      {
        url: 'https://maptechnepal.com/Site_Logo.webp',
        width: 1200,
        height: 630,
        alt: 'Contact M.A.P. Tech Pvt. Ltd. – IT Solutions Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | M.A.P. Tech Nepal',
    description:
      'Get in touch with M.A.P. Tech for innovative tech solutions, website & software development, and marketing services.',
    images: ['https://maptechnepal.com/Site_Logo.webp'],
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

const ContactPage = () => {
  const siteUrl = 'https://maptechnepal.com';

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
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 xl:px-8">
          <div className="py-2 lg:py-2 xl:py-4">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
