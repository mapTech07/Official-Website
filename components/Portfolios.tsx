'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  categories: string[];
  subcategories: string[];
  img: string;
  url?: string; // ✅ optional
}
// Updated project structure with arrays for categories and subcategories
const projects: Project[] = [
  {
    id: 24,
    title: 'Mero Tasbir',
    categories: ['Web Development'],
    subcategories: [],
    img: '/project_img/merotasbir.png',
    url: 'https://merotasbir.com',
  },
  {
    id: 25,
    title: 'The Hotel Mountain',
    categories: ['Web Development'],
    subcategories: [],
    img: '/project_img/TheHotelMountain.png',
    url: 'https://thehotelmountain.com',
  },
  {
    id: 26,
    title: 'Everest Trade Link',
    categories: ['Web Development'],
    subcategories: [],
    img: '/project_img/EverestTradeLink.png',
    url: 'https://everesttradelink.com',
  },
  {
    id: 1,
    title: 'Batas MAW',
    categories: ['Web Development', 'Graphic and UI/UX Design'],
    subcategories: ['UI/UX Design'],
    img: '/project_img/Batas.png',
    url: 'https://batasmaw.com',
  },
  {
    id: 2,
    title: 'Kailash Himalaya Trek',
    categories: ['Web Development', 'Graphic and UI/UX Design'],
    subcategories: ['UI/UX Design'],
    img: '/project_img/kailash_himalaya.png',
    url: 'https://www.kailashhimalaya.com/',
  },
  {
    id: 23,
    title: 'Travel & Trek Nepal',
    categories: ['Web Development'],
    subcategories: [''],
    img: '/project_img/travel&trek.png',
    url: 'https://travelandtreknepal.com/',
  },
  {
    id: 3,
    title: 'Anda Suppliers',
    categories: ['Software Development'],
    subcategories: [],
    img: '/project_img/AndaSupplier.png',
    url: 'https://andasuppliers.com/',
  },
  {
    id: 4,
    title: 'RB Hair & Beauty Lounge',
    categories: ['Web Development'],
    subcategories: [],
    img: '/project_img/RBHair.png',
    url: 'https://www.rbhairlounge.com.au/',
  },
  {
    id: 5,
    title: 'Felt Product',
    categories: ['Web Development'],
    subcategories: [],
    img: '/project_img/FeltProduct.png',
    url: 'https://batasmaw.com',
  },
  {
    id: 6,
    title: 'Seonmul Pasal',
    categories: ['Web Development', 'Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/project_img/seonpasal.png',
    url: 'https://seonmulpasal.com/',
  },
  {
    id: 7,
    title: 'Chhetra Khabar',
    categories: ['Web Development', 'Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/project_img/ChhetraKhabar.png',
    url: 'https://chhetrakhabar.com/',
  },
  {
    id: 8,
    title: 'Janajati Kalyan Ashram',
    categories: ['Web Development'],
    subcategories: [],
    img: '/project_img/jkan.png',
    url: 'https://jkan.org.np/',
  },
  {
    id: 9,
    title: 'Nepal PetroLube',
    categories: ['Web Development'],
    subcategories: [],
    img: '/project_img/NepalPetroLube.png',
    url: 'https://nepalpetrolube.com/',
  },
  {
    id: 10,
    title: 'Eco Parquet & Decorator',
    categories: ['Web Development'],
    subcategories: [],
    img: '/project_img/Ecoprquet.png',
    url: 'https://ecoparquet.com.np/',
  },
  {
    id: 11,
    title: 'South Asian Trekking',
    categories: ['Web Development', 'Graphic and UI/UX Design'],
    subcategories: ['UI/UX Design'],
    img: '/project_img/SouthAsia_Trekking.png',
    url: 'https://southasiatrekkings.com',
  },
  {
    id: 21,
    title: 'Free Student Union, MRMC',
    categories: ['Web Development'],
    subcategories: [],
    img: '/project_img/FreeStudentUnion.png',
    url: 'https://fsumrmc.edu.np/',
  },
  {
    id: 23,
    title: 'Madani Dairy',
    categories: ['Web Development', 'Graphic and UI/UX Design'],
    subcategories: ['Package Design'],
    img: '/project_img/madani_dairySite.png',
    url: 'https://madanidairy.com/',
  },
  {
    id: 12,
    title: 'Gharsamma.com',
    categories: ['Social Media Design'],
    subcategories: ['Package Design'],
    img: '/project_img/Gharsamma.png',
  },
  {
    id: 13,
    title: 'Celebration Diamond Studio',
    categories: ['Web Development', 'Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/logo/celebration_diamonds.svg',
  },
  {
    id: 14,
    title: 'Aakars Enterprise',
    categories: ['Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/logo/aakars enterprise.png',
  },

  {
    id: 15,
    title: 'Thanti Resort',
    categories: ['Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/logo/Thanti Resort.svg',
  },
  {
    id: 16,
    title: 'DormDex',
    categories: ['Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/logo/DormDex.png',
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
    title: 'Tech Hub Nepal',
    categories: ['Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/logo/tech_hub.png',
  },
  {
    id: 19,
    title: 'Sittan Cha',
    categories: ['Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/logo/Sittancha.png',
  },
  {
    id: 20,
    title: 'SS Media',
    categories: ['Graphic and UI/UX Design'],
    subcategories: ['Branding'],
    img: '/logo/ss media.png',
  },
  {
    id: 22,
    title: 'Rajdhani Dairy',
    categories: ['Graphic and UI/UX Design'],
    subcategories: ['Package Design'],
    img: '/logo/rajdhani_dairy.png',
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

    return true;
  });

  // Function to display project categories as a badge
  const displayProjectCategory = (project: { categories: string[] }) => {
    if (selectedCategory === 'All') {
      return project.categories[0];
    }
    return selectedCategory;
  };

  return (
    <div className="flex flex-col items-center  px-4 sm:px-6 lg:px-8 min-h-fit">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="text-center mb-8">
          <h6 className="font-bold relative inline-block mb-4 text-[#1F2937]">
            OUR PORTFOLIO
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
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedCategory(category);
              setSelectedSubcategory('All');
            }}
            className={`flex items-center px-5 py-2 rounded-full transition-all duration-200 whitespace-nowrap text-sm sm:text-base
          ${
            selectedCategory === category
              ? 'bg-[#3B82F6] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }
        `}
          >
            <span className="font-medium">{category}</span>
          </button>
        ))}
      </div>

      {/* Submenu for Graphic and UI/UX Design - only appears when "Graphic and UI/UX Design" is selected */}
      {selectedCategory === 'Graphic and UI/UX Design' && (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pb-6">
          {subcategories.map((subcategory, index) => (
            <button
              key={index}
              onClick={() => setSelectedSubcategory(subcategory)}
              className={`flex items-center px-5 py-2 rounded-full transition-all duration-200 whitespace-nowrap text-sm sm:text-base ${
                selectedSubcategory === subcategory
                  ? 'bg-[#3B82F6] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {subcategory}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid - 3 columns per row */}
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-blue-400 transition-all duration-300 group ${
                project.url ? 'cursor-pointer hover:shadow-lg' : ''
              }`}
              onClick={() => {
                if (project.url) {
                  window.open(project.url, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              {/* Image container */}
              <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    project.url ? 'group-hover:scale-105' : ''
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={project.id <= 2}
                />
                {/* Optional: "Live Site" badge if URL exists */}
                {project.url && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                    <span>↗</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {displayProjectCategory(project)}
                  </span>
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
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
