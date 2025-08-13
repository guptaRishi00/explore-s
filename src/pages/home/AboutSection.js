import { Link } from 'react-router-dom';

// Image
import aboutImg from '../../assets/images/about/ab.png';
import aboutBadge from '../../assets/images/about/badge.png';

const About = () => {

    return (
        <div className="about__area about__area_one p-relative pt---10 pb---120">
            <div className="container">                        
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about__image">
                            <img src={aboutImg} alt="About" />
                            <img className="react__shape__ab" src={aboutBadge} alt="Shape Image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about__content">
                            <h2 className="about__title wow animate__fadeInUp" data-wow-duration="0.3s">Welcome to <br/> <em>Explore S Research Solutions</em></h2>
                            <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s">Welcome to Explore S Research Solutions, your trusted partner in academic excellence. We are dedicated to providing top-tier research writing assistance to help you achieve your academic goals.</p>
                            <p className="about__paragraph2 wow animate__fadeInUp" data-wow-duration="0.7s"> Have questions?  <Link to="#"> Get Free Guide </Link></p>
                            <p className="wow animate__fadeInUp" data-wow-duration="0.6s">Our team of seasoned experts brings years of experience across a broad spectrum of disciplines, ensuring that you receive personalized, high-quality support tailored to your unique needs. <br/>is the integral development of a person.</p>
                            <ul className="wow animate__fadeInUp" data-wow-duration="0.9s">
                                <li><Link to="/about" className="more-about"> Read More </Link></li>
                                <li className="last-li">
                                    <em>Get Support</em>
                                    <Link to="mailto:support@exploresresearchsolutions.in">support@exploresresearchsolutions.in</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;