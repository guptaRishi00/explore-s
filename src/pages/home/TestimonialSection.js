import React from 'react';
import Slider from "react-slick";

import SectionTitle from '../../components/SectionTitle'
import SingleTestimonial from '../../components/Testimonial/SingleTestimonial';

import testiImg from '../../assets/images/testimonial/testimonial.png';
import comaImg from '../../assets/images/testimonial/coma.png';

const Testimonial = () => {

    const testimonialSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                }
            },
            {

                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    // New testimonial data
    const testimonials = [
        {
            description: "Working with ExploreS Research solutions was a game-changer for my academic career. Their writers meticulously crafted my research paper, delivering it well before the deadline. The quality surpassed my expectations, and the customer support was exceptional.",
            name: "Sarita Singh",
            city: "Delhi",
            star: "5",
            image: "https://images.unsplash.com/photo-1754634026426-4bc23801b618?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            description: "I stumbled upon ExploreS Research solutions when I needed urgent help with my thesis. Their team not only met my tight deadline but also produced a thesis that impressed my professor. I highly recommend their services for anyone needing reliable academic assistance.",
            name: "Prashant Kumar H C",
            city: "Karnataka",
            star: "5",
            image: "https://images.unsplash.com/photo-1754634026426-4bc23801b618?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            description: "Thanks to ExploreS Research solutions was able to submit a research proposal that got approved on the first submission. Their writers are experts in their fields and provided valuable insights that elevated my work. I'm grateful for their expertise and prompt service.",
            name: "Divya Kumari D.C",
            city: "Bangalore",
            star: "5",
            image: "https://images.unsplash.com/photo-1754634026426-4bc23801b618?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            description: "Choosing ExploreS Research solutions for my dissertation was the best decision I made. They not only helped me navigate the complexities of research methodology but also provided constant support and guidance throughout the writing process.",
            name: "Aditya pal",
            city: "Chennai",
            star: "5",
            image: "https://images.unsplash.com/photo-1754634026426-4bc23801b618?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            description: "Moreover, I appreciated their commitment to deadlines and responsiveness. Throughout the entire journey, they were prompt in their communication and always available to address any queries or concerns I had. This level of professionalism instilled confidence in me and alleviated much of the stress associated with PhD research.",
            name: "Ashutosh",
            city: "Gujarat",
            star: "5",
            image: "https://images.unsplash.com/photo-1754634026426-4bc23801b618?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    return (
        <>
            <div className="react-clients react-clientso home-testimonial pt---90 pb---120">
                <div className="container">
                    <SectionTitle Title="Testimonials" />
                    <div className="client-slider wow animate__fadeInUp" data-wow-duration="0.3s">
                        <Slider {...testimonialSettings}>
                            {testimonials.map((testimonial, index) => (
                                <SingleTestimonial
                                    key={index}
                                    itemClass="single-client"
                                    itemImg={testimonial.image}
                                    Title={testimonial.name}
                                    Designation={testimonial.city}
                                    Desc={testimonial.description}
                                    ratingCount={testimonial.star}
                                    reviewCount="5"
                                    comaImg={comaImg}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial