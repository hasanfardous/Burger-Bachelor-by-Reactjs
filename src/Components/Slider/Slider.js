import { Carousel, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from '../../assets/banner.png';
import banner2 from '../../assets/banner2.png';
import './Slider.css';

const Slider = () => {
    const sliderDatas = [
        { id: 1, img: banner1, title: 'Beefy Burgers', caption: 'It\'s totally awesome' },
        { id: 2, img: banner2, title: 'Crackles Burger', caption: 'Did you tested it?' }
    ];

    return (
        <Carousel fade>
            {
                sliderDatas.map(slider => <Carousel.Item className="overlay" key={slider.id}>
                    <img src={slider.img} className="d-block w-100" alt={slider.title} />
                    <Container>
                        <Row className="align-items-center justify-content-center">
                            <Col className="col-xl-9 col-md-9 col-md-12">
                                <Carousel.Caption className="text-center">
                                    <h3>{slider.title}</h3>
                                    <p>{slider.caption}</p>
                                    <a href="#offers" className="boxed-btn3 mt-4">Check Our Offers</a>
                                </Carousel.Caption>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>)
            }
        </Carousel>
    );
};

export default Slider;