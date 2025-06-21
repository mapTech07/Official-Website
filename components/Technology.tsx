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
    <section className="bg-gradient-to-tl from-indigo-100 via-blue-100 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Technologies We Use
          </h2>
          <p className="mt-2 text-gray-600 text-base">
            Our curated stack of modern tools and technologies
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Icons Grid */}
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
              {techs.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white rounded-xl shadow hover:shadow-md transition transform hover:scale-105"
                  title={tech.name}
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Our Technology Stack
            </h3>
            <p className="text-gray-700 text-base text-justify">
              We utilize cutting-edge tools and frameworks for both frontend and
              backend development, ensuring scalable, secure, and
              high-performance applications across various platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
