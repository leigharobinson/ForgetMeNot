import React from "react";

const CouponCard = () => {
  return (
    <div className="card">
      <h2>Coupon</h2>
      <div className="card-content">
        <h3>
          For: <span className="card-for">Bed, Bath & BEYOND</span>
        </h3>
        <p>Discount: 20% OFF</p>
        <p>Expiration: n/a</p>
      </div>
    </div>
  );
};

export default CouponCard;
