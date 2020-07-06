import React, { useState } from "react";
import GiftCardManager from "../../modules/GiftCardManager";
import { Button } from "reactstrap";
import "./GiftCard.css";
const GiftCardForm = (props) => {
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
  const [giftCard, setGiftCard] = useState({
    userId: props.userId,
    cardType: "Gift Card",
    forLocation: "",
    datetime: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(timestamp),
    amount: "",
    expirationDate: "",
    quantity: "",
    url: "",
    notes: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...giftCard };
    stateToChange[evt.target.id] = evt.target.value;
    setGiftCard(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
   */
  const constructNewGiftCard = (evt) => {
    evt.preventDefault();
    if (
      !giftCard.forLocation ||
      !giftCard.amount ||
      !giftCard.expirationDate ||
      !giftCard.quantity ||
      !giftCard.url ||
      !giftCard.notes
    ) {
      window.alert("Please fill out entire form");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      GiftCardManager.post(giftCard).then(() =>
        props.history.push("/giftCards")
      );
    }
  };

  return (
    <>
      <div id="background_gC">
        <h1 id="emptySpace_GC">Hello </h1>
        <div className="TopContainer">
          <h4 className="colorLetters">Gift Card Form</h4>
        </div>
        <form>
          <fieldset className="GiftCard_fieldset GiftCard_style">
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
                id="amount"
                placeholder=" 00.0"
              />
              <label className="colorLetters" htmlFor="amount">
                Amount $
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
                onClick={constructNewGiftCard}
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

export default GiftCardForm;
