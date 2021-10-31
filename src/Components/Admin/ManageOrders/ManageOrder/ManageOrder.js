import React from 'react';

const ManageOrder = (props) => {
    const {_id, title, price, img_url, text} = props.data;
    return (
        <div className="col-xl-6 col-md-6 col-lg-6">
            <div className="single_delicious d-flex align-items-center">
              <div className="thumb">
                <img width="166" height="166" src={img_url} alt={title} />
              </div>
              <div className="info">
                <h3>{title}</h3>
                <p>{text.substring(0, 50)}..</p>
                <span>${price}</span>
              </div>
            </div>
        </div>
    );
};

export default ManageOrder;