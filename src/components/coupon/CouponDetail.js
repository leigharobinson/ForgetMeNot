import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import CouponManager from "../../modules/CouponManager";
import "./Coupon.css";
import "./CouponForm.css";

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
    <>
      <div id="background_Coup">
        <h1 id="emptySpace_C">Hello </h1>
        <div className="TopContainer">
          <h4 className="colorLetters">Coupon Card Details</h4>
        </div>
        <div className="card Coupon_fieldset Coupon_style">
          <div className="card-content">
            {/* <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture> */}
            <h3>
              <span className="colorLetters">{coupon.forLocation}</span>
            </h3>
            <p className="colorLetters">Created: {coupon.datetime}</p>
            <p className="colorLetters">Discount: {coupon.discount}</p>
            <p className="colorLetters">
              Expiration Date: {coupon.expirationDate}
            </p>
            <p className="colorLetters">Quantity: {coupon.quantity}</p>
            <p className="colorLetters">Url: {coupon.url}</p>
            <p className="colorLetters">Notes: {coupon.notes}</p>
            <div id="btnHolder">
              <Button
                id="deletebtn"
                type="button"
                color="danger"
                disabled={isLoading}
                onClick={handleDelete}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponDetail;
