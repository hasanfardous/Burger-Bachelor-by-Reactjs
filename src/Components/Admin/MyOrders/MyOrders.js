import { useState, useEffect } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import './MyOrders.css';
import useAuth from '../../../Hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';
import { useLocation, useHistory } from 'react-router';
import burgerBg from '../../../assets/burger_bg.png';

function MyOrders() {
  const [email, setEmail] = useState('');
  const { auth, user, error, isLoading, success, signInPopupUsingGoogle, doTheLogin, doTheRegistration } = useAuth();

  const [orders, setOrders] = useState([]);
  useEffect(() => {
      fetch('https://frightful-hollow-00954.herokuapp.com/orders')
          .then(res => res.json())
          .then(data => setOrders(data))
  }, []);

  const bgImage = {
    backgroundImage: `url(${burgerBg})`
  };
  return (
    <div className="best_burgers_area" style={bgImage}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text-center mb-80">
              <span>My Orders</span>
              <h3>Orders that you have made.</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {
            orders.length > 0 ?
            orders.map(order => <MyOrder key={order._id} data={order}></MyOrder>)
            : <h2 className="text-center">Sorry no order added yet!</h2>
          }
        </div>
      </div>
    </div>
  );
}

export default MyOrders;