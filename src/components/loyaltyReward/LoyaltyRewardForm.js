import React, { useState } from "react";
import LoyaltyRewardManager from "../../modules/LoyaltyRewardManager";

const LoyaltyRewardForm = (props) => {
  const [loyaltyReward, setLoyaltyReward] = useState({
    forLocation: "",
    datetime: "",
    visitsUntilReward: "",
    expirationDate: "",
    url: "",
    notes: "",
    userId: props.userId,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...loyaltyReward };
    stateToChange[evt.target.id] = evt.target.value;
    setLoyaltyReward(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
   */
  const constructNewLoyaltyReward = (evt) => {
    evt.preventDefault();
    if (
      !loyaltyReward.forLocation ||
      !loyaltyReward.datetime ||
      !loyaltyReward.visitsUntilReward ||
      !loyaltyReward.expirationDate ||
      !loyaltyReward.url ||
      !loyaltyReward.notes
    ) {
      window.alert("Please fill out entire form");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      LoyaltyRewardManager.post(loyaltyReward).then(() =>
        props.history.push("/loyaltyRewardsCards")
      );
    }
  };

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
              placeholder="Business Name"
            />
            <label htmlFor="forLocation">Business Name</label>
            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="datetime"
              placeholder="date"
            />
            <label htmlFor="datetime">date created</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="visitsUntilReward"
              placeholder="visitsUntilReward"
            />
            <label htmlFor="visitsUntilReward">
              Number of Visits Until Next Reward
            </label>
            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="expirationDate"
              placeholder="expiratioinDate"
            />
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              type="url"
              required
              onChange={handleFieldChange}
              id="url"
              placeholder="url"
            />
            <label htmlFor="url">Business's url</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="notes"
              placeholder="notes"
            />
            <label htmlFor="notes">Notes</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewLoyaltyReward}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LoyaltyRewardForm;
