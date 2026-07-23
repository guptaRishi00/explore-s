import React, { useState } from 'react';
import { openRazorpayCheckout } from '../../utils/razorpay';

const RazorpayPayCard = () => {
    const [amount, setAmount] = useState(10000);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [busy, setBusy] = useState(false);

    const handlePay = async () => {
        const parsed = parseFloat(amount);
        if (!parsed || parsed < 1) {
            alert('Please enter a valid amount (minimum ₹1).');
            return;
        }
        setBusy(true);
        try {
            await openRazorpayCheckout({
                amount: parsed,
                description: 'Explore S — Online Payment',
                prefill: { name, email, contact: phone },
            });
        } finally {
            setBusy(false);
        }
    };

    const presets = [1000, 5000, 10000, 25000];

    return (
        <div className="pn-rzp pn-methods__anim" id="pn-pay-online">
            <div className="pn-rzp__inner">
                <div className="pn-rzp__header">
                    <span className="pn-rzp__icon" aria-hidden="true">
                        {/* Shield + lock SVG — brand blue */}
                        <svg
                            viewBox="0 0 40 40"
                            width="40"
                            height="40"
                            fill="none"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <rect width="40" height="40" rx="10" fill="currentColor" fillOpacity="0.08" />
                            <path
                                d="M20 8l10 4v7c0 5.5-4.2 10.6-10 12C10.2 29.6 6 24.5 6 19v-7l10-4z"
                                fill="currentColor"
                                fillOpacity="0.15"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                            <rect x="15" y="18" width="10" height="8" rx="2" fill="currentColor" />
                            <path
                                d="M17 18v-2a3 3 0 116 0v2"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                    <div>
                        <h3 className="pn-rzp__title">Pay Online</h3>
                        <p className="pn-rzp__subtitle">Cards, UPI, Net Banking &amp; Wallets</p>
                    </div>
                </div>

                <div className="pn-rzp__form">
                    {/* Amount — required */}
                    <div className="pn-rzp__field pn-rzp__field--amount">
                        <label className="pn-rzp__label" htmlFor="rzp-amount">
                            Amount <span className="pn-rzp__required" aria-hidden="true">*</span>
                        </label>
                        <div className="pn-rzp__input-wrap">
                            <span className="pn-rzp__currency" aria-hidden="true">₹</span>
                            <input
                                id="rzp-amount"
                                type="number"
                                className="pn-rzp__input"
                                value={amount}
                                min={1}
                                step="1"
                                onChange={(e) => setAmount(e.target.value)}
                                aria-label="Payment amount in rupees"
                            />
                        </div>
                        <div className="pn-rzp__presets" role="group" aria-label="Quick amounts">
                            {presets.map((p) => (
                                <button
                                    key={p}
                                    type="button"
                                    className={`pn-rzp__preset${Number(amount) === p ? ' pn-rzp__preset--on' : ''}`}
                                    onClick={() => setAmount(p)}
                                >
                                    ₹{p.toLocaleString('en-IN')}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Optional prefill fields */}
                    <div className="pn-rzp__optionals">
                        <div className="pn-rzp__field">
                            <label className="pn-rzp__label" htmlFor="rzp-name">
                                Name <span className="pn-rzp__optional-tag">(optional)</span>
                            </label>
                            <input
                                id="rzp-name"
                                type="text"
                                className="pn-rzp__input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your full name"
                                autoComplete="name"
                            />
                        </div>

                        <div className="pn-rzp__field">
                            <label className="pn-rzp__label" htmlFor="rzp-email">
                                Email <span className="pn-rzp__optional-tag">(optional)</span>
                            </label>
                            <input
                                id="rzp-email"
                                type="email"
                                className="pn-rzp__input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                autoComplete="email"
                            />
                        </div>

                        <div className="pn-rzp__field">
                            <label className="pn-rzp__label" htmlFor="rzp-phone">
                                Phone <span className="pn-rzp__optional-tag">(optional)</span>
                            </label>
                            <input
                                id="rzp-phone"
                                type="tel"
                                className="pn-rzp__input"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+91 98765 43210"
                                autoComplete="tel"
                            />
                        </div>
                    </div>
                </div>

                <button
                    className="es-btn es-btn--primary pn-rzp__cta"
                    onClick={handlePay}
                    disabled={busy}
                    aria-busy={busy}
                >
                    {busy ? 'Opening Checkout…' : 'Pay Securely with Razorpay'}
                </button>

                <p className="pn-rzp__note">
                    <svg
                        viewBox="0 0 16 16"
                        width="13"
                        height="13"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                        style={{ flexShrink: 0, marginTop: 1 }}
                    >
                        <path
                            d="M8 1a7 7 0 100 14A7 7 0 008 1zm.75 10.5h-1.5v-5h1.5v5zm0-6.5h-1.5V3.5h1.5V5z"
                            fill="currentColor"
                        />
                    </svg>
                    Cards, UPI, Net Banking &amp; Wallets supported · Secured by Razorpay.
                </p>
            </div>
        </div>
    );
};

export default RazorpayPayCard;
