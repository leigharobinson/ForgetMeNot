import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { Icon } from "semantic-ui-react";
import LoyaltyRewardManager from "../../modules/LoyaltyRewardManager";
import LoyaltyRewardCard from "./LoyaltyRewardCard";
import "./Loyalty.css";
const LoyaltyRewardList = (props) => {
  //The initial state is an emptry array
  const [loyaltyRewards, setLoyaltyRewards] = useState([]);

  const getLoyaltyRewards = () => {
    //After the data comes back from the API, we use the setCoupons function to update state
    return LoyaltyRewardManager.getAll().then((loyaltyRewardFromAPI) => {
      setLoyaltyRewards(loyaltyRewardFromAPI);
      // console.log(loyaltyRewardFromAPI);
    });
  };
  //got teh coupons from the API on the component's first render
  useEffect(() => {
    getLoyaltyRewards();
  }, []);

  const deleteLoyaltyRewardCard = (id) => {
    LoyaltyRewardManager.delete(id).then(() =>
      LoyaltyRewardManager.getAll().then(setLoyaltyRewards)
    );
  };

  //Finally we use map() to "loop over" the coupons array to show a list of coupon cards
  return (
    <>
      <div id="background_Loy">
        <div className="emptySpace">. </div>
        <div className="TopContainer">
          {/* //add this button above your display of animal cards */}
          <section className="section-content">
            <Button
              id="NewLoyaltyRewardFormButton"
              type="button"
              className="btn"
              onClick={() => {
                props.history.push("/loyaltyRewardsCards/new");
              }}
            >
              <Icon name="add" size="large" />
              Add Loyalty Reward Card
            </Button>
          </section>
        </div>
        <div className="GiftCard_simp">
          {loyaltyRewards.map((loyaltyReward) => (
            <LoyaltyRewardCard
              key={loyaltyReward.id}
              loyaltyReward={loyaltyReward}
              deleteLoyaltyRewardCard={deleteLoyaltyRewardCard}
              {...props}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LoyaltyRewardList;
