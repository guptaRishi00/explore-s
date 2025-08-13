import React from 'react';
import domainData from '../../data/Domains.json';

const DomainsSection = () => {
    const { domains } = domainData;

    return (
        <div className="domains__area pt---100 pb---120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center mb---50">
                        <div className="section-title wow animate__fadeInUp" data-wow-duration="0.3s">
                            <h2 className="title">Specialized <span style={{color: '#3270FC'}}>Fields</span></h2>
                            <div className="title-line"></div>
                            <p className="subtitle">Expert assistance across diverse academic disciplines</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {domains.map((domain, index) => (
                        <div key={index} className="col-lg-6 col-md-6 mb---30 wow animate__fadeInUp" data-wow-duration={`${0.3 + (index * 0.1)}s`}>
                            <div className="domain-card">
                                <div className="domain-icon">
                                    <div className="icon-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="domain-content">
                                    <h3 className="domain-title">{domain.title}</h3>
                                    <p className="domain-description">{domain.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DomainsSection;
