'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2';
import { motion, AnimatePresence } from 'framer-motion';
import contactImage from '@/public/illustration/contact.jpg';
import 'react-phone-input-2/lib/style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [popup, setPopup] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [loading, setLoading] = useState(false); // 🔁 loading state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true); // Start loading
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setPopup({ message: data.message || 'Message sent successfully! We will reach out to you soon.', type: 'success' });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setErrors({});
      } else {
        setPopup({ message: data.message || 'Something went wrong!', type: 'error' });
      }
    } catch {
      setPopup({ message: 'Server error. Please try again later.', type: 'error' });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => setPopup(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  return (
    <section className="flex flex-col items-center justify-center py-12 px-5">
      <div className="shadow-lg rounded-xl p-8 w-full max-w-7xl mt-6 flex flex-col lg:flex-row">
        {/* Form Section */}
        <div className="lg:mx-14 w-full lg:w-2/3 p-5">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                className={`border-2 outline-none rounded-md w-full px-4 py-2 ${errors.name ? 'border-red-300' : 'border-[#ADD8E6]'} focus:border-[#154B9A]`}
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className={`border-2 outline-none rounded-md w-full px-4 py-2 ${errors.email ? 'border-red-300' : 'border-[#ADD8E6]'} focus:border-[#154B9A]`}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <PhoneInput
                country={'np'}
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                inputProps={{
                  name: 'phone',
                  required: true,
                  placeholder: 'Phone Number *',
                  className: `border-2 h-10 outline-none rounded-md w-full px-14 py-2 text-gray-900 transition duration-300 ease-in-out focus:border-[#154B9A] hover:border-[#154B9A] ${errors.phone ? 'border-red-300' : 'border-[#ADD8E6]'}`,
                }}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="border-2 outline-none rounded-md w-full px-4 py-2 border-[#ADD8E6] focus:border-[#154B9A]"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message *"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`border-2 outline-none rounded-md w-full px-4 py-2 ${errors.message ? 'border-red-300' : 'border-[#ADD8E6]'} focus:border-[#154B9A]`}
            />

            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center gap-2 bg-[#154b9a] text-white text-xl font-semibold px-6 py-3 rounded-md w-fit md:w-1/5 transition duration-300 ease-in-out ${
                loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-[#003366]'
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="w-5 h-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex items-center justify-center p-5">
          <Image src={contactImage} alt="Contact Illustration" width={400} height={300} />
        </div>
      </div>

      {/* Popup with Slide-in Animation */}
      <AnimatePresence>
        {popup && (
          <motion.div
            key="popup"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-10 right-10 z-50 px-6 py-4 rounded shadow-lg text-white ${
              popup.type === 'success' ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <span>{popup.message}</span>
              <button onClick={() => setPopup(null)} className="font-bold">✕</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
