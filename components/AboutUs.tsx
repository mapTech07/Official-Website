'use client';

import React from 'react';
import Image from 'next/image';

// Lazy load images with proper optimization
import client from '../public/Partnership.svg';
import team from '../public/Team.svg';
import service from '../public/SLA.svg';
import satisfied from '../public/happy.svg';

const AboutUs = () => {
  // Structured data for SEO (Organization Schema)
  // Ensure all URLs, contact details, and names are accurate.
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'M.A.P. Tech Pvt. Ltd.',
    url: 'https://maptechnepal.com', // Your main website URL
    logo: 'https://maptechnepal.com/Site_Logo.webp', // Path to your primary logo
    description:
      'M.A.P. Tech Pvt. Ltd. is a software company based in Nepal, focused on providing innovative and personalized tech solutions including website development, custom software, digital marketing, and graphic design.',
    slogan: 'Empowering Solutions with Tech & Innovation',
    sameAs: [
      // IMPORTANT: Update these with your actual social media URLs
      'https://www.facebook.com/maptech.np',
      'https://www.instagram.com/maptech.np/',
      'https://www.linkedin.com/company/105687482/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+9779745673009', // Your primary contact number
      contactType: 'Customer Service',
      areaServed: ['NP', 'Global'], // Or specific countries (e.g., "US", "AU", "UK")
      availableLanguage: ['en', 'ne'], // Languages you serve
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Naya Thimi',
      addressLocality: 'Bhaktapur',
      addressRegion: 'Bagmati',
      postalCode: '44600',
      addressCountry: 'NP',
    },
    foundingDate: '2024',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '10',
      unitText: 'Person',
    },
    aggregateRating: {
      // Include only if you have genuine ratings; otherwise, remove
      '@type': 'AggregateRating',
      ratingValue: '4.95',
      reviewCount: '40',
      bestRating: '5',
    },
  };

  // Stats data for better maintainability and accessibility
  const statsData = [
    {
      icon: service,
      iconAlt:
        'Service excellence icon representing commitment to quality service', // Refined alt text
      number: '1+',
      label: 'Year Of Service',
      id: 'years-service',
    },
    {
      icon: team,
      iconAlt:
        'Team collaboration icon representing our skilled and growing workforce', // Refined alt text
      number: '10+',
      label: 'Team Members',
      id: 'team-members',
    },
    {
      icon: client,
      iconAlt:
        'Partnership icon representing successful project completions and client trust', // Refined alt text
      number: '40+',
      label: 'Projects Completed',
      id: 'projects-completed',
    },
    {
      icon: satisfied,
      iconAlt:
        'Customer satisfaction icon representing happy and satisfied clients', // Refined alt text
      number: '99%',
      label: 'Customer Satisfaction',
      id: 'customer-satisfaction',
    },
  ];

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        id="organization-schema" // Unique ID for the script tag
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <section
        className="flex flex-col items-center px-4 py-8 w-full bg-gray-50 sm:py-12 lg:py-16" // Adjusted padding and background
        aria-labelledby="about-us-heading"
        role="main" // Indicates the main content of the document
      >
        {/* Main content wrapper with increased padding */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-20 px-4 py-8 md:px-8 md:py-12">
          {/* About Section - Left Column */}
          <div className="w-full lg:w-2/5">
            <h1
              id="about-us-heading"
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
            >
              Who We Are
            </h1>
            <div className="mt-3 text-justify">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                At <b>M.A.P. Tech Pvt. Ltd.</b>, we are more than just a
                software company; we are innovators dedicated to crafting{' '}
                <b>personalized and cutting-edge tech solutions</b>. With our
                core philosophy,{' '}
                <b>
                  &quot;Empowering Solutions with Tech &amp; Innovation.&quot;
                </b>{' '}
                Based in <b>Nepal</b> and serving clients globally, our
                expertise spans{' '}
                <b>
                  bespoke website development, robust custom software, strategic
                  digital marketing, and impactful graphic design
                </b>
                .
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                We believe in building lasting partnerships, focusing on
                understanding your unique challenges to deliver{' '}
                <b>scalable, efficient, and future-proof digital solutions</b>.
                Our commitment to excellence drives{' '}
                <b>
                  innovation, accelerates growth, and ensures measurable success
                </b>{' '}
                for every client.
              </p>
            </div>
          </div>

          {/* Description Section - Right Column */}
          <div className="flex flex-col w-full lg:w-3/5 items-center my-4">
            <h2 className="text-xl md:text-2xl font-extrabold text-center mb-6 text-gray-800 leading-tight">
              A Global Creative and Software Development Agency from Nepal
            </h2>

            {/* Stats Grid */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 w-full place-items-center place-content-center gap-4 md:gap-6 lg:gap-8 px-4 sm:px-0 my-4"
              role="list"
              aria-label="Company statistics and achievements"
            >
              {statsData.map((stat, index) => (
                // Individual Stat Card
                <div
                  key={stat.id}
                  className="grid grid-col place-items-center place-content-center gap-2 p-6 w-full bg-white rounded-xl shadow-sm transition-transform duration-200 hover:scale-105 focus-within:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500" // Added card styling
                  role="listitem"
                  tabIndex={0}
                  aria-labelledby={`${stat.id}-label`}
                >
                  <div className="relative">
                    <Image
                      src={stat.icon}
                      alt={stat.iconAlt}
                      className="h-12 w-12"
                      width={48}
                      height={48}
                      priority={index < 2}
                      loading={index >= 2 ? 'lazy' : 'eager'}
                      quality={90}
                    />
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span
                      className="text-3xl sm:text-4xl font-bold text-gray-700"
                      aria-hidden="true"
                    >
                      {stat.number}
                    </span>
                    <span
                      id={`${stat.id}-label`}
                      className="text-blue-700 font-extrabold text-sm sm:text-base leading-tight"
                    >
                      {stat.label}
                    </span>
                    <span className="sr-only">
                      {`${stat.number} ${stat.label.toLowerCase()}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* STYLISH SLOGAN CARD */}
            <div className="relative p-6 mt-12 mb-8 bg-white rounded-xl shadow-lg border border-blue-100 mx-auto max-w-2xl">
              <p className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 tracking-wide text-center italic">
                &quot;Your Vision, Our Expertise—Driving Innovation, Growth, and
                Success&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(AboutUs);
