import React from 'react';
import HomeMain from './HomeMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Seo from '../../components/Seo';

import footerLogo from '../../assets/logo.png';

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Explore S Research Solutions",
  "url": "https://www.exploresresearchsolutions.in",
  "logo": "https://www.exploresresearchsolutions.in/logo.png",
  "image": "https://www.exploresresearchsolutions.in/logo.png",
  "telephone": "+91-9289441168",
  "email": "support@exploresresearchsolutions.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Second Floor Plot Number 4, Minarch Tower, Sector 44",
    "addressLocality": "Gurgaon",
    "addressRegion": "Haryana",
    "addressCountry": "IN"
  },
  "description": "Expert PhD research assistance, thesis & dissertation writing, research paper writing & publication, data analysis, and academic guidance.",
  "areaServed": "IN",
  // Client to fill in social profile URLs here:
  "sameAs": []
};

const HomePage = () => {
    return (
        <>
            <Seo
                title="Explore S Research Solutions | PhD Research, Thesis, Dissertation & Publication Support"
                description="Expert PhD research assistance, thesis & dissertation writing, research paper writing, data analysis (SPSS/R), publication support, and academic guidance in India."
                path="/"
                keywords="PhD research assistance, thesis writing services, dissertation help, research paper writing, paper publication, data analysis SPSS R, academic writing, synopsis writing, plagiarism removal, India"
                jsonLd={homeJsonLd}
            />
            <Header
                parentMenu='home'
                topbarEnable='enable'
            />
            <HomeMain />
            <Footer
                footerLogo={footerLogo}
            />
        </>
    );
}

export default HomePage;
