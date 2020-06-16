import React from "react";

const LoyaltyRewardCard = () => {
  return (
    <div className="card">
      <h2>Loyalty Reward Card</h2>
      <div className="card-content">
        <h3>
          For: <span className="card-for">Suby</span>
        </h3>
        <p>Visits until Reward: 2</p>
        <p>Expiration: 31/10/2047</p>
      </div>
    </div>
  );
};

export default LoyaltyRewardCard;
