import React, { useState } from "react";
import { Button } from "reactstrap";
import CouponManager from "../../modules/CouponManager";
import "./Coupon.css";
// import "../giftCard/GiftCard.css";

const CouponForm = (props) => {
  // console.log(props.userId);
  const timestamp = Date.now();
  // console.log(
  //   new Intl.DateTimeFormat("en-US", {
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     second: "2-digit",
  //   }).format(timestamp)
  // );
  // expected output: "12/20/2012"
  const [coupon, setCoupon] = useState({
    userId: props.userId,
    cardType: "Coupon",
    forLocation: "",
    datetime: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(timestamp),
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
      <div id="background_Coup">
        <h1 id="emptySpace_C">Hello </h1>
        <div className="TopContainer">
          <h4 className="colorLetters">Coupon Form</h4>
        </div>
        <form>
          <fieldset className="Coupon_fieldset GiftCard_style">
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={handleFieldChange}
                id="forLocation"
                placeholder="Business Name"
              />
              <label className="colorLetters" htmlFor="forLocation">
                Business Name
              </label>

              <input
                type="text"
                required
                onChange={handleFieldChange}
                id="discount"
                placeholder="%"
              />
              <label className="colorLetters" htmlFor="discount">
                Discount
              </label>
              <input
                type="date"
                required
                onChange={handleFieldChange}
                id="expirationDate"
                placeholder="expiratioinDate"
              />
              <label className="colorLetters" htmlFor="expirationDate">
                Expiration Date
              </label>
              <input
                type="text"
                required
                onChange={handleFieldChange}
                id="quantity"
                placeholder="quantity"
              />
              <label className="colorLetters" htmlFor="quantity">
                Quantity
              </label>
              <input
                type="url"
                required
                onChange={handleFieldChange}
                id="url"
                placeholder="url"
              />
              <label className="colorLetters" htmlFor="url">
                Business's url
              </label>
              <input
                type="text"
                required
                onChange={handleFieldChange}
                id="notes"
                placeholder="notes"
              />
              <label className="colorLetters" htmlFor="notes">
                Notes
              </label>
            </div>

            <div className="alignRight">
              <Button
                id="GiftCardButton"
                type="button"
                disabled={isLoading}
                onClick={constructNewCoupon}
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

export default CouponForm;
