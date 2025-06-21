'use client';

import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2';
import { motion, AnimatePresence } from 'framer-motion';
import contactImage from '@/public/illustration/contact.jpg';
import 'react-phone-input-2/lib/style.css';

// Define the shape of your form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Define the shape of your error messages (all optional)
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [popup, setPopup] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);
  const [loading, setLoading] = useState(false);

  // Add type for event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Add type for event: React.FormEvent<HTMLFormElement>
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch('https://maptechnepal.com/emailme', {
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
        setPopup({
          message:
            data.message ||
            'Message sent successfully! We will reach out to you soon.',
          type: 'success',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setErrors({});
      } else {
        setPopup({
          message: data.message || 'Something went wrong!',
          type: 'error',
        });
      }
    } catch {
      setPopup({
        message: 'Server error. Please try again later.',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => setPopup(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to work with us? Fill out the form below and
            we&rsquo;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="w-full lg:w-2/5 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 lg:p-12 flex flex-col justify-between">
              <div className="mb-8 lg:mb-0">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="mb-8">
                  Fill up the form and our team will get back to you within 24
                  hours.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 rounded-full p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">
                      <a href="tel:+9779745673009" className="hover:underline">
                        +977-9745673009
                      </a>
                      <br />
                      <a href="tel:+9779700626667" className="hover:underline">
                        +977-9700626667
                      </a>
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 rounded-full p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">
                      <a
                        href="mailto:info@maptechnepal.com"
                        className="hover:underline"
                      >
                        info@maptechnepal.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative w-full h-60 mt-6">
                  <Image
                    src={contactImage}
                    alt="Contact Illustration"
                    fill
                    className="object-contain rounded-lg opacity-80"
                  />
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="M.A.P. Tech"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-200 ${
                        errors.name
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-gray-200 focus:border-blue-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="maptech@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-200 ${
                        errors.email
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-gray-200 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number *
                    </label>
                    <PhoneInput
                      country={'np'}
                      value={formData.phone}
                      onChange={(phone) => setFormData({ ...formData, phone })}
                      containerClass="w-full"
                      inputStyle={{
                        width: '100%',
                        height: '48px',
                        fontSize: '16px',
                        paddingLeft: '48px',
                        borderRadius: '0.5rem',
                        borderWidth: '2px',
                        borderColor: errors.phone ? '#FCA5A5' : '#E5E7EB',
                      }}
                      buttonStyle={{
                        borderTopLeftRadius: '0.5rem',
                        borderBottomLeftRadius: '0.5rem',
                        borderWidth: '2px',
                        borderColor: errors.phone ? '#FCA5A5' : '#E5E7EB',
                        backgroundColor: 'white',
                      }}
                      inputProps={{
                        name: 'phone',
                        required: true,
                        placeholder: '(555) 123-4567',
                      }}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-200 ${
                      errors.message
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-200 focus:border-blue-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md transition duration-300 ease-in-out ${
                      loading
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1'
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
                      <>
                        Send Message
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>
            We respect your privacy and will never share your information with
            third parties.
          </p>
        </div>
      </div>

      {/* Popup Notification */}
      <AnimatePresence>
        {popup && (
          <motion.div
            key="popup"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-10 right-10 z-50 px-6 py-4 rounded-lg shadow-xl text-white ${
              popup.type === 'success' ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {popup.type === 'success' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
                <span className="font-medium">{popup.message}</span>
              </div>
              <button
                onClick={() => setPopup(null)}
                className="hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
