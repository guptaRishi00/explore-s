import React, { useLayoutEffect, useRef } from 'react';
import { fadeUp } from '../../utils/animations';

const processSteps = [
    {
        number: '01',
        title: 'Select Your Payment Method',
        description: 'Choose from our secure payment options',
    },
    {
        number: '02',
        title: 'Enter Payment Details',
        description: 'Provide your payment information securely',
    },
    {
        number: '03',
        title: 'Confirm & Pay',
        description: 'Review and complete your transaction',
    },
];

const PaymentProcess = () => {
    const ref = useRef(null);

    useLayoutEffect(() => {
        // Guard: ScrollTrigger needs window.matchMedia — skip in tests / SSR
        if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
        const ctx = fadeUp(ref.current, '.pn-process__anim');
        return () => ctx?.revert?.();
    }, []);

    return (
        <section className="es-section pn-process" ref={ref}>
            <div className="container">
                <div className="pn-process__head">
                    <span className="es-eyebrow pn-process__anim">How It Works</span>
                    <h2 className="es-h2 pn-process__anim">Simple Steps to Complete Your Payment</h2>
                </div>

                <ol className="pn-process__steps">
                    {processSteps.map((step) => (
                        <li key={step.number} className="pn-process__step pn-process__anim">
                            <div className="pn-process__badge" aria-hidden="true">{step.number}</div>
                            <h3 className="pn-process__step-title">{step.title}</h3>
                            <p className="pn-process__step-desc">{step.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default PaymentProcess;
