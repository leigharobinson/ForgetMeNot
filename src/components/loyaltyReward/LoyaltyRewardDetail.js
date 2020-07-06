import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import LoyaltyRewardManager from "../../modules/LoyaltyRewardManager";
import "./Loyalty.css";
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
    <div id="background_Loy">
      <h1 id="emptySpace_LR">Hello </h1>
      <div className="TopContainer">
        <h4 className="colorLetters">Loyalty Reward Card Details</h4>
      </div>

      <fieldset className="Loyalty_fieldset Loyalty_style">
        {/* <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture> */}
        <h3>
          <span style={{ color: "darkslategrey" }}>
            {loyaltyReward.forLocation}
          </span>
        </h3>
        <p>Created: {loyaltyReward.datetime}</p>
        <p>Visits Until Reward: {loyaltyReward.visitsUntilReward}</p>
        <p>Expiration Date: {loyaltyReward.expirationDate}</p>
        <p>Url: {loyaltyReward.url}</p>
        <p>Notes: {loyaltyReward.notes}</p>
        <div id="btnHolder">
          <Button
            id="deletebtn"
            color="danger"
            type="button"
            disabled={isLoading}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </fieldset>
    </div>
  );
};

export default LoyaltyRewardDetail;
