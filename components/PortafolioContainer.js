import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './pages/Footer'
import Header from './pages/Header'
import Portafolio from './pages/Portafolio'


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portafolio'){
      return <Portafolio/>
    }
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

      {/* <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
        <Footer/>
    </div>

  );
}