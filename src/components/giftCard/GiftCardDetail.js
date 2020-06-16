import React, { useState, useEffect } from "react";
import GiftCardManager from "../../modules/GiftCardManager";

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
    });
  }, [props.giftCardId]);

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
      </div>
    </div>
  );
};

export default GiftCardDetail;
