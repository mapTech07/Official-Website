'use client';

import React from 'react';
import {
  Building,
  Hotel,
  HomeIcon,
  BarChartBig,
  CakeSlice,
} from 'lucide-react';

// Mock data for solutions
const solutions = [
  {
    id: 1,
    name: 'Hotel Mitra',
    description:
      'All-in-one hospitality management for hotels, restaurants, and cafes to streamline operations and boost profits.',
    icon: <Hotel />,
    link: '/product#HotelMitra',
  },
  {
    id: 2,
    name: 'Mero BakerSoft',
    description:
      'Complete bakery management with inventory, production, sales, and analytics in one system.',
    icon: <CakeSlice />,
    link: '/product#meroBakerSoft',
  },
  {
    id: 3,
    name: 'DormDex',
    description:
      'Smart hostel management for schools and private housing to simplify admin and improve student life.',
    icon: <HomeIcon />,
    link: '/product#dormdex',
  },
  {
    id: 4,
    name: 'InvSys',
    description:
      'Smart inventory control for retailers and manufacturers to reduce waste and optimize stock.',
    icon: <Building />,
    link: '/product#invsys',
  },
  {
    id: 5,
    name: 'MAP ERP',
    description:
      'End-to-end business management with finance, HR, operations, and CRM in one unified platform.',
    icon: <BarChartBig />,
    link: '/product#maperp',
  },
];

const MAPSuite: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center px-4 py-12 w-full overflow-hidden ">
      {/* Repeat the section twice */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-700">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white mb-6">M.A.P. Suite</h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demoRequest"
                className="px-6 py-3 bg-teal-700 hover:bg-teal-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                M.A.P. Suite Book
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="product"
                className="px-6 py-3 border border-white/30 hover:border-white/50 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                View all Solutions By M.A.P.
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="flex items-start gap-4 p-4 hover:bg-gray-700/50 rounded-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="flex-shrink-0">{solution.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-lg">
                    {solution.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mt-1">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MAPSuite;
