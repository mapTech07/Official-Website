/*
import package from react
 */
import React from 'react';

const Domain = () => {
  return (
    <section>
      {/* Hero Section */}
      <section>
        <div className="flex flex-col lg:flex-row items-center justify-center  h-full  bg-gradient-to-r from-indigo-100 via-blue-0 to-white-200 relative overflow-hidden px-6 py-6 md:px-12 lg:px-32 ">
          {/* Background Overlay */}
          <div className="relative w-[80vw] py-2 h-full mb-10 md:mt-16 flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-20">
            {/* Left Section - Text Content */}
            <section className="relative z-10 w-full lg:w-[60%] text-left px-6 lg:px-10">
              <div className="lg:w-1/2 space-y-4">
                <h6 className="font-bold relative inline-block">
                  Domains for Sale
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
                </h6>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Premium domains for sale
                </h2>
                <p>
                  Invest in a valuable, unforgettable domain name and make
                  yourself stand out from the crowd.
                </p>
                <button>Search Domain</button>
              </div>
            </section>

            {/* Right Section - Image */}
            <section className="relative z-10 w-full lg:w-[40%]">
              <div className="animate-float"></div>
            </section>
          </div>
        </div>
      </section>

      <section className='className="container w-[80vw]  mx-auto mt-32 mb-20 px-4 lg:px-20 items-center"'>
        <div className="relative mt-8 flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="lg:w-1/2 space-y-4 text-center">
            <h6 className="font-bold relative inline-block">
              Domain
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
            </h6>
            <h2 className="text-3xl font-semibold text-gray-800">
              The Power of a <span className="text-[#144A9C]">Domain Name</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Domain MAP Overlay */}
      <section className='className="container w-[80vw]  mx-auto mt-32 mb-20 px-4 lg:px-20 items-center"'>
        <div className="relative mt-8 flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="lg:w-1/2 space-y-4 text-center">
            <h6 className="font-bold relative inline-block">
              Connection
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
            </h6>
            <h2 className="text-3xl font-semibold text-gray-800">
              Connect with us and lets build something{' '}
              <span className="text-[#144A9C]">together</span>
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col lg:flex-row items-center justify-center  h-full  bg-gradient-to-l from-indigo-100 via-blue-0 to-white-200 relative overflow-hidden px-6 py-6 md:px-12 lg:px-32 ">
          {/* Background Overlay */}
          <div className="relative w-[80vw] py-2 h-full mb-10 md:mt-16 flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-20">
            {/* Left Section - Text Content */}
            <section className="relative z-10 w-full lg:w-[40%] text-left px-6 lg:px-10">
              <div className="animate-float"></div>
            </section>

            {/* Right Section - Image */}
            <section className="relative z-10 w-full lg:w-[60%] justify-end text-left px-6 lg:px-10">
              <div className="lg:w-1/2 space-y-4">
                <h6 className="font-bold relative inline-block">
                  Domains for Sale
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
                </h6>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Premium domains for sale
                </h2>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className='className="container w-[80vw]  mx-auto mt-32 mb-20 px-4 lg:px-20 items-center"'>
        <div className="relative mt-8 flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="lg:w-1/2 space-y-4 text-center">
            <h6 className="font-bold relative inline-block">
              Hosting
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
            </h6>
            <h2 className="text-3xl font-semibold text-gray-800">
              Empowering Solutions with{' '}
              <span className="text-[#144A9C]">Tech</span> &{' '}
              <span className="text-[#144A9C]">Innovation</span>
            </h2>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Domain;
