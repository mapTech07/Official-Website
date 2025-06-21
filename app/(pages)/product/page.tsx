import React from 'react';
import ProductsList from '@/components/Products';

const ProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 mt-24">
      <div className="relative w-full px-6 lg:px-10 text-center mb-16">
        <h6 className="font-bold relative inline-block">
          OUR SOLUTIONS
          <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
        </h6>
        <h2 className="text-3xl font-semibold text-gray-800">
          Smart. Scalable.
          <span className="text-[#144A9C]"> Built for Your Business.</span>
        </h2>
        <div className="flex justify-center w-full">
          <article className="w-[80vw] lg:w-[50vw] text-center">
            Unlock the power of enterprise-grade management systems tailored to
            your needs. Whether you run a restaurant, hostel, or need inventory
            control—we deliver seamless, efficient, and reliable solutions to
            help you grow faster and manage smarter.{' '}
          </article>
        </div>
      </div>

      <ProductsList />
    </div>
  );
};

export default ProductsPage;
