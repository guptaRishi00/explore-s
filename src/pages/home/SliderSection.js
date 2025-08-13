import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import sliderImg1 from "../../assets/images/slider/1.jpg";
import sliderImg2 from "../../assets/images/slider/2.jpg";
import sliderImg11 from "../../assets/images/slider/11.jpg";
import sliderImg12 from "../../assets/images/slider/12.jpg";

const HomeSlider = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    const sliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        margin: 0,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            }
        ]
    };

    return (
        <>
            <div className="react-slider-part">
                <ModalVideo channel='youtube' isOpen={isOpen} videoId='e5Hc2B50Z7c' onClose={() => { openModal(); }} />
                <div className="home-sliders home2">
                    <Slider {...sliderSettings}>
                        <div className="single-slide">
                            <div className="slider-img">
                                <img className="desktop" src={sliderImg1} />
                                <img className="mobile" src={sliderImg11} alt="Slider Image 1" />
                            </div>
                            <div className="container">
                                <div className="slider-content">
                                    <div className="content-part">
                                        <span className="slider-pretitle wow animate__fadeInUp" data-wow-duration="1s">The Best-in-class Academic writing help</span>
                                        <h2 className="slider-title wow animate__fadeInUp" data-wow-duration="1s">
                                            We can write anything<br />
                                            for you.
                                        </h2>
                                        <div className="slider-btn wow animate__fadeInUp" data-wow-duration="1.2s">
                                            <Link to="/about" className="react-btn-border">Admissions</Link>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>                        
                        </div>
                        <div className="single-slide">
                            <div className="slider-img">
                                <img className="desktop" src={sliderImg2} alt="Slider Image 1" />
                                <img className="mobile" src={sliderImg12} alt="Slider Image 1" />
                            </div>
                            <div className="container">
                                <div className="slider-content">
                                    <div className="content-part">
                                        <span className="slider-pretitle wow animate__fadeInUp" data-wow-duration="3s">Ph.D Admissions</span>
                                        <h2 className="slider-title wow animate__fadeInUp" data-wow-duration="1s">
                                            Seamless & Secure admission in the<br /> top university.
                                        </h2>
                                        <div className="slider-btn wow animate__fadeInUp" data-wow-duration="1.2s">
                                            <Link to="/about" className="react-btn-border">Admissions</Link>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>                        
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default HomeSlider;