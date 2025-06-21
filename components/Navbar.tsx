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

import company__logo from '../public/company__logo.webp';

const menu = [
  {
    icon: <FaConnectdevelop />,
    title: 'Web Design',
    description: 'User-Centric Websites',
  },
  {
    icon: <IoLogoFigma />,
    title: 'UI/UX Design',
    description: 'Seamless User Experiences',
  },
  {
    icon: <BsGooglePlay />,
    title: 'App Development',
    description: 'Crafting Seamless Apps',
  },
  {
    icon: <SiAdobe />,
    title: 'Graphic Design',
    description: 'Creative & Unique Designs',
  },
  {
    icon: <SiGoogleads />,
    title: 'Digital Marketing',
    description: 'Boost Your Brand',
  },
];

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState(false);

  const sidebarRef = useRef<HTMLElement | null>(null);
  const submenuRef = useRef<HTMLLIElement | null>(null);
  const servicesButtonRef = useRef<HTMLButtonElement | null>(null);

  // Open mobile sidebar and prevent background scroll
  const openMobileMenu = () => {
    setIsMobileView(true);
    document.body.style.overflow = 'hidden';
  };

  // Close mobile sidebar and restore scroll
  const closeMobileMenu = () => {
    setIsMobileView(false);
    document.body.style.overflow = 'auto';
  };

  // Toggle submenu visibility (for mobile)
  const toggleSubmenu = () => setActiveSubmenu((prev) => !prev);

  // Handle scroll: show/hide navbar based on scroll direction and add shadow after scrolling down
  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    const onResize = () => {
      if (window.innerWidth > 1023 && isMobileView) {
        closeMobileMenu();
      }
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [lastScrollY, isMobileView]);

  // Close mobile sidebar when clicking outside of it
  useEffect(() => {
    if (!isMobileView) return;

    const handleClickOutsideSidebar = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutsideSidebar);
    return () =>
      document.removeEventListener('mousedown', handleClickOutsideSidebar);
  }, [isMobileView]);

  // Close submenu when clicking outside on mobile
  useEffect(() => {
    if (!activeSubmenu) return;

    const handleClickOutsideSubmenu = (event: MouseEvent) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node)
      ) {
        setActiveSubmenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideSubmenu);
    return () =>
      document.removeEventListener('mousedown', handleClickOutsideSubmenu);
  }, [activeSubmenu]);

  return (
    <header
      className={`
        fixed top-0 w-full z-50 flex flex-col md:flex-row items-center justify-center
        px-4 sm:px-6 lg:px-20
        h-16 md:h-20
        transition-all duration-300
        ${isScrolled ? 'bg-white shadow-lg' : 'bg-white md:bg-transparent'}
        ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <section className="relative flex items-center justify-between w-full max-w-7xl h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={company__logo}
            alt="Company Logo"
            width={122}
            height={16}
            priority
            style={{
              width: 'auto',
              height: '2rem',
              maxHeight: '40px',
            }}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-end w-full gap-4 xl:gap-8 text-base">
          <Link
            href="/about"
            className="py-2 hover:text-blue-700 transition-colors"
          >
            About Us
          </Link>

          <div className="relative group">
            <button
              ref={servicesButtonRef}
              className="flex items-center gap-1 py-2 hover:text-blue-700 transition-colors"
              aria-haspopup="true"
              aria-expanded={activeSubmenu}
              onClick={() => setActiveSubmenu((prev) => !prev)}
              type="button"
            >
              Services{' '}
              <FaCaretDown className="group-hover:rotate-180 transition-transform" />
            </button>

            {/* Submenu for desktop (visible on hover) */}
            <div
              className="fixed left-0 right-0 mt-1 hidden group-hover:block bg-white shadow-lg"
              style={{ top: '64px', zIndex: 100 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 py-6">
                    {menu.map(({ icon, title, description }, i) => (
                      <div
                        key={i}
                        className="flex flex-col p-4 rounded-md cursor-pointer hover:bg-gray-100 transition-all h-full"
                      >
                        <div className="flex gap-3 items-center mb-2">
                          <span className="text-blue-600 text-xl">{icon}</span>
                          <span className="font-semibold">{title}</span>
                        </div>
                        <span className="text-gray-500 text-sm">
                          {description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/product"
            className="py-2 hover:text-blue-700 transition-colors"
          >
            Products
          </Link>
          <Link
            href="/portfolio"
            className="py-2 hover:text-blue-700 transition-colors"
          >
            Our Work
          </Link>
          <Link
            href="/insights"
            className="py-2 hover:text-blue-700 transition-colors"
          >
            Insights
          </Link>
          <Link
            href="/contact"
            className="py-2 hover:text-blue-700 transition-colors"
          >
            Contact Us
          </Link>

          <Link
            href="/DemoRequest"
            className="ml-4 px-4 py-2 rounded-md bg-blue-700 text-white shadow-md hover:bg-blue-800 transition-all"
          >
            Get a Demo
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={openMobileMenu}
          aria-label="Open menu"
          className="lg:hidden p-2 cursor-pointer text-3xl focus:outline-none"
          type="button"
        >
          <TbMenu3 />
        </button>

        {/* Mobile Sidebar Overlay */}
        {isMobileView && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile Sidebar */}
        {isMobileView && (
          <aside
            ref={sidebarRef}
            className="fixed top-0 left-0 w-4/5 sm:w-3/5 md:w-2/5 h-screen bg-white shadow-2xl z-50 p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={closeMobileMenu}
              aria-label="Close menu"
              className="absolute top-4 right-4 focus:outline-none"
              type="button"
            >
              <IoIosCloseCircle className="text-3xl cursor-pointer hover:text-blue-700" />
            </button>

            <nav className="mt-14">
              <ul className="space-y-1 text-lg font-medium">
                <li>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className="block py-3 px-2 rounded-md hover:bg-gray-100 hover:text-blue-700 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    onClick={closeMobileMenu}
                    className="block py-3 px-2 rounded-md hover:bg-gray-100 hover:text-blue-700 transition-colors"
                  >
                    About Us
                  </Link>
                </li>

                <li ref={submenuRef}>
                  <button
                    type="button"
                    onClick={toggleSubmenu}
                    aria-expanded={activeSubmenu}
                    className="flex justify-between items-center w-full py-3 px-2 rounded-md hover:bg-gray-100 hover:text-blue-700 transition-colors"
                  >
                    Services{' '}
                    <FaCaretDown
                      className={`transition-transform ${activeSubmenu ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {activeSubmenu && (
                    <ul className="mt-1 pl-4 space-y-1">
                      {menu.map(({ icon, title }, i) => (
                        <li key={i}>
                          {/* Uncomment and add link when needed */}

                          {/* <Link
                            href={`/services/${title.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-3 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                          > */}
                          <span className="text-blue-600">{icon}</span>
                          <span>{title}</span>
                          {/* </Link>  */}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li>
                  <Link
                    href="/product"
                    onClick={closeMobileMenu}
                    className="block py-3 px-2 rounded-md hover:bg-gray-100 hover:text-blue-700 transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    onClick={closeMobileMenu}
                    className="block py-3 px-2 rounded-md hover:bg-gray-100 hover:text-blue-700 transition-colors"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights"
                    onClick={closeMobileMenu}
                    className="block py-3 px-2 rounded-md hover:bg-gray-100 hover:text-blue-700 transition-colors"
                  >
                    Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="block py-3 px-2 rounded-md hover:bg-gray-100 hover:text-blue-700 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/DemoRequest"
                    onClick={closeMobileMenu}
                    className="mt-4 inline-block w-full text-center bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 shadow-md transition-all"
                  >
                    Get a Demo
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
        )}
      </section>
    </header>
  );
};

export default Navbar;
