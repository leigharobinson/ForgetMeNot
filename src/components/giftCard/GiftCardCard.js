import React from "react";

const GiftCard = () => {
  return (
    <div className="card">
      <h2>Gift Card</h2>
      <div className="card-content">
        <h3>
          For: <span className="card-for">Target</span>
        </h3>
        <p>Amount: $25.00</p>
        <p>Expiration: 31/10/2047</p>
      </div>
    </div>
  );
};

export default GiftCard;
