'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

// Logos (brand identity)
import hotelMitraLogo from '../public/logo/hotel_mitra.png';
import meroBakerSoftLogo from '../public/logo/mero_baker_soft.png';
import dormdexLogo from '../public/logo/dormdex.png';
import invsysLogo from '../public/logo/MAP_Logo.png';
import maperpLogo from '../public/logo/MAP_Logo.png';

// Screenshots
import HotelMitra from '../public/project_img/HotelMitra.png';
import MeroBakerSoft from '../public/project_img/Mero-BakerSoft.png';
import hostel from '../public/hostel.png';
import invsys from '../public/inventory.png';
import ERP from '../public/ERP.png';

interface ProductData {
  id: string;
  name: string;
  shortName: string;
  description: string;
  features: string[];
  businessSize: string[];
  color: string;
  image?: StaticImageData;
  logo: StaticImageData;
}

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('HotelMitra'); // match ID, not name
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetToDefault = () => {
    setActiveTab('HotelMitra');
  };

  const products: ProductData[] = [
    {
      id: 'HotelMitra',
      name: 'Hotel Mitra',
      shortName: 'Hotel Mitra',
      description:
        'A comprehensive solution for hotels, restaurants, and cafes to streamline operations, enhance customer experience, and increase profitability. Hotel Mitra integrates all aspects of hospitality management into one easy-to-use platform.',
      features: [
        'Branch Management/ Multi-Branch Support',
        'Role-Based Access Control',
        'Multi-User Support',
        'Tax and Charges Management',
        'KOT/BOT System',
        'Guest Self-Ordering via QR Code in Room',
        'Room Reservation and Table Orders',
        'Order Processing and Tracking System',
        'Menu and Category Management',
        'Inventory and Stock Control',
        'Billing and Payment Processing',
        'Customer Relationship Management (CRM)',
        'Reporting and Analytics Dashboard',
      ],
      businessSize: ['Small', 'Medium', 'Large'],
      color: 'bg-blue-500',
      image: HotelMitra,
      logo: hotelMitraLogo,
    },
    {
      id: 'meroBakerSoft',
      name: 'Mero BakerSoft',
      shortName: 'Mero BakerSoft',
      description:
        'Mero BakerSoft is a full-featured Enterprise Resource Planning (ERP) system specifically designed for bakery businesses. It provides end-to-end management capabilities including inventory control, production scheduling, sales tracking, customer management, and comprehensive business analytics.',
      features: [
        'Centralized Operations Management',
        'Real-Time Inventory Tracking with Alerts',
        'Automated Cost & Margin Calculation',
        'Production Planning and Batch Management',
        'Recipe-Based Product Management',
        'Role-Based Access Control',
        'Multi-User Support with Granular Permissions',
        'Purchase Order and Stock Adjustment System',
        'Low Stock & Reorder Point Notifications',
        'Sales Order and POS Integration',
        'Supplier & Customer Management',
        'Staff Payroll',
        'Comprehensive Dashboard with KPIs',
        'Data Import/Export and Backup System',
      ],
      businessSize: ['Small', 'Medium', 'Large'],
      color: 'bg-blue-500',
      image: MeroBakerSoft,
      logo: meroBakerSoftLogo, // ✅ fixed
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
      color: 'bg-blue-500',
      image: hostel,
      logo: dormdexLogo,
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
      color: 'bg-blue-500',
      image: invsys,
      logo: invsysLogo, // ✅ fixed
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
      color: 'bg-blue-500',
      image: ERP,
      logo: maperpLogo, // ✅ fixed
    },
  ];

  const activeProduct = products.find((p) => p.id === activeTab) || products[0];

  // Close modal on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex overflow-x-auto scrollbar-hide mb-4 pb-2">
        <div className="flex space-x-1 mx-auto">
          {products.map((product) => (
            <button
              key={product.id}
              className={`flex items-center px-4 py-3 rounded-full transition-all duration-200 whitespace-nowrap gap-2 ${
                activeTab === product.id
                  ? `${product.color.replace('bg-', 'bg-')} text-white shadow-lg`
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveTab(product.id)}
            >
              <span className="flex-shrink-0 w-5 h-5 relative">
                <Image
                  src={product.logo}
                  alt={`${product.shortName} logo`}
                  fill
                  className="object-contain"
                />
              </span>
              <span className="font-medium whitespace-nowrap">
                {product.shortName}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="mb-12">
        <div
          className={`${activeProduct.color} rounded-2xl p-4 md:p-12 text-white relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center mb-4 text-white/80">
              <span className="bg-white p-2 rounded-full mr-3 w-8 h-8 relative">
                <Image
                  src={activeProduct.logo}
                  alt={`${activeProduct.shortName} logo`}
                  fill
                  className="object-contain"
                />
              </span>
              <h3 className="text-white text-lg font-medium">
                {activeProduct.shortName}
              </h3>
            </div>

            <div className="relative pb-2 text-center md:text-left">
              <h6 className="font-bold relative inline-block text-white/90">
                PRODUCT OVERVIEW
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white/60"></span>
              </h6>
            </div>

            <h2 className="text-white/90 text-3xl md:text-4xl font-bold mb-4">
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
              href="/demoRequest"
              onClick={resetToDefault}
              className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition-all"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features & Screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        {/* Features */}
        <div className="md:col-span-1">
          <div className="relative">
            <h6 className="font-bold relative inline-block mb-4 text-[#1F2937]">
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

        {/* Preview */}
        <div className="md:col-span-2">
          <div className="bg-gray-50 rounded-2xl p-6 h-full">
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <h6 className="font-bold relative inline-block mb-4 text-[#1F2937]">
                  PRODUCT PREVIEW
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
                </h6>
                <h3 className="text-xl font-semibold text-gray-800">
                  Visual <span className="text-[#144A9C]">Experience</span>
                </h3>
              </div>
            </div>

            {/* Clickable Preview Container */}
            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[22/14]">
              {activeProduct.image ? (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full h-full relative focus:outline-none"
                  aria-label={`View full-size screenshot of ${activeProduct.name}`}
                >
                  <Image
                    src={activeProduct.image}
                    alt={`${activeProduct.name} interface screenshot`}
                    fill
                    className="object-cover cursor-zoom-in transition-opacity hover:opacity-90"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 800px, 1000px"
                  />
                </button>
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">
                    {activeProduct.shortName} Preview
                  </span>
                </div>
              )}

              {/* Logo on hover */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2 md:p-4 flex items-center justify-center">
                  <Image
                    src={activeProduct.logo}
                    alt={`${activeProduct.shortName} Logo`}
                    width={120}
                    height={120}
                    className="h-20 w-auto md:h-24 object-contain"
                  />
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

      {/* ✅ Full-Screen Image Modal */}
      {isModalOpen && activeProduct.image && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Fullscreen preview of ${activeProduct.name}`}
          tabIndex={-1}
        >
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white bg-black/30 hover:bg-black/50 rounded-full p-2.5 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
            aria-label="Close preview"
          >
            <span className="text-2xl font-bold">&times;</span>
          </button>

          <div className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="text-center mb-3">
              <h3 className="text-white text-lg font-semibold">
                {activeProduct.name} Preview
              </h3>
            </div>
            <div className="w-full overflow-auto rounded-xl shadow-2xl bg-white">
              <Image
                src={activeProduct.image}
                alt={`Detailed screenshot of ${activeProduct.name} interface`}
                width={1200}
                height={800}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
