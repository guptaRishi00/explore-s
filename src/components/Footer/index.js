
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

const Footer = (props) => {
    const { footerLogo, footerClass } = props;
    return (
        <>
            <footer id="react-footer" className={footerClass ? footerClass : 'react-footer home-main'}>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 md-mb-30">
                                <div className="footer-widget footer-widget-1">
                                    <div className="footer-logo white">
                                        <Link to="/" className="logo-text"><img src={Logo} alt="Footer Logo" /></Link>
                                    </div>
                                    <h5 className="footer-subtitle">Explore S Research Solutions is your trusted partner<br/>
                                    for academic excellence. We specialize in research<br/> papers, thesis writing, and academic guidance.</h5>
                                    <ul className="footer-address">
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.79 19.79 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><a href="tel:+91-9289441168"> +91-9289441168 </a></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg><a href="mailto:support@exploresresearchsolutions.in"> support@exploresresearchsolutions.in </a></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>Second Floor Plot Number 4, Minarch Tower, Sector 44, Gurgaon, Haryana</span></li>
                                    </ul>                               
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 md-mb-30">
                                <div className="footer-widget footer-widget-2">
                                    <h3 className="footer-title">Our Services</h3>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/about">About Us</Link></li>
                                            <li><Link to="/services">Research Papers</Link></li>
                                            <li><Link to="/services">Thesis Writing</Link></li>
                                            <li><Link to="/services">Dissertation Help</Link></li>
                                            <li><Link to="/services">Academic Guidance</Link></li>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 md-mb-30">
                                <div className="footer-widget footer-widget-3">
                                    <h3 className="footer-title">Quick Links</h3>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/services">All Services</Link></li>
                                            <li><Link to="/domain">Our Domains</Link></li>
                                            <li><Link to="/blog">Academic Blog</Link></li>
                                            <li><Link to="/course">Research Papers</Link></li>
                                            <li><Link to="/event">Academic Events</Link></li>
                                            <li><Link to="/instructor">Our Team</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget footer-widget-4">
                                    <h3 className="footer-title">Stay Updated</h3> 
                                    <div className="footer3__form">
                                        <p>Get the latest academic insights<br />and research tips delivered to your inbox</p>
                                        <form action="#">
                                            <input type="email" required placeholder="Enter your email" />
                                            <button className="footer3__form-1">
                                                <i className="arrow_right"></i>
                                            </button>
                                        </form>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">  
                    <div className="container">                  
                        <div className="react-copy-left">© 2025 <Link to="/">Explore S Research Solutions.</Link> All Rights Reserved</div>
                        <div className="react-copy-right">
                            <ul className="social-links">
                                <li className="follow">Follow us</li>
                                <li><Link to="#"><span aria-hidden="true" className="social_facebook"></span></Link></li>
                                <li><Link to="#"><span aria-hidden="true" className="social_twitter"></span></Link></li>
                                <li><Link to="#"><span aria-hidden="true" className="social_linkedin"></span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;