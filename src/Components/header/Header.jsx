import React from 'react';

import sfLogo from './images/sf.png';
import spaceHelmet from './images/space-helmetf2.png';
import arrow from './images/arrow.png';

import './header.scss';

const Header = () => {
    return (
        <header className='Header'>
            <div className="container">
                <nav>
                    <ul>
                        <img src={sfLogo} alt="company-logo" className='header-logo' />
                        
                        <li>
                            <a href="#">Home</a>
                        </li>
                        
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        
                        <li>
                            <a href="#">What We Do</a>
                        </li>

                        <button className='header-btn'>Contact Us</button>
                    </ul>
                </nav>
                <div className="header-content">
                    <div className="header-wrapper">
                        <h1 className='header-content_title'>
                            Never Caught <br />
                            Off-Guard Again
                        </h1>
                        <p className='header-content_descr'>
                            We are specialist in protecting your assets and reputation to make <br /> sure you operate risk-free and focus on your core business.
                        </p>
                        <button className='header-btn'>Learn More</button>
                        <div className="scroll-arrow header-content_descr">
                            <a href="#" className='header-content_scroll'>
                                <img src={arrow} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="header-img">
                        <img src={spaceHelmet} alt="Astronaut-helm" className='header-content_img'/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;