import { NavLink } from "react-router-dom";

const Offer = (props) => {
    console.log(props);
    const { _id, title, price, discount, img_url, text } = props.data;

    return (
        <div className="single_Burger_President">
            <div className="room_thumb">
                <img src={img_url} alt={title} />
                <div className="room_heading d-flex justify-content-between align-items-center">
                    <div className="room_heading_inner">
                        <span>${price} - <span className="discount-price">({discount}%)</span></span>
                        <h3>{title}</h3>
                        <p>{text.substring(0, 50)}..</p>
                        {
                            props.showPurchase === "no" ?
                                <NavLink className="boxed-btn3" to="/offers#offers">Go To Offers</NavLink>
                            :
                            <button onClick={() => props.handleInsertingOrder(props.data)} className="boxed-btn3">Purchase Now</button>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Offer;