import React from "react";

import AboutPart from './AboutSection'
import MissionVisionSection from './MissionVisionSection'
import Testimonial from './TestimonialSection'
import Feature from './FeatureSection'
import Instructor from './InstructorSection'

const AboutMain = () => {


    return (
        <>
            <AboutPart />
            
            <MissionVisionSection />
            
            {/* <Feature /> */}
            
            {/* <Instructor /> */}

            <Testimonial />
        </>
    )
}

export default AboutMain;