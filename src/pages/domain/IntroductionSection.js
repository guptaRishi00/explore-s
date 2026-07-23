import React, { useRef, useLayoutEffect } from 'react';
import domainData from '../../data/Domains.json';
import { fadeUp } from '../../utils/animations';

const IntroductionSection = () => {
    const { introduction } = domainData;
    const rootRef = useRef(null);

    useLayoutEffect(() => {
        // Guard: ScrollTrigger needs window.matchMedia — skip in tests / SSR
        if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
        const ctx = fadeUp(rootRef.current, '[data-domain-intro-rise]', { stagger: 0.12 });
        return () => ctx?.revert?.();
    }, []);

    return (
        <section
            className="es-section domain-page__hero"
            ref={rootRef}
            aria-label="Domain introduction"
        >
            <div className="domain-page__hero-blob" aria-hidden="true"></div>
            <div className="container">
                <div className="domain-page__hero-inner">
                    <span className="es-eyebrow" data-domain-intro-rise>
                        Specialized Fields
                    </span>
                    <h1 className="domain-page__hero-h1" data-domain-intro-rise>
                        Our Research <span className="domain-page__accent">Domains</span>
                    </h1>
                    <p className="domain-page__lead" data-domain-intro-rise>
                        {introduction}
                    </p>
                    <div className="domain-page__chips" data-domain-intro-rise>
                        <span className="domain-page__chip">
                            <span className="domain-page__chip-dot" aria-hidden="true"></span>
                            7 Disciplines
                        </span>
                        <span className="domain-page__chip">
                            <span className="domain-page__chip-dot" aria-hidden="true"></span>
                            PhD-level Experts
                        </span>
                        <span className="domain-page__chip">
                            <span className="domain-page__chip-dot" aria-hidden="true"></span>
                            Tailored Support
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;
