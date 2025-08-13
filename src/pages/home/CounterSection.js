import React, { useState } from "react";
import SectionTitle from '../../components/SectionTitle';

const HowItWorks = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);

    const accordionItems = [
        {
            title: 'Consultation',
            content: 'Contact us with your thesis requirements and academic goals.',
            icon: '📋'
        },
        {
            title: 'Writer Assignment',
            content: 'We match you with a suitable writer based on your field of study and topic.',
            icon: '👨‍🎓'
        },
        {
            title: 'Progress Updates',
            content: 'Stay informed throughout the writing process with regular progress updates and opportunities for feedback.',
            icon: '📊'
        },
        {
            title: 'Final Delivery',
            content: 'Receive your completed thesis with comprehensive support and revision options.',
            icon: '✅'
        }
    ];

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? -1 : index);
    };

    return (
        <div className="how-it-works__area pb---110 pt---100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-8 col-xl-8 col-lg-10 col-md-12">
                        <SectionTitle 
                            Title="HOW IT WORKS?" 
                            subTitle="Don't let thesis writing stress you out. Partner with us and embark on a journey towards academic excellence. Contact us today to learn more about our thesis writing services and take the first step towards achieving your academic goals."
                        />
                    </div>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-xxl-8 col-xl-8 col-lg-10 col-md-12">
                        <div className="accordion-container">
                            {accordionItems.map((item, index) => (
                                <div 
                                    key={index} 
                                    className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
                                >
                                    <button
                                        className="accordion-header"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={activeAccordion === index}
                                    >
                                        <div className="accordion-icon">
                                            {item.icon}
                                        </div>
                                        <span className="accordion-title">{item.title}</span>
                                        <div className="accordion-arrow">
                                            <svg 
                                                width="24" 
                                                height="24" 
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                strokeWidth="2" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="6,9 12,15 18,9"></polyline>
                                            </svg>
                                        </div>
                                    </button>
                                    <div 
                                        className={`accordion-content ${activeAccordion === index ? 'show' : ''}`}
                                    >
                                        <div className="accordion-body">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;