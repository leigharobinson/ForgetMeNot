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

import CouponWithUser from "./coupon/CouponWithUser";

const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route path="/login" component={Login} />
      <Route path="/newUser" component={NewUserForm} />
      <Route
        exact
        path="/"
        render={(props) => {
          if (isAuthenticated()) {
            return <Home />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/giftCards"
        render={(props) => {
          if (isAuthenticated()) {
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
          return <GiftCardForm {...props} />;
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
          if (isAuthenticated()) {
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
          if (isAuthenticated()) {
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
          return <CouponForm {...props} />;
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
          if (isAuthenticated()) {
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
          if (isAuthenticated()) {
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
          return <LoyaltyRewardForm {...props} />;
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
          if (isAuthenticated()) {
            return <LoyaltyRewardEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/users/:userId(\d+)/details"
        render={(props) => {
          return <CouponWithUser {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
