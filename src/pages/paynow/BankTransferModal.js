import React from 'react';

const BankTransferModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="pn-modal-overlay" onClick={onClose}>
            <div className="pn-modal" onClick={(e) => e.stopPropagation()}>
                <div className="pn-modal__header">
                    <h3 className="pn-modal__title">Bank Transfer Details</h3>
                    <button className="pn-modal__close" onClick={onClose} aria-label="Close dialog">
                        <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <div className="pn-modal__body">
                    <dl className="pn-bank">
                        <div className="pn-bank__row">
                            <dt className="pn-bank__label">Bank Name</dt>
                            <dd className="pn-bank__value">IDFC FIRST Bank</dd>
                        </div>
                        <div className="pn-bank__row">
                            <dt className="pn-bank__label">Account Number</dt>
                            <dd className="pn-bank__value">10245868940</dd>
                        </div>
                        <div className="pn-bank__row">
                            <dt className="pn-bank__label">IFSC Code</dt>
                            <dd className="pn-bank__value">IDFB0022462</dd>
                        </div>
                        <div className="pn-bank__row">
                            <dt className="pn-bank__label">Account Holder</dt>
                            <dd className="pn-bank__value">Explore S solutions</dd>
                        </div>
                        <div className="pn-bank__row">
                            <dt className="pn-bank__label">Company Customer ID</dt>
                            <dd className="pn-bank__value">6685722401</dd>
                        </div>
                    </dl>
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

export default BankTransferModal;
