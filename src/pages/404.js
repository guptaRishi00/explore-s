import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorContent from '../components/Error';
import ScrollToTop from '../components/ScrollTop';
import Seo from '../components/Seo';

import footerLogo from '../assets/logo.png';

const ErrorPage = () => {

    return (
        <>
            <Seo
                title="Page Not Found | Explore S Research Solutions"
                description="The page you are looking for could not be found. Return to Explore S Research Solutions for PhD research, thesis, and academic writing services."
                noindex={true}
            />
            <Header
                parentMenu='home'
                topbarEnable='enable'
            />

            <div className="react-wrapper">
                <div className="react-wrapper-inner">
                    
                    <ErrorContent />

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

export default ErrorPage;

