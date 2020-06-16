import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import GiftCardList from "./giftCard/GiftCardList";
import GiftCardDetail from "./giftCard/GiftCardDetail";
import CouponList from "./coupon/CouponList";
import CouponDetail from "./loyaltyReward/LoyaltyRewardDetail";
import LoyaltyRewardList from "./loyaltyReward/LoyaltyRewardList";
import LoyaltyRewardDetail from "./loyaltyReward/LoyaltyRewardDetail";
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
        exact
        path="/gift_cards"
        render={(props) => {
          return <GiftCardList />;
        }}
      />
      <Route
        path="/gift_cards/:giftCardId(\d+)"
        render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <GiftCardDetail
              giftCardId={parseInt(props.match.params.giftCardId)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/coupons"
        render={(props) => {
          return <CouponList />;
        }}
      />
      <Route
        path="/coupons/:couponId(\d+)"
        render={(props) => {
          // Pass the couponId to the AnimalDetailComponent
          return (
            <CouponDetail
              couponId={parseInt(props.match.params.couponId)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/loyalty_rewards"
        render={(props) => {
          return <LoyaltyRewardList />;
        }}
      />
      <Route
        path="/loyalty_rewards/:loyaltyRewardId(\d+)"
        render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <LoyaltyRewardDetail
              loyaltyRewardId={parseInt(props.match.params.loyaltyRewardId)}
              {...props}
            />
          );
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
