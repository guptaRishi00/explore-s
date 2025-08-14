import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../../data/Services.json';

const DetailedOfferingsSection = () => {
    const { detailedOfferings } = servicesData;

    return (
        <div className="detailed-offerings__area pt---100 pb---120 graybg-home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center mb---50">
                        <div className="section-title wow animate__fadeInUp" data-wow-duration="0.3s">
                            <h2 className="title">Detailed <span style={{color: '#3270FC'}}>Offerings</span></h2>
                            <div className="title-line"></div>
                            <p className="subtitle">Comprehensive support for all your academic research needs</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {detailedOfferings.map((offering, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb---30 wow animate__fadeInUp" data-wow-duration={`${0.3 + (index * 0.1)}s`}>
                            <div className="offering-card">
                                <div className="offering-image">
                                    <img src={offering.image} alt={offering.title} />
                                    <div className="offering-overlay">
                                        <div className="overlay-content">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 12l2 2 4-4"></path>
                                                <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"></path>
                                                <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"></path>
                                                <path d="M12 3c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="offering-content">
                                    <h4 className="offering-title">{offering.title}</h4>
                                    <p className="offering-description">{offering.description}</p>
                                    <div className="offering-action">
                                        <Link to={`/service/${offering.id}`} className="view-details-btn">
                                            View Details
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DetailedOfferingsSection;
