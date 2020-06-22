import React, { useState, useReducer, useImperativeHandle } from "react";
import CouponManager from "../../modules/CouponManager";
import "./CouponForm.css";

const CouponForm = (props) => {
  const [coupon, setCoupon] = useState({
    forLocation: "",
    datetime: "",
    discount: "",
    expirationDate: "",
    quantity: "",
    url: "",
    notes: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...coupon };
    stateToChange[evt.target.id] = evt.target.value;
    setCoupon(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
   */
  const constructNewCoupon = (evt) => {
    evt.preventDefault();
    if (
      !coupon.forLocation ||
      !coupon.datetime ||
      !coupon.discount ||
      !coupon.expirationDate ||
      !coupon.quantity ||
      !coupon.url ||
      !coupon.notes
    ) {
      window.alert("Please fill out entire form");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list

      CouponManager.post(coupon, props.userId).then(() =>
        props.history.push("/coupons")
      );
    }
  };

  return (
    <>
      <div></div>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="forLocation"
              placeholder="Business Name"
            />
            <label htmlFor="forLocation">Business Name</label>
            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="datetime"
              placeholder="date"
            />
            <label htmlFor="datetime">date created</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="discount"
              placeholder="%"
            />
            <label htmlFor="discount">Discount</label>
            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="expirationDate"
              placeholder="expiratioinDate"
            />
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="quantity"
              placeholder="quantity"
            />
            <label htmlFor="quantity">Quantity</label>
            <input
              type="url"
              required
              onChange={handleFieldChange}
              id="url"
              placeholder="url"
            />
            <label htmlFor="url">Business's url</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="notes"
              placeholder="notes"
            />
            <label htmlFor="notes">Notes</label>
          </div>

          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewCoupon}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default CouponForm;
