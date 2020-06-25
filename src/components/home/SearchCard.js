import React, { useState } from "react";
import "./SearchCard.css";
const SearchCard = (props) => {
  console.log(props.newArrayOfThree);
  //card will keep track of any change to the input in the filter box
  const [word, setWord] = useState("");
  //filsterdispay will display the updated list based onthe search
  //it's default state is our cards list prop
  const [filteredDisplay, setFilteredDisplay] = useState(props.newArrayOfThree);

  //handleChange runs each time ther's a change in the input feild
  const handleChange = (e) => {
    // we hold the original list in a new array and convert all the names to lowercase
    // we do this to take away chance of user input error
    // Then we return Old List as an arry of objects to hold this changed list
    let oldList = props.newArrayOfThree.map((person) => {
      return {
        id: person.id,
        forLocation: person.forLocation.toLowerCase(),
        cardType: person.cardType,
        expirationDate: person.expirationDate,
        amount: person.amount,
        discount: person.discount,
        visitsUntilReward: person.visitsUntilReward,
      };
    });
    // if the input bar is not empty, run the following
    //esle if it's empty, setFilterDisplay to the original list prop
    if (e !== "") {
      let newList = [];
      //setCard keeps track of any changes in the input
      setWord(e);
      //newList is an array that holds the persons that meet the search criteria.
      newList = oldList.filter((person) =>
        // we call the includes method and pass in the 'word' state in lowercase
        //this checks if our oldList contains cards withthe 'word in its name
        person.forLocation.includes(word.toLowerCase())
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
        {filteredDisplay.map((person, i) => (
          <div id="search_card" key={i}>
            <div>
              <h4>{person.cardType}</h4>
              {/* <h4> {props.card.id}</h4> */}
              <h3>
                <span className="card-for">{person.forLocation}</span>
              </h3>
              {/* // COnditionally render AMount  */}
              {person.amount && <p>Amount: ${person.amount}</p>}
              {/* COnditionally render discoung */}
              {person.discount && <p>Discount: {person.discount} OFF</p>}
              {/* Conditially render LRewards */}
              {person.visitsUntilReward && (
                <p>Visits until Reward: {person.visitsUntilReward}</p>
              )}
              <p>{person.expirationDate}</p>
              <button
                type="button"
                onClick={() => props.deleteCard(person.id, person.cardType)}
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
