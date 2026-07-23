import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PayNowMain from './PayNowMain';
import Seo from '../../components/Seo';

const PayNow = () => {
    return (
        <>
            <Seo
                title="Pay Now | Explore S Research Solutions"
                description="Securely pay for your research, thesis, dissertation, or academic writing service with Explore S Research Solutions."
                path="/paynow"
            />
            <Header />
            <PayNowMain />
            <Footer />
        </>
    );
};

export default PayNow;
