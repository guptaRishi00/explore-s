import React from 'react';

const GPayModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="pn-modal-overlay" onClick={onClose}>
            <div className="pn-modal" onClick={(e) => e.stopPropagation()}>
                <div className="pn-modal__header">
                    <h3 className="pn-modal__title">G Pay UPI Scanner</h3>
                    <button className="pn-modal__close" onClick={onClose} aria-label="Close dialog">
                        <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <div className="pn-modal__body pn-modal__body--center">
                    <img
                        src="/scanner.jpg"
                        alt="G Pay UPI Scanner"
                        className="pn-gpay__scanner"
                    />
                    <div className="pn-gpay__upi">
                        <span className="pn-gpay__upi-label">UPI ID</span>
                        <span className="pn-gpay__upi-id">exploressolutions@idfcbank</span>
                    </div>
                </div>

                <div className="pn-modal__footer">
                    <button className="es-btn es-btn--primary" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GPayModal;
