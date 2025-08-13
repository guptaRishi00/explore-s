import React from 'react';
import { Link } from 'react-router-dom';

import aboutImg from '../../assets/images/about/ab.png'
import shapeImg from '../../assets/images/about/badge.png'

const AboutPart = () => {

    return (
        <div className="about__area about__area_one p-relative pt---100 pb---120">
            <div className="container"> 
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about__image wow animate__fadeInUp" data-wow-duration="0.3s">
                            <img src={aboutImg} alt="About" />
                            <img className="react__shape__ab" src={shapeImg} alt="Shape Image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about__content">
                            <h2 className="about__title wow animate__fadeInUp" data-wow-duration="0.3s">Welcome to <br/> <em>Explore S Research Solutions</em></h2>
                            <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s">Discover the difference with personalized, expert research assistance at Explore S Research Solutions.</p>
                            <p className="about__paragraph2 wow animate__fadeInUp" data-wow-duration="0.7s"> Have questions?  <Link to="/contact"> Get Free Consultation </Link></p>
                            <p className="wow animate__fadeInUp" data-wow-duration="0.9s">Welcome to Explore S Research Solutions, your trusted partner in academic excellence. We are dedicated to providing top-tier research writing assistance to help you achieve your academic goals. Our team of seasoned experts brings years of experience across a broad spectrum of disciplines, ensuring that you receive personalized, high-quality support tailored to your unique needs.</p>
                            <ul>
                                <li><Link to="/contact" className="more-about wow animate__fadeInUp" data-wow-duration="1.2s"> Contact Us <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></li>
                                <li className="last-li wow animate__fadeInUp" data-wow-duration="1.3s">
                                    <em>Get Support</em>
                                    <a href="mailto:support@exploresresearchsolutions.in">support@exploresresearchsolutions.in</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPart;