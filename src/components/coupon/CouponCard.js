import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Coupon.css";
const CouponCard = (props) => {
  return (
    <div className="Coupon_style">
      <h5>{props.coupon.cardType}</h5>
      <div className="card-content">
        <h3>
          <span className="card-for">{props.coupon.forLocation}</span>
        </h3>
        <h2>Discount: {props.coupon.discount} OFF</h2>
        <p>Expiration: {props.coupon.expirationDate}</p>
        {/* <p>Notes: {props.coupon.notes}</p> */}
        <div className="btnBox">
          <Link to={`/coupons/${props.coupon.id}`}>
            <Button id="CouponButton">Details</Button>
          </Link>

          <Button
            id="CouponButton"
            type="button"
            onClick={() =>
              props.history.push(`/coupons/${props.coupon.id}/edit`)
            }
          >
            Edit
          </Button>
          <Button
            id="deletebtn"
            color="danger"
            type="button"
            onClick={() => props.deleteCoupon(props.coupon.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
