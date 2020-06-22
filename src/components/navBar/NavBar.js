import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/");
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
          <li>
            <span className="nav-link"> </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
