import { Route, Redirect, Switch } from "react-router-dom";
import React from "react";
import Login from "./authentication/Login";
import NewUserForm from "./authentication/NewUserForm";

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

import HomeList from "./home/HomeList";
// import UserProfileList from "./userProfile/UserProfileList";
import PageNotFound from "./pageNotFound/PageNotFound";
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
      <Switch>
        <Route
          exact
          path="/login"
          render={(props) => {
            return <Login setUser={setUser} hasUser={hasUser} {...props} />;
          }}
        />
        <Route
          exact
          path="/"
          render={(props) => {
            if (hasUser) {
              return <HomeList userId={userId} hasUser={hasUser} {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/newUser"
          render={(props) => {
            return <NewUserForm setUser={setUser} userId={userId} {...props} />;
          }}
        />
        {/* <Route exact path="/profile" component={UserProfileList} /> */}

        <Route
          exact
          path="/giftCards"
          render={(props) => {
            if (hasUser) {
              return <GiftCardList {...props} />;
            } else {
              // window.alert("Please fill out user name and password");
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
          exact
          path="/giftCards/:giftCardId(\d+)/edit"
          render={(props) => {
            if (hasUser) {
              return <GiftCardEditForm userId={userId} {...props} />;
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
              // window.alert("Please fill out user name and password");
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
          exact
          path="/coupons/:couponId(\d+)/edit"
          render={(props) => {
            if (hasUser) {
              return <CouponEditForm userId={userId} {...props} />;
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
              // window.alert("Please fill out user name and password");
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
          exact
          path="/loyaltyRewardsCards/:loyaltyRewardId(\d+)/edit"
          render={(props) => {
            if (hasUser) {
              return <LoyaltyRewardEditForm userId={userId} {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          render={() => {
            return <PageNotFound />;
          }}
        />
      </Switch>
    </React.Fragment>
  );
};

export default ApplicationViews;
