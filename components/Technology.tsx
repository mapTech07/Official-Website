import React from 'react';
const techs = [
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mongodb.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/express.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg' },
  { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/wordpress.svg' },

  { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/docker.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/kubernetes.svg' },

  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/flutter.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/laravel.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/figma.svg' },
  { name: 'Bitbucket', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/bitbucket.svg' },
];

const Technology = () => {
  return (
    <section className="items-center bg-gradient-to-tl from-indigo-100 via-blue-100 to-white py-16">
      <div className="w-[80vw] mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Technologies We Use</h2>
          <p className="text-gray-600 mt-2">Our curated stack of modern tools and technologies</p>
        </div>

        {/* Tech Stack Grid */}
        <div className="w-[80vw] lg:mx-14 px-4 flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {techs.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-full h-16 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105"
                  title={tech.name}
                >
                  <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/3 p-4 rounded-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">Our Technology Stack</h2>
            <p className="text-base text-gray-700 text-justify mb-4">
            We leverage the very best in technology to foster the development of highly secure applications able to scale and meet unique business needs. Our tech stack ranges from modern front-end frameworks like React and Next.js to strong back-end technologies like Node.js, Python, and Java. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
