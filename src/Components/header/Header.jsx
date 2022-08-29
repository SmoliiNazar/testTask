import React, { useState } from 'react';
import { Link } from 'react-scroll';

import sfLogo from './images/sf.png';
import spaceHelmet from './images/space-helmetf2.png';
import arrow from './images/arrow.png';

import './header.scss';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <header id='HEAD' className='Header'>
            <div className="container">
                
                <div className="mobile-wrapper">
                    <img src={sfLogo} alt="company-logo" className='header-logo active'/>
                    <div className="hamburger" onClick={() => setMenuActive(true)}>
                        <span className='up'></span>
                        <span className="long"></span>
                        <span className='down'></span>
                    </div>
                </div>
                
                <nav>
                    <ul>
                        <img src={sfLogo} alt="company-logo"/>
                        
                        <li className='header-links'>
                            <Link to={'#'} smooth={true} duration={500} spy={true}>Home</Link>
                        </li>
                        
                        <li className='header-links'>
                            <Link to={'#'} smooth={true} duration={500} spy={true}>About Us</Link>
                        </li>
                        
                        <li className='header-links'>
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
                

            {/* Mobile burger */}
            <div className={menuActive ? "menu active" : "menu"}>
                <div className="menu-wrapper">
                    <img src={sfLogo} alt="company-logo" className='menu-wrapper_logo'/>
                    <div className="menu-wrapper_close" onClick={() => setMenuActive(false)}>
                        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="black"/>
                        </svg>
                    </div>
                </div>
                <nav className='active'>
                    <ul className='menu-list'>
                            <li className='header-links'>
                                <Link to={'#'} smooth={true} duration={500} spy={true} onClick={() => setMenuActive(false)}>Home</Link>
                            </li>
                            
                            <li className='header-links'>
                                <Link to={'#'} smooth={true} duration={500} spy={true} onClick={() => setMenuActive(false)}>About Us</Link>
                            </li>
                            
                            <li className='header-links'>
                                <Link to={'#'} smooth={true} duration={500} spy={true} onClick={() => setMenuActive(false)}>What We Do</Link>
                            </li>

                            <li className='header-links'>
                                <Link to={'CUS'} smooth={true} duration={500} offset={80} spy={true } onClick={() => setMenuActive(false)}>Contact Us</Link>
                            </li>

                            <span>Services</span>
                        
                            <li className='header-links'>
                                <Link to={'#'} smooth={true} duration={500} spy={true} onClick={() => setMenuActive(false)}>Training and Implementation</Link>
                            </li>
                            
                            <li className='header-links'>
                                <Link to={'#'} smooth={true} duration={500} spy={true} onClick={() => setMenuActive(false)}>Cyber Consultants</Link>
                            </li>
                            
                            <li className='header-links'>
                                <Link to={'#'} smooth={true} duration={500} spy={true} onClick={() => setMenuActive(false)}>Consultancy and brand protection</Link>
                            </li>

                            <li className='header-links'>
                                <Link to={'#'} smooth={true} duration={500} spy={true} onClick={() => setMenuActive(false)}>Software</Link>
                            </li>
                        </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;