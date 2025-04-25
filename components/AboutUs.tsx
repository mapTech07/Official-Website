'use client';

import React from 'react';
import Image from 'next/image';

import client from '../public/Partnership.svg';
import team from '../public/Team.svg';
import service from '../public/SLA.svg';
import satisfied from '../public/happy.svg';


const AboutUs = () => {
  return (
    <section className='flex flex-col place-items-center px-4 py-2 w-full'>
      <div className="relative w-[80vw] py-2 h-full mb-10 md:mt-16 flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-20">

        {/* About Section */}
        <div className="w-full lg:w-[40%] px-6 lg:px-10">
          <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
          <section className="opacity-90 mt-3 text-justify">
            <p className="text-base text-gray-900">
              <b>M.A.P. Tech Pvt. Ltd.</b> is a software company focused on providing innovative and personalized tech solutions. With the slogan <b>&quot;Empowering Solutions with Tech & Innovation,&quot;</b> we aim to transform businesses and government systems through cutting-edge technology and tailored services.</p>
            <b>&quot;Your Vision, Our Expertise—Driving Innovation, Growth, and Success&quot;</b>
          </section>
        </div>

        {/* Description Section */}
        <div className="flex flex-col w-full lg:w-[60%] place-items-center px-6 lg:px-10 my-4">
          <h2 className="text-xl font-extrabold text-center">
            We are a Global Creative and Software Development Agency Based in Nepal
          </h2>
          <div className="grid sm:grid-cols-4 lg:grid-cols-4 w-full place-items-center place-content-center gap-4 px-4 sm:px-6 md:px-8 lg:px-10 my-4">
            {/* Item 1 */}
            <div className="grid grid-col place-items-center place-content-center gap-2 p-4 w-full sm:w-1/6 md:w-1/5 lg:w-1/4">
              <Image src={service} alt="service icon" className="h-12 w-12 justify-center" />
              <h3 className="flex flex-col place-items-center text-center">
                <span className="text-3xl sm:text-4xl font-bold opacity-50">1+</span>
                <span className="text-[#144A9C] font-extrabold text-sm sm:text-base">Year Of Service</span>
              </h3>
            </div>

            {/* Item 2 */}
            <div className="grid grid-col place-items-center place-content-center gap-2 p-4 w-full sm:w-1/6 md:w-1/5 lg:w-1/4">
              <Image src={team} alt="team icons" className="h-12 w-12 justify-center" />
              <h3 className="flex flex-col place-items-center text-center">
                <span className="text-3xl sm:text-4xl font-bold opacity-50">10+</span>
                <span className="text-[#144A9C] font-extrabold text-sm sm:text-base">Team Members</span>
              </h3>
            </div>

            {/* Item 3 */}
            <div className="grid grid-col place-items-center place-content-center gap-2 p-4 w-full sm:w-1/6 md:w-1/5 lg:w-1/4">
              <Image src={client} alt="client icons" className="h-12 w-12 justify-center" />
              <h3 className="flex flex-col place-items-center text-center">
                <span className="text-3xl sm:text-4xl font-bold opacity-50">10+</span>
                <span className="text-[#144A9C] font-extrabold text-sm sm:text-base">Project Completed</span>
              </h3>
            </div>

            {/* Item 4 */}
            <div className="grid grid-col place-items-center place-content-center gap-2 p-4 w-full sm:w-1/6 md:w-1/5 lg:w-1/4">
              <Image src={satisfied} alt="client icons" className="h-10 w-10 justify-center" />
              <h3 className="flex flex-col place-items-center text-center">
                <span className="text-3xl sm:text-4xl font-bold opacity-50">99%</span>
                <span className="text-[#144A9C] font-extrabold text-sm sm:text-base">Customer Satisfaction</span>
              </h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;