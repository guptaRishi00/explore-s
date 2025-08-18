import React from 'react';

const PaymentProcess = ({ selectedMethod }) => {
    const processSteps = [
        {
            number: "01",
            title: "Select Your Payment Method",
            description: "Choose from our secure payment options"
        },
        {
            number: "02",
            title: "Enter Payment Details",
            description: "Provide your payment information securely"
        },
        {
            number: "03",
            title: "Confirm & Pay",
            description: "Review and complete your transaction"
        }
    ];

    return (
        <section className="payment-process-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="process-content">
                            <h2 className="section-title">Choose Your Preferred Payment Method</h2>
                            <p className="section-description">
                                We offer multiple payment methods for your convenience:
                            </p>
                            
                            <div className="process-steps">
                                {processSteps.map((step, index) => (
                                    <div key={index} className="process-step">
                                        <div className="step-number">{step.number}</div>
                                        <div className="step-content">
                                            <h3 className="step-title">{step.title}</h3>
                                            <p className="step-description">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="process-illustration">
                            <div className="illustration-container">
                                <img 
                                    src="/payment.jpg" 
                                    alt="Payment Process Illustration" 
                                    className="payment-illustration"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentProcess;
