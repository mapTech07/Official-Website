'use client';

// import React, { useEffect, useRef, useCallback, Suspense, useState, memo } from 'react';
import React, { useEffect, Suspense, useState, memo } from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';

// Error Boundary - Simplified
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="py-16 px-4 text-center">
          <h2 className="text-xl mb-4">Something went wrong</h2>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Refresh
          </button>
        </section>
      );
    }
    return this.props.children;
  }
}

// Optimized dynamic imports with minimal config
const MAPSuite = dynamic(() => import('@/components/MAPSuite'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-200 rounded" />,
  ssr: true,
});

const AboutUs = dynamic(() => import('@/components/AboutUs'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-200 rounded" />,
  ssr: true,
});

const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-200 rounded" />,
  ssr: true,
});

const Planning = dynamic(() => import('@/components/Planning'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-200 rounded" />,
  ssr: true,
});

const Technology = dynamic(() => import('@/components/Technology'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-200 rounded" />,
  ssr: true,
});

const Projects = dynamic(() => import('@/components/Project'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-200 rounded" />,
  ssr: false,
});

const Clients = dynamic(() => import('@/components/Client'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-200 rounded" />,
  ssr: false,
});

const Testimonials = dynamic(() => import('@/components/Testimonial'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-200 rounded" />,
  ssr: false,
});

// const FAQ = dynamic(() => import('@/components/FAQ'), {
//   loading: () => <div className="h-64 animate-pulse bg-gray-200 rounded" />,
//   ssr: false
// });

// // Intersection Observer Hook - Simplified
// const useIntersectionObserver = () => {
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   const observe = useCallback((element: Element, callback: () => void) => {
//     if (!observerRef.current) {
//       observerRef.current = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               callback();
//               observerRef.current?.unobserve(entry.target);
//             }
//           });
//         },
//         { rootMargin: '50px', threshold: 0.1 }
//       );
//     }
//     observerRef.current.observe(element);
//   }, []);

//   useEffect(() => {
//     return () => observerRef.current?.disconnect();
//   }, []);

//   return observe;
// };

// Main component - Heavily optimized
const Home: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.origin);

    // Preload critical image
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/newhero.webp';
    document.head.appendChild(link);
  }, []);

  // Minimal structured data
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'M.A.P. Tech Pvt. Ltd.',
    url: currentUrl?.trim() || 'https://maptechnepal.com',
    logo: {
      '@type': 'ImageObject',
      url: `${currentUrl?.trim()}/Site_Logo.webp`,
      width: {
        '@value': 512,
        '@unitCode': 'PX',
      },
      height: {
        '@value': 512,
        '@unitCode': 'PX',
      },
    },
    description:
      'Leading technology company in Nepal providing web development, software solutions, and digital marketing services.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NP',
      addressLocality: 'Bhaktapur',
      // Optional: Add more address details
      streetAddress: 'Naya Thimi',
      postalCode: '44800',
      addressRegion: 'Bagmati Province',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+977-9745673009',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Nepali'],
    },
    sameAs: [
      'https://www.facebook.com/maptech.np',
      'https://www.instagram.com/maptech.np/',
      'https://www.linkedin.com/company/105687482/',
    ],
  };

  return (
    <>
      <Head>
        {/* Essential meta tags */}
        <title>
          M.A.P. Tech: Website, Software & Digital Marketing Experts
        </title>
        <meta
          name="description"
          content="M.A.P. Tech: Nepal's leading IT company for website development, software, digital marketing, graphic design & branding. Solutions for growth."
        />
        <meta
          name="keywords"
          content="website development company Nepal, software company Nepal, IT company Nepal, digital marketing company Nepal, creative agency Nepal, graphic design services Nepal, logo design services Nepal, social media marketing Nepal, web design Kathmandu, custom software development Nepal, branding solutions Nepal, logo design website development services, custom software development, digital marketing services, graphic design agency, creative design studio, remote web development, IT outsourcing solutions, offshore software development, global digital marketing"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, noimageindex, max-video-preview:-1, max-snippet:-1"
        />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="M.A.P. Tech Nepal's Top Web, Software, & Digital Agency"
        />
        <meta
          property="og:description"
          content="Top IT company in Nepal for web development, software, graphics design, branding, and digital marketing. Creative solutions that drive growth."
        />
        <meta property="og:url" content="https://maptechnepal.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_NP" />
        <meta property="og:site_name" content="M.A.P. Tech" />
        <meta
          property="og:image"
          content="https://maptechnepal.com/Site_Logo.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="M.A.P. Tech: Leading Website, Software & Digital Marketing Company in Nepal"
        />
        <meta property="og:image:type" content="image/webp" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="M.A.P. Tech Nepal’s Leading Web, Software, and Digital Marketing Company"
        />
        <meta
          name="twitter:description"
          content="M.A.P. Tech is Nepal's top IT company specializing in website development, custom software, digital marketing, graphic design, branding, and social media marketing."
        />
        <meta
          name="twitter:image"
          content="https://maptechnepal.com/Site_Logo.webp"
        />
        {/* Icons */}
        <link rel="icon" href="/Site_Logo.webp" />{' '}
        {/* Updated from favicon.ico */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />{' '}
        {/* Kept from original, as new metadata focuses on appleWebApp settings but not a direct replacement for this specific link type */}
        {/* Canonical URL */}
        <link rel="canonical" href="https://maptechnepal.com" />
        {/* Apple Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="M.A.P. Tech" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/* Format Detection */}
        <meta name="format-detection" content="telephone=no" />
        {/* Performance optimizations (kept from original where not overridden) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#3b82f6" />{' '}
        {/* Kept from original as new metadata didn't specify */}
      </Head>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main id="main">
        {/* Hero Section */}
        <ErrorBoundary>
          <section id="hero" aria-label="Hero section">
            <HeroSection />
          </section>
        </ErrorBoundary>

        {/* MAP Suite Section */}
        <ErrorBoundary>
          <section id="hero" aria-label="Hero section">
            <MAPSuite />
          </section>
        </ErrorBoundary>

        {/* Dynamic Sections */}
        <ErrorBoundary>
          <section id="about" aria-label="About us">
            <Suspense
              fallback={
                <div className="h-64 animate-pulse bg-gray-200 rounded mx-4 my-8" />
              }
            >
              <AboutUs />
            </Suspense>
          </section>
        </ErrorBoundary>
        <ErrorBoundary>
          <section id="planning" aria-label="Planning process">
            <Suspense
              fallback={
                <div className="h-64 animate-pulse bg-gray-200 rounded mx-4 my-8" />
              }
            >
              <Planning />
            </Suspense>
          </section>
        </ErrorBoundary>
        <ErrorBoundary>
          <section id="services" aria-label="Our services">
            <Suspense
              fallback={
                <div className="h-64 animate-pulse bg-gray-200 rounded mx-4 my-8" />
              }
            >
              <Services />
            </Suspense>
          </section>
        </ErrorBoundary>

        <ErrorBoundary>
          <section id="technology" aria-label="Technologies we use">
            <Suspense
              fallback={
                <div className="h-64 animate-pulse bg-gray-200 rounded mx-4 my-8" />
              }
            >
              <Technology />
            </Suspense>
          </section>
        </ErrorBoundary>

        <ErrorBoundary>
          <section id="projects" aria-label="Our projects">
            <Suspense
              fallback={
                <div className="h-64 animate-pulse bg-gray-200 rounded mx-4 my-8" />
              }
            >
              <Projects />
            </Suspense>
          </section>
        </ErrorBoundary>

        <ErrorBoundary>
          <section id="clients" aria-label="Our clients">
            <Suspense
              fallback={
                <div className="h-64 animate-pulse bg-gray-200 rounded mx-4 my-8" />
              }
            >
              <Clients />
            </Suspense>
          </section>
        </ErrorBoundary>

        <ErrorBoundary>
          <section id="testimonials" aria-label="Client testimonials">
            <Suspense
              fallback={
                <div className="h-64 animate-pulse bg-gray-200 rounded mx-4 my-8" />
              }
            >
              <Testimonials />
            </Suspense>
          </section>
        </ErrorBoundary>

        {/* <ErrorBoundary>
          <section id="faq" aria-label="Frequently asked questions">
            <Suspense fallback={<div className="h-64 animate-pulse bg-gray-200 rounded mx-4 my-8" />}>
              <FAQ />
            </Suspense>
          </section>
        </ErrorBoundary> */}
      </main>
    </>
  );
};

export default memo(Home);
