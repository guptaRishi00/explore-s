import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import DomainMain from './DomainMain';
import Seo from '../../components/Seo';

import footerLogo from '../../assets/logo.png';

const Domain = () => {

    return (
        <>
            <Seo
                title="Research Domains We Cover | Explore S Research Solutions"
                description="Explore S Research Solutions covers a wide range of research domains including engineering, management, social sciences, life sciences, and more for PhD and academic research."
                path="/domain"
                keywords="research domains, PhD research areas, engineering research, management research, social sciences, life sciences, academic domains India"
            />
            <Header
                parentMenu='home'
                topbarEnable='enable'
            />

            <div className="react-wrapper">
                <div className="react-wrapper-inner">
                    

                    <DomainMain />

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

export default Domain;
