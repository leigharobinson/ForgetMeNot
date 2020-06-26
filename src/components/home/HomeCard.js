// import React from "react";
// import "./HomeCard.css";
// import { Button } from "reactstrap";

// const HomeCard = (props) => {
//   return (
//     <>
//       <div id="home_card">
//         <div>
//           {/* //TODO: SIngle Card Layout  */}
//           <div className="card-content">
//             <h5>{props.card.cardType}</h5>
//             {/* <h4> {props.card.id}</h4> */}
//             <h3>
//               <span className="card-for">{props.card.forLocation}</span>
//             </h3>
//             {/* // COnditionally render AMount  */}
//             {props.card.amount && <h2>Amount: ${props.card.amount}</h2>}
//             {/* COnditionally render discoung */}
//             {props.card.discount && (
//               <h2>Discount: {props.card.discount} OFF</h2>
//             )}
//             {/* Conditially render LRewards */}
//             {props.card.visitsUntilReward && (
//               <h2>Visits until Reward: {props.card.visitsUntilReward}</h2>
//             )}
//             <p>Expiration: {props.card.expirationDate}</p>

//             <Button
//               color="danger"
//               type="button"
//               onClick={() =>
//                 props.deleteCard(props.card.id, props.card.cardType)
//               }
//             >
//               Delete
//             </Button>
//             <hr />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomeCard;
