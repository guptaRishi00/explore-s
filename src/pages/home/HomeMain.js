import React from 'react';
import ScrollToTop from '../../components/ScrollTop';
import HeroSection from './sections/HeroSection';
import CounterBar from './sections/CounterBar';
import AboutPillars from './sections/AboutPillars';
import CommunitySection from './sections/CommunitySection';
import BootcampSection from './sections/BootcampSection';
import ServicesSection from './sections/ServicesSection';
import TransformationsSection from './sections/TransformationsSection';
import ProcessSection from './sections/ProcessSection';
import YouTubeSection from './sections/YouTubeSection';
import ExpertsSection from './sections/ExpertsSection';
import EventsSection from './sections/EventsSection';
import VideoTestimonials from './sections/VideoTestimonials';
import GallerySection from './sections/GallerySection';
import NewsroomSection from './sections/NewsroomSection';
import GlobalPresenceSection from './sections/GlobalPresenceSection';
import BlogSection from './sections/BlogSection';

const HomeMain = () => {
	return (
		<div className="react-wrapper">
			<div className="react-wrapper-inner es-home">
				<HeroSection />
				<CounterBar />
				<AboutPillars />
				<CommunitySection />
				<BootcampSection />
				<ServicesSection />
				<TransformationsSection />
				<ProcessSection />
				<YouTubeSection />
				<ExpertsSection />
				<EventsSection />
				<VideoTestimonials />
				<GallerySection />
				<NewsroomSection />
				<GlobalPresenceSection />
				<BlogSection />

				<ScrollToTop scrollClassName="home react__up___scroll" />
			</div>
		</div>
	);
};

export default HomeMain;
