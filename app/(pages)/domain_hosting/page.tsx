import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const DomainHostingPage = () => {
  return (
    <>
      {/* SEO & Structured Data */}
      <Head>
        <title>Domain & Hosting Services in Nepal | M.A.P. Tech</title>
        <meta
          name="description"
          content="Get reliable domain registration and web hosting services in Nepal from M.A.P. Tech. Fast, secure, and affordable solutions for businesses and individuals."
        />
        <meta
          name="keywords"
          content="domain Nepal, web hosting Nepal, buy domain, cheap hosting, Nepal server"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://maptech.np/domain-hosting" />

        {/* Open Graph / Social Sharing */}
        <meta
          property="og:title"
          content="Domain & Hosting Services in Nepal | M.A.P. Tech"
        />
        <meta
          property="og:description"
          content="Affordable and reliable domain and hosting services in Nepal – powered by M.A.P. Tech."
        />
        <meta
          property="og:image"
          content="https://maptech.np/images/domain-hosting-banner.jpg"
        />
        <meta property="og:url" content="https://maptech.np/domain-hosting" />
        <meta property="og:type" content="service" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Domain Registration and Web Hosting',
              provider: {
                '@type': 'Organization',
                name: 'M.A.P. Tech Pvt. Ltd.',
                url: 'https://maptech.np',
                logo: 'https://maptech.np/Site_Logo.webp',
                telephone: '+9779745673009',
                email: 'info@maptechnepal.com',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'SS chowk, Thimi',
                  addressLocality: 'Bhaktapur',
                  postalCode: '44600',
                  addressCountry: 'NP',
                },
                openingHours: 'Mo-Su 00:00-23:59',
                sameAs: [
                  'https://www.facebook.com/maptech.np',
                  'https://instagram.com/maptech.np',
                  'https://linkedin.com/company/maptech-nepal',
                ],
              },
              areaServed: 'NP',
              availableChannel: {
                '@type': 'ServiceChannel',
                serviceUrl: 'https://maptech.np/domain-hosting',
              },
              offers: {
                '@type': 'Offer',
                url: 'https://maptech.np/domain-hosting',
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'NPR',
                  minValue: '999',
                  maxValue: '5000',
                  valueAddedTaxIncluded: true,
                },
              },
            }),
          }}
        />
      </Head>

      {/* Main Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            <span className="text-[#144A9C]">Domain</span> &{' '}
            <span className="text-[#144A9C]">Hosting</span> Services in Nepal
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              Get your business online with fast, secure, and affordable domain
              registration and web hosting from <strong>M.A.P. Tech</strong>.
              Trusted by startups, SMEs, and enterprises across Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Domain & Hosting?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Free Domain & Hosting for 1 Year',
                desc: 'Build your website with us and receive a free .com domain plus one full year of hosting at no extra cost.',
              },
              {
                title: 'High-Speed SSD Hosting',
                desc: 'Lightning-fast loading with NVMe SSD storage and CDN integration.',
              },
              {
                title: '24/7 Local Support',
                desc: 'Round-the-clock technical support from our team based in Thimi, Nepal.',
              },
              {
                title: 'Free SSL Certificate',
                desc: 'Secure your site with HTTPS at no extra cost – included on all plans.',
              },
              {
                title: '99.9% Uptime Guarantee',
                desc: 'Reliable servers ensure your website stays online always.',
              },
              {
                title: 'Quick setup, Easy management',
                desc: 'Submit the contact form and then sit back and relax.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      {/* <section id="plans" className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 mt-4">
            All plans include 24/7 support, free SSL, and daily backups.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: 'Starter',
              price: 'Rs 999/year',
              features: [
                '1 Website',
                '10 GB SSD Storage',
                'Free SSL',
                'Email Support',
              ],
            },
            {
              name: 'Business',
              price: 'Rs 2,499/year',
              popular: true,
              features: [
                '5 Websites',
                '50 GB SSD Storage',
                'Free Domain',
                'Priority Support',
                'Daily Backup',
              ],
            },
            {
              name: 'Enterprise',
              price: 'Rs 4,999/year',
              features: [
                'Unlimited Websites',
                '200 GB SSD Storage',
                'Free Domain + Email',
                '24/7 Phone Support',
                'Advanced Security',
              ],
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 bg-white rounded-xl shadow-lg border ${
                plan.popular
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {plan.name}
              </h3>
              <div className="text-3xl font-extrabold text-blue-600 mb-6">
                {plan.price}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block text-center py-3 rounded-full font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Launch Your Website?
          </h2>
          <p className="text-white text-xl opacity-90 mb-8">
            We make it easy to get online with local expertise and unbeatable
            support.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default DomainHostingPage;
