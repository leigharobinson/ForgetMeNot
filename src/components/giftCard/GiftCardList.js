import React, { useState, useEffect } from "react";
import GiftCardManager from "../../modules/GiftCardManager";
import { Button } from "reactstrap";
import GiftCard from "./GiftCardCard";

const GiftCardList = (props) => {
  //The initial state is an emptry array
  const [giftCards, setGiftCards] = useState([]);

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

  // console.log(id);
  const deleteGiftCard = (id) => {
    console.log(id);
    GiftCardManager.delete(id).then(() =>
      GiftCardManager.getAll().then(setGiftCards)
    );
  };

  //Finally we use map() to "loop over" the coupons array to show a list of coupon cards
  return (
    <>
      {/* //add this button above your display of animal cards */}
      <section className="section-content">
        <Button
          id="NewGiftCardFormButton"
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/giftCards/new");
          }}
        >
          Add Gift Card
        </Button>
      </section>
      <div className="container-cards">
        {giftCards.map((giftCard) => (
          <GiftCard
            key={giftCard.id}
            giftCard={giftCard}
            deleteGiftCard={deleteGiftCard}
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export default GiftCardList;
