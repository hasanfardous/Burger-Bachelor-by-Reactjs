import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import deliveryMan1 from '../../assets/delivery-man1.jpg';
import deliveryMan2 from '../../assets/delivery-man2.jpg';
import signature from '../../assets/signature.png';
import './About.css';

const About = () => {
    return (
        <div className="about_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="about_thumb2">
                            <div className="img_1">
                                <img src={deliveryMan1} alt="" />
                            </div>
                            <div className="img_2">
                                <img src={deliveryMan2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 offset-lg-1 col-md-6">
                        <div className="about_info">
                            <div className="section_title mb-20px">
                                <span>About Us</span>
                                <h3>Just Order! <br />
                                    We'll reach your door</h3>
                            </div>
                            <p>We are the best place to go when you’re looking for delicious mouthwatering burgers and hotdogs ! our specialty is the flavors starting from the north to the south ! and west to the east ! They are the best place to go when you’re looking for delicious mouthwatering burgers and hotdogs ! our specialty is the flavors starting from the north to the south ! and west to the east !</p>

                            <p>We are the diner where you find amazing combinations and unexpected as well ! Amazing atmosphere , endless joy ,magnificent tastes and affordable prices ! They are the diner where you find amazing combinations and unexpected as well ! Amazing atmosphere , endless joy ,magnificent tastes and affordable prices !</p>
                            <div className="img_thumb">
                                <img src={signature} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;