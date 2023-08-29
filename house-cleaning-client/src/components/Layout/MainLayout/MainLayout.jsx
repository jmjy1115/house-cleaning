import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import './MainLayout.css';

function MainLayout({ children }) {
  return (
    <div className='main-layout'>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
