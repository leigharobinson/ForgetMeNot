import React from "react";

const CouponCard = (props) => {
  return (
    <div className="card">
      <h2>Coupon</h2>
      <div className="card-content">
        <h3>
          For: <span className="card-for">{props.coupon.forLocation}</span>
        </h3>
        <p>Discount: {props.coupon.discount} OFF</p>
        <p>Expiration: {props.coupon.expirationDate}</p>
        <button
          type="button"
          onClick={() => props.deleteCoupon(props.coupon.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CouponCard;
