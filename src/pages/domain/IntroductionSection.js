import React from 'react';
import domainData from '../../data/Domains.json';

const IntroductionSection = () => {
    const { introduction } = domainData;

    return (
        <div className="domain-intro__area pt---120 pb---80 graybg-home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <div className="intro-content wow animate__fadeInUp" data-wow-duration="0.3s">
                            <h2 className="intro-title">
                                Our <span style={{color: '#3270FC'}}>Domains</span>
                            </h2>
                            <div className="title-line"></div>
                            <p className="intro-description">
                                {introduction}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroductionSection;
