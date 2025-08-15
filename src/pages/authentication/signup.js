import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignupMain from './SignupMain';
import ScrollToTop from '../../components/ScrollTop';

import footerLogo from '../../assets/logo.png';

const Signup = () => {

    return (
        <>
            <Header
                parentMenu='home'
                topbarEnable='enable'
            />

            <div className="react-wrapper">
                <div className="react-wrapper-inner">
                    
                    <SignupMain />

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

export default Signup;

