'use client';

import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports with SSR disabled for better performance
const HeroSection = dynamic(() => import('@/components/HeroSection'));

// These components will only load when scrolled into view
const AboutUs = dynamic(() => import('@/components/AboutUs'), { ssr: false });
const Service = dynamic(() => import('@/components/Services'), { ssr: false });
const Planning = dynamic(() => import('@/components/Planning'), { ssr: false });
const Technology = dynamic(() => import('@/components/Technology'), { ssr: false });
const Project = dynamic(() => import('@/components/Project'), { ssr: false });
const Client = dynamic(() => import('@/components/Client'), { ssr: false });
const Testinomial = dynamic(() => import('@/components/Testinomial'), { ssr: false });
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: false });

// Define type for LazyComponent props
interface LazyComponentProps {
  component: React.ComponentType;
  height?: string;
  id: string;
}

// LazyComponent wrapper with proper TypeScript definitions
const LazyComponent: React.FC<LazyComponentProps> = ({ component: Component, height = '300px', id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once component is loaded
        }
      },
      {
        rootMargin: '200px 0px', // Load when within 200px of viewport
        threshold: 0.01,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={ref} id={id} style={{ minHeight: isVisible ? 'auto' : height }}>
      {isVisible ? <Component /> : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-gray-200 rounded col-span-2"></div>
                  <div className="h-4 bg-gray-200 rounded col-span-1"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="mt-24">
        {/* HeroSection is always loaded immediately */}
        <HeroSection />
        
        {/* Other sections are lazy loaded */}
        <LazyComponent component={AboutUs} height="500px" id="about-section" />
        <LazyComponent component={Service} height="600px" id="service-section" />
        <LazyComponent component={Planning} height="500px" id="planning-section" />
        <LazyComponent component={Technology} height="600px" id="technology-section" />
        <LazyComponent component={Project} height="700px" id="project-section" />
        <LazyComponent component={Client} height="400px" id="client-section" />
        <LazyComponent component={Testinomial} height="500px" id="testimonial-section" />
        <LazyComponent component={FAQ} height="500px" id="faq-section" />
      </div>
    </>
  );
};

export default Home;