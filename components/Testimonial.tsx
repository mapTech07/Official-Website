'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import business from '../public/team_img/Man_Bahadur_Roka.webp';
import ceo from '../public/team_img/Anil_Nhemhafuki.webp';
import cto from '../public/team_img/Pawan_Bhattarai.webp';
import md from '../public/team_img/Manish_Pathak.png';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Anil Nhemhafuki',
    role: 'Co-Founder & CEO',
    content:
      'At M.A.P. Tech, we don’t just build software; we craft solutions that drive meaningful impact. Our mission is simple yet profound: to enable businesses to thrive in an ever-evolving world by delivering tools that are intelligent, scalable, and future-ready.',
    image: ceo,
  },
  {
    id: 2,
    name: 'Manish Pathak',
    role: 'Co-Founder & MD',
    content:
      'Innovation is at the heart of everything we do. By combining deep industry knowledge with cutting-edge technology, we empower organizations to unlock new opportunities and accelerate growth.',
    image: md,
  },
  {
    id: 3,
    name: 'Pawan Bhattarai',
    role: 'Co-Founder & CTO',
    content:
      'Digital transformation is no longer a choice—it’s an imperative. I believe that technology should serve a purpose, and that purpose is to solve real-world problems for our clients. Every line of code we write, every feature we develop, and every solution we deliver is designed with the end-user in mind.',
    image: cto,
  },

  {
    id: 4,
    name: 'Man Bahadur Roka',
    role: 'Business Consultant',
    content:
      'With 22 years of IT experience, Mr. Man Bahadur Roka drives business growth, optimizes processes, and delivers innovative solutions for client success in a changing tech landscape.',
    image: business,
  },
  // Add more if needed (recommended: at least 5–6 for smooth sliding)
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update cardsPerView based on window width
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const total = testimonials.length;

  const next = () => {
    if (currentIndex < total - cardsPerView) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Auto-play (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < total - cardsPerView) {
        next();
      } else {
        setCurrentIndex(0); // loop back
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, cardsPerView, total]);

  // Disable button states
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= total - cardsPerView;

  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">
      {/* Background Triangles */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(12)].map((_, i) => (
          <svg
            key={i}
            className="absolute w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <polygon points="12,2 22,12 12,22 2,12" />
          </svg>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h6 className="font-bold relative inline-block mb-4 text-[#1F2937]">
              Our Visionaries
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
            </h6>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
              What Our <span className="text-[#144A9C]">Leaders Say</span>
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 leading-relaxed">
                Trusted by startups, enterprises, and government partners across
                Nepal.
              </p>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Slides Container */}
            <div
              ref={containerRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 px-2"
                  style={{
                    width: `${100 / cardsPerView}%`,
                  }}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              disabled={isPrevDisabled}
              className={`absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 transition-opacity ${
                isPrevDisabled
                  ? 'opacity-30 cursor-not-allowed'
                  : 'text-blue-600 hover:bg-gray-50'
              }`}
              aria-label="Previous"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              disabled={isNextDisabled}
              className={`absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 transition-opacity ${
                isNextDisabled
                  ? 'opacity-30 cursor-not-allowed'
                  : 'text-blue-600 hover:bg-gray-50'
              }`}
              aria-label="Next"
            >
              <FaChevronRight size={20} />
            </button>

            {/* Pagination Dots (optional, but useful on mobile) */}
            {cardsPerView === 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx >= currentIndex && idx < currentIndex + cardsPerView
                        ? 'bg-blue-600 scale-125'
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex flex-col h-full ">
    <FaQuoteLeft className="text-blue-100 text-3xl mb-4 self-start" />
    <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow text-center">
      {testimonial.content}
    </p>
    <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={48}
          height={48}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="ml-4 text-left">
        <h3 className="text-sm font-bold text-gray-900">{testimonial.name}</h3>
        <p className="text-blue-600 text-xs font-medium mt-1">
          {testimonial.role}
        </p>
      </div>
    </div>
  </div>
);

export default Testimonials;
