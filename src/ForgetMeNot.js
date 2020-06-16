import React from "react";
import "./ForgetMeNot.css";
import "./components/coupon/CouponCard";
import CouponCard from "./components/coupon/CouponCard";
import GiftCard from "./components/giftCard/GiftCardCard";
import LoyaltyRewardCard from "./components/loyaltyReward/LoyaltyRewardCard";
const ForgetMeNot = () => {
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

export default ForgetMeNot;
