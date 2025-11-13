'use client';

import React from 'react';
import Image from 'next/image';

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
        className="flex flex-col items-center px-4 w-full" // Adjusted padding and background
        aria-labelledby="about-us-heading"
        role="main" // Indicates the main content of the document
      >
        <div className="text-center mb-8">
          <h6 className="font-bold relative inline-block mb-4 text-[#1F2937]">
            WHO WE ARE
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
          </h6>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            A Global
            <span className="text-[#144A9C]">
              {' '}
              Creative and Software Development Company
            </span>{' '}
          </h2>
        </div>

        <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-20 px-4 md:px-8 ">
          {/* About Section - Left Column */}
          <div className="text-justify">
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-800 ">
                At <strong>M.A.P. Tech Pvt. Ltd.</strong>, we&apos;re innovators
                crafting personalized, cutting-edge tech solutions under the
                philosophy:
                <em>
                  &quot;Empowering Solutions with Tech & Innovation.&quot;
                </em>{' '}
                Based in Nepal and serving globally, we specialize in custom
                website development, software, digital marketing, and graphic
                design.
              </p>
              <p className="text-gray-800 ">
                We build lasting partnerships by delivering scalable,
                future-proof solutions that drive growth, innovation, and
                measurable success.
              </p>
            </div>
            <div>
              {/* Caption/Text Below Image */}

              <p className="text-lg md:text-xl font-semibold text-center text-gray-700 mt-4 px-6 py-3 bg-white border-t border-gray-100 leading-relaxed">
                &quot;Your Vision, Our Expertise-Driving Innovation, Growth, and
                Success&quot;
              </p>
            </div>
          </div>

          {/* Description Section - Right Column */}
          <div className="flex flex-col w-full lg:w-3/5 items-center">
            {/* IMAGE SECTION */}
            <div className="mb-6 mx-auto rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 max-w-lg lg:max-w-xl">
              {/* Image */}
              <Image
                src="/Vision_Image.jpg"
                alt="M.A.P. Tech – Your Vision, Our Expertise"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(AboutUs);
