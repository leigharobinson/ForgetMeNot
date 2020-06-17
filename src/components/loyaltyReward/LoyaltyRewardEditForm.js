import React, { useState, useEffect } from "react";
import LoyaltyRewardManager from "../../modules/LoyaltyRewardManager";

const LoyaltyRewardEditForm = (props) => {
  const [loyaltyReward, setLoyaltyReward] = useState({
    forLocation: "",
    datetime: "",
    visitsUntilReward: "",
    expirationDate: "",
    url: "",
    notes: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...loyaltyReward };
    stateToChange[evt.target.id] = evt.target.value;
    setLoyaltyReward(stateToChange);
  };

  const updateExistingLoyaltyRewardCard = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedLoyaltyRewardCard = {
      id: props.match.params.loyaltyRewardId,
      forLocation: loyaltyReward.forLocation,
      datetime: loyaltyReward.datetime,
      visitsUntilReward: loyaltyReward.visitsUntilReward,
      expirationDate: loyaltyReward.expirationDate,
      url: loyaltyReward.url,
      notes: loyaltyReward.notes,
    };

    LoyaltyRewardManager.update(editedLoyaltyRewardCard).then(() =>
      props.history.push("/loyaltyRewardsCards")
    );
  };

  useEffect(() => {
    LoyaltyRewardManager.get(props.match.params.loyaltyRewardId).then(
      (loyaltyReward) => {
        setLoyaltyReward(loyaltyReward);
        setIsLoading(false);
      }
    );
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="forLocation"
              value={loyaltyReward.forLocation}
            />
            <label htmlFor="forLocation">Business Name</label>
            <input
              type=""
              required
              onChange={handleFieldChange}
              id="datetime"
              value={loyaltyReward.datetime}
            />
            <label htmlFor="datetime">date created</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="visitsUntilReward"
              value={loyaltyReward.visitsUntilReward}
            />
            <label htmlFor="avisitsUntilReward">
              Number of Visits Until Reward
            </label>
            <input
              type=""
              required
              onChange={handleFieldChange}
              id="expirationDate"
              value={loyaltyReward.expirationDate}
            />
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              type="url"
              required
              onChange={handleFieldChange}
              id="url"
              value={loyaltyReward.url}
            />
            <label htmlFor="url">Business's url</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="notes"
              value={loyaltyReward.notes}
            />
            <label htmlFor="notes">Notes</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingLoyaltyRewardCard}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LoyaltyRewardEditForm;
