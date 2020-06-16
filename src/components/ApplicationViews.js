import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import GiftCardList from "./giftCard/GiftCardList";
import CouponList from "./coupon/CouponList";
import LoyaltyRewardList from "./loyaltyReward/LoyaltyRewardList";

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
          return <GiftCardList />;
        }}
      />
      <Route
        path="/coupons"
        render={(props) => {
          return <CouponList />;
        }}
      />
      <Route
        path="/loyalty_rewards"
        render={(props) => {
          return <LoyaltyRewardList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
