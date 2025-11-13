'use client';
import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Enhanced service data with better UX and accessibility
const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: '🌐',
    description:
      'We develop fast, responsive websites that are tailor-made to suit your business requirements, ensuring users have a perfect experience and a great online presence.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    features: [
      'Responsive Design',
      'SEO Optimized',
      'Fast Loading',
      'Cross-browser Compatible',
    ],
  },
  {
    id: 'app-development',
    title: 'App Development',
    icon: '📱',
    description:
      'Our mobile application solutions deliver high performance on both Android and iOS, working effortlessly with an intuitive UI alongside excellent functionality.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    features: [
      'iOS & Android',
      'Native Performance',
      'User-friendly UI',
      'App Store Ready',
    ],
  },
  {
    id: 'software-development',
    title: 'Software Development',
    icon: '💻',
    description:
      'From conceptualization to realization, we develop secure, scalable systems that will optimally facilitate business operations to effect growth.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    borderColor: 'border-green-200',
    features: [
      'Custom Solutions',
      'Scalable Architecture',
      'Security First',
      'Cloud Ready',
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: '🎨',
    description:
      'We humanize user-driven interfaces and enlightening digital experiences in a way that fosters participation across all platforms by increasing usability.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    features: [
      'User Research',
      'Prototyping',
      'Responsive Design',
      'Accessibility Focus',
    ],
  },
  {
    id: 'graphics-design',
    title: 'Graphics Design',
    icon: '🖼️',
    description:
      'Enhance your brand identity with visually compelling graphics, logos, and marketing materials that leave a lasting impression.',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-600',
    borderColor: 'border-pink-200',
    features: [
      'Brand Identity',
      'Logo Design',
      'Print Materials',
      'Digital Assets',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: '📈',
    description:
      'Boost your online presence with expert SEO, SMM, content writing, and targeted campaigns to drive traffic and grow your brand.',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-200',
    features: [
      'SEO Optimization',
      'Social Media',
      'Content Strategy',
      'Analytics & Reporting',
    ],
  },
  {
    id: 'domain-registration',
    title: 'Domain Registration',
    icon: '🌍',
    description:
      "Secure your brand's online presence with reliable domain registration, including SSL certificates and professional email setup.",
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    features: [
      'Domain Registration',
      'SSL Certificates',
      'Email Setup',
      'DNS Management',
    ],
  },
  {
    id: 'web-vps-hosting',
    title: 'Web/VPS Hosting',
    icon: '🗄️',
    description:
      'Reliable and scalable web and VPS hosting solutions with top-tier uptime, security, and 24/7 support to keep your site online and fast.',
    color: 'from-gray-500 to-slate-500',
    bgColor: 'bg-gray-50',
    textColor: 'text-gray-600',
    borderColor: 'border-gray-200',
    features: ['99.9% Uptime', '24/7 Support', 'SSD Storage', 'Auto Backups'],
  },
];

const Services: React.FC = () => {
  const router = useRouter();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const handleServiceClick = useCallback(
    (serviceId: string) => {
      router.push(`/services?service=${serviceId}`);
    },
    [router],
  );

  return (
    <section
      className="flex flex-col items-center px-4 sm:px-6 lg:px-8 min-h-fit"
      id="services"
    >
      {/* Container for Services */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="text-center mb-8">
          <h6 className="font-bold relative inline-block mb-4 text-[#1F2937]">
            Our Services
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
          </h6>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Empowering Solutions with{' '}
            <span className="text-[#144A9C]">Tech</span> &{' '}
            <span className="text-[#144A9C]">Innovation</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              From web development to digital marketing, we provide end-to-end
              solutions to help your business thrive in the digital landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative cursor-pointer transition-all duration-300 transform hover:scale-105 ${service.bgColor} ${service.borderColor} border rounded-2xl p-6 shadow-md hover:shadow-xl`}
              onClick={() => handleServiceClick(service.id)}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              role="button"
              tabIndex={0}
              aria-label={`Learn more about ${service.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleServiceClick(service.id);
                }
              }}
            >
              {/* Background Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
              />

              {/* Icon */}
              <div className="relative z-10 mb-4">
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <span className="text-3xl" role="img" aria-hidden="true">
                    {service.icon}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3
                  className={`text-xl font-semibold mb-3 ${service.textColor}`}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Centered Popup Tooltip (Now Full Width, Not Clipped) */}
              {hoveredService === service.id && (
                <div
                  className="inset-0 flex items-center justify-center pointer-events-none z-50 "
                  style={{ zIndex: 100 }}
                >
                  <div
                    className="bg-white rounded-xl shadow-lg p-4 max-w-xs w-full text-center border border-gray-200 animate-fadeIn"
                    style={{
                      position: 'absolute',
                      top: '45%',
                      left: '0%',
                      transform: 'translate(-50%, -50%)',
                      minWidth: '200px',
                      maxWidth: '280px',
                      // Ensure no clipping
                      overflow: 'visible',
                      zIndex: 100,
                    }}
                  >
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600"
                        >
                          <svg
                            className="w-4 h-4 mr-1 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 mb-12 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 mb-8">
              Need a custom solution? Let&apos;s discuss your project
              requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-[#144A9C] rounded-lg hover:bg-[#0d336d] transition-colors duration-200"
            >
              Get Free Consultation
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Add Fade-In Animation via style tag */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Services;
