'use client';

import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import PhoneInput from 'react-phone-input-2';
import { motion, AnimatePresence } from 'framer-motion';
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

const socialLinks = [
  {
    name: 'Whatsapp',
    href: 'https://api.whatsapp.com/send?phone=9779745673009',
    icon: (
      <svg
        className="w-7 h-7 hover:text-white"
        fill="currentColor"
        viewBox="0 0 27 27"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/maptech.np',
    icon: (
      <svg
        className="w-8 h-8 hover:text-white"
        fill="currentColor"
        viewBox="0 0 27 27"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/maptech.np/',
    icon: (
      <svg
        className="w-7 h-7 hover:text-white"
        fill="currentColor"
        viewBox="0 0 27 27"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.017 0C8.396 0 7.929.01 6.71.048 5.493.085 4.73.204 4.058.388c-.67.194-1.238.45-1.804 1.016C1.688 1.97 1.433 2.538 1.238 3.209c-.184.671-.302 1.434-.34 2.651C.859 7.081.85 7.547.85 11.169c0 3.621.009 4.088.047 5.306.038 1.217.157 1.98.34 2.651.196.671.45 1.239 1.017 1.804.566.566 1.134.82 1.804 1.017.671.183 1.434.302 2.651.34 1.218.038 1.685.047 5.306.047 3.622 0 4.089-.009 5.307-.047 1.216-.038 1.98-.157 2.65-.34.671-.196 1.239-.45 1.805-1.017.566-.566.82-1.133 1.016-1.804.184-.671.302-1.434.34-2.651.038-1.218.047-1.685.047-5.306 0-3.622-.009-4.089-.047-5.307-.038-1.216-.157-1.98-.34-2.65-.196-.671-.45-1.239-1.016-1.805C19.49.888 18.921.634 18.25.45 17.58.266 16.816.148 15.6.11 14.382.071 13.915.062 12.017.062L12.017 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12.017 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/105687482/',
    icon: (
      <svg
        className="w-7 h-7 hover:text-white"
        fill="currentColor"
        viewBox="0 0 27 27"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

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
    <section className="flex flex-col items-center  px-4 sm:px-6 lg:px-8 min-h-fit">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="text-center mb-8">
          <h6 className="font-bold relative inline-block mb-4 text-[#1F2937]">
            CONNECT WITH US
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
          </h6>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Delivering for
            <span className="text-[#144A9C]"> Get In Touch</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              Have questions or want to work with us? Fill out the form below
              and we&rsquo;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/5 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 lg:p-12 flex flex-col justify-between">
              <div className="mb-8 lg:mb-0">
                <h3 className="text-lg font-bold mb-6">Contact Information</h3>

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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">Naya Thimi, Bhaktapur, Nepal</p>
                  </div>

                  <div className="flex items-center px-12 space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
                        aria-label={`Follow us on ${social.name}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-12">
              <h3 className="text-lg font-bold text-gray-800 mb-6">
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
                      className={`w-full p-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-200 ${
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
                      className={`w-full p-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-200 ${
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
                        height: '42px',
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
                      className="w-full p-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
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
                    className={`flex items-center justify-center gap-2 bg-blue-600 text-white p-2 rounded-lg text-sm font-medium shadow-md transition duration-300 ease-in-out ${
                      loading
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1'
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="w-7 h-7 animate-spin text-white"
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

        <div className="mt-8 mb-12">
          <p className="text-center text-gray-600 leading-relaxed">
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
