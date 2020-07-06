import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import CouponManager from "../../modules/CouponManager";
import "./Coupon.css";
const CouponEditForm = (props) => {
  const [coupon, setCoupon] = useState({
    userId: props.userId,
    cardType: "Coupon",
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
      userId: coupon.userId,
      cardType: coupon.cardType,
      forLocation: coupon.forLocation,
      datetime: coupon.datetime,
      discount: coupon.discount,
      expirationDate: coupon.expirationDate,
      quantity: coupon.quantity,
      url: coupon.url,
      notes: coupon.notes,
      id: props.match.params.couponId,
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
  }, [props.match.params.couponId]);

  return (
    <>
      <div id="background_Coup">
        <div className="emptySpace">. </div>
        <div className="TopContainer">
          <h4 className="colorLetters">Edit Coupon</h4>
        </div>
        <form>
          <fieldset className="Coupon_fieldset GiftCard_style">
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
              <Button
                id="GiftCardButton"
                type="button"
                disabled={isLoading}
                onClick={updateExistingCoupon}
                className="btn btn-primary"
              >
                Submit
              </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default CouponEditForm;
