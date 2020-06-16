import React, { useState, useEffect } from "react";
import GiftCardManager from "../../modules/GiftCardManager";
import GiftCard from "./GiftCardCard";

const GiftCardList = () => {
  //The initial state is an emptry array
  const [giftCards, setGiftCards] = useState([]);

  const getGiftCards = () => {
    //After the data comes back from the API, we use the setCoupons function to update state
    return GiftCardManager.getAll().then((giftCardsFromAPI) => {
      setGiftCards(giftCardsFromAPI);
    });
  };
  //got teh coupons from the API on the component's first render
  useEffect(() => {
    getGiftCards();
  }, []);

  //Finally we use map() to "loop over" the coupons array to show a list of coupon cards
  return (
    <div className="container-cards">
      {giftCards.map((giftCard) => (
        <GiftCard key={giftCard.id} giftCard={giftCard} />
      ))}
    </div>
  );
};

export default GiftCardList;
