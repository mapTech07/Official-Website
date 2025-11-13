'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import batasmaw from '../public/project_img/Batas.webp';

const projects = [
  {
    id: 24,
    title: 'Mero Tasbir',
    category: 'Web Development',
    img: '/project_img/merotasbir.png',
  },
  {
    id: 25,
    title: 'The Hotel Mountain',
    category: 'Web Development',
    img: '/project_img/TheHotelMountain.png',
  },
  {
    title: 'Batas MAW',
    category: 'Web Development',
    img: batasmaw,
  },
  {
    id: 26,
    title: 'Everest Trade Link',
    category: 'Web Development',
    img: '/project_img/EverestTradeLink.png',
  },
];

const Project = () => {
  return (
    <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8 min-h-fit bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="text-center mb-8">
          <h6 className="font-bold relative inline-block mb-4 text-[#1F2937]">
            OUR PORTFOLIO
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
          </h6>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Our
            <span className="text-[#144A9C]"> Recent Works</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              Delivering innovative digital solutions through collaboration and
              technical excellence.
            </p>
          </div>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full mb-2 inline-block">
                  {project.category}
                </span>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link href="/portfolio">
            <button className="text-xs px-6 py-2.5 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
