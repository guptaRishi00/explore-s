import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import ContactMain from './ContactMain';
import Seo from '../../components/Seo';

import footerLogo from '../../assets/logo.png';

const Contact = () => {

    return (
        <>
            <Seo
                title="Contact Us | Explore S Research Solutions"
                description="Get in touch with Explore S Research Solutions for PhD research assistance, thesis writing, dissertation help, and paper publication services. Call or email us today."
                path="/contact"
                keywords="contact Explore S Research Solutions, PhD research help contact, thesis writing inquiry, research support India"
            />
            <Header
                parentMenu='home'
                topbarEnable='enable'
            />

            <div className="react-wrapper">
                <div className="react-wrapper-inner">
                    

                    <ContactMain />

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

export default Contact;

