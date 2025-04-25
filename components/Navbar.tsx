'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IoIosCloseCircle } from 'react-icons/io';
import { FaCaretDown, FaConnectdevelop } from 'react-icons/fa';
import { IoLogoFigma } from 'react-icons/io5';
import { BsGooglePlay } from 'react-icons/bs';
import { TbMenu3 } from 'react-icons/tb';
import { SiAdobe, SiGoogleads } from 'react-icons/si';

// import { SiAdobe, SiGoogleads, SiHostinger } from 'react-icons/si';

import company__logo from '../public/company__logo.png';

const menu = [
  { icon: <FaConnectdevelop />, title: 'Web Design', description: 'User-Centric Websites' },
  { icon: <IoLogoFigma />, title: 'UI/UX Design', description: 'Seamless User Experiences' },
  { icon: <BsGooglePlay />, title: 'App Development', description: 'Crafting Seamless Apps' },
  { icon: <SiAdobe />, title: 'Graphic Design', description: 'Creative & Unique Designs' },
  { icon: <SiGoogleads />, title: 'Digital Marketing', description: 'Boost Your Brand' },
  // { icon: <SiHostinger />, title: 'Website Hosting', description: 'Reliable & Secure' },
];

const Navbar = () => {
  const [isMobileView, setMobileView] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const mobileView = () => {
    setMobileView(true);
    document.body.style.overflow = 'hidden';
  };

  const resetToDefault = () => {
    setMobileView(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(window.scrollY > 50);
      setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Detect clicks outside the sidebar
  // Detect clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        resetToDefault();
      }
    };

    if (isMobileView) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileView]);

  return (
    <header
      className={`flex flex-col lg:flex-row items-center justify-center fixed top-0 w-full z-50 transition-all duration-300 px-6 lg:px-20 h-16 shadow-md 
        ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'} ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <section className={`flex items-center justify-between w-[80vw] h-full`}>

        {/* Logo Linked to Home */}
        <Link href="/">
          <Image src={company__logo} alt="Company Logo" className="h-8 lg:h-10 w-auto cursor-pointer" priority />
        </Link>

        {/* Navigation */}
        <div className='flex flex-row-reverse w-full lg:w-[60%]'>
          <nav className="hidden lg:flex items-center gap-8 text-base relative">
            <Link href="/about">About Us</Link>
            <div className="relative group">
              <Link href="/services" className="flex items-center gap-2">
                Services <FaCaretDown className="transition-transform group-hover:rotate-180" />
              </Link>
              <ul
                className="absolute left-0 right-0 shadow-md rounded-md py-4 hidden group-hover:block"
                style={{ width: '100%' }}
              >
                <div className="grid grid-cols-2 w-[30vw] bg-white  gap-4 p-4">
                  {menu.map(({ icon, title, description }, index) => (
                    <li key={index} className="p-3 hover:bg-gray-100 transition-all rounded-md">
                      <div className="flex gap-3 items-center">
                        {icon} <span className="font-semibold">{title}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{description}</span>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
            <Link href="/portfolio">Our Work</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/contact">Contact Us</Link>
            {/* <Link href="/domain" className="bg-[#144A9C] text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-800 transition-all">
              Buy Domain
            </Link> */}
          </nav>
        </div>

        {/* Mobile Menu Icon */}
        <TbMenu3 onClick={mobileView} className="lg:hidden text-3xl cursor-pointer" />

        {/* Mobile Sidebar */}
        {isMobileView && (
          <div className="fixed inset-0  z-40" onClick={resetToDefault}></div>
        )}
        {isMobileView && (
          <div ref={sidebarRef} className="fixed left-0 top-0 w-4/5 md:w-2/5 h-screen bg-white shadow-2xl z-50 p-6" >
            <IoIosCloseCircle onClick={resetToDefault} className="text-4xl absolute top-4 right-4 cursor-pointer hover:text-[#144A9C]" />
            <ul className="mt-10 text-lg font-semibold">
              <Link href="/" onClick={resetToDefault}><li className="py-3 hover:text-[#144A9C]">Home</li></Link>
              <Link href="/about" onClick={resetToDefault}><li className="py-3 hover:text-[#144A9C]">About Us</li></Link>
              <li className="py-3 flex items-center justify-between cursor-pointer" onClick={resetToDefault}>
                Our Services <FaCaretDown className="transition-transform" />
              </li>
              <ul className="ml-4 text-gray-700 font-medium">
                {menu.map(({ title }, index) => (
                  <li key={index} className="py-2">{title}</li>
                ))}
              </ul>
              <Link href="/portfolio" onClick={resetToDefault}><li className="py-3 hover:text-[#144A9C]">Our Works</li></Link>
              <Link href="/insights" onClick={resetToDefault}><li className="py-3 hover:text-[#144A9C]">Insights</li></Link>
              <Link href="/contact" onClick={resetToDefault}><li className="py-3 hover:text-[#144A9C]">Contact Us</li></Link>
              <Link href="/buy_domain" onClick={resetToDefault} className="block bg-[#144A9C] text-white text-center py-2 rounded-md mt-4 hover:bg-blue-800 transition-all">
                Buy Domain
              </Link>
            </ul>
          </div>
        )}
      </section>
    </header>
  );
};

export default Navbar;