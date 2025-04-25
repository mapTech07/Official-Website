/*
import package from react 
*/
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { ReactNode } from 'react';

/*
type setup for children
*/
type LayoutType = {
  children: ReactNode;
};

/*
Default layout to all pages 
*/
const Layout = ({ children }: LayoutType) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
