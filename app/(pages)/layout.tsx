/*
import package from react 
*/
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
    </>
  );
};

export default Layout;
