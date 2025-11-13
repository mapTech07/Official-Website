import React from 'react';
import Image from 'next/image';

const techs = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg',
  },
  {
    name: 'Flutter',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/flutter.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg',
  },
  {
    name: 'Express.js',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/express.svg',
  },
  {
    name: 'Laravel',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/laravel.svg',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg',
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mongodb.svg',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/docker.svg',
  },
  {
    name: 'Kubernetes',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/kubernetes.svg',
  },
  {
    name: 'Bitbucket',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/bitbucket.svg',
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/figma.svg',
  },
  {
    name: 'WordPress',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/wordpress.svg',
  },
];

const Technology = () => {
  return (
    <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8 min-h-fit py-12 md:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="text-center mb-8">
            <h6 className="font-bold relative inline-block mb-4 text-white">
              TECHNOLOGY STACK
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white"></span>
            </h6>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              We Work With{' '}
              <span className="text-blue-400">Every Major Tech Stack</span>
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 leading-relaxed">
                Precision-engineered tools shaping the future of digital
                innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 auto-rows-fr">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-5 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105"
              title={tech.name}
            >
              <div className="p-3 bg-gray-900/70 rounded-lg mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 invert opacity-80 group-hover:opacity-100"
                  unoptimized
                />
              </div>
              <span className="text-sm font-medium text-gray-200 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
