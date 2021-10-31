import { useEffect, useState } from 'react';
import Offer from './Offer/Offer';
import './Offers.css';

const Offers = (props) => {
    console.log(props);
    const [offers, setOffers] = useState([]);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://frightful-hollow-00954.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, []);

    const handleInsertingOrder = offer => {
        console.log('Inserting order', offer);
        const newOrders = [...orders, offer];
        setOrders(newOrders);
        // console.log(orders);
    };
    {
        console.log(orders.data?._id);
    }
    return (
        <div id="offers" className="Burger_President_area clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section_title mb-60 text-center">
                            <span>Our Offers</span>
                            <h3 className="mb-80">Amazing Offers</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Burger_President_here">
                {
                    offers.map(offer => <Offer key={offer._id} data={offer} handleInsertingOrder={handleInsertingOrder} showPurchase={props.showPurchase}></Offer>)
                }
            </div>
        </div>
    );
};

export default Offers;