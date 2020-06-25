import React, { useState, useEffect } from "react";
import CouponManager from "../../modules/CouponManager";
// import "./CouponDetail.css";

const CouponDetail = (props) => {
  const [coupon, setCoupon] = useState({
    forLocation: "",
    datetime: "",
    discount: "",
    expirationDate: "",
    quantity: "",
    url: "",
    notes: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    CouponManager.get(props.couponId).then((coupon) => {
      setCoupon({
        forLocation: coupon.forLocation,
        datetime: coupon.datetime,
        discount: coupon.discount,
        expirationDate: coupon.expirationDate,
        quantity: coupon.quantity,
        url: coupon.url,
        notes: coupon.notes,
      });
      setIsLoading(false);
    });
  }, [props.couponId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    CouponManager.delete(props.couponId).then(() =>
      props.history.push("/coupons")
    );
  };

  return (
    <div className="card">
      <h2>Coupon Card Details</h2>

      <div className="card-content">
        {/* <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture> */}
        <h3>
          For: <span>{coupon.forLocation}</span>
        </h3>
        <p>Created: {coupon.datetime}</p>
        <p>Discount: {coupon.discount}</p>
        <p>Expiration Date: {coupon.expirationDate}</p>
        <p>Quantity: {coupon.quantity}</p>
        <p>Url: {coupon.url}</p>
        <p>Notes: {coupon.notes}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CouponDetail;
