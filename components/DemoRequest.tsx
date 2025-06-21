'use client';

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  companyContact: string; // make it a required string to avoid "string | undefined"
  companyAddress: string;
  product: string;
  subject: string;
  message: string;
}

interface Popup {
  message: string;
  type: 'success' | 'error';
}

const Demo: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    companyContact: '',
    companyAddress: '',
    product: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [popup, setPopup] = useState<Popup | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.product.trim()) newErrors.product = 'Please select a product';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await fetch('https://maptechnepal.com/emailme/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setPopup({
          message: data.message || 'Demo request submitted successfully!',
          type: 'success',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          companyContact: '',
          companyAddress: '',
          product: '',
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

  const inputStyle = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${
      errors[field] ? 'border-red-300' : 'border-gray-200'
    }`;

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {/* Header */}
      <div className="max-w-2xl text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          Schedule Your Free Demo
        </h2>
        <p className="text-gray-600">
          Interested in our product? Fill out the form and we&rsquo;ll arrange a
          personalized demo for you.
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-8 sm:p-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputStyle('name')}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyle('email')}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <PhoneInput
                  country={'np'}
                  value={formData.phone}
                  onChange={(phone) =>
                    setFormData((prev) => ({ ...prev, phone }))
                  }
                  containerClass="w-full"
                  inputStyle={{
                    width: '100%',
                    height: '48px',
                    fontSize: '16px',
                    paddingLeft: '48px',
                    borderRadius: '0.75rem',
                    border: `2px solid ${errors.phone ? '#FCA5A5' : '#E5E7EB'}`,
                  }}
                  buttonStyle={{
                    borderTopLeftRadius: '0.75rem',
                    borderBottomLeftRadius: '0.75rem',
                    border: `2px solid ${errors.phone ? '#FCA5A5' : '#E5E7EB'}`,
                    backgroundColor: 'white',
                  }}
                  inputProps={{ name: 'phone', required: true }}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
              Company Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Company / Organization Name
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputStyle('company')}
                  placeholder="Map Tech"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Company Contact Number
                </label>
                <PhoneInput
                  country={'np'}
                  value={formData.companyContact}
                  onChange={(phone) =>
                    setFormData((prev) => ({ ...prev, companyContact: phone }))
                  }
                  containerClass="w-full"
                  inputStyle={{
                    width: '100%',
                    height: '48px',
                    fontSize: '16px',
                    paddingLeft: '48px',
                    borderRadius: '0.75rem',
                    border: '2px solid #E5E7EB',
                  }}
                  buttonStyle={{
                    borderTopLeftRadius: '0.75rem',
                    borderBottomLeftRadius: '0.75rem',
                    border: '2px solid #E5E7EB',
                    backgroundColor: 'white',
                  }}
                  inputProps={{ name: 'companyContact' }}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Company / Organization Address
                </label>
                <input
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleChange}
                  className={inputStyle('companyAddress')}
                  placeholder="New Baneshwor, Kathmandu"
                />
              </div>
            </div>
          </div>

          {/* Product & Message */}
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Select Product *
              </label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className={inputStyle('product')}
              >
                <option value="">-- Select a product --</option>
                <option value="DormDex">DormDex</option>
                <option value="RMS">RMS</option>
                <option value="InvSys">InvSys</option>
                <option value="ERP">ERP</option>
              </select>
              {errors.product && (
                <p className="text-sm text-red-500 mt-1">{errors.product}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`${inputStyle('message')} resize-none`}
                placeholder="Your message here..."
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-xl py-3 text-white font-semibold shadow-md transition duration-300 ease-in-out ${
              loading
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
            }`}
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>

        {/* Popup */}
        {popup && (
          <div
            className={`mt-6 px-6 py-4 rounded-xl shadow-md text-white text-center flex items-center justify-center gap-2 transition-all duration-300 ${
              popup.type === 'success' ? 'bg-green-600' : 'bg-red-600'
            }`}
            role="alert"
          >
            <span>{popup.type === 'success' ? '✅' : '❌'}</span>
            <span>{popup.message}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Demo;
