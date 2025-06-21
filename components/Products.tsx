'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import {
  Building,
  Hotel,
  HomeIcon,
  BarChartBig,
  ArrowRight,
  Check,
} from 'lucide-react';
import rms from '../public/rms.png';
import hostel from '../public/hostel.png';
import invsys from '../public/inventory.png';
import ERP from '../public/ERP.png';
import Link from 'next/link';

interface ProductData {
  id: string;
  name: string;
  shortName: string;
  description: string;
  features: string[];
  businessSize: string[];
  icon: JSX.Element;
  color: string;
  image?: StaticImageData; // For imported images
}

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('rms');
  // const [activeFeatureIndex, setActiveFeatureIndex] = useState<number | null>(null);
  const resetToDefault = () => {
    setActiveTab('rms');
  };
  const products: ProductData[] = [
    {
      id: 'rms',
      name: 'Restaurant Management System',
      shortName: 'RMS',
      description:
        'A comprehensive solution for hotels, restaurants, and cafes to streamline operations, enhance customer experience, and increase profitability. RMS integrates all aspects of hospitality management into one easy-to-use platform.',
      features: [
        'Room management with real-time availability tracking',
        'Table management with visual floor plans',
        'Order processing and tracking system',
        'Menu and category management',
        'Inventory and stock control',
        'Role-based access for Cashiers, Waiters, and Admins',
        'Billing and payment processing',
        'Customer relationship management',
        'Reporting and analytics dashboard',
      ],
      businessSize: ['Small', 'Medium', 'Large'],
      icon: <Hotel />,
      color: 'bg-blue-500',
      image: rms,
    },
    {
      id: 'dormdex',
      name: 'Hostel Management System',
      shortName: 'DormDex',
      description:
        'DormDex is a comprehensive hostel management solution designed to simplify administrative tasks, enhance student experience, and optimize resource utilization. Perfect for educational institutions, student housing, and private hostels.',
      features: [
        'Student management with complete profiles',
        'Check-in and check-out processing',
        'Automated attendance tracking system',
        'Real-time notifications and announcements',
        'Staff management with role assignment',
        'Income and expenses tracking',
        'Room allocation and management',
        'Role-based access for Admins, Managers, and Students',
        'Reporting and analytics tools',
      ],
      businessSize: ['Small', 'Medium', 'Large'],
      icon: <HomeIcon />,
      color: 'bg-blue-500',
      image: hostel,
    },
    {
      id: 'invsys',
      name: 'Inventory Management System',
      shortName: 'InvSys',
      description:
        'InvSys provides businesses with a powerful yet user-friendly inventory management solution that optimizes stock levels, reduces waste, and improves supply chain efficiency. Suitable for retailers, wholesalers, and manufacturers.',
      features: [
        'Real-time inventory tracking',
        'Barcode and QR code integration',
        'Purchase order management',
        'Supplier relationship management',
        'Multi-location warehouse management',
        'Low stock alerts and reordering',
        'Product categorization and tagging',
        'Batch and lot tracking',
        'Comprehensive reporting and analytics',
      ],
      businessSize: ['Small', 'Medium'],
      icon: <Building />,
      color: 'bg-blue-500',
      image: invsys,
    },
    {
      id: 'maperp',
      name: 'Enterprise Resource Planning',
      shortName: 'MAPERP',
      description:
        'MAPERP is an all-in-one business management solution that integrates all core business processes into a unified system. It provides end-to-end visibility and control over finances, operations, human resources, and customer relationships.',
      features: [
        'Financial management and accounting',
        'Human resource management',
        'Supply chain management',
        'Customer relationship management',
        'Project management',
        'Manufacturing and production planning',
        'Business intelligence and reporting',
        'Document management',
        'Multi-company and multi-currency support',
      ],
      businessSize: ['Medium', 'Large', 'Enterprise'],
      icon: <BarChartBig />,
      color: 'bg-blue-500',
      image: ERP,
    },
  ];

  const activeProduct =
    products.find((product) => product.id === activeTab) || products[0];

  return (
    <div className="w-full">
      {/* Modern Tabbed Navigation */}
      <div className="flex overflow-x-auto scrollbar-hide mb-12 pb-2">
        <div className="flex space-x-1 mx-auto">
          {products.map((product) => (
            <button
              key={product.id}
              className={`flex items-center px-5 py-3 rounded-full transition-all duration-200 whitespace-nowrap ${
                activeTab === product.id
                  ? `${product.color.replace('bg-', 'bg-')} text-white shadow-lg`
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveTab(product.id)}
            >
              <span
                className={`mr-2 ${activeTab === product.id ? 'text-white' : `text-${product.color.split('-')[1]}-500`}`}
              >
                {React.cloneElement(product.icon, { size: 24 })}
              </span>
              <span className="font-medium">{product.shortName}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="mb-12">
        <div
          className={`${activeProduct.color} rounded-2xl p-8 md:p-12 text-white relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center mb-4 text-white/80">
              <span className="bg-white/20 p-2 rounded-full mr-3">
                {React.cloneElement(activeProduct.icon, { size: 24 })}
              </span>
              <h3 className="text-lg font-medium">{activeProduct.shortName}</h3>
            </div>

            <div className="relative pb-2 text-center md:text-left">
              <h6 className="font-bold relative inline-block text-white/90">
                PRODUCT OVERVIEW
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white/60"></span>
              </h6>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {activeProduct.name}
            </h2>
            <p className="text-white/90 text-lg mb-6 text-justify">
              {activeProduct.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {activeProduct.businessSize.map((size) => (
                <div
                  key={size}
                  className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full font-medium text-sm"
                >
                  {size} Business
                </div>
              ))}
            </div>

            <Link
              href="/DemoRequest"
              onClick={resetToDefault}
              className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition-all"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features & Screenshot Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Features Accordion */}
        <div className="md:col-span-1">
          <div className="relative pb-2 mb-4">
            <h6 className="font-bold relative inline-block">
              KEY FEATURES
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
            </h6>
            <h3 className="text-xl font-semibold text-gray-800">
              Enhanced <span className="text-[#144A9C]">Capabilities</span>
            </h3>
          </div>

          <div className="space-y-2">
            {activeProduct.features.map((feature, index) => (
              <div
                key={index}
                className="border rounded-xl px-4 py-3 flex items-start gap-3"
              >
                <span
                  className={`${activeProduct.color.replace('bg-', 'text-')}`}
                >
                  <Check className="h-5 w-5 mt-1" />
                </span>
                <span className="text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshot */}
        <div className="md:col-span-2">
          <div className="bg-gray-50 rounded-2xl p-6 h-full">
            <div className="flex justify-between items-center mb-6">
              <div className="relative pb-2">
                <h6 className="font-bold relative inline-block">
                  PRODUCT PREVIEW
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
                </h6>
                <h3 className="text-xl font-semibold text-gray-800">
                  Visual <span className="text-[#144A9C]">Experience</span>
                </h3>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[16/6]">
              {activeProduct.image ? (
                // If the product has an imported image, use it
                <Image
                  src={activeProduct.image}
                  alt={`${activeProduct.name} Screenshot`}
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              ) : (
                // Otherwise use a placeholder
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">
                    {activeProduct.shortName} Preview
                  </span>
                </div>
              )}

              {/* Overlay with product logo */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                <div className={`${activeProduct.color} p-4 rounded-full`}>
                  {React.cloneElement(activeProduct.icon, {
                    size: 32,
                    color: 'white',
                  })}
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-medium text-gray-900 mb-2">
                Why choose {activeProduct.shortName}?
              </h4>
              <p className="text-gray-600 text-justify">
                Our {activeProduct.shortName} solution is built with modern
                technology stack and user-centric design to ensure maximum
                efficiency and ease of use. It&apos;s fully customizable to fit
                your specific business needs with enterprise-grade security and
                24/7 support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
