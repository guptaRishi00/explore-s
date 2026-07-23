import React, { useState } from 'react';
import HeroBanner from './HeroBanner';
import PaymentMethods from './PaymentMethods';
import PaymentProcess from './PaymentProcess';

const PayNowMain = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    const handlePaymentMethodSelect = (method) => {
        setSelectedPaymentMethod(method);
    };

    return (
        <main className="paynow-page">
            <HeroBanner />
            <PaymentMethods
                selectedMethod={selectedPaymentMethod}
                onMethodSelect={handlePaymentMethodSelect}
            />
            <PaymentProcess selectedMethod={selectedPaymentMethod} />
        </main>
    );
};

export default PayNowMain;
