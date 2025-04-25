'use client';

import React from 'react';
import Image from 'next/image';
import batasmaw from '../public/project_img/Batas.png';
import andasuppliers from '../public/project_img/AndaSupplier.png';
import rb_hair from '../public/project_img/RBHair.png';
import kailashhimalaya from '../public/project_img/Kailash_himalaya.png';
import Link from 'next/link';
const projects = [
  {
    title: 'Batas MAW',
    category: 'Web Development',
    img: batasmaw,
  },
  {
    title: 'Kailash Himalaya Trek',
    category: 'Web Development',
    img: kailashhimalaya,
  },
  {
    title: 'Anda Suppliers',
    category: 'Software Development',
    img: andasuppliers,
  },
  {
    title: 'RB Hair & Beauty Lounge',
    category: 'Web Development',
    img: rb_hair,
  }
];

const Project = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Honoring Our Clients&apos; Achievements
        </h2>
          <div className="mx-auto max-w-2xl">
            <p className="text-lg text-gray-700">
              We build strong partnerships with our clients, delivering innovative solutions and driving success through collaboration.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              {/* Image container with hover effect */}
              <div className="relative w-full h-48 sm:h-56 overflow-hidden group">
                <Image
                  src={project.img}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  priority={index < 2} // Only prioritize loading the first two images
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-3">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                  <div className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" viewBox="0 0 24 24">
                      <g>
                        <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
                        <path d="m13.707 16.707-1.414-1.414L15.586 12l-3.293-3.293 1.414-1.414L18.414 12l-4.707 4.707z" />
                        <path d="M6 11h11v2H6z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link href="/portfolio">
            <button className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Explore More Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;