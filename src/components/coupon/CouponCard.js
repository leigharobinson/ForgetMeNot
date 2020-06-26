import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

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
        <p>Notes: {props.coupon.notes}</p>
        <Link to={`/coupons/${props.coupon.id}`}>
          <Button id="CouponButton">Details</Button>
        </Link>

        <Button
          id="CouponButton"
          type="button"
          onClick={() => props.history.push(`/coupons/${props.coupon.id}/edit`)}
        >
          Edit
        </Button>
        <Button
          color="danger"
          type="button"
          onClick={() => props.deleteCoupon(props.coupon.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default CouponCard;
