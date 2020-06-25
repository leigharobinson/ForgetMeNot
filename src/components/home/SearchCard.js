import React, { useState } from "react";
import { firstLetterCase } from "../helpers/Helpers";
import "./SearchCard.css";

const SearchCard = (props) => {
  //card will keep track of any change to the input in the filter box
  const [word, setWord] = useState("");
  //filsterdispay will display the updated list based onthe search
  //it's default state is our cards list prop
  const [filteredDisplay, setFilteredDisplay] = useState(props.newArrayOfThree);

  //My OWN
  // console.log(props.newArrayOfThree);

  //handleChange runs each time ther's a change in the input feild
  const handleChange = (e) => {
    // we hold the original list in a new array and convert all the names to lowercase
    // we do this to take away chance of user input error
    // Then we return Old List as an arry of objects to hold this changed list
    let oldList = props.newArrayOfThree.map((filteredCard) => {
      return {
        id: filteredCard.id,
        forLocation: filteredCard.forLocation.toLowerCase(),
        cardType: filteredCard.cardType,
        expirationDate: filteredCard.expirationDate,
        amount: filteredCard.amount,
        discount: filteredCard.discount,
        visitsUntilReward: filteredCard.visitsUntilReward,
      };
    });
    // if the input bar is not empty, run the following
    //esle if it's empty, setFilterDisplay to the original list prop
    if (e !== "") {
      let newList = [];

      //setCard keeps track of any changes in the input
      setWord(e);
      //newList is an array that holds the filteredCards that meet the search criteria.
      newList = oldList.filter((filteredCard) =>
        // we call the includes method and pass in the 'word' state in lowercase
        //this checks if our oldList contains cards withthe 'word in its name
        filteredCard.forLocation.includes(word.toLowerCase())
      );
      setFilteredDisplay(newList);
    } else {
      // if the input isn't modified, return the roginal list.
      setFilteredDisplay(props.newArrayOfThree);
    }
  };
  return (
    <>
      <div>
        Seach:
        <input
          placeholder="Search"
          onChange={(e) => handleChange(e.target.value)}
        />
        {filteredDisplay.map((filteredCard, i) => (
          <div id="search_card" key={i}>
            <div>
              <h4>{filteredCard.cardType}</h4>
              {/* <h4> {props.card.id}</h4> */}
              <h3>
                <span className="card-for">
                  {firstLetterCase(filteredCard.forLocation)}
                </span>
              </h3>
              {/* // COnditionally render AMount  */}
              {filteredCard.amount && <p>Amount: ${filteredCard.amount}</p>}
              {/* COnditionally render discoung */}
              {filteredCard.discount && (
                <p>Discount: {filteredCard.discount} OFF</p>
              )}
              {/* Conditially render LRewards */}
              {filteredCard.visitsUntilReward && (
                <p>Visits until Reward: {filteredCard.visitsUntilReward}</p>
              )}
              <p>{filteredCard.expirationDate}</p>
              <button
                disabled={props.isLoading}
                type="button"
                onClick={() =>
                  props.deleteCard(filteredCard.id, filteredCard.cardType)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchCard;
