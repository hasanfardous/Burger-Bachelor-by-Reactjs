import React, { useRef } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import './AddOffer.css';

function AddOffer() {
  const titleRef = useRef();
  const priceRef = useRef();
  const discountRef = useRef();
  const imgUrlRef = useRef();
  const txtRef = useRef();

  const offerFormHandle = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const price = priceRef.current.value;
    const discount = discountRef.current.value;
    const img_url = imgUrlRef.current.value;
    const text = txtRef.current.value;

    const offerObj = { title, price, discount, img_url, text };

    fetch('https://frightful-hollow-00954.herokuapp.com/addOffer', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(offerObj)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Offer added successfully!');
          e.target.reset();
        }
      })
      ;
  }
  return (
    <Container>
      <Row>
        <div className="contact-wrapper d-flex justify-content-center">
          <div className="contact-content my-5 px-5">
            <h2 className="my-4">Add An Offer</h2>

            <Form onSubmit={offerFormHandle}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label><b>Offer Title</b></Form.Label>
                <Form.Control type="text" ref={titleRef} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="price">
                <Form.Label><b>Offer Price</b></Form.Label>
                <Form.Control type="text" ref={priceRef} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="discount">
                <Form.Label><b>Offer Discount</b></Form.Label>
                <Form.Control type="text" ref={discountRef} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="imgUrl">
                <Form.Label><b>Offer Image URL</b></Form.Label>
                <Form.Control type="text" ref={imgUrlRef} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="txt">
                <Form.Label><b>Offer Details</b></Form.Label>
                <Form.Control as="textarea" rows={3} ref={txtRef} placeholder="Offer details.." />
              </Form.Group>
              <br /><br />
              <button className="popup-with-form" to="/">Add Offer</button>
              <br /><br />
            </Form>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default AddOffer;