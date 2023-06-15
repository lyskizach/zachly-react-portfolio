// For each project you feature in your portfolio, you should include the following:

// An image of the deployed application (either a GIF or a screenshot)

// The title of the project

// A link to the deployed application

// A link to the corresponding GitHub repository

// A single Project component that will be used multiple times in the Portfolio section
import React from 'react';

const Project = () => {
    return (
        <div className='project'>
            <ul className='project-list'>
                <li>BookClub Deployed Link then Repo Link
                    <a href='https://b-crites.github.io/BookClub/' target='_blank' rel='noreferrer'>

                    </a>
                    <a href='https://github.com/b-crites/BookClub' target='_blank' rel='noreferrer'>
                        
                    </a>
                </li>
                <li>Cook's Companion Repo Link
                    <a href='https://github.com/andrewmuhn/cooks-companion' target='_blank' rel='noreferrer'>

                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Project;