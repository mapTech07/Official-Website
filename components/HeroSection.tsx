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
import { motion, useReducedMotion } from 'framer-motion';

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

// Reusable CountUp Component
function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Easing: ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(easeOut * end);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = 'Empowering Solutions with Tech & Innovation',
  subtitle = 'Innovate, Transform, Succeed!',
  description = 'Transform your business with cutting-edge technology solutions designed for the modern world.',
  ctaPrimary = { text: 'Get Started', href: '/contact' },
  ctaSecondary = { text: 'Learn More', href: '/about' },
}) => {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  // Mount effect to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Mouse tracking for parallax
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (heroRef.current && !prefersReducedMotion) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    },
    [prefersReducedMotion],
  );

  // Stats Data
  const statsData = useMemo(
    () => [
      { number: 40, label: 'Projects', suffix: '+' },
      { number: 99, label: 'Success Rate', suffix: '%', duration: 1.5 },
      { number: 24, label: 'Support', prefix: '', suffix: '/7', duration: 2 },
    ],
    [],
  );

  // Schema.org Structured Data
  const [structuredData, setStructuredData] = useState<string>('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'M.A.P. Tech Pvt. Ltd.',
        url: window.location.origin,
        logo: `${window.location.origin}/Site_Logo.webp`,
        description:
          'M.A.P. Tech Pvt. Ltd. is a leading tech company providing innovative solutions in web development, custom software, digital marketing, and graphic design.',
        slogan: title,
        foundingDate: '2024',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+9779745673009',
          contactType: 'customer service',
          description: 'Primary contact for customer service and inquiries',
          areaServed: ['NP', 'Global'],
          availableLanguage: ['en', 'ne'],
        },
        sameAs: [
          'https://www.facebook.com/maptech.np',
          'https://www.instagram.com/maptech.np/',
          'https://www.linkedin.com/company/105687482/',
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'SS chowk, Thimi',
          addressLocality: 'Bhaktapur',
          addressRegion: 'Bagmati',
          postalCode: '44600',
          addressCountry: 'NP',
        },
        image: `${window.location.origin}/laptop_show.jpg`,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': window.location.origin,
        },
      };
      setStructuredData(JSON.stringify(data));
    }
  }, [title]);

  // Split title into letters for animation
  const titleLetters = useMemo(
    () =>
      title.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5 + i * 0.04,
            ease: 'backOut',
          }}
          whileHover={
            prefersReducedMotion
              ? {}
              : {
                  y: -10,
                  scale: 1.1,
                  color: '#4F46E5',
                }
          }
          whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      )),
    [title, prefersReducedMotion],
  );

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <section
        ref={heroRef}
        className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50"
        role="banner"
        aria-labelledby="hero-title"
        aria-describedby="hero-description"
        onMouseMove={handleMouseMove}
      >
        {/* Interactive Gradient Ball */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div
            className="absolute w-96 h-96 bg-gradient-radial from-blue-300 to-transparent rounded-full blur-3xl"
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              transform: 'translate(-50%, -50%)',
              opacity: 0.6,
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
              {/* Subtitle Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                role="status"
                aria-label={subtitle}
              >
                <div className="flex items-center space-x-2">
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
              </motion.div>

              {/* Animated Title */}
              <h1
                id="hero-title"
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gray-900"
                aria-label={title}
              >
                {prefersReducedMotion ? (
                  title
                ) : (
                  <motion.div
                    className="flex flex-wrap"
                    initial="hidden"
                    animate="visible"
                    aria-hidden="true"
                  >
                    {titleLetters}
                  </motion.div>
                )}
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                id="hero-description"
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                {description}
              </motion.p>

              {/* Stats with Count-Up Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="grid grid-cols-3 gap-6 lg:gap-8 py-6"
                role="group"
                aria-label="Company statistics"
              >
                {statsData.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center cursor-pointer"
                    whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
                    whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-blue-600">
                      {stat.prefix}
                      <CountUp
                        end={stat.number}
                        duration={stat.duration || 2}
                      />
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <Link
                  href={ctaPrimary.href}
                  className="px-8 py-4 bg-blue-600 text-white font-semibold text-center rounded-full hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
                >
                  {ctaPrimary.text}
                </Link>
                <Link
                  href={ctaSecondary.href}
                  className="px-8 py-4 bg-transparent text-gray-800 font-semibold text-center rounded-full border-2 border-gray-300 hover:border-gray-400 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-300"
                >
                  {ctaSecondary.text}
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="relative group">
                <motion.div
                  className="overflow-hidden rounded-3xl shadow-2xl"
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          rotateY: mousePosition.x * 0.05 - 2.5,
                          rotateX: mousePosition.y * 0.05 - 2.5,
                        }
                  }
                  transition={{ type: 'spring', stiffness: 40, damping: 10 }}
                >
                  <Image
                    src="/hero_Img.png"
                    alt="Professional woman working with innovative technology solutions"
                    width={600}
                    height={600}
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className={`w-full h-auto object-cover transition-opacity duration-700 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {!prefersReducedMotion && (
                  <>
                    <motion.div
                      className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"
                      animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-lg"
                      animate={{ y: [0, 10, 0], rotate: [0, 10, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: 'easeInOut',
                        delay: 0.5,
                      }}
                    />
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {!prefersReducedMotion && isMounted && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
            </div>
          </motion.div>
        )}
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(
            circle at center,
            var(--tw-gradient-stops)
          );
        }
      `}</style>
    </>
  );
};

export default HeroSection;
