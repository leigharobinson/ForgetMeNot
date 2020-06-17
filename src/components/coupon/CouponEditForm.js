import React, { useState, useEffect } from "react";
import CouponManager from "../../modules/CouponManager";

const CouponEditForm = (props) => {
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

  const updateExistingCoupon = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedCoupon = {
      id: props.match.params.couponId,
      forLocation: coupon.forLocation,
      datetime: coupon.datetime,
      discount: coupon.discount,
      expirationDate: coupon.expirationDate,
      quantity: coupon.quantity,
      url: coupon.url,
      notes: coupon.notes,
    };

    CouponManager.update(editedCoupon).then(() =>
      props.history.push("/coupons")
    );
  };

  useEffect(() => {
    CouponManager.get(props.match.params.couponId).then((coupon) => {
      setCoupon(coupon);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="forLocation"
              value={coupon.forLocation}
            />
            <label htmlFor="forLocation">Business Name</label>
            <input
              type=""
              required
              onChange={handleFieldChange}
              id="datetime"
              value={coupon.datetime}
            />
            <label htmlFor="datetime">date created</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="discount"
              value={coupon.discount}
            />
            <label htmlFor="discount">Discount</label>
            <input
              type=""
              required
              onChange={handleFieldChange}
              id="expirationDate"
              value={coupon.expirationDate}
            />
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="quantity"
              value={coupon.quantity}
            />
            <label htmlFor="quantity">Quantity</label>
            <input
              type="url"
              required
              onChange={handleFieldChange}
              id="url"
              value={coupon.url}
            />
            <label htmlFor="url">Business's url</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="notes"
              value={coupon.notes}
            />
            <label htmlFor="notes">Notes</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingCoupon}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default CouponEditForm;