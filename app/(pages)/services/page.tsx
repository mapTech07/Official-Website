/*
import package from react
 */
import React from 'react';

/*
import needed components 
 */
import Services from '@/components/Services';

/**
 contact us code execute
 */
const Service = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6 xl:px-8">
        <div className="py-2 lg:py-2 xl:py-4">
          <Services />
        </div>
      </div>
    </div>
  );
};

export default Service;
