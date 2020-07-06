import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
const LoyaltyRewardCard = (props) => {
  return (
    <div className="Loyalty_style">
      <h5>{props.loyaltyReward.cardType}</h5>
      <div className="card-content">
        <h3>
          <span className="card-for">{props.loyaltyReward.forLocation}</span>
        </h3>
        <h2>Visits until Reward: {props.loyaltyReward.visitsUntilReward}</h2>
        <p>Expiration: {props.loyaltyReward.expirationDate}</p>
        {/* <p>Notes: {props.loyaltyReward.notes}</p> */}
        <div className="btnBox">
          <Link to={`/loyaltyRewardsCards/${props.loyaltyReward.id}`}>
            <Button id="LoyaltyRewardButton">Details</Button>
          </Link>
          <Button
            id="LoyaltyRewardButton"
            type="button"
            onClick={() =>
              props.history.push(
                `/loyaltyRewardsCards/${props.loyaltyReward.id}/edit`
              )
            }
          >
            Edit
          </Button>
          <Button
            id="deletebtn"
            color="danger"
            type="button"
            onClick={() =>
              props.deleteLoyaltyRewardCard(props.loyaltyReward.id)
            }
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyRewardCard;
