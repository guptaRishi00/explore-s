import React from 'react';
import servicesData from '../../data/Services.json';

const MainServicesSection = () => {
    const { mainServices } = servicesData;

    return (
        <div className="main-services__area pt---100 pb---120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center mb---50">
                        <div className="section-title wow animate__fadeInUp" data-wow-duration="0.3s">
                            <h2 className="title">Main <span style={{color: '#3270FC'}}>Services</span></h2>
                            <div className="title-line"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {mainServices.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb---30 wow animate__fadeInUp" data-wow-duration={`${0.3 + (index * 0.2)}s`}>
                            <div className="service-card">
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                    <div className="service-overlay">
                                        <div className="overlay-content">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22,4 12,14.01 9,11.01"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainServicesSection;
