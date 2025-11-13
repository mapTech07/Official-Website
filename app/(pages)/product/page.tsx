import React from 'react';
import ProductsList from '@/components/Products';

const ProductsPage: React.FC = () => {
  return (
    <section className="container flex flex-col items-center  px-4 sm:px-6 lg:px-8 min-h-fit mx-auto xl:px-8 py-2 lg:py-2 xl:py-4">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="text-center mb-8">
          <h6 className="font-bold relative inline-block mb-4 text-[#1F2937]">
            OUR SOLUTIONS
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
          </h6>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Smart. Scalable.
            <span className="text-[#144A9C]"> Built for Your Business.</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              Unlock the power of enterprise-grade management systems tailored
              to your needs. Whether you run a restaurant, hostel, or need
              inventory control-we deliver seamless, efficient, and reliable
              solutions to help you grow faster and manage smarter.{' '}
            </p>
          </div>
        </div>
      </div>
      <ProductsList />
    </section>
  );
};

export default ProductsPage;
