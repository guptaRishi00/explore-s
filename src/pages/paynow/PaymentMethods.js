import React, { useState, useLayoutEffect, useRef } from 'react';
import BankTransferModal from './BankTransferModal';
import GPayModal from './GPayModal';
import RazorpayPayCard from './RazorpayPayCard';
import { fadeUp } from '../../utils/animations';

const ICONS = {
    card: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="5" width="20" height="14" rx="3" />
            <line x1="2" y1="10" x2="22" y2="10" />
            <line x1="6" y1="15" x2="10" y2="15" />
        </svg>
    ),
    bank: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 9l9-6 9 6" />
            <line x1="4" y1="21" x2="20" y2="21" />
            <line x1="6" y1="12" x2="6" y2="18" />
            <line x1="10" y1="12" x2="10" y2="18" />
            <line x1="14" y1="12" x2="14" y2="18" />
            <line x1="18" y1="12" x2="18" y2="18" />
        </svg>
    ),
    upi: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="6" y="2" width="12" height="20" rx="3" />
            <line x1="10" y1="18" x2="14" y2="18" />
            <path d="M10 7h4M10 10.5h4M12 7v7" />
        </svg>
    ),
};

const paymentMethods = [
    {
        id: 'debit-card',
        name: 'Debit Card',
        icon: 'card',
        description: 'Pay instantly with your debit card',
    },
    {
        id: 'credit-card',
        name: 'Credit Card',
        icon: 'card',
        description: 'Pay instantly with your credit card',
    },
    {
        id: 'bank-transfer',
        name: 'Internet Banking/ Bank Transfer',
        icon: 'bank',
        description: 'Transfer from your bank account',
    },
    {
        id: 'gpay-upi',
        name: 'G Pay UPI',
        icon: 'upi',
        description: 'Scan & pay with any UPI app',
    },
];

const PaymentMethods = ({ selectedMethod, onMethodSelect }) => {
    const [showBankModal, setShowBankModal] = useState(false);
    const [showGPayModal, setShowGPayModal] = useState(false);
    const ref = useRef(null);

    useLayoutEffect(() => {
        // Guard: ScrollTrigger needs window.matchMedia — skip in tests / SSR
        if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
        const ctx = fadeUp(ref.current, '.pn-methods__anim');
        return () => ctx?.revert?.();
    }, []);

    const activate = (method) => {
        if (method.id === 'bank-transfer') {
            setShowBankModal(true);
        } else if (method.id === 'gpay-upi') {
            setShowGPayModal(true);
        } else {
            // Card payments happen through the pay-online form below —
            // select, then bring the form into view.
            onMethodSelect(method.id);
            document
                .getElementById('pn-pay-online')
                ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <section className="es-section pn-methods" ref={ref}>
            <div className="container">
                <div className="pn-methods__head">
                    <span className="es-eyebrow pn-methods__anim">Secure Payments</span>
                    <h2 className="es-h2 pn-methods__anim">Choose Your Preferred Payment Method</h2>
                    <p className="pn-methods__lead pn-methods__anim">
                        We offer multiple payment methods for your convenience.
                    </p>
                </div>

                <div className="pn-methods__grid">
                    {paymentMethods.map((method) => (
                        <div
                            key={method.id}
                            className={`pn-methods__card pn-methods__anim${selectedMethod === method.id ? ' pn-methods__card--selected' : ''}`}
                            onClick={() => activate(method)}
                            role="button"
                            tabIndex={0}
                            aria-pressed={selectedMethod === method.id}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    activate(method);
                                }
                            }}
                        >
                            <span className="pn-methods__chip" aria-hidden="true">{ICONS[method.icon]}</span>
                            <h3 className="pn-methods__name">{method.name}</h3>
                            <p className="pn-methods__desc">{method.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <RazorpayPayCard />

            <BankTransferModal
                isOpen={showBankModal}
                onClose={() => setShowBankModal(false)}
            />
            <GPayModal
                isOpen={showGPayModal}
                onClose={() => setShowGPayModal(false)}
            />
        </section>
    );
};

export default PaymentMethods;
