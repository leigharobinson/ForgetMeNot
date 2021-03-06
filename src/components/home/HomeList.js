import React, { useState, useEffect } from "react";

import CouponManager from "../../modules/CouponManager";
import LoyaltyRewardManager from "../../modules/LoyaltyRewardManager";
import GiftCardManager from "../../modules/GiftCardManager";
import UserManager from "../../modules/UserManager";
import SearchCard from "./SearchCard";
import "./Home.css";
const HomeList = (props) => {
  const [user, setUser] = useState([]);
  const [giftCards, setGiftCards] = useState([]);
  const [loyaltyRewards, setLoyaltyRewards] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [allCards, setAllCards] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // Try just grabbing user by id. What you had before was a lot of redundant work.
  useEffect(() => {
    UserManager.get(props.userId).then((user) => {
      setUser(user.username);
    });
  }, [props.userId]);

  //got the coupons from the API on the component's first render
  useEffect(() => {
    //After the data comes back from the API, we use the setCoupons function to update state
    GiftCardManager.getAll()
      .then((giftCardsFromAPI) => {
        console.log("gift cards fetched!", giftCardsFromAPI);
        setGiftCards(giftCardsFromAPI);

        return CouponManager.getAll();
      })
      .then((couponsFromAPI) => {
        console.log("coupons fetched!", couponsFromAPI);
        setCoupons(couponsFromAPI);

        return LoyaltyRewardManager.getAll();
      })
      .then((loyaltyRewardFromAPI) => {
        console.log("loyalty cards fetched!", loyaltyRewardFromAPI);

        setLoyaltyRewards(loyaltyRewardFromAPI);
      });
  }, []);

  useEffect(() => {
    let newArrayOfThree = [...coupons, ...giftCards, ...loyaltyRewards];
    setAllCards(newArrayOfThree.sort(compare));
    console.log(newArrayOfThree);
  }, [loyaltyRewards, coupons, giftCards]);

  function compare(a, b) {
    if (a.forLocation < b.forLocation) {
      return -1;
    }
    if (a.forLocation > b.forLocation) {
      return 1;
    }
    return 0;
  }
  // allCards.sort(compare);

  // let counter = 0;

  const deleteCard = (id, cardType) => {
    // console.log(cardType);
    // setIsLoading(true);
    if (cardType === "Gift Card") {
      // console.log("Gift Card", cardType);
      GiftCardManager.delete(id).then(() =>
        GiftCardManager.getAll().then(setGiftCards)
      );
    } else if (cardType === "Coupon") {
      // console.log("Coupon", cardType);
      CouponManager.delete(id).then(() =>
        CouponManager.getAll().then(setCoupons)
      );
    } else if (cardType === "Loyalty Rewards Card") {
      // console.log("LRC", cardType);
      LoyaltyRewardManager.delete(id).then(() =>
        LoyaltyRewardManager.getAll().then(setLoyaltyRewards)
      );
    } else {
      return "WTF";
    }
  };

  return (
    <>
      <div id="home_background">
        <div>
          <h1 className="emptySpace"> .</h1>
          <div className="userGreating">
            <h3 className="colorLetters">Welcome {user}!</h3>
          </div>
          <div>
            <div className="searchCard">
              <SearchCard
                deleteCard={deleteCard}
                allCards={allCards}
                user={user}
                {...props}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeList;
