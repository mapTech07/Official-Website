'use client';
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Anton } from 'next/font/google';

// Optimized font loading with font-display: swap
const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  preload: true,
});

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaPrimary?: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = 'Empowering Solutions with Tech & Innovation',
  subtitle = 'Innovate, Transform, Succeed!',
  description = 'Transform your business with cutting-edge technology solutions designed for the modern world.',
  ctaPrimary = { text: 'Get Started', href: '/contact' },
  ctaSecondary = { text: 'Learn More', href: '/about' },
}) => {
  const heroRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Optimized mouse tracking with throttling
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (heroRef.current && !reducedMotion) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    },
    [reducedMotion],
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const throttledMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => handleMouseMove(e), 16); // ~60fps
    };

    const heroElement = heroRef.current;
    if (heroElement && !reducedMotion) {
      heroElement.addEventListener('mousemove', throttledMouseMove, {
        passive: true,
      });
      return () => {
        heroElement.removeEventListener('mousemove', throttledMouseMove);
        clearTimeout(timeoutId);
      };
    }
  }, [handleMouseMove, reducedMotion]);

  // Optimized text animation with reduced motion support and proper target checking
  useEffect(() => {
    if (h1Ref.current && !isAnimated) {
      if (!reducedMotion) {
        const loadGsap = async () => {
          try {
            const gsapModule = await import('gsap');
            const letters = h1Ref.current?.querySelectorAll('.letter');
            if (letters && letters.length > 0 && h1Ref.current) {
              // Ensure all letters are valid DOM elements
              const validLetters = Array.from(letters).filter(
                (letter) => letter && letter.nodeType === Node.ELEMENT_NODE,
              );
              if (validLetters.length > 0) {
                gsapModule.default.fromTo(
                  validLetters,
                  { opacity: 0, y: 50, rotationX: -90 },
                  {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    duration: 0.8,
                    stagger: 0.03,
                    ease: 'back.out(1.7)',
                    delay: 0.5,
                  },
                );
              }
            }
          } catch {
            console.warn('GSAP failed to load, falling back to CSS animations');
            // Fallback to CSS animations (already well-implemented)
            const letters = h1Ref.current?.querySelectorAll('.letter');
            if (letters) {
              letters.forEach((letter, index) => {
                const element = letter as HTMLElement;
                if (element && element.style) {
                  element.style.opacity = '1';
                  element.style.transform = 'translateY(0) rotateX(0)';
                  element.style.transitionDelay = `${index * 30}ms`;
                }
              });
            }
          }
        };
        loadGsap();
      } else {
        // Show content immediately for reduced motion
        const letters = h1Ref.current?.querySelectorAll('.letter');
        if (letters) {
          letters.forEach((letter) => {
            const element = letter as HTMLElement;
            if (element && element.style) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0) rotateX(0)';
            }
          });
        }
      }
      setIsAnimated(true);
    }
  }, [isAnimated, reducedMotion]);

  // Memoized stats data
  const statsData = useMemo(
    () => [
      { number: '40+', label: 'Projects' },
      { number: '99%', label: 'Success Rate' },
      { number: '24/7', label: 'Support' },
    ],
    [],
  );

  // --- START SEO ENHANCEMENT ---
  // Enhanced structured data for Organization - dynamically set on client for SSR compatibility
  const [structuredData, setStructuredData] = useState<string>('');

  useEffect(() => {
    // Ensure this only runs on the client-side
    if (typeof window !== 'undefined') {
      const data = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'M.A.P. Tech Pvt. Ltd.', // Your company name
        url: window.location.origin, // Dynamic URL from current domain
        logo: `${window.location.origin}/Site_Logo.webp`, // Path to your primary logo
        description:
          'M.A.P. Tech Pvt. Ltd. is a leading tech company providing innovative solutions in web development, custom software, digital marketing, and graphic design.', // More specific description
        slogan: title, // Using the main title as the slogan
        foundingDate: '2024', // Correct founding year
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+9779745673009', // Your actual phone number
          contactType: 'customer service',
          description: 'Primary contact for customer service and inquiries',
          areaServed: ['NP', 'Global'],
          availableLanguage: ['en', 'ne'],
        },
        sameAs: [
          // Your actual social media URLs
          'https://www.facebook.com/maptech.np',
          'https://www.instagram.com/maptech.np/',
          'https://www.linkedin.com/company/105687482/',
          // Add other social media links like Twitter, YouTube if applicable
        ],
        // You can add address if relevant to the Hero (e.g., if it's the homepage)
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Naya Thimi',
          addressLocality: 'Bhaktapur',
          addressRegion: 'Bagmati',
          postalCode: '44600',
          addressCountry: 'NP',
        },
      };
      setStructuredData(JSON.stringify(data));
    }
  }, [title]); // Re-run if title changes (though typically static for Hero)
  // --- END SEO ENHANCEMENT ---

  // GSAP animation handlers with fallbacks and proper error handling
  const handleLetterMouseEnter = async (
    e: React.MouseEvent<HTMLSpanElement>,
  ) => {
    if (reducedMotion) return;

    try {
      const gsapModule = await import('gsap');
      const target = e.target as HTMLElement;
      if (target && target.nodeType === Node.ELEMENT_NODE) {
        gsapModule.default.to(target, { scale: 1.1, duration: 0.2 });
      }
    } catch {
      const element = e.target as HTMLElement;
      if (element && element.style) {
        element.style.transform = 'scale(1.1)';
        element.style.transition = 'transform 0.2s ease';
      }
    }
  };

  const handleLetterMouseLeave = async (
    e: React.MouseEvent<HTMLSpanElement>,
  ) => {
    if (reducedMotion) return;

    try {
      const gsapModule = await import('gsap');
      const target = e.target as HTMLElement;
      if (target && target.nodeType === Node.ELEMENT_NODE) {
        gsapModule.default.to(target, { scale: 1, duration: 0.2 });
      }
    } catch {
      const element = e.target as HTMLElement;
      if (element && element.style) {
        element.style.transform = 'scale(1)';
      }
    }
  };

  const handleStatMouseEnter = async (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;

    try {
      const gsapModule = await import('gsap');
      const target = e.currentTarget as HTMLElement;
      if (target && target.nodeType === Node.ELEMENT_NODE) {
        gsapModule.default.to(target, { scale: 1.05, duration: 0.3 });
      }
    } catch {
      const element = e.currentTarget as HTMLElement;
      if (element && element.style) {
        element.style.transform = 'scale(1.05)';
        element.style.transition = 'transform 0.3s ease';
      }
    }
  };

  const handleStatMouseLeave = async (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;

    try {
      const gsapModule = await import('gsap');
      const target = e.currentTarget as HTMLElement;
      if (target && target.nodeType === Node.ELEMENT_NODE) {
        gsapModule.default.to(target, { scale: 1, duration: 0.3 });
      }
    } catch {
      const element = e.currentTarget as HTMLElement;
      if (element && element.style) {
        element.style.transform = 'scale(1)';
      }
    }
  };

  const handleCtaMouseEnter = async (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    if (reducedMotion) return;

    try {
      const gsapModule = await import('gsap');
      const bg = e.currentTarget.querySelector('.cta-bg') as HTMLElement;
      if (bg && bg.nodeType === Node.ELEMENT_NODE) {
        gsapModule.default.to(bg, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
        });
      }
    } catch {
      const bg = e.currentTarget.querySelector('.cta-bg') as HTMLElement;
      if (bg && bg.style) {
        bg.style.transform = 'scale(1)';
        bg.style.opacity = '1';
        bg.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
      }
    }
  };

  const handleCtaMouseLeave = async (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    if (reducedMotion) return;

    try {
      const gsapModule = await import('gsap');
      const bg = e.currentTarget.querySelector('.cta-bg') as HTMLElement;
      if (bg && bg.nodeType === Node.ELEMENT_NODE) {
        gsapModule.default.to(bg, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
        });
      }
    } catch {
      const bg = e.currentTarget.querySelector('.cta-bg') as HTMLElement;
      if (bg && bg.style) {
        bg.style.transform = 'scale(0)';
        bg.style.opacity = '0';
      }
    }
  };

  return (
    <>
      {/* Enhanced SEO Structured Data - Fixed for SSR */}
      {structuredData && (
        <script
          type="application/ld+json"
          id="organization-hero-schema" // Unique ID to distinguish from other schemas
          dangerouslySetInnerHTML={{
            __html: structuredData,
          }}
        />
      )}

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <section
        ref={heroRef}
        className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50"
        role="banner"
        aria-labelledby="hero-title"
        aria-describedby="hero-description"
        onMouseEnter={() => !reducedMotion && setIsHovered(true)}
        onMouseLeave={() => !reducedMotion && setIsHovered(false)}
      >
        {/* Interactive Background - Only if motion is not reduced */}
        {!reducedMotion && (
          <div className="absolute inset-0 opacity-60" aria-hidden="true">
            {/* Animated gradient orbs */}
            <div
              className="absolute w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"
              style={{
                left: `${mousePosition.x * 0.5}%`,
                top: `${mousePosition.y * 0.3}%`,
                transform: `translate(-50%, -50%) scale(${isHovered ? 1.2 : 1})`,
                transition: 'transform 0.6s ease-out',
              }}
            />
            <div
              className="absolute w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full filter blur-3xl opacity-25 animate-pulse"
              style={{
                right: `${(100 - mousePosition.x) * 0.4}%`,
                bottom: `${(100 - mousePosition.y) * 0.4}%`,
                transform: `translate(50%, 50%) scale(${isHovered ? 1.3 : 1})`,
                transition: 'transform 0.8s ease-out',
                animationDelay: '1s',
              }}
            />

            {/* Floating particles */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-40 animate-bounce"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${20 + (i % 3) * 30}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + i * 0.5}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Main Content Container */}
        <div
          id="main-content"
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20"
        >
          {' '}
          {/* Added id for skip link */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text Content - 7 columns on large screens */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
              {/* Subtitle Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
                <div
                  className="flex items-center space-x-2"
                  role="status"
                  aria-label={subtitle}
                >
                  <div
                    className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-blue-800 tracking-wide">
                    {subtitle}
                  </span>
                  <div
                    className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                    style={{ animationDelay: '0.5s' }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Main Heading */}
              <h1
                id="hero-title"
                ref={h1Ref}
                style={{ fontWeight: 900 }}
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-black leading-tight tracking-tight text-gray-900 ${anton.className}`}
              >
                {title.split(' ').map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block mr-3 lg:mr-4">
                    {word.split('').map((letter, letterIndex) => (
                      <span
                        key={letterIndex}
                        className={`letter inline-block hover:text-blue-600 transition-colors duration-300 cursor-default ${reducedMotion ? 'opacity-100' : 'opacity-0'}`}
                        style={
                          reducedMotion
                            ? {}
                            : {
                                transform: 'translateY(50px) rotateX(-90deg)',
                                transition:
                                  'opacity 0.8s ease, transform 0.1s ease',
                              }
                        }
                        onMouseEnter={handleLetterMouseEnter}
                        onMouseLeave={handleLetterMouseLeave}
                        tabIndex={0}
                        role="presentation"
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                ))}
              </h1>

              {/* Description */}
              <p
                id="hero-description"
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
              >
                {description}
              </p>

              {/* Interactive Stats */}
              <div
                className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-6"
                role="group"
                aria-label="Company statistics"
              >
                {statsData.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-2"
                    tabIndex={0}
                    role="button"
                    aria-label={`${stat.number} ${stat.label}`}
                    onMouseEnter={handleStatMouseEnter}
                    onMouseLeave={handleStatMouseLeave}
                  >
                    <div
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 group-hover:text-purple-600 transition-colors duration-300"
                      aria-hidden="true"
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base text-gray-500 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <Link
                  href={ctaPrimary.href}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl focus:shadow-2xl transform hover:scale-105 focus:scale-105 transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  onMouseEnter={handleCtaMouseEnter}
                  onMouseLeave={handleCtaMouseLeave}
                  aria-describedby="primary-cta-desc"
                >
                  <div
                    className="cta-bg absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full scale-0 opacity-0"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center justify-center space-x-2">
                    <span>{ctaPrimary.text}</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                  <span id="primary-cta-desc" className="sr-only">
                    Navigate to contact page to get started with our services
                  </span>
                </Link>

                <Link
                  href={ctaSecondary.href}
                  className="group px-8 py-4 bg-white text-gray-800 font-bold rounded-full border-2 border-gray-200 hover:border-blue-500 focus:border-blue-500 hover:text-blue-600 focus:text-blue-600 shadow-md hover:shadow-lg focus:shadow-lg transform hover:scale-105 focus:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-describedby="secondary-cta-desc"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>{ctaSecondary.text}</span>
                    <svg
                      className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <span id="secondary-cta-desc" className="sr-only">
                    Navigate to about page to learn more about our company
                  </span>
                </Link>
              </div>
            </div>

            {/* Image Section - 5 columns on large screens */}
            <div className="lg:col-span-5 relative">
              <div className="relative group">
                {/* Image container with interactive effects */}
                <div
                  className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 ${!reducedMotion ? 'hover:scale-105 hover:rotate-1' : ''}`}
                  style={
                    !reducedMotion
                      ? {
                          transform: `perspective(1000px) rotateY(${mousePosition.x * 0.05 - 2.5}deg) rotateX(${mousePosition.y * 0.05 - 2.5}deg)`,
                        }
                      : {}
                  }
                >
                  <Image
                    src="/newhero.webp"
                    alt="Professional woman working with innovative technology solutions in a modern office environment"
                    width={600}
                    height={600}
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className={`w-full h-auto object-cover transition-all duration-700 ${!reducedMotion ? 'group-hover:scale-110' : ''} ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />

                  {/* Overlay gradient on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent transition-opacity duration-300 ${!reducedMotion ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`}
                    aria-hidden="true"
                  />
                </div>

                {/* Floating elements around image - Only if motion is not reduced */}
                {!reducedMotion && (
                  <>
                    <div
                      className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg"
                      style={{ animationDelay: '0.5s' }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-pulse shadow-lg"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-bounce shadow-lg"
                      style={{ animationDelay: '1s' }}
                      aria-hidden="true"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Only if motion is not reduced */}
        {!reducedMotion && (
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            aria-hidden="true"
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        )}
      </section>

      {/* Enhanced CSS for animations and accessibility */}
      <style jsx global>{`
        /* Screen reader only content */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        /* Focus visible for screen readers */
        .focus\\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes pulse-scale {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #2563eb, #7c3aed);
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .text-gray-600 {
            color: #000;
            font-weight: 600;
          }
          .border-gray-200 {
            border-color: #000;
            border-width: 2px;
          }
          .bg-gradient-to-r {
            background: #000 !important;
            color: #fff !important;
          }
        }

        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }

          .animate-bounce,
          .animate-pulse {
            animation: none !important;
          }
        }

        /* Responsive typography */
        @media (max-width: 640px) {
          .text-4xl {
            font-size: 2rem;
            line-height: 1.1;
          }
          .text-5xl {
            font-size: 2.5rem;
            line-height: 1.1;
          }
          .px-8 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .text-4xl {
            font-size: 1.75rem;
            line-height: 1.2;
          }
          .px-8 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .py-4 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
          }
        }

        @media (max-width: 360px) {
          .text-4xl {
            font-size: 1.5rem;
            line-height: 1.3;
          }
          .space-y-6 > * + * {
            margin-top: 1rem;
          }
          .gap-4 {
            gap: 0.75rem;
          }
        }

        /* Print styles */
        @media print {
          .animate-bounce,
          .animate-pulse {
            animation: none !important;
          }

          .shadow-lg,
          .shadow-2xl {
            box-shadow: none !important;
          }

          .bg-gradient-to-r,
          .bg-gradient-to-br {
            background: #000 !important;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
