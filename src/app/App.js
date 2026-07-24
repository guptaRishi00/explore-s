import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Preloader from "../components/Preloader";

//Custom Components

import Home from '../pages/home';
import About from '../pages/about';
import Services from '../pages/services';
import ServiceDetails from '../pages/services/service-details';
import Domain from '../pages/domain';
import DomainDetailPage from '../pages/domain/DomainDetailPage';
import Contact from '../pages/contact';
import PayNow from '../pages/paynow';
import PrivacyPolicy from '../pages/legal/PrivacyPolicy';
import Terms from '../pages/legal/Terms';
import Disclaimer from '../pages/legal/Disclaimer';
import RefundPolicy from '../pages/legal/RefundPolicy';
import AcademicIntegrity from '../pages/legal/AcademicIntegrity';
import BecomeAPartner from '../pages/become-a-partner';
import Career from '../pages/career';
import Blogs from '../pages/blogs';
import BlogDetail from '../pages/blogs/BlogDetail';
import Error from '../pages/404';
import LoadTop from '../components/ScrollTop/LoadTop'
import ScrollToHash from '../components/ScrollTop/ScrollToHash'
import WhatsAppButton from '../components/WhatsAppButton';
import LiveChat from '../components/LiveChat';
import BookMeetingModal from '../components/BookMeetingModal';


const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate data loading delay
        setTimeout(() => {
        setIsLoading(false);
        }, 500);
    }, []);

    return (
        <div className='App'>
            {isLoading ?
                <Preloader /> : ''
            }
            <>
                <LoadTop />
                <ScrollToHash />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/service/:serviceId" element={<ServiceDetails />} />
                    <Route path="/domain" element={<Domain />} />
                    <Route path="/domain/:slug" element={<DomainDetailPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/paynow" element={<PayNow />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/refund-policy" element={<RefundPolicy />} />
                    <Route path="/academic-integrity" element={<AcademicIntegrity />} />
                    <Route path="/become-a-partner" element={<BecomeAPartner />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blogs/:slug" element={<BlogDetail />} />
                    <Route path='*' element={<Error />} />
                </Routes>
                <WhatsAppButton />
                <LiveChat />
                <BookMeetingModal />
            </>
        </div>
    );
}

export default App;
