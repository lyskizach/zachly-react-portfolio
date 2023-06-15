import React, { useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const PortfolioContainer = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
          return <AboutMe />;
        } 
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Home') {
            return <Home />;
          }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Resume') {
          return <Resume />;
        }
      };
      const handlePageChange = (page) => setCurrentPage(page);

      return (
        <div className="portfolio-container">
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer/>
        </div>
      );
};

export default PortfolioContainer;