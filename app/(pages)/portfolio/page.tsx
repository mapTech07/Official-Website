'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import batasmaw from '../../../public/project_img/Batas.png';
import andasuppliers from '../../../public/project_img/AndaSupplier.png';
import rb_hair from '../../../public/project_img/RBHair.png';
import ecoparquet from '../../../public/project_img/Ecoprquet.png';

import seonmul from '../../../public/project_img/Seonmul.png';
import chettrakhabar from '../../../public/project_img/ChhetraKhabar.png';
import jkan from '../../../public/project_img/jkan.png';
import nepalpetrolube from '../../../public/project_img/NepalPetroLube.png';
import feltproduct from '../../../public/project_img/FeltProduct.png';
import southasia from '../../../public/project_img/SouthAsia_Trekking.png';
import kailash from '../../../public/project_img/Kailash_himalaya.png';

import senopasal from "../../../public/logo/Seonmul_Pasal.png";
import chhetrikhabar from "../../../public/logo/chettra_khabar.png";
import janajati from "../../../public/logo/JKAN.png";
import ecopar from "../../../public/logo/ecoparquet.png";
import batas from "../../../public/logo/batas.png";

import petrolube from "../../../public/logo/LogoMaxol.png";
import rbhair from "../../../public/logo/rb_hair.png";
import kailashtravel from "../../../public/logo/Kailash_logo.png";
import south_asia from "../../../public/logo/south_asia.png";
import atlastpacker from "../../../public/logo/atlastpacker.png";
import tech_hub from "../../../public/logo/tech_hub.png";



const projects = [
  {
    title: 'Batas MAW',
    category: 'Web Development',
    img: batasmaw,
  },
  {
    title: 'Kailash Himalaya',
    category: 'Web Development',
    img: kailash,
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
  },
  {
    title: 'Felt Product',
    category: 'Web Development',
    img: feltproduct,
  },
  {
    title: 'Seonmul Pasal',
    category: 'Web Development',
    img: seonmul,
  },
  {
    title: 'Chhetra Khabar',
    category: 'Web Development',
    img: chettrakhabar,
  },
  {
    title: 'Janajati Kalyan Ashram',
    category: 'Web Development',
    img: jkan,
  },
  {
    title: 'Nepal PetroLube',
    category: 'Web Development',
    img: nepalpetrolube,
  },
  {
    title: 'Eco Parquet & Decorator',
    category: 'Web Development',
    img: ecoparquet,
  },
  {
    title: 'South Asian Trekking',
    category: 'Web Development',
    img: southasia,
  },
  {
    title: 'Tech Hub Nepal',
    category: 'Graphic and UI/UX Design',
    img: tech_hub,
  },
  {
    title: 'Chhetra Khabar',
    category: 'Graphic and UI/UX Design',
    img: chhetrikhabar,
  },
  {
    title: 'Seonmul Pasal',
    category: 'Graphic and UI/UX Design',
    img: senopasal,
  },
  {
    title: 'Kailash Himalaya Trek',
    category: 'Graphic and UI/UX Design',
    img: kailashtravel,
  }
];

const categories = ['All', 'Web Development', 'Software Development', 'Graphic and UI/UX Design'];

const clients = [senopasal, chhetrikhabar, janajati, ecopar, batas, petrolube, rbhair, kailashtravel, south_asia, atlastpacker, tech_hub];

const Portfolios = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const marqueeRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section className="flex flex-col items-center container mt-32 mb-20 px-5 lg:px-20 min-h-fit">
      <div className="relative w-[80vw] h-full flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-20">
        <div className="w-full lg:w-[100%] px-6 lg:px-10 text-center">
          <h6 className="font-bold relative inline-block">
            OUR HAPPY CLIENTS
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
          </h6>
          <h2 className="text-3xl font-semibold text-gray-800">Delivering for 
          <span className="text-[#144A9C]"> Our Clients    </span>     </h2>
          <div className="flex justify-center w-full pb-6">
            <article className="w-[80vw] lg:w-[50vw] text-center">
              We build strong partnerships with our clients, delivering innovative solutions and driving success through collaboration.
            </article>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 pb-6 w-[80vw] lg:w-[60vw]">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md transition-colors ${
              selectedCategory === category
                ? 'bg-[#144A9C] text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid - 3 columns per row */}
      <div className="lg:mx-14 w-[80vw] lg:w-[70vw]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
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

        <div className="w-full lg:w-[100%] mt-10 py-10 px-6 lg:px-10 text-center">
          <h6 className="font-bold relative inline-block">
            OUR VALUED PARTNERS
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
          </h6>
          <h2 className="text-3xl font-semibold text-gray-800">
          Our 
          <span className="text-[#144A9C]"> Trusted </span> 
          Companies</h2>
          <div className="flex justify-center w-full">
            <article className="w-[80vw] lg:w-[50vw] text-center text-base text-gray-900">
              We believe that success is a shared journey. Collaborating closely with you, we ensure that our solutions align perfectly with your goals. 
            </article>
          </div>
        </div>

        {/* Marquee Wrapper */}
        <div
          className="relative w-[80vw] lg:w-[70vw] h-20 overflow-hidden mt-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={marqueeRef} className="marquee flex items-center whitespace-nowrap">
            {/* Render the clients array multiple times to ensure smooth looping */}
            {[...Array(10)].map((_, iteration) =>
              clients.map((element, index) => (
                <div key={`${iteration}-${index}`} className="h-16 w-32 flex-shrink-0 mx-4">
                  <Image
                    src={element}
                    alt="client__logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Tailwind Animations */}
        <style jsx>{`
          .marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }

          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Portfolios;