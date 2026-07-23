import React, { useLayoutEffect, useRef } from 'react';
import { fadeUp } from '../../utils/animations';

const HeroBanner = () => {
    const ref = useRef(null);

    useLayoutEffect(() => {
        // Guard: ScrollTrigger needs window.matchMedia — skip in tests / SSR
        if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
        const ctx = fadeUp(ref.current, '.pn-hero__anim');
        return () => ctx?.revert?.();
    }, []);

    return (
        <section className="pn-hero" ref={ref} aria-label="Pay Now hero">
            <div className="container">
                <span className="pn-hero__eyebrow pn-hero__anim">Fast · Secure · Easy</span>
                <h1 className="pn-hero__title pn-hero__anim">
                    Pay Now — Secure Your Academic Journey
                </h1>
                <p className="pn-hero__subtitle pn-hero__anim">
                    Complete your payment hassle-free using your preferred method. Smooth, secure, and quick — so you can focus on achieving academic excellence.
                </p>
                <ul className="pn-hero__trust pn-hero__anim" role="list">
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        SSL Encrypted
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="3" y="11" width="18" height="11" rx="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        Secured by Razorpay
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Instant Confirmation
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default HeroBanner;
