'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Next.js Link component
import O from '../public/icon.svg';
import { Anton } from 'next/font/google';
import gsap from 'gsap';

import yourImage from '../public/7090088.jpg';

// Import Google Font
const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
});

const HeroSection = () => {
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (h2Ref.current) {
      const letters = h2Ref.current.querySelectorAll('span');
      gsap.to(letters, {
        opacity: 1,
        duration: 0.05,
        stagger: 0.05,
        ease: 'power3.out',
      });
    }
  }, []);

  const text = 'Empowering Solutions with Tech & Innovation';

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center h-full bg-gradient-to-t from-indigo-100 via-blue-0 to-white-200 relative overflow-hidden px-6 py-6 md:px-12 lg:px-32"
    >
      {/* Background Overlay */}
      <div className="relative w-[80vw] py-2 h-full mb-10 md:mt-16 flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-20">

      {/* Left Section - Text Content */}
      <section className="relative z-10 w-full lg:w-[50%] text-left px-6 lg:px-10">
        <header className="text-xl font-normal uppercase opacity-80 text-black">
          Inn
          <Image src={O} className="w-4 inline" alt="O" />
          vate, Transf
          <Image src={O} className="w-4 inline" alt="O" />
          rm, Succeed!
        </header>

        <h1
          ref={h2Ref}
          className={`relative text-3xl md:text-5xl font-extrabold tracking-wider mt-4 md:mt-6 leading-tight md:leading-[4rem] text-black ${anton.className}`}
        >
          {text.split(' ').map((word, index) => (
            <span key={index} className="inline-block mr-2">
              {word.split('').map((letter, letterIndex) => (
                <span key={letterIndex} className="inline-block opacity-0">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <div className="flex space-x-4 mt-6">
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#1D4ED8] text-white rounded-full font-medium hover:bg-[#144A9C] transition-colors shadow-md"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-[gray-200] text-gray-800 rounded-full font-medium hover:bg-gray-300 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Right Section - Image */}
      <section className="relative z-10 w-full lg:w-[50%]">
        <div className="animate-float">
          <Image
            src={yourImage}
            alt="Employee Lady"
            className="w-full max-w-lg mx-auto my-6 rounded-lg shadow-2xl"
            style={{
              objectFit: 'contain', // Or 'cover' depending on your preference
              maxHeight: '400px', // Adjust as needed
            }}
          />
        </div>
      </section>
    </div>
    </div>
  );
};

export default HeroSection;