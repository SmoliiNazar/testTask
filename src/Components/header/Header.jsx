import React from 'react';
import { Link } from 'react-scroll';

import sfLogo from './images/sf.png';
import spaceHelmet from './images/space-helmetf2.png';
import arrow from './images/arrow.png';

import './header.scss';

const Header = () => {
    return (
        <header id='HEAD' className='Header'>
            <div className="container">
                
                <div className="mobile-wrapper">
                    <img src={sfLogo} alt="company-logo" className='header-logo' />
                    <div className="hamburger">
                        <span className='up'></span>
                        <span className="long"></span>
                        <span className='down'></span>
                    </div>
                </div>
                
                <nav>
                    <ul>
                        <img src={sfLogo} alt="company-logo"/>
                        
                        <li>
                            <Link to={'#'} smooth={true} duration={500} spy={true}>Home</Link>
                        </li>
                        
                        <li>
                            <Link to={'#'} smooth={true} duration={500} spy={true}>About Us</Link>
                        </li>
                        
                        <li>
                            <Link to={'#'} smooth={true} duration={500} spy={true}>What We Do</Link>
                        </li>
                        <Link to={'CUS'} smooth={true} duration={500} offset={80} spy={true}>
                            <button className='header-btn'>Contact Us</button>
                        </Link>
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
                        <Link to={'CUS'} smooth={true} duration={500} offset={80} spy={true}>
                            <button id='HBTN' className='header-btn'>Learn More</button>
                        </Link>
                        <div className="scroll-arrow header-content_descr">
                            <Link to={'CUS'} smooth={true} duration={500} offset={80} spy={true} className='header-content_scroll'>
                                <img src={arrow} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="header-img">
                        <img src={spaceHelmet} alt="Astronaut-helm" className='header-content_img'/>
                    </div>
                    <img src={spaceHelmet} alt="mobile-helmet" className='mobile-img'/>
                </div>
            </div>
                
        </header>
    );
};

export default Header;