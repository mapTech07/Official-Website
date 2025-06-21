/*
import package from react
 */
import React from 'react';

/*
import needed components 
 */
import Services from '@/components/Services';

/**
 contact us code execute
 */
const Service = () => {
  return (
    <section className="container w-[80vw]  mx-auto mt-32 mb-20 px-4 lg:px-20 items-center">
      {/* Hero Section */}
      <div className="relative mt-8 flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="lg:w-1/2 space-y-4 text-center">
          <h6 className="font-bold relative inline-block">
            SERVICES
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
          </h6>
          <h2 className="text-3xl font-semibold text-gray-800">
            Empowering Solutions with{' '}
            <span className="text-[#144A9C]">Tech</span> &{' '}
            <span className="text-[#144A9C]">Innovation</span>
          </h2>
        </div>
      </div>
      <Services />
    </section>
  );
};

export default Service;
