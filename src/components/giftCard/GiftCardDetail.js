import React, { useState, useEffect } from "react";
import GiftCardManager from "../../modules/GiftCardManager";
// import "../coupon/CouponDetail";
const GiftCardDetail = (props) => {
  const [giftCard, setGiftCard] = useState({
    forLocation: "",
    datetime: "",
    amount: "",
    expirationDate: "",
    quantaty: "",
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
        quantaty: giftCard.quantaty,
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
      props.history.push("/gift_cards")
    );
  };

  return (
    <div className="card">
      <h2>Gift Card</h2>
      <div className="card-content">
        {/* <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture> */}
        <h3>
          For: <span>{giftCard.forLocation}</span>
        </h3>
        <p>Created: {giftCard.datetime}</p>
        <p>Amount: ${giftCard.amount}</p>
        <p>Expiration Date: {giftCard.expirationDate}</p>
        <p>Quantaty: {giftCard.quantaty}</p>
        <p>Url: {giftCard.url}</p>
        <p>Notes: {giftCard.notes}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default GiftCardDetail;
