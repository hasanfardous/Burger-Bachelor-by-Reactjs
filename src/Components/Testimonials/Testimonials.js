import { Carousel, Container, Row, Col } from 'react-bootstrap';
import testimonial1 from '../../assets/testimonial1.png';
import testimonial2 from '../../assets/testimonial2.png';
import testimonial3 from '../../assets/testimonial3.png';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        { id: 1, img: testimonial1, name: 'Mirazul Alom', feedback: 'Good choice for pastry cake & fast food items. Popular choice in the Baily road area. They don’t have any sitting arrangement actually & it’s a problem for seniors to have food here; however takeaway option is a good choice.' },
        { id: 2, img: testimonial2, name: 'Fakhrul Alom', feedback: 'Swiss bakery is one of the busiest fast food shop in dhaka. Every time I come to dhaka I do try their foods. I had chicken paties this time but didn\'t find that quality as before. I felt oily test.' },
        { id: 3, img: testimonial3, name: 'Shah Alom', feedback: 'Went there a couple of months ago. The last time I went there was at least 5 years ago. I must say that the quality is still the same (at least I thought so). It reminded of my fond childhood memories of when we used to stop at Swiss on the way to picnics and family retreats.' }
    ];
    return (
        <div className="testimonial_area ">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section_title mb-60 text-center">
                            <span>Testimonials</span>
                            <h3>Happy Customers</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="testmonial_active owl-carousel">
                            <Carousel>
                                {
                                    testimonials.map(slider => <Carousel.Item key={slider.id}>
                                        <Container>
                                            <Row>
                                                <Col lg={8}>
                                                    <Carousel.Caption className="text-center">
                                                        <p className="mx-auto">{slider.feedback}</p>

                                                        <img src={slider.img} className="img-fluid" alt={slider.name} />
                                                        <h3>{slider.name}</h3>
                                                    </Carousel.Caption>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Carousel.Item>)
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;