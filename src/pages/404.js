import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorContent from '../components/Error';
import ScrollToTop from '../components/ScrollTop';

import footerLogo from '../assets/images/logos/footer-logo.png';

const ErrorPage = () => {

    return (
        <>
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

