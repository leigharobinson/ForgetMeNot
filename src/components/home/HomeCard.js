import React from "react";

const HomeCard = (props) => {
  return (
    <div>
      <div>
        {/* //TODO: SIngle Card Layout  */}
        <div className="card-content">
          <h3>
            For: <span className="card-for">{props.card.forLocation}</span>
          </h3>
          {/* // COnditionally render AMount  */}
          {props.card.amount && <p>Amount: ${props.card.amount}</p>}
          {/* COnditionally render discoung */}
          {props.card.discount && <p>Discount: {props.card.discount} OFF</p>}
          {/* Conditially render LRewards */}
          {props.card.visitsUntilReward && (
            <p>Visits until Reward: {props.card.visitsUntilReward}</p>
          )}
          <p>Expiration: {props.card.expirationDate}</p>

          {/* <button
            type="button"
            onClick={() => props.deleteGiftCard(props.giftCard.id)}
          >
            Delete
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
