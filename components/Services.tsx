'use client';
/*
import packages from react
*/
import React, { } from 'react';

import webdev from '../public/services_img/website.jpg';
import application from '../public/services_img/ios.jpg';
import ai_chat from '../public/services_img/chatbot.jpg';
import software from '../public/services_img/software-dev.jpg';
import ui from '../public/services_img/logo1.jpg';
import video from '../public/services_img/video-edditing2.jpg';
import seo from '../public/services_img/7155205.jpg';
import domain from '../public/services_img/domain.jpg';
import hosting from '../public/services_img/digitalpromotion3.jpg';

import Image from 'next/image';

/*
import array of service from resources
*/
const arr = [
  {
    id: '01',
    title: 'Web Development',
    sections: [
      'MERN Framework',
      'Laravel Framework',
      'Django Framework',
      'WordPress Framework',
    ],
    desc: 'We craft dynamic, responsive websites for seamless user experiences. Whether you need a sleek design or a high-performance site, we ensure your website stands out and drives results.',
    img: webdev,
  },
  {
    id: '02',
    title: 'App Development',
    sections: [
      'Android Development',
      'IOS Development',
      'Hybrid Platform',
    ],
    desc: 'We provide high-quality cross-platform app development, ensuring intuitive, user-centric solutions that align with your brand for a seamless experience across all devices.',
    img: application,
  },
  {
    id: '03',
    title: 'AI Chatbot',
    sections: [
      'Natural Language Processing (NLP)',
      'Live Chat Handover',
    ],
    desc: 'Our intelligent chatbots are powered by cutting-edge AI technologies, offering personalized, real-time assistance across various platforms.',
    img: ai_chat,
  },

  {
    id: '04',
    title: 'Software Development',
    sections: [
      'Cross-Platform Compatibility',
      'Scalability',
      'Community Support',
    ],
    desc: 'Our software development services focus on delivering custom, scalable solutions using the latest technologies. We ensure high-quality code, seamless user experiences, and robust security throughout the development lifecycle.',
    img: software,
  },
  {
    id: '05',
    title: 'Graphic and UI/UX Design',
    sections: [
      'Logo Design',
      'Adobe Creative Suite',
      'Collateral Design',
      'Prototyping Figma Design',
    ],
    desc: 'We create intuitive, visually appealing designs to boost user engagement and satisfaction. Collaborating with you, we ensure designs align with your brand for a seamless experience across all platforms.',
    img: ui,
  },
  {
    id: '06',
    title: 'Video Editing',
    sections: [
      'Digital Promotion',
      'Professional Editing',
      'Audio Optimization',

      'Fast Turnaround',
    ],
    desc: 'Bring your vision to life with professional editing, seamless transitions, and high-quality visuals. We enhance your content with precise cuts, color grading, and audio optimization to create engaging and impactful videos.',
    img: video,
  },
  {
    id: '07',
    title: 'Digital Marketing',
    sections: [
      'Search Engine Optimization',
      'Content Strategy',
      'Organic Research',
      'Analytics and Insights',
    ],
    desc: 'We build and execute social media strategies to amplify your brand and foster engagement, ensuring your brand’s voice resonates consistently across all major platforms.',
    img: seo,
  },
  {
    id: '08',
    title: 'Domain Registration',
    sections: [
      'Email',
      'SSL',
      'Transfer Domain',
    ],
    desc: 'We offers secure domain registration with SSL, email, and hosting solutions to enhance your online presence.',
    img: domain,
  },
  {
    id: '09',
    title: 'Website Hosting',
    sections: [
      'Nginix',
      'Virtual Private Server',
      'Elastic Cloud Compute',
    ],
    desc: 'We offer reliable, secure website hosting solutions for all business needs, ensuring smooth and efficient performance at all times.',
    img: hosting,
  },

];

/* execute service component code*/
const Service = () => {

  return (

    <section className='flex flex-col items-center px-4 py-2 w-full'>
      <div className="relative w-[80vw] py-2 h-full mb-10 md:mt-16 flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-20">

        {/* Service Section */}
        <div className="w-full lg:w-[100%] px-6 lg:px-10 text-center">

          <h2 className="text-3xl font-semibold text-gray-800">What We Offer</h2>

          <div className="flex justify-center w-full">

            <article className="w-[80vw] lg:w-[50vw] text-center text-base text-gray-900">
              We provide innovative, tailored solutions that drive business growth and enhance digital experiences across various industries
            </article>
          </div>

        </div>
      </div>


      <div className=" lg:mx-14 w-[80vw] lg:w-[70vw]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8  mb-4  px-10">
          {arr.map(({ title, sections, desc, img }, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-xl border border-gray-300 cursor-pointer transition-all duration-300  hover:shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                {/* <h4 className="text-2xl font-bold opacity-60">{id}</h4> */}
                <h3 className="font-semibold">{title}</h3>
              </div>

              {/* Image container with hover effect */}
              <div className="relative w-full h-40 overflow-hidden rounded-md group">
                <Image
                  src={img}
                  alt={title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hidden Description (Reveals on hover) */}
                <div className="absolute bottom-0 left-0 w-full h-full bg-[#88A8CE] bg-opacity-90 text-white flex flex-col justify-center items-center text-center p-2 sm:p-4 opacity-0 transition-all duration-500 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-normal overflow-hidden line-clamp-5">
                    {desc}
                  </p>
                </div>




              </div>

              {/* Services list (Always visible) */}
              <div className="mt-3 text-sm flex flex-wrap gap-2">
                {sections.map((element, i) => (
                  <span key={i} className="bg-gray-200 px-2 py-1 rounded-full text-xs inline-block overflow-hidden whitespace-normal line-clamp-2">
                    {element}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Service;
