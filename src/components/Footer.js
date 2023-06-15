// A single Footer component that appears on multiple pages
import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <ul className='footer-content'>
                <li>Github</li>
                <li>LinkedIn</li>
                <li>Leetcode</li>
            </ul>
        </div>
    );
};

export default Footer;