import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import GiftCardManager from "../../modules/GiftCardManager";
// import "../coupon/CouponDetail";
const GiftCardDetail = (props) => {
  const [giftCard, setGiftCard] = useState({
    forLocation: "",
    datetime: "",
    amount: "",
    expirationDate: "",
    quantity: "",
    url: "",
    notes: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    GiftCardManager.get(props.giftCardId).then((giftCard) => {
      setGiftCard({
        forLocation: giftCard.forLocation,
        datetime: giftCard.datetime,
        amount: giftCard.amount,
        expirationDate: giftCard.expirationDate,
        quantity: giftCard.quantity,
        url: giftCard.url,
        notes: giftCard.notes,
      });
      setIsLoading(false);
    });
  }, [props.giftCardId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    GiftCardManager.delete(props.giftCardId).then(() =>
      props.history.push("/giftCards")
    );
  };

  return (
    <div id="background_gC">
      <div className="emptySpace">. </div>
      <div className="TopContainer">
        <h4 className="colorLetters">Gift Card Details</h4>
      </div>

      <div className="GiftCard_style GiftCard_fieldset ">
        <div>
          {/* <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture> */}
          <h3>
            <span className="colorLetters">{giftCard.forLocation}</span>
          </h3>
          <h2 className="colorLetters">Amount: ${giftCard.amount}</h2>
          <p className="colorLetters">Date Created: {giftCard.datetime}</p>
          <p className="colorLetters">
            Expiration Date: {giftCard.expirationDate}
          </p>
          <p className="colorLetters">Quantity: {giftCard.quantity}</p>
          <p className="colorLetters">Url: {giftCard.url}</p>
          <p className="colorLetters">Notes: {giftCard.notes}</p>
          <div id="btnHolder">
            <Button
              id="deletebtn"
              color="danger"
              type="button"
              disabled={isLoading}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCardDetail;
