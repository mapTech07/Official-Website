'use client';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

// Import images
import aboutUs from '../../../public/about_company.jpg';
import visionBanner from '../../../public/Image_about.jpg';
// import working__life from "../../../public/campaign-creators-gMsnXqILjp4-unsplash.jpg";

const teamMembers = [
  {
    name: 'Anil Nhemhafuki',
    role: 'Co-Founder & CEO',
    image: '/team_img/Anil.png', // Ensure relative paths are correct
    linkedin: 'https://www.linkedin.com/in/anil-nhemhafuki-688583292/',
    contact: `Bhaktapur, Nepal <br/>
              📧 <a href="mailto:ceo@maptechnepal.com" className="text-blue-600 hover:underline">ceo@maptechnepal.com</a>`,
  },
  {
    name: 'Manish Pathak',
    role: 'Co-Founder & MD',
    image: '/team_img/manishimage.png', // Ensure relative paths are correct
    linkedin: 'https://www.linkedin.com/in/manish-pathak-11150538a/',
    contact: `Nuwakot, Nepal <br/>
              📧 <a href="mailto:pmanish@maptechnepal.com" className="text-blue-600 hover:underline">pmanish@maptechnepal.com</a>`,
  },
  {
    name: 'Pawan Bhattarai',
    role: 'Co-Founder & CTO',
    image: '/team_img/Pawan.png', // Ensure relative paths are correct
    linkedin: 'https://www.linkedin.com/in/pawanbhattarai/',
    contact: `Ilam, Nepal <br/>
              📧 <a href="mailto:cto@maptechnepal.com" className="text-blue-600 hover:underline">cto@maptechnepal.com</a>`,
  },

  {
    name: 'Man Bahadur Roka',
    role: 'Business Consultant',
    image: '/team_img/Man_Bahadur_Roka.jpg', // Ensure relative paths are correct
    linkedin: 'https://np.linkedin.com/in/manroka',
    contact: `Kathmandu, Nepal <br/>
              📧 <a href="mailto:mbroka@maptech.agency" className="text-blue-600 hover:underline">mbroka@maptech.agency</a>`,
  },
];

const Page = () => {
  return (
    <section className="container px-4 sm:px-6 lg:px-8 min-h-fit">
      <div className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="lg:w-1/2 space-y-4 py-2 lg:py-2 xl:py-4">
          <h6 className="font-bold relative inline-block mb-4 text-[#1F2937]">
            ABOUT US
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
          </h6>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Empowering Solutions with{' '}
            <span className="text-[#144A9C]">Tech</span> &{' '}
            <span className="text-[#144A9C]">Innovation</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              M.A.P. Tech is a premier software solutions provider in Nepal,
              delivering innovative and transformative technology services to
              businesses worldwide. We specialize in crafting cutting-edge
              digital solutions tailored to meet the unique needs of our
              clients. Our passion lies in reimagining possibilities and
              empowering organizations to achieve their full potential in an
              ever-evolving digital landscape.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={aboutUs}
            alt="About M.A.P Tech"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>
      {/* Vision Section */}
      <div className="mt-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="lg:w-1/2">
          <Image
            src={visionBanner}
            alt="Vision Banner"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </div>
        <div className="lg:w-1/2 space-y-4">
          <h6 className="font-bold relative inline-block text-[#1F2937]">
            OUR VISION
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
          </h6>
          <h2 className="text-3xl font-semibold text-gray-800">
            Empowering Your Vision,{' '}
            <span className="text-[#144A9C]">Delivering Success</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              At M.A.P Tech, we envision a world where technology empowers
              businesses to transcend boundaries and achieve limitless
              possibilities. Through intelligent, scalable, and future-ready
              solutions, we simplify complexity, drive innovation, and build a
              smarter, connected digital ecosystem for enterprises globally.
            </p>
          </div>
        </div>
      </div>
      {/*Stat */}
      <section className=" py-12 gap-8 mb-12">
        <div className="bg-gray-50 rounded-2xl p-6 h-full">
          <div className="text-center mb-8">
            <h6 className="font-bold relative inline-block mb-4 text-[#1F2937]">
              OUR JOURNEY
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
            </h6>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
              Building something amazing{' '}
              <span className="text-[#144A9C]">since 2024</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 text-center transform transition-all duration-300">
              <div className="flex flex-col items-center justify-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-6">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <span
                    className="text-4xl font-bold text-white"
                    id="clientCount"
                  >
                    10
                  </span>
                  <span className="text-blue-500 text-xl">+</span>
                </div>
                <p className="text-gray-400 mt-2">Early Users</p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                    Beta Testing
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 text-center transform transition-all duration-300">
              <div className="flex flex-col items-center justify-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-6">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <span
                    className="text-4xl font-bold text-white"
                    id="projectCount"
                  >
                    5
                  </span>
                  <span className="text-green-500 text-xl">+</span>
                </div>
                <p className="text-gray-400 mt-2">MVP Features</p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                    In Development
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 text-center transform transition-all duration-300">
              <div className="flex flex-col items-center justify-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/10 mb-6">
                  <svg
                    className="w-8 h-8 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <span
                    className="text-4xl font-bold text-white"
                    id="teamCount"
                  >
                    10
                  </span>

                  <span className="text-purple-500 text-xl">+</span>
                </div>
                <p className="text-gray-400 mt-2">Team Members</p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-500">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                    Bootstrapped
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 text-center transform transition-all duration-300">
              <div className="flex flex-col items-center justify-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 mb-6">
                  <svg
                    className="w-8 h-8 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <span
                    className="text-4xl font-bold text-white"
                    id="hoursCount"
                  >
                    500
                  </span>
                  <span className="text-orange-500 text-xl">+</span>
                </div>
                <p className="text-gray-400 mt-2">Development Hours</p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-500/10 text-orange-500">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                    And Counting
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">MVP Progress</p>
                  <h4 className="text-2xl font-bold text-white mt-2">75%</h4>
                </div>
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">Sprint Cycle</p>
                  <h4 className="text-2xl font-bold text-white mt-2">1 Week</h4>
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">User Interviews</p>
                  <h4 className="text-2xl font-bold text-white mt-2">15+</h4>
                </div>
                <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Life at M.A.P Tech
      <div className="mt-20 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          <span className="text-[#144A9C]">Engineering the Future</span> with
          Innovative Solutions
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          #LifeAtMAPTech #CreativeAgency #Development #Design #DevOps
        </p>
      </div> */}
      {/* Team Section */}
      <div className="mt-12 mb-12">
        <div className="text-center mb-8">
          <h6 className="font-bold relative inline-block mb-4 text-[#1F2937]">
            OUR TEAM
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
          </h6>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Meet Our <span className="text-[#144A9C]">Visionaries</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-0">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
              <div
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{ __html: member.contact }}
              />
              <div className="flex justify-center gap-4 mt-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
