// A single Header component that appears on multiple pages
import React from 'react';
import Navigation from './Navigation';

const Header = ({ currentPage, handlePageChange }) => {
    return (
        <header>
            <h1>Zachary Lyski</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    );
};

export default Header;