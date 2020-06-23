import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./authentication/Login";
import NewUserForm from "./authentication/NewUserForm";
import Home from "./home/Home";
import GiftCardList from "./giftCard/GiftCardList";
import GiftCardDetail from "./giftCard/GiftCardDetail";
import GiftCardForm from "./giftCard/GiftCardForm";
import GiftCardEditForm from "./giftCard/GiftCardEditForm";
import CouponList from "./coupon/CouponList";
import CouponDetail from "./coupon/CouponDetail";
import CouponForm from "./coupon/CouponForm";
import CouponEditForm from "./coupon/CouponEditForm";
import LoyaltyRewardList from "./loyaltyReward/LoyaltyRewardList";
import LoyaltyRewardDetail from "./loyaltyReward/LoyaltyRewardDetail";
import LoyaltyRewardForm from "./loyaltyReward/LoyaltyRewardForm";
import LoyaltyRewardEditForm from "./loyaltyReward/LoyaltyRewardEditForm";

import UserProfileList from "./userProfile/UserProfileList";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  let userId = "";
  if (hasUser) {
    userId = JSON.parse(sessionStorage.getItem("credentials"));
  }
  /////////

  return (
    <React.Fragment>
      <Route
        path="/login"
        render={(props) => {
          return <Login setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route exact path="/newUser" component={NewUserForm} />
      <Route exact path="/profile" component={UserProfileList} />
      <Route
        exact
        path="/"
        render={(props) => {
          if (hasUser) {
            return <Home userId={userId} {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/giftCards"
        render={(props) => {
          if (hasUser) {
            return <GiftCardList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/giftCards/new"
        render={(props) => {
          return <GiftCardForm userId={userId} {...props} />;
        }}
      />
      <Route
        exact
        path="/giftCards/:giftCardId(\d+)"
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
        path="/giftCards/:giftCardId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return <GiftCardEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/coupons"
        render={(props) => {
          if (hasUser) {
            return <CouponList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/coupons/new"
        render={(props) => {
          return <CouponForm userId={userId} {...props} />;
        }}
      />
      <Route
        exact
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
        path="/coupons/:couponId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return <CouponEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/loyaltyRewardsCards"
        render={(props) => {
          if (hasUser) {
            return <LoyaltyRewardList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/loyaltyRewardsCards/new"
        render={(props) => {
          return <LoyaltyRewardForm userId={userId} {...props} />;
        }}
      />
      <Route
        exact
        path="/loyaltyRewardsCards/:loyaltyRewardId(\d+)"
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
      <Route
        path="/loyaltyRewardsCards/:loyaltyRewardId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return <LoyaltyRewardEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
