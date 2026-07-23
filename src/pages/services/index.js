import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import ServicesMain from './ServicesMain';
import Seo from '../../components/Seo';

import footerLogo from '../../assets/logo.png';

const Services = () => {

    return (
        <>
            <Seo
                title="Research & Academic Services | Explore S Research Solutions"
                description="Comprehensive academic services: thesis & dissertation writing, research paper writing, paper publication, synopsis writing, plagiarism removal, and data analysis (SPSS/R)."
                path="/services"
                keywords="thesis writing, dissertation help, paper writing, paper publication, synopsis writing, plagiarism removal, data analysis, academic writing services India"
            />
            <Header
                parentMenu='home'
                topbarEnable='enable'
            />

            <div className="react-wrapper">
                <div className="react-wrapper-inner">
                    

                    <ServicesMain />

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

export default Services;
