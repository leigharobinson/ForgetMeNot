import React, { useState } from "react";
import LoyaltyRewardManager from "../../modules/LoyaltyRewardManager";

const LoyaltyRewardForm = (props) => {
  const [loyaltyReward, setLoyaltyReward] = useState({ forLocation: "" });
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
    if (loyaltyReward.forLocation === "") {
      window.alert("Please fill out entire form");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      LoyaltyRewardManager.post(loyaltyReward).then(() =>
        props.history.push("/loyaltyRewardsCardswards")
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
