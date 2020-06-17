import React, { useState, useEffect } from "react";
import LoyaltyRewardManager from "../../modules/LoyaltyRewardManager";

const LoyaltyRewardDetail = (props) => {
  const [loyaltyReward, setLoyaltyReward] = useState({
    forLocation: "",
    datetime: "",
    visitsUntilReward: "",
    expirationDate: "",
    url: "",
    notes: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    LoyaltyRewardManager.get(props.loyaltyRewardId).then((loyaltyReward) => {
      setLoyaltyReward({
        forLocation: loyaltyReward.forLocation,
        datetime: loyaltyReward.datetime,
        visitsUntilReward: loyaltyReward.visitsUntilReward,
        expirationDate: loyaltyReward.expirationDate,
        url: loyaltyReward.url,
        notes: loyaltyReward.notes,
      });
      setIsLoading(false);
    });
  }, [props.loyaltyRewardId]);
  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    LoyaltyRewardManager.delete(props.loyaltyRewardId).then(() =>
      props.history.push("/loyaltyRewardsCards")
    );
  };

  return (
    <div className="card">
      <h2>Loyalty Reward Card</h2>
      <div className="card-content">
        {/* <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture> */}
        <h3>
          For:{" "}
          <span style={{ color: "darkslategrey" }}>
            {loyaltyReward.forLocation}
          </span>
        </h3>
        <p>Created: {loyaltyReward.datetime}</p>
        <p>Visits Until Reward: {loyaltyReward.visitsUntilReward}</p>
        <p>Expiration Date: {loyaltyReward.expirationDate}</p>
        <p>Url: {loyaltyReward.url}</p>
        <p>Notes: {loyaltyReward.notes}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default LoyaltyRewardDetail;
