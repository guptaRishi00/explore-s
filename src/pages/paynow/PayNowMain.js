import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroBanner from './HeroBanner';
import PaymentMethods from './PaymentMethods';
import PaymentProcess from './PaymentProcess';

const PayNowMain = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    const handlePaymentMethodSelect = (method) => {
        setSelectedPaymentMethod(method);
    };

    return (
        <>
            <Header />
            <div className="paynow-page">
                <HeroBanner />
                <PaymentMethods 
                    selectedMethod={selectedPaymentMethod}
                    onMethodSelect={handlePaymentMethodSelect}
                />
                <PaymentProcess selectedMethod={selectedPaymentMethod} />
            </div>
            <Footer />
        </>
    );
};

export default PayNowMain;
