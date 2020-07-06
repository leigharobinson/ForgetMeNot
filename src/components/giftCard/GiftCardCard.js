import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./GiftCard.css";

const GiftCard = (props) => {
  return (
    <div className="GiftCard_style">
      <h5 className="colorLetters">{props.giftCard.cardType}</h5>
      <div className="card-content">
        <h3>
          <span className="card-for">{props.giftCard.forLocation}</span>
        </h3>
        <h2 className="colorLetters">Amount: ${props.giftCard.amount}</h2>
        <p className="colorLetters">
          Expiration: {props.giftCard.expirationDate}
        </p>
        {/* <p>Notes: {props.giftCard.notes}</p> */}

        <div className="btnBox">
          <Link to={`/giftCards/${props.giftCard.id}`}>
            <Button id="GiftCardButton">Details</Button>
          </Link>
          <Button
            id="GiftCardButton"
            type="button"
            onClick={() =>
              props.history.push(`/giftCards/${props.giftCard.id}/edit`)
            }
          >
            Edit
          </Button>
          <Button
            id="deletebtn"
            color="danger"
            type="button"
            onClick={() => props.deleteGiftCard(props.giftCard.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
