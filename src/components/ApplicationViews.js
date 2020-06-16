import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import GiftCard from "./giftCard/GiftCardCard";
import CouponCard from "./coupon/CouponCard";
import LoyaltyRewardCard from "./loyaltyReward/LoyaltyRewardCard";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />
      <Route
        path="/gift_cards"
        render={(props) => {
          return <GiftCard />;
        }}
      />
      <Route
        path="/coupons"
        render={(props) => {
          return <CouponCard />;
        }}
      />
      <Route
        path="/loyalty_rewards"
        render={(props) => {
          return <LoyaltyRewardCard />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
