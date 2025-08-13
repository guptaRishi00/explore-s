import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import ScrollToTop from '../../components/ScrollTop';
import EventSidebarMain from './EventSidebarMain';

import footerLogo from '../../assets/images/logos/footer-logo.png';

const EventSidebar = () => {

    return (
        <>
            <Header
                parentMenu='home'
                topbarEnable='enable'
            />

            <div className="react-wrapper">
                <div className="react-wrapper-inner">
                    
                    <Breadcrumb pageTitle="Event Sidebar" />

                    <EventSidebarMain />

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

export default EventSidebar;