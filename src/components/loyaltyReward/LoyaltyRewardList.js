import React, { useState, useEffect } from "react";
import LoyaltyRewardManager from "../../modules/LoyaltyRewardManager";
import LoyaltyRewardCard from "./LoyaltyRewardCard";

const LoyaltyRewardList = () => {
  //The initial state is an emptry array
  const [loyaltyRewards, setLoyaltyRewards] = useState([]);

  const getLoyaltyRewards = () => {
    //After the data comes back from the API, we use the setCoupons function to update state
    return LoyaltyRewardManager.getAll().then((loyaltyRewardFromAPI) => {
      setLoyaltyRewards(loyaltyRewardFromAPI);
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
    <div className="container-cards">
      {loyaltyRewards.map((loyaltyReward) => (
        <LoyaltyRewardCard
          key={loyaltyReward.id}
          loyaltyReward={loyaltyReward}
          deleteLoyaltyRewardCard={deleteLoyaltyRewardCard}
        />
      ))}
    </div>
  );
};

export default LoyaltyRewardList;