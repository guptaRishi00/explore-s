import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import AboutMain from './AboutMain';
import Seo from '../../components/Seo';

import footerLogo from '../../assets/logo.png';

const About = () => {

    return (
        <>
            <Seo
                title="About Us | Explore S Research Solutions"
                description="Learn about Explore S Research Solutions — a team of PhD experts and academic professionals dedicated to delivering quality research, thesis, and publication support across India."
                path="/about"
                keywords="about Explore S Research Solutions, PhD experts, academic writing team, research consultants India"
            />
            <Header
                parentMenu='home'
                topbarEnable='enable'
            />

            <div className="react-wrapper">
                <div className="react-wrapper-inner">
                    
                    <AboutMain />

                    {/* scrolltop-start */}
                    <ScrollToTop
                        scrollClassName="react__up___scroll"
                    />
                    {/* scrolltop-end */}
                </div>
            </div>

            <Footer
                footerLogo={footerLogo}
            />
        </>
    );
}

export default About;