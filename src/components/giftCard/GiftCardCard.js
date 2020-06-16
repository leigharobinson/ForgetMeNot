import React from "react";

const GiftCard = (props) => {
  return (
    <div className="card">
      <h2>Gift Card</h2>
      <div className="card-content">
        <h3>
          For: <span className="card-for">{props.giftCard.forLocation}</span>
        </h3>
        <p>Amount: ${props.giftCard.amount}</p>
        <p>Expiration: {props.giftCard.expirationDate}</p>
        <button
          type="button"
          onClick={() => props.deleteGiftCard(props.giftCard.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
