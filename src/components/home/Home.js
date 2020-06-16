import React from "react";
import GiftCardList from "../giftCard/GiftCardList";
import CouponList from "../coupon/CouponList";
import LoyaltyRewardList from "../loyaltyReward/LoyaltyRewardList";

const Home = () => {
  return (
    <div>
      <div>InsertLogo</div>
      <h2>Welcome ___user______!</h2>
      <br></br>
      <div>
        <h4>Card Library</h4>
        <button>Search</button>
      </div>
      <div>
        <GiftCardList />
        <CouponList />
        <LoyaltyRewardList />
      </div>
    </div>
  );
};

export default Home;
