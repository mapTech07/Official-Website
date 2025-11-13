'use client';

import React, { useState } from 'react';

const faq = [
  {
    id: 1,
    title: 'What services do you offer?',
    answer:
      'We provide a range of software development services including web and mobile app development, custom software solutions, system integration, UI/UX design, quality assurance, and post-launch support.',
  },
  {
    id: 2,
    title: 'What software development approach do you follow?',
    answer:
      'We follow a structured process starting with requirement gathering, planning, and design. We then move on to development, testing, deployment, and ongoing support, ensuring quality and timely delivery at every stage.',
  },
  {
    id: 3,
    title: 'What technologies do you specialize in?',
    answer:
      'We specialize in a wide range of technologies including JavaScript (React, Node.js), Python, PHP, Java, Golang, and many more, depending on the project needs.',
  },
  {
    id: 4,
    title: 'Can you develop both web and mobile applications?',
    answer:
      'Yes, we offer both web and mobile app development services. We can build iOS and Android apps, or cross-platform applications using frameworks like React Native.',
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-10 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-base text-gray-900">
            Here are some quick answers to common questions you may have.
          </p>
        </div>

        <div className="after:content-[''] after:table after:clear-both">
          {faq.map(({ id, title, answer }) => (
            <div
              key={id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer mb-8 float-left w-full md:w-[calc(50%-16px)] md:odd:mr-8"
              onClick={() => toggleAnswer(id)}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <button
                  className="text-gray-500 text-lg focus:outline-none"
                  aria-label={
                    activeId === id ? 'Collapse answer' : 'Expand answer'
                  }
                >
                  {activeId === id ? '-' : '+'}
                </button>
              </div>
              {/* Answer */}
              {activeId === id && (
                <p className="mt-3 text-base text-gray-600">{answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
