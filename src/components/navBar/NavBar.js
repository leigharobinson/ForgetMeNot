import React from "react";

import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  const handleLogout = () => {
    props.clearUser();
  };
  return (
    <header>
      <h1 className="site-title">
        Forget Me Not
        <br />
        <small>Gift Cards, Coupons, Rewards & More!</small>
      </h1>
      <nav>
        <ul className="container">
          {/* <li>
            <Link className="nav-link" to="/homeCard">
              Home Card
            </Link>
          </li> */}
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/giftCards">
              Gift Cards
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/coupons">
              Coupons
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/loyaltyRewardsCards">
              Loyalty Reward Cards
            </Link>
          </li>
          {/* //TODO: make a CRUD Profile page */}
          {/* <li>
            <Link className="nav-link" to="/profile">
              User Profile
            </Link>
          </li> */}

          <button className="logout btn-nomore" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
