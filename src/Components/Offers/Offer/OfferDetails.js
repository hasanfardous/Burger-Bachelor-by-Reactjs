import { faTextHeight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

const OfferDetails = () => {
    const { id } = useParams();
    const [singleItem, setSingleItem] = useState({});
    const { title, price, discount, img_url, text } = singleItem;

    useEffect(() => {
        const url = `https://frightful-hollow-00954.herokuapp.com/offer/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleItem(data))

    }, []);

    return (
        <div className="our_department_area">
            <div className="container">
                <div className="row">
                    <Col lg={4} md={6} xl={4}>
                        <img src={img_url} alt={title} />
                    </Col>
                    <Col lg={7} md={6} xl={8}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </Col>
                </div>
            </div>
        </div>
    );
};

export default OfferDetails;