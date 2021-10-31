import Slider from '../Slider/Slider';
import About from '../About/About';
import Offers from '../Offers/Offers';
import Testimonials from '../Testimonials/Testimonials';

function Home() {
    return (
        <div className="Home">
            <Slider></Slider>
            <Offers showPurchase="no"></Offers>
            <Testimonials></Testimonials>
            <About></About>
        </div>
    );
}

export default Home;
  