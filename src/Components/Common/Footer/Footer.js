import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer_top">
                <Container>
                    <Row>
                        <Col xl={4} md={6} lg={4}>
                            <div className="footer_widget">
                                <div className="footer_logo">
                                    <a href="#">
                                    </a>
                                </div>
                                <p>
                                    we are the best place to go when you’re looking for delicious mouthwatering burgers and hotdogs ! our specialty is the flavors starting from the north to the south ! and west to the east !
                                </p>
                                <div className="socail_links">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faFacebookSquare} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faLinkedin} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </Col>
                        <Col md={6} lg={3} xl={{ span: 2, offset: 1 }}>
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Burger Types
                                </h3>
                                <ul>
                                    <li><a href="#">Beefy Burgers</a></li>
                                    <li><a href="#">Elk Burgers</a></li>
                                    <li><a href="#">Portobello Burgers</a></li>
                                    <li><a href="#">Turkey Burgers</a></li>
                                    <li><a href="#">Veggie Burgers</a></li>
                                </ul>

                            </div>
                        </Col>
                        <Col xl={2} md={6} lg={2}>
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Useful Links
                                </h3>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#"> Contact</a></li>
                                    <li><a href="#"> Services</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={3} md={6} lg={3}>
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Address
                                </h3>
                                <p>
                                    Ruhitpur Purba, Keranigonj, Dhaka <br />
                                    +88 01911 120 583 <br />
                                    contact@me.hasanfardous.com
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="copy-right_text">
                <Container>
                    <div className="footer_border"></div>
                    <Row>
                        <Col xl={12}>
                            <p className="copy_right text-center">
                                Copyright &copy;2021 All rights reserved | This template is made by <a href="https://me.hasanfardous.com/">Hasanfardous</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;