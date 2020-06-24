import React from "react";
import { Link } from "react-router-dom";

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
        <p>Notes: {props.giftCard.notes}</p>
        <Link to={`/giftCards/${props.giftCard.id}`}>
          <button id="GiftCardButton">Details</button>
        </Link>
        <button
          id="GiftCardButton"
          type="button"
          onClick={() =>
            props.history.push(`/giftCards/${props.giftCard.id}/edit`)
          }
        >
          Edit
        </button>
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
