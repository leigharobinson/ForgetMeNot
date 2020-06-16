import React from "react";
import GiftCard from "../giftCard/GiftCardCard";
import CouponCard from "../coupon/CouponCard";
import LoyaltyRewardCard from "../loyaltyReward/LoyaltyRewardCard";

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
        <GiftCard />
        <CouponCard />
        <LoyaltyRewardCard />
      </div>
    </div>
  );
};

export default Home;
