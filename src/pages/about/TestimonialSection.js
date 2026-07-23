import React, { useRef, useLayoutEffect } from 'react';
import Slider from 'react-slick';
import { fadeUp } from '../../utils/animations';

// ── Testimonial data ──────────────────────────────────────────────────────────

const testimonials = [
  {
    description: "Working with ExploreS Research solutions was a game-changer for my academic career. Their writers meticulously crafted my research paper, delivering it well before the deadline. The quality surpassed my expectations, and the customer support was exceptional.",
    name: "Sarita Singh",
    city: "Delhi",
  },
  {
    description: "I stumbled upon ExploreS Research solutions when I needed urgent help with my thesis. Their team not only met my tight deadline but also produced a thesis that impressed my professor. I highly recommend their services for anyone needing reliable academic assistance.",
    name: "Prashant Kumar H C",
    city: "Karnataka",
  },
  {
    description: "Thanks to ExploreS Research solutions I was able to submit a research proposal that got approved on the first submission. Their writers are experts in their fields and provided valuable insights that elevated my work. I'm grateful for their expertise and prompt service.",
    name: "Divya Kumari D.C",
    city: "Bangalore",
  },
  {
    description: "Choosing ExploreS Research solutions for my dissertation was the best decision I made. They not only helped me navigate the complexities of research methodology but also provided constant support and guidance throughout the writing process.",
    name: "Aditya Pal",
    city: "Chennai",
  },
  {
    description: "Moreover, I appreciated their commitment to deadlines and responsiveness. Throughout the entire journey, they were prompt in their communication and always available to address any queries or concerns I had. This level of professionalism instilled confidence in me and alleviated much of the stress associated with PhD research.",
    name: "Ashutosh",
    city: "Gujarat",
  },
];

// ── Quote icon ────────────────────────────────────────────────────────────────

const QuoteIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 40 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="es-testimonials__icon"
    width="40"
    height="28"
  >
    <path
      d="M0 28V16.8C0 7.52 5.6 2.24 16.8 0l1.96 3.08C13.44 4.2 10.36 6.72 9.24 10.64H16.8V28H0Zm22.4 0V16.8C22.4 7.52 28 2.24 39.2 0l1.96 3.08c-5.32 1.12-8.4 3.64-9.52 7.56H39.2V28H22.4Z"
      fill="currentColor"
    />
  </svg>
);

// ── Slider settings ───────────────────────────────────────────────────────────

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
};

// ── Component ─────────────────────────────────────────────────────────────────

const Testimonial = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    // Guard: ScrollTrigger needs window.matchMedia — skip in tests / SSR
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '.es-testimonials__heading', { stagger: 0 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <section className="es-section es-testimonials" ref={rootRef} aria-label="Client Testimonials">
      <div className="container">
        <div className="es-testimonials__heading">
          <span className="es-eyebrow">What our clients say</span>
          <h2 className="es-h2">Client Testimonials</h2>
        </div>

        <Slider {...sliderSettings}>
          {testimonials.map(({ description, name, city }) => (
            <div key={name} className="es-testimonials__slide">
              <div className="es-testimonials__card">
                <QuoteIcon />
                <blockquote className="es-testimonials__quote">
                  <p>&#8220;{description}&#8221;</p>
                  <footer className="es-testimonials__author">
                    <span className="es-testimonials__name">{name}</span>
                    <span className="es-testimonials__role">{city}</span>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
