import React, { useState } from "react";
import { Button } from "reactstrap";
import LoyaltyRewardManager from "../../modules/LoyaltyRewardManager";
import "./Loyalty.css";
const LoyaltyRewardForm = (props) => {
  //This Is to get a timestamp on when cards are created
  const timestamp = Date.now();

  const [loyaltyReward, setLoyaltyReward] = useState({
    userId: props.userId,
    cardType: "Loyalty Rewards Card",
    forLocation: "",
    datetime: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(timestamp),
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

  /*  Local method for validation, set loadingStatus, create LR object, invoke the LRManager post method, and redirect to the full LRC list
   */
  const constructNewLoyaltyReward = (evt) => {
    evt.preventDefault();
    if (
      !loyaltyReward.forLocation ||
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
      <div id="background_Loy">
        <h1 id="emptySpace_LR">Hello </h1>
        <div className="TopContainer">
          <h4 className="colorLetters">Loyalty Reward Form</h4>
        </div>

        <form>
          <fieldset className="Loyalty_fieldset Loyalty_style">
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
                type="text"
                required
                onChange={handleFieldChange}
                id="visitsUntilReward"
                placeholder="Visit until reward"
              />
              <label htmlFor="visitsUntilReward">
                Visits Until Next Reward
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
              <Button
                id="GiftCardButton"
                type="button"
                disabled={isLoading}
                onClick={constructNewLoyaltyReward}
              >
                Submit
              </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default LoyaltyRewardForm;
