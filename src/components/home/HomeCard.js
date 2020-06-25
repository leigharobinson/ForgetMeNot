// import React, { useState } from "react";
// import "./HomeCard.css";

// const HomeCard = (props) => {
//   const [word, setWord] = useState("");
//   const [filteredDisplay, setFilteredDisplay] = useState(props.card);

//   const handlechange = (e) => {
//     let oldList = props.card.map((filteredCard) => {
//       return {
//         id: filteredCard.id,
//         forLocation: filteredCard.forLocation.toLowerCase(),
//         cardType: filteredCard.cardType,
//         expirationDate: filteredCard.expirationDate,
//         amount: filteredCard.amount,
//         discount: filteredCard.discount,
//         visitsUntilReward: filteredCard.visitsUntilReward,
//       };
//     });

//     if (e !== "") {
//       let newList = [];
//       setWord(e);
//       newList = oldList.filter((filteredCard) =>
//         filteredCard.forLocation.includes(word.toLowerCase())
//       );
//       setFilteredDisplay(newList);
//     } else {
//       setFilteredDisplay(props.card);
//     }
//   };
//   return (
//     <>
//       {/* <div>
//         Search{" "}
//         <input
//           placeholder="Search"
//           onChange={(e) => handlechange(e.target.value)}
//         />
//       </div> */}
//       <div id="home_card">
//         <div>
//           {/* //TODO: SIngle Card Layout  */}
//           <div className="card-content">
//             <h4>{props.card.cardType}</h4>
//             {/* <h4> {props.card.id}</h4> */}
//             <h3>
//               <span className="card-for">{props.card.forLocation}</span>
//             </h3>
//             {/* // COnditionally render AMount  */}
//             {props.card.amount && <p>Amount: ${props.card.amount}</p>}
//             {/* COnditionally render discoung */}
//             {props.card.discount && <p>Discount: {props.card.discount} OFF</p>}
//             {/* Conditially render LRewards */}
//             {props.card.visitsUntilReward && (
//               <p>Visits until Reward: {props.card.visitsUntilReward}</p>
//             )}
//             <p>Expiration: {props.card.expirationDate}</p>

//             <button
//               type="button"
//               onClick={() =>
//                 props.deleteCard(props.card.id, props.card.cardType)
//               }
//             >
//               Delete
//             </button>
//             <hr />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomeCard;
