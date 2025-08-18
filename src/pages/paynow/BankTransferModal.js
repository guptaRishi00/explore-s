import React from 'react';

const BankTransferModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">Bank Transfer Details</h3>
                </div>
                <div className="modal-body">
                    <div className="bank-details">
                        <div className="detail-row">
                            <span className="detail-label">Bank Name:</span>
                            <span className="detail-value">HDFC</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Account Number:</span>
                            <span className="detail-value">50200103039585</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">IFSC Code:</span>
                            <span className="detail-value">HDFC0001721</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Account Holder:</span>
                            <span className="detail-value">Scholar Scribe Solutions</span>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="close-button" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BankTransferModal;
