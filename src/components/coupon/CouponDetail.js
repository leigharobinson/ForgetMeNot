import React, { useState, useEffect } from "react";
import CouponManager from "../../modules/CouponManager";

const CouponDetail = (props) => {
  const [coupon, setCoupon] = useState({
    forLocation: "",
    datetime: "",
    discount: "",
    expirationDate: "",
    quantaty: "",
    url: "",
    notes: "string",
  });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    CouponManager.get(props.couponId).then((coupon) => {
      setCoupon({
        forLocation: coupon.forLocation,
        datetime: coupon.datetime,
        discount: coupon.discount,
        expirationDate: coupon.expirationDate,
        quantaty: coupon.quantaty,
        url: coupon.url,
        notes: coupon.notes,
      });
    });
  }, [props.couponId]);

  return (
    <div className="card">
      <h2>Coupon Card</h2>
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
        <p>Quantaty: {coupon.quantaty}</p>
        <p>Url: {coupon.url}</p>
        <p>Notes: {coupon.notes}</p>
      </div>
    </div>
  );
};

export default CouponDetail;
