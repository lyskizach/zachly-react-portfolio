// A single Footer component that appears on multiple pages
import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <ul className='footer-content'>
                <li>Github
                    <a href='https://github.com/lyskizach' target='_blank' rel='noreferrer'>
                        <img 
                        className='img-icon' 
                        src='./images/GithubIcon.jpg' 
                        alt='Github Icon'>
                        </img>
                    </a>
                </li>
                <li>LinkedIn
                    <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
                        <img
                        className='img-icon'
                        src='./images/LinkedinIcon.jpg'
                        alt='Linkedin Icon'>
                        </img>
                    </a>
                </li>
                <li>Leetcode
                    <a href='https://leetcode.com/lyskz/' target='_blank' rel='noreferrer'>
                        <img
                        className='img-icon'
                        src='./images/LeetcodeIcon.jpg'
                        alt='Leetcode Icon'>
                        </img>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;