'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../app/globals.css';
import business from '../public/team_img/Man_Bahadur_Roka.webp';
import ceo from '../public/team_img/Anil_Nhemhafuki.webp';
import cto from '../public/team_img/Pawan_Bhattarai.webp';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Anil Nhemhafuki',
    role: 'Founder & CEO',
    image: ceo,
    text: 'At M.A.P. Tech, we don’t just build software; we craft solutions that drive meaningful impact. Our mission is simple yet profound: to enable businesses to thrive in an ever-evolving world by delivering tools that are intelligent, scalable, and future-ready.',
  },
  {
    name: 'Pawan Bhattarai',
    role: 'Founder & CTO',
    image: cto,
    text: 'Digital transformation is no longer a choice—it’s an imperative. I believe that technology should serve a purpose, and that purpose is to solve real-world problems for our clients. Every line of code we write, every feature we develop, and every solution we deliver is designed with the end-user in mind.',
  },
  {
    name: 'Man Bahadur Roka',
    role: 'Business Consultant',
    image: business,
    text: 'With 22 years of IT experience, Mr. Man Bahadur Roka drives business growth, optimizes processes, and delivers innovative solutions for client success in a changing tech landscape.',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 3000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="flex flex-col items-center px-6 py-10 w-full bg-gray-100">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        What Our Leaders Say
      </h2>

      <div
        className="relative w-[80vw] max-w-2xl bg-white p-8 rounded-lg shadow-lg text-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Quote size={60} className="absolute top-4 right-4 text-gray-200" />

        <div
          key={index}
          className="flex flex-col items-center transition-opacity duration-500"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300 mb-4">
            <Image
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="object-cover w-full h-full"
              width={96}
              height={96}
              priority
            />
          </div>
          <p className="text-gray-700 italic text-lg mb-4">
            {testimonials[index].text}
          </p>
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-gray-900">
              {testimonials[index].name}
            </h4>
            <p className="font-medium text-gray-600">
              {testimonials[index].role}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="absolute top-1/2 left-[-2rem] transform -translate-y-1/2 p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="absolute top-1/2 right-[-2rem] transform -translate-y-1/2 p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${index === i ? 'bg-gray-900 scale-110' : 'bg-gray-400'}`}
          />
        ))}
      </div>

      {/* Preload Images */}
      <div className="hidden">
        {testimonials.map((item, i) => (
          <Image
            key={i}
            src={item.image}
            alt={item.name}
            width={1}
            height={1}
            priority
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
