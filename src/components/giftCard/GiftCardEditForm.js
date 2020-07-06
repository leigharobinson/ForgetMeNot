import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import GiftCardManager from "../../modules/GiftCardManager";
import "./GiftCard.css";
const GiftCardEditForm = (props) => {
  const [giftCard, setGiftCard] = useState({
    userId: props.userId,
    cardType: "Gift Card",
    forLocation: "",
    datetime: "",
    amount: "",
    expirationDate: "",
    quantity: "",
    url: "",
    notes: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...giftCard };
    stateToChange[evt.target.id] = evt.target.value;
    setGiftCard(stateToChange);
  };

  const updateExistingGiftCard = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedGiftCard = {
      userId: giftCard.userId,
      cardType: giftCard.cardType,
      forLocation: giftCard.forLocation,
      datetime: giftCard.datetime,
      amount: giftCard.amount,
      expirationDate: giftCard.expirationDate,
      quantity: giftCard.quantity,
      url: giftCard.url,
      notes: giftCard.notes,
      id: props.match.params.giftCardId,
    };

    GiftCardManager.update(editedGiftCard).then(() =>
      props.history.push("/giftCards")
    );
  };

  useEffect(() => {
    GiftCardManager.get(props.match.params.giftCardId).then((giftCard) => {
      setGiftCard(giftCard);
      setIsLoading(false);
    });
  }, [props.match.params.giftCardId]);

  return (
    <>
      <div id="background_gC">
        <div className="emptySpace">. </div>
        <div className="TopContainer">
          <h4 className="colorLetters">Edit Gift Card</h4>
        </div>
        <form>
          <fieldset className="GiftCard_fieldset GiftCard_style">
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={handleFieldChange}
                id="forLocation"
                value={giftCard.forLocation}
              />
              <label htmlFor="forLocation">Business Name</label>

              <input
                type="text"
                required
                onChange={handleFieldChange}
                id="amount"
                value={giftCard.amount}
              />
              <label htmlFor="amount">Amount</label>
              <input
                type=""
                required
                onChange={handleFieldChange}
                id="expirationDate"
                value={giftCard.expirationDate}
              />
              <label htmlFor="expirationDate">Expiration Date</label>
              <input
                type="text"
                required
                onChange={handleFieldChange}
                id="quantity"
                value={giftCard.quantity}
              />
              <label htmlFor="quantity">Quantity</label>
              <input
                type="url"
                required
                onChange={handleFieldChange}
                id="url"
                value={giftCard.url}
              />
              <label htmlFor="url">Business's url</label>
              <input
                type="text"
                required
                onChange={handleFieldChange}
                id="notes"
                value={giftCard.notes}
              />
              <label htmlFor="notes">Notes</label>
            </div>
            <div className="alignRight">
              <Button
                id="GiftCardButton"
                type="button"
                disabled={isLoading}
                onClick={updateExistingGiftCard}
                className="btn btn-primary"
              >
                Submit
              </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default GiftCardEditForm;
