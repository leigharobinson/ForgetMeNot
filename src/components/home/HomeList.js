import React, { useState, useEffect } from "react";

import CouponManager from "../../modules/CouponManager";
import LoyaltyRewardManager from "../../modules/LoyaltyRewardManager";
import GiftCardManager from "../../modules/GiftCardManager";
// import HomeCard from "./HomeCard";
import UserManager from "../../modules/UserManager";
// import NewUserForm from "../authentication/NewUserForm";
import SearchCard from "./SearchCard";
const HomeList = (props) => {
  const [user, setUser] = useState([]);
  const [giftCards, setGiftCards] = useState([]);
  const [loyaltyRewards, setLoyaltyRewards] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [allCards, setAllCards] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    UserManager.getAll().then((usernameFromAPI) => {
      // console.log(usernameFromAPI);
      // console.log(props.userId);
      usernameFromAPI.forEach(function (element) {
        if (props.userId === element.id) {
          // console.log(element.username);
          setUser(element.username);
        }
      });
      // setIsLoading(false);
    });
  }, [props.userId]);

  //got the coupons from the API on the component's first render
  useEffect(() => {
    //After the data comes back from the API, we use the setCoupons function to update state
    GiftCardManager.getAll()
      .then((giftCardsFromAPI) => {
        setGiftCards(giftCardsFromAPI);

        return CouponManager.getAll();
      })
      .then((couponsFromAPI) => {
        setCoupons(couponsFromAPI);

        return LoyaltyRewardManager.getAll();
      })
      .then((loyaltyRewardFromAPI) => {
        console.log(giftCards, coupons, loyaltyRewardFromAPI);
        setLoyaltyRewards(loyaltyRewardFromAPI);
      });
  }, []);

  useEffect(() => {
    let newArrayOfThree = [...coupons, ...giftCards, ...loyaltyRewards];
    setAllCards(newArrayOfThree.sort(compare));
    console.log(newArrayOfThree);
  }, [loyaltyRewards]);

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
      <section>
        <h3>Welcome {user}!</h3>

        <div>
          <h4>Card Library</h4>
          <div>
            <SearchCard
              // isLoading={isLoading}
              deleteCard={deleteCard}
              allCards={allCards}
              user={user}
              {...props}
            />
          </div>
        </div>
        <hr></hr>
        {/* <div className="container-cards">
          {newArrayOfThree.map((card) => {
            counter++;
            return (
              <HomeCard
                key={counter}
                card={card}
                deleteCard={deleteCard}
                user={user}
                {...props}
              />
            );
          })}
        </div> */}
      </section>
    </>
  );
};

export default HomeList;
