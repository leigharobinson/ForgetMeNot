import React, { useState, useEffect } from "react";
import CouponManager from "../../modules/CouponManager";
import LoyaltyRewardManager from "../../modules/LoyaltyRewardManager";
import GiftCardManager from "../../modules/GiftCardManager";
import HomeCard from "./HomeCard";
import UserManager from "../../modules/UserManager";

const HomeList = (props) => {
  const [user, setUser] = useState([]);
  const [giftCards, setGiftCards] = useState([]);
  const [loyaltyRewards, setLoyaltyRewards] = useState([]);
  const [coupons, setCoupons] = useState([]);

  const getUsername = () => {
    return UserManager.getAll().then((usernameFromAPI) => {
      // console.log(usernameFromAPI);
      // console.log(props.userId);
      usernameFromAPI.forEach(function (element) {
        if (props.userId === element.id) {
          // console.log(element.username);
          setUser(element.username);
        }
      });
    });
  };

  useEffect(() => {
    getUsername();
  });
  //The initial state is an emptry array

  const getGiftCards = () => {
    //After the data comes back from the API, we use the setCoupons function to update state
    return GiftCardManager.getAll().then((giftCardsFromAPI) => {
      setGiftCards(giftCardsFromAPI);
      // console.log(giftCardsFromAPI);
    });
  };
  //got teh coupons from the API on the component's first render
  useEffect(() => {
    getGiftCards();
  }, []);

  //The initial state is an emptry array

  const getCoupons = () => {
    //After the data comes back from the API, we use the setCoupons function to update state
    return CouponManager.getAll().then((couponsFromAPI) => {
      setCoupons(couponsFromAPI);
      // console.log(couponsFromAPI);
    });
  };
  //got teh coupons from the API on the component's first render
  useEffect(() => {
    getCoupons();
  }, []);

  const getLoyaltyRewards = () => {
    //After the data comes back from the API, we use the setCoupons function to update state
    return LoyaltyRewardManager.getAll().then((loyaltyRewardFromAPI) => {
      setLoyaltyRewards(loyaltyRewardFromAPI);
      // console.log(loyaltyRewardFromAPI);
    });
  };
  //got teh coupons from the API on the component's first render
  useEffect(() => {
    getLoyaltyRewards();
  }, []);

  let newArrayOfThree = [...coupons, ...giftCards, ...loyaltyRewards];
  console.log(newArrayOfThree);

  function compare(a, b) {
    if (a.forLocation < b.forLocation) {
      return -1;
    }
    if (a.forLocation > b.forLocation) {
      return 1;
    }
    return 0;
  }

  newArrayOfThree.sort(compare);
  let counter = 0;

  return (
    <>
      <section>
        <div>InsertLogo</div>
        <h2>Welcome {user}!</h2>
        <br></br>
        <div>
          <h4>Card Library</h4>
          <button>Search</button>
        </div>
        <div className="container-cards">
          {newArrayOfThree.map((card) => {
            counter++;
            return (
              <HomeCard key={counter} card={card} user={user} {...props} />
            );
          })}
          {/* {HomeCards.map((homecards) => (
            <HomeCard
            key={giftCard.id}
            giftCard={giftCard}
            deleteGiftCard={deleteGiftCard}
            {...props}
            />
          ))} */}
        </div>
      </section>
    </>
  );
};

export default HomeList;
