import React from "react";

const LoyaltyRewardCard = (props) => {
  return (
    <div className="card">
      <h2>Loyalty Reward Card</h2>
      <div className="card-content">
        <h3>
          For:{" "}
          <span className="card-for">{props.loyaltyReward.forLocation}</span>
        </h3>
        <p>Visits until Reward: {props.loyaltyReward.visitsUntilReward}</p>
        <p>Expiration: {props.loyaltyReward.expirationDate}</p>
        <button
          type="button"
          onClick={() => props.deleteLoyaltyRewardCard(props.loyaltyReward.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default LoyaltyRewardCard;
