'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

import senopasal from '../public/logo/Seonmul_Pasal.png';
import chhetrikhabar from '../public/logo/chettra_khabar.png';
import janajati from '../public/logo/JKAN.png';
import ecoparquet from '../public/logo/ecoparquet.png';
import batas from '../public/logo/batas.png';
import petrolube from '../public/logo/LogoMaxol.png';
import rb_hair from '../public/logo/rb_hair.png';
import kailash from '../public/logo/kailash.png';
import south_asia from '../public/logo/south_asia.png';
import atlastpacker from '../public/logo/atlastpacker.png';
import tech_hub from '../public/logo/tech_hub.png';
import rajdhani_dairy from '../public/logo/rajdhani_dairy.png';
import madani_dairy from '../public/logo/madani_dairy.png';
import hotelmountain from '../public/logo/The_HotelMountainLogo.png';
import mero_tasbir from '../public/logo/MeroTasbir-logo.webp';

const clients = [
  { src: senopasal, name: 'Seonmul Pasal' },
  { src: chhetrikhabar, name: 'Chhetra Khabar' },
  { src: janajati, name: 'JKAN' },
  { src: ecoparquet, name: 'Ecoparquet' },
  { src: batas, name: 'Batas' },
  { src: petrolube, name: 'Petrolube' },
  { src: rb_hair, name: 'RB Hair Studio' },
  { src: kailash, name: 'Kailash Trading' },
  { src: south_asia, name: 'South Asia Network' },
  { src: atlastpacker, name: 'Atlastpacker' },
  { src: tech_hub, name: 'Tech Hub Nepal' },
  { src: rajdhani_dairy, name: 'Rajdhani Dairy' },
  { src: madani_dairy, name: 'Madani Dairy' },
  { src: hotelmountain, name: 'The Hotel Mountain' },
  { src: mero_tasbir, name: 'Mero Tasbir' },
];

const Client = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current)
      marqueeRef.current.style.animationPlayState = 'paused';
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current)
      marqueeRef.current.style.animationPlayState = 'running';
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h6 className="font-bold relative inline-block mb-6 text-[#1F2937] text-lg sm:text-xl">
            OUR HAPPY CLIENTS
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
          </h6>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Our Collaborative
            <span className="text-[#144A9C]"> Partners</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              We believe success is a shared journey. By partnering with diverse
              organizations, we co-create innovative solutions that drive real
              impact.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Wrapper */}
      <div
        className="relative overflow-hidden w-full py-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap will-change-transform"
          style={{ animation: 'marquee 20s linear infinite' }}
        >
          {clients.concat(clients).map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-3 sm:px-4 flex items-center justify-center"
              aria-label={client.name}
            >
              {/* Larger logo: ~96px height */}
              <Image
                src={client.src}
                alt={client.name}
                width={160}
                height={72}
                className="h-16 sm:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Client;
