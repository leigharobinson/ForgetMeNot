import React, { useState, useEffect } from "react";
import UserManager from "../../modules/UserManager";
import GiftCardList from "../giftCard/GiftCardList";
import CouponList from "../coupon/CouponList";
import LoyaltyRewardList from "../loyaltyReward/LoyaltyRewardList";

const Home = (props) => {
  const [user, setUser] = useState([]);

  const getUsername = () => {
    return UserManager.getAll().then((usernameFromAPI) => {
      console.log(usernameFromAPI);
      console.log(props.userId);
      usernameFromAPI.forEach(function (element) {
        if (props.userId === element.id) {
          console.log(element.username);
          setUser(element.username);
        }
      });
    });
  };

  useEffect(() => {
    getUsername();
  });

  return (
    <div>
      <div>InsertLogo</div>
      <h2>Welcome {user}!</h2>
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
