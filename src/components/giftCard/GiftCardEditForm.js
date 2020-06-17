import React, { useState, useEffect } from "react";
import GiftCardManager from "../../modules/GiftCardManager";

const GiftCardEditForm = (props) => {
  const [giftCard, setGiftCard] = useState({
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
      id: props.match.params.giftCardId,
      forLocation: giftCard.forLocation,
      datetime: giftCard.datetime,
      amount: giftCard.amount,
      expirationDate: giftCard.expirationDate,
      quantity: giftCard.quantity,
      url: giftCard.url,
      notes: giftCard.notes,
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
  }, []);

  return (
    <>
      <form>
        <fieldset>
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
              type=""
              required
              onChange={handleFieldChange}
              id="datetime"
              value={giftCard.datetime}
            />
            <label htmlFor="datetime">date created</label>
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
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingGiftCard}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default GiftCardEditForm;
