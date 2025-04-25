/*
import package from react
*/
import React from 'react';

import SDLC from "../public/downloads.svg"

/*
import array-of-plan from resources
*/
import Image from 'next/image';

/*
execute planning component code
*/
const Planning = () => {
  return (
    <section className='flex flex-col items-center px-4 py-2 w-full'>
      <div className="relative w-[80vw] py-12 h-full mb-10 md:mt-16 flex flex-col lg:flex-row items-start justify-center gap-2 lg:gap-5">

        {/* About Section */}
        <div className="w-full lg:w-[30%] pl-6 lg:pl-10">
          <h2 className="text-3xl font-semibold text-gray-800">How We Works</h2>
          <div className="flex justify-center w-full">
            <article className="w-[80vw] lg:w-[50vw] text-base text-gray-900 text-justify">
              We begin with in-depth discussions to understand your goals, challenges, and technical needs, defining a clear roadmap. We design wireframes and prototypes for usability and brand alignment. Development ensures clean, scalable, and secure code with the latest technologies. Rigorous testing and seamless deployment guarantee performance and security. Post-launch, we provide ongoing maintenance, updates, and support.
            </article>
          </div>
        </div>

        {/* Description Section */}
        <div className="flex flex-col w-full lg:w-[70%] items-center  px-6 lg:px-10 my-4">
          <Image src={SDLC} alt="software-development"/>
        </div>
      </div>
    </section >
  );
};

export default Planning;
