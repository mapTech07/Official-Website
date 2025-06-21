'use client';
import React from 'react';
import { useRouter } from 'next/navigation'; // App Router navigation

// Simplified service data with extended SEO-optimized descriptions
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
  },
  {
    id: 'web-vps-hosting',
    title: 'Web/VPS Hosting',
    icon: '🗄️',
    description:
      'Reliable and scalable web and VPS hosting solutions with top-tier uptime, security, and 24/7 support to keep your site online and fast.',
    color: 'from-slate-500 to-gray-500',
    bgColor: 'bg-slate-50',
    textColor: 'text-slate-600',
    borderColor: 'border-slate-200',
  },
];

const Service = () => {
  const router = useRouter();

  return (
    <section
      className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50"
      role="main"
    >
      <header className="max-w-6xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Transform your digital presence with our comprehensive professional
          services tailored to elevate your business.
        </p>
      </header>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-8">
          {services.map((service) => (
            <article
              key={service.id}
              className={`group relative bg-white rounded-xl pt-4 pr-4 pb-4 pl-6 shadow-md hover:shadow-lg transition-all duration-300 border ${service.borderColor} hover:-translate-y-1 cursor-pointer overflow-hidden`}
              itemScope
              itemType="https://schema.org/Service"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 ${service.bgColor} rounded-lg group-hover:scale-105 transition-transform duration-300`}
                  >
                    <span className="text-lg">{service.icon}</span>
                  </div>
                  <h2
                    className="text-2xl font-bold text-gray-900 leading-tight"
                    itemProp="name"
                  >
                    {service.title}
                  </h2>
                </div>

                <p
                  className="text-gray-600 mb-3 text-0.2xl leading-relaxed text-justify"
                  itemProp="description"
                >
                  {service.description}
                </p>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className={`w-full ${service.textColor} text-xs font-semibold py-2 rounded-lg hover:${service.bgColor} transition-colors duration-200 flex items-center justify-center gap-1`}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    {/* <span>Learn More</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg> */}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-2">
              Ready to Get Started?
            </h2>

            <p className="text-gray-600 mb-4 text-1.2xl">
              Let&apos;s transform your ideas into reality with our tailored
              digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => router.push('/contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md font-bold"
              >
                Start Project
              </button>
              <button
                onClick={() => router.push('/portfolio')}
                className="border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-bold"
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
