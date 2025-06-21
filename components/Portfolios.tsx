'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

// Updated project structure with arrays for categories and subcategories
const projects = [
  {
    id: 1,
    title: 'Batas MAW',
    categories: ['Web Development', 'Graphic and UI/UX Design'],
    subcategories: ['UI/UX Design'],
    img: '/project_img/Batas.png',
  },
  {
    id: 2,
    title: 'Kailash Himalaya',
    categories: ['Web Development', 'Graphic and UI/UX Design'],
    subcategories: ['UI/UX Design'],
    img: '/project_img/Kailash_himalaya.png',
  },
  {
    id: 3,
    title: 'Anda Suppliers',
    categories: ['Software Development'],
    subcategories: [],
    img: '/project_img/AndaSupplier.png',
  },
  {
    id: 4,
    title: 'RB Hair & Beauty Lounge',
    categories: ['Web Development'],
    subcategories: [],
    img: '/project_img/RBHair.png',
  },
  {
    id: 5,
    title: 'Felt Product',
    categories: ['Web Development'],
    subcategories: [],
    img: '/project_img/FeltProduct.png',
  },
  {
    id: 6,
    title: 'Seonmul Pasal',
    categories: ['Web Development', 'Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/project_img/Seonmul.png',
  },
  {
    id: 7,
    title: 'Chhetra Khabar',
    categories: ['Web Development', 'Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/project_img/ChhetraKhabar.png',
  },
  {
    id: 8,
    title: 'Janajati Kalyan Ashram',
    categories: ['Web Development'],
    subcategories: [],
    img: '/project_img/jkan.png',
  },
  {
    id: 9,
    title: 'Nepal PetroLube',
    categories: ['Web Development'],
    subcategories: [],
    img: '/project_img/NepalPetroLube.png',
  },
  {
    id: 10,
    title: 'Eco Parquet & Decorator',
    categories: ['Web Development'],
    subcategories: [],
    img: '/project_img/Ecoprquet.png',
  },
  {
    id: 11,
    title: 'South Asian Trekking',
    categories: ['Web Development', 'Graphic and UI/UX Design'],
    subcategories: ['UI/UX Design'],
    img: '/project_img/SouthAsia_Trekking.png',
  },
  {
    id: 12,
    title: 'Celebration Diamond Studio',
    categories: ['Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/logo/celebration_diamonds.svg',
  },
  {
    id: 13,
    title: 'Thanti Resort',
    categories: ['Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/logo/Thanti Resort.svg',
  },
  {
    id: 14,
    title: 'DormDex',
    categories: ['Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/logo/DormDex.png',
  },
  {
    id: 15,
    title: 'Melody Labs',
    categories: ['Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/logo/Melody.png',
  },
  {
    id: 16,
    title: 'Aakars Enterprise',
    categories: ['Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/logo/aakars enterprise.png',
  },
  {
    id: 17,
    title: 'Meow Cafe',
    categories: ['Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/logo/Meow.png',
  },
  {
    id: 18,
    title: 'Kailash Himalaya Trek',
    categories: ['Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/logo/Kailash_Site_Logo.webp',
  },
  {
    id: 19,
    title: 'Tech Hub Nepal',
    categories: ['Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/logo/tech_hub.png',
  },
  {
    id: 20,
    title: 'Sittan Cha',
    categories: ['Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/logo/Sittancha.png',
  },
  {
    id: 21,
    title: 'SS Media',
    categories: ['Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/logo/ss media.png',
  },
];

// Main categories
const categories = [
  'All',
  'Web Development',
  'Software Development',
  'Graphic and UI/UX Design',
];

// Subcategories for "Graphic and UI/UX Design"
const subcategories = ['All', 'Branding', 'UI/UX Design'];

const clients = [
  '/logo/Seonmul_Pasal.png',
  '/logo/chettra_khabar.png',
  '/logo/JKAN.png',
  '/logo/ecoparquet.png',
  '/logo/batas.png',
  '/logo/LogoMaxol.png',
  '/logo/rb_hair.png',
  '/logo/Kailash_Site_Logo.webp',
  '/logo/south_asia.png',
  '/logo/atlastpacker.png',
  '/logo/tech_hub.png',
];

const Portfolios = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');

  // Filter projects based on selected category and subcategory
  const filteredProjects = projects.filter((project) => {
    // If "All" category is selected, show all projects
    if (selectedCategory === 'All') {
      return true;
    }

    // Filter by selected category
    if (!project.categories.includes(selectedCategory)) {
      return false;
    }

    // If "Graphic and UI/UX Design" is selected and a subcategory is selected
    if (
      selectedCategory === 'Graphic and UI/UX Design' &&
      selectedSubcategory !== 'All'
    ) {
      return project.subcategories.includes(selectedSubcategory);
    }

    return true; // Show all projects that match the category when no subcategory filter
  });

  const marqueeRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = 'running';
    }
  };

  // Function to display project categories as a badge
  const displayProjectCategory = (project: { categories: string[] }) => {
    if (selectedCategory === 'All') {
      return project.categories[0];
    }
    return selectedCategory;
  };

  return (
    <section className="flex flex-col items-center mt-32 mb-20 px-4 sm:px-6 lg:px-8 min-h-fit">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h6 className="font-bold relative inline-block mb-4">
            OUR HAPPY CLIENTS
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
          </h6>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Delivering for
            <span className="text-[#144A9C]"> Our Clients</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              We build strong partnerships with our clients, delivering
              innovative solutions and driving success through collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pb-6 max-w-4xl mx-auto px-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedCategory(category);
              setSelectedSubcategory('All'); // Reset subcategory when category changes
            }}
            className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md transition-colors whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-[#144A9C] text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Submenu for Graphic and UI/UX Design - only appears when "Graphic and UI/UX Design" is selected */}
      {selectedCategory === 'Graphic and UI/UX Design' && (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pb-6 max-w-4xl mx-auto px-4">
          {subcategories.map((subcategory, index) => (
            <button
              key={index}
              onClick={() => setSelectedSubcategory(subcategory)}
              className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md transition-colors whitespace-nowrap ${
                selectedSubcategory === subcategory
                  ? 'bg-[#144A9C] text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {subcategory}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid - 3 columns per row */}
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              {/* Image container with hover effect */}
              <div className="relative w-full h-48 sm:h-56 overflow-hidden group">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  priority={project.id <= 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  {/* Primary category badge */}
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {displayProjectCategory(project)}
                  </span>

                  {/* Show subcategory badge when relevant */}
                  {project.subcategories.length > 0 &&
                    ((selectedCategory === 'Graphic and UI/UX Design' &&
                      selectedSubcategory === 'All') ||
                      (selectedCategory === 'All' &&
                        selectedSubcategory === 'All')) && (
                      <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {project.subcategories[0]}
                      </span>
                    )}
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 mb-8">
          <h6 className="font-bold relative inline-block mb-4">
            OUR VALUED PARTNERS
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
          </h6>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Our
            <span className="text-[#144A9C]"> Trusted </span>
            Companies
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              We believe that success is a shared journey. Collaborating closely
              with you, we ensure that our solutions align perfectly with your
              goals.
            </p>
          </div>
        </div>

        {/* Marquee Wrapper */}
        <div
          className="relative w-full max-w-4xl mx-auto h-20 overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={marqueeRef}
            className="marquee flex items-center whitespace-nowrap"
          >
            {/* Render the clients array multiple times to ensure smooth looping */}
            {[...Array(10)].map((_, iteration) =>
              clients.map((clientSrc, index) => (
                <div
                  key={`${iteration}-${index}`}
                  className="h-12 sm:h-16 w-24 sm:w-32 flex-shrink-0 mx-2 sm:mx-4"
                >
                  <Image
                    src={clientSrc}
                    alt="client logo"
                    width={128}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
              )),
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
