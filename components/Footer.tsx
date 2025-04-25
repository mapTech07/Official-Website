'use client';

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import company__logo from '../public/footer_logo.png';
import Image from 'next/image';
import { PiLinktreeLogoFill } from 'react-icons/pi';
import Link from 'next/link';
import { useState } from 'react';

const menu = [
  { title: "About Us", to_path: '/about' },
  { title: "Our Work", to_path: '/portfolio' },
  { title: "Insights", to_path: '/insights' },
  { title: "Contact Us", to_path: '/contact' }
];

const Footer = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      alert('Form submitted successfully!');
      setFormData({ email: '' });
      setErrors({});
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#101828] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10">
          {/* Company Details Section - 3 columns */}
          <section className="md:col-span-3">
            <figure className="h-16 w-64 mb-4">
              <Image
                src={company__logo}
                alt="M.A.P Tech Logo"
                className="w-full h-full object-contain"
              />
            </figure>
            <p className="text-gray-400 mb-8 -mt-1">
              We aim to transform businesses and government systems through cutting-edge technology and tailored services
            </p>
            <div>
              <h5 className="font-semibold text-xl mb-2">Get in touch</h5>
              <p className="text-sm text-gray-400">Mon-Fri during NP working hours</p>
            </div>
          </section>

          {/* Navigation Section - 3 columns with margin */}
          <section className="md:col-span-3 md:ml-8 mt-1">
            <h4 className="text-xl font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {menu.map(({ title, to_path }, index) => (
                <li key={index}>
                  <Link
                    href={to_path}
                    className="hover:text-[#0D92F4] text-base transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Social Media Section - 3 columns */}
          <section className="md:col-span-3 mt-1">
            <h4 className="text-xl font-semibold mb-6">Stay connected with</h4>
            <div className="flex gap-6 mb-6">
              <Link href="https://www.facebook.com/maptechnepal/" target="_blank" aria-label="Facebook">
                <FaFacebook className="text-2xl" />
              </Link>
              <Link href="https://www.instagram.com/maptech.np/" target="_blank" aria-label="Instagram">
                <FaInstagram className="text-2xl" />
              </Link>
              <Link href="https://www.linkedin.com/company/105687482" target="_blank" aria-label="LinkedIn">
                <FaLinkedinIn className="text-2xl" />
              </Link>
              <Link href="https://wa.me/9779745673009" target="_blank" aria-label="WhatsApp">
                <FaWhatsapp className="text-2xl" />
              </Link>
              <Link href="https://linktr.ee/maptechnepal" target="_blank" aria-label="Linktree">
                <PiLinktreeLogoFill className="text-2xl" />
              </Link>
            </div>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gray-300 text-xl mt-1" />
                <a
                  href="https://maps.app.goo.gl/iyXG5g8piQcPqcE46"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                  aria-label="Location on Google Maps"
                >
                  Naya Thimi, Bhaktapur
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FaPhone className="text-gray-300 text-xl mt-1" />
                <div className="flex flex-col text-gray-400">
                  <a href="tel:+9779745673009" className="hover:text-white" aria-label="Call +977-9745673009">
                    +977-9745673009
                  </a>
                  <a href="tel:+9779700626667" className="hover:text-white" aria-label="Call +977-9700626667">
                    +977-9700626667
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-gray-300 text-xl mt-1" />
                <a 
                  href="mailto:info@maptechnepal.com" 
                  className="text-gray-400 hover:text-white"
                  aria-label="Send email to info@maptechnepal.com"
                >
                  info@maptechnepal.com
                </a>
              </div>
            </address>
          </section>

          {/* Subscribe Section - 3 columns */}
          <section className="md:col-span-3 mt-1">
            <h4 className="text-xl font-semibold mb-6">Subscribe</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter to get weekly tech insights</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className={`border-2 outline-none rounded-md w-full px-4 py-3 text-gray-900 ${errors.email ? 'border-red-500' : 'border-[#ADD8E6] focus:border-[#154B9A]'}`}
                />
                {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#0D92F4] text-white w-full py-3 px-4 rounded-md disabled:bg-gray-400 hover:bg-[#0A7ACC] transition-colors"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </section>
        </div>
      </div>

      {/* Footer Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p className="text-sm text-gray-500">
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;