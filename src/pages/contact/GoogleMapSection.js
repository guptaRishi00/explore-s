import React from 'react';

const GoogleMapSection = () => {
    return (
        <div className="map-section">
            <div className="map-container wow animate__fadeInLeft" data-wow-duration="0.5s">
                <div className="map-wrapper">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.0703!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM0LjIiTiA3N8KwMDQnMTMuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Explore S Research Solutions Location"
                    ></iframe>
                </div>
                <div className="map-overlay">
                    <div className="overlay-content">
                        <div className="location-marker">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div className="location-info">
                            <h4>Explore S Research Solutions</h4>
                            <p>Sector 44, Gurgaon, Haryana</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GoogleMapSection;
